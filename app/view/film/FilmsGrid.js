Ext.define('MsTraining.view.film.FilmsGrid', {
    extend: 'MsTraining.view.base.Grid', 
    xtype: 'filmsgrid',
    bind: '{films}', 
    reference: 'filmsGrid', 
    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl: [
            '<b>Description:</b> {description}</br>',
            '<b>Special Features:</b> {specialFeatures}</br>',
            '<b>Rental Duration:</b> {rentalDuration}</br>',
            '<b>Rental Rate:</b> {rentalRate}</br>',
            '<b>Replacement Cost:</b> {replacementCost}</br>'
        ]
    }],
    columns: [{
        text: 'Film Id',
        width: 80,
        dataIndex: 'id'
    },
    {
        text: 'Title',
        flex: 1,
        dataIndex: 'title',
        renderer: function (value, metaData, record) { 
            metaData['tdAttr'] = 'data-qtip="' +
                record.get('description') + '"'; 
            return value;
        }
    },
    {
        text: 'Language',
        width: 100,
        dataIndex: 'languageId',
        renderer: function (value, metaData, record) {
            var languagesStore = Ext.getStore('languages'); 
            var lang = languagesStore.findRecord('languageId', value);
            return lang != null ? lang.get('name') : value; 
        }
    },
    {
        text: 'Release Year',
        width: 110,
        dataIndex: 'releaseYear'
    },
    {
        text: 'Length',
        width: 100,
        dataIndex: 'length',
        renderer: function (value, metaData, record) { 
            return value + ' min';
        }
    },
    {
        text: 'Rating',
        width: 70,
        dataIndex: 'rating'
    }],
    dockedItems: [{
        dock: 'bottom',
        xtype: 'pagingtoolbar',
        bind: {
            store: '{films}'
        },
        displayInfo: true,
        displayMsg: 'Displaying films {0} - {1} of {2}',
        emptyMsg: "No films to display"
    }]
});