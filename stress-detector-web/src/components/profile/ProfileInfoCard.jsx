function ProfileInfoCard({
  fullName = "Aryanda Sanggadiennata",
  email = "aryanda@email.com",
  onUpdate,
}) {
  return (
    <div className="bg-zinc-900/70 border border-white/10 rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-white mb-6">
        Informasi Akun
      </h3>

      <div className="space-y-6">
        {/* Full Name */}
        <div>
          <p className="text-xs uppercase text-zinc-500 mb-2">
            Full Name
          </p>
          <p className="text-base text-white">
            {fullName}
          </p>
          <div className="mt-3 h-px bg-zinc-800" />
        </div>

        {/* Email Address */}
        <div>
          <p className="text-xs uppercase text-zinc-500 mb-2">
            Email Address
          </p>
          <p className="text-base text-white">
            {email}
          </p>
          <div className="mt-3 h-px bg-zinc-800" />
        </div>
      </div>

      {/* Update Button */}
      <button
        onClick={onUpdate}
        className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg text-sm text-white font-medium"
      >
        Update Information
      </button>
    </div>
  );
}

export default ProfileInfoCard;
