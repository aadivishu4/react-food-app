const AboutUs = () => {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-badge">About FoodMania</span>

          <h1>
            Bringing Delicious Food
            <span>Closer To You</span>
          </h1>

          <p>
            FoodMania connects food lovers with delicious meals from their
            favorite restaurants. From local classics to exciting new cuisines,
            we make discovering and ordering great food simple, fast, and
            enjoyable.
          </p>

          <div className="about-hero-actions">
            <a href="#" className="about-primary-btn">
              Explore Food
            </a>

            <a href="#our-story" className="about-secondary-btn">
              Our Story
            </a>
          </div>
        </div>

        <div className="about-hero-visual">
          <div className="about-main-card">
            <span className="about-card-badge">FoodMania</span>

            <div className="about-food-icons">
              <span>🍕</span>
              <span>🍔</span>
              <span>🍜</span>
            </div>

            <h3>Good Food. Great Moments.</h3>

            <p>
              Discover restaurants, explore cuisines and enjoy your favorite
              meals from the comfort of your home.
            </p>
          </div>
        </div>
      </section>

      <section className="story-section" id="our-story">
        <div className="story-visual">
          <div className="story-card">
            <div className="story-icon">🍽️</div>

            <span>Made for food lovers</span>
          </div>
        </div>

        <div className="story-content">
          <span className="section-label">Our Story</span>

          <h2>Food should make every moment better.</h2>

          <p>
            FoodMania started with a simple idea — finding great food should
            never be complicated.
          </p>

          <p>
            We wanted to create one place where people could discover
            restaurants, explore different cuisines, find popular dishes and
            order their favorites without unnecessary complexity.
          </p>

          <p>
            Today, FoodMania is built around the same idea: helping people spend
            less time searching and more time enjoying food they love.
          </p>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-card">
          <div className="stat-icon">🍽️</div>

          <h3>500+</h3>

          <p>Restaurants</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🍕</div>

          <h3>10K+</h3>

          <p>Dishes</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon">😊</div>

          <h3>50K+</h3>

          <p>Happy Customers</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📍</div>

          <h3>25+</h3>

          <p>Cities</p>
        </div>
      </section>

      <section className="why-section">
        <div className="why-header">
          <span className="section-label">Why FoodMania?</span>

          <h2>Everything you need for a better food experience</h2>

          <p>
            From discovering restaurants to getting your favorite meal
            delivered, FoodMania is designed to make every step simple.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">🍴</div>

            <h3>Wide Food Selection</h3>

            <p>
              Discover restaurants and dishes across multiple cuisines, from
              everyday favorites to something completely new.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">⚡</div>

            <h3>Fast Delivery</h3>

            <p>
              Get your favorite meals delivered quickly so you can spend more
              time enjoying your food.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">✨</div>

            <h3>Quality Experience</h3>

            <p>
              A simple and modern experience makes discovering, choosing and
              ordering food effortless.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">💜</div>

            <h3>Made For Food Lovers</h3>

            <p>
              Everything we build is designed around one thing — helping people
              discover and enjoy food they love.
            </p>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-content">
          <span className="section-label">Our Mission</span>

          <h2>Making great food easier to discover.</h2>

          <p>
            Our mission is to create a simple, reliable and enjoyable platform
            where everyone can discover great restaurants and delicious food.
          </p>

          <div className="mission-points">
            <div className="mission-point">
              <span>✓</span>
              <p>Make food discovery simple</p>
            </div>

            <div className="mission-point">
              <span>✓</span>
              <p>Connect people with great restaurants</p>
            </div>

            <div className="mission-point">
              <span>✓</span>
              <p>Provide a smooth ordering experience</p>
            </div>

            <div className="mission-point">
              <span>✓</span>
              <p>Help people discover new cuisines</p>
            </div>
          </div>
        </div>

        <div className="mission-visual">
          <div className="mission-circle">
            <div className="mission-center">❤️</div>

            <div className="mission-food mission-food-one">🍕</div>

            <div className="mission-food mission-food-two">🍜</div>

            <div className="mission-food mission-food-three">🍔</div>

            <div className="mission-food mission-food-four">🍰</div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="cta-content">
          <span className="cta-icon">🍽️</span>

          <h2>Hungry already?</h2>

          <p>
            Discover delicious meals and find your next favorite dish with
            FoodMania.
          </p>

          <a href="/" className="cta-btn">
            Explore Food
          </a>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
