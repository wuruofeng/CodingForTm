    var cuttingRope = function(n) {
        if (n<4) return n-1;
        var p = Math.floor(n/3);
        var max = n%3;
        if (max == 0) return Math.pow(3,p);
        if (max == 1) return Math.pow(3,p-1)*4;
        if (max == 2) return Math.pow(3,p-1)*6;
    };
