import CanvasElement from './CanvasElement.js';

export default class Actor {
  constructor(args) {
    this.animations = [];
    this.element = new CanvasElement(args);
    this.draw = args.draw;
    return this;
  }

  addAnimation(animation) {
    this.animations.push(animation);
  }

  applyAnimations() {
    const result = this.animations
      .map(animation => animation.apply(this.element))
      .reduce((acc, current) => acc.plus(current),
        new CanvasElement()
      );

    this.animations = this.animations.filter(animation => !animation.isFinished());

    this.element = result.divide(this.animations.length);
  }

};
