// JavaScript Document
window.onload=function(){

        var oModDiv=document.getElementById('mod_img');
        var oModUl=oModDiv.children[0];
        var aModLi=oModUl.children;
        var aModImg=oModUl.getElementsByTagName('img');
        var aTitle=oModUl.getElementsByTagName('h3');
        oModUl.style.width=aModLi.length*aModLi[0].offsetWidth+'px';
        //1.拖拽
        oModUl.onmousedown=function(ev){
            var e=ev||event;
            var disX= e.clientX-oModUl.offsetLeft;
            document.onmousemove=function(ev){
                var e=ev||event;
                var l=e.clientX-disX;
                //限定
                if(l<oModDiv.offsetWidth/2-(aModLi.length-1+0.5)*aModLi[0].offsetWidth)
                    l=oModDiv.offsetWidth/2-(aModLi.length-1+0.5)*aModLi[0].offsetWidth;
                if(l>oModDiv.offsetWidth/2-(0+0.5)*aModLi[0].offsetWidth)
                    l=oModDiv.offsetWidth/2-(0+0.5)*aModLi[0].offsetWidth;
                oModUl.style.left= l+'px';

                //求距离
                setSize();
            };
            document.onmouseup=function(){
				 oModUl.releaseCapture&&oModUl.releaseCapture();
                document.onmousemove=document.onmouseup=null;
            };
			oModUl.setCapture&&oModUl.setCapture();
            return false;
        };

        function setSize(){
            for(var i=0;i<aModLi.length;i++){
                var dis=Math.abs(oModDiv.offsetWidth/2-(oModUl.offsetLeft+aModLi[i].offsetLeft+aModLi[i].offsetWidth/2));
                var scale=1-dis/800;
                if(scale<0.5) scale=0.5;
//                    aSpan[i].innerHTML=scale;

               
                
                //修改图片的大小
                aModImg[i].style.width=550*scale+'px';
                aModImg[i].style.height=360*scale+'px';
                aModImg[i].style.left=-(aModImg[i].offsetWidth-aModLi[i].offsetWidth)/2+'px';
                aModImg[i].style.top=-(aModImg[i].offsetHeight-aModLi[i].offsetHeight)/2+'px';
                aModImg[i].style.zIndex=parseInt(scale*10000);
                aModImg[i].style.opacity=scale+0.3;
				
            }
        }

        //2.设置中心点
        setCenter(3);
        function setCenter(n){
            oModUl.style.left=oModDiv.offsetWidth/2-(n+0.5)*aModLi[0].offsetWidth+'px';
        }
        
        setSize();//先设置中心点，再放大

        //3.‘响应式'
        window.onresize=function(){
            setSize();
        };
  
   
};