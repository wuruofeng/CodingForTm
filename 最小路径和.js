    var minPathSum = function(grid) {
        var row = grid.length;
        if(row ==0) return 0;
        var col =grid[0].length;

        var dp = new Array(row+1);
        for(let i=0;i<row+1;i++){
            dp[i] = new Array(col+1);
        }
        for (let i=0;i<row+1;i++)
            for(let j=0;j<col+1;j++){
                dp[i][j] = Number.MIN_SAFE_INTEGER;
            }

        //dp[i][j] = min{dp[i][j-1],dp[i-1][j]} + grid[i][j]
        for(let i=0;i<col+1;i++) dp[0][i] = Number.MAX_SAFE_INTEGER;
        for(let i=0;i<row+1;i++) dp[i][0] = Number.MAX_SAFE_INTEGER;
        dp[0][0] = 0;
        dp[0][1] = 0;
        dp[1][0] = 0;

        for (let i=1;i<row+1;i++){
            for(let j=1;j<col+1;j++){
                dp[i][j] = Math.min(dp[i][j-1],dp[i-1][j]) + grid[i-1][j-1];
            }
        }

        return dp[row][col];

    };
