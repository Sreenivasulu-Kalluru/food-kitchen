import { useState } from 'react';
import { MENU_API } from '../utils/constants';
import { Link, useParams } from 'react-router-dom';
import RestaurantCategory from './RestaurantCategory';
import ShimmerMenu from './ShimmerMenu';
import useRestaurantMenu from '../hooks/useRestaurantMenu';
import { useSelector } from 'react-redux';
import { IoLocationOutline } from 'react-icons/io5';
import Modal from './Modal';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [ResInfo, setResInfo, ResMenuInfo, setResMenuInfo] = useRestaurantMenu(
    resId,
    MENU_API
  );
  const [ShowIndex, setShowIndex] = useState(0);
  const ModalOpen = useSelector((store) => store.toggleData.isModalOpen);

  const handleShowItem = (currInd) => {
    if (currInd === ShowIndex) {
      setShowIndex(null);
    } else {
      setShowIndex(currInd);
    }
  };

  const {
    name,
    city,
    areaName,
    cuisines,
    avgRating,
    totalRatingsString,
    isOpen,
  } = ResInfo;

  if (ResMenuInfo?.length === 0) {
    return <ShimmerMenu />;
  }

  return (
    <div className="w-full min-h-screen px-3 mx-auto 2xl:w-6/12 menu-container pt-28 pb-36 md:w-10/12">
      {ModalOpen && <Modal />}

      {/* BreadCrumb */}
      <div className="flex mb-5" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-customblack-1 hover:text-black"
            >
              Home
            </Link>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-3 h-3 mx-1 text-customblack-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                to={`/`}
                className="ml-1 mr-1 text-sm font-medium md:mr-2 text-customblack-1 hover:text-black md:ml-2"
              >
                {city}
              </Link>
              <svg
                className="w-3 h-3 mx-1 text-customblack-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                to={`/restaurants/${resId}`}
                className="ml-1 text-sm font-medium text-customblack-1 hover:text-black md:ml-2"
              >
                {name}
              </Link>
            </div>
          </li>
        </ol>
      </div>

      {/* Restaurant Name */}
      <div className="flex items-start justify-between pt-5 mb-6">
        <div>
          <h2 className="mb-1 capitalize text-customcolor-6 sm:text-xl font-ProximaNovaSemiBold">
            {name}
          </h2>
          <p className="text-sm text-customcolor-5 font-ProximaNovaThin">
            {cuisines?.join(', ')}
          </p>
          <p className="flex items-center gap-1 text-sm font-bold text-customcolor-5 font-ProximaNovaThin">
            <span>
              <IoLocationOutline />
            </span>{' '}
            <span>
              {areaName}, {city}
            </span>
          </p>
        </div>
        {avgRating && (
          <div>
            <button className="p-[8px] cursor-pointer rounded resRating">
              <div className="flex items-center gap-1 justify-center avgRating pb-[10px] mb-[8px]">
                <img src="/images/star-icon.png" alt="star-img" />
                <span className="text-sm font-ProximaNovaSemiBold">
                  {avgRating}
                </span>
              </div>
              <span className="text-xs tracking-tight font-ProximaNovaSemiBold totalRatings">
                {totalRatingsString}
              </span>
            </button>
          </div>
        )}
      </div>
      {!isOpen ? (
        <h2 className="text-base resMsg font-ProximaNovaThin">
          Uh-oh! The outlet is not accepting orders at the moment. We&apos;re
          working to get them back online
        </h2>
      ) : (
        <>
          <div className="dottedDivider"></div>
          {/* Restaurant Category */}
          <ul>
            {ResMenuInfo?.map((category, index) => (
              <li key={category?.card?.card?.title}>
                <RestaurantCategory
                  data={category?.card?.card}
                  ShowItem={index === ShowIndex ? true : false}
                  handleShowItem={() => handleShowItem(index)}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default RestaurantMenu;
