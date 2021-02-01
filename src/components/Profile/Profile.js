import React from "react";
import style from "./Profile.module.scss";

const Profile = () => {
    return (
        <div className={style.profile__card}>
            <div className={style.profile__title}>
                Ort Bakery
            </div>
            <div className={style.profile__desc}>
                <p>pet cake shop</p>
            </div>
        </div>
    )
};

export default Profile;