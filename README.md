Four Shadows
============
###### Design Meets Code.

An approach to replace conventional 5 o'clock shadow for iconography with intelliegent time-aware algorithm driven shadows using simple CSS sprites. The direction of shadow changes according to the time of the day and based on the direction of the 'hour hand' of an analog clock. This results in natural and enriched user experience on the web. 


![Screenshot](http://i.imgur.com/2YftWVu.gif)

Setup
============
######1. Include jQuery and ```fourshadows.js``` into your html file.
######2. Place as many icons you need in your HTML with _filename_ in ```data-icon``` attribute:

```HTML
	<div class="fs-icon-l fs-cast" data-icon="filename.png"></div>
```

######3. Using sample sprite image, create new ones. Ensure the direction of shadows cast as per the sample and to be placed in same order.  

######4. Point to the directory where image assets are stored in ```fourshadows.js``` settings.

######5. Include this in your CSS file:
```CSS
	.fs-icon-l {width: 512px; height: 512px;}
	.fs-icon-m {width: 256px; height: 256px;}
	.fs-icon-s {width: 128px; height: 128px;}
	.fs-icon-xs {width: 64px; height: 64px;}
```

Customizations.
===================
###### Change settings as per requirement in ```fourshadows.js```.

```JS
	fourShadows.settings = {
		dimension	: 512, 
		defaultTime	: 5, 
		$el			: $('div.fs-cast'), 
		iconsPath	: 'icons/' 
	}
```

###### Icon sizes.
Use the class accordingly in the markup:

 -  ```.fs-icon-l``` 	- 512 x 512 
 -  ```.fs-icon-m```	- 256 x 256 
 -  ```.fs-icon-s```	- 128 x 128
 -  ```.fs-icon-xs```	- 64 x 64

These dimensions can be altered any time. But it would also require you to change properties in CSS for corresponding classes.

Performance.
===================
The script is written with performance in mind. And it weighs < 2 KB, under 30 lines excluding comments. I recommend using compressed version for your production site.

Demo
===================
http://gigacore.github.io/fs/demo/

License
===================
The MIT License (MIT)

Copyright (c) 2014 Santhosh Sundar
