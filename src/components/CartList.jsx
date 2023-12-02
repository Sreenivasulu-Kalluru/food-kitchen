import React from 'react';
import { MENU_IMG } from '../utils/constants';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../utils/cartSlice';
import toast, { Toaster } from 'react-hot-toast';

const CartList = (props) => {
  const { items } = props;
  const dispatch = useDispatch();

  const handleDeleteItem = (item) => {
    dispatch(deleteItem(item?.card?.info?.id));
    toast.success('Removed from the Cart', {
      className: 'font-ProximaNovaSemiBold',
      position: 'top-center',
      duration: 1500,
    });
  };

  const truncateDescription = (description) => {
    return description.length >= 100
      ? description.substring(0, 100) + '...'
      : description;
  };

  return (
    <>
      {items?.length != 0 ? (
        <>
          {items?.map((item) => (
            <div key={item?.card?.info?.id} className="c">
              <div className="flex justify-between pt-6 pb-12">
                <div className="categoryLeft w-[50%] mr-2 sm:w-[600px] sm:mr-0">
                  {item?.card?.info?.isVeg ? (
                    <img src="/images/veg.png" alt="icon" />
                  ) : (
                    <img src="/images/nonveg.png" alt="icon" />
                  )}
                  <h3 className="text-base font-ProximaNovaMed">
                    {item?.card?.info?.name}
                  </h3>
                  <span className="text-sm rupee font-ProximaNovaThin text-customblack-3">
                    {item?.card?.info?.price / 100 ||
                      item?.card?.info?.defaultPrice / 100}
                  </span>
                  {item?.card?.info?.description && (
                    <p className="w-9/12 mt-2 text-sm tracking-tight md:w-full text-customcolor-4">
                      {truncateDescription(item?.card?.info?.description)}
                    </p>
                  )}
                </div>
                <div className="categoryRight relative w-36 h-36 sm:w-[150px] sm:h-[96px]">
                  {item?.card?.info?.imageId && (
                    <img
                      src={MENU_IMG + item?.card?.info?.imageId}
                      alt="menu-img"
                      className="object-cover w-full h-full sm:w-[150px] sm:h-[96px] rounded-lg"
                    />
                  )}
                  <button
                    className="absolute bottom-0 w-20 text-sm text-white uppercase transition -translate-x-1/2 bg-red-600 rounded cursor-pointer hover:bg-red-500 h-9 md:w-24 md:h-9 addBtn font-ProximaNovaBold left-1/2"
                    onClick={() => handleDeleteItem(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <img
            src="/images/empty-cart.webp"
            alt="empty-cart"
            className="object-cover h-64 w-72"
          />
          <h2 className="font-ProximaNovaSemiBold text-[#535665] mt-6 text-xl">
            Your cart is empty
          </h2>
          <p className="mt-2 text-[#7e808c] font-ProximaNovaThin text-sm">
            You can go to home page to view more restaurants
          </p>
          <Link
            to="/"
            className="uppercase bg-orange-400 hover:bg-orange-500 transition text-white font-ProximaNovaSemiBold mt-4 px-5 py-[11px] cursor-pointer text-[15px]"
          >
            see restaurants near you
          </Link>
        </div>
      )}

      <Toaster />
    </>
  );
};

export default CartList;
