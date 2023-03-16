import { useAuth } from 'modules/auth';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import styles from './Drawer.module.css';
import useDrawer from './useDrawer';

const duration = 300;

const defaultStyle = {
  transition: `transform ${duration}ms ease-in-out`,
  transform: 'translateX(100%)',
};
const defaultOverlayStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { transform: 'translateX(0)' },
  entered: { transform: 'translateX(0)' },
  exiting: { transform: 'translateX(100%)' },
  exited: { transform: 'translateX(100%)' },
  unmounted: { transform: 'translateX(100%)' },
};

const transitionOverlayStyles = {
  entering: { opacity: 0.5 },
  entered: { opacity: 0.5 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 },
};

const Drawer = () => {
  const nodeRef = useRef(null);
  const { user, logout } = useAuth();
  const { visible, close } = useDrawer();

  return (
    <Transition nodeRef={nodeRef} in={visible} timeout={duration} mountOnEnter unmountOnExit>
      {(state) => (
        <>
          <div
            ref={nodeRef}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
            className={styles.sidebar}
          >
            <ul className={styles.menuList}>
              <li>
                <Link className={styles.link} to="/" onClick={close}>
                  Home
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/albums" onClick={close}>
                  Albums
                </Link>
              </li>
              {user && (
                <li>
                  <button
                    className={styles.linkButtonFullWidth}
                    onClick={() => {
                      logout();
                      close();
                    }}
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
          <div
            style={{
              ...defaultOverlayStyle,
              ...transitionOverlayStyles[state],
            }}
            className={styles.overlay}
            onClick={close}
          ></div>
        </>
      )}
    </Transition>
  );
};

export default Drawer;
