const speedLimit = 70;
const kmPerDemeritPoint = 5;
function speedDetector(speed) {
    // if the speed is less than the speed limit 
    if (speed < speedLimit){
        console.log("Ok");
        return;
    } 
    // calculate demerit points
    const demeritPoints = Math.floor((speed - speedLimit)/ kmPerDemeritPoint);
    // IF points are greater than 12 suspend license
    if (demeritPoints > 12 ) {
        console.log("License suspended");
    } else {
        console.log("Points:" + demeritPoints);
    }
}
