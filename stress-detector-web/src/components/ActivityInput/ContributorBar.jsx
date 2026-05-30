import PropTypes from "prop-types";

function ContributorBar({ label, value, width }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4 text-xs font-semibold">
        <span className="text-zinc-300">{label}</span>
        <span className="text-red-400">+{value}%</span>
      </div>
      <div className="h-1 rounded-full bg-zinc-700">
        <div className="h-full rounded-full bg-red-400" style={{ width }} />
      </div>
    </div>
  );
}

ContributorBar.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  width: PropTypes.string.isRequired,
};

export default ContributorBar;
