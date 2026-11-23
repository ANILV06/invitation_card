
import '../index.css';
import './footer.css';

function Footer() {
  return (
    <section id="footer-section">
      <div className="footer-royal-frame">

        <div className="footer-top-ornament">
          <span></span>
          <div>✦</div>
          <span></span>
        </div>

        <div className="footer-title-wrap">
          <span className="footer-name">
            Anusha S.N <span className="footer-title-heart">&amp;</span> Likith T.N

          </span>

          <div className="footer-heart-divider">
            <span></span>
            <div>♥</div>
            <span></span>
          </div>

          <p className="footer-blessing">
            Two hearts, one beautiful beginning
          </p>
        </div>

        <div className="footer-grid">

          <div className="reveal revealed footer-family">
            <span className="footer-heading">With Compliments From</span>

            <div className="footer-small-ornament">❧</div>

            <ul className="footer-list">
              <li>Smt. Padma  &amp; Sri Nanjegowda S.N.</li>
              <li>Late Smt. Indramma & &amp; Late Sri. Nanjundaswamy</li>
            </ul>
          </div>

          <div className="reveal reveal-delay-2 revealed footer-message">
            <div className="footer-message-ornament">✧</div>

            <div className="footer-kids">
              <strong>Abhishek Gowda</strong> <br></br>
              <em>
                "Nanna Preethiya Thangiya Maduvege Thapade Banni...."
              </em>
            </div>

            <div className="footer-message-ornament">✧</div>
          </div>

          <div className="footer-endnote reveal revealed">
            <div className="foot-line"></div>

            <div className="footer-event-details">
              <p className="footer-date">
                02–03rd December, Wed–Thu 2026
              </p>

              <span className="footer-detail-divider">✦</span>

              <p className="p-style">
                Sri Narayani Convention Hall
              </p>
            </div>
          </div>

        </div>

        <div className="footer-bottom-ornament">
          <span>❧</span>
          <div></div>
          <span>❧</span>
        </div>

        <p className="footer-closing">
          Your presence will make our celebration more special
        </p>

      </div>
    </section>
  );
}

export default Footer;
