window.onload = function(){
	
	//顶部导航、返回顶部部分
	let top = document.querySelector(".goTop .feedback");
	let index = document.querySelector(".daoh");
	let back = document.querySelector(".feedback");
	let daoha = document.querySelector(".daoh-box");
	// console.log(back);
	window.onscroll = function(){
		let bodytop = document.body.scrollTop||document.documentElement.scrollTop;
		if(bodytop>=150){
			top.style.display = "block";
		}
		if(bodytop<150){
			top.style.display = "none";
		}
		if(bodytop>=110){
			daoha.classList.add("daoa");
		}
		if(bodytop<110){
			daoha.classList.remove("daoa");
		}
		back.onclick = function(){
			animate(document.documentElement,{scrollTop: 0});
			animate(document.body,{scrollTop: 0});
		}
	}


	// 右侧新闻轮播图
	let banner = document.querySelector(".new");
	let imgs = document.querySelectorAll(".new .imgs li");
	let lefts = document.querySelector(".left");
	let rights = document.querySelector(".right");
	let dots = document.querySelectorAll(".dots li");
	let w = parseInt(getComputedStyle(banner,null).width);
	
	
	let t = setInterval(move,2000);
	imgs[0].style.left = 0;
	dots[0].classList.add("active");
	let now = 0;
	let next = 0;
	function move(){
		next++;
		if(next==imgs.length){
			next = 0;
		}
		imgs[now].style.left = 0;
		imgs[next].style.left = w + "px";
		animate(imgs[now],{left: -w},function(){
			dots[now].classList.remove("active");
		})
		animate(imgs[next],{left: 0},function(){
			for(let i=0;i<dots.length;i++){
				dots[i].classList.remove("active");
			}
			dots[next].classList.add("active");
		})
		
		now = next;
	}

	for(let i=0;i<imgs.length;i++){
		dots[i].onmouseover = function(){
			for(let j=0;j<imgs.length;j++){
				imgs[j].style.left = -w + "px";
				dots[j].classList.remove("active");
			}
			imgs[i].style.left = 0;
			dots[i].classList.add("active");
			clearInterval(t);
		}
		dots[i].onmouseout = function(){
			t = setInterval(move,2000);
		}
	}
	banner.onmouseover = function(){
		clearInterval(t);
	}
	banner.onmouseout = function(){
		t = setInterval(move,2000);
	}
	rights.onclick = function(){
		move();
	}
	lefts.onclick = function(){
		next--;
		if(next==-1){
			next = imgs.length-1;
		}
		imgs[now].style.left = 0;
		imgs[next].style.left = -w + "px";
		animate(imgs[now],{left: w},function(){
			dots[now].classList.remove("active");
		})
		animate(imgs[next],{left: 0},function(){
			for(let i=0;i<dots.length;i++){
				dots[i].classList.remove("active");
			}
			dots[next].classList.add("active");
		})
		now = next;
	}
}