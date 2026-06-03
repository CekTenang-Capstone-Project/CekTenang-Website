import { useState } from "react";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileAvatarCard from "../components/profile/ProfileAvatarCard";
import ProfileInfoCard from "../components/profile/ProfileInfoCard";
import AccountStatsSection from "../components/profile/AccountStatsSection";
import PasswordCard from "../components/profile/PasswordCard";
import DangerZoneCard from "../components/profile/DangerZoneCard";
import Layout from "../../layouts/Layout";

// Dummy data untuk profile
const profile = {
  name: "Aryanda",
  fullName: "Aryanda Sanggadiennata",
  email: "aryanda@email.com",
  avatar: "/api/placeholder/120",
  role: "Student",
};

// Dummy data untuk statistik akun
const accountStats = [
  {
    title: "Total Analysis Entries",
    value: "1,284",
    suffix: "",
    trend: "+12%",
    progress: 80,
    description: null,
    icon: null,
    showIcon: false,
  },
  {
    title: "Average Stress Score",
    value: "42",
    suffix: "/100",
    trend: null,
    progress: null,
    description: "Optimal clinical range detected",
    icon: null,
    showIcon: false,
  },
  {
    title: "Active Streak",
    value: "18",
    suffix: "days",
    trend: null,
    progress: 85,
    description: null,
    icon: "lightning",
    showIcon: true,
  },
];

function ProfilePage() {
  const [isEditingPhoto, setIsEditingPhoto] = useState(false);
  const [isUpdatingInfo, setIsUpdatingInfo] = useState(false);

  const handleEditPhoto = () => {
    setIsEditingPhoto(true);
    // Handle photo edit logic
    alert("Photo edit functionality would open a modal/dialog");
  };

  const handleUpdateInfo = () => {
    setIsUpdatingInfo(true);
    // Handle info update logic
    alert("Update information functionality would open a modal/dialog");
  };

  const handlePasswordSubmit = (data) => {
    console.log("Password change submitted:", data);
    alert("Password change submitted (check console for details)");
  };

  const handleDeactivateAccount = () => {
    if (confirm("Are you sure you want to deactivate your account? This action cannot be undone.")) {
      console.log("Account deactivation initiated");
      alert("Account deactivation initiated (check console for details)");
    }
  };

  return (
    <Layout title="Profile" name={profile.name} role={profile.role}>
      <div className="space-y-6">
        {/* Page Header */}
        <ProfileHeader />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Profile Info & Password */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Avatar Card */}
            <ProfileAvatarCard
              image={profile.avatar}
              name={profile.name}
              role={profile.role}
              onEdit={handleEditPhoto}
            />

            {/* Profile Info Card */}
            <ProfileInfoCard
              fullName={profile.fullName}
              email={profile.email}
              onUpdate={handleUpdateInfo}
            />
          </div>

          {/* Right Column - Statistics */}
          <div className="lg:col-span-2">
            <div className="flex items-start">
              <div className="flex-1">
                <h2 className="text-sm uppercase text-zinc-500 mb-4">
                  Statistik Akun
                </h2>
              </div>
            </div>
            <AccountStatsSection stats={accountStats} />
          </div>
        </div>

        {/* Password Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <PasswordCard onSubmit={handlePasswordSubmit} />
          </div>

          {/* Statistics Sidebar */}
          <div className="lg:col-span-2">
            {/* This could be additional stats or can be filled as needed */}
          </div>
        </div>

        {/* Danger Zone Section */}
        <div className="grid grid-cols-1">
          <DangerZoneCard onDeactivate={handleDeactivateAccount} />
        </div>
      </div>
    </Layout>
  );
}

export default ProfilePage;
