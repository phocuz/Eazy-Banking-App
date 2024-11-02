import Button from "../ui/Button";
import mobileImage from "../assets/bg-intro-mobile.svg";
import desktopImage from "../assets/image-mockups.png";
import desktopBackground from "../assets/bg-intro-desktop.svg";
import BlogSection from "../ui/BlogSection";
import LatestArticle from "../ui/LatestArticle";

function Home() {
  return (
    <>
    <div className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-between">
      {/* Mobile Image - Visible on small screens only */}
      <div
        className=" sm:hidden bg-cover w-full "
        style={{ backgroundImage: `url(${mobileImage})` }}
      >
          <img src={desktopImage} alt="Phone Mockups" className="w-full sm:hidden  relative bottom-20" />
      </div>
      

      {/* Content Section */}
      <div className="text-center md:p-10 sm:text-left sm:flex-1 p-6 sm:px-8 md:px-16  lg:24 lg:text-center lg:mr-40">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Next generation<br /> digital banking
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          Take your financial life online.Your Easybank account <br /> will be a one-stop shop for spending, saving, <br />
          budgeting, investing, and much more.
        </p>
        <Button text="Request Invite" type="secondary" />
      </div>

      {/* Desktop Background and Image - Visible on larger screens only */}
      <div
        className="hidden sm:flex bg-cover  sm:w-1/2 h-auto lg:w-1/3"
        style={{ backgroundImage: `url(${desktopBackground})` }}
      >
        <img src={desktopImage} alt="Desktop Mockups" className="w-full h-auto" />
      </div>
    </div>

    <div className="bg-gray-100">
      <BlogSection />
      <LatestArticle />
    </div>

    </>
  );
}

export default Home;
