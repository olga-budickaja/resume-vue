export const educationModule = {
    state: () => ({
        educations: [
            {
                id: 'hrhdjrj',
                title: 'My skills',
                icon: 'star',
                description: [
                    {id: 'ydtj', text: 'React, Redux, Vue, Vue-CLI, Vuex, JavaScript (ES5,6), HTML5 and CSS3 (Bootstrap, CSS Grid, Flexbox Css), Gulp4, Webpack, SASS, SCSS, LESS, Pug, Nodes, CMS OpenCart, SQL'}
                ]
            },
            {
                id: 'jndjdykmd',
                title: 'My education',
                icon: 'school',
                description: [
                    {id: 'jytyj', subtitle: 'CyberBionic Systematics - 2022', text: 'courses, JavaScript Developer + React'},
                    {id: 'jtyd', subtitle: 'IT company Lemon School - 2020', text: 'SEO courses, website promotion'},
                    {id: 'ghfgjdf', subtitle: 'National Technical University «Kharkiv Polytechnic Institute» - 2003', text: 'in the specialty of Networks and Systems'},
                ]
            },
            {
                id: 'jdrysy',
                title: 'My experience',
                icon: 'laptop_chromebook',
                description: [
                    {id: 'ghfghh', subtitle: '8 Months at a small user management company - 2022', text: 'We were developing an application and realm for users based on Vue 2 using Vuetify library with Keycloak integration'},
                    {id: 'fbgfdh', subtitle: 'IT company Lemon School - 2020', text: 'SEO courses, website promotion'},
                    {id: 'kfafuwg', subtitle: '2017 - 2022', text: 'I was the owner and part-time manager of a small women\'s clothing website that works on the OpenCart CMC. The site was completely written by myself. I used HTML Twig and XML module'},
                ]
            },
        ],

    }),
    namespaced: true
}