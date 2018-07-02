//-------------------------------------
var designWidth=document.getElementsByTagName("head")[0].getAttribute("design-width");
font_size(designWidth);
function font_size(devwidth){
function _size(){
	var deviceWidth = document.documentElement.clientWidth;
	if(deviceWidth>=750) deviceWidth=750;
	document.documentElement.style.fontSize = deviceWidth/(devwidth/100) + 'px';
}
_size();
window.onresize=function(){
	_size();
};
}
var media = document.createElement('style');
    media.innerHTML = "@media screen and (min-width:" + 750 + "px){.center{width:"+750+"px;margin-left:-"+750/2+"px;left:50%;}.fixed-right{right:calc((100% - 750px)/2)}}";
  document.getElementsByTagName('head')[0].appendChild(media);
//-------------------------------------