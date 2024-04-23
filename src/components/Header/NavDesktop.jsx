import { routes } from '../../routes';

function NavDesktop() {
  return (
    <ul className="hidden gap-10 text-sm md:flex md:items-center">
      {routes.map((route) => (
        <li key={route.title}>
          <a href={route.href} className="transition-colors hover:text-softRed">
            {route.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavDesktop;
