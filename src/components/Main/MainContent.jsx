import ImageMainDesktop from '../../assets/images/image-web-3-desktop.jpg';
import ImageMainMobile from '../../assets/images/image-web-3-mobile.jpg';
import Button from '../Button';

function MainContent() {
  return (
    <div className="flex flex-col gap-6 md:col-span-2 md:justify-start">
      <div className="max-h-[600px] grow sm:col-span-2">
        <picture>
          <source media="(min-width: 1024px)" srcSet={ImageMainDesktop} />
          <img src={ImageMainMobile} className="h-full w-full object-cover" />
        </picture>
      </div>
      <div className="grid items-start gap-x-14 gap-y-8 md:grid-cols-2 md:grid-rows-[1fr_auto]">
        <h1 className="col-span-1 row-span-2 text-4xl font-extrabold tracking-normal md:text-5xl">
          The Bright Future of Web 3.0?
        </h1>
        <p className="mb-2 leading-relaxed text-darkGrayishBlue md:mb-0">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <Button className="justify-self-start">Read more</Button>
      </div>
    </div>
  );
}

export default MainContent;
