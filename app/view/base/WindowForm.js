Ext.define('MsTraining.view.base.WindowForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowform',

    requires: [
        'MsTraining.util.Util',
        'MsTraining.view.base.CancelSaveToolbar'
    ],

    height: 400,
    width: 550,
    autoScroll: true,
    layout: {
        type: 'fit'
    },
    modal: true,
    closable: false,

    bind: {
        title: '{title}',
        iconCls: '{iconCls}'
    },

    //items must be overrriden in subclass

    dockedItems: [{
        xtype: 'cancel-save-toolbar'
    }]
});