const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    // new Date() will create an instance of the date class 
    const now = new Date();
    // get the seconds value real-time from the now object
    const seconds = now.getSeconds();
    // the seconds value is divided by 60 as 1min is equal to 60 sec
    // an the nmultiplied by 360 because a circle is formed by 360 deg
    const secondsDegrees = ((seconds/60) * 360) + 90;
    // The seconds hand will change it's angle based on the getSeconds value and putting through the above logic
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // get the minute value real-time from the now object
    const mins = now.getMinutes();
    // the min value is divided by 60 because 1 min is equal to 60 seconds
    // then multiplied by 360 because a circle is formed of 360 deg 
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    // rotate(${minsDegrees}deg) is used to rotate the min hand
    // Added second hand position with minutes. Because the minute's hand is in the right place depending on the second.
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hoursDegrees = ((hour / 12) * 360) + ((mins / 60)* 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

    // We need to call this rotate() function every 1 second (1000 milliseconds)
    setInterval(setDate, 1000);
    setDate();