
function slide(which){
  
  var speed = 20;            //滚动速度
  var slidearea = G("slidearea");
  var slideleft = G("slideleft");
  var slideright = G("slideright");
  var slider = G("slider");
  
  var preimg = G("preimg");
  var nextimg = G("nextimg");
  
  var imgNum = GG("slider","img").length;                  //图片的个数
  slider.style.width=imgNum*100+"px";                      //设置滑动条的宽度 数字与字符串连接会自动转换为字符串
  
  //绑定事件
  
  //向左
  slideleft.onmouseover = function(){
    left = setInterval(scrollLeft,speed);
  }
  slideleft.onmouseout = function(){
    clearInterval(left);
  }
  
  //向右
  slideright.onmouseover = function(){
    right = setInterval(scrollRight,speed);
  }
  slideright.onmouseout = function(){
    clearInterval(right);
  }

  //上一张
  preimg.onclick = function(){
    preImg(which);
  }
  //下一张
  nextimg.onclick = function(){
    nextImg(which,imgNum);
  }
  
}

function scrollLeft(){
  /**
   * 向左滚动
   */
  slidearea.scrollLeft--;
}
function scrollRight(){
  /**
   * 向右滚动
   */
  slidearea.scrollLeft++;
}

function preImg(which){
  /**
   * 上一张
   * Gparam which 图片的新闻的id
   */
  var img = GG("image","img")[0];
  imgId = img.getAttribute("id");                          //大图片的id
  imgId--;
  if(imgId>=1){
    setFullimg(which,imgId)
  }
}

function nextImg(which,imgNum){
  /**
   * 下一张
   * Gparam which 图片的新闻的id
   * Gparam imgNum 图片的数量，确定上界
   */
  var img = GG("image","img")[0];
  imgId = img.getAttribute("id");                          //大图片的id
  imgId++;
  if(imgId < imgNum){
    setFullimg(which,imgId)
  }
}
