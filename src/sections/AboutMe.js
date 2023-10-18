import '../styles/App.css';
import Navbar from './Navbar';
import aboutme from '../json-data/aboutme.json';

function AboutMe() {
  const profilePhoto = aboutme.profilePic

  return (
    <div className="flex flex-col bg-aboutme w-full lg:h-screen md:h-screen pb-16 md:pb-5 lg:pb-5">
      <Navbar />

      {/* Info Section */}
      <div className="flex flex-col md:flex-row lg:flex-row justify-center h-full items-center">
        <div className="relative ml-5 flex md:hidden lg:hidden m-8">
          <div className="h-56 z-10 relative overflow-hidden border-4 border-white top-0 left-0">
            <img className="h-full" src={profilePhoto}></img>
          </div>
          <div className="h-56 z-0 absolute overflow-hidden border-4 border-white top-6 left-4 -right-5 inset-x-0 bg-contactus">
          </div>
        </div>
        <div className="flex flex-col text-white font-sans font-semibold w-[90%] md:w-[35%] lg:w-[35%] mr-5 mt-5 lg:mt-0 md:mt-0 ml-8 lg:ml-0 md:ml-0">
          <h2 className="text-4xl md:text-7xl lg:text-7xl text-textColor"> About Me </h2>
          <p className="font-normal text-sm md:text-base lg:text-base text-textColor"> {aboutme['description']}</p>
          <div className="mt-8 flex flex-row items-center">
            <svg width="24" height="24" className="mr-1" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" /></svg>
            <p className="font-normal text-sm text-textColor"> Gainesville, Florida </p>
          </div>
        </div>
        <div className="relative ml-5 hidden md:block lg:block">
          <div className="h-56 z-10 relative overflow-hidden border-4 border-white top-0 left-0">
            <img src={profilePhoto} className="h-full"></img>
          </div>
          <div className="h-56 z-0 absolute overflow-hidden border-4 border-white top-6 left-4 -right-5 inset-x-0 bg-contactus">
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
