import { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { mockSpacesConfig, vehicleTypes } from '../../utils/mockData';
import { formatCurrency } from '../../utils/formatters';

const SpacesManagement = () => {
  const [spaces, setSpaces] = useState(mockSpacesConfig);

  const handleCapacityChange = (vehicleType, newCapacity) => {
    setSpaces(prev => ({
      ...prev,
      [vehicleType]: {
        ...prev[vehicleType],
        total: parseInt(newCapacity) || 0,
      },
    }));
  };

  const handleRateChange = (vehicleType, newRate) => {
    setSpaces(prev => ({
      ...prev,
      [vehicleType]: {
        ...prev[vehicleType],
        rate: parseInt(newRate) || 0,
      },
    }));
  };

  const getAvailability = (config) => {
    return config.total - config.occupied;
  };

  const getOccupancyPercent = (config) => {
    if (config.total === 0) return 0;
    return Math.round((config.occupied / config.total) * 100);
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          Configura la capacidad total de espacios y las tarifas por hora para cada tipo de vehículo.
        </p>
      </div>

      {vehicleTypes.map((vehicle) => {
        const config = spaces[vehicle.value];

        return (
          <Card key={vehicle.value}>
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center space-x-3">
                <span className="text-3xl">{vehicle.icon}</span>
                <h3 className="text-xl font-bold text-neutral-900">{vehicle.label.toUpperCase()}</h3>
              </div>

              {/* Occupancy Bar */}
              <div>
                <div className="flex justify-between text-sm text-neutral-600 mb-2">
                  <span>Ocupación actual</span>
                  <span className="font-medium">{getOccupancyPercent(config)}%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-3">
                  <div
                    className="bg-primary-light h-3 rounded-full transition-all duration-300"
                    style={{ width: `${getOccupancyPercent(config)}%` }}
                  />
                </div>
                <p className="text-sm text-neutral-500 mt-1">
                  {config.occupied} ocupados de {config.total} espacios
                </p>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  label="Capacidad total"
                  type="number"
                  value={config.total}
                  onChange={(e) => handleCapacityChange(vehicle.value, e.target.value)}
                  helperText="Número de espacios disponibles"
                />

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Ocupados actual
                  </label>
                  <div className="px-4 py-2 bg-neutral-100 border border-neutral-300 rounded-lg text-neutral-900">
                    {config.occupied}
                  </div>
                  <p className="mt-1 text-sm text-neutral-500">Solo lectura</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Disponibles
                  </label>
                  <div className="px-4 py-2 bg-green-50 border border-green-200 rounded-lg text-green-800 font-semibold">
                    {getAvailability(config)}
                  </div>
                  <p className="mt-1 text-sm text-neutral-500">Calculado automáticamente</p>
                </div>
              </div>

              {/* Tariff */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Tarifa por hora"
                  type="number"
                  value={config.rate}
                  onChange={(e) => handleRateChange(vehicle.value, e.target.value)}
                  helperText="Valor en pesos colombianos"
                />

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Vista previa
                  </label>
                  <div className="px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg">
                    <span className="text-2xl font-bold text-primary-dark">
                      {formatCurrency(config.rate)}
                    </span>
                    <span className="text-neutral-600 ml-2">/ hora</span>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end">
                <Button variant="primary">
                  Guardar Cambios
                </Button>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default SpacesManagement;
