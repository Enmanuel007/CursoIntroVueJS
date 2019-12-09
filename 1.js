const app = new  Vue({
    el: '#app',
    data: {
        titulo:'Hola mundo de Vue',
        frutas: [
            {nombre: 'manzana', cantidad: 10},
            {nombre: 'pera', cantidad: 0},
            {nombre: 'uva', cantidad: 3}
        ],

        nuevafruta: '',
        total: 0
    },

    
    methods:{
        agregarFruta (){
            this.frutas.push({
                nombre: this.nuevafruta,
                cantidad: 0
            });
            this.nuevafruta = '';
        }
    },


    computed:{
        sumarfrutas(){
            this.total = 0;
            for (frutaObjeto of this.frutas){
                this.total = this.total + frutaObjeto.cantidad;
            }
            return this.total;
        }
    }
})