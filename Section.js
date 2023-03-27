import React from "react";
import Event from "./Event"
export default  function Section(){

    const [events,setEvents]=React.useState([])
    const [newevent,setNewevent]=React.useState({name:"",details:"",place:""})
    function inputvalue(e){
        const {name,value}=e.target
        setNewevent(prevNewevent=>{
            const tempNewevent={...prevNewevent,[name]:value}
            return tempNewevent
        })
    }
    function addevent(e){
        e.preventDefault()
        setEvents(prevEvents=>{
            const temp=[...prevEvents]
            temp.push(newevent)
            return temp
        })
    }
    console.log(events)
    let eventsarray=events.map(x =>
        <Event {...x}/>)

    return (
        <div>
            <div className="event">{eventsarray}</div>
            <form onSubmit={addevent} className="form-card">
                <input
                id="name"
                type="text"
                name="name"
                placeholder="eventName"
                onChange={inputvalue}
                value={newevent.name}/>

                <input
                id="details"
                type="text"
                name="details"
                placeholder="eventDetails"
                onChange={inputvalue}
                value={newevent.details}/>

                <input
                id="place"
                type="text"
                name="place"
                placeholder="eventPlace"
                onChange={inputvalue}
                value={newevent.place}/>

                <input
                type="submit"
                onChange={addevent}></input>
            </form>
        </div>
    )
}