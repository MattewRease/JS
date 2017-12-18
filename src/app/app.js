import 'babel-polyfill';
/**
 * https://github.com/Keyamoon/svgxuse
 * If you do not use SVG <use xlink:href="…"> elements, remove svgxuse module
 */
import 'svgxuse';
import init from './init';
import { render, renderFactory } from './render';
import configureStore from './store/configureStore';
// import reverse from './components/reverse';
import objects from './components/objects';
// import drums from './components/drums';

const app = (config) => {
    init(document.getElementById('objects'));
    // render(document.getElementById('reverse'));
    // render(document.querySelector('.drums'));

    const store = configureStore(config);
};

app(window.config);
