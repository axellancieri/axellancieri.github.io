Notes

on footer view when page loads and animations are about to complete or completed. I want to have mail - CV - linkedin  SVGs

(might want to check if gotta take care of that taking the user to another html file. Although it might be decent still
to do on contact us modal)Use 'animation-play-state: paused;' on infinite animations when offscreen or offview.

goign to do something like treeAllButTextSvg[3].style.animationPlayState = 'paused';

I'd like to like push main content to one side and make projects come from the other and the opposite direction for about me section

check on full animation if rocks break in go invisble when cicked as they are being animataed

If once everything is done the click on scrolls is not consistant. Might want to consider having like a transparent square on top of each scroll with the event listener on it.

check myappsjs line 126 note once finished project

--not something to do rn

- not happy about cv download approach. Works fine on firefox but on all other browsers just opens on a new tab.
- email tooltip and copy buttons work and behave fine although sometimes they dont perform as expected.

- change mouseover on scrolls for css transitions grabbing an element that tags the entire scroll
- and/or scrolls themselves. Not maatching simplistic approach of general site.










yellow banner ver

<!-- linear-gradient(to right, #5f5141, #fdd99b, #e6d6ba, #fdd99b, #5f5141) -->

/* style.css | http://127.0.0.1:5500/assets/css/style.css */

.pillar-scroll-get-in-touch-main {
  fill: #fdf6eb;
}

.pillar-scroll-projects-main {
  fill: #fdf6eb;
}

.pillar-scroll-projects-blooms {
  fill: #b5ffee;
}

.pillar-scroll-projects-all {
  fill: #fffaaa;
  stroke: #000;
}

.pillar-scroll-get-in-touch {
  --color-plants: #fdffbe;
}

.pillar-scroll-about-me {
  --color-plants: #fdffbe;
}

.pillar-holder-1 {
  --color-fill: #ffa400;
}

.pillar-holder {
  fill: #444;
  stroke: white;
  stroke-width: 10;
}

/* Element | http://127.0.0.1:5500/index.html */

#banner > path:nth-child(6) {
  fill: url(#h);
}

/* Element | http://127.0.0.1:5500/index.html */

#banner > path:nth-child(7) {
  fill: #e7d6b9;
}

/* Element | http://127.0.0.1:5500/index.html */

#banner > path:nth-child(8) {
  fill: #000;
}

/* Element | http://127.0.0.1:5500/index.html */

#banner > path:nth-child(9) {
  fill: #5e5634;
  fill-opacity: 1;
  stroke: black;
}

/* Element | http://127.0.0.1:5500/index.html */

#banner > path:nth-child(4) {
  fill: #000;
}

/* Element | http://127.0.0.1:5500/index.html */

#banner > path:nth-child(5) {
  fill: #5f5141;
  stroke: black;
}
