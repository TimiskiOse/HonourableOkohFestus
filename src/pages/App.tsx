import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const App = () => {
  const textStagger = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };
  return (
    <>
      <Navbar />
      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-[url('/background.svg')] bg-auto bg-center h-[900px] w-full flex items-center"
      >
        <div className="flex flex-col ml-6 md:ml-20 lg:ml-36 justify-center h-full px-4">
          <motion.h1
            variants={textStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-white font-playfair font-extrabold text-2xl md:text-4xl lg:text-5xl text-left w-full md:w-[80%]"
          >
            UNITING THE GOOD & WONDERFUL PEOPLE OF IKA SOUTH CONSTITUENCY
          </motion.h1>

          <motion.p
            variants={textStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            className="text-white font-playfair font-bold text-base md:text-xl lg:text-2xl text-left mt-4 w-full md:w-[70%] lg:w-[50%]"
          >
            Dedicated to Guiding Ika South Constituency Towards a Brighter
            Future with the Support of Its People
          </motion.p>
        </div>
      </motion.div>

      {/* ABOUT ME SECTION */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-center mt-10 mx-4 md:mx-20 gap-6"
      >
        <img
          src="/homepagePhoto.jpg"
          alt="Okoh Festus Chukwuyem"
          className="w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover"
        />
        <div className="flex flex-col justify-center items-start w-full md:w-[50%]">
          <motion.h1
            variants={textStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-2xl md:text-3xl font-playfair font-bold mb-2"
          >
            Stand With Me in Advancing a Bold & Transformative Future for Ika
            South
          </motion.h1>

          <motion.p
            variants={textStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            className="text-sm md:text-base font-playfair mb-2"
          >
            As the Honorable Member representing Ika South Constituency in the
            Delta State House of Assembly, my commitment remains steadfast in
            creating a constituency that serves everyone. Through
            forward-thinking programs and impactful policies, we are driving
            socio-economic growth, enhancing healthcare services, and empowering
            both youth and women. These efforts are ongoing, and I’m optimistic
            about the progress we will make together.
          </motion.p>
          <motion.p
            variants={textStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.5}
            className="text-sm md:text-base font-playfair"
          >
            I envision a constituency where every individual has the opportunity
            to succeed and benefit from inclusive, sustainable development. By
            uniting our efforts and harnessing the strength of our people, I am
            confident we can bring this vision to life.
          </motion.p>

          <motion.button
            variants={textStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.7}
            className="mt-6"
          >
            <a
              href="/about"
              className="bg-[#1AA4DF] text-white px-4 py-2 md:px-6 md:py-2 font-playfair font-bold hover:bg-[#0d8bbf] text-sm md:text-base"
            >
              ABOUT ME
            </a>
          </motion.button>
        </div>
      </motion.div>

      {/* IKA SOUTH SECTION */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-center mt-5 mb-20 mx-4 md:mx-20 gap-6"
      >
        <div className="flex flex-col justify-center items-start w-full md:w-[50%]">
          <motion.h1
            variants={textStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-2xl md:text-3xl font-playfair font-bold mb-2"
          >
            Welcome to Ika South Constituency
          </motion.h1>

          <motion.p
            variants={textStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            className="text-sm md:text-base font-playfair"
          >
            Ika South Local Government Area in Delta State, Nigeria, is an
            administrative division created to improve local governance and
            service delivery. It's home to the Ika people, who are an Igbo
            subgroup primarily found in Delta and Edo States. The Ika people are
            a mix of different tribes that gradually formed their distinct
            identity. While many Ika people are Christians, traditional
            practices are still common among older generations.
          </motion.p>
        </div>
        <motion.img
          src="/Ika South Map.svg"
          alt="Ika South Map"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-lg"
        />
      </motion.div>
      <Footer />
    </>
  );
};

export default App;
