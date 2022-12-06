<template>
  <v-container>

    <v-row>
      <v-col>
        <v-alert :value="alert" dark  icon="mdi-home" transition="scale-transition">{{alertMessage}}</v-alert>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="400">

          <v-img class="white--text align-end" contain height="100" :src="require('../assets/logo.svg')"></v-img>

          <v-card-text>
            <v-form>
              <v-row justify="center">
                <v-col cols="12" sm="6" md="10">
                  <v-text-field v-model="email" label="Email" placeholder="Email"></v-text-field>
                  <v-text-field v-model="password" label="Password" placeholder="Password"></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-row justify="center">
              <v-col>
                <v-btn text @click="validation">Iniciar sesión</v-btn>
                <v-btn text>Registrarse</v-btn>
              </v-col>
            </v-row>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => {
    return {
      success: false,
      alert: false,
      alertMessage: "",
      email: "",
      password: ""
    }
  },
  methods: {
    validation(e){
      this.alert = false;
      this.success = false;
      this.alertMessage = "";
      console.log(e)
      if(!this.email) {
        this.alertMessage += "  Ingrese un E-mail. ";
        this.alert = true;
      }
      if(!this.password) {
        this.alertMessage += " Ingrese un Password. ";
        this.alert = true;
      }
      if(!this.alertMessage) {
        this.success = true;
        localStorage.setItem("login", "true");
        this.$router.push("/home");
      }
      setTimeout(()=> {
        this.success = false;
        this.alert = false;
      }, 1500);
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center; 
}
.mx-auto {
  padding-top: 10px;
}
</style>
