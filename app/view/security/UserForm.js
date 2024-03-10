Ext.define('MsTraining.view.security.UserForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.user-form',
    height: 270,
    width: 600,
    requires: [
        'MsTraining.util.Util',
    ],
    layout: {
        type: 'fit'
    },
    bind: {
        title: '{title}'
    }, closable: false,
    modal: true,
    items: [
        {
            xtype: 'form',
            reference: 'form',
            bodyPadding: 5,
            modelValidation: true,
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'fieldset',
                    flex: 1, //#4
                    title: 'User Information',
                    layout: 'anchor', //#5
                    defaults: {
                        afterLabelTextTpl: MsTraining.util.Util.required, //#6anchor: '100%', //#7
                        xtype: 'textfield',
                        msgTarget: 'side',
                        labelWidth: 75,
                        anchor: '98%'
                    },
                    items: [
                        {
                            xtype: 'numberfield',
                            afterLabelTextTpl:'',
                            hidden:true,
                            readOnly:true,
                            name: 'id', //#8
                            fieldLabel: 'User ID',
                            bind: '{currentUser.id}' //#9
                        }, {
                            fieldLabel: 'Username',
                            name: 'username',
                            bind: '{currentUser.username}'
                        },
                        {
                            fieldLabel: 'Name',
                            name: 'name',
                            bind: '{currentUser.name}'
                        },
                        {
                            fieldLabel: 'Email',
                            name: 'email',
                            bind: '{currentUser.email}'
                        }, {
                            xtype: 'combo',
                            fieldLabel: 'Group',
                            displayField: 'name', //#10
                            valueField: 'id', //#11
                            queryMode: 'local', //#12
                            forceSelection: true, //#13
                            editable: false, //#14
                            name: 'groupId',
                            bind: {
                                value: '{currentUser.groupId}', //#15
                                store: '{groups}', //#16
                                selection: '{currentUser.group}' //#17
                            }
                        },
                        {
                            xtype: 'filefield',
                            fieldLabel: 'Photo',
                            name: 'picture',
                            buttonText: 'Select Photo...',
                            afterLabelTextTpl: '', //#18
                            listeners: {
                                change: 'onFileFieldChange' //#19
                            }
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Photo',
                    width: 200, 
                    layout: 'fit',
                    items: [{
                        xtype: 'image',
                        reference: 'userPicture', 
                        bind: {
                            src: 'http://localhost:8080/api/user/image/{currentUser.picture}'
                        }
                    }
                    ]
                }
            ],
            
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'footer',
            layout: {
                pack: 'end', //#22
                type: 'hbox'
            },
            items: [
                {
                    xtype: 'button',
                    text: 'Save',
                    iconCls:'fas fa-check',
                    listeners: {
                        click: 'onSave'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Cancel',
                    iconCls:'fas fa-undo',
                    listeners: {
                        click: 'onCancel'
                    }
                }
            ]
        }
    ]
});