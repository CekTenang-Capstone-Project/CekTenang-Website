import { Clock } from "lucide-react";

function PriorityCard({
  title,
  description,
  level = "URGENT",
  duration,
  stressImpact = "90 Menit",
}) {
  const getLevelColor = (level) => {
    switch (level?.toUpperCase()) {
      case "URGENT":
        return "bg-red-600 text-white";
      case "PENTING":
        return "bg-orange-600 text-white";
      case "SEDANG":
        return "bg-blue-600 text-white";
      default:
        return "bg-red-600 text-white";
    }
  };

  return (
    <div className="bg-zinc-900/70 border border-white/10 rounded-2xl p-5">
      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(level)}`}>
        {level}
      </span>

      <h4 className="font-semibold text-xl mt-4 text-white">
        {title}
      </h4>

      <p className="text-zinc-400 mt-3 text-sm">
        {description}
      </p>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
        <div className="flex items-center gap-2 text-blue-300 text-sm">
          <Clock size={16} />
          <span>{stressImpact}</span>
        </div>
        <span className="text-zinc-500 text-xs">
          {duration}
        </span>
      </div>
    </div>
  );
}

export default PriorityCard;