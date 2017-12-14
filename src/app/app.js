import 'babel-polyfill';
/**
 * https://github.com/Keyamoon/svgxuse
 * If you do not use SVG <use xlink:href="…"> elements, remove svgxuse module
 */
import 'svgxuse';
import init from './init';
// import factory from './factory';
import { render, renderFactory } from './render';
import configureStore from './store/configureStore';
import cookieLaw from './components/cookie-law';
// import suffix from './components/suffix';
import Timer from './components/Timer';
import PlusOne from './components/plus-one/PlusOne';
import reverse from './components/reverse';
import objects from './components/objects';

const app = (config) => {
    init(cookieLaw, document.getElementById('cookie-law'));
    // init(suffix, document.querySelector('.js-suffix'));
    init(document.getElementById('objects'));
    init(document.getElementById('reverse'));

    const store = configureStore(config);
    render(Timer, document.getElementById('timer'), { from: 100 });
    renderFactory(PlusOne, document.querySelectorAll('.plus-one'), {}, store);
};

app(window.config);
