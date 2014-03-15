@charset "utf-8";
/* CSS Document */

function mmLoadMenus() {
  if (window.menu1) return;
  window.menu1 = new Menu("root",100,22,"",12,"#1e82e1","#FFFFFF","#DEDEDE","#1e82e1","left","middle",6,0,500,-5,7,true,false,true,0,true,true);
  menu1.addMenuItem("&nbsp;ÐÐÕþÁìµ¼","location='zzjg01.php'");
  menu1.addMenuItem("&nbsp;ÑÐ¾¿ÊÒ","location='zzjg02.php'");
  menu1.addMenuItem("&nbsp;Ñ§ÊõÎ¯Ô±»á","location='zzjg03.php'");
   menu1.hideOnMouseOut=true;
   menu1.bgColor='#555555';
   menu1.menuBorder=1;
   menu1.menuLiteBgColor='#FFFFFF';
   menu1.menuBorderBgColor='#777777';

  window.menu2 = new Menu("root",100,22,"",12,"#1e82e1","#FFFFFF","#DEDEDE","#1e82e1","left","middle",6,0,500,-5,7,true,false,true,0,true,true);
  menu2.addMenuItem("&nbsp;¹Ì¶¨ÈËÔ±","location='xsdw01.php'");
  menu2.addMenuItem("&nbsp;¿Í×ùÈËÔ±","location='xsdw02.php'");
   menu2.hideOnMouseOut=true;
   menu2.bgColor='#555555';
   menu2.menuBorder=1;
   menu2.menuLiteBgColor='#FFFFFF';
   menu2.menuBorderBgColor='#777777';

  window.menu3 = new Menu("root",100,22,"",12,"#1e82e1","#FFFFFF","#DEDEDE","#1e82e1","left","middle",6,0,500,-5,7,true,false,true,0,true,true);
  menu3.addMenuItem("&nbsp;ÑÐ¾¿·½Ïò","location='kxyj01.php'");
  menu3.addMenuItem("&nbsp;ÔÚÑÐ¿ÎÌâ","location='kxyj02.php'");
  menu3.addMenuItem("&nbsp;Ö÷Òª³É¹û","location='kxyj03.php'");
  menu3.addMenuItem("&nbsp;»ñ½±³É¹û","location='kxyj04.php'");
  menu3.addMenuItem("&nbsp;·¢±íÂÛÖø","location='kxyj05.php'");
  menu3.addMenuItem("&nbsp;¼ø¶¨³É¹û","location='kxyj06.php'");
  menu3.addMenuItem("&nbsp;»ñµÃ×¨Àû","location='kxyj07.php'");
  menu3.addMenuItem("&nbsp;×ÔÖ÷¿ÎÌâ","location='kxyj08.php'");
  menu3.addMenuItem("&nbsp;Äê¶È±¨¸æ","location='kxyj09.php'");
   menu3.hideOnMouseOut=true;
   menu3.bgColor='#555555';
   menu3.menuBorder=1;
   menu3.menuLiteBgColor='#FFFFFF';
   menu3.menuBorderBgColor='#777777';

  window.menu4 = new Menu("root",120,22,"",12,"#1e82e1","#FFFFFF","#DEDEDE","#1e82e1","left","middle",6,0,500,-5,7,true,false,true,0,true,true);
  menu4.addMenuItem("&nbsp;Ñ§¿Æ½éÉÜ","location='rcpy01.php'");
  menu4.addMenuItem("&nbsp;²©Ê¿ºóÁ÷¶¯Õ¾½éÉÜ","location='rcpy03.php'");
   menu4.hideOnMouseOut=true;
   menu4.bgColor='#555555';
   menu4.menuBorder=1;
   menu4.menuLiteBgColor='#FFFFFF';
   menu4.menuBorderBgColor='#777777';

  window.menu5 = new Menu("root",100,22,"",12,"#1e82e1","#FFFFFF","#DEDEDE","#1e82e1","left","middle",6,0,500,-5,7,true,false,true,0,true,true);
  menu5.addMenuItem("&nbsp;Ñ§Êõ½»Á÷Í¼¼¯","location='xsjl01.php'");
  menu5.addMenuItem("&nbsp;Ö÷°ì»áÒé","location='xsjl02.php'");
  menu5.addMenuItem("&nbsp;·ÃÎÊÍ³¼Æ","location='xsjl03.php'");
  menu5.addMenuItem("&nbsp;Ö÷±àÂÛÎÄ¼¯","location='xsjl04.php'");
   menu5.hideOnMouseOut=true;
   menu5.bgColor='#555555';
   menu5.menuBorder=1;
   menu5.menuLiteBgColor='#FFFFFF';
   menu5.menuBorderBgColor='#777777';

  window.menu6 = new Menu("root",120,22,"",12,"#1e82e1","#FFFFFF","#DEDEDE","#1e82e1","left","middle",6,0,500,-5,7,true,false,true,0,true,true);
  menu6.addMenuItem("&nbsp;Ö÷ÒªÉè±¸Ò»ÀÀ±í","location='yqsb01.php'");
  menu6.addMenuItem("&nbsp;Ö÷ÒªÒÇÆ÷Éè±¸½éÉÜ","location='yqsb02.php'");
  menu6.addMenuItem("&nbsp;Ö÷ÒªÈí¼þ½éÉÜ","location='yqsb03.php'");
   menu6.hideOnMouseOut=true;
   menu6.bgColor='#555555';
   menu6.menuBorder=1;
   menu6.menuLiteBgColor='#FFFFFF';
   menu6.menuBorderBgColor='#777777';

  window.menu7 = new Menu("root",210,22,"",12,"#1e82e1","#FFFFFF","#DEDEDE","#1e82e1","left","middle",6,0,500,-5,7,true,false,true,0,true,true);
  menu7.addMenuItem("&nbsp;Á¦Ñ§Ò»¼¶Ñ§¿Æ¼ò½é","location='show.php?id=9'");
  menu7.addMenuItem("&nbsp;¹¤³ÌÁ¦Ñ§ÖØµãÑ§¿Æ","location='show.php?id=10'");
  menu7.addMenuItem("&nbsp;¹ÌÌåÁ¦Ñ§ÖØµãÑ§¿Æ","location='show.php?id=11'");
  menu7.addMenuItem("&nbsp;´¬²°Óëº£Ñó½á¹¹ÎïÉè¼ÆÖÆÔìÖØµãÑ§¿Æ","location='show.php?id=12'");
   menu7.hideOnMouseOut=true;
   menu7.bgColor='#555555';
   menu7.menuBorder=1;
   menu7.menuLiteBgColor='#FFFFFF';
   menu7.menuBorderBgColor='#777777';

  window.menu8 = new Menu("root",100,22,"",12,"#1e82e1","#FFFFFF","#DEDEDE","#1e82e1","left","middle",6,0,500,-5,7,true,false,true,0,true,true);
  menu8.addMenuItem("&nbsp;Ñ§Êõ±¨¸æ","location='xsbg01.php'");
  menu8.addMenuItem("&nbsp;Ñ§Êõ»áÒé","location='xsbg02.php'");
   menu8.hideOnMouseOut=true;
   menu8.bgColor='#555555';
   menu8.menuBorder=1;
   menu8.menuLiteBgColor='#FFFFFF';
   menu8.menuBorderBgColor='#777777';

  window.menu9 = new Menu("root",97,22,"",12,"#1e82e1","#FFFFFF","#DEDEDE","#1e82e1","left","middle",6,0,500,-5,7,true,false,true,0,true,true);
  menu9.addMenuItem("&nbsp;¿ª·Å¿ÎÌâÄ¿Â¼","location='kfjj01.php'");
  menu9.addMenuItem("&nbsp;»ù½ðÉêÇëÊé","location='kfjj02.php'");
  menu9.addMenuItem("&nbsp;»ù½ð¹ÜÀí°ì·¨","location='kfjj03.php'");
  menu9.addMenuItem("&nbsp;»ù½ðÉêÇëÖ¸ÄÏ","location='kfjj04.php'");
   menu9.hideOnMouseOut=true;
   menu9.bgColor='#555555';
   menu9.menuBorder=1;
   menu9.menuLiteBgColor='#FFFFFF';
   menu9.menuBorderBgColor='#777777';

menu9.writeMenus();
}