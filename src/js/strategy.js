import { validateParamFunction } from './error-helpers';

const Strategy = {};

Object.defineProperty(Strategy, 'map', { value: new Map() });

Object.defineProperty(Strategy, 'registerStrategy', {
  value: function registerStrategy(fn) {
    if (validateParamFunction(fn) && fn.name) {
      this.map.set(fn.name, fn);
      return Object.defineProperty(Strategy, fn.name, {
        value: fn,
        writable: true,
        configurable: false,
      });
    }

    return false;
  },
});

export default Strategy;
