import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const media = () => {
  return (
    <>
      <Navbar />

      <div className="bg-[url('/mediaBanner.svg')] bg-cover h-[340px] flex items-center w-full">
        <p className="text-white font-playfair font-extrabold text-6xl pl-[180px]">
          MEDIA
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
      <Footer />
    </>
  );
};

export default media;
