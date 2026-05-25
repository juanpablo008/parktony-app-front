import { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import { vehicleTypes, paymentMethods, mockSpacesConfig } from '../../utils/mockData';
import { formatCurrency, calculateFee } from '../../utils/formatters';

const ParkingControl = () => {
  const [activeTab, setActiveTab] = useState('entry');
  const [entryForm, setEntryForm] = useState({
    plate: '',
    vehicleType: '',
  });
  const [exitForm, setExitForm] = useState({
    searchPlate: '',
    discount: '',
    paymentMethod: '',
  });

  // Mock vehicle found on search
  const [foundVehicle, setFoundVehicle] = useState(null);

  const handleSearch = () => {
    if (exitForm.searchPlate) {
      // Mock search result
      setFoundVehicle({
        plate: exitForm.searchPlate,
        type: 'Carro',
        entryTime: new Date(Date.now() - 2.25 * 60 * 60 * 1000),
        exitTime: new Date(),
        rate: 3000,
      });
    }
  };

  const calculateTotal = () => {
    if (!foundVehicle) return 0;
    const baseFee = calculateFee(foundVehicle.entryTime, foundVehicle.exitTime, foundVehicle.rate);
    const discount = parseFloat(exitForm.discount) || 0;
    return baseFee - discount;
  };

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex space-x-2 border-b border-neutral-200">
        <button
          onClick={() => setActiveTab('entry')}
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === 'entry'
              ? 'text-primary-dark border-b-2 border-primary-dark'
              : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          Registrar Ingreso
        </button>
        <button
          onClick={() => setActiveTab('exit')}
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === 'exit'
              ? 'text-primary-dark border-b-2 border-primary-dark'
              : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          Registrar Salida
        </button>
      </div>

      {/* Entry Tab */}
      {activeTab === 'entry' && (
        <Card header="Registrar Ingreso de Vehículo">
          <div className="space-y-4">
            <Input
              label="Placa del vehículo"
              placeholder="ABC123"
              value={entryForm.plate}
              onChange={(e) => setEntryForm({ ...entryForm, plate: e.target.value.toUpperCase() })}
              required
            />

            <Select
              label="Tipo de vehículo"
              options={vehicleTypes}
              value={entryForm.vehicleType}
              onChange={(e) => setEntryForm({ ...entryForm, vehicleType: e.target.value })}
              required
            />

            {entryForm.vehicleType && (
              <div className="mt-4 p-4 bg-neutral-50 rounded-lg">
                <h4 className="text-sm font-medium text-neutral-700 mb-2">Disponibilidad actual</h4>
                {Object.entries(mockSpacesConfig).map(([key, config]) => (
                  <div key={key} className="flex items-center justify-between py-2">
                    <span className="text-sm text-neutral-600 capitalize">{key}s:</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-neutral-200 rounded-full h-2">
                        <div
                          className="bg-primary-light h-2 rounded-full"
                          style={{ width: `${(config.occupied / config.total) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">
                        {config.occupied}/{config.total}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex space-x-3 mt-6">
              <Button variant="secondary" onClick={() => setEntryForm({ plate: '', vehicleType: '' })}>
                Cancelar
              </Button>
              <Button variant="primary">
                Registrar Ingreso
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Exit Tab */}
      {activeTab === 'exit' && (
        <Card header="Registrar Salida de Vehículo">
          <div className="space-y-4">
            <div className="flex space-x-2">
              <div className="flex-1">
                <Input
                  label="Buscar por placa"
                  placeholder="ABC123"
                  value={exitForm.searchPlate}
                  onChange={(e) => setExitForm({ ...exitForm, searchPlate: e.target.value.toUpperCase() })}
                />
              </div>
              <div className="pt-6">
                <Button variant="primary" onClick={handleSearch}>
                  Buscar
                </Button>
              </div>
            </div>

            {foundVehicle && (
              <div className="mt-6 p-4 bg-neutral-50 rounded-lg space-y-3">
                <h4 className="font-semibold text-neutral-900">Información del vehículo</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-neutral-600">Placa:</span>
                    <span className="ml-2 font-medium">{foundVehicle.plate}</span>
                  </div>
                  <div>
                    <span className="text-neutral-600">Tipo:</span>
                    <span className="ml-2 font-medium">{foundVehicle.type}</span>
                  </div>
                  <div>
                    <span className="text-neutral-600">Hora ingreso:</span>
                    <span className="ml-2 font-medium">
                      {foundVehicle.entryTime.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-600">Hora salida:</span>
                    <span className="ml-2 font-medium">
                      {foundVehicle.exitTime.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-600">Tarifa:</span>
                    <span className="ml-2 font-medium">{formatCurrency(foundVehicle.rate)}/hora</span>
                  </div>
                  <div className="col-span-2 mt-2 pt-2 border-t border-neutral-200">
                    <span className="text-lg font-bold text-primary-dark">
                      TOTAL A PAGAR: {formatCurrency(calculateTotal())}
                    </span>
                  </div>
                </div>

                <Input
                  label="Descuento (opcional)"
                  type="number"
                  placeholder="0"
                  value={exitForm.discount}
                  onChange={(e) => setExitForm({ ...exitForm, discount: e.target.value })}
                />

                <Select
                  label="Método de pago"
                  options={paymentMethods}
                  value={exitForm.paymentMethod}
                  onChange={(e) => setExitForm({ ...exitForm, paymentMethod: e.target.value })}
                  required
                />

                <div className="flex space-x-3 mt-6">
                  <Button variant="secondary" onClick={() => {
                    setFoundVehicle(null);
                    setExitForm({ searchPlate: '', discount: '', paymentMethod: '' });
                  }}>
                    Cancelar
                  </Button>
                  <Button variant="primary">
                    Procesar Salida
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  );
};

export default ParkingControl;
