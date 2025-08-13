import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const impact = () => {
  return (
    <>
      <Navbar />
      {/* Banner */}
      <div className="bg-[url('/impactBanner.svg')] md:bg-cover h-40 md:h-[340px] flex items-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-white font-playfair font-extrabold text-2xl sm:text-4xl md:text-6xl"
        >
          IMPACT
        </motion.p>
      </div>

      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col md:flex-row justify-between items-center mt-10 mx-6 md:mx-20 gap-8"
      >
        <motion.img
          src="/Ika South Map.svg"
          alt="Okoh Festus Chukwuyem"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          viewport={{ once: true }}
          className="w-72 md:w-96 h-72 md:h-96 object-cover rounded-lg"
        />

        <div className="flex flex-col justify-center items-start w-full md:w-[50%]">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="text-2xl md:text-3xl font-playfair font-bold mb-2"
          >
            Welcome to Ika South Constituency
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
            className="text-sm md:text-base font-playfair"
          >
            Ika South is a Local Government Area of Delta State, Nigeria. Ika
            South is part of the greater Ika speaking community of Delta State.
            While many Ika people are Christians, traditional practices are
            still common among older generations.
          </motion.p>
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-6 md:mx-32 mt-12"
      >
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-lg md:text-xl font-playfair font-semibold"
        >
          Hon. Festus Okoh’s Constituency Project
        </motion.p>

        <div className="flex flex-wrap w-full justify-between mt-10 gap-y-10">
          {["impact 3.svg", "impact 2.svg", "impact 4.svg", "impact 1.svg"].map(
            (img, i) => (
              <motion.img
                key={i}
                src={`./impact/${img}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className={i > 1 ? "mt-0 md:mt-10" : ""}
              />
            )
          )}
        </div>
      </motion.div>

      {/* History Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="font-playfair text-center mx-6 md:mx-20 my-20"
      >
        <p className="text-lg md:text-xl font-semibold">History Of Ika South</p>

        <div className="font-medium">
          <p className="mt-5">
            Ika South spans 436 square kilometers and is home to over 160,000
            people, according to the 2006 census. The area is identified by the
            postal code 321.
          </p>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default impact;
