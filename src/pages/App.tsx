import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const App = () => {
  return (
    <>
      <Navbar />
      {/*HERO SECTION*/}
      <div className="bg-[url('/background.svg')] bg-auto bg-center h-[900px] w-full">
        <div className="flex flex-col ml-36 justify-center h-full">
          <h1 className="text-white font-playfair font-extrabold text-5xl text-left w-[80%]">
            UNITING THE GOOD & WONDERFUL PEOPLE OF IKA SOUTH CONSTITUENCY
          </h1>
          <p className="text-white font-playfair font-bold text-2xl text-left mt-4 w-[50%]">
            Dedicated to Guiding Ika South Constituency Towards a Brighter
            Future with the Support of Its People
          </p>
        </div>
      </div>

      {/*ABOUTME SECTION*/}
      <div className="flex flex-row justify-between items-center mt-10 mx-20">
        <img
          src="/homepagePhoto.jpg"
          alt="Okoh Festus Chukwuyem"
          className="w-96 h-96 rounded-full object-cover"
        />
        <div className="flex flex-col justify-center items-start w-[50%]">
          <h1 className="text-3xl font-playfair font-bold mb-2">
            Stand With Me in Advancing a Bold & Transformative Future for Ika
            South
          </h1>

          <p className="text-sm font-playfair">
            As the Honorable Member representing Ika South Constituency in the
            Delta State House of Assembly, my commitment remains steadfast in
            creating a constituency that serves everyone. Through
            forward-thinking programs and impactful policies, we are driving
            socio-economic growth, enhancing healthcare services, and empowering
            both youth and women. These efforts are ongoing, and I’m optimistic
            about the progress we will make together.
          </p>
          <p className="text-sm font-playfair">
            I envision a constituency where every individual has the opportunity
            to succeed and benefit from inclusive, sustainable development. By
            uniting our efforts and harnessing the strength of our people, I am
            confident we can bring this vision to life.
          </p>

          <button className="mt-6">
            <a
              href="/about"
              className="bg-[#1AA4DF] text-white px-6 py-2 font-playfair font-bold hover:bg-[#0d8bbf]"
            >
              ABOUT ME
            </a>
          </button>
        </div>
      </div>

      {/*IKASOUTH SECTION*/}
      <div className="flex flex-row justify-between items-center mt-5 mb-20 mx-20">
        <div className="flex flex-col justify-center items-start w-[50%]">
          <h1 className="text-3xl font-playfair font-bold mb-2">
            Welcome to Ika South Constituency
          </h1>

          <p className="text-sm font-playfair">
            Ika South Local Government Area in Delta State, Nigeria, is an
            administrative division created to improve local governance and
            service delivery. It's home to the Ika people, who are an Igbo
            subgroup primarily found in Delta and Edo States. The Ika people are
            a mix of different tribes that gradually formed their distinct
            identity. While many Ika people are Christians, traditional
            practices are still common among older generations.
          </p>
        </div>
        <img
          src="/Ika South Map.svg"
          alt="Okoh Festus Chukwuyem"
          className="w-96 h-96 object-cover rounded-lg"
        />
      </div>
      {/*FOOTER SECTION*/}
      <Footer />
    </>
  );
};

export default App;
