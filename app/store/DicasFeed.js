
Ext.define('SlideNavigation.store.DicasFeed', {
    extend: 'Ext.data.Store',
    alias: 'store.dicasfeed',

    requires: [
        'SlideNavigation.model.DicasFeed',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    config: {
        model: 'SlideNavigation.model.DicasFeed',
        storeId: 'DicasFeed',
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
        console.log('Loading dicasfeed');
        this.load({
            params:{
                q: feedUrl,
                cache:false,
                num: numPosts || 100
            }
        });

    }

});