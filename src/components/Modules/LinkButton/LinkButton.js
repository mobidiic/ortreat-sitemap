import React, { useEffect, useState } from "react";
import style from "./LinkButton.module.scss";

const LinkButton = (site) => {

    const [image, setImage] = useState("");

    useEffect(()=>{
        import(`../../../assets/images/${site.icoName}`).then(image => {
            setImage(image.default);
        });
    },[]);



    const goLink = () => {
        window.location.href = site.link;
    };

    const setEllipsis = (text, max) => {
        let maxText = max || 23;
        return text.length > maxText ? text.substring(0, maxText) + "..." : text ;
    }

    return (
        <div className={style.linkButton__card} onClick={goLink} >
            <div className={style.linkButton__icon}>
                <img src={image} />
            </div>
            <div className={style.linkButton__textbox}>
                <div className={style.linkButton__comment}>
                        {site.comment}
                </div>
                <div className={style.linkButton__link}>
                    <p className={style.overflow_ellipsis}>{site.link}</p>
                </div>
            </div>
            <div className={style.linkButton__arrow}>	
                &#8250;
            </div>
        </div>
    )
};

export default LinkButton;