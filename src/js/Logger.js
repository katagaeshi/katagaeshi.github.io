const info = (message) => {
  console.log('info: ', message);
};

const error = (message) => {
  console.log('error: ', message);
};

const nop = () => {};

class Logger {

  constructor() {}
  
  enable(isEnabled) {
    if (isEnabled) {
      this.info = info;
      this.error = error;
      return;
    }

    this.info = nop;
    this.error = nop;
  }
  
  info(message) {
    console.log('info: ', message);
  }
  
  error(message) {
    console.log('error: ', message);
  }
};

let entity;

export default function createLogger() {
  if (!entity) {
    entity = new Logger();
  }

  return entity;
}
