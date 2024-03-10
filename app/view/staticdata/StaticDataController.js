Ext.define('MsTraining.view.staticdata.StaticDataController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.staticdatacontroller',
    listen: {
        store: {
            'actors': {
                write: 'onStoreSync'
            },
            'categories': {
                write: 'onStoreSync'
            },
            'languages': {
                write: 'onStoreSync'
            },
            'cities': {
                write: 'onStoreSync'
            },
            'countries': {
                write: 'onStoreSync'
            }
        }
    },

    control: {
        "staticdatagrid button#add": {
            click: 'onButtonClickAdd'
        },
        "staticdatagrid": {
            edit: 'onEdit'
        },
        'staticdatagrid button#save': {
            click: 'onButtonClickSave'
        },
        "staticdatagrid button#cancel": {
            click: 'onButtonClickCancel'
        },
        "staticdatagrid button#clearFilter": {
            click: 'onButtonClickClearFilter'
        },
        'widgetcolumn[itemId=delete] button': {
            click: 'onDeleteButtonClick'
        }

    },

    onStoreSync: function (store, operation, options) {
        MsTraining.util.Util.showToast('Success! Your changes have been saved.');
    }, 
    onDeleteButtonClick: function (button) {
        var store = button.up('staticdatagrid').getStore(),
            record = button.getWidgetRecord();
        Ext.Msg.confirm('Delete', 'Are you sure you want to delete?', function (btn) {
            if (btn === 'yes') {
                store.remove(record);
                Ext.Msg.alert('Delete', 'Save the changes to persist the removed record.'); 
            }
        });
    },
    onButtonClickClearFilter: function (button, e, options) {
        button.up('staticdatagrid').filters.clearFilters();
    },
    onButtonClickCancel: function (button, e, options) {
        button.up('staticdatagrid').getStore().reload();
    },

    onButtonClickSave: function (button, e, options) {
       
        var grid = button.up('staticdatagrid'),
            store = grid.getStore(),
            errors = grid.validate();
        if (errors === undefined) {
            store.sync();
        } else {
            Ext.Msg.alert(errors);
        }

    },
    onEdit: function (editor, context, options) {
        context.record.set('lastUpdate', new Date());
    },
    onButtonClickAdd: function (button, e, options) {
        var grid = button.up('staticdatagrid'),
            store = grid.getStore(),
            modelName = store.getModel().getName(),
            cellEditing = grid.getPlugin('cellplugin');
        store.insert(0, Ext.create(modelName, {
            lastUpdate: new Date()
        }));
        cellEditing.startEditByPosition({ row: 0, column: 1 });
    }
})