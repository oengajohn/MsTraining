Ext.define('MsTraining.view.film.FilmSearchActor', {
    extend: 'Ext.window.Window',
    xtype: 'search-actor',
    requires: [
        'MsTraining.store.film.SearchActors'
    ],
    width: 600,
    bodyPadding: 10,
    layout: {
        type: 'anchor'
    },
    title: 'Search and Add Actor',
    autoShow: true,
    modal:true,
    closable: false,
    reference: 'search-actor',
    items: [
        {
            xtype: 'combo',
            reference: 'comboActors',
            displayField: 'firstName',
            valueField: 'actorId',
            typeAhead: false,
            hideLabel: true,
            hideTrigger: true,
            anchor: '100%',
            minChars: 2,
            pageSize: 2,
            store: {
                type: 'search-actors'
            },
            displayTpl: new Ext.XTemplate(
                '<tpl for=".">' +
                '{[typeof values === "string" ? values :values["lastName"]]}, ' + '{[typeof values === "string" ? values :values["firstName"]]}' + '</tpl>'
            ),
            listConfig: {
                loadingText: 'Searching...',
                emptyText: 'No matching posts found.',
                // Custom rendering template for each item
                getInnerTpl: function () {
                    return '<h3><span>{lastName},{firstName}</span ></h3 ></br > ' + '{filmInfo}';
                }
            }
        },
        {
            xtype: 'component',
            style: 'margin-top:10px',
            html: 'Live search requires a minimum of 2 characters.'
        }
    ],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        ui: 'footer',
        layout: {
            pack: 'end',
            type: 'hbox'
        },
        items: [
            {
                xtype: 'button',
                text: 'Cancel',
                listeners: {
                    click: 'onCancelActors'
                }
            },
            {
                xtype: 'button',
                text: 'Clear',
                listeners: {
                    click: 'onClearActors'
                }
            },
            {
                xtype: 'button',
                text: 'Add Selected',
                listeners: {
                    click: 'onSaveActors'
                }
            }
        ]
    }]
});