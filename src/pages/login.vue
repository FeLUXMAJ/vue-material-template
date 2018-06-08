<template>
  <div>
    <div class="m-2">
      <h1 class="md-display-2 center">Tony's World</h1>
    </div>
    <div class="md-layout md-gutter md-alignment-top-center">
      <div class="md-layout-item md-size-30 md-medium-size-50 md-small-size-70 md-xsmall-size-90">
        <md-card>
          <md-card-header>
            <div class="md-title">Login to open my heart</div>
          </md-card-header>

          <md-card-content>
            <md-field>
              <label for="username">Username</label>
              <md-input name="username" id="username" autocomplete="given-name" />
            </md-field>
            <md-field>
              <label for="password" focused>Password</label>
              <md-input name="password" id="password" autocomplete="given-name" />
            </md-field>
          </md-card-content>

          <md-card-actions>
            <router-link to="/home">
              <md-button class="md-raised md-primary">Login</md-button>
            </router-link>
            <md-button>Register</md-button>
          </md-card-actions>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .m-2 {
    margin: 20px;
  }

  .block {
    display: block;
  }

  .center {
    text-align: center;
  }
</style>
