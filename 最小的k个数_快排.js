<script>

    var quick_sort = function (arr,startIndex,endIndex) {
        let i= startIndex;
        let j= endIndex;
        if(i>=j) return;
        let pivot  = arr[i];
        while (i<j){
           while (i<j && arr[j] >= pivot){
               j--;
           }
           if(i<j) arr[i++] = arr[j];

           while (i<j && arr[i] <= pivot){
                i++;
            }
            if(i<j) arr[j--] = arr[i];
        }
        arr[i] = pivot;
        quick_sort(arr,startIndex,i-1);
        quick_sort(arr,i+1,endIndex);
    };

    var getLeastNumbers = function(arr, k) {
        quick_sort(arr,0,arr.length-1);
        var a = [];
        for(let i=0;i<k;i++) a.push(arr[i]);
        return a;
    };

    var arr = [0,1,2,1];
    console.log(getLeastNumbers(arr,4));


</script>
