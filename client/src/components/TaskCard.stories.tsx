import React from "react";
import TaskCard from "./TaskCard"

export default {
    title: "TaskCard",
    component: TaskCard
}

export const demo = () =>  <TaskCard task={{title: "Title", description: "This is pretty cool"}}/>