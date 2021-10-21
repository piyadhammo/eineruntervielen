export function Spiral(p5) {
    let a = 0;
    let b = 10;
    let points = [];

    p5.setup = () => {
        let canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
        canvas.position(0, 0);
        canvas.style("z-index", "-1");
    };

    p5.draw = () => {
        p5.randomSeed(1);
        let T = 400;
        let randX = p5.map(p5.mouseX, 0, p5.windowWidth, 0.5, 0);
        let randY = p5.map(p5.mouseY, 0, p5.windowHeight, 0.5, 0);
        p5.background(20);
        p5.translate((p5.windowWidth * 3) / 4, (p5.windowHeight * 3) / 4);
        for (let t = 0; t < T; t++) {
            let i = t * 0.3;
            p5.append(
                points,
                p5.createVector(
                    (a + b * i) * p5.cos(i + p5.random(0, randX)),
                    (a + b * i) * p5.sin(i + p5.random(0, randY))
                )
            );
        }
        p5.noFill();
        p5.strokeWeight(1);
        p5.stroke(27);
        p5.beginShape();
        for (let j = 0; j < T; j++) {
            p5.vertex(points[j].x, points[j].y);
        }
        p5.endShape();
        points = [];
    };
}