
import '../index.css';
import './venue.css';

function Venue(){
    return(
        <section className="venue-section" id='venue-section'>

            <div className="venue-royal-ornament">
                ✦ ❧ ✦
            </div>

            <div className="text-center reveal revealed">

                <span className="section-label">Where Love Awaits</span>

                <h2 className="section-heading">
                    Our Wedding <br />
                    Venue
                </h2>

                <div className="ornament mt-4 mb-8">
                    <div className="ornament-line rev"></div>
                    <span className="venue-flower">❦</span>
                    <div className="ornament-line"></div>
                </div>

                <div className="venue-card reveal reveal-delay-2 revealed">

                    <div className="venue-image-frame">
                        <span className="venue-image-corner venue-corner-tl">❧</span>
                        <span className="venue-image-corner venue-corner-tr">❧</span>

                        <img
                            className="venue-img"
                            src="https://res.cloudinary.com/dwtzcpmzo/image/upload/v1795429124/Modern_Campus_Under_a_Bright_Blue_Sky_jatzge.png"
                            alt="Kollapuradamma Samudaya Bhavana"
                        />

                        <span className="venue-image-corner venue-corner-bl">❧</span>
                        <span className="venue-image-corner venue-corner-br">❧</span>
                    </div>

                    <div className="venue-info text-center">

                        <span className="venue-info-ornament">✧</span>

                        <h3 className="venue-name">
                            Sri Narayani Convention Hall
                        </h3>

                        <p className="venue-address">
                            Near Kondrajanahalli<br />
                            ( N.H 4, Bengaluru Road, Kolar.)<br />
                            Karnataka 563101
                        </p>

                        <div className="venue-divider">
                            <span></span>
                            ❦
                            <span></span>
                        </div>

                        <a
                            className="directions-btn"
                            href="https://maps.app.goo.gl/cmEfVLFZAgh4WCN57"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Get Directions <span>↗</span>
                        </a>

                    </div>
                </div>

                <div className="venue-bottom-ornament">
                    ❧ &nbsp; We look forward to welcoming you &nbsp; ❧
                </div>

            </div>
        </section>
    )
}

export default Venue;
