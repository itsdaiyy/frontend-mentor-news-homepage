import { Squash as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { routes } from '../../routes';
import { useClickAway } from 'react-use';

function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setIsOpen(false));

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="absolute inset-0 bg-gray-900/50 "
          ></motion.div>
        )}
      </AnimatePresence>
      <div className="md:hidden" ref={ref}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 h-screen bg-white p-10 pt-40"
              initial={{ x: '100%' }}
              animate={{ x: 'calc(100vw - 70%)' }}
              exit={{ x: '100%' }}
            >
              <ul className="grid gap-4">
                {routes.map((route, index) => (
                  <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      ease: 'linear',
                      delay: 0.1 + index / 10,
                    }}
                    key={route.title}
                    className="p-[0.08rem]"
                  >
                    <motion.a
                      onClick={() => setIsOpen((prev) => !prev)}
                      href={route.href}
                      className="inline-block w-1/4"
                      whileHover={{
                        scale: 1.2,
                        x: '20%',
                        color: 'hsl(5, 85%, 63%)',
                      }}
                      whileTap={{ scale: 1 }}
                    >
                      {route.title}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        <Hamburger toggled={isOpen} toggle={setIsOpen} rounded />
      </div>
    </>
  );
}

export default NavMobile;
