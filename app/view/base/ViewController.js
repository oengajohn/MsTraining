Ext.define('MsTraining.view.base.ViewController', {
    extend: 'Ext.app.ViewController',
    requires: [
        'MsTraining.util.Util',
    ],
     onAdd: function (button, e, options) { 
        this.createDialog(null);
    },
    onEdit: function (button) { 
        this.createDialog(button.getWidgetRecord());
    },
    onCancel: function (button, e, options) { 
        var me = this;
        me.dialog = Ext.destroy(me.dialog);
    },
    onDelete: function (button, e, options) { 
        var record = button.getWidgetRecord();
        Ext.Msg.show({
            title: 'Delete?',
            msg: 'Are you sure you want to delete?',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (buttonId) {
                if (buttonId == 'yes') {
                    record.drop();
                }
            }
        });
    },
    createDialog: function (record) {
        var me = this,
            view = me.getView();
        me.isEdit = !!record; 
        me.dialog = view.add({
            xtype: 'film-window',
            viewModel: { 
                data: { 
                    title: record ? 'Edit: ' + record.get('title') : 'Add Film',
                    iconCls: record ? 'edit' :  'add'
                },
                links: { 
                    currentFilm: record || { 
                        type: 'Film',
                        create: true
                    }
                }
            },
            session: true 
        }); me.dialog.show();

    },
    onSaveActors: function (button, e, options) {
        var me = this,
            value = me.lookupReference('comboActors').getValue(), 
            store = me.getStore('actors'),
            model = store.findRecord('actorId', value), 
            actorsGrid = me.lookupReference('actorsGrid'), 
            actorsStore = actorsGrid.getStore(); 
        if (model) {
            actorsStore.add(model); 
        }
        me.onCancelActors(); 
    },
    onCancelActors: function (button, e, options) {
        var me = this;
        me.searchActors = Ext.destroy(me.searchActors);
    },
    onSave: function (button, e, options) {
        var me = this,
            dialog = me.dialog,
            form = me.lookupReference('filmForm'),
            isEdit = me.isEdit,
            session = me.getSession(),
            id;
        if (form.isValid()) {
            if (!isEdit) {
                id = dialog.getViewModel().get('currentFilm').id;
            }
            dialog.getSession().save(); 
            if (!isEdit) {
                me.getStore('films').add(session.getRecord('Film',
                    id)); 
            }
            me.onCancel();
        } var batch = session.getSaveBatch(); 
        if (batch) {
            batch.start(); 
        }
    },
    /* viewSessionChanges: function () {
        var changes = this.getView().getSession().getChanges();
        if (changes !== null) {
            new Ext.window.Window({
                autoShow: true,
                title: 'Session Changes',
                modal: true,
                width: 600,
                height: 400,
                layout: 'fit',
                items: {
                    xtype: 'textarea',
                    value: JSON.stringify(changes, null, 4)
                }
            });
        } else {
            Ext.Msg.alert('No Changes', 'There are no changes to the session.');
        }
    } */
});