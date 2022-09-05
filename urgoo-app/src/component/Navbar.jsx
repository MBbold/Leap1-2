import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../Style/NavbarStyle.css'
import { useLoggedUserContext } from '../context/LoggedUserContext';
// import UserModal from './LoggedUserDataModal';
// import { usePathNameContext } from '../provider/PathNameContext';
// import { useLoggedInContext } from '../provider/LoggedInContext';
// import { useModalToggleContext } from '../provider/ModalToggleContext';

const Navbar = () => {
//   const { pathName } = usePathNameContext();
  const [isLoggedIn,  setLoggedIn]   = useState(false);
  const [modalClose, setModalClose ]  = useState(true);
  const {isLoggedUser, setIsLoggedUser} = useLoggedUserContext();


  return (
    <div className='header'>
      <div className='navTop'>
        <div className='navTopContainer'>
          <ul>
            <li>
              <a href="https://www.facebook.com/">
                <img src="https://www.urgoo.mn/Images/mn.png" alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                <img src="https://www.urgoo.mn/Images/mn.png" alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                <img src="https://www.urgoo.mn/Images/mn.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div  className='nav'>
        <div className='logo'>MB IMAX</div>
        <div className='labelsContainer'>
          <ul>
            <Link id='home' to='/home'>
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
              {!isLoggedUser ? <li className='active'>
                {/* {isLoggedUser ? 'Нэвтэрсэн' : 'Нэвтрэх'} */}
                Нэвтрэх
              </li>: ""}
            </Link>
            <Link id='Profile' to='/Profile'>
              {isLoggedUser ? <li className='active'>
                {/* {isLoggedUser ? 'Нэвтэрсэн' : 'Нэвтрэх'} */}
                Профайл
              </li>: ""}
            </Link>
          </ul>
        </div>
      </div>
      
    </div>
  );
};
export default Navbar;