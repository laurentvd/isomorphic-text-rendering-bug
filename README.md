# Two.js custom font rendering issue

To reproduce the issue:

- `npm install`
- `npm run node-canvas` (writes to `output/canvas.png`)
- `npm run start` (runs Vite)
- Open browser at the URL Vite generates. The default is `http://127.0.0.1:5173/`

I expect the two canvasses to look the same, but the font size is inconsistently rendered. 