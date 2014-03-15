
function G(param){
  //由id获得节点
  return document.getElementById(param);
}
function GG(id,tag){
  //获得id下的一组节点
  return document.getElementById(id).getElementsByTagName(tag);
}
//-------------------入口------------------------------//
window.onload=
function(){
  // 获得新闻列表
  var lis = GG("news","li");
  //初始化
  initLiId(lis);
  var length = initPages(1);
  //绑定列表的点击事件
  for(i=0;i<lis.length;i++){
    lis[i].onclick = function(){      
      //初始化--。 并获得图片的个数
      initPages(this.id);
      return false;
    }
  }

  return false;
}

function initLiId(lis){
  /**
   * 设置左边新闻列表的id
   * Gparam lis是li标签数组
   */
  for(i=0;i<lis.length;i++){
    lis[i].id=i+1;
  }
}
function initPages(which){
  /**
   * 初始化当前新闻的图片
   * Gparam which 哪条新闻
   * return 该新闻的图片个数
   */
  //这些数字为每个新闻对应的图片张数
  var imageNum = new Array(13,24,11,28,8,18,7,3,1);
  //新闻的id是从1开始的
  setH2(which);                            //标题
  setThumbimg(which,imageNum[which-1]);   //缩略图
  setFullimg(which,1);                    //大图，初始显示第一张
  initPosition();                         //位置

  //处理滑动效果，提供一个入口
  slide(which);
  
  return imageNum[which-1];
}
function initPosition(){
  /**
   * 初始化位置
   */
  var sliderarea = G("slidearea");
  slidearea.scrollLeft = 0;
}
function setH2(which){
  /**
   * 设置右边的h2标题内容
   */
  //初始化标题内容
  var header = new Array("数控中心","团队会议","科技部杨副司长视察","人事部创新团队考察","创新团队会议以及人事部二批专家视察",
			 "孙道恒老师讲座","陈云贤副省长视察","广东省211检查","2012全国院长大会");
  h2 = GG("content","h2")[0];
  h2.innerHTML = header[which-1];
}
function setThumbimg(which,length){
  /**
   * 设置缩略图的图片
   * Gparam which 表示哪个图片列表
   * Gparam length 该新闻的图片个数
   * return 
   */
  var slider = G("slider");
  var inner = '';  //用来设置slider里面的html语句
  
  //拼接所有的图片
  for(i=1;i<=length;i++){
    imgs="<img id='"+i+"' src='img/0"+which+"/thumbs/"+i+".jpg' />";
    inner+=imgs; 
  }
  slider.innerHTML = inner;
  //为每张照片添加点击事件
  thumbImages = GG("slider","img");
  for(i=0;i<thumbImages.length;i++){
    thumbImages[i].onclick = function(){setFullimg(which,this.id);};
  }
}

function setFullimg(which,id){
  /**
   * 设置大图的图片
   * Gparam which 新闻序列
   * Gparam id 所点击图片的id
   */
  var image = G("image");
  var inner = "<img src = 'img/0"+which+"/"+id+".JPG' id="+id+" />";  //设置image的innerHTML  在这里特地加了id参数，方便实现上一张功能
  
  image.innerHTML = inner;
}

