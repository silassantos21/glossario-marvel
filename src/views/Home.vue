<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar style="background-color: #000000de">
        <md-button class="md-icon-button" style="background-color: #FFF" @click="menuVisible = !menuVisible">
          <md-icon md-font-set="material-icons">menu</md-icon>
        </md-button>
        <span class="md-title">
          <b>
          <span style="background-color: red; color: white; padding: 5px">Marvel</span>
          <span style="border-block: 2px solid white; color: white; margin-left: 5px">Comics</span>
          <span style="color: white;"> - Glossário</span>
          </b>
        </span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          <h2>Menu</h2>
        </md-toolbar>

        <md-list>

          <md-list-item style="cursor: pointer">
            <md-icon>help_outline</md-icon>
            <span class="md-list-item-text" @click="irRota('instrucoes')">Instruções</span>
          </md-list-item>

          <md-list-item style="cursor: pointer">
            <md-icon>home</md-icon>
            <span class="md-list-item-text" @click="irRota('home')">Home</span>
          </md-list-item>

          <md-list-item style="cursor: pointer">
            <md-icon style="color: #daa520">grade</md-icon>
            <span class="md-list-item-text" @click="irRota('buscar_personagens')">Buscar Personagens</span>
          </md-list-item>

        </md-list>
      </md-app-drawer>

      <md-app-content>
        <div style="text-align-last: center; margin-block: 5%;">
          <img src="../assets/img/marvel-comics-logo.jpg" alt="">
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
  .md-app {
    max-height: 100%;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>

<script>
export default {
  name: 'home',
  data: () => ({
    menuVisible: false
  }),
  methods: {
    irRota (rota) {
      if (rota === 'home') {
        this.menuVisible = !this.menuVisible
        return
      }
      console.log(rota)
      this.$router.push({ name: rota })
    }
  }
}
</script>