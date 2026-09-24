import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useRestaurantById from "../utils/userRestaurantById";

const RestaurantMenu = () => {
  const params = useParams();
  const restInfo = useRestaurantById(params.restId);
  debugger;
  return (
    <main className="restaurant-menu-page">
      <section className="restaurant-hero">
        <div className="restaurant-hero-content">
          <div className="restaurant-image">
            <div className="restaurant-image-placeholder">🍛</div>

            <span className="restaurant-status">Open Now</span>
          </div>

          <div className="restaurant-details">
            <div className="restaurant-title-row">
              <div>
                <span className="restaurant-type">Indian • North Indian</span>

                <h1>{restInfo.name}</h1>
              </div>

              <div className="restaurant-rating">
                <strong>★ 4.6</strong>

                <span>2.4K ratings</span>
              </div>
            </div>

            <p className="restaurant-description">{restInfo.description}</p>

            <div className="restaurant-meta">
              <div className="restaurant-meta-item">
                <span className="meta-icon">⏱️</span>

                <div>
                  <strong>30-35 min</strong>
                  <span>Delivery Time</span>
                </div>
              </div>

              <div className="restaurant-meta-divider"></div>
              <div className="restaurant-meta-divider"></div>

              <div className="restaurant-meta-item">
                <span className="meta-icon">💰</span>

                <div>
                  <strong>₹{restInfo.price / 100}</strong>
                  <span>For Two</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="restaurant-offers">
        <div className="offer-card">
          <div className="offer-icon">🏷️</div>

          <div>
            <strong>50% OFF</strong>

            <p>Up to ₹100</p>

            <span>USE FOOD50</span>
          </div>
        </div>

        <div className="offer-card">
          <div className="offer-icon">💳</div>

          <div>
            <strong>20% OFF</strong>

            <p>On orders above ₹499</p>

            <span>USE SAVE20</span>
          </div>
        </div>

        <div className="offer-card">
          <div className="offer-icon">🚚</div>

          <div>
            <strong>FREE DELIVERY</strong>

            <p>On orders above ₹299</p>

            <span>LIMITED OFFER</span>
          </div>
        </div>
      </section>

      <section className="menu-container">
        <aside className="menu-sidebar">
          <div className="menu-sidebar-header">
            <span>MENU</span>

            <h3>Categories</h3>
          </div>

          <nav className="menu-categories">
            <a href="#recommended" className="menu-category active">
              <span>🔥</span>

              <span>Recommended</span>

              <small>8</small>
            </a>

            <a href="#starters" className="menu-category">
              <span>🥗</span>

              <span>Starters</span>

              <small>6</small>
            </a>

            <a href="#main-course" className="menu-category">
              <span>🍛</span>

              <span>Main Course</span>

              <small>12</small>
            </a>

            <a href="#biryani" className="menu-category">
              <span>🍚</span>

              <span>Biryani</span>

              <small>7</small>
            </a>

            <a href="#breads" className="menu-category">
              <span>🫓</span>

              <span>Breads</span>

              <small>5</small>
            </a>

            <a href="#desserts" className="menu-category">
              <span>🍰</span>

              <span>Desserts</span>

              <small>6</small>
            </a>

            <a href="#beverages" className="menu-category">
              <span>🥤</span>

              <span>Beverages</span>

              <small>9</small>
            </a>
          </nav>
        </aside>

        <div className="menu-content">
          <div className="menu-toolbar">
            <div className="menu-search">
              <span>🔍</span>

              <input type="text" placeholder="Search dishes..." />
            </div>

            <div className="menu-filters">
              <button className="menu-filter-btn active">All</button>

              <button className="menu-filter-btn">🟢 Veg</button>

              <button className="menu-filter-btn">🔴 Non-Veg</button>

              <button className="menu-filter-btn">⭐ Bestseller</button>
            </div>
          </div>

          <div className="menu-section" id="recommended">
            <div className="menu-section-header">
              <div>
                <span className="menu-section-label">Customer Favorites</span>

                <h2>Recommended</h2>

                <p>8 delicious dishes</p>
              </div>

              <span className="menu-section-icon">🔥</span>
            </div>

            <div className="menu-items">
              <div className="menu-item">
                <div className="menu-item-info">
                  <div className="food-type-row">
                    <span className="food-type veg">●</span>

                    <span className="bestseller-badge">★ Bestseller</span>
                  </div>

                  <h3>Paneer Butter Masala</h3>

                  <div className="menu-item-rating">
                    ★ 4.8
                    <span>(324)</span>
                  </div>

                  <div className="menu-item-price">₹249</div>

                  <p>
                    Soft cottage cheese cooked in a rich and creamy tomato gravy
                    with aromatic Indian spices.
                  </p>
                </div>

                <div className="menu-item-action">
                  <div className="menu-item-image">🥘</div>

                  <button className="add-food-btn">ADD</button>

                  <span className="customisable">Customisable</span>
                </div>
              </div>

              <div className="menu-item">
                <div className="menu-item-info">
                  <div className="food-type-row">
                    <span className="food-type non-veg">●</span>

                    <span className="bestseller-badge">★ Bestseller</span>
                  </div>

                  <h3>Chicken Biryani</h3>

                  <div className="menu-item-rating">
                    ★ 4.7
                    <span>(518)</span>
                  </div>

                  <div className="menu-item-price">₹299</div>

                  <p>
                    Aromatic basmati rice cooked with tender chicken,
                    traditional spices, saffron and fried onions.
                  </p>
                </div>

                <div className="menu-item-action">
                  <div className="menu-item-image">🍛</div>

                  <button className="add-food-btn">ADD</button>
                </div>
              </div>

              <div className="menu-item">
                <div className="menu-item-info">
                  <div className="food-type-row">
                    <span className="food-type veg">●</span>
                  </div>

                  <h3>Dal Makhani</h3>

                  <div className="menu-item-rating">
                    ★ 4.6
                    <span>(197)</span>
                  </div>

                  <div className="menu-item-price">₹199</div>

                  <p>
                    Slow cooked black lentils prepared with butter, cream and
                    traditional Indian spices.
                  </p>
                </div>

                <div className="menu-item-action">
                  <div className="menu-item-image">🍲</div>

                  <button className="add-food-btn">ADD</button>
                </div>
              </div>

              <div className="menu-item">
                <div className="menu-item-info">
                  <div className="food-type-row">
                    <span className="food-type non-veg">●</span>
                  </div>

                  <h3>Butter Chicken</h3>

                  <div className="menu-item-rating">
                    ★ 4.9
                    <span>(642)</span>
                  </div>

                  <div className="menu-item-price">₹329</div>

                  <p>
                    Tender chicken cooked in our signature creamy tomato and
                    butter gravy.
                  </p>
                </div>

                <div className="menu-item-action">
                  <div className="menu-item-image">🍗</div>

                  <button className="add-food-btn">ADD</button>
                </div>
              </div>
            </div>
          </div>

          <div className="menu-section" id="starters">
            <div className="menu-section-header">
              <div>
                <span className="menu-section-label">Start Your Meal</span>

                <h2>Starters</h2>

                <p>6 delicious dishes</p>
              </div>

              <span className="menu-section-icon">🥗</span>
            </div>

            <div className="menu-items">
              <div className="menu-item">
                <div className="menu-item-info">
                  <div className="food-type-row">
                    <span className="food-type veg">●</span>
                  </div>

                  <h3>Paneer Tikka</h3>

                  <div className="menu-item-rating">
                    ★ 4.5
                    <span>(165)</span>
                  </div>

                  <div className="menu-item-price">₹229</div>

                  <p>
                    Marinated cottage cheese grilled with onions, peppers and
                    aromatic spices.
                  </p>
                </div>

                <div className="menu-item-action">
                  <div className="menu-item-image">🧆</div>

                  <button className="add-food-btn">ADD</button>
                </div>
              </div>

              <div className="menu-item">
                <div className="menu-item-info">
                  <div className="food-type-row">
                    <span className="food-type non-veg">●</span>
                  </div>

                  <h3>Chicken Tikka</h3>

                  <div className="menu-item-rating">
                    ★ 4.7
                    <span>(287)</span>
                  </div>

                  <div className="menu-item-price">₹279</div>

                  <p>
                    Juicy pieces of chicken marinated in yogurt and spices,
                    grilled until perfectly smoky.
                  </p>
                </div>

                <div className="menu-item-action">
                  <div className="menu-item-image">🍢</div>

                  <button className="add-food-btn">ADD</button>
                </div>
              </div>
            </div>
          </div>

          <div className="menu-section" id="desserts">
            <div className="menu-section-header">
              <div>
                <span className="menu-section-label">Something Sweet</span>

                <h2>Desserts</h2>

                <p>6 delicious desserts</p>
              </div>

              <span className="menu-section-icon">🍰</span>
            </div>

            <div className="menu-items">
              <div className="menu-item">
                <div className="menu-item-info">
                  <div className="food-type-row">
                    <span className="food-type veg">●</span>
                  </div>

                  <h3>Gulab Jamun</h3>

                  <div className="menu-item-rating">
                    ★ 4.8
                    <span>(234)</span>
                  </div>

                  <div className="menu-item-price">₹99</div>

                  <p>
                    Soft milk dumplings soaked in warm cardamom flavored sugar
                    syrup.
                  </p>
                </div>

                <div className="menu-item-action">
                  <div className="menu-item-image">🍡</div>

                  <button className="add-food-btn">ADD</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="floating-cart">
        <div className="floating-cart-info">
          <div className="floating-cart-icon">🛒</div>

          <div>
            <strong>2 Items</strong>

            <span>₹548</span>
          </div>
        </div>

        <button className="view-cart-btn">
          View Cart
          <span>→</span>
        </button>
      </div>
    </main>
  );
};

export default RestaurantMenu;
