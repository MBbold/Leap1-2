import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../Style/NavbarStyle.css'
// import UserModal from './LoggedUserDataModal';
// import { usePathNameContext } from '../provider/PathNameContext';
// import { useLoggedInContext } from '../provider/LoggedInContext';
// import { useModalToggleContext } from '../provider/ModalToggleContext';

const Navbar = () => {
//   const { pathName } = usePathNameContext();
  const [isLoggedIn,  setLoggedIn]   = useState(true);
  const [modalClose, setModalClose ]  = useState(true);

  return (
    <div className='header'>
      <h1>MB Cinema</h1>
      <div className='labelsContainer'>
        <ul>
          <Link id='home' to='/'>
            <li className={'/' === '/' ? 'active' : ''}>
              Эхлэл
            </li>
          </Link>
          <Link id='time' to='/movie'>
            <li className={'/movie' === '/movie' ? 'active' : ''}>
              Цаг захиалга
            </li>
          </Link>
          <Link id='seat' to='/seat'>
            <li className={'/table' === '/table' ? 'active' : ''}>
              Суудал захиалга
            </li>
          </Link>
          <Link id='login' to='/'>
            <li className={'/' === '/' ? 'active' : ''}>
              {isLoggedIn ? 'Нэвтэрсэн' : 'Нэвтрэх'}
            </li>
          </Link>
          {isLoggedIn && (
            <button id='modal' onClick={() => setModalClose(false)}>
              Профайл
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;