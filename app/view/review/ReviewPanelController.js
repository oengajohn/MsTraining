Ext.define('MsTraining.view.review.ReviewPanelController',{
    extend:'Ext.app.ViewController',
    alias:'controller.reviewpanelcontroller',
    onSearchKeyValueChange: function (view, newValue, oldValue, eOpts){
        let me=this,
        v = me.getView(),
        vm = me.getViewModel(),
        refs = me.getReferences();

        let store = vm.getStore('dummyUsers');

        store.reload({
            params:{
                searchKey: newValue,
                // startDate: ,
                // endDate: ,
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
    }
})