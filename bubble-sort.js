
function bubbleSort(arr) {

  // Iterate through the array
let swapped = false;
let i = 0;
  do {
    swapped = false;
    // If the current value is greater than its neighbor to the right
      // Swap those values
    for(let i = 0; i < arr.length - 1; i += 1) {
      if(arr[i] > arr[i + 1]) {
        [[arr[i]], [arr[i + 1]]] = [[arr[i + 1]], [arr[i]]]
        swapped = true;
      }
    }
      
      // Do not move this console.log
      console.log(arr.join(","));
    }while(swapped)
      

  
  // If you get to the end of the array and no swaps have occurred, return
  return arr;
  // Otherwise, repeat from the beginning

}



module.exports = bubbleSort;