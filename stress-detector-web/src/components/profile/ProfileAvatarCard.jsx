import { Pencil } from "lucide-react";

function ProfileAvatarCard({ 
  image = "/api/placeholder/120",
  name = "Aryanda",
  role = "Student",
  onEdit
}) {
  return (
    <div className="bg-zinc-900/70 border border-white/10 rounded-2xl p-6">
      <div className="flex flex-col items-center">
        {/* Avatar Container */}
        <div className="relative mb-6">
          <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-blue-400/50 shadow-lg shadow-blue-400/20 bg-zinc-800 flex items-center justify-center">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Edit Button */}
          <button
            onClick={onEdit}
            className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-600 transition-colors rounded-full p-2 shadow-lg"
            aria-label="Edit photo"
          >
            <Pencil size={16} className="text-white" />
          </button>
        </div>

        {/* Profile Info */}
        <div className="text-center">
          <p className="text-xs uppercase text-zinc-500 mb-2">
            Account Profile
          </p>
          <h2 className="text-2xl font-bold text-white">
            {name}
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            {role}
          </p>
        </div>

        {/* Edit Foto Button */}
        <button
          onClick={onEdit}
          className="mt-6 px-6 py-2 bg-zinc-800 hover:bg-zinc-700 transition-colors border border-white/10 rounded-lg text-sm text-white font-medium"
        >
          Edit Foto
        </button>
      </div>
    </div>
  );
}

export default ProfileAvatarCard;
