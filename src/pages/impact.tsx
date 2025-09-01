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
          className="w-72 md:w-96 h-72 md:h-96 object-contain rounded-lg"
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
            Ika South Local Government Area in Delta State, Nigeria, is an
            administrative division created to improve local governance and
            service delivery.
            <br /> The Ika people are a mix of different tribes that gradually
            formed their distinct identity and are known for their hard work,
            unity, and progressive spirit.While many Ika people are Christians,
            traditional practices are still common among older generations.{" "}
            <br /> Together, we can transform Ika South into a hub of
            development where every community thrives, every voice is heard, and
            every citizen shares in the promise of a brighter future.
          </motion.p>
        </div>
      </motion.div>

      {/* History Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="font-playfair mx-6 md:mx-20 my-20"
      >
        <p className="text-lg md:text-3xl font-semibold text-center">
          About Ika South
        </p>

        <div className="font-medium">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="mt-5 text-sm md:text-base"
          >
            Ika South Local Government Area is located in Delta State, within
            Nigeria’s South-South geopolitical zone. Its administrative
            headquarters is in Agbor, and the LGA is made up of several towns
            and villages including Ewuru, Idumuoza, Alifekede, Agbor-Obi,
            Alizormo, Emuhu, Oki, and Omumu. The area is home to notable
            traditional rulers such as the Dein and the Obi of Agbor.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            className="mt-5 text-sm md:text-base"
          >
            With an estimated population of about 185,613 people, the Ika
            sub-division forms the dominant ethnic group in the LGA. Residents
            mainly speak the Ika dialect of the Igbo language, and Christianity
            is the predominant religion. Ika South is also rich in cultural
            heritage, hosting various traditional festivals such as the Igue,
            Iwa-ji, and Oseizi festivals.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
            className="mt-5 text-sm md:text-base"
          >
            Ika South LGA spans a total land area of 436 square kilometres and
            experiences two main seasons; the dry season and the rainy season.
            The area records an average annual temperature of 26°C, with a
            yearly rainfall of about 2,400 mm.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.5}
            className="mt-5 text-sm md:text-base"
          >
            Agriculture forms the foundation of Ika South’s economy, driven by
            the large-scale production of palm oil, rubber, and cassava. Trade
            also flourishes in the LGA with the area hosting several markets
            such as the Nkwor market in Agbor-Obi where a variety of commodities
            are bought and sold. Other important economic enterprises undertaken
            by people of Ika South LGA include fishing, hunting and wood work.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="mt-5 text-sm md:text-base"
          >
            Ika South is notable for its strong infrastructure, featuring an
            extensive network of roads, schools, and healthcare services. The
            area also hosts prominent higher institutions such as the University
            of Delta (UNIDEL) and the Delta State College of Nursing.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            className="mt-5 text-sm md:text-base"
          >
            Agbor town is made up of several communities, each contributing to
            its rich cultural and social heritage. Among them are Agbor Obi,
            Boji Boji Agbor, Alihame, Aliokpu, Alisimie, Aliagwa, Alifekede,
            Alizomor, Alihagwu, Alisor, Emuhu, Ewuru, Oki, Omumu, Ekuku Agbor,
            Obi Agbor, Agbor Alidima, Oruru, AgborNta, Aliboba, Alijemesi,
            Aliren, Obi Iduhon, Ohumere, Ihogbe, Idumu Ogala, and Obi-Olihen.
            Together, these communities form the heartbeat of Agbor, reflecting
            unity in diversity and a shared identity.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.6}
            className="mt-5 text-sm md:text-base"
          >
            Abavo town is made up of several communities, including Ogbe Obi,
            Igbogili, Azu Owa, Udomi, Oyoko, Ayima, Idumugbo, Ekwuoma, Okpe, Obi
            Anyima, Alizomor, Ekuma Abavo, and Owe. Together, these communities
            contribute to the rich cultural and social identity of Abavo.
          </motion.p>
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-6 md:mx-32 my-12"
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

      <Footer />
    </>
  );
};

export default impact;
