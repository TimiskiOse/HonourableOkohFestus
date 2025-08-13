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

const contact = () => {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-[#1AA4DF] h-auto md:h-[340px] flex items-center justify-center px-4"
      >
        <p className="text-white font-playfair font-extrabold text-2xl sm:text-4xl lg:text-6xl text-center py-4">
          CONTACT
        </p>
      </motion.div>

      {/* INTRODUCTION SECTION */}
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex md:flex-row flex-col justify-between items-center my-20 mx-6 md:mx-20 gap-8"
      >
        <motion.img
          src="/Honourable.svg"
          alt="Okoh Festus Chukwuyem"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          viewport={{ once: true }}
          className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full"
        />

        <div className="flex flex-col justify-center items-start w-full md:w-[40%] text-center md:text-left">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
          >
            <h1 className="text-2xl md:text-3xl font-playfair font-bold mb-2">
              Hon. Okoh Festus Chukwuyem
            </h1>
            <p className="text-base md:text-lg font-playfair font-medium text-[#1AA4DF]">
              Deputy Majority Leader
            </p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
            className="text-sm md:text-base font-playfair mt-4 leading-relaxed"
          >
            I, Hon. Okoh Festus Chukwuyem, was born on January 29th, 1971, and I
            am a Nigerian politician currently serving as the Deputy Majority
            Leader of the Delta State House of Assembly. I represent the Ika
            South Constituency under the Peoples Democratic Party (PDP).
          </motion.p>
        </div>
      </motion.section>

      <Footer />
    </>
  );
};

export default contact;
