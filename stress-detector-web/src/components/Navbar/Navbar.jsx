import PropTypes from "prop-types";
import Buttons from "./Buttons";
import FotoProfile from "./FotoProfile";
import NameDisplay from "./NameDisplay";

function Navbar({ title, name, role, profilePhoto}) {
  return (
    <header
    className="
      flex h-20 w-full items-center justify-between
      border-b border-white/5
      bg-[#141414]
      px-4 md:px-6 lg:px-12
      text-white
    "
  >
    {/* LEFT */}
    <div className="flex items-center gap-4">
      
      {/* Hamburger */}
      <button
        className="
          flex h-11 w-11 items-center justify-center
          rounded-xl bg-[#0F0F0F]
          lg:hidden
        "
      >
        ☰
      </button>

      <h1
        className="
          text-lg font-bold tracking-tight
          sm:text-xl
          lg:text-2xl
        "
      >
        {title}
      </h1>
    </div>

    {/* RIGHT */}
    <div className="flex items-center gap-3 md:gap-5">
      <Buttons />

      <div className="hidden h-12 w-px bg-white/10 md:block" />

      <div className="flex items-center gap-3">
        <div className="hidden sm:block">
          <NameDisplay name={name} role={role} />
        </div>

        <FotoProfile src={profilePhoto} name={name} />
      </div>
    </div>
  </header>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
  profilePhoto: PropTypes.string,
};

export default Navbar;
