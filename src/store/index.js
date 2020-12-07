import Vue from 'vue';
import Vuex from 'vuex';
import context from './context';
import networkConnector from './networkConnector';
import room from './room.ts';
import media from './media.ts';
import account from './account.ts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { networkConnector, context, media, room, account }
});
