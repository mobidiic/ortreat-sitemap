import React, { Fragment } from "react";
import { Profile, Location } from "../../components";
import SiteList from "../SiteList";

const Main = () =>  (
    <Fragment>
        <div>Main Page</div>
        <Profile />
        <SiteList />
        <Location />
    </Fragment>
    );

export default Main;