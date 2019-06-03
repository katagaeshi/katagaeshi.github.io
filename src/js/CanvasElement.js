export default class CanvasElement {
  constructor({
    x = 0,
    y = 0,
    size = 0,
  } = {}) {
    this.x = x;
    this.y = y;
    this.size = size;
    return this;
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  setSize(size) {
    this.size = size;
    return this;
  }

  plus(element) {
    this.x += element.x;
    this.y += element.y;
    this.size += element.size;
    return this;
  }

  divide(value) {
    this.x /= value;
    this.y /= value;
    this.size /= value;
    return this;
  }
}
