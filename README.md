# mkkVideo - Angularjs 1.x Video Player

 mkkVideo is Video Player for AngularJS Webapp

## Installation

Add a `<link>` to your `index.html`:

```html
 <link href="assets/mkk-video/mkk-video.css" rel="stylesheet" />
```


Add a `<script>` to your `index.html`:

```html
 <script src="/assets/mkk-video/mkk-video.js"></script>
```

And add the 'mkkVideo' module as dependency.

```js
 angular.module('myApp', ['mkkVideo']);
```
## Directives

### mkk-video

A `mkk-video` directive will paste the video player template with video controls

#### Example

```html
 <mkk-video vdosrc="assets/video/sample.mp4" control="true"> </mkk-video>
```
### vdosrc

A `vdosrc` give the internal or external video src here.

```html
 vdosrc="assets/video/sample.mp4"
```
### control

A `control` is Boolean variable your can set false if you need to hide controls

```html
 control="false"
```

## Development

* Install [font awesome] for video icons (https://fontawesome.com/v4.7.0/icons/)
