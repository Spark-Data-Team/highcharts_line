export default {

  editor: {
    label: {
      en: "Highcharts - Bar",
    },

    icon: 'https://cdn.weweb.io/designs/c55504b2-3c64-44db-8bc0-db0aab821079/sections/highcharts.svg?_wwcv=1725614333416',

    customStylePropertiesOrder:[
      'barOrientation',

      [
        'colorPalette',
        'borderRadius',
        'barWidth',
        'animationDuration',
        'animationEasing',
        
      ], 

      [
        'legendEnabled',
        'legendLayout',
        'legendAlign',
        'legendVerticalAlign',
        'legendY', 
        'legendDistance'
      ], 

      [ 
        'zoomEnabled', 
        'zoomType'
      ]
    ], 

    customSettingsPropertiesOrder:[
      [
        'categories',
        'series', 
        ''
      ], 

      [
        'tooltipFormat',
      ],

      [
        'dataLabelsEnabled', 
        'dataLabelsFormat',
        'dataLabelsInside', 
        'dataLabelsAlign'
      ],
      [
        'exportingEnabled'
      ]

    ]
  },

  

  properties: {

    barOrientation: {
      label: 'Axis',
      type: 'BigIconRadioGroup',
      options: {
          choices: [
              { icon: 'align-bottom', value: 'column', label: 'X' },
              { icon: 'align-left', value: 'bar', label: 'Y' },
          ],
      },
      bindable: true,
      responsive: true,
      states: true,
      defaultValue: 'column',
  },

    categories: {
      label: 'Categories',
      type: 'Info',
      options: { text: 'Bind categories data' },
      section: 'settings',
      bindable: "list",
      responsive: true,
      states: true,
      defaultValue: null,
      /* wwEditor:start */
      bindingValidation: {
          type: 'array',
          tooltip: 'A collection of data in array format: `[{"Meta"}, {"Tiktok"}, ...]`',
      },
      /* wwEditor:end */
  },

    series: {
      label: 'Series',
      type: 'Info',
      options: { text: 'Bind series data' },
      section: 'settings',
      bindable: "list",
      responsive: true,
      states: true,
      defaultValue: null,
      bindingValidation: {
        type: 'array',
        tooltip: 'A collection of data in array format: `[{name: XXX, data:[]}, {name: XXX, data:[]}, ...]`',
      },
    },

    tooltipFormat: {
      label: 'Tooltip format',
      type: 'TextSelect',
      options: {
        options: [
            { value: '{series.name}: <b>{point.y:,.2f}</b>', label: 'Classic' },
            { value: '{series.name}: <b>{point.y:,.2f}%</b>', label: '%' },
            { value: '{series.name}: <b>{point.y:,.2f}€</b>', label: '€' },
        ],
      },      
      section: 'settings',
      bindable: true,
      responsive: true,
      defaultValue: '{series.name}: <b>{point.y:,.2f}</b>',
    },

    legendEnabled: {
      label: 'Enable Legend',
      type: 'OnOff',
      bindable: true,
      responsive: true,
      defaultValue: true,
    },

    legendLayout: {
      label: 'Layout',
      type: 'TextSelect',
      options: {
        options: [
          { value: 'horizontal', label: 'Horizontal' },
          { value: 'vertical', label: 'Vertical' }
        ],
      },
      bindable: true,
      responsive: true,
      defaultValue: 'horizontal',
      hidden: content => !content.legendEnabled,

    },
    
    legendAlign: {
      label: 'Align',
      type: 'TextSelect',
      options: {
        options: [
          { value: 'center', label: 'Center' },
          { value: 'left', label: 'Left' },
          { value: 'right', label: 'Right' }
        ],
      },
      section: 'layout_settings',
      bindable: true,
      responsive: true,
      defaultValue: 'center',
      hidden: content => !content.legendEnabled,
    },
    
    legendVerticalAlign: {
      label: 'Position',
      type: 'TextSelect',
      options: {
        options: [
          { value: 'top', label: 'Top' },
          { value: 'middle', label: 'Middle' },
          { value: 'bottom', label: 'Bottom' }
        ],
      },
      bindable: true,
      responsive: true,
      defaultValue: 'bottom',
      hidden: content => !content.legendEnabled,
    },
    
    legendY: {
      label: 'Y Offset',
      type: 'Number',
      options: { min: -100, max: 100, step: 1 },
      bindable: true,
      responsive: true,
      defaultValue: 10,
      hidden: content => !content.legendEnabled,
    },

    legendDistance: {
      label: 'Distance between',
      type: 'Number',
      options: { min:0, max: 500, step: 5 },
      bindable: true,
      responsive: true,
      defaultValue: 20,
      hidden: content => !content.legendEnabled,
    },

    barWidth: {
      label: 'Bar width',
      type: 'Number',
      options: { min: -10, max: 5, step: 0.1 },
      bindable: true,
      responsive: true,
      defaultValue: 0.1,
    },
    
    animationDuration: {
      label: 'Animation Duration (ms)',
      type: 'Number',
      options: { min: 100, max: 5000, step: 100 },
      bindable: true,
      responsive: true,
      defaultValue: 1500,
    },
    
    dataLabelsEnabled: {
      label: 'Enable Labels',
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      responsive: true,
      defaultValue: true,
    },
    
    dataLabelsFormat: {
      type: 'Text',
      label: 'Format',
      type: 'TextSelect',
      options: {
        options: [
            { value: '{point.y:,.2f}', label: 'Classic' },
            { value: '{point.y:,.2f}%', label: '%' },
            { value: '{point.y:,.2f}€', label: '€' },
        ],
      },      
      section: 'settings',
      bindable: true,
      responsive: true,
      defaultValue: '{point.y:,.2f}',
      hidden: content => !content.dataLabelsEnabled,
    },

    dataLabelsInside:{
      label: 'Inside',
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      responsive: true,
      defaultValue: false,
      hidden: content => !content.dataLabelsEnabled,
    },

    dataLabelsAlign: {
      label: 'Position',
      type: 'TextSelect',
      section: 'settings',
      options: {
        options: [
          { value: 'left', label: 'Left' },
          { value: 'center', label: 'Center' },
          { value: 'right', label: 'Right' }
        ],
      },
      bindable: true,
      responsive: true,
      defaultValue: {},
      hidden: content => !content.dataLabelsInside,
    },


    exportingEnabled: {
      label: 'Exporting',
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      responsive: true,
      defaultValue: false,
    },

    zoomEnabled: {
      label: 'Zoom',
      type: 'OnOff',
      bindable: true,
      responsive: true,
      defaultValue: true,
    },

    zoomType: {
      label: 'Type',
      type: 'TextSelect',
      options: {
        options: [
            { value: 'x', label: 'X' },
            { value: 'y', label: 'Y' },
            { value: 'xy', label: 'Both' },
        ],
      },      
      bindable: true,
      responsive: true,
      defaultValue: 'x',
      hidden: content => !content.zoomEnabled,
    },

    colorPalette:{
      label: 'Color palette',
      type: 'TextSelect',
      options: {
        options: [
            { 
              value: 'metabase', 
              label: 'Metabase '
            },

            { 
              value: 'metabasePastel', 
              label: 'Metabase - pastel'
            },

            { 
              value: 'blue', 
              label: 'Blue'
            },

            { 
              value: 'pastel', 
              label: 'Pastel'
            },
            { 
              value: 'springPastel', 
              label: 'Spring Pastels'
            },
        ],
      },      
      bindable: true,
      responsive: true,
      defaultValue: 'metabase',
    },

    borderRadius:{
      label: 'Border radius',
      type: 'Number',
      options: { min: 0, max: 50, step: 1 },
      bindable: true,
      responsive: true,
      defaultValue: 4,
    },

  },

  
};
