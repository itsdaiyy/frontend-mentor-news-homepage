import logo from '../../assets/images/logo.svg';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

function Header() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-7 py-4 md:py-8">
      <img src={logo} />
      <NavDesktop />
      <NavMobile />
    </header>
  );
}

export default Header;
