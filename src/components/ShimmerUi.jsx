const ShimmerUi = () => {
  return (
    <div className="pt-[88px]">
      <div className="flex flex-col justify-center carousel-loading h-80 gap-7">
        <div className="relative flex items-center justify-center">
          <div className="spinner"></div>
          <img
            className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 top-2/4 left-2/4"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/icecream_wwomsa"
            alt="carousel"
          />
        </div>
        <h2 className="text-2xl font-ProximaNovaThin">
          Looking for great food near you ...
        </h2>
      </div>

      <div className="container flex flex-col items-center justify-center gap-6 pt-10 pl-10 pr-10 mx-auto mb-5 md:flex-row md:justify-between">
        <div className="flex items-center gap-3">
          <button className="w-[100px] bg-gray-400 h-[50px] rounded-3xl animate"></button>
          <button className="w-[100px] bg-gray-400 h-[50px] rounded-3xl animate"></button>
          <button className="w-[100px] bg-gray-400 h-[50px] rounded-3xl animate"></button>
        </div>
        <div className="flex items-center">
          <div className="w-[250px] bg-gray-400 h-[50px] rounded-3xl animate"></div>
        </div>
      </div>

      <div className="container flex flex-wrap items-center justify-center gap-10 mx-auto mt-10">
        <div className="w-[330px] h-[250px] rounded-xl bg-gray-400 animate"></div>
        <div className="w-[330px] h-[250px] rounded-xl bg-gray-400 animate"></div>
        <div className="w-[330px] h-[250px] rounded-xl bg-gray-400 animate"></div>
        <div className="w-[330px] h-[250px] rounded-xl bg-gray-400 animate"></div>
        <div className="w-[330px] h-[250px] rounded-xl bg-gray-400 animate"></div>
        <div className="w-[330px] h-[250px] rounded-xl bg-gray-400 animate"></div>
        <div className="w-[330px] h-[250px] rounded-xl bg-gray-400 animate"></div>
        <div className="w-[330px] h-[250px] rounded-xl bg-gray-400 animate"></div>
        <div className="w-[330px] h-[250px] rounded-xl bg-gray-400 animate"></div>
        <div className="w-[330px] h-[250px] rounded-xl bg-gray-400 animate"></div>
        <div className="w-[330px] h-[250px] rounded-xl bg-gray-400 animate"></div>
        <div className="w-[330px] h-[250px] rounded-xl bg-gray-400 animate"></div>
      </div>
    </div>
  );
};

export default ShimmerUi;
