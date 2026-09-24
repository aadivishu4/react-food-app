import FoodCard from "./FoodCard";
import FoodCatagory, { withPromotedCatagory } from "./FoodCatagory";
import { useState, useEffect } from "react";
import UsersList from "./UserClass";
import useUsersData from "../utils/userUsersData";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

  // ✅ Custom hooks before any conditional return
  const onlineStatus = useOnlineStatus();
  const usersData = useUsersData();

  const getRestaurantData = async () => {
    const restUrl = "https://namastedev.com/api/v1/listRestaurants";

    const response = await fetch(restUrl);
    const data = await response.json();

    const restaurants =
      data.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

    setRestaurants(restaurants);
  };

  useEffect(() => {
    getRestaurantData();
  }, []);

  console.log("check online status", onlineStatus);

  // ✅ Now conditional return is safe
  if (onlineStatus === false) {
    return <h2>You are offline</h2>;
  }

  return (
    <main className="main-content">
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">Fresh • Fast • Delicious</span>

          <h1>
            Your Favorite Food
            <span>Delivered Fast</span>
          </h1>

          <p>
            Discover delicious meals from popular restaurants and enjoy fresh
            food delivered right to your doorstep.
          </p>

          <div className="hero-actions">
            <a href="#" className="primary-btn">
              Order Now
            </a>

            <a href="#" className="secondary-btn">
              Explore Menu
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <span className="hero-card-label">Today's Special</span>

            <div className="hero-food-icon">🍕</div>

            <h3>Cheesy Farmhouse Pizza</h3>

            <p>
              Loaded with fresh vegetables, mozzarella cheese, and signature
              herbs.
            </p>

            <div className="hero-food-price">₹299</div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-header">
          <div>
            {/* <h2>Raju Rastogiii?</h2> */}

            {/* ✅ Use already-called hook result */}
            {/* <UsersList usersData={usersData} /> */}
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="section-header">
          <div>
            <span className="section-label">Categories</span>
            <h2>What are you craving?</h2>
          </div>
        </div>

        <FoodCatagory />
      </section>

      <section className="food-section">
        <div className="section-header">
          <div>
            <span className="section-label">Popular</span>
            <h2>Popular Dishes</h2>
          </div>

          <a href="#" className="view-all-link">
            View Full Menu →
          </a>
        </div>

        <div className="food-grid">
          <FoodCard restaurantData={restaurants} />
        </div>
      </section>
    </main>
  );
};

export default Body;
