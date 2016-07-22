"use strict";
function Slider(option){
	var container = option.container,
		slideTime = option.slideTime || 3000,
		autoSlide = option.autoSlide,
		pagination = option.pagination,
		slider = container.querySelector("ul"),
		totalSlides = container.querySelectorAll("ul li").length,
		slideWidth = container.querySelector("ul li").clientWidth,
		next = container.querySelector(".next"),
		prev = container.querySelector(".prev"),
		counter = 1,
		marginLeft = "";
		
	slider.style.width= totalSlides * slideWidth + "px";

	this.next = function(next){
		doSlide(next);
	};

	this.prev = function(prev){
		doSlide(prev);
	};

	function doSlide(e){
		console.log(e.target);
		if(e.target ==  next){
			if(counter == totalSlides){
				slider.style.marginLeft = 0;
				counter = 1;
			}else{
				marginLeft = slider.style.marginLeft="-"+ slideWidth * counter +"px";
				counter ++;
			}
		}

		if(e.target ==  prev){
			if(counter == 1){
				marginLeft = slider.style.marginLeft="-" + ((slideWidth * totalSlides) - slideWidth) + "px";
				counter = totalSlides;
			}else{
				marginLeft = slider.style.marginLeft=(parseInt(marginLeft) + slideWidth) + "px";
				counter --;
			}
		}
	};

	if(pagination === true){
		for(var i=0; i<totalSlides; i++){
			var div = container.querySelector(".pagination");
			var span = document.createElement("span");
			div.appendChild(span);
			span.setAttribute("data",i)
			span.onclick = paginationBlock;
			span.innerHTML=i+1;
		}
	};

	function paginationBlock(){
		var num = this.getAttribute('data');
		marginLeft = slider.style.marginLeft = -(parseInt(num) * slideWidth) + "px";
		counter = parseInt(num) + 1;
	};

	if(autoSlide === true){
		var autoSlides;
		this.startAuto = function(){
			autoSlides = setInterval(function(){
				if(counter == totalSlides){
					slider.style.marginLeft = 0;
					counter = 1;
				}else{
					marginLeft = slider.style.marginLeft="-"+ slideWidth * counter +"px";
					counter ++;
				}

			}, slideTime);
		};

		this.stopAuto = function(){
			clearInterval(autoSlides);
		};
	};






	//init
	(function(instance){
		//event binding
		next.onclick = instance.next;
		prev.onclick = instance.prev;
		container.onmouseover = instance.stopAuto;
		container.onmouseout = instance.startAuto;
		window.onload = instance.startAuto;
	})(this);
};

var slider1 = new Slider({
	slideTime: 1000,
	autoSlide: true,
	pagination: true,
	container: document.getElementById("slider")
});

var slider2 = new Slider({
	slideTime: 1000,
	autoSlide: true,
	pagination: false,
	container: document.getElementById("slider1")
});
