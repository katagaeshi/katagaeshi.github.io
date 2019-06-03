export default class Animation {
  constructor(func, duration = Infinity) {
    this.duration = duration;
    this.func = func;
  }

  apply(element) {
    if (this.duration > 0) {
      --this.duration;
      return this.func(element);
    }

    return null;
  }

  isFinished() {
    return this.duration <= 0;
  }
}
