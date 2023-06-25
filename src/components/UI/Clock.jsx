import React from "react";
import  {useState, useEffect} from "react";
import "./Clock.css";


const Clock = () => {

    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minute, setMinutes] = useState()
    const [seconds, setSeconds] = useState()

    let interval;

    const countDown= () => {

        const destination = new Date('Mar 10, 2024').getTime()

        interval = setInterval(() =>{
            const now = new Date().getTime()
            const different = destination - now
            const days = Math.floor(different / (1000 * 60 * 60 * 24))

            const hours = Math.floor(different % (1000 * 60 * 60 * 24) / 
            (1000 * 60 * 60))

            const minutes = Math.floor(different % (1000 * 60 * 60) / 
            (1000*60))

            const seconds = Math.floor(different % (1000 * 60) / 
            1000)

            if(destination < 0 ) clearInterval(interval.current)
            else{
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        })
    }

    useEffect(() =>{
        countDown()
    });

    return (
        <div className="clock__wrapper">
            <div className="clock__data">
                <div className="text-center">
                    <h1 className="NumDays">{days}</h1>
                    <h5 className="days">Days</h5>
                </div>
                <span className="sp">:</span>
            </div>

            <div className="clock__data">
                <div className="text-center">
                    <h1 className="NumDays">{hours}</h1>
                    <h5 className="days">Hours</h5>
                </div>
                <span className="sp">:</span>
            </div>

            <div className="clock__data">
                <div className="text-center">
                    <h1 className="NumDays">{minute}</h1>
                    <h5 className="days">Minutes</h5>
                </div>
                <span className="sp">:</span>
            </div>

            <div className="clock__data">
                <div className="text-center">
                    <h1 className="NumDays">{seconds}</h1>
                    <h5 className="days">Seconds</h5>
                </div>
               
            </div>
            
        </div>
    )
}

export default Clock;