Ext.define('MsTraining.view.film.FilmFormContainer', {
    extend: 'Ext.panel.Panel',
    xtype: 'film-form-container',

    requires: [
        'MsTraining.util.Util',
    ],

    bodyPadding: 10,
    layout: {
        type: 'anchor'
    },
    title: 'Film Information',
    defaults: {
        anchor: '100%',
        msgTarget: 'side',
        labelWidth: 105
    },

    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Title',
            afterLabelTextTpl: MsTraining.util.Util.required,
            bind: '{currentFilm.title}'
        },
        {
            xtype: 'numberfield',
            fieldLabel: 'Release Year',
            allowDecimals: false,
            bind: '{currentFilm.releaseYear}'
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Language',
            displayField: 'name',
            valueField: 'languageId',
            queryMode: 'local',
            store: 'staticData.Languages',
            afterLabelTextTpl: MsTraining.util.Util.required,
            bind: '{currentFilm.languageId}'
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Original Language',
            displayField: 'name',
            valueField: 'languageId',
            queryMode: 'local',
            store: 'staticData.Languages',
            bind: '{currentFilm.originalLanguageId}'
        },
        {
            xtype: 'numberfield',
            fieldLabel: 'Rental Duration',
            allowDecimals: false,
            afterLabelTextTpl: MsTraining.util.Util.required,
            bind: '{currentFilm.rentalDuration}'
        },
        {
            xtype: 'numberfield',
            fieldLabel: 'Rental Rate',
            step: 0.1,
            afterLabelTextTpl: MsTraining.util.Util.required,
            bind: '{currentFilm.rentalRate}'
        },
        {
            xtype: 'numberfield',
            fieldLabel: 'Length (min)',
            allowDecimals: false,
            bind: '{currentFilm.length}'

        },
        {
            xtype: 'numberfield',
            name: 'replacementCost',
            fieldLabel: 'Replacement Cost',
            step: 0.1,
            afterLabelTextTpl: MsTraining.util.Util.required,
            bind: '{currentFilm.replacementCost}'
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Rating',
            displayField: 'text',
            valueField: 'text',
            queryMode: 'local',
            bind: {
                value: '{currentFilm.rating}',
                store: '{ratings}'
            }
        },
        {
            xtype: 'tagfield',
            fieldLabel: 'Special Features',
            displayField: 'text',
            valueField: 'text',
            filterPickList: true,
            queryMode: 'local',
            publishes: 'value',
            stacked: true,
            bind: {
                value: '{specialFeatures}',
                store: '{specialFeatures}'
            }
        },
        {
            xtype: 'textareafield',
            fieldLabel: 'Description',
            bind: '{currentFilm.description}'
        }
    ]
});