<script>

    var maxProfit = function(prices,k) {
        let max = k+1;
        let len = prices.length;
        if(len==0 || k<0){
            return 0;
        }
        let dp = new Array(len);
        for(let i=0;i<len;i++){
            dp[i] = new Array(max);
        }
        for(let i=0;i<len;i++){
            for(let j=0;j<max;j++){
                dp[i][j] = new Array(2);
            }
        }
        for(let i=0;i<len;i++){
            for(let j=0;j<max;j++){
                for(let p=0;p<2;p++){
                    dp[i][j][p] = Number.MIN_SAFE_INTEGER;
                }
            }
        }
        dp[0][0][0]=0;
        dp[0][0][1]=-prices[0];
        for(let i=1;i<len;i++){
            for(let j=0;j<max;j++){
                if(j==0){
                    dp[i][j][0] = dp[i-1][j][0];
                    dp[i][j][1] = Math.max(dp[i-1][j][1],dp[i-1][j][0]-prices[i]);
                }else{
                    dp[i][j][0] = Math.max(dp[i-1][j][0],dp[i-1][j-1][1]+prices[i]);
                    dp[i][j][1] = Math.max(dp[i-1][j][1],dp[i-1][j][0]-prices[i]);
                }

            }
        }
        var ans = -1;
        for(let i=0;i<max;i++){
            if(dp[len-1][i][0]>ans)
                ans = dp[len-1][i][0];
        }
        return ans<0?0:ans;
    };

    var prices = [2,4,1];
    console.log(maxProfit(prices,2));

</script>
