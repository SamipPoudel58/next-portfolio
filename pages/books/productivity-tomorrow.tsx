import Footer from '../../components/Footer';
import MetaHead from '../../components/MetaHead';
import Navigation from '../../components/Navigation';
import Stars from '../../components/Stars';

const ProductivityTomorrow = () => {
  return (
    <div>
      <MetaHead
        title="Productivity Tomorrow by Samip Poudel"
        ogtitle="Productivity Tomorrow by Samip Poudel"
        description="Productivity Tomorrow! Because today is almost over!"
        url="https://samippoudel.com.np/books/productivity-tomorrow"
        image="https://samip.vercel.app/pt-og-cover.png"
      />
      <Navigation />

      <section className="limit-width-lg min-h-screen pt-32 flex flex-col md:flex-row px-8 xl:px-0 gap-x-8 xl:gap-x-0 gap-y-8 md:gap-y-0">
        <div className="w-full sm:w-[50%] md:w-[35%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="shadow-lg max-w-full md:max-h-[400px]"
            src="/images/productivity-tomorrow.webp"
            alt="book cover"
          />
        </div>
        <div className="w-full sm:w-[50%] md:w-[65%] xl:max-w-[500px] pb-12 sm:pb-0">
          <h1 className="heading-lg text-4xl text-left">
            Productivity Tomorrow
          </h1>
          <p className="mb-2">
            by{' '}
            <span className="font-bold text-[color:var(--c-black-dark)]">
              Samip Poudel
            </span>
          </p>
          <Stars count={5} />
          <p className="my-6 text-[color:var(--c-black-dark)]">
            Do you procrastinate a lot? Are you frustated with not being
            productive? Well you need help, not just any help but
            &ldquo;Self-Help&rdquo;. Introducing &ldquo;Productivity Tomorrow!!
            Because today is almost over.&rdquo; Best advices to change your
            life... well until my next book comes out. A book that teaches you
            to be productive and make the most out of your daily life. Its time
            to take control of your life!
          </p>
          <a
            className="bg-[#8EDD1E] hover:bg-[#8ace1c] hover:shadow-lg block  font-bold text-white text-center w-full py-4"
            href="/productivity-tomorrow.pdf"
          >
            Buy $0.0
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductivityTomorrow;
