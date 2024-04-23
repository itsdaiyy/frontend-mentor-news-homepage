import ImgRetro from '../../assets/images/image-retro-pcs.jpg';
import ImgTopLaptops from '../../assets/images/image-top-laptops.jpg';
import ImgGamingGrowth from '../../assets/images/image-gaming-growth.jpg';

const articles = [
  {
    id: 1,
    image: ImgRetro,
    title: 'Reviving Retro PCs',
    content: 'What happens when old PCs are given modern upgrades?',
  },
  {
    id: 2,
    image: ImgTopLaptops,
    title: 'Top 10 Laptops of 2022',
    content: 'Our best picks for various needs and budgets.',
  },
  {
    id: 3,
    image: ImgGamingGrowth,
    title: 'The Growth of Gaming',
    content: 'How the pandemic has sparked fresh opportunities.',
  },
];

function ThreeColumns() {
  return (
    // <div className="grid grid-rows-3 gap-8 md:col-span-3 md:grid-cols-3 md:grid-rows-none md:gap-4 lg:gap-14">
    <>
      {articles.map((article) => (
        <div key={article.id} className="flex gap-6 md:gap-3">
          <div className="w-1/4 shrink-0 overflow-hidden">
            <img src={article.image} className="h-full w-full object-cover" />
          </div>
          {/* info container */}
          <div>
            <a href="#">
              <div className="flex h-full flex-col gap-2">
                <h3 className="grow text-4xl font-bold text-grayishBlue md:text-3xl lg:text-4xl">
                  0{article.id}
                </h3>
                <h1 className="my-2 text-xl font-extrabold hover:text-softRed sm:text-2xl md:my-0 md:text-lg lg:text-2xl">
                  {article.title}
                </h1>
                <p className="text-darkGrayishBlue md:text-sm lg:text-base">
                  {article.content}
                </p>
              </div>
            </a>
          </div>
        </div>
      ))}
    </>
    // </div>
  );
}

export default ThreeColumns;
