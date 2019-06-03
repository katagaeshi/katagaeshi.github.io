import Actor from './Actor.js';
import CanvasElement from './CanvasElement.js';
import Animation from './Animation.js';

const canvas = document.getElementById('introduction');
const ctx = canvas.getContext('2d');
const CANVAS_CENTER = {
  x: canvas.width / 2,
  y: canvas.height / 2,
};

const MAX_ACTORS = 1000;

const getRandomCoordinate = () => (Math.random() * 2) - 1;

function createStarMovingFromCenter(startingPoint) {
    const getRandomVector = () => ({
        x: getRandomCoordinate(),
        y: getRandomCoordinate(),
    });

    function drawElement() {
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(
            this.element.x,
            this.element.y,
            this.element.size,
            0,
            2 * Math.PI
        );
        ctx.fill();
    }

    const star = new Actor({
        x: startingPoint.x,
        y: startingPoint.y,
        size: 1,
        draw: drawElement,
    });

    const vector = getRandomVector();

    let boost = 1;

    star.addAnimation(
        new Animation((element) => {
            boost *= 1.05;
            return new CanvasElement({
                x: element.x + vector.x * boost,
                y: element.y + vector.y * boost,
                size: element.size,
            });
        })
    );

    return star;
}

let actors = [];

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < actors.length; ++i) {
        const actor = actors[i];
        actor.applyAnimations();
        actor.draw();
    }

    actors = actors.filter((actor) => {
        if (actor.element.x < 0)
            return false;

        if (actor.element.y < 0)
            return false;

        if (actor.element.x > canvas.width)
            return false;

        if (actor.element.y > canvas.height)
            return false;

        return true;
    });

    if (actors.length < MAX_ACTORS) {
        const addActorsNum = Math.random() * 10;
        for (let i = 0; i < addActorsNum; ++i) {
            actors.push(createStarMovingFromCenter(CANVAS_CENTER));
        }
    }

    window.requestAnimationFrame(draw);
}

export default draw;
