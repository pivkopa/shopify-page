import avatar from '../../icons/color-wheel.svg';
import stars from '../../icons/Stars.svg';
import arrowLeft from '../../icons/arrow-left.svg';
import arrowRight from '../../icons/arrow-right.svg';

export const WitnesSlider = () => (
  <div className="witness-slider">
    <img className="witness-slider__arrow" src={arrowLeft} alt="" />

    <div className="witness-slider__item">
      <div className="witness-slider__item__title">
        <img className="witness-slider__item__avatar" src={avatar} alt="" />
        <div className="witness-slider__item__container">
          <img src={stars} alt="" />
          <p className="witness-slider__item__name">Jane, S.</p>
        </div>
      </div>
      <p className="witness-slider__item__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.</p>
    </div>

    <div className="witness-slider__item witness-slider__item-desktop">
      <div className="witness-slider__item__title">
        <img className="witness-slider__item__avatar" src={avatar} alt="" />
        <div className="witness-slider__item__container">
          <img src={stars} alt="" />
          <p className="witness-slider__item__name">Jane, S.</p>
        </div>
      </div>
      <p className="witness-slider__item__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.</p>
    </div>

    <div className="witness-slider_item witness-slider__item-desktop">
    <div className="witness-slider__item">
      <div className="witness-slider__item__title">
        <img className="witness-slider__item__avatar" src={avatar} alt="" />
        <div className="witness-slider__item__container">
          <img src={stars} alt="" />
          <p className="witness-slider__item__name">Jane, S.</p>
        </div>
      </div>
      <p className="witness-slider__item__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.</p>
    </div>
    </div>
    <img className="witness-slider__arrow" src={arrowRight} alt="" />
  </div>
);
