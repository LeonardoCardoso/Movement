Movement
==========================

Developed by <a href='https://github.com/LeonardoCardoso' target='_blank'>@LeonardoCardoso</a>. 

## What is it?

A funny way to interact with the mouse. Good for Team showcase.

![Movement](http://i.imgur.com/YgCWvfU.gif)


## How to added to your project

1 &bull; Scripts

```html
	<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>

	<script src='js/movement.js' ></script>
	
```

2 &bull; Configuration

Just create your own <b>img tag</b> (or multiple <b>img tags</b>) with width and height specified whether inline or in css and bind it to jQuery like this:

    <img id="IMG ID" style="width: 200px; height: 200px;">

```html
	<script>
		$(document).ready(function() {
			$('IMG ID').movement({
                center: "img/center.jpg",
                up: "img/up.jpg",
                upRight: "img/upRight.jpg",
                right: "img/right.jpg",
                downRight: "img/downRight.jpg",
                down: "img/down.jpg",
                downLeft: "img/downLeft.jpg",
                left: "img/left.jpg",
                upLeft: "img/upLeft.jpg"
            });
		});
	</script>
```
<b>Note 1</b>: All values are required or it won't work as you expect to.


## Parameters

|     option    |    default value    | possible values |
|:-------------:|:-------------------:|:---------------:|
|     center    |          img/center.jpg           |   any string   |
|     up        |          img/up.jpg               |   any string   |
|     upRight   |          img/upRight.jpg          |   any string   |
|     right     |          img/right.jpg            |   any string   |
|     downRight |          img/downRight.jpg        |   any string   |
|     down      |          img/down.jpg             |   any string   |
|     downLeft  |          img/downLeft.jpg         |   any string   |
|     upLeft    |          img/upLeft.jpg           |   any string   |



Contact
=================================
Contact me either by Twitter [@leocardz](https://twitter.com/leocardz) or emailing me to [contact@leocardz.com](mailto:contact@leocardz.com).


License
=================================

    Copyright 2015 Leonardo Cardoso

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
