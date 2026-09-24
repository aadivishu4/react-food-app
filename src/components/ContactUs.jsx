const ContactUs = () => {
  return (
    <main className='contact-page'>
      <section className='contact-hero'>
        <span className='contact-badge'>Contact FoodMania</span>

        <h1>
          We'd Love To
          <span>Hear From You</span>
        </h1>

        <p>
          Have a question, feedback, or need help with your order? Our team is
          here to help make your FoodMania experience better.
        </p>
      </section>

      <section className='contact-info-section'>
        <div className='contact-info-card'>
          <div className='contact-info-icon'>📧</div>

          <div>
            <h3>Email Us</h3>

            <p>Questions or feedback? Send us an email anytime.</p>

            <a href='mailto:support@foodmania.com'>support@foodmania.com</a>
          </div>
        </div>

        <div className='contact-info-card'>
          <div className='contact-info-icon'>📞</div>

          <div>
            <h3>Call Us</h3>

            <p>Our support team is available to help you.</p>

            <a href='tel:+919876543210'>+91 98765 43210</a>
          </div>
        </div>

        <div className='contact-info-card'>
          <div className='contact-info-icon'>📍</div>

          <div>
            <h3>Visit Us</h3>

            <p>Come say hello at our FoodMania office.</p>

            <span className='contact-info-value'>India</span>
          </div>
        </div>
      </section>

      <section className='contact-main-section'>
        <div className='contact-content'>
          <span className='section-label'>Get In Touch</span>

          <h2>Have something on your mind?</h2>

          <p className='contact-description'>
            Whether you have a question about your order, want to suggest a
            restaurant, found an issue, or simply want to share your experience,
            send us a message.
          </p>

          <div className='contact-benefits'>
            <div className='contact-benefit'>
              <div className='benefit-icon'>⚡</div>

              <div>
                <h4>Quick Response</h4>

                <p>
                  Our team aims to respond to your queries as quickly as
                  possible.
                </p>
              </div>
            </div>

            <div className='contact-benefit'>
              <div className='benefit-icon'>💬</div>

              <div>
                <h4>Friendly Support</h4>

                <p>
                  We're here to understand your concern and help you find the
                  right solution.
                </p>
              </div>
            </div>

            <div className='contact-benefit'>
              <div className='benefit-icon'>🔒</div>

              <div>
                <h4>Your Information Is Safe</h4>

                <p>
                  Your personal information is handled carefully and securely.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='contact-form-container'>
          <div className='contact-form-header'>
            <div>
              <span className='form-label'>Send a Message</span>

              <h3>How can we help?</h3>
            </div>

            <span className='form-header-icon'>✉️</span>
          </div>

          <form className='contact-form'>
            <div className='form-row'>
              <div className='form-group'>
                <label htmlFor='name'>Your Name</label>

                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Enter your name'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='email'>Email Address</label>

                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Enter your email'
                />
              </div>
            </div>

            <div className='form-group'>
              <label htmlFor='phone'>
                Phone Number
                <span>(Optional)</span>
              </label>

              <input
                type='tel'
                id='phone'
                name='phone'
                placeholder='+91 98765 43210'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='subject'>What can we help you with?</label>

              <select id='subject' name='subject'>
                <option value=''>Select a topic</option>

                <option value='order'>Order Related</option>

                <option value='payment'>Payment Issue</option>

                <option value='restaurant'>Restaurant Related</option>

                <option value='feedback'>Feedback</option>

                <option value='technical'>Technical Issue</option>

                <option value='other'>Other</option>
              </select>
            </div>

            <div className='form-group'>
              <label htmlFor='orderId'>
                Order ID
                <span>(Optional)</span>
              </label>

              <input
                type='text'
                id='orderId'
                name='orderId'
                placeholder='Example: FM102938'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='message'>Message</label>

              <textarea
                id='message'
                name='message'
                rows='6'
                placeholder='Tell us how we can help...'
              ></textarea>
            </div>

            <button type='submit' className='contact-submit-btn'>
              <span>Send Message</span>

              <span>→</span>
            </button>

            <p className='form-note'>
              We'll get back to you as soon as possible.
            </p>
          </form>
        </div>
      </section>

      <section className='support-section'>
        <div className='support-header'>
          <span className='section-label'>Customer Support</span>

          <h2>What do you need help with?</h2>

          <p>
            Choose the area that best matches your question and our team will
            help you find the right solution.
          </p>
        </div>

        <div className='support-grid'>
          <div className='support-card'>
            <div className='support-card-icon'>🛍️</div>

            <h3>Order Support</h3>

            <p>
              Need help with an existing order, delivery status, cancellation,
              or missing items?
            </p>

            <a href='#'>Get Order Help →</a>
          </div>

          <div className='support-card'>
            <div className='support-card-icon'>💳</div>

            <h3>Payment Support</h3>

            <p>
              Facing a payment failure, duplicate charge, refund issue, or
              transaction problem?
            </p>

            <a href='#'>Get Payment Help →</a>
          </div>

          <div className='support-card'>
            <div className='support-card-icon'>🍽️</div>

            <h3>Restaurant Support</h3>

            <p>
              Are you a restaurant owner interested in joining or managing your
              restaurant on FoodMania?
            </p>

            <a href='#'>Partner With Us →</a>
          </div>
        </div>
      </section>

      <section className='contact-faq-section'>
        <div className='faq-heading'>
          <span className='section-label'>Frequently Asked Questions</span>

          <h2>You might find your answer here.</h2>

          <p>Here are some common questions from FoodMania customers.</p>
        </div>

        <div className='faq-list'>
          <div className='faq-item'>
            <div className='faq-question'>
              <h3>How can I track my food order?</h3>

              <span>+</span>
            </div>

            <p>
              Once your order is confirmed, you can follow its status from your
              FoodMania order details.
            </p>
          </div>

          <div className='faq-item'>
            <div className='faq-question'>
              <h3>What should I do if my order is late?</h3>

              <span>+</span>
            </div>

            <p>
              Check your current delivery status first. If the order is taking
              longer than expected, contact our support team with your order ID.
            </p>
          </div>

          <div className='faq-item'>
            <div className='faq-question'>
              <h3>How long does a refund take?</h3>

              <span>+</span>
            </div>

            <p>
              Refund processing time can depend on the payment method and your
              bank after a refund has been initiated.
            </p>
          </div>

          <div className='faq-item'>
            <div className='faq-question'>
              <h3>How can a restaurant join FoodMania?</h3>

              <span>+</span>
            </div>

            <p>
              Restaurant owners can contact our partnership team through the
              contact form and select Restaurant Related as the topic.
            </p>
          </div>
        </div>
      </section>

      <section className='contact-cta'>
        <div className='contact-cta-content'>
          <div className='contact-cta-icon'>💜</div>

          <h2>We're here when you need us.</h2>

          <p>
            Great food should come with great support. Reach out whenever you
            need help with FoodMania.
          </p>

          <a href='mailto:support@foodmania.com' className='contact-cta-btn'>
            Contact Support
          </a>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
