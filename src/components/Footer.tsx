import { Icon } from "@iconify/react";
const Footer = () => {
  return (
    <div className="bg-[#1AA4DF] relative text-white font-playfair px-20 pt-24 pb-8 mt-2">
      {/* Circle logo - absolutely positioned */}
      <div className="rounded-full bg-[#56534E] w-36 h-36 border-5 border-white flex items-center justify-center absolute -top-14 left-1/2 transform -translate-x-1/2">
        <p className="text-6xl font-semibold">OFC</p>
      </div>

      {/* Footer content */}
      <div className="flex flex-row items-start gap-8 w-full">
        <div className="flex flex-col gap-2 w-1/4">
          <h1 className="text-2xl font-semibold">Proud To Serve</h1>
          <p className="text-xs">
            Together, we have the power to shape a better future; by uniting our
            ideas, efforts, and unique strengths, we can turn dreams into
            tangible progress.
          </p>
        </div>

        <div className="flex flex-col gap-2 w-1/4">
          <h1 className="text-2xl font-semibold">Gallery</h1>
          <div className="flex flex-wrap">
            <img src="./media/media 1.svg"  className=""/>
            <img src="./featured post 1.svg"  className=""/>
            <img src="./featured post 1.svg"  className=""/>
            <img src="./featured post 1.svg"  className=""/>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-1/4">
          <h1 className="text-2xl font-semibold">Contact Me</h1>
          <div className="flex flex-row">
            <Icon
              icon="mdi:location"
              width="15"
              height="15"
              className="mr-2 text-[#56534E]"
            />
            <p className="text-xs">
              Delta State House of Assembly, Okpanam Road, P.M.B. 5028, Asaba,
              Delta State, Nigeria.
            </p>
          </div>

          <div className="flex flex-row">
            <Icon
              icon="ic:baseline-email"
              width="15"
              height="15"
              className="mr-2 text-[#56534E]"
            />
            <p className="text-xs">chukydandy2004@yahoo.com</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-1/4">
          <h1 className="text-2xl font-semibold">Featured Post</h1>
          <div className="flex flex-row">
            <img src="./featured post 1.svg"  className="mr-4"/>
            <p className="text-xs">
              Hon. Festus Okoh Chukwuyem facilitated the constituency project of
              Isimie Primary School, Alijemesi. 2024
            </p>
          </div>

          <div className="flex flex-row">
            <img src="./featured post 2.svg" className="mr-4" />
            <p className="text-xs">
              Hon. Festus Okoh Chukwuyem facilitated the constituency project of
              Isimie Primary School, Alijemesi. 2024
            </p>
          </div>
        </div>
      </div>

      {/* Designed by */}
      <div className="flex flex-row items-center justify-between mt-10 text-xs mx-5">
        <p> &copy; 2025 Okoh Festus Chukwuyem. All Rights Reserved.</p>

        <p>Website by Precious Ene-Etuk</p>
      </div>
    </div>
  );
};

export default Footer;
