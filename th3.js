function minArray(arr){
    let max= arr[0]
    for (var i =1; i< arr.length; i++){
        if (arr[i]> max){
            max = arr[i]
        }
    }
    return max
}
let arr1 = [3,5,1,8,-3,7,8]
let max = minArray(arr1)
document.write("Số lớn nhất trong dãy là " +max)