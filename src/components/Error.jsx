const Errors = () => {
  return (
    <main className="error-page">
      <div className="error-container">
        <div className="error-decoration error-decoration-one">🍕</div>

        <div className="error-decoration error-decoration-two">🍔</div>

        <div className="error-decoration error-decoration-three">🍟</div>

        <div className="error-decoration error-decoration-four">🍩</div>

        <div className="error-content">
          <div className="error-icon">🍽️</div>

          <span className="error-badge">Oops! Something went wrong</span>

          <div className="error-code">
            <span>4</span>

            <div className="error-zero">
              <span>🍕</span>
            </div>

            <span>4</span>
          </div>

          <h1>Page Not Found</h1>

          <p className="error-description">
            Looks like this page went out for delivery and never came back. The
            page you're looking for doesn't exist or may have been moved.
          </p>

          <div className="error-actions">
            <a href="/" className="error-home-btn">
              <span>🏠</span>
              Back to Home
            </a>

            <button className="error-back-btn">
              <span>←</span>
              Go Back
            </button>
          </div>

          <div className="error-help">
            <span>Still lost?</span>

            <a href="#">Contact Support</a>
          </div>
        </div>
      </div>

      <section className="error-links-section">
        <p>Maybe you're looking for</p>

        <div className="error-quick-links">
          <a href="/">
            <span>🏠</span>
            Home
          </a>

          <a href="#">
            <span>🍕</span>
            Explore Food
          </a>

          <a href="/about-us">
            <span>💜</span>
            About Us
          </a>

          <a href="/contact-us">
            <span>💬</span>
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
};

export default Errors;
