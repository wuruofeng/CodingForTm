    var numberOfSteps  = function(num) {
        var ans= 0;
        while (num!=0){
            if (num%2==0){
                ans++;
                num/=2;
            }
            if (num%2==1){
                ans++;
                num-=1;
            }
        }
        return ans;
    };
