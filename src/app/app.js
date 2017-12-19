import 'babel-polyfill';
/**
 * https://github.com/Keyamoon/svgxuse
 * If you do not use SVG <use xlink:href="…"> elements, remove svgxuse module
 */
import 'svgxuse';
import init from './init';
import { render, renderFactory } from './render';
import configureStore from './store/configureStore';
import objects from './components/objects';
import drums from './components/drums';
import clock from './components/clock';

const app = (config) => {
    init(document.getElementById('objects'));
    init(document.querySelector('.drums'));
    init(document.querySelector('.clock'));

    const store = configureStore(config);
};

app(window.config);
