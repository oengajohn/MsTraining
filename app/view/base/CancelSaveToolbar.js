Ext.define('MsTraining.view.base.CancelSaveToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'cancel-save-toolbar',

    requires: [
     
    ],

    dock: 'bottom',
    ui: 'footer',
    layout: {
        pack: 'end',
        type: 'hbox'
    },
    items: [
        {
            xtype: 'button',
            text: 'Save',
            iconCls: 'far fa-save',
            listeners: {
                click: 'onSave'
            }
        },
        {
            xtype: 'button',
            text: 'Cancel',
            iconCls: 'fas fa-undo',
            listeners: {
                click: 'onCancel'
            }
        }
    ]
});