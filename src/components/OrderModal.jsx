import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../utils/toggleSlice';
import { Link } from 'react-router-dom';

const OrderModal = () => {
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(toggleModal());
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-10 modal-wrapper bg-customblack-1">
      <div
        className="flex items-center justify-center h-full modal-container font-ProximaNovaSemiBold"
        onClick={handleModal}
      >
        <div
          className="relative w-full max-w-4xl max-h-full p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative bg-white rounded-lg shadow text-center dark:bg-gray-200 p-6 w-[80%] mx-auto">
            <h2 className="mb-4 text-xl md:text-2xl">
              Your Order got placed Successfully!🤩
            </h2>

            <p className="mb-4 text-lg">Thanks for making order from us..🌹</p>

            <Link
              to="/"
              className="uppercase bg-orange-400 hover:bg-orange-500 transition text-white font-ProximaNovaSemiBold mt-4 px-3 md:px-4 py-2 md:py-3 cursor-pointer text-[15px]"
              onClick={handleModal}
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
