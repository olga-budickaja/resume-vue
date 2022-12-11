import { createStore } from 'vuex'
import {CountersModule} from "@/store/countersModule";
import {educationModule} from "@/store/educationModule";
import {sliderModule} from "@/store/sliderModule";


export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    CountersModule,
    educationModule,
    sliderModule
  }
})
