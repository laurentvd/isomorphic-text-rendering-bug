import Renderer from './Renderer.js';

const canvas = document.querySelector('#canvas');
const renderer = new Renderer({canvas});

const font = new FontFace('BlueStone', 'url(fonts/BlueStone.woff)');
document.fonts.add(font);

font.load().then(() => {
    renderer.renderText();
})