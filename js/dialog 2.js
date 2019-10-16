var toc = document.getElementById('toc')

if (toc != null) {
	window.addEventListener("scroll", scrollcatelogHandler);
	var tocPosition = toc.offsetTop;

	function scrollcatelogHandler(e) {
		 var event = e || window.event,
		     target = event.target || event.srcElement;
		 var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		 if (scrollTop > tocPosition-30) {
		     toc.classList.add("toc-fixed");
		 } else {
		     toc.classList.remove("toc-fixed");
		 }
	}
}


var night_model=false;		//夜间阅读模式
var content_fontsize_big=false;		//夜间阅读模式

function getStyle(obj, attri) {
	if (obj == null) {
		return ""
	}
 	return obj.currentStyle ? obj.currentStyle[attri] : window.getComputedStyle(obj, null)[attri];
}

var header = document.getElementById('allheader');
var footer = document.getElementById('footer');
var wrap = document.getElementById('wrap');
var articleInner = document.getElementById('articleInner');
var h1title = document.getElementsByTagName('h1');
var h2title = document.getElementsByTagName('h2');
var h3title = document.getElementsByTagName('h3');
var h4title = document.getElementsByTagName('h4');
var h5title = document.getElementsByTagName('h5');
var h6title = document.getElementsByTagName('h6');
var figure = document.getElementsByTagName('figure');
var code = document.getElementsByTagName('code');
var pre = document.getElementsByTagName('pre');
var all_ul = document.getElementsByTagName('ul');
var all_p = document.getElementsByTagName('p');

var header_bg_d = getStyle(header, "background"),
	header_border_d = getStyle(header, "border-color"),
	footer_bg_d = getStyle(footer, "background"),
	body_bg_d = '#fff',
	article_h_d = getStyle(h2title[0], "color"),
	article_p_d = '#444444',
	article_ul_d = getStyle(all_ul[0], "color"),
	code_bg_d = '#f8f8f8',
	code_border_d = '#eef1f8',
	code_color_d = getStyle(document.getElementsByTagName('code')[0], "color");

var header_bg_n = '#161718',
	header_border_n = '#1f2021',
	footer_bg_n = header_bg_n,
	body_bg_n = '#1d1e1f',
	article_h_n = '#9da5ae',
	article_p_n = '#959da5',
	article_ul_n = '#959da5',
	code_bg_n = '#2d2f31',
	code_border_n = '#333333',
	code_color_n = article_p_n;




function setBackground(){
	var i = 0;
	night_model = !night_model;
	if(night_model == false){
    	header.style.background = header_bg_d;
    	footer.style.background = footer_bg_d;
    	header.style.borderColor = header_border_d;
    	wrap.style.background = body_bg_d;
    	articleInner.setAttribute('class','article-inner');

		for (i=0;i<h1title.length;i++){ 
		  	h1title[i].style.color = article_h_d;
		}
		for (i=0;i<h2title.length;i++){ 
		  	h2title[i].style.color = article_h_d;
		}
		for (i=0;i<h3title.length;i++){ 
		  	h3title[i].style.color = article_h_d;
		}
		for (i=0;i<h4title.length;i++){ 
		  	h4title[i].style.color = article_h_d;
		}
		for (i=0;i<h5title.length;i++){ 
		  	h5title[i].style.color = article_h_d;
		}
		for (i=0;i<h6title.length;i++){ 
		  	h6title[i].style.color = article_h_d;
		}
		for (i=0;i<figure.length;i++){ 
		  	figure[i].style.background = code_bg_d;
		  	figure[i].style.borderColor = code_border_d;
		}
		for (i=0;i<code.length;i++){ 
		  	code[i].style.color = code_color_d;
		}
		for (i=0;i<pre.length;i++){ 
		  	pre[i].style.background = code_bg_d;
		  	pre[i].style.color = '#525252';
		}
		for (i=0;i<all_p.length;i++){ 
		  	all_p[i].style.color = article_p_d;
		}
		for (i=0;i<all_ul.length;i++){ 
		  	all_ul[i].style.color = article_ul_d;
		}
	}else{
    	header.style.background = header_bg_n;
    	footer.style.background = footer_bg_n;
    	header.style.borderColor = header_border_n;
    	wrap.style.background = body_bg_n;
    	articleInner.setAttribute('class','article-inner-night');

		for (i=0;i<h1title.length;i++){ 
		  	h1title[i].style.color = article_h_n;
		}
		for (i=0;i<h2title.length;i++){ 
		  	h2title[i].style.color = article_h_n;
		}
		for (i=0;i<h3title.length;i++){ 
		  	h3title[i].style.color = article_h_n;
		}
		for (i=0;i<h4title.length;i++){ 
		  	h4title[i].style.color = article_h_n;
		}
		for (i=0;i<h5title.length;i++){ 
		  	h5title[i].style.color = article_h_n;
		}
		for (i=0;i<h6title.length;i++){ 
		  	h6title[i].style.color = article_h_n;
		}
		for (i=0;i<figure.length;i++){ 
		  	figure[i].style.background = code_bg_n;
		  	figure[i].style.borderColor = code_border_n;
		}
		for (i=0;i<code.length;i++){ 
		  	code[i].style.color = code_color_n;
		}
		for (i=0;i<pre.length;i++){ 
		  	pre[i].style.background = code_bg_n;
		  	pre[i].style.color = article_p_n;
		}
		for (i=0;i<all_p.length;i++){ 
		  	all_p[i].style.color = article_p_n;
		}
		for (i=0;i<all_ul.length;i++){ 
		  	all_ul[i].style.color = article_ul_n;
		}
	}
	
}

function setFontSize() {		//正文字号大小

	content_fontsize_big = !content_fontsize_big;
	if(content_fontsize_big == true){
		for (var i=0;i<all_p.length;i++){ 
		  	all_p[i].style.fontSize='1.2em';
		}
	} else {
		for (var i=0;i<all_p.length;i++){ 
		  	all_p[i].style.fontSize='1em';
		}
	}
}