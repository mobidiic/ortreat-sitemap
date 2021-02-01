import React, { Fragment } from "react";
import { LinkButton } from "../../components/Modules";
import sites from "../../assets/data/sites.json";
import style from "./SiteList.module.scss"

const links = sites.links;

const mapToLinkButton = ( data ) => {
    return data.map((site, i) => {
        return (<LinkButton 
            title = {site.title} 
            comment = {site.comment}
            link = {site.link}
            icoName = {site.icoName}
            key = {i} />)
    })
};

const SiteList = () => {
    return (
        <div className={style.siteList__box}>
            {mapToLinkButton(links)}
        </div>
    )
};



export default SiteList;