import Two from "two.js";

function Renderer({canvas}) {
    const scene = new Two({
        type: Two.Types.canvas,
        width: 1024,
        height: 1024,
        domElement: canvas,

    });

    // Create a rectangle for size reference
    const rect = scene.makeRectangle(0, 0, 100, 100)
    rect.fill = '#ff00ff';
    rect.stroke = 'none';
    scene.render();

    this.renderText = function() {
        scene.makeText('This is a test', 512, 512, {
            family: 'BlueStone',
            size: 100,
            fill: '#000000',
        });

        scene.render();
    };
}

export default Renderer;