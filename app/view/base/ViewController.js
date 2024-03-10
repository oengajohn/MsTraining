Ext.define('MsTraining.view.base.ViewController', {
    extend: 'Ext.app.ViewController',
    requires: [
        'MsTraining.util.Util',
    ],
     onAdd: function (button, e, options) { //#1
        this.createDialog(null);
    },
    onEdit: function (button) { //#2
        this.createDialog(button.getWidgetRecord());
    },
    onCancel: function (button, e, options) { //#3
        var me = this;
        me.dialog = Ext.destroy(me.dialog);
    },
    onDelete: function (button, e, options) { //#4
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
    }
});