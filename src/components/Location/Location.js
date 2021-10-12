import React from "react";
import style from "./Location.module.scss";

const Location = () => {
    return (
        <div className={style.location__box}>
            <div className={style.location__phone}>
                📞 +82 050-7136-5430
            </div>
            <div className={style.location__address}>
                📬 서울 송파구 송파동 142-9번지 3층
            </div>
        </div>
    )
};

export default Location;