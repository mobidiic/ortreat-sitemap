import React, { useEffect, useState } from "react";
import style from "./LinkButton.module.scss";

const LinkButton = (site) => {

    const [image, setImage] = useState("");

    useEffect(()=>{
        import(`../../../assets/images/${site.icoName}`).then(image => {
            setImage(image.default);
        });
    },[]);

    return (
        <div className={style.linkButton__mainbox}>
            <div className={style.linkButton__title}>
                {site.title}
            </div>
            <div className={style.linkButton__icon}>
                <img src={image} />
            </div>
            <div className={style.linkButton__comment}>
                <a href={site.link}>
                    {site.comment}
                </a>
            </div>
        </div>
    )
};

export default LinkButton;