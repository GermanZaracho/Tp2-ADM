<template>
  <div class="home-coming">
    <button v-on:click="logout">Cerrar Sesion</button>
    <v-app>
      <AddNote />
    </v-app>
  </div>

</template>
<script>
import AddNote from '../components/AddNote.vue'
export default {
  name: 'home-coming',
  components: {
    AddNote,
  },

  mounted: function () {
    const login = JSON.parse(localStorage.getItem("login"));
    if (login) {
      console.log("Logueo");
    } else {
      console.log("Inicio requerido");
      this.$router.push("/login");
    }
  },

  methods: {
    logout: function () {
      localStorage.setItem("login", JSON.stringify(false));
      this.$router.push("/login");
    }
  }
}
</script>
