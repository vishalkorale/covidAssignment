// function compareFn(arr) {
//     return arr.sort((a,b) => a-b)
//   }

//   console.log(compareFn([1,200,5,34,56,6,0]));


function getCurrentTime(){
    const now = new Date(); // Create a new Date object representing the current time
    const hours = now.getHours(); // Get the current hour
    // const minutes = now.getMinutes(); // Get the current minute
    // const seconds = now.getSeconds(); // Get the current second

    // Format the time as "HH:MM:SS"
    const formattedTime = `${hours}`;

    return formattedTime; // Return the formatted time string
}

console.log(getCurrentTime());