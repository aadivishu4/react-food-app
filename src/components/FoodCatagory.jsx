import { useState, useEffect } from "react";
import { ICONS } from "../utils/icons";

const FoodCatagory = () => {
  const [catagory, setCatagory] = useState([]);

  const getRestaurantData = async () => {
    try {
      const restaurantData =
        "https://fakerestaurantapi.runasp.net/api/Restaurant?category";

      const response = await fetch(restaurantData);

      const data = await response.json();

      setCatagory(data);
    } catch (error) {
      console.log("error ==> ", error);
    }
  };

  const foodIcon = (ICONS) => {
    const randomNumber = Math.floor(Math.random() * ICONS.length);
    return ICONS[randomNumber];
  };

  useEffect(() => {
    getRestaurantData();
  }, []);

  return (
    <div className="categories-grid">
      {catagory.length === 0
        ? "Loading..."
        : catagory.map((r) => {
            return (
              <div className="category-card" key={r.restaurantID}>
                <div className="category-icon">{foodIcon(ICONS)}</div>
                <span>{r.type}</span>
              </div>
            );
          })}
    </div>
  );
};

export const withPromotedCatagory = (FoodCatagory) => {
  return (props) => {
    return (
      <div>
        <label htmlFor="promotedCatagory">Best Seller</label>
        <FoodCatagory {...props} />;
      </div>
    );
  };
};

export default FoodCatagory;
