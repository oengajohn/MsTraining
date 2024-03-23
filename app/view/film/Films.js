Ext.define('MsTraining.view.film.Films', {
    extend: 'Ext.panel.Panel',
    xtype: 'films',
    requires: [
        
    ], 
    controller: 'films', 
    viewModel: {
        type: 'films' 
    },
    session: true, 
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [{
        xtype: 'filmsgrid', 
        flex: 1
    }, {
        xtype: 'container',
        split: true,
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        height: 150,
        items: [{
            xtype: 'film-categories', 
            flex: 1
        }, {
            xtype: 'film-actors', 
            flex: 2
        }]
    }],
    dockedItems: [{
        xtype: 'top-tool-bar'
    }]
});