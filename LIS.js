var lengthOfLIS = function(nums) {
    var len = nums.length;
    if(len ==0) return 0;
    var dp = [];
    for(let i=0;i<len;i++) dp[i] =1;
    //dp(i) = max{dp(j)}+1;   (i>j>=0)
    for(let i=0;i<len;i++){
        var max =dp[i];
        for(let j=0;j<i;j++){
            if(nums[j] < nums[i]){
                max = max<dp[j]?dp[j]:max;
                dp[i] = max+1;
            }
        }

    }
    var ans =-1;
    for(let i =0;i<len;i++){
        ans = ans<dp[i]?dp[i]:ans;
    }
    return ans;
};

console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]));
