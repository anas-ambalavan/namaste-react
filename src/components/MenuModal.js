import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { toggleModal } from "../utils/store/appSlice";

const MenuModal = ({ menu }) => {
  const dispatch = useDispatch();

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  const menuItems = menu.slice(2, menu?.length - 2);

  return (
    <div className="modal" onClick={() => dispatch(toggleModal())}>
      <div className="modal-content" onClick={stopPropagation}>
        <div className="modal-scrollable">
          <ul className="modal-menu-items">
            {menuItems?.map((item) => (
              <li className="modal-menu" key={item?.card?.card?.title}>
                <p>{item?.card?.card?.title?.toLowerCase()}</p>
                <p>{item?.card?.card?.itemCards?.length}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
