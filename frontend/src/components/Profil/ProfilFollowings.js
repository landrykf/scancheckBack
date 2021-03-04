import React from "react";
import { useSelector } from "react-redux";

export const ProfilFollowings = () => {
  const userData = useSelector((state) => state.userReducer);
  const usersData = useSelector((state) => state.usersReducer);

  //   console.log(usersData);

  return (
    <div className="profil-body-followings">
      <h3> Abonnements : {userData?.following?.length}</h3>

      <ul>
        {usersData.map((user) => {
          for (let i = 0; i < userData.following.length; i++) {
            if (user._id === userData.following[i]) {
              return (
                <li key={user.id}>
                  <img
                    src={user.picture}
                    alt="user-pic"
                  />
                  <h4> {user.username}</h4>
                  <h2> follow handler </h2>
                </li>
              );
            }
          }
        })}
      </ul>
    </div>
  );
};
