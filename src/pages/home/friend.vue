<template>
  <div>
    <div class="md-layout md-alignment-top-center">
      <div class="md-layout-item md-size-80">
        <md-card>
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">Mouth</div>
              <div class="md-subhead">Statistic Record</div>
            </md-card-header-text>

            <md-menu md-size="big" md-direction="bottom-end">
              <md-button md-menu-trigger>
                Mouth
              </md-button>

              <md-menu-content>
                <md-menu-item @click="">
                  <span>Moth</span>
                </md-menu-item>

                <md-menu-item @click="">
                  <span>Esophagus</span>
                </md-menu-item>

                <md-menu-item @click="">
                  <span>Stomach</span>
                </md-menu-item>
              </md-menu-content>
            </md-menu>
          </md-card-header>

          <md-divider></md-divider>

          <md-card-content style="padding:0px">
            <div class="md-layout">
              <div class="md-layout-item md-size-50" style="border-right: 1px solid #cccccc">
                <md-card-header style="padding:0px">
                  <md-tabs md-sync-route>
                    <md-tab id="tab-home" md-label="Participation" @click="selectedView=0"></md-tab>
                    <md-tab id="tab-pages" md-label="Correct Rate" @click="selectedView=1"></md-tab>
                  </md-tabs>
                </md-card-header>
                <md-divider></md-divider>
                <md-card-content>
                  <bar-chart v-if="selectedView==0" :data="participation" :height="500"></bar-chart>
                  <bar-chart v-if="selectedView==1" :data="correction" :height="500"></bar-chart>
                </md-card-content>
              </div>
              <div class="md-layout-item md-size-50">
                <md-table>
                  <md-table-row>
                    <md-table-head md-numeric>ID</md-table-head>
                    <md-table-head>Content</md-table-head>
                    <md-table-head>Correct</md-table-head>
                    <md-table-head>Participation</md-table-head>
                  </md-table-row>

                  <md-table-row>
                    <md-table-cell md-numeric>1</md-table-cell>
                    <md-table-cell>Shawna Dubbin</md-table-cell>
                    <md-table-cell>sdubbin0@geocities.com</md-table-cell>
                    <md-table-cell>Male</md-table-cell>
                  </md-table-row>

                  <md-table-row>
                    <md-table-cell md-numeric>2</md-table-cell>
                    <md-table-cell>Odette Demageard</md-table-cell>
                    <md-table-cell>odemageard1@spotify.com</md-table-cell>
                    <md-table-cell>Female</md-table-cell>
                  </md-table-row>

                  <md-table-row>
                    <md-table-cell md-numeric>3</md-table-cell>
                    <md-table-cell>Vera Taleworth</md-table-cell>
                    <md-table-cell>vtaleworth2@google.ca</md-table-cell>
                    <md-table-cell>Male</md-table-cell>
                  </md-table-row>
                </md-table>
              </div>
            </div>
          </md-card-content>

        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
  import barChart from '@/components/barChart'
  import doughnutChart from '@/components/doughnutChart'
  export default {
    components: {
      barChart,
      doughnutChart
    },
    data: () => {
      return {
        participation: {
          labels: ['Career', 'Lover', 'Family', 'Music', 'Friends', 'Basketball'],
          datasets: [{
            label: 'Value',
            backgroundColor: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6'],
            data: [50, 40, 30, 20, 10, 5]
          }]
        },
        correction: {
          labels: ['Career', 'Lover', 'Family', 'Music', 'Friends', 'Basketball'],
          datasets: [{
            label: 'Value',
            backgroundColor: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6'],
            data: [10, 20, 20, 20, 10, 5]
          }]
        },
        selectedView: 0
      }
    },
    mounted() {
    },
    methods: {
    }
  }
</script>

<style scoped>
  .p-0 {
    padding: 0px !important
  }
</style>
