import { AppRegistry } from 'react-native';
import Snoopy from 'rn-snoopy';
import filter from 'rn-snoopy/stream/filter';
import EventEmitter from 'react-native/Libraries/EventEmitter/EventEmitter';

import App from './src/App';

// GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

const emitter = new EventEmitter();

const events = Snoopy.stream(emitter);

filter({ type: 0 }, true)(events).subscribe();
// filter({ type: 1 }, true)(events).subscribe();
// filter({ method: 'createView' }, true)(events).subscribe();
// filter({ method: 'updateView' }, true)(events).subscribe();


AppRegistry.registerComponent('manager', () => App);
