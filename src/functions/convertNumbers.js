export const convertNumber = (number) => {
    const numberWithCommas = number.toLocaleString();
    var arr = numberWithCommas.split(",");
    if (arr.length == 5) {
      //Trillions
      return arr[0] + "." + arr[1].slice(0, 2) + "T";
    } else if (arr.length == 4) {
      //Billions
      return arr[0] + "." + arr[1].slice(0, 2) + "B";
    } else if (arr.length == 3) {
      // Millions
      return arr[0] + "." + arr[1].slice(0, 2) + "M";
    } else if (arr.length == 2) {
      // Thousands
      return arr[0] + "." + arr[1].slice(0, 2) + "K";
    } else {
      // Hundreds
      return number.toLocaleString();
    }
  };

// export const convertNumber = (number) => {
//     const absNumber = Math.abs(number); // Take the absolute value to handle negative numbers
//     const numberWithCommas = absNumber.toLocaleString();
    
//     // Determine the magnitude of the number
//     if (absNumber >= 1e12) {
//         return (absNumber / 1e12).toFixed(2) + "T"; // Trillions
//     } else if (absNumber >= 1e9) {
//         return (absNumber / 1e9).toFixed(2) + "B"; // Billions
//     } else if (absNumber >= 1e6) {
//         return (absNumber / 1e6).toFixed(2) + "M"; // Millions
//     } else if (absNumber >= 1e3) {
//         return (absNumber / 1e3).toFixed(2) + "K"; // Thousands
//     } else {
//         return numberWithCommas; // Hundreds or less
//     }
// }
