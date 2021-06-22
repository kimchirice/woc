import React, { useState, useEffect } from "react";
import axios from "axios";
import { LayoutUserDashboard } from "../../components/layout/Layout";

import UserProfile from "./userprofile/UserProfile";
import UserEvents from "./userevents/UserEvents";
import UserCourses from "./usercourses/UserCourses";

import CircularProgress from "@material-ui/core/CircularProgress";

/* 
    User Dashboard component
    
    Have most of the get calls here then pass data into child components
*/

const UserDash = () => {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get("/api/user")
            .then((res) => {
                setProfile({ ...res.data });
                setLoading(false);
            })
            .catch((e) => console.log(e.message));
    }, []);

    return (
        <LayoutUserDashboard>
            <h1>User DashBoard</h1>
            {loading ? (
                <CircularProgress />
            ) : (
                <>
                    <UserProfile profile={profile} />
                    <UserEvents />
                    <UserCourses />
                </>
            )}
        </LayoutUserDashboard>
    );
};

export default UserDash;
