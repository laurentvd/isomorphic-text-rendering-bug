import {createWriteStream} from 'fs';
import {createCanvas, Image, registerFont} from 'canvas';
import Two from 'two.js';

import Renderer from './Renderer.js';

registerFont('public/fonts/BlueStone.woff', {family: 'BlueStone'});

const canvas = createCanvas(1024, 1024);
Two.Utils.shim(canvas, Image);

const renderer = new Renderer({canvas});
renderer.renderText();

const out = createWriteStream('output/wrapper.png');
const stream = canvas.createPNGStream();
stream.pipe(out);