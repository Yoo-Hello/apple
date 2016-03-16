document.addEventListener('readystatechange',function(){
	    if(document.readyState==='complete'){
            var imgbox=document.querySelectorAll(".imgbox");
            var botnavan=document.querySelectorAll(".botnavan li");
            // console.log(botnavan);
            var w;
            window.onresize=function(){
                w=document.documentElement.clientWidth;
                for(var i=0;i<imgbox.length;i++){
            	    imgbox[i].style.left=i*w+"px";
                }
            }
            window.onresize();
            
            var num=0;
            function moveFn(){
            	num+=1;
            	if(num==4){
            		num=0;
            	}
                var off=-num*w;
            	for(var i=0;i<imgbox.length;i++){
                    imgbox[i].index=i;
                    imgbox[i].style.transform="translateX("+off+"px)";
                    for(var j=0;j<botnavan.length;j++){
                        botnavan[j].id="";
                    }
                    botnavan[num].id="thisan"
            	}
            }
            var move=setInterval(moveFn,5000);

            for(var i=0;i<botnavan.length;i++){
                botnavan[i].index=i;
                botnavan[i].onclick=function(){
                     var off=-this.index*w;
                    clearInterval(move);
                    for(var j=0;j<botnavan.length;j++){
                        botnavan[j].id="";
                    }
                    botnavan[this.index].id="thisan";
                    for(var v=0;v<imgbox.length;v++){
                        imgbox[v].style.transform="translateX("+off+"px)"
                    }
                }
            }

            var page=document.querySelector('body');
            var labelnav=document.querySelector('#menuicon-label');
            console.log(page)
            labelnav.onclick=function(){
              if(page.className=='page'){
                page.className='';
              }else{
                page.className='page';
              }
              
            }



        } 
},false)