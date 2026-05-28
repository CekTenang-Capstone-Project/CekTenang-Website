import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Layout from "../../layouts/Layout";

function ActivitiesPage() {
  return (
    <Layout title="Dashboard" name="User" role="User">
      <div className="rounded-xl border border-white/5 bg-[#141414] p-6">
         <h2 className="text-xl font-semibold">Dashboard</h2>
      </div>
    </Layout>
  );
}

export default ActivitiesPage;
