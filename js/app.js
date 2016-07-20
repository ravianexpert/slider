"use strict";
function Slider(option){
	var container = option.container,
		pagination = option.pagination,
		slider = container.querySelector("ul"),
		totalSlides = container.querySelectorAll("ul li").length,
		slideWith = container.querySelector("ul li").clientWidth,
		next = container.querySelector(".next"),
		prev = container.querySelector(".prev"),
		counter = 1,
		marginLeft = "";
		
	slider.style.width= totalSlides * slideWith + "px";

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
				marginLeft = slider.style.marginLeft="-"+ slideWith * counter +"px";
				counter ++;
			}
		}

		if(e.target ==  prev){
			if(counter == 1){
				marginLeft = slider.style.marginLeft="-" + ((slideWith * totalSlides) - slideWith) + "px";
				counter = totalSlides;
			}else{
				marginLeft = slider.style.marginLeft=(parseInt(marginLeft) + slideWith) + "px";
				counter --;
			}
		}
	};

	if(pagination == true){
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
		marginLeft = slider.style.marginLeft = -(parseInt(num) * slideWith) + "px";
		counter = parseInt(num) + 1;
	};


	//init
	(function(instance){
		//event binding
		next.onclick = instance.next;
		prev.onclick = instance.prev;
	})(this);
};

var slider1 = new Slider({
	pagination: true,
	container: document.getElementById("slider")
});
