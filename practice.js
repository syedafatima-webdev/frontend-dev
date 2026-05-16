// Write a function that returns only unique values from an array, without using Set or filter

// jsremoveDuplicates([1, 2, 2, 3, 4, 4, 5]) // → [1, 2, 3, 4, 5] //


function removeDuplicates(){
    let seen = [];
    let result = [];

    arr.forEach(item => {
        if(seen.includes(item)){
        }
        else{
            seen.push(item);
            result.push(item);
        }
    });
    return result;
}


let arr=[1, 2, 2, 3, 4, 4, 5];
removeDuplicates();