import React, { Fragment } from "react";
import style from "./Profile.module.scss";
import img from "../../assets/images/img_main.jpg";

const Profile = () => {
    return (
        <Fragment>
            <div className={style.profile__img} >
                    <img src={img} alt="ortreat cake" />
                </div>
            <div className={style.profile__card}>
                <div className={style.profile__title}>
                    Ort Bakery
                </div>
                <div className={style.profile__desc}>
                    <p>pet cake shop</p>
                </div>
            </div>
        </Fragment>
    )
};

export default Profile;