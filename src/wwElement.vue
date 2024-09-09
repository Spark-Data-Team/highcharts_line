<template>
  <div ref="chartContainer"></div>
</template>

<script>
import Highcharts from 'highcharts';
import exportingOption from 'highcharts/modules/exporting';
import { colorPalettes } from './colorPalettes'; // Importer les palettes de couleurs

exportingOption(Highcharts);


export default {
  props: {
    content: { type: Object, required: true },
  },

  data() {
    return {
      chartInstance: null, // Store chart instance here 
    };
  },

  computed: {

    selectedPalette() {
      return colorPalettes[this.content.colorPalette] || colorPalettes.metabase; // Définit la palette par défaut si aucune sélection
    },

    chartOptions() {
      
      return {

        colors: this.selectedPalette, // Utiliser la palette sélectionnée
          
        chart: {
          type: this.content.barOrientation,
          backgroundColor:'transparent',

          zooming: {
            type: this.content.zoomEnabled ? this.content.zoomType : null,
            pinchType: this.content.zoomEnabled ? this.content.zoomType : null,
          },

        },

        exporting:{
          enabled: this.content.exportingEnabled,
          buttons: {
                contextButton: {
                    menuItems: ['viewFullscreen','separator','downloadPNG', 'downloadPDF','downloadSVG', ]
                },
              }
        },

        title: {
          text: null
        },

        xAxis: {
          categories: this.content.categories,
        },

        yAxis: {
          title:null,
        },

        tooltip: {
          pointFormat: this.content.tooltipFormat, 
        },

        legend: {
          enabled:this.content.legendEnabled,
          layout: this.content.legendLayout,
          align: this.content.legendAlign,
          verticalAlign: this.content.legendVerticalAlign,
          floating: false,
          y: this.content.legendY,
          itemDistance: this.content.legendDistance, 
          itemStyle: {"color": "#1C1C1C", "cursor": "pointer", "fontSize": "0.8em", "fontWeight": "500", "textOverflow": "ellipsis"}, 
        
        },

        plotOptions: {
            series: {
              groupPadding: this.content.barWidth, // Variable dynamique pour groupPadding
              animation: {
                duration: this.content.animationDuration, // Variable pour la durée de l'animation
              },

              borderRadius:this.content.borderRadius,

              dataLabels: {
                enabled: this.content.dataLabelsEnabled, // Variable pour activer/désactiver les étiquettes
                format: this.content.dataLabelsFormat, // Variable pour le format des étiquettes
                align: this.content.dataLabelsInside ? this.content.dataLabelsAlign : null, 
                inside: this.content.dataLabelsInside, 
                style: {
                    fontWeight: '500',
                    fontSize:'0.8em'
                }
              }, 

              centerInCategory: true
            }
        },

      series: this.content.series
        
      };
    },
  },

  watch: {
    chartOptions: {
      handler() {
        this.createChart();
      },
      deep: true, // Ensure it watches nested objects
    },
  },

  mounted() {
    this.createChart();
  },

  methods: {
    createChart() {
      if (this.chartInstance) {
        this.chartInstance.destroy(); // Destroy the existing chart before re-creating it
      }
      this.chartInstance = Highcharts.chart(this.$refs.chartContainer, this.chartOptions);
    },
  },
};
</script>

<style scoped>

* {
    font-family: 'Inter', sans-serif;
}


</style>
