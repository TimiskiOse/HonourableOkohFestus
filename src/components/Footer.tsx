import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-[#1AA4DF] relative text-white font-playfair px-6 md:px-20 pt-24 pb-8 mt-2"
    >
      {/* Circle logo - absolutely positioned */}
      <div className="rounded-full bg-[#56534E] w-24 h-24 md:w-36 md:h-36 border-4 border-white flex items-center justify-center absolute -top-12 md:-top-14 left-1/2 transform -translate-x-1/2">
        <p className="text-3xl md:text-6xl font-semibold">OFC</p>
      </div>

      {/* Footer content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-5 mt-4"
      >
        {/* Proud To Serve */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2 md:w-1/2 lg:w-1/4"
        >
          <h1 className="text-lg md:text-2xl font-semibold">Proud To Serve</h1>
          <p className="text-sm leading-snug">
            Together, we have the power to shape a better future; by uniting our
            ideas, efforts, and unique strengths, we can turn dreams into
            tangible progress.
          </p>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2 md:w-1/2 lg:w-1/4"
        >
          <h1 className="text-lg md:text-2xl font-semibold">Gallery</h1>
          <div className="flex flex-wrap gap-2">
            <img src="./footer 1.svg" className="w-20 h-14 object-cover" />
            <img src="./footer 2.svg" className="w-20 h-14 object-cover" />
            <img src="./footer 3.svg" className="w-20 h-14 object-cover" />
            <img src="./footer 4.svg" className="w-20 h-14 object-cover" />
          </div>
        </motion.div>

        {/* Contact Me */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2 md:w-1/2 lg:w-1/4"
        >
          <h1 className="text-lg md:text-2xl font-semibold">Contact Me</h1>

          <div className="flex flex-row items-start">
            <img src="./icon/location.svg" className="w-4 h-4 mr-3 mt-1" />
            <p className="text-sm leading-snug">
              Delta State House of Assembly, Okpanam Road, P.M.B. 5028, Asaba,
              Delta State, Nigeria.
            </p>
          </div>

          <div className="flex flex-row items-center">
            <img src="./icon/mail.svg" className="w-4 h-4 mr-2" />
            <p className="text-sm">chukydandy2004@yahoo.com</p>
          </div>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2 md:w-1/2 lg:w-1/4"
        >
          <h1 className="text-lg md:text-2xl font-semibold">Featured Post</h1>

          <div className="flex items-start gap-3">
            <img
              src="./featured post 1.svg"
              className="w-16 h-14 object-cover"
            />
            <p className="text-sm leading-snug">
              Hon. Festus Okoh Chukwuyem facilitated the constituency project of
              Isimie Primary School, Alijemesi. 2024
            </p>
          </div>

          <div className="flex items-start gap-3">
            <img
              src="./featured post 2.svg"
              className="w-16 h-14 object-cover"
            />
            <p className="text-sm leading-snug">
              This constituency project: Eruje Nursery/Primary School was
              facilitated by Hon. Festus Okoh Chukwuyem. 2024
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Designed by */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-center mt-10 text-xs gap-2 text-center md:text-left"
      >
        <p>&copy; 2025 Okoh Festus Chukwuyem. All Rights Reserved.</p>
        <p>Website by Precious Ene-Etuk</p>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
