<template>
  <div class="md-layout md-alignment-top-center">
    <div class="md-layout-item md-size-80">
      <h1 class="md-display-1">Themes</h1>
    </div>
    <div class="md-layout-item md-size-80 md-layout md-gutter md-alignment-top-center">
      <div class="md-layout-item md-size-50">
        <md-card>
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">Media card</div>
              <div class="md-subhead">Normal size</div>
            </md-card-header-text>

            <md-card-media md-big>
              <doughnut-chart :data="datacollection" :width="300" :height="160"></doughnut-chart>
            </md-card-media>
          </md-card-header>
        </md-card>
        <md-card>
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">Media card</div>
              <div class="md-subhead">Normal size</div>
            </md-card-header-text>

            <md-card-media md-big>
              <doughnut-chart :data="datacollection" :width="300" :height="160"></doughnut-chart>
            </md-card-media>
          </md-card-header>
        </md-card>
      </div>
      <div class="md-layout-item md-size-50">
        <bar-chart :data="datacollection"></bar-chart>
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
      datacollection: {
        labels: ['Career', 'Lover', 'Family', 'Music', 'Friends', 'Basketball'],
        datasets: [{
          label: 'Value',
          backgroundColor: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6'],
          data: [50, 40, 30, 20, 10, 5]
        }]
      }
    }
  }
}
</script>
