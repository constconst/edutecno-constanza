const pokecomponent = {
    data() {
        return {
            query: null,
            data: []
        }
    },
    methods: {
        async getData() {
            console.log(this.query)
        },
        created() {
            fetch("https://pokeapi.co/api/v2/pokemon/nombre_pokemon")
                .then(response => response.json())
                .then(json => console.log(json));
        }
    }
}
const app = Vue.createApp(pokecomponent).mount('#app')