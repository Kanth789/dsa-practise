function findMinPlatforms(arrival, departure) {
    arrival.sort((a, b) => a - b);
    departure.sort((a, b) => a - b);
  
    let platformsNeeded = 0;
    let maxPlatformsNeeded = 0;
    let arrIndex = 0;
    let depIndex = 0;
  
    while (arrIndex < arrival.length && depIndex < departure.length) {
      if (arrival[arrIndex] < departure[depIndex]) {
        platformsNeeded++;
        arrIndex++;
        maxPlatformsNeeded = Math.max(maxPlatformsNeeded, platformsNeeded);
      } else {
        platformsNeeded--;
        depIndex++;
      }
    }
  
    return maxPlatformsNeeded;
  }
  
  // Test the function with the given example
  let arrival = [900, 945, 955, 1100, 1500, 1800];
  let departure = [920, 1200, 1130, 1150, 1900, 2000];
  const result = findMinPlatforms(arrival, departure);
  console.log(result); // Output: 3
  