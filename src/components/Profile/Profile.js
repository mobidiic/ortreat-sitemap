import React from "react";
import style from "./Profile.module.scss";

const Profile = () => {
    return (
        <div className={style.profile__card}>
            Profile Component
            <div className={style.profile__title}>
                profile title
            </div>
            <div className={style.profile__desc}>
                profile description
            </div>
        </div>
    )
};

export default Profile;