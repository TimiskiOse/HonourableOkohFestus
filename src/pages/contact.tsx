import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const contact = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#1AA4DF] h-[340px] flex items-center justify-center">
        <p className="text-white font-playfair font-extrabold text-6xl text-center py-4">
          CONTACT
        </p>
      </div>

      {/*INTRODUCTION SECTION*/}
      <div className="flex flex-row justify-between items-center my-20 mx-20">
        <img
          src="/Honourable.svg"
          alt="Okoh Festus Chukwuyem"
          className="w-96 h-96  object-cover rounded-full"
        />
        <div className="flex flex-col justify-center items-start w-[40%]">
          <div>
            <h1 className="text-3xl font-playfair font-bold mb-2">
              Hon. Okoh Festus Chukwuyem
            </h1>
            <p className="text-lg font-playfair font-medium text-[#1AA4DF]">
              Deputy Majority Leader
            </p>
          </div>
          <p className="text-sm font-playfair mt-4">
            I, Hon. Okoh Festus Chukwuyem, was born on January 29th, 1971, and I
            am a Nigerian <br /> politician currently serving as the Deputy
            Majority Leader of the Delta State House of Assembly.
            <br /> I represent the Ika South Constituency under the Peoples
            Democratic Party (PDP).
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default contact;
