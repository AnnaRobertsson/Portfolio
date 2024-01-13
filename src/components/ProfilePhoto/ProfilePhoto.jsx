import profileImage from "/assets/Profile-photo.jpg";
import "./ProfilePhoto.css";

export const ProfilePhoto = ({ className }) => {
  return (
    <img
      src={profileImage}
      className={`${className}`}
      alt="Photo of Anna Robertsson, Frontend Developer"
    />
  );
};
