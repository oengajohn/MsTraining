Ext.define('MsTraining.view.staticdata.BaseGrid', {
    extend: 'Ext.grid.GridPanel',
    xtype: 'staticdatagrid',
    controller: 'staticdatacontroller',
    columnLines: true,
    viewConfig: {
        stripeRows: true
    },
    initComponent: function () {
        console.log("am here");
        var me = this;
        me.selModel = {
            selType: 'cellmodel'
        };
        me.plugins = [
            {
                ptype: 'cellediting',
                clicksToEdit: 1,
                pluginId: 'cellplugin'
            },
            {
                ptype: 'gridfilters'
            }
        ];

        me.dockedItems = [
            {
                xtype: 'toolbar',
                dock: 'top',
                itemId: 'topToolbar',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'add',
                        text: 'Add',
                        iconCls: 'fas fa-plus',
                    },
                    {
                        xtype: 'tbseparator'
                    },
                    {
                        xtype: 'button',
                        itemId: 'save',
                        iconCls:'far fa-save',
                        text: 'Save Changes',
                    }, {
                        xtype: 'button',
                        itemId: 'cancel',
                        iconCls: 'fas fa-undo',
                        text: 'Cancel Changes',
                    },
                    {
                        xtype: 'tbseparator'
                    },
                    {
                        xtype: 'button',
                        itemId: 'clearFilter',
                        iconCls:'fas fa-filter',
                        text: 'Clear Filters',

                    }
                ]
            }
        ];

        me.columns = Ext.Array.merge(
            me.columns,
            [{
                xtype: 'datecolumn',
                text: 'Last Update',
                width: 150,
                dataIndex: 'lastUpdate',
                // format: 'Y-m-d\TH:i:s\Z',
                filter: true
            },
            {
                xtype: 'widgetcolumn', //#13
                width: 45,
                sortable: false, //#14
                menuDisabled: true, //#15
                itemId: 'delete',
                widget: {
                    xtype: 'button', //#16
                    iconCls: 'fa fa-thrash',
                    tooltip: 'Delete',
                    handler: 'onDeleteButtonClick'
                }
            }
            ]
        );
        me.validateRow = function (record, rowIndex) {
            var me = this,
                view = me.getView(),
                errors = record.validate();
            if (errors.isValid()) {
                return true;
            }
            var columnIndexes = me.getColumnIndexes();
            Ext.each(columnIndexes, function (columnIndex, col) {
                var cellErrors, cell, messages;
                cellErrors = errors.getByField(columnIndex);
                if (!Ext.isEmpty(cellErrors)) {
                    cell = view.getCellByPosition({
                        row: rowIndex, column: col
                    });
                    messages = [];
                    Ext.each(cellErrors, function (cellError) {

                        messages.push(cellError.message);
                    });
                    cell.addCls('x-form-error-msg x-form-invalid-icon xform-invalid-icon-default');
                    cell.set({
                        'data-errorqtip': Ext.String.format('<ul><li class="last">{0}</li></ul>',
                            messages.join('<br/>'))
                    });
                }
            });
            return false;
        };
        me.getColumnIndexes = function () {
            var me = this,
                columnIndexes = [];
            Ext.Array.each(me.columns, function (column) {
                if (Ext.isDefined(column.getEditor())) {
                    columnIndexes.push(column.dataIndex);
                } else {
                    columnIndexes.push(undefined);
                }
            });
            return columnIndexes;
        };
        me.validate = function () {
            var me = this,
                isValid = true,
                view = me.getView(),
                error,
                record;
            Ext.each(view.getNodes(), function (row, col) {
                record = view.getRecord(row);
                isValid = (me.validateRow(record, col) && isValid);
            }); error = isValid ? undefined : {
                title: "Invalid Records",
                message: "Please fix errors before saving."
            };
            return error;
        };

        me.callParent(arguments);
    }
});