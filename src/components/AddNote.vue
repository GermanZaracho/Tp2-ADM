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
                        <v-btn color="info" @click="dialog = true">Agregar Nota</v-btn>
                    </v-card-actions>

                </v-card>

            </v-flex>
        </v-layout>

        <v-dialog v-model="dialog" max-width="700px">

            <v-card>
                <v-card-title>Nueva nota</v-card-title>
                <v-card-title>Escribe tu nota a continuación</v-card-title>
                <v-divider></v-divider>

                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s12">
                                <!-- modificacion -->
                                <textarea id="ingresar-texto" placeholder="Nota" v-model="note" class="materialize-textarea"></textarea>
                                <!-- <label for="ingresar-texto">Nota</label> -->
                            </div>
                        </div>
                    </form>
                </div>
                
                <v-card-actions>
                    <button @click="dialog = false">Cerrar</button>
                </v-card-actions>
            </v-card>

        </v-dialog>

    </v-container>
</template>


<script>
export default {
    data() {
        return {
            dialog: false
        }
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
    border:2px solid grey;
    border-radius: 10px;
    width: 35vw;
}
</style>