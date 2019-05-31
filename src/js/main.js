import createLogger from './Logger';
import draw from './Introduction.js';

const log = createLogger();
log.enable(true);
	
log.info('start');

window.onload = draw;
