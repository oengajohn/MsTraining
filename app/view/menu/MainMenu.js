Ext.define('MsTraining.view.menu.MainMenu',{
    extend:'Ext.tree.Panel',
    xtype:'mainmenu',
    rootVisible: false,
   useArrows: true,
    store:{
        type:'menu'
    }
})