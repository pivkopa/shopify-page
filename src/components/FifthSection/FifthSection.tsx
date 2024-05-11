import plus from '../../icons/plus.svg';
import minus from '../../icons/minus.svg';
import handsMiddle from '../../images/hands-middle.png';
import bookMiddle from '../../images/book-middle.png';
import handsSecond from '../../images/hands-second.png';
import vector from '../../icons/Vector.svg';
import stars from '../../icons/Stars.svg';
import { WitnesSlider } from '../WitnesesSlider/WitnesesSlider';
import pointBlack from '../../icons/point-black.svg';
import pointGrey from '../../icons/point-grey.svg';

export const FifthSection = () => (
  <section className="fifth-section">
    <div className="container">
      <article>
        <WitnesSlider />
        <div className="second-section__partners-logosSet__pagination">
          <img className="second-section__partners-logosSet__pagination-item" src={pointGrey} alt="" />
          <img className="second-section__partners-logosSet__pagination-item" src={pointBlack} alt="" />
          <img className="second-section__partners-logosSet__pagination-item" src={pointGrey} alt="" />
        </div>
        <div className="fifth-section-button-container">
          <button className="fifth-section-button">
            Customize Your Outfit
            <img src={vector} alt="" />
          </button>

          <div className="fifth-section__button-description"><img src={stars} alt="" /><p>Over 500+ 5 Star Reviews Online</p></div>
        </div>
      </article>

      <div className="fifth-section__main-container">
        <article className="fifth-section__questions">
          <h1 className="fifth-section__questions__title">
            Frequently asked questions.
          </h1>

          <ul className="fifth-section__questions__list">
            <li className="fifth-section__questions__list__item">
              <div className="fifth-section__questions__list__item__container">
                <h1 className="fifth-section__questions__list__item__title">
                  lorem ipsum dolor sit amet
                </h1>
                <img src={minus} alt="" />
              </div>
              <p className="fifth-section__questions__list__item__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.
              </p>
            </li>
            <li className="fifth-section__questions__list__item">
              <div className="fifth-section__questions__list__item__container">
                <h1 className="fifth-section__questions__list__item__title">
                  lorem ipsum dolor sit amet
                </h1>
                <img src={plus} alt="" />
              </div>
            </li>
            <li className="fifth-section__questions__list__item">
              <div className="fifth-section__questions__list__item__container">
                <h1 className="fifth-section__questions__list__item__title">
                  lorem ipsum dolor sit amet
                </h1>
                <img src={plus} alt="" />
              </div>

            </li>
            <li className="fifth-section__questions__list__item">
              <div className="fifth-section__questions__list__item__container">
                <h1 className="fifth-section__questions__list__item__title">
                  lorem ipsum dolor sit amet
                </h1>
                <img src={plus} alt="" />
              </div>

            </li>
            <li className="fifth-section__questions__list__item">
              <div className="fifth-section__questions__list__item__container">
                <h1 className="fifth-section__questions__list__item__title">
                  lorem ipsum dolor sit amet
                </h1>
                <img src={plus} alt="" />
              </div>

            </li>
            <li className="fifth-section__questions__list__item">
              <div className="fifth-section__questions__list__item__container">
                <h1 className="fifth-section__questions__list__item__title">
                  lorem ipsum dolor sit amet
                </h1>
                <img src={plus} alt="" />
              </div>

            </li>
          </ul>
        </article>

        <article className="fifth-section__gallery">
          <img className="fifth-section__gallery__left-picture" src={bookMiddle} alt="" />
          <img className="fifth-section__gallery__center-picture" src={handsMiddle} alt="" />
          <img className="fifth-section__gallery__right-picture" src={handsSecond} alt="" />
        </article>

        <div className="fifth-section-button-container fifth-section-button-container-mobile">
          <button className="fifth-section-button">
            Customize Your Outfit
            <img src={vector} alt="" />
          </button>

          <div className="fifth-section__button-description"><img src={stars} alt="" />
            <p>Over 500+ 5 Star Reviews Online</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
