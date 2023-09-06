import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { toggleModal } from "../utils/store/appSlice";

const MenuModal = ({
  menu,
  showIndex,
  setShowIndex,
  setModalMenuClickedIndex,
}) => {
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

  const menuItems = menu[1]?.card?.card?.itemCards
    ? menu.slice(1, menu?.length - 2)
    : menu.slice(2, menu?.length - 2);

  const itemsCount = (item) => {
    const count =
      item?.card?.card?.itemCards?.length ||
      item?.card?.card?.categories?.reduce((acc, curr) => {
        acc = acc + curr.itemCards.length;
        return acc;
      }, 0);
    return count;
  };
  const itemIndex = (item, index) => {
    let currentIndex;
    if (item?.card?.card?.itemCards) {
      currentIndex =
        item?.card?.card?.title +
        (menu[1]?.card?.card?.itemCards ? index + 1 : index + 2);
    } else if (item?.card?.card?.categories) {
      currentIndex =
        item?.card?.card?.title + item?.card?.card.categories[0].title + 0;
    }
    return currentIndex;
  };

  const onToggleMenuItem = async (item, index) => {
    await dispatch(toggleModal());
    if (showIndex) {
      await setShowIndex(null);
      setTimeout(() => {
        setShowIndex(itemIndex(item, index));
        setModalMenuClickedIndex(itemIndex(item, index));
      }, 500);
    } else {
      setShowIndex(itemIndex(item, index));
      setModalMenuClickedIndex(itemIndex(item, index));
    }
  };

  return (
    <div className="modal" onClick={() => dispatch(toggleModal())}>
      <div className="modal-content" onClick={stopPropagation}>
        <div className="modal-scrollable">
          <ul className="modal-menu-items">
            {menuItems?.map((item, index) => (
              <li className="modal-menu" key={item?.card?.card?.title}>
                <p onClick={() => onToggleMenuItem(item, index)}>
                  {item?.card?.card?.title?.toLowerCase()}
                </p>
                <p>{itemsCount(item)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
