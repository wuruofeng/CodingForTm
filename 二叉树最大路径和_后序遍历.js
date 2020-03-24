    var res = Number.MIN_SAFE_INTEGER;
    function dfs(root) {
        if(root == null) return 0;
        var left = Math.max(0,dfs(root.left));
        var right = Math.max(0,dfs(root.right));
        res  = Math.max(res,left+right+root.val);
        return Math.max(left,right) + root.val;
    }
    var maxPathSum = function(root) {
        res = Number.MIN_SAFE_INTEGER;
        dfs(root);
        return res;
    };

    console.log(maxPathSum([1,2,3]))
