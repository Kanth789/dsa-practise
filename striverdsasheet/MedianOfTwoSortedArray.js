var findMedianSortedArrays = function(nums1, nums2) {
    debugger
    let n1 = nums1.length;
    let n2 = nums2.length;

    if (n1 > n2) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let n = n1 + n2;
    let left = Math.floor((n1 + n2 + 1) / 2);
    let low = 0;
    let high = n1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let mid1 = left - mid;

        let l1 = (mid > 0) ? nums1[mid - 1] : Number.MIN_SAFE_INTEGER;
        let l2 = (mid1 > 0) ? nums2[mid1 - 1] : Number.MIN_SAFE_INTEGER;

        let r1 = (mid < n1) ? nums1[mid] : Number.MAX_SAFE_INTEGER;
        let r2 = (mid1 < n2) ? nums2[mid1] : Number.MAX_SAFE_INTEGER;

        if (l1 <= r2 && l2 <= r1) {
            if (n % 2 === 1) {
                return Math.max(l1, l2);
            } else {
                return (Math.max(l1, l2) + Math.min(r1, r2)) / 2.0;
            }
        } else if (l1 > r2) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return 0;
};

console.log(findMedianSortedArrays([1, 2], [3, 4])); // should return 2.5
