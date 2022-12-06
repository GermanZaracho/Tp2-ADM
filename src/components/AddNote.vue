<template>
    <v-container>
        <v-layout>
            <v-flex>

                <v-card>

                    <v-img max-width="500px" src="../assets/note.jpg">
                    </v-img>

                    <v-card-title>
                        <h2>Bienvenido a tu Bloc de Notas</h2>
                    </v-card-title>

                    <v-card-text>
                        <p>A continuación podrás comenzar a agregar tus propias notas
                        </p>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="info" @click="dialog = true, guardarNotas"> Agregar Nota</v-btn>
                    </v-card-actions>

                </v-card>

            </v-flex>
        </v-layout>

        <v-dialog v-model="dialog" max-width="700px">

            <v-card>
                <v-card-title>Escribe tu Nueva Nota a continuación</v-card-title>
                <v-divider></v-divider>

                <div>
                    <form>
                        <textarea id="ingresar-texto" placeholder="Nota" v-model="note"
                            class="materialize-textarea"></textarea>
                    </form>
                </div>

                <v-btn class="MyBtn" elevation="2" @click="guardarNotas">Guardar</v-btn>

            </v-card>

        </v-dialog>

        <v-card class="mx-auto MyNotes" max-width="400">

            <v-divider></v-divider>
            <ul class="listCollection">
                <li :class="{ upperNote: isCase }" v-for="item in listNote" :key="item.show">
                    <div class="newNote">
                        <input class="newNoteInput" type="checkbox" v-model="item.check" id="formalCheck">
                        <label class="newNoteLabel" for="formalCheck"> {{item.note}} </label>
                    </div>
                </li>
            </ul>
            <v-btn class="MyBtn MyBlueBtn" elevation="2" @click="deleteNote" v-if="contador <= 0">Borrar Nota</v-btn>
            <v-btn class="MyBtn MyGreenBtn" elevation="2" @click="deleteNote" v-else-if="contador >= 0 && contador <= 5">Borrar Nota</v-btn>
            <v-btn class="MyBtn" elevation="2" @click="deleteNote" v-else >Borrar Nota</v-btn>
            
        </v-card>
        
    </v-container>
</template>


<script>
export default {
    data() {
        return {
            dialog: false,
            listNote: [],
            note: '',
            isCase: true,
            message: 'Hello Vue!',
            contador:0
        }
    },
    created: function () {
        const topList = JSON.parse(localStorage.getItem("listNote"));
        this.listNote = topList ? topList : [];
        
    },
    methods: {
        guardarNotas: function () {

            const newNote = {
                note: this.note,
                check: false,
                show: true,
            };
            
            this.listNote.push(newNote);
            this.note = "";
            localStorage.setItem("listNote", JSON.stringify(this.listNote));
            this.dialog = false;
            this.contador ++;
            console.log(this.contador)
        },
        deleteNote: function () {
            for (let list in this.listNote) {
                if (this.listNote[list].check == true) {
                    this.listNote.splice(list, 1);
                }
            }
            localStorage.setItem('listNote', JSON.stringify(this.listNote));
            this.contador --;
            console.log(this.contador)
        },
    }
};

</script>

<style>
.v-sheet.v-card {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.v-card__text {
    max-width: 500px;
}

textarea {
    border: 2px solid grey;
    border-radius: 10px;
    width: 35vw;
}

.MyBtn {
    background-color: #673ab7 !important;
    border-color: #673ab7 !important;
    color: white !important;
    margin-bottom: 10px;
}

.MyBlueBtn {
    background-color: #572afa !important;
}

.MyGreenBtn {
    background-color: #24bb81 !important;
}

.MyNotes {
    margin: 20px 0px;
}

li {
    list-style: none;
}
</style>