<script>
import {
  Doughnut
} from 'vue-chartjs'

export default {
  extends: Doughnut,
  props: ['data', 'options', 'width', 'height'],
  mounted () {
    this.renderChart(
      this.data, {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        }
      })
  }
}
</script>
