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
        className="bg-[#1AA4DF] h-40 md:h-[340px] flex items-center justify-center px-4"
      >
        <p className="text-white font-playfair font-extrabold text-2xl sm:text-4xl lg:text-6xl text-center py-4">
          CONTACT
        </p>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center mt-10 mb-20 mx-6 md:mx-20 gap-8"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
        >
          <h1 className="text-lg md:text-3xl font-playfair font-bold">
            Contact Hon. Okoh Festus Chukwuyem
          </h1>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          className="bg-[#1AA4DF] w-full text-white py-12 px-6 md:px-20 flex justify-center rounded-lg"
        >
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            className="flex flex-col gap-6 w-full max-w-xl font-playfair "
          >
            {/* Name Input */}
            <input
              type="text"
              placeholder="Your Name"
              className="bg-white text-black rounded-lg px-4 py-3 w-full outline-none focus:ring-2 focus:ring-[#56534E] placeholder-black"
            />

            {/* Email Input */}
            <input
              type="email"
              placeholder="Your Email"
              className="bg-white text-black rounded-lg px-4 py-3 w-full outline-none focus:ring-2 focus:ring-[#56534E] placeholder-black"
            />

            {/* Message Input */}
            <textarea
              rows={5}
              placeholder="Your Message"
              className="bg-white text-black rounded-lg px-4 py-3 w-full outline-none focus:ring-2 focus:ring-[#56534E] placeholder-black"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="bg-[#56534E] text-white font-semibold text-lg px-6 py-3 rounded-lg hover:bg-white hover:text-[#56534e] transition w-fit self-center"
            >
              Send Message
            </button>
          </motion.form>
        </motion.div>
      </motion.section>

      <Footer />
    </>
  );
};

export default contact;
