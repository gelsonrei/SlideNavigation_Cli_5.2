Ext.define('SlideNavigation.store.VideoFeeds', {
    extend: 'Ext.data.Store',

    requires: [
        'SlideNavigation.model.VideoFeed',
        'Ext.data.proxy.LocalStorage'
    ],

    config: {
        autoLoad: true,
        autoSync: true,
        model: 'SlideNavigation.model.VideoFeed',
        storeId: 'VideoFeeds',
        proxy: {
            type: 'localstorage',
            id: 'VideoFeeds'
        }
    }
});