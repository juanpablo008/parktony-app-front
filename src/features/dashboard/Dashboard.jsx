import { Warehouse, TrendingUp, DollarSign, Car } from 'lucide-react';
import StatsCard from './components/StatsCard';
import RevenueChart from './components/RevenueChart';
import ActiveVehiclesTable from './components/ActiveVehiclesTable';
import Card from '../../components/ui/Card';
import { mockStats, mockRevenueData, mockActiveVehicles } from '../../utils/mockData';
import { formatCurrency, formatPercentage } from '../../utils/formatters';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          icon={Warehouse}
          title="Total Espacios"
          value={mockStats.totalSpaces}
          subtitle="Capacidad total"
        />
        <StatsCard
          icon={TrendingUp}
          title="Ocupación"
          value={formatPercentage(mockStats.occupancyPercent)}
          subtitle={`${Math.round(mockStats.totalSpaces * mockStats.occupancyPercent / 100)} ocupados`}
          change={5}
        />
        <StatsCard
          icon={DollarSign}
          title="Ingresos Hoy"
          value={formatCurrency(mockStats.todayRevenue)}
          subtitle="Acumulado del día"
          change={12}
        />
        <StatsCard
          icon={Car}
          title="Vehículos Activos"
          value={mockStats.activeVehicles}
          subtitle="En el parqueadero"
        />
      </div>

      {/* Revenue Chart */}
      <Card header="Ingresos - Últimos 7 Días">
        <RevenueChart data={mockRevenueData} />
      </Card>

      {/* Active Vehicles Table */}
      <Card header="Vehículos Activos">
        <ActiveVehiclesTable vehicles={mockActiveVehicles} />
      </Card>
    </div>
  );
};

export default Dashboard;
