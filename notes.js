// pass array and callback
function myfind(arr, callback){
    // loop through array
for (let i = 0;i < arr.length; i++) {
    // Execute callback and pass in (element at current index 'Arr[i]', index '(I)', then entire array 'arr'
    // check iof returns true;
    if (callback(arr[i],) === true) return arr[i]
    }
    // optional: returns undefined if none true returned
    return undefined
}


// FIND INDEX
function myFindindex(arr, callback){
    // loop through array
    for (let i = 0; i < arr.length; i++) {
         // Execute callback and pass in (element at current index 'Arr[i]', index '(I)', then entire array 'arr'
        // check iof returns true;
        if (callback(arr[i], i, arr) === true) return i;

        // either make it return 'i' for index or -1 if not found
        
    }
    return -1;
}