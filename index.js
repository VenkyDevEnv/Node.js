let a = [1,[2,[3,4]]];

function flatArr(arr){
    let results = [];

    function helper(subArr){
        for(let i=0; i<subArr.length; i++)
        if(Array.isArray(subArr[i])){
            helper(subArr[i])
        } else {
            results.push(subArr[i])
        }
    }
    helper(arr)
    return results
    
}

console.log(flatArr(a))

// DSA
// searching - linear search(O(n)) and binary search(O(logn)))
// sorting - insersion sort, bobble sort, merge sort, 