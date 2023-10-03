import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { toggleModal } from "../utils/store/appSlice";

const MenuModal = ({
  menu,
  showIndex,
  setShowIndex,
  setModalMenuClickedIndex,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [blowDown, setBlowDown] = useState(false);
  const dispatch = useDispatch();

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    document.body.classList.add("modal-open");
    setModalVisible(true);
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
    setModalVisible(!modalVisible);
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
    <div
      data-testid="modal"
      className={`modal ${modalVisible ? "modal-visible" : "modal-hidden"}`}
      onClick={() => {
        setModalVisible(false);
        setTimeout(() => {
          dispatch(toggleModal());
        }, 500);
        setBlowDown(true);
      }}
    >
      <div
        className={`modal-content ${
          modalVisible ? "blow-up" : blowDown ? "blow-down" : ""
        }`}
        onClick={stopPropagation}
      >
        <div className="modal-scrollable">
          <ul className="modal-menu-items">
            {menuItems?.map((item, index) => (
              <li className="modal-menu" key={item?.card?.card?.title}>
                <p
                  data-testid="modalMenuTitle"
                  className="modal-menu-title"
                  onClick={() => onToggleMenuItem(item, index)}
                >
                  {item?.card?.card?.title?.toLowerCase()}
                  {showIndex === itemIndex(item, index) && (
                    <span
                      style={{
                        marginLeft: 5,
                        fontSize: 8,
                      }}
                    >
                      🔶
                    </span>
                  )}
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
