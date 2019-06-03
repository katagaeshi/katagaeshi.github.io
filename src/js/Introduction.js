import Actor from './Actor.js';
import CanvasElement from './CanvasElement.js';
import Animation from './Animation.js';

const canvas = document.getElementById('introduction');
const ctx = canvas.getContext('2d');
const CENTER = {
  x: canvas.width / 2,
  y: canvas.height / 2,
};

const MAX_ACTORS = 1000;

function createStarMovingFromCenter() {
    const getRandomCoordinate = () => (Math.random() * 2) - 1;
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
        x: CENTER.x,
        y: CENTER.y,
        size: 1,
        draw: drawElement,
    });

    const vector = getRandomVector();
    star.addAnimation(
        new Animation((element) => new CanvasElement({
            x: element.x + vector.x,
            y: element.y + vector.y,
            size: element.size,
        }))
    );

    return star;
}

let actors = [createStarMovingFromCenter()];

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

    if (Math.random() * 100 < 10) {
        const addActorsNum = Math.random() * 10;
        if (actors.length < MAX_ACTORS) {
            for (let i = 0; i < addActorsNum; ++i) {
                actors.push(createStarMovingFromCenter());
            }
        }
    }

    window.requestAnimationFrame(draw);
}

export default draw;
