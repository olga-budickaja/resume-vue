export default {
        mounted(el, binding) {
        let f = function (evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f)
            }
        }
        window.addEventListener('scroll', f)
    }
}

// }
// directive('scroll', {
//     inserted: function (el, binding) {
//         let f = function (evt) {
//             if (binding.value(evt, el)) {
//                 window.removeEventListener('scroll', f)
//             }
//         }
//         window.addEventListener('scroll', f)
//     }
// })