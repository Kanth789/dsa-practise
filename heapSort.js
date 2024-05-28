class HeapSort {
    // Function to sort an array using heap sort
    sort(arr) {
      let n = arr.length;
  
      // Build max heap
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        this.heapify(arr, n, i);
      }
  
      // Heap sort
      for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        [arr[0], arr[i]] = [arr[i], arr[0]];
  
        // Call max heapify on the reduced heap
        this.heapify(arr, i, 0);
      }
    }
  
    // Function to heapify a subtree rooted with node i which is an index in arr[]
    heapify(arr, n, i) {
        debugger
      let largest = i; // Initialize largest as root
      let l = 2 * i + 1; // left = 2*i + 1
      let r = 2 * i + 2; // right = 2*i + 2
  
      // If left child is larger than root
      if (l < n && arr[l] > arr[largest]) {
        largest = l;
      }
  
      // If right child is larger than largest so far
      if (r < n && arr[r] > arr[largest]) {
        largest = r;
      }
  
      // If largest is not root
      if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
  
        // Recursively heapify the affected sub-tree
        this.heapify(arr, n, largest);
      }
    }
  
    // Function to print an array
    static printArray(arr) {
      console.log(arr.join(' '));
    }
  }
  
  // Driver code
  let arr = [1, 12, 9, 5, 6, 10];
  
  let hs = new HeapSort();
  hs.sort(arr);
  
  console.log("Sorted array is:");
  HeapSort.printArray(arr);
  