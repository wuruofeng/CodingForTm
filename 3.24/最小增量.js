    var minIncrementForUnique = function(A) {
        let len = A.length;
        if(len == 0) return 0;
        var hash = new Array(2*len);
        for (let i=0;i<hash.length;i++) hash[i]=0;
        for(let i=0;i<len;i++){
            hash[A[i]]++;
        }
        var ans=0;
        var carry =0;
        for(let i=0;i<hash.length;i++){
            hash[i] += carry;
            if(hash[i]>1){
                carry = hash[i]-1;
                ans+=carry;
            }else{
                carry = 0;
            }
        }
        return ans;

    };

