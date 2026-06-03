import { TrendingUp, TrendingDown } from "lucide-react";

function StatsCard({ 
  title, 
  value, 
  maxScore = 100,
  color = "text-red-400", 
  subtitle,
  trend
}) {
  const isTrendUp = trend && trend > 0;
  
  return (
    <div className="bg-zinc-900/70 border border-white/10 rounded-2xl p-5">
      <p className="text-xs uppercase text-zinc-400 mb-3">
        {title}
      </p>

      <div className="flex items-end gap-1">
        <h2 className={`text-5xl font-bold ${color}`}>
          {value}
        </h2>

        <span className="text-zinc-400 mb-2">
          /{maxScore}
        </span>
      </div>

      <div className="flex items-center justify-between mt-3">
        <p className="text-sm text-zinc-500">
          {subtitle}
        </p>
        
        {trend !== undefined && (
          <div className={`flex items-center gap-1 text-sm font-medium ${
            isTrendUp ? "text-green-400" : "text-red-400"
          }`}>
            {isTrendUp ? (
              <TrendingUp size={14} />
            ) : (
              <TrendingDown size={14} />
            )}
            <span>{Math.abs(trend)}%</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default StatsCard;