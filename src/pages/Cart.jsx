import { useDispatch, useSelector } from 'react-redux';
import CartList from '../components/CartList';
import { clearCart } from '../utils/cartSlice';
import toast, { Toaster } from 'react-hot-toast';
import { toggleModal } from '../utils/toggleSlice';
import OrderModal from '../components/OrderModal';

const Cart = () => {
  const cartItems = useSelector((store) => store.cartData.items);
  const dispatch = useDispatch();
  const ModalOpen = useSelector((store) => store.toggleData.isModalOpen);

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success('Cart is cleared Successfully', {
      className: 'font-ProximaNovaSemiBold',
      position: 'top-center',
      duration: 1500,
    });
  };

  const handleModal = () => {
    dispatch(toggleModal());
    dispatch(clearCart());
  };

  const itemPrices = cartItems.map((item) => {
    return (
      item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100
    );
  });

  const totalPrice = itemPrices.reduce((total, curr) => {
    return total + curr;
  }, 0);

  return (
    <div className="w-full min-h-screen px-3 mx-auto 2xl:w-6/12 menu-container pt-28 pb-28 md:w-10/12">
      {ModalOpen && <OrderModal />}

      {cartItems.length === 0 ? (
        <CartList items={cartItems} />
      ) : (
        <>
          <h2 className="mb-5 text-2xl text-center font-ProximaNovaBlack md:text-3xl lg:text-4xl">
            Welcome to your Cart
          </h2>
          <button
            className="block w-24 mx-auto mb-3 text-sm text-white transition bg-red-600 rounded-md hover:bg-red-500 h-9 md:w-32 md:h-11 md:text-base font-ProximaNovaSemiBold"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>

          <hr />

          <CartList items={cartItems} />

          <hr />

          <div className="flex items-center justify-between mt-4">
            <h3 className="text-xl font-medium">
              Total Price: ₹{Math.trunc(+totalPrice)}
            </h3>
            <button
              className="uppercase bg-orange-400 hover:bg-orange-500 transition text-white font-ProximaNovaSemiBold px-5 py-[11px] cursor-pointer text-[15px]"
              onClick={handleModal}
            >
              Place Order
            </button>
          </div>
        </>
      )}

      <Toaster />
    </div>
  );
};

export default Cart;
