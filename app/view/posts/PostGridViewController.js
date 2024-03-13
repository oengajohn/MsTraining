Ext.define('MsTraining.view.posts.PostGridViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.postgridviewcontroller',
    mixins: ['MsTraining.mixin.GridMixin'],
    init:function(){
        Ext.getStore('users').load()
    },

    onAddPostClicked: function (btn, e, eOpts) {
        console.log(btn.getText() + " was clicked");
        // Ext.create("MsTraining.view.demo.CustomWindow");
        var wd = Ext.create({
            xtype: "postformwindow",
        });
        wd.show();
    },
    onFormFieldsClicked: function (btn, e, eOpts) {
        Ext.create({
            xtype: "formfieldsdemo",
        });
    },
    onVTypesClicked: function (btn, e, eOpts) {
        Ext.create({
            xtype: "formfieldvtypevalidation",
        });
    },
    onLayoutsClicked: function (btn, e, eOpts) {
        Ext.create({
            xtype: "checkoutform",
        });
    },
    onEditClicked: function (btn, e, eOpts) {

    },
    onDeleteClicked: function (btn, e, eOpts) {
        let me = this;
        let record = this.getSelectedRecordByXType('postgrid');
        let grid = me.getView()
        if (record) {
            let recordId = record.get('_id');
            Ext.Msg.confirm('Delete Operation', `Are you sure you want to delete the post with id ${recordId}`, function (btn, text) {
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url: `http://localhost:3000/posts/${recordId}`,
                        method: 'DELETE',
                        success: function (response, opts) {
                            var obj = Ext.decode(response.responseText);
                            me.showToast("Operation successful")
                            grid.getStore().reload()
                        },

                        failure: function (response, opts) {
                            console.log('server-side failure with status code ' + response.status);
                        }
                    });
                } else {
                    Ext.Msg.alert('Cancellation', 'Alright. Thank you!!!');
                }
            });

        }
    },
    onSearchKeyValueChange: function (view, newValue, oldValue, eOpts) {
        let me = this,
            v = me.getView(),
            vm = me.getViewModel(),
            refs = me.getReferences();

        let store = v.getStore();

        store.reload({
            params: {
                userId: newValue,

            }
        })
        /*   console.log();
          if(newValue === ''){
              store.reload()
          }else{
              let newStore = store.filterBy((record) => record.get('username').includes(newValue))
              vm.set("dummyUsers", newStore)
          }
        */
    },
    onUserSelectionChange: function (combo, newValue, oldValue, eOpts) {
        this.filterPosts(newValue)
    },
    onUserSelected: function (combo, record, eOpts) {
        this.filterPosts(combo.getValue())
    },
    filterPosts: function (newValue){
        let me = this,
            v = me.getView(),
            vm = me.getViewModel(),
            refs = me.getReferences();

        let store = v.getStore();

        store.reload({
            params: {
                userId: newValue,

            }
        })
    }

})