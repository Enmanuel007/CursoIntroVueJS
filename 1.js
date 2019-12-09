const app = new  Vue({
    el: '#app',
    data: {
        titulo:'Hola mundo con Vue',
        frutas: ['manzana', 'pera','plátano'],
        ropa: [
            {camisa: 'roja', cantidad: 10},
            {pantalon: 'jean', cantidad: 5},
            {sombrero: 'cuero', cantidad: 3}
        ]
       
    }
})