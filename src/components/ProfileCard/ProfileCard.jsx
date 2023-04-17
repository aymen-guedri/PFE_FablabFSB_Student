import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const ProfileCard = ({location}) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state)=>state.postReducer.posts)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;


  const { t } = useTranslation();

  const languageMap = {
    en: { label: "English", dir: "ltr", active: true },
    fr: { label: "Français", dir: "ltr", active: false },
  };
  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem("i18nextLng") || "en"
  );


  return (
    <div className="ProfileCard">
    <div className="ProfileImages">
      <img src={
          user.coverPicture
            ? serverPublic + user.coverPicture
            : serverPublic + "defaultCover.jpg"
        } alt="CoverImage"  />
      <img
        src={
          user.profilePicture
            ? serverPublic + user.profilePicture
            : serverPublic + "defaultProfile.png"
        }
        alt="ProfileImage"
      />
    </div>
    <div className="ProfileName">
      <span>{user.firstname} {user.lastname}</span>
      <span>{user.worksAt? user.worksAt : 'FabLab FSB Student'}</span>
    </div>

    <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
           
            <span>4C FSB </span>
          </div>
          <div className="vl"></div>
          <div className="follow">
           
            <span>FSB</span>
          </div>
          {/* for profilepage */}
          {location === "profilePage" && (
            <>
              <div className="vl"></div>
              <div className="follow">
                
                <span>Edit profile</span>
              </div>{" "}
            </>
          )}
        </div>
        <hr />
      </div>

    {location === "profilePage" ? (
      ""
    ) : (
      <span>
        <Link to={`/profile/${user._id}`} style={{ textDecoration: "none", color: "inherit" }}>
          My Profile
        </Link>
      </span>
    )}
  </div>
  );
};

export default ProfileCard;
