export const mockStats = {
  totalSpaces: 150,
  occupancyPercent: 65,
  todayRevenue: 450000,
  activeVehicles: 98,
};

export const mockActiveVehicles = [
  { id: 1, plate: 'ABC123', type: 'Carro', entryTime: '14:30', duration: '2h 15m' },
  { id: 2, plate: 'XYZ789', type: 'Moto', entryTime: '15:45', duration: '1h 00m' },
  { id: 3, plate: 'DEF456', type: 'Carro', entryTime: '13:15', duration: '3h 30m' },
  { id: 4, plate: 'GHI012', type: 'Buseta', entryTime: '16:00', duration: '0h 45m' },
  { id: 5, plate: 'JKL345', type: 'Moto', entryTime: '14:50', duration: '1h 55m' },
  { id: 6, plate: 'MNO678', type: 'Carro', entryTime: '15:20', duration: '1h 25m' },
  { id: 7, plate: 'PQR901', type: 'Microbus', entryTime: '12:30', duration: '4h 15m' },
  { id: 8, plate: 'STU234', type: 'Moto', entryTime: '16:10', duration: '0h 35m' },
];

export const mockRevenueData = [
  { date: '21/03', amount: 380000 },
  { date: '22/03', amount: 420000 },
  { date: '23/03', amount: 395000 },
  { date: '24/03', amount: 460000 },
  { date: '25/03', amount: 410000 },
  { date: '26/03', amount: 445000 },
  { date: '27/03', amount: 450000 },
];

export const mockSpacesConfig = {
  moto: { total: 50, occupied: 15, rate: 2000 },
  carro: { total: 80, occupied: 42, rate: 3000 },
  buseta: { total: 10, occupied: 3, rate: 5000 },
  microbus: { total: 5, occupied: 2, rate: 6000 },
  bus: { total: 5, occupied: 1, rate: 8000 },
};

export const mockTransactions = [
  { id: 1, date: '27/03/2026', time: '16:45', plate: 'ABC123', type: 'Carro', amount: 6750, paymentMethod: 'Efectivo' },
  { id: 2, date: '27/03/2026', time: '16:30', plate: 'XYZ789', type: 'Moto', amount: 4000, paymentMethod: 'Tarjeta' },
  { id: 3, date: '27/03/2026', time: '16:15', plate: 'DEF456', type: 'Carro', amount: 9000, paymentMethod: 'QR' },
  { id: 4, date: '27/03/2026', time: '15:50', plate: 'GHI012', type: 'Buseta', amount: 10000, paymentMethod: 'Efectivo' },
  { id: 5, date: '27/03/2026', time: '15:30', plate: 'JKL345', type: 'Moto', amount: 2000, paymentMethod: 'Transferencia' },
  { id: 6, date: '27/03/2026', time: '15:00', plate: 'MNO678', type: 'Carro', amount: 6000, paymentMethod: 'Tarjeta' },
  { id: 7, date: '27/03/2026', time: '14:45', plate: 'PQR901', type: 'Microbus', amount: 18000, paymentMethod: 'Efectivo' },
  { id: 8, date: '27/03/2026', time: '14:20', plate: 'STU234', type: 'Moto', amount: 2000, paymentMethod: 'QR' },
  { id: 9, date: '26/03/2026', time: '18:30', plate: 'VWX567', type: 'Carro', amount: 12000, paymentMethod: 'Efectivo' },
  { id: 10, date: '26/03/2026', time: '17:45', plate: 'YZA890', type: 'Moto', amount: 4000, paymentMethod: 'Tarjeta' },
];

export const mockRevenueByVehicleType = [
  { type: 'Motos', amount: 45000 },
  { type: 'Carros', amount: 180000 },
  { type: 'Busetas', amount: 75000 },
  { type: 'Microbuses', amount: 90000 },
  { type: 'Buses', amount: 60000 },
];

export const mockRevenueByPaymentMethod = [
  { method: 'Efectivo', amount: 450000 },
  { method: 'Tarjeta', amount: 600000 },
  { method: 'QR/Transfer', amount: 150000 },
];

export const vehicleTypes = [
  { value: 'moto', label: 'Moto', icon: '🏍️' },
  { value: 'carro', label: 'Carro', icon: '🚗' },
  { value: 'buseta', label: 'Buseta', icon: '🚐' },
  { value: 'microbus', label: 'Microbús', icon: '🚌' },
  { value: 'bus', label: 'Bus', icon: '🚍' },
];

export const paymentMethods = [
  { value: 'efectivo', label: 'Efectivo' },
  { value: 'tarjeta_debito', label: 'Tarjeta de Débito' },
  { value: 'tarjeta_credito', label: 'Tarjeta de Crédito' },
  { value: 'transferencia', label: 'Transferencia' },
  { value: 'qr', label: 'QR (Nequi/Daviplata)' },
  { value: 'cortesia', label: 'Cortesía' },
];
