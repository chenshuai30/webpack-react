// module.exports = {
//     plugins: {
//         "autoprefixer": {}
//     }
// }
module.exports = {
    plugins: [
        require('cssnano')({
             discardComments: {removeAll: true},
             // 避免 cssnano 重新计算 z-index
             safe: true
             }), 
        require('autoprefixer')({browsers: [ 'last 2 version', '> 1%', 'not ie < 8']})
    ]
}