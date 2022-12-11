export const CountersModule = {
    state: () => ({
        counters: [
            { id: 1, name: 'HTML5', percent: '100'},
            { id: 2, name: 'CSS3', percent: '100'},
            { id: 1, name: 'JavaScript', percent: '97'},
            { id: 1, name: 'React & Redux', percent: '85'},
            { id: 1, name: 'Vue & Vuex', percent: '95'},
        ],

    }),
    namespaced: true
}