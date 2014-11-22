Four Shadows
============

An approach to replace conventional 5 o'clock shadow for iconography with intelliegent time-aware shadow. The direction of shadow changes based on the direction of the 'hour hand' of an analog clock. This gives user an enriched and nature experience. 

Setup
============
######1. Include jQuery and ```fourshadows.js``` into your html file.
######2. Place as many icons you need in your HTML using:

```HTML
	<div class="fs-icon-l fs-cast" data-icon="filename.png"></div>
```

######3. Include this in your CSS file:

```CSS
	.fs-icon-l {width: 512px; height: 512px;}
	.fs-icon-m {width: 256px; height: 256px;}
	.fs-icon-s {width: 128px; height: 128px;}
	.fs-icon-xs {width: 64px; height: 64px;}
```

Customizations
===================
###### Change settings as per requirement in ```fourshadows.js```.

```JS
	fourShadows.settings = {
		dimension	: 512, 	// in px. Height and width should be the same.
		defaultTime	: 5, 	// in 24Hr. Casts shadow to standard 5 o'clock if something goes wrong.
		$el			: $('div.fs-cast'), // element containing icons. Must be a class.
		iconsPath	: 'icons/' // location where sprite of icons stored.
	}
```

###### Icon size.

Use the class accordingly in the markup:

```.fs-icon-l``` 	: 512 x 512
```.fs-icon-m```	: 256 x 256
```.fs-icon-s```	: 128 x 128
```.fs-icon-xs```	: 64 x 64

These dimensions can be altered any time. But it would also require you to change properties in CSS for corresponding classes.

Demo
===================
http://gigacore.github.io/fs/demo/

License
===================
Four Shadows is Licensed under MIT.

Author
===================
Santhosh S
