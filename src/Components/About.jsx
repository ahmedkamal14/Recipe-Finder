import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsPinterest } from "react-icons/bs";

const About = () => {
  return (
    <div className="bg-[#ECECEC] pt-16 pb-16 lg:pb-60 relative">
      <div className="max-w-[1800px] flex flex-col lg:flex-row m-auto gap-12 px-4">
        <img
          src="./about.png"
          alt="About"
          className="absolute bottom-0 hidden lg:block lg:w-[92%]"
        />
        <div className="About w-full lg:w-2/4 flex flex-col gap-6 lg:gap-8">
          <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold">
            About Us
          </h1>
          <p className="text-lg sm:text-2xl lg:text-[30px]">
            Our mission at CookBook is to make everyday cooking fun, because we
            believe that cooking is key to a happier and healthier life for
            people, communities, and the planet. We empower home cooks all over
            the world to help each other by sharing recipes and cooking tips.
          </p>
        </div>
        <div className="learn-more w-full lg:w-1/4 flex flex-col gap-6 lg:gap-8">
          <h1 className="text-2xl sm:text-3xl lg:text-[36px]">Learn More</h1>
          <ul className="flex flex-col gap-1 sm:gap-2 underline">
            <li className="text-lg sm:text-xl lg:text-[24px]">
              CookBook Community
            </li>
            <li className="text-lg sm:text-xl lg:text-[24px]">Feedback</li>
            <li className="text-lg sm:text-xl lg:text-[24px]">Blog</li>
            <li className="text-lg sm:text-xl lg:text-[24px]">
              Terms of Service
            </li>
            <li className="text-lg sm:text-xl lg:text-[24px]">
              Privacy Policy
            </li>
          </ul>
          <div className="socials flex gap-6 sm:gap-8">
            <FaFacebook className="text-2xl sm:text-[30px] lg:text-[36px] text-[#3B5998] hover:scale-110 transition-all duration-300" />
            <FaTwitter className="text-2xl sm:text-[30px] lg:text-[36px] text-[#1DA1F2] hover:scale-110 transition-all duration-300" />
            <GrInstagram className="text-2xl sm:text-[30px] lg:text-[36px] text-[#C13584] hover:scale-110 transition-all duration-300" />
            <BsPinterest className="text-2xl sm:text-[30px] lg:text-[36px] text-[#BD081C] hover:scale-110 transition-all duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
