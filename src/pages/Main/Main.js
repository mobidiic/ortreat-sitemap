import React, { Fragment } from "react";
import { Description } from "../../components";
import SiteList from "../SiteList";

const Main = () =>  (
    <Fragment>
        <div>Main Page</div>
        <Description />
        <SiteList />
    </Fragment>
    );

export default Main;