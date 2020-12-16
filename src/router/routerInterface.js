import ROUTER_CONSTANTS from './routerConstants';
import observerInterface from '../resources/interfaces/observerInterface';

const routerInterface = {
  subscribeObserver(callback) {
    observerInterface.subscribe(ROUTER_CONSTANTS.ACTION.HISTORY_PUSH, callback);
  },

  unsubscribeObserver() {
    observerInterface.unsubscribe(ROUTER_CONSTANTS.ACTION.HISTORY_PUSH);
  },
};

export default routerInterface;
