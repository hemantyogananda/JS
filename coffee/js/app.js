// hide preloader
// all images scripts links have been loaded

//window event Listener

eventListeners();

function eventListeners(){
const ui=new UI()
window.addEventListener('load', function() {
	ui.hidePreloader();
})
// nav btn
document.querySelector('.navBtn').addEventListener('click',function(){
	ui.showNav();
})

// control the video
document.querySelector('.video-switch').addEventListener('click',function(){
	ui.videoControls();
})
}

function UI(){


}

UI.prototype.hidePreloader = function(){
	document.querySelector('.preloader').style.display="none";
}

UI.prototype.showNav = function(){
	document.querySelector('.nav').classList.toggle('nav-show')
}

UI.prototype.videoControls = function(){
	let btn = document.querySelector('.video-switch-btn');
	if(!btn.classList.contains('btnSlide')){
		btn.classList.add('btnSlide')
		document.querySelector('.video-item').pause();
	}
	else{
		btn.classList.remove('btnSlide')
		document.querySelector('.video-item').play();
	}
}
