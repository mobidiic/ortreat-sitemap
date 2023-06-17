import React, { Fragment } from "react";
import style from "./Profile.module.scss";
import img from "../../assets/images/img_main_v2.jpg";

const Profile = () => {
    return (
        <Fragment>
            <div className={style.profile__img} >
                    <img src={img} alt="ortreat cake" />
            </div>
        </Fragment>
    )
};

export default Profile;