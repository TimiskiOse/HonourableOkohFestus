import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const impact = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[url('/impactBanner.svg')] bg-cover h-[340px] flex items-center w-full">
        <p className="text-white font-playfair font-extrabold text-6xl pl-[180px]">
          IMPACT
        </p>
      </div>
      <div className="flex flex-row justify-between items-center mt-10 mx-20">
        <img
          src="/Ika South Map.svg"
          alt="Okoh Festus Chukwuyem"
          className="w-96 h-96 object-cover rounded-lg"
        />
        <div className="flex flex-col justify-center items-start w-[50%]">
          <h1 className="text-3xl font-playfair font-bold mb-2">
            Welcome to Ika South Constituency
          </h1>

          <p className="text-sm font-playfair">
            Ika South is a Local Government Area of Delta State, Nigeria. Ika
            South is part of the greater Ika speaking community of Delta State.
            It many Ika people are Christians, traditional practices are still
            common among older generations.
          </p>
        </div>
      </div>

      <div className="mx-32 ">
        <p className="text-center text-xl font-playfair font-semibold">
          Hon. Festus Okoh’s Constituency Project
        </p>

        <div className="flex flex-wrap w-full justify-between mt-10">
          <img src="./impact/impact 3.svg" />
          <img src="./impact/impact 2.svg" />
          <img src="./impact/impact 4.svg" className="mt-10" />
          <img src="./impact/impact 1.svg" className="mt-10" />
        </div>
      </div>

      <div className="font-playfair text-center mx-20 my-20">
        <p className="text-xl font-semibold ">History Of Ika South</p>

        <div className="font-medium">
          <p className="mt-5"> 
            Ika South spans 436 square kilometers and is home to over 160,000
            people, according to the 2006 census. The area is identified by the
            postal code 321.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default impact;
