import Navigation from './Navigation';

const Intro = () => {
  return (
    <section className="intro__wrapper">
      <Navigation />
      <div className="intro">
        <div className="intro__content">
          <div className="intro__texts">
            <h1 className="intro__name">Samip Poudel</h1>
            <p className="intro__job intro__job-main">
              Software Engineer and Designer.
            </p>

            <p className="intro__job mt-1">
              Hello! I&apos;m a Full-Stack Web Developer based in Nepal who
              loves bringing ideas to life through design and code.
            </p>

            <p className="intro__job mt-1">
              If you have a project in mind, think you need my help or just
              fancy saying hey, then get in touch.
            </p>
          </div>
          <div className="intro__image">
            <img
              width="795"
              height="796"
              src="/images/profile.webp"
              alt="profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
