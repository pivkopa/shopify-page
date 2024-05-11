import bolt from '../../icons/bolt.svg';
import co2 from '../../icons/co2.svg';
import h2o from '../../icons/h2o.svg';

export const GreenImpactSection = () => (
  <section className="green-impact-section">
    <h1 className="green-impact-section__title">
      Our total green impact
    </h1>

    <div className="green-impact-section__container">
      <article className="green-impact-section__item green-impact-section__item-left">
        <img src={co2} alt="" className="green-impact-section__icon" />
        <p className="green-impact-section__item-title">3,927 kg</p>
        <p className="green-impact-section__item-description">of CO2 saved</p>
      </article>
      <article className="green-impact-section__item green-impact-section__item-center">
        <img src={h2o} alt="" className="green-impact-section__icon" />
        <p className="green-impact-section__item-title">2,546,167 days</p>
        <p className="green-impact-section__item-description">of drinking water saved</p>
      </article>
      <article className="green-impact-section__item green-impact-section__item-right">
        <img className="green-impact-section__icon" src={bolt} alt="" />
        <p className="green-impact-section__item-title">7,321 kWh</p>
        <p className="green-impact-section__item-description">of energy saved</p>
      </article>
    </div>
  </section>
);
