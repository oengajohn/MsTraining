/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MsTraining.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    control: {
        "menutree": {
            itemclick: 'onTreePanelItemClick'
        },
        "mainmenu": {
            render: 'renderDynamicMenu'
        }
    },
    getMainPanel:function(){
       return Ext.ComponentQuery.query('mainpanel')[0];
    },
    onTreePanelItemClick: function (view, record, item, index, event,options) { 
        var mainPanel = this.getMainPanel(); 
        var newTab = mainPanel.items.findBy(
            function (tab) {
                return tab.title === record.get('text'); 
            });
        if (!newTab) { 
            newTab = mainPanel.add({
                xtype: record.get('className'), 
                closable: true, 
                iconCls: record.get('iconCls'), 
                title: record.get('text') 
            });
        }
        mainPanel.setActiveTab(newTab); 
    },
    renderDynamicMenu: function (view, options) {
        let dynamicMenus = [];
        let menuStore = Ext.create('MsTraining.store.Menu');
        menuStore.load(function (records, op, success) {
            Ext.each(records, function (root) {
                let menu = Ext.create('MsTraining.view.menu.Tree', {
                    title: root.get('text'),
                    iconCls: root.get('iconCls')
                }); 
                let treeNodeStore = root.items(),
                    nodes = [],
                    item;
                for (let i = 0; i < treeNodeStore.getCount(); i++) {
                    item = treeNodeStore.getAt(i);
                    nodes.push({
                        text: item.get('text'),
                        leaf: true,
                        iconCls: item.get('iconCls'),
                        id: item.get('id'),
                        className: item.get('className')
                    });
                }
                menu.getRootNode().appendChild(nodes);
                dynamicMenus.push(menu);
            });
            view.add(dynamicMenus);

        })

    }
});
