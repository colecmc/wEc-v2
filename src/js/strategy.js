import { validateParamFunction } from './error-helpers';

const Strategy = {};

Object.defineProperty(Strategy, 'map', { value: new Map() });

Object.defineProperty(Strategy, 'registerStrategy', {
  value: function registerStrategy(fnName, fn) {
    if (validateParamFunction(fn) && fnName) {
      this.map.set(fnName, fn);
      return Object.defineProperty(Strategy, fnName, {
        value: fn,
        writable: true,
        configurable: false,
      });
    }

    return false;
  },
});

Strategy.registerStrategies = (strats) => {
  Object.keys(strats).forEach((name) => {
    Strategy.registerStrategy(name, strats[name]);
  });
};

export default Strategy;
