export function Stars(p5) {

    p5.setup = () => {
        let canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
        canvas.position(0, 0);
        canvas.style("z-index", "-1");
    };

    p5.draw = () => {
        p5.background(20);
    };
}

