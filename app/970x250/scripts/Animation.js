var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var txt1 = document.getElementById("txt1");
	var txt2 = document.getElementById("txt2");
	var cta = document.getElementById("cta");
	var buttonExit = document.getElementById('button-exit');

	var t = TweenMax;
	var tl = new TimelineMax();



// --------------------------------------------------------------------------------------
// set default properties
function initialize() {
// DO NOT EDIT: reveals banner once loaded
t.set(banner, {opacity:1});

buttonExit.addEventListener('mouseover', function () {
            t.to(cta, .4, {scale: 1.1, ease:Expo.easeOut});
        });

        buttonExit.addEventListener('mouseout', function () {
            t.to(cta, .2, {scale: 1, ease:Expo.easeIn});
        });
}

// --------------------------------------------------------------------------------------
// Starts the animation
function start() {

	tl.set(txt1, {display:"block"})
	.from(img, 1, {x:'+=970', ease: Expo.easeOut})
	.to(txt1, 1, {x:'-=970', ease: Expo.easeOut}, "-=1")
	.to("#blur1feGaussianBlur", .9, {attr:{stdDeviation:"0.1 0"}, ease:Expo.easeOut}, "-=1")

	.to(txt1, 1, {x:'-=970', ease: Expo.easeIn}, "+=1")
	.to("#blur1feGaussianBlur", .9, {attr:{stdDeviation:"10 0"}, ease:Expo.easeIn}, "-=.9")
	.set(txt1, {display:"none"})


	.set(txt2, {display:"block"})
	.to(txt2, 1, {x:'-=970', ease: Expo.easeOut})
	.to("#blur2feGaussianBlur", .9, {attr:{stdDeviation:"0.1 0"}, ease:Expo.easeOut}, "-=1")

	.to(txt2, 1, {x:'-=970', ease: Expo.easeIn}, "+=2")
	.to("#blur2feGaussianBlur", .9, {attr:{stdDeviation:"10 0"}, ease:Expo.easeIn}, "-=.9")
	.set(txt2, {display:"none"})


	.set(txt3, {display:"block"})
	.to(txt3, 1, {x:'-=970', ease: Expo.easeOut})
	.to("#blur3feGaussianBlur", .9, {attr:{stdDeviation:"0.1 0"}, ease:Expo.easeOut}, "-=1")

	.to(cta, .5, {opacity:1}, "-=.25")
	.from(cta_txt, 1, {x:"-=970", ease:Expo.easeOut}, "-=.25")

	.to(cta, .4, {scale: 1.1, ease:Expo.easeOut})
	.to(cta, .2, {scale: 1, ease:Expo.easeIn});

}

// --------------------------------------------------------------------------------------
// Stops the animation
function stop() {
	console.log("stopping animation");
}

// --------------------------------------------------------------------------------------
// Publicly accessible methods and properties
return {
	initialize:initialize,
	start:start,
	stop:stop
}

})();
