const articles = [
  {
    title: 'Hydrogen VS Electric Cars',
    content: 'Will hydrogen-fueled cars ever catch up to EVs?',
  },
  {
    title: 'The Downsides of AI Artistry',
    content:
      'What are the possible adverse effects of on-demand AI image generation?',
  },
  {
    title: 'Is VC Funding Drying Up?',
    content:
      'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
  },
];

function SideBar() {
  return (
    <aside className="bg-darkBlue p-6 pb-0 md:col-span-1">
      <h2 className="text-4xl font-semibold text-softOrange">New</h2>
      <div className="flex flex-col divide-y">
        {articles.map((article) => (
          <div className="py-8 lg:py-8" key={article.title}>
            <a href="#">
              <h3 className="mb-2 text-2xl font-semibold text-offWhite hover:text-softOrange md:text-xl lg:text-2xl">
                {article.title}
              </h3>
              <p className="leading-relaxed text-darkGrayishBlue md:text-sm lg:text-base">
                {article.content}
              </p>
            </a>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default SideBar;
