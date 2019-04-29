import Vue from 'vue';

import _ButtonBar from './components/ButtonBar';

export default {
    registerGlobally: function() {
        Vue.component('button-bar', _ButtonBar);
    },
};

export const ButtonBar = _ButtonBar;
