import { useDispatch, useSelector } from 'react-redux';
import CartList from '../components/CartList';
import { clearCart } from '../utils/cartSlice';
import toast, { Toaster } from 'react-hot-toast';
import Modal from '../components/Modal';

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

  return (
    <div className="w-full min-h-screen px-3 mx-auto 2xl:w-6/12 menu-container pt-28 pb-28 md:w-10/12">
      {ModalOpen && <Modal />}

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
          <CartList items={cartItems} />
        </>
      )}

      <Toaster />
    </div>
  );
};

export default Cart;
