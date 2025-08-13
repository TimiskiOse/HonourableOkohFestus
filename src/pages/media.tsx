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

const Media = () => {
  return (
    <>
      <Navbar />

      {/* Banner */}
      <div className="bg-[url('/mediaBanner.svg')] md:bg-cover h-40 md:h-[340px] flex items-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-white font-playfair font-extrabold text-2xl sm:text-4xl md:text-6xl"
        >
          MEDIA
        </motion.p>
      </div>

      {/* Gallery */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap justify-between items-center mt-10 mx-6 md:mx-20 gap-y-8"
      >
        {[
          "media 1.svg",
          "media 2.svg",
          "media 3.svg",
          "media 4.svg",
          "media 5.svg",
          "media 6.svg",
          "media 7.svg",
          "media 8.svg",
          "media 9.svg",
        ].map((img, i) => (
          <motion.img
            key={i}
            src={`/media/${img}`}
            alt="Media Image"
            variants={fadeUp}
            custom={i * 0.15}
            className="w-full sm:w-[48%] md:w-[30%]"
          />
        ))}
      </motion.div>

      <Footer />
    </>
  );
};

export default Media;
