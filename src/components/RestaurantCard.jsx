import { GRAY_RES_IMG, RES_IMG } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resInfo } = props;
  const {
    name,
    cloudinaryImageId,
    avgRating,
    sla,
    cuisines,
    areaName,
    isOpen,
  } = resInfo;

  const truncateCuisines = (cuisines) => {
    return cuisines.length >= 35 ? cuisines.substring(0, 35) + '...' : cuisines;
  };

  const truncateName = (name) => {
    return name.length >= 25 ? name.substring(0, 25) + '...' : name;
  };

  return (
    <div className="tracking-tight w-[330px] h-[320px] group-hover:scale-95 transition-transform">
      {isOpen ? (
        <div>
          <img
            src={RES_IMG + cloudinaryImageId}
            className="w-[330px] h-[220px] object-cover rounded-2xl relative hover:opacity-90 transition"
            alt="res-img"
          />
        </div>
      ) : (
        <div>
          <img
            src={GRAY_RES_IMG + cloudinaryImageId}
            className="w-[330px] h-[220px] object-cover rounded-2xl relative"
            alt="res-img"
          />
        </div>
      )}
      <h3 className="mt-4 text-lg md:text-xl font-GrotBold text-customblack-1">
        {truncateName(name)}
      </h3>

      {avgRating ? (
        <div className="flex items-center gap-1">
          <div>
            <img src="/images/star-icon.png" alt="star-icon" />
          </div>

          <div>
            <span className="text-base text-customblack-1 font-GrotBold">
              {avgRating} • {sla.slaString}
            </span>
          </div>
        </div>
      ) : (
        <span className="text-base text-customblack-1 font-GrotBold">
          {sla.slaString}
        </span>
      )}
      <p className="text-base font-GrotThin text-customblack-2">
        {truncateCuisines(cuisines.join(', '))}
      </p>
      <span className="text-base font-GrotThin font-bold text-customblack-2">
        {areaName}
      </span>
    </div>
  );
};

export const RestaurantCardOffer = (RestaurantCard) => {
  return (props) => {
    const { resInfo } = props;
    const { isOpen } = resInfo;
    return (
      <>
        <RestaurantCard {...props} />
        {isOpen && (
          <>
            {resInfo?.aggregatedDiscountInfoV2 && (
              <div className="font-ProximaNovaBlack text-white/95 text-[22px] absolute bottom-[108px] left-4 group-hover:scale-95 transition-transform resoffer">
                {resInfo?.aggregatedDiscountInfoV2?.header}
              </div>
            )}
            {resInfo?.aggregatedDiscountInfoV3 && (
              <div className="font-ProximaNovaBlack text-white/95 text-[22px] absolute bottom-[108px] left-4 group-hover:scale-95 transition-transform resoffer">
                {resInfo?.aggregatedDiscountInfoV3?.header}{' '}
                {resInfo?.aggregatedDiscountInfoV3?.subHeader}
              </div>
            )}
          </>
        )}
      </>
    );
  };
};

export default RestaurantCard;
