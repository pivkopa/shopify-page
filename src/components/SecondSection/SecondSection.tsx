import harris from '../../icons/harris.svg';
import trendhunter from '../../icons/trendhunter.svg';
import canadianLiving from '../../icons/canadian-living.svg';
import ecohub from '../../icons/ecohub.svg';
import exoStylist from '../../icons/exo-stylist.svg';
import vibes from '../../icons/vibes.svg';
import bucket from '../../icons/bucket.svg';
import sunMoon from '../../icons/sun-moon.svg';
import leaf from '../../icons/leaf.svg';
import hairSlider from '../../images/hair-slider.png';
import handsIcon from '../../images/hands-icon.png';
import hairIcon from '../../images/hair-icon.png';
import rightArrow from '../../icons/arrow-right.svg';
import leftArrow from '../../icons/arrow-left.svg';
import logosSet from '../../icons/mobile-logos-set.png';
import pointBlack from '../../icons/point-black.svg';
import pointGrey from '../../icons/point-grey.svg';


export const SecondSection = () => (
  <section className="second-section">
    <div className="second-section__partners-container">
      <div className="container">
        <p className="second-section__partners-title">as seen in</p>
        <img className="second-section__partners-logosSet" src={logosSet} alt="" />
        <div className="second-section__partners-logosSet__pagination">
          <img className="second-section__partners-logosSet__pagination-item" src={pointGrey} alt="" />
          <img className="second-section__partners-logosSet__pagination-item" src={pointBlack} alt="" />
          <img className="second-section__partners-logosSet__pagination-item" src={pointGrey} alt="" />
        </div>

        <article className="second-section__partners">
          <img className="second-section__partners-item" src={exoStylist} alt="" />
          <img className="second-section__partners-item" src={canadianLiving} alt="" />
          <img className="second-section__partners-item" src={harris} alt="" />
          <img className="second-section__partners-item" src={ecohub} alt="" />
          <img className="second-section__partners-item second-section__partners-item-desktop" src={trendhunter} alt="" />
        </article>
      </div>
    </div>

    <div className="container">
      <div className="second-section__container">
        <article className="second-section__advanteges">
          <h1 className="second-section__advanteges-title">Loungewear you can be proud of.
          </h1>

          <article className="second-section__slider-mobile">
            <div className="second-section__slider-container">
              <img className="second-section__slider-arrow" src={leftArrow} alt="" />
              <img className="second-section__slider-main" src={hairSlider} alt="" />
              <div className="second-section__slider-icons">
                <img className="second-section__slider-icon" src={handsIcon} alt="" />
                <img className="second-section__slider-icon" src={hairIcon} alt="" />
                <img className="second-section__slider-icon" src={hairIcon} alt="" />
                <img className="second-section__slider-icon" src={hairIcon} alt="" />
                <img className="second-section__slider-icon" src={hairIcon} alt="" />
                <img className="second-section__slider-icon" src={hairIcon} alt="" />
                <img className="second-section__slider-icon" src={hairIcon} alt="" />
                <img className="second-section__slider-icon" src={hairIcon} alt="" />
              </div>
              <img className="second-section__slider-arrow" src={rightArrow} alt="" />
            </div>
            <p className="second-section__slider-description">White Robe</p>
          </article>

          <ul className="second-section__advanteges__list">
            <li className="second-section__advanteges__item">
              <div className="second-section__advanteges__icon-container">
                <img src={bucket} alt="" className="second-section__advanteges__icon" />
              </div>
              <div className="second-section__advanteges__text">
                <h1 className="second-section__advanteges__title">Ethically sourced.
                </h1>
                <p className="second-section__advanteges__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. </p>
              </div>
            </li>
            <li className="second-section__advanteges__item">
              <div className="second-section__advanteges__icon-container">
                <img src={leaf} alt="" className="second-section__advanteges__icon" />
              </div>
              <div className="second-section__advanteges__text">
                <h1 className="second-section__advanteges__title">
                  Responsibly made.
                </h1>
                <p className="second-section__advanteges__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.</p>
              </div>
            </li>
            <li className="second-section__advanteges__item">
              <div className="second-section__advanteges__icon-container">
                <img src={sunMoon} alt="" className="second-section__advanteges__icon" />
              </div>
              <div className="second-section__advanteges__text">
                <h1 className="second-section__advanteges__title">
                  Made for living in.
                </h1>
                <p className="second-section__advanteges__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. </p>
              </div>
            </li>
            <li className="second-section__advanteges__item">
              <div className="second-section__advanteges__icon-container">
                <img src={vibes} alt="" className="second-section__advanteges__icon second-section__advanteges__icon-vibes" />
              </div>
              <div className="second-section__advanteges__text">
                <h1 className="second-section__advanteges__title">
                  Unimaginably comfortable.
                </h1>
                <p className="second-section__advanteges__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.</p>
              </div>
            </li>
          </ul>
        </article>

        <article className="second-section__slider-desktop">
          <div className="second-section__slider-container">
            <img className="second-section__slider-arrow" src={leftArrow} alt="" />
            <img className="second-section__slider-main" src={hairSlider} alt="" />
            <div className="second-section__slider-icons">
              <img className="second-section__slider-icon" src={handsIcon} alt="" />
              <img className="second-section__slider-icon" src={hairIcon} alt="" />
              <img className="second-section__slider-icon" src={hairIcon} alt="" />
              <img className="second-section__slider-icon" src={hairIcon} alt="" />
              <img className="second-section__slider-icon" src={hairIcon} alt="" />
              <img className="second-section__slider-icon" src={hairIcon} alt="" />
              <img className="second-section__slider-icon" src={hairIcon} alt="" />
              <img className="second-section__slider-icon" src={hairIcon} alt="" />
            </div>
            <img className="second-section__slider-arrow" src={rightArrow} alt="" />
          </div>
          <p className="second-section__slider-description">White Robe</p>
        </article>
      </div>
    </div>
  </section>
)