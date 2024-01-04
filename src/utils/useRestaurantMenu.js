import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);

  const fetchMenu = async () => {
    const data = await fetch(process.env.REACT_APP_MENU_API + resId);
    const json = await data.json();

    setResInfo(json?.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return resInfo;
};

export default useRestaurantMenu;
