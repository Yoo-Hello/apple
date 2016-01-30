document.addEventListener('readystatechange',function(){
	    if(document.readyState==='complete'){
            var imgbox=document.querySelectorAll(".imgbox");
            var w=document.documentElement.clientWidth;
            window.onresize=function(){
                for(var i=0;i<imgbox.length;i++){
            	    imgbox[i].style.left=i*w+"px";
                }
            }
            window.onresize();
            
            var num=0;
            var move=function(){
            	num+=1;
            	if(num==3){
            		num=0;
            	}
                var off=-num*w;
            	for(var i=0;i<imgbox.length;i++){
                    imgbox[i].style.transform="translateX("+off+"px)"
            	}
            }
            /*var move=(function(){
            	var index=1;
            	return function(){
            		
            	}
            })*/
            setInterval(move,5000);
        } 
},false)