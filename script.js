const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let len = arr.length;
	// let start=0;
	// let count=0, currSum=0;

	// for(let end=0; end<len; end++){
	// 	currSum+=arr[end];
	// 	while(currSum>n && start<=end){
	// 		currSum-=arr[start]
	// 		start++;
	// 	}
	// 	count+=end-start+1
	// }
	// return count;


	let result=[]
	let currSubarr=[]
	let currSum=0;
	for(let i=0; i<len; i++){
		if(currSum+arr[i] > n){
			result.push(currSubarr)
			currSubarr=[]
			currSum=0
		}
		currSubarr.push(arr[i])
		currSum+=arr[i]
	}
	if(currSubarr.length>0){
		result.push(currSubarr)
	}
	return result;
};

// const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
