/**
 * @param {number[]} nums
 * @return {number[]}
 */
    var smallerNumbersThanCurrent = function(nums) {
        var len = nums.length;
        //max
        var max =-1;
        for(let i=0;i<len;i++){
            max = max<nums[i]?nums[i]:max;
        }
        var hash = new Array(max);
        var dp = new Array(max);
        for (let i=0;i<max+1;i++) {
            hash[i] =0;
            dp[i]=0;
        }
        for(let i=0;i<len;i++){
            hash[nums[i]]++;
        }
        var temp = 0;
        for(let i=0;i<max+1;i++){
            if (hash[i]!=0){
                dp[i] = temp;
                temp = hash[i] + dp[i];
            }
        }
        //final pre;
        var ans = [];
        for(let i=0;i<len;i++){
                ans.push(dp[nums[i]]);
        }
        return ans;
    };
