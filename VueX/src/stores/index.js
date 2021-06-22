
// 基础
// export default {
//     state:{
//         count: 10
//     },
//     getters:{
//         addOne:state=>{
//             return state.count + 100 ;
//         }
//     },
//     mutations:{
//         increment(state) {
//             state.count++
//         },
//         mixTwo(state){
//             state.count--
//         }
//     },

    
//     actions:{
//         mixTwo(context){
//             context.commit("mixTwo")
//         }
//     }
// }

// Module

export default {
    modules:{
        a: moduleA,
        b: moduleB
    }
}