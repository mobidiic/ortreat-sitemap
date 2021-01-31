import React, { Fragment } from "react";
import { LinkButton } from "../../components/Modules";
import sites from "../../assets/data/sites.json";

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
        <Fragment>
            <div> Site List </div>
            {mapToLinkButton(links)}
        </Fragment>  
    )
};



export default SiteList;