import MainContent from './MainContent';
import SideBar from './SideBar';
import ThreeColumns from './ThreeColumns';

function Main() {
  return (
    <main className="mx-auto mb-20 grid max-w-7xl gap-8 px-7 md:grid-cols-3 md:grid-rows-[1fr_auto] md:gap-x-4 lg:gap-14">
      <MainContent />
      <SideBar />
      <ThreeColumns />
    </main>
  );
}

export default Main;
