export default {
  editor: {
    label: {
      en: "Highcharts - Line",
    },
    icon: 'https://cdn.weweb.io/designs/c55504b2-3c64-44db-8bc0-db0aab821079/sections/highcharts.svg?_wwcv=1725614333416',

    customStylePropertiesOrder: [
      [
        'colorPalette',
        'animationDuration',
        'markerEnabled',
        'lineWidth', 
        'xDataLabelsEnabled'
      ],
      [
        'areaSplineEnabled',
        'areaSplineSelection',
        'areaSplineOpacity'
      ],
      [
        'legendEnabled',
        'legendFontSize',
        'legendLayout',
        'legendAlign',
        'legendVerticalAlign',
        'legendY',
        'legendDistance',
      ],
      [
        'tooltipFormat',
        'tooltipShared'
      ],
      [
        'dataLabelsEnabled',
        'dataLabelsFontSize',
        'dataLabelsFormat',
      ],
    ],

    customSettingsPropertiesOrder: [
      [
        'categories',
        'series',
      ],
      [
        'zoomEnabled',
        'zoomType'
      ],
      [
        'exportingEnabled'
      ]
    ]
  },

  properties: {
    // CATEGORIES SETTINGS
    categories: {
      label: 'Categories',
      type: 'Info',
      section: 'settings',
      responsive: true,
      states: true,
      bindable: "list",
      options: { text: 'Bind categories data' },
      defaultValue: null,
      /* wwEditor:start */
      bindingValidation: {
        type: 'array',
        tooltip: 'A collection of data in array format: `[{"Meta"}, {"Tiktok"}, ...]`',
      },
      /* wwEditor:end */
    },

    xDataLabelsEnabled:{
      label: 'X label',
      type: 'OnOff',
      responsive: true,
      states: true,
      bindable: true,
      defaultValue: true,
    },

    series: {
      label: 'Series',
      type: 'Info',
      section: 'settings',
      responsive: true,
      states: true,
      bindable: "list",
      options: { text: 'Bind series data' },
      defaultValue: null,
      bindingValidation: {
        type: 'array',
        tooltip: 'A collection of data in array format: `[{name: XXX, data:[]}, {name: XXX, data:[]}, ...]`',
      },
    },

    // ZOOM SETTINGS
    zoomEnabled: {
      label: 'Zoom',
      type: 'OnOff',
      section: 'settings',
      responsive: true,
      states: true,
      bindable: true,
      defaultValue: true,
    },

    zoomType: {
      label: 'Type',
      type: 'TextSelect',
      section: 'settings',
      responsive: true,
      states: true,
      bindable: true,
      options: {
        options: [
          { value: 'x', label: 'X' },
          { value: 'y', label: 'Y' },
          { value: 'xy', label: 'Both' },
        ],
      },
      defaultValue: 'x',
      hidden: content => !content.zoomEnabled,
    },

    // EXPORT SETTINGS
    exportingEnabled: {
      label: 'Exporting',
      type: 'OnOff',
      section: 'settings',
      responsive: true,
      states: true,
      bindable: true,
      defaultValue: false,
    },

    // STYLE SETTINGS
    colorPalette: {
      label: 'Color palette',
      type: 'TextSelect',
      responsive: true,
      states: true,
      bindable: true,
      options: {
        options: [
          { value: 'metabase', label: 'Metabase ' },
          { value: 'metabasePastel', label: 'Metabase - pastel' },
          { value: 'blue', label: 'Blue' },
          { value: 'pastel', label: 'Pastel' },
          { value: 'springPastel', label: 'Spring Pastels' },
        ],
      },
      defaultValue: 'metabase',
    },

    animationDuration: {
      label: 'Animation Duration (ms)',
      type: 'Number',
      responsive: true,
      states: true,
      bindable: true,
      options: { min: 100, max: 5000, step: 100 },
      defaultValue: 1500,
    },

    markerEnabled: {
      label: 'Marker',
      type: 'OnOff',
      responsive: true,
      states: true,
      bindable: true,
      defaultValue: false,
    },

    lineWidth: {
      label: 'Line width',
      type: 'Number',
      responsive: true,
      states: true,
      bindable: true,
      options: { min: 0, max: 100, step: 0.5 },
      defaultValue: 2.5,
    },

    // AREA SPLINE SETTINGS
    areaSplineEnabled: {
      label: 'Area spline',
      type: 'OnOff',
      responsive: true,
      states: true,
      bindable: true,
      defaultValue: false,
    },

    areaSplineSelection: {
      label: 'Line',
      type: 'Info',
      responsive: true,
      states: true,
      bindable: true,
      options: { text: 'Select the line(s)' },
      defaultValue: null,
      hidden: content => !content.areaSplineEnabled,
      bindingValidation: {
        type: 'array',
        tooltip: 'Should be an array of line index (start at 0): `[0,1]`',
      },
    },

    areaSplineOpacity: {
      label: 'Opacity',
      type: 'Number',
      responsive: true,
      states: true,
      bindable: true,
      options: { min: 0, max: 1, step: 0.1 },
      defaultValue: 0.2,
      hidden: content => !content.areaSplineEnabled,
    },

    // LEGEND SETTINGS
    legendEnabled: {
      label: 'Enable Legend',
      type: 'OnOff',
      responsive: true,
      states: true,
      bindable: true,
      defaultValue: true,
    },

    legendLayout: {
      label: 'Layout',
      type: 'TextSelect',
      responsive: true,
      states: true,
      bindable: true,
      options: {
        options: [
          { value: 'horizontal', label: 'Horizontal' },
          { value: 'vertical', label: 'Vertical' },
        ],
      },
      defaultValue: 'horizontal',
      hidden: content => !content.legendEnabled,
    },

    legendAlign: {
      label: 'Align',
      type: 'TextSelect',
      responsive: true,
      states: true,
      bindable: true,
      options: {
        options: [
          { value: 'center', label: 'Center' },
          { value: 'left', label: 'Left' },
          { value: 'right', label: 'Right' },
        ],
      },
      defaultValue: 'center',
      hidden: content => !content.legendEnabled,
    },

    legendVerticalAlign: {
      label: 'Position',
      type: 'TextSelect',
      responsive: true,
      states: true,
      bindable: true,
      options: {
        options: [
          { value: 'top', label: 'Top' },
          { value: 'middle', label: 'Middle' },
          { value: 'bottom', label: 'Bottom' },
        ],
      },
      defaultValue: 'bottom',
      hidden: content => !content.legendEnabled,
    },

    legendY: {
      label: 'Y Offset',
      type: 'Number',
      responsive: true,
      states: true,
      bindable: true,
      options: { min: -100, max: 100, step: 1 },
      defaultValue: 10,
      hidden: content => !content.legendEnabled,
    },

    legendDistance: {
      label: 'Distance between',
      type: 'Number',
      responsive: true,
      states: true,
      bindable: true,
      options: { min: 0, max: 500, step: 5 },
      defaultValue: 20,
      hidden: content => !content.legendEnabled,
    },

    legendFontSize: {
      label: 'Font size',
      type: 'Number',
      responsive: true,
      states: true,
      bindable: true,
      options: { min: 0, max: 100, step: 1 },
      defaultValue: 14,
      hidden: content => !content.legendEnabled,
    },

    // TOOLTIP SETTINGS
    tooltipFormat: {
      label: 'Tooltip format',
      type: 'TextSelect',
      responsive: true,
      states: true,
      bindable: true,
      options: {
        options: [
          { value: '{series.name}: <b>{point.y:,.2f}</b><br/>', label: 'Classic' },
          { value: '{series.name}: <b>{point.y:,.2f}%</b><br/>', label: '%' },
          { value: '{series.name}: <b>{point.y:,.2f}€</b><br/>', label: '€' },
        ],
      },
      defaultValue: '{series.name}: <b>{point.y:,.2f}</b><br/>',
    },

    tooltipShared: {
      label: 'Shared',
      type: 'OnOff',
      responsive: true,
      states: true,
      bindable: true,
      defaultValue: false,
    },

    // DATA LABELS SETTINGS
    dataLabelsEnabled: {
      label: 'Enable Labels',
      type: 'OnOff',
      responsive: true,
      states: true,
      bindable: true,
      defaultValue: false,
    },

    dataLabelsFormat: {
      label: 'Format',
      type: 'TextSelect',
      responsive: true,
      states: true,
      bindable: true,
      options: {
        options: [
          { value: '{point.y:,.2f}', label: 'Classic' },
          { value: '{point.y:,.2f}%', label: '%' },
          { value: '{point.y:,.2f}€', label: '€' },
        ],
      },
      defaultValue: '{point.y:,.2f}',
      hidden: content => !content.dataLabelsEnabled,
    },

    dataLabelsFontSize: {
      label: 'Font size',
      type: 'Number',
      responsive: true,
      states: true,
      bindable: true,
      options: { min: 0, max: 100, step: 1 },
      defaultValue: 12,
      hidden: content => !content.dataLabelsEnabled,
    },
  },
};
