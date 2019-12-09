const app = new  Vue({
    el: '#app',
    data: {
        titulo:'Hola mundo con Vue',
        frutas: [
            {nombre: 'manzana', cantidad: 10},
            {nombre: 'pera', cantidad: 0},
            {nombre: 'uva', cantidad: 3}
        ],
        nuevafruta: ''
    },
    methods:{
        agregarFruta (){
            this.frutas.push({
                nombre: this.nuevafruta,
                cantidad: 0
            })
        }
    }
})