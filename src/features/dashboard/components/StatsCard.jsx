import Card from '../../../components/ui/Card';

const StatsCard = ({ icon: Icon, title, value, subtitle, change }) => {
  return (
    <Card padding={false}>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-neutral-600">{title}</p>
            <p className="text-2xl font-bold text-neutral-900 mt-2">{value}</p>
            {subtitle && (
              <p className="text-sm text-neutral-500 mt-1">{subtitle}</p>
            )}
          </div>
          <div className="p-3 bg-primary-light bg-opacity-10 rounded-lg">
            <Icon className="w-8 h-8 text-primary-dark" />
          </div>
        </div>
        {change && (
          <div className="mt-4 flex items-center text-sm">
            <span className={change >= 0 ? 'text-green-600' : 'text-red-600'}>
              {change >= 0 ? '+' : ''}{change}%
            </span>
            <span className="text-neutral-500 ml-2">vs ayer</span>
          </div>
        )}
      </div>
    </Card>
  );
};

export default StatsCard;
