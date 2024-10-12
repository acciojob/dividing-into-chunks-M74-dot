const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let len = arr.length;
	let start=0;
	let count=0, currSum=0;

	for(let end=0; end<len; end++){
		currSum+=arr[end];
		while(currSum>n && start<=end){
			currSum-=arr[start]
			start++;
		}
		count+=end-start+1
	}
	return count;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
