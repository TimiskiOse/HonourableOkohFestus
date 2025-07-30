import Navbar from "../components/Navbar";

const media = () => {
  return (
    <>
      <Navbar />

      <div className="bg-[#1AA4DF] text-white h-40 ">
        <p className=" font-playfair font-extrabold text-4xl text-center py-4">
          MEDIA
        </p>
        <p className="text-sm font-playfair mt-4 text-center">
          Stay updated with the latest news and events featuring Hon. Okoh
          Festus Chukwuyem. Our media section provides insights into his
          initiatives, community engagements, and public appearances.
        </p>
      </div>

      <div className="flex flex-wrap justify-between items-center mt-10 mx-20">
        <img src="/media/media 1.svg" alt="Media Image" />
        <img src="/media/media 2.svg" alt="Media Image" />
        <img src="/media/media 3.svg" alt="Media Image" />
        <img src="/media/media 4.svg" alt="Media Image" />
        <img src="/media/media 5.svg" alt="Media Image" />
        <img src="/media/media 6.svg" alt="Media Image" />
        <img src="/media/media 7.svg" alt="Media Image" />
        <img src="/media/media 8.svg" alt="Media Image" />
        <img src="/media/media 9.svg" alt="Media Image" />
      </div>
    </>
  );
};

export default media;
