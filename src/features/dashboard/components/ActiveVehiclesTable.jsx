import Table from '../../../components/ui/Table';
import Badge from '../../../components/ui/Badge';

const ActiveVehiclesTable = ({ vehicles }) => {
  const columns = [
    {
      header: 'Placa',
      accessor: 'plate',
      render: (row) => (
        <span className="font-semibold">{row.plate}</span>
      ),
    },
    {
      header: 'Tipo',
      accessor: 'type',
      render: (row) => (
        <Badge variant="primary" size="sm">
          {row.type}
        </Badge>
      ),
    },
    {
      header: 'Hora de Ingreso',
      accessor: 'entryTime',
    },
    {
      header: 'Duración',
      accessor: 'duration',
      render: (row) => (
        <span className="text-neutral-600">{row.duration}</span>
      ),
    },
  ];

  return <Table columns={columns} data={vehicles} />;
};

export default ActiveVehiclesTable;
