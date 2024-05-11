import handsMin from '../../images/hands-min.png';
import hairMin from '../../images/hair-min.png';
import curtains from '../../images/curtains.png';

export const ThirdSection = () => (
  <section className="third-section">
    <div className="container">
      <div className="third-section-container">
      <h1 className="third-section__motivation-part__title third-section__motivation-part__title-mobile">
          Be your best self.
        </h1>
      
      <article className="third-section__gallery">
        <img className="third-section__gallery__left-picture" src={handsMin} alt="" />
        <img className="third-section__gallery__center-picture" src={hairMin} alt="" />
        <img className="third-section__gallery__right-picture" src={curtains} alt="" />
      </article>

      <article className="third-section__motivation-part">
        <h1 className="third-section__motivation-part__title third-section__motivation-part__title-desktop">
          Be your best self.
        </h1>
        <p className="third-section__motivation-part__text">
          Hi! My name&apos;s &#91;Insert Name&#93;, and I founded &#91;Insert&#93; in ____.
          <br /><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.
          <br /><br />
          Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec placerat volutpat ligula, ac consectetur felis varius non. Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu congue, faucibus libero nec, placerat ligula.
          <br /><br />
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.
          <br /><br />
          Fusce non ante velit. Sed auctor odio eu semper molestie. Nam mattis, sapien eget lobortis fringilla, eros ipsum tristique tellus, ac convallis urna massa at nibh.
          <br /><br />
          Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in sapien.
          <br /><br />
          Cras mattis varius mollis.
        </p>
        <button className="third-section__motivation-part__button">Customize Your Outfit</button>
      </article>
      </div>
    </div>
  </section>
);
