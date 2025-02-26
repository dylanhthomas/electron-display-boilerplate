# electron-display-boilerplate

This is a boilerplate to create a single-file electron application to display a website/webapp at a fixed size/aspect-ratio (generally for a trade show display or something similar).

The code in example site is for a Full-HD (1920x1080) website.

All locations with dimensions are called out.

### Basic Setup

Update Metadata

Build your website in the `./assets` folder.

Include the `renderer.js` at the end of every page: `<script src="../renderer.js"></script>`





### supports swiping




## How to Configure


### Electron Configuration

`package.json`

Update metadata:
```
1.  {
2.   "name": "BOILERPLATE",
3.   "version": "0.0.0",
4.   "description": "BOILERPLATE Interactive Display",
5.   "main": "main.js",
6.   "author": "",
7.   "license": "",
```

`main.js`

Update with homepage file path.
```
29.  mainWindow.loadFile('./assets/index.html');
```


### Admin Menu Popup and Activation.

Integrate the contents of `menu.html` into your code base. It has no dependencies or additional files.

You can break it up or just paste the whole thing under your `<body>` tag.

By default, this will put an invisible 50x50 pixel activation area in the upper left corner.


### Connecting Your Site to Electron

Include the `renderer.js` at the end of every page:

`<script src="../renderer.js"></script>`

### Auto-Zoom

This will allow the site to maintain aspect ratio no matter the size of the window.

Include the following code at the end of every page.

Change the numbers in `zoomyWidth` and `zoomyHeight` to match your desired native resolution, and make sure this matches your CSS dimensions for `html` and `body`.

```
<script>
    // Resize content to fill window while maintaining aspect ratio
    function zoomFit() {
        let zoomyWidth = window.innerWidth / 1920;
        let zoomyHeight = window.innerHeight / 1080;
        let zoomy = Math.min(zoomyWidth, zoomyHeight);
        const elem = document.getElementById("html");
        if (zoomy != 1) {
            elem.style.zoom = zoomy;
            elem.style.margin = "auto";
        }
    }
    window.addEventListener("load", zoomFit);
    window.addEventListener("resize", zoomFit);
</script>
```
```
html {
  position: relative;
  width: 1920px;
  height: 1080px;
  overflow: hidden;
}

body {
  width: 1920px;
  max-width: 1920px;
  max-height: 1080px;
  overflow: hidden;
}
```



### External Library Errors

If you use external js files, you'll need to wrap them in a declaration so Electron knows how to handle them.

Before:
```
<script src="../shared/js/jquery.min.js"></script>
<script src="../shared/js/jquery.tap.js"></script>
<script src="../shared/js/jquery.touchSwipe.min.js"></script>
```

After:
```
<script>if (typeof module === 'object') {window.module = module; module = undefined;}</script>

<script src="../shared/js/jquery.min.js"></script>
<script src="../shared/js/jquery.tap.js"></script>
<script src="../shared/js/jquery.touchSwipe.min.js"></script>

<script src="../shared/js/jquery.idleTimer.min.js"></script><script>if (window.module) module = window.module;
```