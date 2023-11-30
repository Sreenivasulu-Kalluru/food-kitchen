import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { IoIosRestaurant } from 'react-icons/io';
import { toggleMenu, toggleModal } from '../utils/toggleSlice';
import { CiLocationOn } from 'react-icons/ci';

const Header = () => {
  const cartItems = useSelector((store) => store.cartData.items);
  const UserLocation = useSelector((store) => store.locationData.userLocation);
  const MenuOpen = useSelector((store) => store.toggleData.isOpen);

  const dispatch = useDispatch();

  const handleMenu = () => {
    dispatch(toggleMenu());
  };

  const handleModal = () => {
    dispatch(toggleModal());
  };

  return (
    <>
      <header className="p-3 shadow-lg fixed w-full z-10 bg-white h-[85px]">
        <nav className="container flex items-center justify-between mx-auto">
          <div className="flex items-center">
            <Link to="/">
              <img
                src={LOGO_URL}
                alt="logo"
                className="h-[60px] rounded-full border border-black"
              />
            </Link>
            <Link
              to="/"
              className="hidden ml-4 text-lg text-black uppercase cursor-pointer font-ProximaNovaBold xl:block"
            >
              Food Kitchen
            </Link>
            {UserLocation?.address && (
              <button
                type="button"
                className="hidden xl:block text-sm ml-2 sm:ml-5 cursor-pointer text-[#686b78] hover:text-black transition font-ProximaNovaThin w-2/4 sm:w-auto text-center"
                onClick={handleModal}
              >
                {UserLocation?.address}
              </button>
            )}
            {UserLocation?.address && (
              <button
                type="button"
                className="xl:hidden text-sm ml-2 sm:ml-5 cursor-pointer text-[#686b78] hover:text-black transition font-ProximaNovaThin text-center flex gap-1"
                onClick={handleModal}
              >
                <div className="text-xl">
                  <CiLocationOn />
                </div>
                Location
              </button>
            )}
          </div>

          <ul className="items-center hidden gap-16 xl:flex text-customblack-1 font-GrotMed">
            <li>
              <Link to="/" className="transition hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition hover:text-black">
                About
              </Link>
            </li>
            <li className="relative ml-6">
              <Link to="/cart" className="transition hover:text-black">
                {cartItems.length > 0 ? (
                  <>
                    <span className="absolute top-1/2 -translate-y-1/2 -left-[26px]">
                      <svg
                        className="fill-[#60b246] stroke-0 stroke-[#60b246] overflow-hidden"
                        viewBox="-1 0 37 32"
                        height="20"
                        width="20"
                        fill="#686b78"
                      >
                        <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                      </svg>
                      <span className="absolute text-sm text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-ProximaNovaSemiBold">
                        {cartItems.length}
                      </span>
                    </span>
                  </>
                ) : (
                  <>
                    <span className="absolute -translate-y-1/2 top-1/2 -left-7">
                      <svg
                        className="fill-white stroke-2 stroke-[#282c3f] overflow-hidden"
                        viewBox="-1 0 37 32"
                        height="20"
                        width="20"
                        fill="#686b78"
                      >
                        <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                      </svg>
                      <span className="absolute text-sm -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-ProximaNovaSemiBold">
                        {cartItems.length}
                      </span>
                    </span>
                  </>
                )}
                <span className="text-base font-ProximaNovaMed">Cart</span>
              </Link>
            </li>
          </ul>

          <div
            className="mr-1 text-2xl cursor-pointer xl:hidden"
            onClick={handleMenu}
          >
            <IoIosRestaurant className="transition-all rotate-90 hover:opacity-70" />
          </div>
        </nav>
      </header>

      <div
        className={`h-screen w-full z-[99999] bg-white fixed top-0 ${
          MenuOpen ? 'left-0' : '-left-full'
        } right-0 transition-all duration-500`}
      >
        <div
          className="absolute text-3xl cursor-pointer right-5 top-6"
          onClick={handleMenu}
        >
          <MdOutlineRestaurantMenu className="transition-all hover:opacity-70" />
        </div>

        <ul className="flex flex-col items-center justify-center h-full gap-16 text-2xl text-customblack-1 font-GrotBlack">
          <li onClick={handleMenu} className="nav-items">
            <Link to="/" className="transition-all hover:opacity-70">
              Home
            </Link>
          </li>
          <li onClick={handleMenu} className="nav-items">
            <Link to="/about" className="transition-all hover:opacity-70">
              About
            </Link>
          </li>
          <li onClick={handleMenu} className="relative ml-10 nav-items">
            <Link to="/cart" className="transition-all hover:opacity-70">
              {cartItems.length > 0 ? (
                <>
                  <span className="absolute -translate-y-1/2 top-1/2 -left-10">
                    <svg
                      className="fill-[#60b246] stroke-0 stroke-[#60b246] overflow-hidden"
                      viewBox="-1 0 37 32"
                      height="50"
                      width="30"
                      fill="#686b78"
                    >
                      <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                    </svg>
                    <span className="absolute text-base text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-GrotBlack">
                      {cartItems.length}
                    </span>
                  </span>
                </>
              ) : (
                <>
                  <span className="absolute -translate-y-1/2 top-1/2 -left-10">
                    <svg
                      className="fill-white stroke-2 stroke-[#282c3f] overflow-hidden"
                      viewBox="-1 0 37 32"
                      height="50"
                      width="30"
                      fill="#686b78"
                    >
                      <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                    </svg>
                    <span className="absolute text-base -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-GrotBlack">
                      {cartItems.length}
                    </span>
                  </span>
                </>
              )}
              <span className="text-2xl font-GrotBlack">Cart</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
