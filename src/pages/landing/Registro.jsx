import { useState, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, CreditCard, AlertCircle, Check, X } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import SearchableSelect from '../../components/ui/SearchableSelect';
import Card from '../../components/ui/Card';
import { useWompi } from '../../hooks/useWompi';
import { getPlanPrice, formatPrice } from '../../config/wompi';
import { departamentos, ciudadesPorDepartamento } from '../../data/colombiaData';

const Registro = () => {
  const location = useLocation();
  const selectedPlan = location.state?.plan || 'Profesional';
  const { openCheckout, isLoading, error: wompiError, isScriptLoaded } = useWompi();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 - Datos de la empresa
    razonSocial: '',
    companyName: '',
    documentType: '', // NIT o Documento de Identidad
    documentNumber: '',
    departamento: '',
    city: '',
    // Dirección detallada
    addressType: '', // Calle, Carrera, Avenida, etc.
    addressNumber1: '', // Número de vía principal (ej: 10)
    addressNumber2: '', // Número intermedio (ej: 20)
    addressNumber3: '', // Número de placa (ej: 30)
    addressComplement: '', // Apartamento, Interior, etc. (opcional)
    neighborhood: '', // Barrio (opcional)
    phone: '',

    // Step 2 - Datos del administrador
    adminName: '',
    adminEmail: '',
    adminPassword: '',
    adminPasswordConfirm: '',

    // Step 3 - Plan
    plan: selectedPlan,
  });

  const [errors, setErrors] = useState({});

  const plans = [
    { value: 'Básico', label: 'Básico - $99.000/mes' },
    { value: 'Profesional', label: 'Profesional - $199.000/mes' },
    { value: 'Empresarial', label: 'Empresarial - $349.000/mes' },
  ];

  const razonSocialOptions = [
    { value: 'Natural', label: 'Persona Natural' },
    { value: 'Jurídica', label: 'Persona Jurídica' },
  ];

  // Tipos de documento para Persona Natural
  const documentTypesNatural = [
    { value: 'CC', label: 'Cédula de Ciudadanía' },
    { value: 'CE', label: 'Cédula de Extranjería' },
    { value: 'PP', label: 'Pasaporte' },
    { value: 'TI', label: 'Tarjeta de Identidad' },
  ];

  // Tipos de documento para Persona Jurídica
  const documentTypesJuridica = [
    { value: 'NIT', label: 'NIT (Número de Identificación Tributaria)' },
  ];

  // Tipos de vía para direcciones en Colombia
  const addressTypes = [
    { value: 'Calle', label: 'Calle' },
    { value: 'Carrera', label: 'Carrera' },
    { value: 'Avenida', label: 'Avenida' },
    { value: 'Diagonal', label: 'Diagonal' },
    { value: 'Transversal', label: 'Transversal' },
    { value: 'Circular', label: 'Circular' },
    { value: 'Autopista', label: 'Autopista' },
    { value: 'Kilómetro', label: 'Kilómetro' },
  ];

  // Tipos de documento disponibles según razón social
  const availableDocumentTypes = useMemo(() => {
    if (formData.razonSocial === 'Natural') {
      return documentTypesNatural;
    } else if (formData.razonSocial === 'Jurídica') {
      return documentTypesJuridica;
    }
    return [];
  }, [formData.razonSocial]);

  // Filtrar ciudades según departamento seleccionado
  const availableCities = useMemo(() => {
    if (!formData.departamento) return [];
    return ciudadesPorDepartamento[formData.departamento] || [];
  }, [formData.departamento]);

  // Funciones de validación
  const validateField = (name, value) => {
    const validations = {
      companyName: (val) => {
        if (!val.trim()) return 'El nombre del parqueadero es obligatorio';
        if (!/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,-]+$/.test(val)) return 'Solo se permiten letras, números, espacios y caracteres básicos';
        if (val.length < 3) return 'Debe tener al menos 3 caracteres';
        return '';
      },
      documentNumber: (val) => {
        if (!val.trim()) return 'El número de documento es obligatorio';
        if (formData.documentType === 'NIT') {
          if (!/^\d{9,10}-?\d?$/.test(val)) return 'Formato de NIT inválido (ejemplo: 123456789-0)';
        } else if (formData.documentType === 'CC' || formData.documentType === 'CE' || formData.documentType === 'TI') {
          if (!/^\d{6,12}$/.test(val)) return 'El documento debe contener solo números (6-12 dígitos)';
        } else if (formData.documentType === 'PP') {
          if (!/^[a-zA-Z0-9]{6,12}$/.test(val)) return 'Formato de pasaporte inválido (6-12 caracteres alfanuméricos)';
        }
        return '';
      },
      phone: (val) => {
        if (!val.trim()) return 'El teléfono es obligatorio';
        if (!/^[\d\s+()-]{10,15}$/.test(val)) return 'Formato de teléfono inválido (10-15 dígitos)';
        return '';
      },
      addressNumber1: (val) => {
        if (!val.trim()) return 'La vía principal es obligatoria';
        if (!/^\d+[A-Za-z]?$/.test(val)) return 'Solo números o número seguido de letra (ej: 10 o 10A)';
        return '';
      },
      addressNumber2: (val) => {
        if (!val.trim()) return 'El número es obligatorio';
        if (!/^\d+[A-Za-z]?$/.test(val)) return 'Solo números o número seguido de letra (ej: 20 o 20B)';
        return '';
      },
      addressNumber3: (val) => {
        if (!val.trim()) return 'La placa es obligatoria';
        if (!/^\d+[A-Za-z]?$/.test(val)) return 'Solo números o número seguido de letra (ej: 30 o 30C)';
        return '';
      },
      neighborhood: (val) => {
        if (!val.trim()) return 'El barrio es obligatorio';
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s.,-]+$/.test(val)) return 'Solo se permiten letras y espacios';
        if (val.length < 2) return 'Debe tener al menos 2 caracteres';
        return '';
      },
      adminName: (val) => {
        if (!val.trim()) return 'El nombre completo es obligatorio';
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(val)) return 'Solo se permiten letras y espacios';
        if (val.trim().split(' ').length < 2) return 'Ingrese nombre y apellido';
        return '';
      },
      adminEmail: (val) => {
        if (!val.trim()) return 'El email es obligatorio';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return 'Formato de email inválido';
        return '';
      },
      adminPassword: (val) => {
        if (!val) return 'La contraseña es obligatoria';
        if (val.length < 8) return 'La contraseña debe tener al menos 8 caracteres';
        if (!/[A-Z]/.test(val)) return 'Debe incluir al menos una mayúscula';
        if (!/[a-z]/.test(val)) return 'Debe incluir al menos una minúscula';
        if (!/[0-9]/.test(val)) return 'Debe incluir al menos un número';
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(val)) return 'Debe incluir al menos un carácter especial';
        return '';
      },
      adminPasswordConfirm: (val) => {
        if (!val) return 'Confirme su contraseña';
        if (val !== formData.adminPassword) return 'Las contraseñas no coinciden';
        return '';
      },
    };

    if (validations[name]) {
      return validations[name](value);
    }
    return '';
  };

  // Construir dirección completa
  const getFullAddress = () => {
    if (!formData.addressType || !formData.addressNumber1 || !formData.addressNumber2 || !formData.addressNumber3) {
      return '';
    }

    let address = `${formData.addressType} ${formData.addressNumber1} # ${formData.addressNumber2}-${formData.addressNumber3}`;

    if (formData.addressComplement) {
      address += `, ${formData.addressComplement}`;
    }

    if (formData.neighborhood) {
      address += `, Barrio ${formData.neighborhood}`;
    }

    return address;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Actualizar el valor
    if (name === 'departamento') {
      setFormData(prev => ({ ...prev, [name]: value, city: '' }));
      setErrors(prev => ({ ...prev, [name]: '', city: '' }));
    } else if (name === 'razonSocial') {
      setFormData(prev => ({ ...prev, [name]: value, documentType: '', documentNumber: '' }));
      setErrors(prev => ({ ...prev, [name]: '', documentType: '', documentNumber: '' }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));

      // Validar el campo en tiempo real (solo si ya hay un error o si el campo tiene valor)
      if (errors[name] || value) {
        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
      }
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  // Validaciones individuales de contraseña para mostrar en UI
  const passwordRequirements = useMemo(() => {
    const password = formData.adminPassword;
    return [
      {
        label: 'Mínimo 8 caracteres',
        met: password.length >= 8,
      },
      {
        label: 'Al menos una mayúscula (A-Z)',
        met: /[A-Z]/.test(password),
      },
      {
        label: 'Al menos una minúscula (a-z)',
        met: /[a-z]/.test(password),
      },
      {
        label: 'Al menos un número (0-9)',
        met: /[0-9]/.test(password),
      },
      {
        label: 'Al menos un carácter especial (!@#$%...)',
        met: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      },
    ];
  }, [formData.adminPassword]);

  // Validar Step 1
  const isStep1Valid = () => {
    const fieldsValid = (
      formData.razonSocial &&
      formData.companyName.trim() &&
      formData.documentType &&
      formData.documentNumber.trim() &&
      formData.departamento &&
      formData.city &&
      formData.addressType &&
      formData.addressNumber1.trim() &&
      formData.addressNumber2.trim() &&
      formData.addressNumber3.trim() &&
      formData.neighborhood.trim() &&
      formData.phone.trim()
    );

    // Verificar que no haya errores en los campos del step 1
    const step1Fields = ['companyName', 'documentNumber', 'phone', 'addressNumber1', 'addressNumber2', 'addressNumber3', 'neighborhood'];
    const noErrors = step1Fields.every(field => !validateField(field, formData[field]));

    return fieldsValid && noErrors;
  };

  // Validar Step 2
  const isStep2Valid = () => {
    const fieldsValid = (
      formData.adminName.trim() &&
      formData.adminEmail.trim() &&
      formData.adminPassword.length >= 8 &&
      formData.adminPasswordConfirm.length >= 8 &&
      formData.adminPassword === formData.adminPasswordConfirm
    );

    // Verificar que no haya errores en los campos del step 2
    const step2Fields = ['adminName', 'adminEmail', 'adminPassword', 'adminPasswordConfirm'];
    const noErrors = step2Fields.every(field => !validateField(field, formData[field]));

    return fieldsValid && noErrors;
  };

  const handleNext = (e) => {
    e.preventDefault();

    // Validar todos los campos del step actual antes de continuar
    if (step === 1) {
      const step1Fields = ['companyName', 'documentNumber', 'phone', 'addressNumber1', 'addressNumber2', 'addressNumber3', 'neighborhood'];
      const newErrors = {};

      step1Fields.forEach(field => {
        const error = validateField(field, formData[field]);
        if (error) newErrors[field] = error;
      });

      if (Object.keys(newErrors).length > 0) {
        setErrors(prev => ({ ...prev, ...newErrors }));
        return;
      }
    } else if (step === 2) {
      const step2Fields = ['adminName', 'adminEmail', 'adminPassword', 'adminPasswordConfirm'];
      const newErrors = {};

      step2Fields.forEach(field => {
        const error = validateField(field, formData[field]);
        if (error) newErrors[field] = error;
      });

      if (Object.keys(newErrors).length > 0) {
        setErrors(prev => ({ ...prev, ...newErrors }));
        return;
      }
    }

    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmitToPayment = async (e) => {
    e.preventDefault();

    // Validar que las contraseñas coincidan
    if (formData.adminPassword !== formData.adminPasswordConfirm) {
      alert('Las contraseñas no coinciden');
      setStep(2);
      return;
    }

    // Construir datos completos con la dirección formateada
    const completeFormData = {
      ...formData,
      address: getFullAddress(), // Dirección completa construida
    };

    // Abrir el checkout de Wompi
    await openCheckout(completeFormData);
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-primary-dark hover:text-primary-light mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
          <h1 className="text-3xl font-bold text-neutral-900">Crear Cuenta en Parktony</h1>
          <p className="text-neutral-600 mt-2">Completa el registro para comenzar tu prueba gratis de 14 días</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className={`flex items-center ${step >= 1 ? 'text-primary-dark' : 'text-neutral-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary-dark text-white' : 'bg-neutral-200'}`}>
              {step > 1 ? <CheckCircle className="w-5 h-5" /> : '1'}
            </div>
            <span className="ml-2 hidden sm:inline">Empresa</span>
          </div>
          <div className={`w-12 h-0.5 mx-2 ${step >= 2 ? 'bg-primary-dark' : 'bg-neutral-200'}`} />
          <div className={`flex items-center ${step >= 2 ? 'text-primary-dark' : 'text-neutral-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary-dark text-white' : 'bg-neutral-200'}`}>
              {step > 2 ? <CheckCircle className="w-5 h-5" /> : '2'}
            </div>
            <span className="ml-2 hidden sm:inline">Administrador</span>
          </div>
          <div className={`w-12 h-0.5 mx-2 ${step >= 3 ? 'bg-primary-dark' : 'bg-neutral-200'}`} />
          <div className={`flex items-center ${step >= 3 ? 'text-primary-dark' : 'text-neutral-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-primary-dark text-white' : 'bg-neutral-200'}`}>
              3
            </div>
            <span className="ml-2 hidden sm:inline">Pago</span>
          </div>
        </div>

        {/* Form Card */}
        <Card>
          <form onSubmit={step === 3 ? handleSubmitToPayment : handleNext}>
            {/* Step 1 - Datos de la Empresa */}
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">Información de tu Parqueadero</h2>

                <Select
                  label="Razón Social"
                  name="razonSocial"
                  options={razonSocialOptions}
                  value={formData.razonSocial}
                  onChange={handleChange}
                  placeholder="Seleccione tipo de persona"
                  required
                />

                <Input
                  label="Nombre del Parqueadero"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Ej: Parqueadero Central"
                  error={errors.companyName}
                  required
                />

                <Select
                  label="Tipo de Documento"
                  name="documentType"
                  options={availableDocumentTypes}
                  value={formData.documentType}
                  onChange={handleChange}
                  placeholder={formData.razonSocial ? 'Seleccione tipo de documento' : 'Primero seleccione razón social'}
                  required
                  disabled={!formData.razonSocial}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Número de Documento"
                    name="documentNumber"
                    value={formData.documentNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={formData.documentType === 'NIT' ? '123456789-0' : '1234567890'}
                    error={errors.documentNumber}
                    required
                    disabled={!formData.documentType}
                  />
                  <Input
                    label="Teléfono"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+57 300 123 4567"
                    error={errors.phone}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <SearchableSelect
                    label="Departamento"
                    name="departamento"
                    options={departamentos}
                    value={formData.departamento}
                    onChange={handleChange}
                    placeholder="Seleccione departamento"
                    required
                  />
                  <SearchableSelect
                    label="Ciudad"
                    name="city"
                    options={availableCities}
                    value={formData.city}
                    onChange={handleChange}
                    placeholder={formData.departamento ? 'Seleccione ciudad' : 'Primero seleccione departamento'}
                    required
                    disabled={!formData.departamento}
                  />
                </div>

                {/* Dirección Detallada */}
                <div className="space-y-4 bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                  <h3 className="text-sm font-semibold text-neutral-900">Dirección del Parqueadero</h3>

                  <Select
                    label="Tipo de Vía"
                    name="addressType"
                    options={addressTypes}
                    value={formData.addressType}
                    onChange={handleChange}
                    placeholder="Seleccione tipo de vía"
                    required
                  />

                  <div className="grid grid-cols-3 gap-3">
                    <Input
                      label="Vía Principal"
                      name="addressNumber1"
                      value={formData.addressNumber1}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="10"
                      error={errors.addressNumber1}
                      required
                    />
                    <Input
                      label="Número"
                      name="addressNumber2"
                      value={formData.addressNumber2}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="20"
                      error={errors.addressNumber2}
                      required
                    />
                    <Input
                      label="Placa"
                      name="addressNumber3"
                      value={formData.addressNumber3}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="30"
                      error={errors.addressNumber3}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Complemento (Opcional)"
                      name="addressComplement"
                      value={formData.addressComplement}
                      onChange={handleChange}
                      placeholder="Apto 301, Interior 2, etc."
                    />
                    <Input
                      label="Barrio"
                      name="neighborhood"
                      value={formData.neighborhood}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="El Poblado"
                      error={errors.neighborhood}
                      required
                    />
                  </div>

                  {getFullAddress() && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-xs font-medium text-blue-900 mb-1">Vista previa de dirección:</p>
                      <p className="text-sm text-blue-800 font-medium">{getFullAddress()}</p>
                    </div>
                  )}
                </div>

                <div className="flex justify-end mt-6">
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={!isStep1Valid()}
                  >
                    Continuar
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2 - Datos del Administrador */}
            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">Datos del Administrador</h2>

                <Input
                  label="Nombre Completo"
                  name="adminName"
                  value={formData.adminName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Juan Pérez"
                  error={errors.adminName}
                  required
                />

                <Input
                  label="Email"
                  name="adminEmail"
                  type="email"
                  value={formData.adminEmail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="admin@miparqueadero.com"
                  error={errors.adminEmail}
                  required
                />

                <div>
                  <Input
                    label="Contraseña"
                    name="adminPassword"
                    type="password"
                    value={formData.adminPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Mínimo 8 caracteres"
                    error={errors.adminPassword}
                    required
                  />

                  {/* Lista de requisitos de contraseña */}
                  {formData.adminPassword && (
                    <div className="mt-3 p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                      <p className="text-xs font-semibold text-neutral-700 mb-2">Requisitos de la contraseña:</p>
                      <div className="space-y-1">
                        {passwordRequirements.map((req, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            {req.met ? (
                              <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            ) : (
                              <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                            )}
                            <span className={`text-xs ${req.met ? 'text-green-600 font-medium' : 'text-red-500'}`}>
                              {req.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Input
                  label="Confirmar Contraseña"
                  name="adminPasswordConfirm"
                  type="password"
                  value={formData.adminPasswordConfirm}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Repite tu contraseña"
                  error={errors.adminPasswordConfirm}
                  required
                />

                <div className="flex justify-between mt-6">
                  <Button type="button" variant="secondary" onClick={handleBack}>
                    Atrás
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={!isStep2Valid()}
                  >
                    Continuar
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3 - Selección de Plan y Pago */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">Confirma tu Plan y Procede al Pago</h2>

                {/* Modo Demo Alert */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-yellow-900 mb-1">Modo Demo Activo</p>
                      <p className="text-sm text-yellow-800">
                        El pago se simulará automáticamente (no se procesará ningún cargo real).
                        Para activar pagos reales, necesitas crear una cuenta en{' '}
                        <a href="https://comercios.wompi.co/" target="_blank" rel="noopener noreferrer" className="underline font-medium">
                          Wompi Comercios
                        </a>{' '}
                        y configurar tus llaves.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Error de Wompi */}
                {wompiError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-red-800">Error en el pago</p>
                      <p className="text-sm text-red-700 mt-1">{wompiError}</p>
                    </div>
                  </div>
                )}

                <Select
                  label="Plan Seleccionado"
                  name="plan"
                  options={plans}
                  value={formData.plan}
                  onChange={handleChange}
                  required
                />

                <div className="bg-white rounded-lg p-6 border-2 border-primary-light shadow-sm">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-light bg-opacity-10 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-primary-dark" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 text-lg">14 Días Gratis</h3>
                      <p className="text-sm text-neutral-700 mt-1">
                        No se te cobrará nada hoy. Después de tu prueba gratuita,
                        se te cobrará mensualmente hasta que canceles.
                      </p>
                    </div>
                  </div>

                  <div className="bg-neutral-50 rounded-lg p-4 space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-700">Subtotal:</span>
                      <span className="font-semibold text-neutral-900">
                        {formatPrice(getPlanPrice(formData.plan))}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-700">Descuento (14 días gratis):</span>
                      <span className="font-semibold text-green-600">-100%</span>
                    </div>
                    <div className="border-t border-neutral-300 pt-3 flex justify-between items-center">
                      <span className="font-bold text-neutral-900 text-lg">Total hoy:</span>
                      <span className="font-bold text-primary-dark text-2xl">$0</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <CreditCard className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-blue-900 mb-1">Pago Seguro con Wompi</p>
                      <p className="text-sm text-blue-800">
                        Al hacer clic en "Proceder al Pago", se abrirá una ventana segura de Wompi para completar tu registro.
                        Solo necesitas registrar tu método de pago, no se te cobrará durante los primeros 14 días.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-6">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={handleBack}
                    disabled={isLoading}
                  >
                    Atrás
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Procesando Demo...
                      </>
                    ) : (
                      'Completar Registro (Demo)'
                    )}
                  </Button>
                </div>

                <p className="text-xs text-center text-neutral-500 mt-4">
                  Al continuar, aceptas nuestros Términos de Servicio y Política de Privacidad
                </p>
              </div>
            )}
          </form>
        </Card>

        {/* Trust Badges */}
        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-500 mb-2">Pago 100% seguro con Wompi</p>
          <div className="flex items-center justify-center space-x-4 text-neutral-400">
            <span className="text-xs">🔒 SSL Encriptado</span>
            <span className="text-xs">•</span>
            <span className="text-xs">💳 Wompi Colombia</span>
            <span className="text-xs">•</span>
            <span className="text-xs">✓ PCI Compliant</span>
          </div>
          <p className="text-xs text-neutral-400 mt-2">
            Acepta tarjetas de crédito, débito, PSE y Nequi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registro;
