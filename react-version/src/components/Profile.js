import React from 'react'; // optional for React v17 and above

const Profile = () => {
  const user = {
    firstName: "Amy",
    lastName: "Mansel",
    avatar: "../../public/profile-hex.png"
  };

  <Profile {...user} />;

  //or 

  <Profile firstName="Amy" lastName="Mansel" avatar="../../public/profile-hex.png" />;

  return (
    <aside>
      <div className="profile">
        <img className="profile__image" src={avatar} />
      </div>
      <br />
      <div className="profile__name">
        <h2><span className="profile--bold">{firstName}</span> {lastName}</h2>
      </div>
    </aside>
  );
};

export default Profile;