function trans(n) {
        let num=0,res =0;
        while(n!=0){
            num = n%10;
            res += num*num;
            n =  Math.floor(n/10);
        }
        return res;
    }

    var isHappy = function(n) {
        let slow_pt = trans(n);
        let fast_pt = trans(trans(n));
        while (slow_pt != fast_pt){
            slow_pt = trans(slow_pt);
            fast_pt = trans(trans(fast_pt));
        }
        if(slow_pt == 1){
            return true;
        }else{
            return false;
        }
    };
