import { useEffect, useRef, useState } from 'react';
import useSearchLocation from '../hooks/useSearchLocation';
import { ADDRESS_API, LOGO_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { getLocation } from '../utils/locationSlice';
import { CiLocationOn } from 'react-icons/ci';

const LandingPage = () => {
  const SearchText = useRef(null);
  const [searchData, setSearchData] = useState([]);
  const [ChangingText, setChangingText] = useState('Unexpected guests?');
  const dispatch = useDispatch();

  const handleSearch = (searchQuery) => {
    useSearchLocation(searchQuery, setSearchData);
  };

  const fetchAddress = async (place_id) => {
    try {
      const res = await fetch(ADDRESS_API + place_id);
      if (!res.ok) {
        const error = res.status;
        throw new Error(error);
      } else {
        const { data } = await res.json();
        dispatch(
          getLocation({
            city: data[0]?.address_components[0]?.short_name,
            lat: data[0]?.geometry?.location?.lat,
            lng: data[0]?.geometry?.location?.lng,
            address: data[0]?.formatted_address,
          })
        );
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const texts = [
        'Cooking gone wrong?',
        'Game night?',
        'Hungry?',
        'Movie Marathon?',
        'Late night at office?',
        'Unexpected Guests?',
      ];

      const randomIndex = Math.floor(Math.random() * texts.length);
      setChangingText(texts[randomIndex]);
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="pb-14 max-sm:bg-gradient-to-r">
      <div className="flex flex-col h-screen pb-32 lg:flex-row md:pb-0">
        <div className="relative w-full px-3 py-32 lg:w-1/2 sm:px-16 2xl:px-28">
          <img
            src="/images/landingpage.webp"
            alt="img"
            className="absolute top-0 bottom-0 left-0 right-0 block object-cover w-full h-screen blur-[1px] lg:hidden"
          />
          <div className="relative 2xl:w-4/5">
            <div className="flex items-center gap-3 text-white lg:text-black">
              <img
                src={LOGO_URL}
                alt="img"
                className="h-[60px] rounded-full border border-black"
              />
              <span className="text-xl uppercase cursor-pointer sm:text-2xl font-ProximaNovaBold">
                Food Kitchen
              </span>
            </div>
            <div className="mt-10 mb-4">
              <h2 className="font-ProximaNovaSemiBold text-3xl text-white lg:text-[#282c3f]">
                {ChangingText}
              </h2>
              <p className="font-ProximaNovaThin text-2xl text-white lg:text-[#686b78] mt-1">
                Order food from favourite restaurants near you.
              </p>
            </div>
            <div className="relative mt-7">
              <input
                type="text"
                placeholder="Enter your Search Location"
                ref={SearchText}
                onChange={() => handleSearch(SearchText.current?.value)}
                className="h-[58px] border-2 border-[#bebfc5] focus:outline-none focus:ring-1 focus:ring-[#bebfc5] focus:ring-offset-2 transition w-full px-5 font-ProximaNovaMed text-lg text-[#282c3f]"
              />
              <ul className="absolute top-[58px] left-0 right-0 border border-t-0 border-[#d4d5d9] shadow-lg w-full bg-white text-[#535665] z-10">
                {searchData &&
                  searchData?.map((item) => (
                    <li
                      key={item?.place_id}
                      className="cursor-pointer py-4 sm:py-6 px-3 sm:px-5 font-ProximaNovaMed text-sm sm:text-base border-dashed border-[#bebfc5] border-t-0 border-l-0 border-r-0 flex items-center gap-5 hover:bg-slate-100 transition"
                      onClick={() => fetchAddress(item?.place_id)}
                    >
                      <div className="text-xl">
                        <CiLocationOn />
                      </div>
                      <p>{item?.description}</p>
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <p className="font-ProximaNovaThin text-[15px] text-white lg:text-[#a9abb2] mt-7 mb-2 uppercase">
                Popular Cities in India
              </p>
              <div className="lg:text-[#686b78] text-white text-base font-ProximaNovaSemiBold flex flex-wrap">
                <span className="mr-2">Ahmedabad</span>
                <span className="mr-2 lg:text-[#93959f]">Bangalore</span>
                <span className="mr-2">Chennai</span>
                <span className="mr-2 lg:text-[#93959f]">Delhi</span>
                <span className="mr-2">Gurgaon</span>
                <span className="mr-2 lg:text-[#93959f]">Hyderabad</span>
                <span className="mr-2">Kolkata</span>
                <span className="mr-2 lg:text-[#93959f]">Mumbai</span>
                <span className="mr-2">Pune</span>
                <span className="mr-2 lg:text-[#93959f]">& more.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden landingpagebg lg:w-1/2 lg:block"></div>
      </div>
    </div>
  );
};

export default LandingPage;
