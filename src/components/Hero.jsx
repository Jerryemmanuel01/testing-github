
const Hero = ({name}) => {
  return (
    <div>
      <div className="get-wrapper">
        <div className="get">Get Virtual <br />Consultation For <br />A healthier {name}</div>
        <div className="words">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          doloribus <br /> est a quis dolore necessitatibus quas labore eius, facilis
          fugiat ea inventore sit ullam <br />esse aspernatur voluptas provident
          nostrum impedit?
        </div>
        <div className="cta-wrapper">
          <button className="contact cta">Contact Us</button>
          <button className="start cta">Get Consultation </button>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Hero;
