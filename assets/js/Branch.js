/*
 *  		 Made by Adam Aharony
 *           All rights reserved
 */


class Branch {
	constructor(start, finish) {
		this.start = start;
		this.finish = finish;

		this.done = false;
	}


	branchRight(angle) {
		const dir = p5.Vector.sub(this.finish, this.start);
		dir.rotate(angle);
		dir.mult(0.67);
		const endpoint = p5.Vector.add(this.finish, dir);
		const rightBranch = new Branch(this.finish, endpoint);

		return rightBranch;
	}

	branchLeft(angle) {
		const dir = p5.Vector.sub(this.finish, this.start);
		dir.rotate(-angle);
		dir.mult(0.67);
		const endpoint = p5.Vector.add(this.finish, dir);
		const leftBranch = new Branch(this.finish, endpoint);

		return leftBranch;
	}


	render() {
		stroke(255, 56, 96);
		line(this.start.x, this.start.y, this.finish.x, this.finish.y);
	}

	wind() {
		this.finish.x += random(-0.2, 0.2);
	}
}
