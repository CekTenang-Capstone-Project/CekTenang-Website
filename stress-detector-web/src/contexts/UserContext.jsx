import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getProfile } from "../services/userService";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    role: "",
    profileImage: null,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        setLoading(false);
        return;
      }

      const result = await getProfile();

      if (!result.error) {
        setUser({
          fullname: result.data.fullname || "",
          email: result.data.email || "",
          role: result.data.role || "",
          profileImage:
            result.data.profileImage ||
            result.data.profile_image ||
            null,
        });
      }

      setLoading(false);
    };

    loadUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useUser() {
  return useContext(UserContext);
}