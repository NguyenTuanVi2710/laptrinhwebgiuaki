var i = 0;
        function _right(){
            i++; 
            if(i == arr.length) i=0;
            document.getElementById('show').src = arr[i];
        }
        function _left(){
            i++; 
            if(i == arr.length) i=0;
            document.getElementById('show').src = arr[i];
        }
        setInterval(_right,1000);
        function show(x) {
            if (x == 1){
                //gia tri 1 
              document.getElementById('show').src= 'img/banner.jpg'

            }else if (x == 2){
                //gia tri 2
                document.getElementById('show').src= 'img/banner00.png'
            }else {
                //cuoi cung
                document.getElementById('show').src= 'img/banner3.png'
            }
        }