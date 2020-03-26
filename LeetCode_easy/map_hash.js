    var majorityElement = function(nums) {
        let map = new Map();
        let num = nums.length;
        for (let i=0;i<num;i++){
            if (map.has(nums[i])){
                map.set(nums[i],map.get(nums[i])+1);
            }else{
                map.set(nums[i],1);
            }
        }

        let tar = Math.floor(nums.length/2);
        for (let item of map.entries()){
            if (item[1]>tar){
                return item[0];
            }
        }

    }
