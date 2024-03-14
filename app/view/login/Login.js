Ext.define('MsTraining.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    requires: [
        'MsTraining.view.login.LoginController',
        'Ext.form.Panel',
        'MsTraining.util.Util'
    ],

    controller: 'login',
    bodyPadding: 10,
    title: 'Login Window',
    closable: false,
    autoShow: true,
    draggable: false,
    resizable: false,
    layout: 'fit',
    items: {
        xtype: 'form',
        reference: 'form',
        defaults: {
            afterLabelTextTpl: MsTraining.util.Util.required,
        }
        ,
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: translations.user,
            allowBlank: false
        },
        {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: translations.password ,
            // vtype:'customPass',
            allowBlank: false
        },
        {
            xtype:'datefield',
            fieldLabel:'Date'
        }
        ],
        buttons: [
            {
                xtype:'splitbutton',
                reference:'lng-btn',
                menu: {
                    xtype: 'menu', 
                    defaults:{
                        listeners: {
                            click: 'onMenuItemClick'
                        }
                    },
                    items: [
                        {
                            xtype: 'menuitem', 
                            iconCls: 'en',
                            text: 'English'
                        },
                        {
                            xtype: 'menuitem', 
                            iconCls: 'es',
                            text: 'Español'
                        },
                        {
                            xtype: 'menuitem', 
                            iconCls: 'pt_BR',
                            text: 'Português'
                        }
                    ]
                }
            }, 
            '->',
            {
            text: translations.login,
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }


})