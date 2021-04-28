var app = new Vue (
    {
        el: '#root',
        data: {
            //1a. creo variabile vuota
            cds: []
        },
        methods: {
        },
        mounted() {
            //1b. faccio la richiesta
            axios
            //1c. aggiungo l' apposita API di Boolea
            .get('https://flynn.boolean.careers/exercises/api/array/music ')
            //1d. creo funzione
            .then( (response) => {
                const result = response.data;
                this.cds = result.response;
            });
        }
    }
);