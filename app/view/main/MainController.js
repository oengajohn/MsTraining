/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MsTraining.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    routes: {
        'home': 'onHomeRoute',
        'users|reviewpanel|mainlist|postgrid|todogrid': {
            action: 'onRoute',
            before: 'onBeforeRoute'
        },
        'users/:id': {
            action: 'onUserSelect',
            before: 'onBeforeUserSelect',
            conditions: {
                ':id': '([0-9]+)'
            }
        }
    },
    onUserSelect:function(id){
        //fire an event to select the record on the user grid
        this.getUserGrid().fireEvent('selectuser',id)
    },
    onBeforeUserSelect: function (id, action){
        var me = this,
            hash = 'users',
            mainMenu = me.getMainMenu();
        me.locateMenuItem(mainMenu, hash);

        //get reference to grid
        let grid = this.getUserGrid();

        //get store
        let store = grid.getStore()
        //find record with the id
        let record = store.findRecord('_id', id);
        if(record){
            action.resume()
              
        }else{
            action.stop()
        }
       

    }
,


    onHomeRoute: function () {
        let mainPanel = this.getMainPanel();
        if (mainPanel) {
            mainPanel.setActiveTab(0)
        }
    },
    onRoute: function () {
        var me = this,
            hash = Ext.util.History.getToken(),
            mainMenu = me.getMainMenu();
        me.locateMenuItem(mainMenu, hash);
    },
    onBeforeRoute: function (action) {
        var hash = Ext.util.History.getToken();

        //TODO: Make Ajax request to the server 
        //TODO: Check if the user has permissions to navigate to this path
        //TODO: on success => action.resume()
        //TODO: on failure => action.stop()

        var hasAccessToUsers = localStorage.getItem("hasAccessToUsers");
        if (hasAccessToUsers) {
            action.resume()
        } else {
            Ext.Msg.show({
                title: 'Failure',
                msg: 'You do not have permission to access: /' + hash,
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.ERROR
            });
            action.stop()
        }
    },
    locateMenuItem: function (mainMenu, className) {
        let rootNode = mainMenu.getRootNode();
        let record = rootNode.findChild('className', className, true);
        this.openTab(record)
        mainMenu.getSelectionModel().select(record)
    },

    onLogout: function () {

        // Remove the localStorage key/value
        localStorage.removeItem('MsAppLoggedIn');

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.widget('login');

    },
    getMainPanel: function () {
        return Ext.ComponentQuery.query('mainpanel')[0];
    },
    getUserGrid: function () {
        return Ext.ComponentQuery.query('usergrid')[0];
    },
    getMainMenu: function () {
        return Ext.ComponentQuery.query('mainmenu')[0];
    },
    onMainMenuItemClick: function (view, record, item, index, e, eOpts) {
        this.redirectTo(record.get('className'))
    },
    openTab: function (record) {
        if (record) {
            let mainPanel = this.getMainPanel();
            let activeTab = mainPanel.items.findBy((tabItem) => tabItem.title === record.get('text'));
            if (!activeTab && record.get('leaf')) {
                //create new tab using details from the record
                activeTab = mainPanel.add({
                    closable: true,
                    xtype: record.get('className'),
                    title: record.get('text'),
                    iconCls: record.get('iconCls')
                })
            }
            mainPanel.setActiveTab(activeTab)
        }
    }
});
