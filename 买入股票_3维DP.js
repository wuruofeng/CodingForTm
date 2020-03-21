<script>
    
    var maxProfit = function(prices) {
        let len = prices.length;
        if(len==0){
            return 0;
        }
        let dp = new Array(len);
        for(let i=0;i<len;i++){
            dp[i] = new Array(3);
        }
        for(let i=0;i<len;i++){
            for(let j=0;j<3;j++){
                dp[i][j] = new Array(2);
            }
        }
        for(let i=0;i<len;i++){
            for(let j=0;j<3;j++){
                for(let k=0;k<2;k++){
                    dp[i][j][k] = Number.MIN_SAFE_INTEGER;
                }
            }
        }
        dp[0][0][0] = 0;
        dp[0][0][1] = -prices[0];
        for(let i=1;i<len;i++){
            for(let j=0;j<3;j++){
                if(j==0){
                    dp[i][j][0] = dp[i-1][j][0];
                    dp[i][j][1] = Math.max(dp[i-1][j][1],dp[i-1][j][0]-prices[i]);
                }else{
                    dp[i][j][0] = Math.max(dp[i-1][j][0],dp[i-1][j-1][1]+prices[i]);
                    dp[i][j][1] = Math.max(dp[i-1][j][1],dp[i-1][j][0]-prices[i]);
                }

            }
        }
        var ans = Math.max(dp[len-1][0][0],dp[len-1][1][0],dp[len-1][2][0]);
        return ans<0?0:ans;
    };

    var prices = [1,2,3,4,5];
    console.log(maxProfit(prices));
    
</script>
