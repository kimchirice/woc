import React from "react";
import Course from "../course/Course";
import { Grid } from "@material-ui/core";

const course = [
    {
        id: "001",
        title: "membership portal 101",
        date: "16/07/2021",
        description: "new to the membership portal, no problems. let's dive into how to start with it",
    },
    {
        id: "002",
        title: "membership portal 201",
        date: "23/09/2021",
        description: "expert to the membership portal, no dramas. let's dive into how to start with it",
    },
    {
        id: "003",
        title: "membership portal 301",
        date: "23/09/2021",
        description: "master to the membership portal, no worries. let's dive into how to start with it",
    },
];

function UserCourses() {
    const renderCourses = course.map((course) => (
        <Grid item>
            <Course key={course.id} course={course} />
        </Grid>
    ));

    return (
        <>
            <h2>Enrolled Courses</h2>
            <Grid container spacing={3} wrap={"nowrap"}>
                {renderCourses}
            </Grid>
        </>
    );
}

export default UserCourses;
