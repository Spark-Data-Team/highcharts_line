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
      chartInstance: null, // Stocker l'instance du graphique ici
    };
  },

  computed: {
    // Retourne la palette de couleurs sélectionnée ou une valeur par défaut
    selectedPalette() {
      return colorPalettes[this.content.colorPalette] || colorPalettes.metabase;
    },

    // Modifie dynamiquement les séries en fonction de `areaSplineSelection`
    modifiedSeries() {
      const areaSplineSelection = this.content.areaSplineSelection ?? [1]; // Valeur par défaut [] si areaSplineSelection est null ou undefined
      const series = this.content.series ?? [{ name: 'Jane', data: [76, 0, 4, 12, 109, 14] }, { name: 'John', data: [35, 7, 3, 43, 180, 45] }, { name: 'Doe', data: [50, 30, 40, 70, 90, 100] }];

      return series.map((item, index) => {
        // Si l'indice est dans areaSplineSelection, on ajoute 'type: areaspline'
        if (areaSplineSelection.includes(index) && this.content.areaSplineEnabled) {
          return {
            ...item,
            type: 'areaspline', // Ajoute le type 'areaspline' à la série correspondante
          };
        }
        return item; // Renvoie la série telle quelle sinon
      });
    },

    chartOptions() {
      return {
        colors: this.selectedPalette,

        chart: {
          type: 'spline',
          backgroundColor: 'transparent',

          zooming: {
            type: this.content.zoomEnabled ? this.content.zoomType : null,
            pinchType: this.content.zoomEnabled ? this.content.zoomType : null,
          },
        },

        exporting: {
          enabled: this.content.exportingEnabled,
          buttons: {
            contextButton: {
              menuItems: ['viewFullscreen', 'separator', 'downloadPNG', 'downloadPDF', 'downloadSVG'],
            },
          },
        },

        title: {
          text: null,
        },

        xAxis: {
          categories: this.content.categories || ['Dec', 'Jan', 'Fev', 'March', 'April', 'May'],
          labels: {
            enabled: this.content.xDataLabelsEnabled // Cache ou nom les étiquettes de l'axe des x
          },
          lineColor:'#919191D9', 
          min: 1, 
        },

        yAxis: {
          title: null,
          
        },

        tooltip: {
          pointFormat: this.content.tooltipFormat,
          shared: this.content.tooltipShared,
        },

        legend: {
          enabled: this.content.legendEnabled,
          layout: this.content.legendLayout,
          align: this.content.legendAlign,
          verticalAlign: this.content.legendVerticalAlign,
          floating: false,
          y: this.content.legendY,
          itemDistance: this.content.legendDistance,
          itemStyle: {
            color: '#1C1C1C',
            cursor: 'pointer',
            fontSize: `${this.content.legendFontSize}px`,
            fontWeight: '500',
            textOverflow: 'ellipsis',
          },
        },

        plotOptions: {
          series: {
            animation: {
              duration: this.content.animationDuration,
            },

            lineWidth: this.content.lineWidth,

            marker: {
              enabled: this.content.markerEnabled,
              symbol: 'circle',
            },

            borderRadius: this.content.borderRadius,

            dataLabels: {
              enabled: this.content.dataLabelsEnabled,
              format: this.content.dataLabelsFormat,
              style: {
                fontWeight: '500',
                fontSize: `${this.content.dataLabelsFontSize}px`,
              },
            },

            centerInCategory: true,
          },

          areaspline: {
            fillOpacity: this.content.areaSplineOpacity,
          },
        },

        series: this.modifiedSeries, // Utilise les séries modifiées
      };
    },
  },

  watch: {
    chartOptions: {
      handler() {
        this.createChart();
      },
      deep: true, // Surveiller les objets imbriqués pour les changements
    },
  },

  mounted() {
    this.createChart();
  },

  methods: {
    // Créer le graphique avec les options mises à jour
    createChart() {
      if (this.chartInstance) {
        this.chartInstance.destroy(); // Détruire le graphique existant avant de le recréer
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
