import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
import { FOOD_ICONS } from "../utils/icons";

const FoodCard = (props) => {
  // console.log("chhhh", props);
  const getRandomPrice = () => Math.floor(Math.random() * 200);
  const restaurantData = props.restaurantData;
  return restaurantData.length === 0
    ? "Loading"
    : restaurantData.map((rd) => {
        const rds = rd.info;

        const dispatch = useDispatch();
        const handAddItems = (rds) => {
          dispatch(addItems(rds));
        };

        return (
          <div key={rds.id} className="food-card">
            <div className="food-image">
              <div className="food-placeholder">{FOOD_ICONS()}</div>
            </div>

            <div className="food-info">
              <span className="food-category">{rds.name}</span>
              <p className="food-description">{rds.locality}</p>
              <div className="food-bottom">
                <div className="food-price">
                  <span className="current-price">{rds.costForTwo}</span>
                </div>

                <button
                  className="add-cart-btn"
                  onClick={() => handAddItems(rds)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      });
};

export default FoodCard;
