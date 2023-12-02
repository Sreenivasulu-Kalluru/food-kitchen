import { useSelector } from 'react-redux';
import Modal from '../components/Modal';

const About = () => {
  const ModalOpen = useSelector((store) => store.toggleData.isModalOpen);

  return (
    <div className="w-full pb-5 pt-18">
      <div className="container grid items-center justify-between min-h-screen grid-cols-1 gap-10 px-10 py-40 mx-auto md:grid-cols-2">
        {ModalOpen && <Modal />}

        <div>
          <img
            src="/images/about-page.jpg"
            alt="about-page-banner"
            className="w-full h-fit"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="mb-2 text-2xl md:mb-6 font-GrotBlack md:text-4xl">
            🍽️ Food Kitchen🍴
          </h2>
          <p className="w-full mx-auto text-base font-GrotMed md:text-xl">
            Food Kitchen is a place where you can get all sorts of Restaurants
            where you can order anything, anytime you desire. This works on
            Swiggy's Live Data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
