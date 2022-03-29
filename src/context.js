import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const AppContext = React.createContext();

const API = "https://randomuser.me/api/?results=15";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const fetchUsers = async (url) => {
    setLoading(true);
    const response = await axios(url).catch((error) => console.log(error));
    const data = response.data.results;
    setUsers(data);
    setFiltered(data);
    setLoading(false);
  };

  const handleBtn = (e) => {
    let btnValue = e.target.value;
    if (btnValue === "all") {
      setFiltered(users);
    } else if (btnValue === "male") {
      const filteredData = users.filter((user) => user.gender === "male");
      setFiltered(filteredData);
    } else if (btnValue === "female") {
      const filteredData = users.filter((user) => user.gender === "female");
      setFiltered(filteredData);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        handleBtn,
        filtered,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
