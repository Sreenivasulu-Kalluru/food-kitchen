import { Collapse } from 'react-collapse';
import RestaurantMenuList from './RestaurantMenuList';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const RestaurantCategory = (props) => {
  const { data, handleShowItem, ShowItem } = props;

  const handleItemShown = () => {
    handleShowItem();
  };

  return (
    <>
      {/* Accordion Header */}
      <div
        onClick={handleItemShown}
        className="flex items-center justify-between px-3 py-5 text-left shadow-md cursor-pointer sm:p-6"
      >
        <h2 className="text-customblack-3 sm:text-lg font-ProximaNovaBold">
          {data?.title} ({data?.itemCards?.length})
        </h2>
        <div className="text-xl text-customblack-3">
          {ShowItem ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>

      {/* Accordion Body */}
      <Collapse isOpened={ShowItem}>
        {ShowItem && <RestaurantMenuList items={data?.itemCards} />}
      </Collapse>
    </>
  );
};

export default RestaurantCategory;
