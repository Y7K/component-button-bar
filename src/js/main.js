import Vue from 'vue';

import _ButtonBar from './components/ButtonBar';

export default {
    registerGlobally() {
        Vue.component('button-bar', _ButtonBar);
    },
};

export const ButtonBar = _ButtonBar;
