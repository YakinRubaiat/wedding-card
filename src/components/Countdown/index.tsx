import React, { useState, useEffect } from 'react';
import './Countdown.scss';

const Countdown = () => {
    // Set the date we're counting down to
    var countDownDate = new Date("Dec 25, 2023 15:37:25").getTime();

    const [timeLeft, setTimeLeft] = useState(countDownDate - new Date().getTime());

    useEffect(() => {
        const timer=setTimeout(() => {
            setTimeLeft(countDownDate - new Date().getTime());
        }, 1000);

        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
    });

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return (
        <div className="countdown">
            <p>{`${days}d ${hours}h ${minutes}m ${seconds}s`}</p>
        </div>
    );
};

export default Countdown;
