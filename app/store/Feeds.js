Ext.define('SlideNavigation.store.Feeds', {
    extend: 'Ext.data.Store',

    requires: [
        'SlideNavigation.model.Feed',
        'Ext.data.proxy.LocalStorage'
    ],

    config: {
        autoLoad: true,
        autoSync: true,
        model: 'SlideNavigation.model.Feed',
        storeId: 'Feeds',
        proxy: {
            type: 'localstorage',
            id: 'Feeds'
        }
    }
});