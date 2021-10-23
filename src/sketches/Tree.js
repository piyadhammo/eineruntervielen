export function Tree(p5) {
    class Branch {
        constructor(begin, end) {
            this.begin = begin;
            this.end = end;
            this.branchedOff = false;
        }

        show = function () {
            p5.strokeWeight(2);
            p5.stroke(50);
            //p5.stroke(255,0,0);
            p5.line(this.begin.x, this.begin.y, this.end.x, this.end.y)
        };

        branchOff = function () {
            let dir = p5.createVector(this.end.x - this.begin.x, this.end.y - this.begin.y);
            dir.rotate(p5.random(-p5.PI / 4, p5.PI / 4));
            let newEnd = p5.createVector(this.end.x + dir.x, this.end.y + dir.y)
            return new Branch(this.end, newEnd);
        };
    }

    let tree = [];
    let pos = 0;

    p5.setup = () => {
        let canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
        canvas.position(0, 0);
        canvas.style("z-index", "-1");
        let a = p5.createVector(p5.windowWidth, p5.windowHeight / 2);
        let b = p5.createVector(p5.windowWidth - 50, p5.windowHeight / 2);
        tree[0] = new Branch(a, b);
        for (let i = 0; i < 200; i++) {
            let r = p5.random(2);
            for (let j = 0; j < r; j++) {
                if (!tree[i].branchedOff) {
                    tree.push((tree[i].branchOff()));
                }
            }
        }
    };

    p5.draw = () => {
        p5.background(20);
        let p = p5.map(p5.mouseX, 0, p5.windowWidth, tree.length, 0);
        for (let i = 0; i < p; i++) {
            tree[i].show();
        }
    };


    // p5.mousePressed = () => {
    //     if(tree.length < 1000){
    //         for (let i = tree.length-1; i >= 0; i--) {
    //             let r = p5.random(2);
    //             for (let j = 0; j < r; j++){
    //                 if (!tree[i].branchedOff){
    //                     tree.push(tree[i].branchOff());
    //                 }
    //             }
    //             tree[i].branchedOff = true;
    //         }
    //     }
    // };
}

