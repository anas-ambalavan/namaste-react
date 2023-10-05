import { Link } from "react-router-dom";

const RestaurantMenuBreadcrumb = ({ items }) => {
  return (
    <nav aria-label="menu-breadcrumb">
      <ul className="menu-breadcrumb-items">
        {items.map((item, index) => (
          <li
            key={index}
            className={`menu-breadcrumb-item ${
              index === items.length - 1 ? "active" : ""
            }`}
          >
            {index > 0 && " / "}
            {index === items.length - 1 ? (
              item.text
            ) : (
              <Link className="reset-link" to={item.path}>
                {item.text}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default RestaurantMenuBreadcrumb;
