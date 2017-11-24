import { createStore, applyMiddleware } from 'redux';

export default function configureStore(initialState) {
    /* eslint-disable no-underscore-dangle */
    return createStore(
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    /* eslint-enable */
}
