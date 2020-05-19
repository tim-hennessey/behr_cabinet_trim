var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var txt1Blur = document.getElementById("txt1Blur");
	var txt2Blur = document.getElementById("txt2Blur");
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
t.set([txt1Blur, txt2Blur], {x:20});

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

	

	tl
	.set(txt1, {display:"block"})
	.set(txt1Blur, {display:"block"})

	.from(img, 1, {x:'+=728', ease: Expo.easeOut})

	.to(txt1, 1, {x:'-=728', ease: Expo.easeOut}, "-=1")

	.to(txt1Blur, 1, {x:'-=728', ease: Expo.easeOut}, "-=1")
	.to(txt1Blur, .75, {opacity:0, ease: Expo.easeOut}, "-=.75")

	.to(txt1, 1, {x:'-=728', ease: Expo.easeIn}, "+=2")

	.to(txt1Blur, 1, {x:'-=728', ease: Expo.easeIn}, "-=1")
	.to(txt1Blur, .75, {opacity:1, ease: Expo.easeIn}, "-=.75")

	.set(txt1Blur, {display:"none"})


	.set(txt2, {display:"block"})
	.set(txt2Blur, {display:"block"})

	.to(txt2, 1, {x:'-=728', ease: Expo.easeOut})

	.to(txt2Blur, 1, {x:'-=728', ease: Expo.easeOut}, "-=1")
	.to(txt2Blur, .75, {opacity:0, ease: Expo.easeOut}, "-=.75")

	.to(cta, .5, {opacity:1}, "-=.25")
	.from(cta_txt, 1, {x:"-=728", ease:Expo.easeOut}, "-=.25")

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
