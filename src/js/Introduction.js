const SIDES = {
    TOP: 0,
    RIGHT: 1,
    BOTTOM: 2,
    LEFT: 3,
};

const canvas = document.getElementById('introduction');
const ctx = canvas.getContext('2d');
const CENTER = {
  x: canvas.width / 2,
  y: canvas.height / 2,
};

const getRandomCoordinate = () => (Math.random() * 2) - 1;
const getRandomVector = () => {
  return {
    x: getRandomCoordinate(),
    y: getRandomCoordinate(),
  };
};

const MAX_STAR_SIZE = 5;
const sqrt2 = Math.sqrt(2);

class Actor {
  constructor() {
    this.current = Object.assign({}, CENTER, { size: 0 });
    this.vector = getRandomVector();
    const speed = Math.sqrt(this.vector.x ** 2 + this.vector.y ** 2) / sqrt2;
    this.endSize = speed * MAX_STAR_SIZE;
    this.sizeIncreaseSpeed = this.endSize / 1000;
  }

  makeStep() {
    this.current.x += this.vector.x;
    this.current.y += this.vector.y;
    this.current.size += this.sizeIncreaseSpeed;
  }

  isFinished() {
    return this.current.size > this.endSize;
  }

};

const MAX_ACTORS = 1000;
let actors = [new Actor()];

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < actors.length; ++i) {
        const actor = actors[i];
        actor.makeStep();

        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(
            actor.current.x,
            actor.current.y,
            actor.current.size,
            0,
            2 * Math.PI
        );
        ctx.fill();
    }

    actors = actors.filter(actor => !actor.isFinished());

    if (Math.random() * 100 < 10) {
        const addActorsNum = Math.random() * 10;
        if (actors.length < MAX_ACTORS) {
            for (let i = 0; i < addActorsNum; ++i) {
                actors.push(new Actor());
            }
        }
    }

    window.requestAnimationFrame(draw);
}

export default draw;
