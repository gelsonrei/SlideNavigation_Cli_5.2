Ext.define('SlideNavigation.store.DicasFeeds', {
    extend: 'Ext.data.Store',

    requires: [
        'SlideNavigation.model.DicasFeed',
        'Ext.data.proxy.LocalStorage'
    ],

    config: {
        autoLoad: true,
        autoSync: true,
        model: 'SlideNavigation.model.DicasFeed',
        storeId: 'DicasFeeds',
        proxy: {
            type: 'localstorage',
            id: 'DicasFeeds'
        }
    }
});