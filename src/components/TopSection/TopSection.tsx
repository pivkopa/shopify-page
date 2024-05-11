import logo from '../../icons/Logotype.svg';
import vibes from '../../icons/vibes.svg';
import bucket from '../../icons/bucket.svg';
import sunMoon from '../../icons/sun-moon.svg';
import vector from '../../icons/Vector.svg';
import hands from '../../images/hands.png';
import hair from '../../images/hair.png';
import book from '../../images/book.png';
import witnessPortret from '../../images/witness-portret.png';
import stars from '../../icons/Stars.svg';

export const TopSection = () => (
  <>
    <div className="section-top__banner">
      <p className="section-top__banner-text section-top__banner-text-desktop">
        CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY &#40; OR NIGHT &#41;
      </p>
      <p className="section-top__banner-text section-top__banner-text-mobile">FREE SHIPPING on orders &gt; $200</p>
      <p className="section-top__banner-text section-top__banner-text-desktop">
        easy 45 day return window.
      </p>
    </div>
    <header className="header">
      <img className="header__logo-img" src={logo} alt="" />
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li className="header__nav__list__item">How it works</li>
          <li className="header__nav__list__item">Benefits</li>
          <li className="header__nav__list__item">Reviews</li>
          <li className="header__nav__list__item">FAQ</li>
          <li className="header__nav__list__item">Cart</li>
        </ul>
      </nav>
    </header>

    <div className="container">
      <section className="section-top">
        <article className="section-top__benefits-part">
          <h1 className="section-top__benefits-title">Don&apos;t apologize for being comfortable.</h1>

          <article className="section-top__gallery-part section-top__gallery-part-mobile">
            <ul className="section-top__gallery-list">
              <li className="section-top__gallery-list-item-first"></li>
              <li className="section-top__gallery-list-item-second"><img className="section-top__gallery-list-item-img" src={hands} alt="" /></li>
              <li className="section-top__gallery-list-item-third"><img className="section-top__gallery-list-item-img" src={hair} alt="" /></li>
              <li className="section-top__gallery-list-item-fourth"><img className="section-top__gallery-list-item-img" src={book} alt="" /></li>
              <li className="section-top__gallery-list-item-fifth"></li>
            </ul>
          </article>

          <ul className="section-top__benefits-list">
            <li className="section-top__benefits-list-item">
              <div className="section-top__benefits-list-icon-container">
                <img src={sunMoon} alt="" className="section-top__benefits-list-icon" />
              </div>
              <p className="section-top__benefits-list-text">Beautiful, comfortable loungewear for day or night.</p>
            </li>
            <li className="section-top__benefits-list-item">
              <div className="section-top__benefits-list-icon-container">
                <img src={bucket} alt="" className="section-top__benefits-list-icon" />
              </div>
              <p className="section-top__benefits-list-text">No wasteful extras, like tags or plastic packaging.</p>
            </li>
            <li className="section-top__benefits-list-item">
              <div className="section-top__benefits-list-icon-container">
                <img src={vibes} alt="" className="section-top__benefits-list-icon section-top__benefits-list-icon-vibes" />
              </div>
              <p className="section-top__benefits-list-text">Our signature fabric is incredibly comfortable — unlike anything you&apos;ve ever felt.</p></li>
          </ul>

          <button className="section-top__benefits-part-button">
            Customize Your Outfit
            <img src={vector} alt="" />
          </button>
        </article>

        <article className="section-top__gallery-part section-top__gallery-part-desktop">
          <ul className="section-top__gallery-list">
            <li className="section-top__gallery-list-item-first"></li>
            <li className="section-top__gallery-list-item-second"><img className="section-top__gallery-list-item-img" src={hands} alt="" /></li>
            <li className="section-top__gallery-list-item-third"><img className="section-top__gallery-list-item-img" src={hair} alt="" /></li>
            <li className="section-top__gallery-list-item-fourth"><img className="section-top__gallery-list-item-img" src={book} alt="" /></li>
            <li className="section-top__gallery-list-item-fifth"></li>
          </ul>
        </article>

        <article className="section-top__witness">
          <div className="section-top__witness-title">
            <img className="section-top__witness-title-portret" src={witnessPortret} alt="" />
            <div>
              <img className="section-top__witness-title-stars" src={stars} alt="" />
              <p className="section-top__witness-title-text">One of 500+ 5 Star Reviews Online</p>
              <p className="section-top__witness-title-name">Amy P.</p>
            </div>
          </div>
          <p className="section-top__witness-text section-top__witness-text-desktop">
            Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them.
          </p>
          <p className="section-top__witness-text section-top__witness-text-mobile">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo.
          </p>
        </article>
      </section>
    </div>
  </>
);
