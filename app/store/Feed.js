
Ext.define('SlideNavigation.store.Feed', {
    extend: 'Ext.data.Store',
    alias: 'store.feed',

    requires: [
        'SlideNavigation.model.Feed',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    config: {
        model: 'SlideNavigation.model.Feed',
        storeId: 'Feed',
        proxy: {
            type: 'jsonp',
            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0',
            reader: {
                type: 'json',
                rootProperty: 'responseData.feed'
            }
        }
    },

    loadFeed: function(feedUrl, numPosts) {
        console.log('Loading feed');
        this.load({
            params:{
                q: feedUrl,
                num: numPosts || 100
            }
        });

    }

});