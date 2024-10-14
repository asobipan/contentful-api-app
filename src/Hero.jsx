import heroIcon from "./assets/coding-icon.svg";

const Hero = () => {
  return (
    <section className='hero '>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful Cms</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,
            architecto. Quibusdam incidunt esse animi in, libero nesciunt fugit
            doloribus ea consequuntur unde inventore quas labore et fugiat
            laudantium magni sequi? Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroIcon} alt='Coding' className='img' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
