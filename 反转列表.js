     var reverseList = function(head){
        let [prev,curent] = [null,head];
        while (curent){
            let temp = curent.next;
            curent.next = prev;
            prev = curent;
            curent = temp;

        }
        return prev;


     }
