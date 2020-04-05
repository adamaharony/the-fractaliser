/*
 *  		 Made by Adam Aharony
 *           All rights reserved
 */


// Global variables:
let count = 0;
let tree = [];
let leaves = [];
let angle;
let branchangle;
const len = randomInt(100, 200);
let per;

const wind = Math.random();

document.title = "Adam's Fractaliser - 3000!";


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function setup() {
    const angles = [PI / 4.5, PI / 3, PI / 6, PI / 8, PI / 6.5, PI / 7];
    angle = angles[Math.floor(Math.random() * angles.length)];

    const treeCanvas = createCanvas(600, 600);
    treeCanvas.parent("fractal-tree");
    const startTrunk = createVector(width / 2, height);
    const finishTrunk = createVector(width / 2, height - len);
    const trunk = new Branch(startTrunk, finishTrunk);

    tree[0] = trunk;
}


function mousePressed() {
    for (let i = tree.length - 1; i >= 0; i--) {
        if (!tree[i].finished) {
            tree.push(tree[i].branchRight(angle));
            tree.push(tree[i].branchLeft(angle));
        }
        tree[i].done = true;
    }
    count++;

	per = ((2 * len) * (0.67 ^ count - 1)) / 0.67 - 1;
	branchangle = Math.round(angle * 1000) / 1000;

    if (count <= 7) {
        document.getElementById("treeperimeter").innerHTML = `<b>${parseInt(per)}</b> Pixels.`;
    }
	document.getElementById("branchangle").innerHTML = `<b>${branchangle * 2}</b> Radians. Approx. ${2 * Math.round(branchangle * (180 / PI))}°.`;
    document.getElementById("branchlen").innerHTML = `<b>${len}</b> Pixels.`;



    if (count == 7) {
        for (let i = 0; i < tree.length; i++) {
            if (!tree[i].finished) {
                let leaf = tree[i].finish.copy();
                leaves.push(leaf);
            }
        }
        let endper = per;
        let end = tree;
    }
    if (count > 7) {
		tree = [];
		tree = end;
        // tree.forEach(branch => {
        //     branch.render();
        // });
        document.getElementById("treeperimeter").innerHTML = `<b>${parseInt(endper)}</b> Pixels.`;
    }
}


function draw() {
    background(44,47,51);

    tree.forEach(branch => {
        branch.render();
		// if (wind <= 0.2) {
        	// branch.wind();
        // }
    });

    for (let i = 0; i < leaves.length; i++) {
        fill(114, 137, 218, 100);
        noStroke();
        ellipse(leaves[i].x, leaves[i].y, 8, 8);
        leaves[i].y += randomInt(5, 10);
    }
}
