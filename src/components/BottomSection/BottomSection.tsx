import vector from '../../icons/Vector.svg';
import payments from '../../icons/payments.svg';
import timer from '../../icons/timer.svg';
import handsSecond from '../../images/hands-second-bottom.png';
import hairSecond from '../../images/hair-second-bottom.png';
import handsBottom from '../../images/hands-bottom.png';
import carBottom from '../../icons/car-bottom.svg';
import checkMark from '../../icons/check-mark.svg';
import bucketBottom from '../../icons/bucket-bottom.svg';
import stars from '../../icons/Stars.svg';

export const BottomSection = () => (
  <section className="bottom-section">
    <div className="container">
      <h1 className="bottom-section__title">
        Find something you love.
      </h1>

      <p className="bottom-section__description-mobile">
        Click below to browse our collection!
      </p>

      <p className="bottom-section__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.
      </p>

      <article className="bottom-section__gallery-part">
        <ul className="bottom-section__gallery-list">
          <li className="bottom-section__gallery-list-item-first"></li>
          <li className="bottom-section__gallery-list-item-second"><img className="bottom-section__gallery-list-item-img" src={handsSecond} alt="" /></li>
          <li className="bottom-section__gallery-list-item-third"><img className="bottom-section__gallery-list-item-img" src={hairSecond} alt="" /></li>
          <li className="bottom-section__gallery-list-item-fourth"><img className="bottom-section__gallery-list-item-img" src={handsBottom} alt="" /></li>
          <li className="bottom-section__gallery-list-item-fifth"></li>
        </ul>
      </article>

      <div className="bottom-section-button-container">
        <button className="bottom-section-button">
          Customize Your Outfit
          <img src={vector} alt="" />
        </button>

        <div className="bottom-section__button-description">
          <p className="bottom-section__button-description-text"><img className="bottom-section__button-description-img" src={timer} alt="" />Ships in 1-2 Days</p>
          <img src={payments} alt="" />
        </div>
      </div>
    </div>

    <article className="bottom-section__benefits">
      <div className="bottom-section-button-container-mobile">
        <button className="bottom-section-button-mobile">
          Customize Your Outfit
          <img src={vector} alt="" />
        </button>

        <div className="bottom-section__button-description-mobile"><img src={stars} alt="" /><p>Over 500+ 5 Star Reviews Online</p></div>
      </div>

      <div className="bottom-section__benefits__item">
        <img className="bottom-section__benefits__icon" src={carBottom} alt="" />
        <p className="bottom-section__benefits_text">FREE Shipping on Orders over $200</p>
      </div>
      <div className="bottom-section__benefits__item bottom-section__benefits__item-center">
        <img className="bottom-section__benefits__icon" src={checkMark} alt="" />
        <p className="bottom-section__benefits_text">
          Over 500+ 5 Star
          Reviews Online
        </p>
      </div>
      <div className="bottom-section__benefits__item">
        <img className="bottom-section__benefits__icon" src={bucketBottom} alt="" />
        <p className="bottom-section__benefits_text">Made ethically
          and responsibly.</p>
      </div>
    </article>
  </section>
);
