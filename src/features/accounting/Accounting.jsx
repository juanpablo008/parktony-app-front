import { useState } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import Table from '../../components/ui/Table';
import Badge from '../../components/ui/Badge';
import { mockTransactions, mockRevenueByVehicleType, mockRevenueByPaymentMethod, vehicleTypes, paymentMethods } from '../../utils/mockData';
import { formatCurrency, formatDate } from '../../utils/formatters';
import { DollarSign } from 'lucide-react';

const Accounting = () => {
  const [filters, setFilters] = useState({
    startDate: '2026-03-01',
    endDate: '2026-03-27',
    vehicleType: '',
    paymentMethod: '',
  });

  const COLORS = ['#123656', '#17aec5', '#6b7280', '#9ca3af', '#d1d5db'];

  // Summary stats
  const totalRevenue = 1200000;
  const cashRevenue = 450000;
  const cardRevenue = 600000;
  const otherRevenue = 150000;

  const summaryCards = [
    { title: 'Total', amount: totalRevenue, color: 'bg-primary-dark' },
    { title: 'Efectivo', amount: cashRevenue, color: 'bg-green-600' },
    { title: 'Tarjeta', amount: cardRevenue, color: 'bg-blue-600' },
    { title: 'QR/Transfer', amount: otherRevenue, color: 'bg-purple-600' },
  ];

  const transactionColumns = [
    { header: 'Fecha', accessor: 'date' },
    { header: 'Hora', accessor: 'time' },
    { header: 'Placa', accessor: 'plate', render: (row) => <span className="font-semibold">{row.plate}</span> },
    { header: 'Tipo', accessor: 'type', render: (row) => <Badge variant="primary" size="sm">{row.type}</Badge> },
    { header: 'Monto', accessor: 'amount', render: (row) => <span className="font-semibold text-green-600">{formatCurrency(row.amount)}</span> },
    { header: 'Pago', accessor: 'paymentMethod' },
  ];

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card header="Filtros">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Input
            label="Fecha inicio"
            type="date"
            value={filters.startDate}
            onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
          />
          <Input
            label="Fecha fin"
            type="date"
            value={filters.endDate}
            onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
          />
          <Select
            label="Tipo de vehículo"
            options={[{ value: '', label: 'Todos' }, ...vehicleTypes]}
            value={filters.vehicleType}
            onChange={(e) => setFilters({ ...filters, vehicleType: e.target.value })}
          />
          <Select
            label="Medio de pago"
            options={[{ value: '', label: 'Todos' }, ...paymentMethods]}
            value={filters.paymentMethod}
            onChange={(e) => setFilters({ ...filters, paymentMethod: e.target.value })}
          />
        </div>
        <div className="flex space-x-3 mt-4">
          <Button variant="primary">Aplicar Filtros</Button>
          <Button variant="outline">Exportar PDF</Button>
        </div>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {summaryCards.map((card, index) => (
          <div key={index} className={`${card.color} text-white rounded-lg p-6 shadow-lg`}>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium opacity-90">{card.title}</p>
              <DollarSign className="w-6 h-6 opacity-75" />
            </div>
            <p className="text-2xl font-bold">{formatCurrency(card.amount)}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart - Revenue by Vehicle Type */}
        <Card header="Ingresos por Tipo de Vehículo">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockRevenueByVehicleType}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="type" stroke="#6b7280" style={{ fontSize: '12px' }} />
              <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
              <Tooltip formatter={(value) => formatCurrency(value)} />
              <Bar dataKey="amount" fill="#17aec5" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Pie Chart - Revenue by Payment Method */}
        <Card header="Distribución por Medio de Pago">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={mockRevenueByPaymentMethod}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="amount"
              >
                {mockRevenueByPaymentMethod.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => formatCurrency(value)} />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Transactions Table */}
      <Card header="Transacciones Recientes">
        <Table columns={transactionColumns} data={mockTransactions} />
        <div className="mt-4 flex justify-center space-x-2">
          <Button variant="secondary" size="sm">Anterior</Button>
          <Button variant="primary" size="sm">1</Button>
          <Button variant="secondary" size="sm">2</Button>
          <Button variant="secondary" size="sm">3</Button>
          <Button variant="secondary" size="sm">Siguiente</Button>
        </div>
      </Card>
    </div>
  );
};

export default Accounting;
