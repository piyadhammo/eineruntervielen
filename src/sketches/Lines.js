export function Lines(p5) {

    let points = [];
    p5.setup = () => {
        let canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
        canvas.position(0, 0);
        canvas.style("z-index", "-1");
    };

    p5.draw = () => {
        p5.randomSeed(1);
        p5.background(20)
        for (let j = 0; j < 10; j++) {
            for (let i = 0; i < 200; i++) {
                let randx = p5.random(30);
                let randy = p5.random(40);
                p5.append(points, p5.createVector(i * 10 + randx, 80 * j / 2 + randy));
            }
            p5.noFill();
            p5.strokeWeight(1);
            p5.stroke(27);
            p5.beginShape();
            for (let j = 0; j < 100-1; j++) {
                p5.vertex(points[j].x, points[j].y);
            }
            p5.endShape();
            points = [];

        }
    };
}
