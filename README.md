# Spotify Windowed Mode

### A script that sets Spotify's videos to windowed mode.

#### Instructions

When you're watching a video in Spotify, inject the code in your browser's console.

1. Open your browser's console.

- Chrome on Mac: `Option + ⌘ + J`
- Chrome on Windows: `Shift + CTRL + J`
- Firefox on Mac: `Option + ⌘ + K`
- Firefox on Windows: `Cmd + Shift + J`
- Safari: Activate the option "Show develop menu in menu bar" in your Safari Preferences panel. Then `Option + ⌘ + C`

2. Paste the code in the browser's console and press Enter.

```js
let container = document.querySelector(".VideoPlayer--landscape");
let innerVideo = document.querySelector(".VideoPlayer--landscape video");
let fix =
	"width:100vw;position:absolute;top:0;left:0;z-index:10;background-color:rgba(0,0,0,0.9)";
container.style.cssText = innerVideo.style.cssText = fix;
```
