import React from "react";
export default function Event(props){

    return (
    <div className="event-card">
        <div>{props.name}</div>
        <div>{props.details}</div>
        <div>{props.place}</div>
    </div>)
}