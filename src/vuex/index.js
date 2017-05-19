import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		present: {

		}
	},
	mutations: {
		updatePresent(val){
			this.state.present = val
		}
	}
})