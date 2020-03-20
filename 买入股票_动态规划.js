<script>


    var maxProfit = function(prices, fee) {
        let len = prices.length;
        let dp = new Array(len);
        for(let i=0;i<len;i++){
            dp[i] = new Array(2);
        }
        for (let i=0;i<len;i++)
            for (let j =0;j<2;j++){
                dp[i][j] = Number.MIN_SAFE_INTEGER;
            }
        dp[0][0]=0;
        dp[0][1]=-prices[0];
        for (let i=1;i<len;i++)
            for (let j =0;j<2;j++){
                if(j===0) dp[i][j] = Math.max(dp[i-1][0],dp[i-1][1]+prices[i]-fee);
                if(j===1) dp[i][j] = Math.max(dp[i-1][1],dp[i-1][0]-prices[i]);
            }
        return Math.max(dp[len-1][0],dp[len-1][1]);
    };
    var prices = [1, 3, 2, 8, 4, 9];
    console.log(maxProfit(prices,2));
    maxProfit(prices,2);

</script>
