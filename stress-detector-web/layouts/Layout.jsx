// sistem
import PropTypes, { func } from "prop-types";

// komponent
import Navbar from "../src/components/Navbar/Navbar";
import Sidebar from "../src/components/Sidebar/Sidebar";

function Layout({ title, name, role, children}){
    return (
    <div className="min-h-screen overflow-x-hidden bg-[#0F0F0F] text-white">
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="min-w-0 flex-1 overflow-hidden">
          <Navbar title={title} name={name} role={role} />

          <section className="p-4 md:p-6 lg:p-8">
            {children}
          </section>
        </main>
      </div>
    </div>
    );
}

export default Layout;