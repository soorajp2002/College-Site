// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
//                                                                                                                // 
//                                  This Code Is Developed By Febeeh Parambatt                                    //	
//                       For More Details Visit https://github.com/febeeh/jQuery-YGSlider                         //
//                                                                                                                // 
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
// Main Class
var mainClass = {
	slider: ".slideme", // Enter here class name of slider ( Add this class name on each respective object classes)
	left_slide: ".left-slide", // Enter here class name of your left slide 
	right_slide: ".right-slide" // Enter here class name of your right slide
};
// Animation Class
var animateClass = {
	slide_to_left_slider: ".slide-to-left-slider",
	left_slide_speed: 600, // Left Slide Animation Speed (In Milliseconds)
	slide_to_right_slider: ".slide-to-right-slider",
	right_slide_speed: 600, // right Slide Animation Speed (In Milliseconds)
	slide_to_top_slider: ".slide-to-top-slider",
	top_slide_speed: 800, // Top Slide Animation Speed (In Milliseconds)
	slide_to_down_slider: ".slide-to-down-slider",
	down_slide_speed: 800, // Down Slide Animation Speed (In Milliseconds)
	fadeIn_slider: ".fadein-slider",
	fadein_speed: 1000, // FadeIn Animation Speed (In Milliseconds)
	fadeOut_slider: ".fadeout-slider",
	fadeout_speed: 1000, // FadeOut Animation Speed (In Milliseconds)
};

// Required Variable
var total_len = $(mainClass.slider).length;
var sliderprev = 0;
// Configuration
var config = {
	objPerSlide: 1, // Enter Here Total Number Object To Be Displayed In Each Slides
	autoSlide: true, // true - To Enable Auto Slide, false - To Disable Auto Slide
	autoSlide_delay: '8000', // Enter Auto Slide Delay In Millisecond
}
var total_slider = config.objPerSlide;
var slidercount = total_slider;
hideSlider(); // Hide All Slider
sliderAnimate(); // Animation Begin
for (var i = 0; i < total_slider; i++) {
	$(mainClass.slider).eq(i).show();
}
$(mainClass.right_slide).click(function () {
	rightAction(total_slider); // Right Button Action 
    autoSlideReset();
});
$(mainClass.left_slide).click(function () {
	leftAction(total_slider); // Left Button Action 
    autoSlideReset();
});


function rightAction(totalCount) {
	if (total_len <= slidercount) {
		try {
			for (var i = sliderprev; i < slidercount; i++) {
				$(mainClass.slider).eq(i).hide();
			}
			sliderprev = 0;
			slidercount = totalCount;
			for (var i = sliderprev; i < slidercount; i++) {
				$(mainClass.slider).eq(i).show();
			}
		} catch (err) { }

	} else {
		try {
			sliderprev = slidercount;
			slidercount += totalCount;
			for (var i = 0; i < totalCount; i++) {
				hideSlider(sliderprev - 1 - i);
			}
			for (var i = sliderprev; i < slidercount; i++) {
				$(mainClass.slider).eq(i).show();
			}
		} catch (error) { };
	}
	resetAnimation(); // Stop Previous Animation
	sliderAnimate(); // Animation Begin
}

function leftAction(totalCount) {
	if (slidercount <= totalCount) {
		try {
			for (var i = 0; i < totalCount; i++) {
				if ((slidercount - i) > total_len) {
					continue;
				}
				hideSlider(slidercount - 1 - i);
			}
			slidercount = total_len;
			var check_div = 2;
			if (totalCount == 1) {
				slidercount = total_len;
			} else {
				while ((slidercount % totalCount) != 0) {
					slidercount += 1;
				}
			}
			sliderprev = slidercount - totalCount;
			for (var i = sliderprev; i < slidercount; i++) {
				$(mainClass.slider).eq(i).show();
			}
		} catch (error) { };
	} else {
		try {
			for (var i = 0; i < totalCount; i++) {
				if ((slidercount - i) > total_len) {
					continue;
				}
				hideSlider(slidercount - 1 - i);
			}
			slidercount -= totalCount;
			sliderprev = sliderprev - totalCount;
			for (var i = sliderprev; i < slidercount; i++) {
				$(mainClass.slider).eq(i).show();
			}
		} catch (error) { };
	}
	resetAnimation(); // Stop Previous Animation
	sliderAnimate(); // Animation Begin
}
function hideSlider(i) {
	if (i == null) {
		$(mainClass.slider).hide();
	} else {
		$(mainClass.slider).eq(i).hide();

	}
}
function sliderAnimate() {
	// FadeIn Animation
	$(mainClass.slider + " " + animateClass.fadeIn_slider).each(function (i) {
		$(mainClass.slider + " " + animateClass.fadeIn_slider).eq(i).css({
			opacity: "0",
		});
		$(mainClass.slider + " " + animateClass.fadeIn_slider).eq(i).show();
		$(mainClass.slider + " " + animateClass.fadeIn_slider).eq(i).animate({
			opacity: "1",
		}, animateClass.fadein_speed);
	});
	// FadeOut Animation
	$(mainClass.slider + " " + animateClass.fadeOut_slider).each(function (i) {
		$(mainClass.slider + " " + animateClass.fadeOut_slider).eq(i).css({
			opacity: "1",
		});
		$(mainClass.slider + " " + animateClass.fadeOut_slider).eq(i).show();
		$(mainClass.slider + " " + animateClass.fadeOut_slider).eq(i).animate({
			opacity: "0",
		}, animateClass.fadeout_speed);
	});
	// Slide To Left Animation
	$(mainClass.slider + " " + animateClass.slide_to_left_slider).each(function (i) {
		$(mainClass.slider + " " + animateClass.slide_to_left_slider).eq(i).css({
			position: "relative",
			left: "30px",
			opacity: 0.9,
		});
		$(mainClass.slider + " " + animateClass.slide_to_left_slider).eq(i).show();
		$(mainClass.slider + " " + animateClass.slide_to_left_slider).eq(i).animate({
			left: "0px",
			opacity: 1,
		}, animateClass.left_slide_speed);
	});
	// Slide To Right Animation
	$(mainClass.slider + " " + animateClass.slide_to_right_slider).each(function (i) {
		$(mainClass.slider + " " + animateClass.slide_to_right_slider).eq(i).css({
			position: "relative",
			right: "30px",
			opacity: 0,
		});
		$(mainClass.slider + " " + animateClass.slide_to_right_slider).eq(i).show();
		$(mainClass.slider + " " + animateClass.slide_to_right_slider).eq(i).animate({
			right: "0px",
			opacity: 1,
		}, animateClass.right_slide_speed);
	});
	// Slide To Top Animation
	$(mainClass.slider + " " + animateClass.slide_to_top_slider).each(function (i) {
		$(mainClass.slider + " " + animateClass.slide_to_top_slider).eq(i).css({
			position: "relative",
			top: "40px"
		});
		$(mainClass.slider + " " + animateClass.slide_to_top_slider).eq(i).show();
		$(mainClass.slider + " " + animateClass.slide_to_top_slider).eq(i).animate({
			top: "0px"
		}, animateClass.top_slide_speed);
	});
	// Slide To Down Animation
	$(mainClass.slider + " " + animateClass.slide_to_down_slider).each(function (i) {
		$(mainClass.slider + " " + animateClass.slide_to_down_slider).eq(i).css({
			position: "relative",
			bottom: "40px"
		});
		$(mainClass.slider + " " + animateClass.slide_to_down_slider).eq(i).animate({
			opacity: "1",
			bottom: "0px"
		}, animateClass.down_slide_speed);

	});
}
function resetAnimation() {
	$(mainClass.slider + " " + animateClass.fadeIn_slider).each(function () {
		$(this).stop(); // Stop Animating
	});
	$(mainClass.slider + " " + animateClass.fadeOut_slider).each(function () {
		$(this).stop(); // Stop Animating
	});
	$(mainClass.slider + " " + animateClass.slide_to_left_slider).each(function () {
		$(this).stop(); // Stop Animating
	});
	$(mainClass.slider + " " + animateClass.slide_to_right_slider).each(function () {
		$(this).stop(); // Stop Animating
	});
	$(mainClass.slider + " " + animateClass.slide_to_top_slider).each(function () {
		$(this).stop(); // Stop Animating
	});
	$(mainClass.slider + " " + animateClass.slide_to_down_slider).each(function () {
		$(this).stop(); // Stop Animating
	});
}
if (config.autoSlide == true) {
	// console.log(config.autoSlide);
	var autoSlide = setInterval(function () {
		rightAction(total_slider);
	}, config.autoSlide_delay);
	// $(mainClass.slider).mouseover(function () {
	// 	clearInterval(autoSlide);
	// });
	// $(mainClass.slider).mouseout(function () {
	// 	autoSlide = setInterval(function () {
	// 		rightAction(total_slider);
	// 	}, config.autoSlide_delay);
	// });
}
function autoSlideReset(){
    clearInterval(autoSlide);
    autoSlide = setInterval(function () {
        rightAction(total_slider);
    }, config.autoSlide_delay);
}