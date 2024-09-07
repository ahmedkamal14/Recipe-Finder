import { UserContext } from "../Context/UserContext";
import { useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../API/UserRequests";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsPinterest } from "react-icons/bs";

const Profile = () => {
  const { user, logout } = useContext(UserContext);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const fetchUserProfile = async () => {
      const userX = await getCurrentUser(user.token, logout).then((res) => {
        return res;
      });
      setUserProfile(userX);
    };
    fetchUserProfile();
  }, [user.token]);

  return (
    <div className="bg-white py-16">
      <div className="max-w-[1800px] flex flex-col m-auto gap-12 px-4">
        <div className="data flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="info flex flex-col sm:flex-row gap-8 items-center">
            <div className="image">
              <img
                src={user?.image}
                alt="profile"
                className="w-32 sm:w-48 rounded-full"
              />
            </div>
            <div className="text flex flex-col gap-4 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold capitalize">
                {userProfile?.username}
              </h1>
              <p className="text-md sm:text-lg">{userProfile?.email}</p>
              <p className="text-md sm:text-lg">{userProfile?.phone}</p>
              <div className="socials flex justify-center sm:justify-start gap-5">
                <FaFacebook className="text-[24px] sm:text-[30px] text-[#3B5998] hover:scale-110 transition-all duration-300" />
                <GrInstagram className="text-[24px] sm:text-[30px] text-[#C13584] hover:scale-110 transition-all duration-300" />
                <BsPinterest className="text-[24px] sm:text-[30px] text-[#BD081C] hover:scale-110 transition-all duration-300" />
              </div>
            </div>
          </div>
          <div className="btns text-center sm:text-right">
            <button className="bg-[#EBC76B] font-semibold py-2 sm:py-3 px-4 sm:px-5 rounded-md text-lg sm:text-2xl">
              Edit Profile
            </button>
          </div>
        </div>
        <div className="desc text-center sm:text-left">
          <p className="text-[18px] sm:text-[24px] font-semibold">
            {`Hi! I’m ${userProfile?.firstName}, a food blogger extraordinaire, capturing the essence of
            global flavors through tantalizing visuals and vivid storytelling.
            From city markets to hidden gems, ${userProfile?.firstName}'s blog is a culinary
            adventure that invites readers to indulge in the art of gastronomy.
            Savor the world one delicious post at a time!`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
