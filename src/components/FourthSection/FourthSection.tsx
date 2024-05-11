import collage from '../../images/collage.jpg';
import stars from '../../icons/Stars.svg';
import vector from '../../icons/Vector.svg';
import bucket from '../../icons/bucket.svg';
import car from '../../icons/car.svg';
import sunMoon from '../../icons/sun-moon.svg';
import rightArrow from '../../icons/arrow-right.svg';
import leftArrow from '../../icons/arrow-left.svg';

export const FourthSection = () => (
  <section className="fourth-section">
    <div className="container">
      <h1 className="fourth-section__title">
        Comfort made easy
      </h1>

      <article className="fourth-section__jorney">
        <div className="fourth-section__jorney__squeres">

          <img className="fourth-section__jorney__squeres-arrow" src={leftArrow} alt="" />

          <div className="fourth-section__jorney__squeres__squere">
            <img className="fourth-section__jorney__squeres__squere_icon" src={bucket} alt="" />
            <h1 className="fourth-section__jorney__squeres__squere_title">
              You save.
            </h1>
            <p className="fourth-section__jorney__squeres__squere_text">
              Browse our comfort sets and save 15% when you bundle.
            </p>
          </div>

          <img className="fourth-section__jorney__squeres-arrow" src={rightArrow} alt="" />

          <div className="fourth-section__jorney__squeres__squere fourth-section__jorney__squeres__squere-ship fourth-section__jorney__squeres__squere-desktop">
            <img className="fourth-section__jorney__squeres__squere_icon fourth-section__jorney__squeres__squere_icon-car" src={car} alt="" />
            <h1 className="fourth-section__jorney__squeres__squere_title">
              We ship.
            </h1>
            <p className="fourth-section__jorney__squeres__squere_text">
              We ship your items within 1-2 days of receiving your order.
            </p>
          </div>
          <div className="fourth-section__jorney__squeres__squere fourth-section__jorney__squeres__squere-desktop">
            <img className="fourth-section__jorney__squeres__squere_icon" src={sunMoon} alt="" />
            <h1 className="fourth-section__jorney__squeres__squere_title">
              You enjoy!
            </h1>
            <p className="fourth-section__jorney__squeres__squere_text">
              Wear hernest around the house, out on the town, or in bed.
            </p>
          </div>
        </div>

        <div className="fourth-section-button-container">
          <button className="fourth-section-button">
            Customize Your Outfit
            <img src={vector} alt="" />
          </button>

          <div className="fourth-section__button-description"><img src={stars} alt="" /><p>Over 500+ 5 Star Reviews Online</p></div>
        </div>

        <h1 className="fourth-section__funs-title">
          What are our fans saying?
        </h1>
        <p className="fourth-section__funs-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus.</p>
      </article>
    </div>
    <img className="fourth-section__collage" src={collage} alt="" />
  </section>
)