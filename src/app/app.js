import 'babel-polyfill';
/**
 * https://github.com/Keyamoon/svgxuse
 * If you do not use SVG <use xlink:href="…"> elements, remove svgxuse module
 */
import 'svgxuse';
import init from './init';
import { render, renderFactory } from './render';
import configureStore from './store/configureStore';
import drums from './components/drums';
import clock from './components/clock';
import gallery from './components/gallery';
import list from './components/list';
import listName from './components/listName';
import array from './components/array';
import objects from './components/objects';

const app = (config) => {
    init(document.getElementById('objects'));
    init(document.querySelector('.drums'));
    init(document.querySelector('.clock'));
    init(document.querySelector('.buttons'));
    init(document.querySelector('.clock'));
    init(document.querySelector('.array'));
    init(document.querySelector('.panels'));

    const store = configureStore(config);
};

app(window.config);
