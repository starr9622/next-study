import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './modules/index';

const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true,
  });

const wrapper = createWrapper(makeStore, {
  debug: true,
});

export default wrapper;
