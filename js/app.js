function Slider(option){
	var container = option.container,
		slider = container.querySelector("ul"),
		totalSlides = container.querySelectorAll("ul li").length,
		slideWith = container.querySelector("ul li").clientWidth,
		next = container.querySelector(".next"),
		prev = container.querySelector(".prev");
		

		slider.style.width= totalSlides * slideWith + "px";

	this.next = function(next){
		doSlide(next);
	};

	this.prev = function(prev){
		doSlide(prev);
	};


	function doSlide(e){
		console.log(e.target);
		console.log(e);
		if(e.target ==  next){
			
			slider.style.marginLeft = -slideWith + "px";
			
		}

		/*if(e.target ==  prev){
			slider.style.marginLeft = (slideWith * slideCount) - slideWith + "px";
			slideCount --;
		}*/

		


	}














	//init
	(function(instance){

		//event binding
		next.onclick = instance.next;
		prev.onclick = instance.prev;

	})(this);

}

var slider1 = new Slider({
	container: document.querySelector(".slider")
});