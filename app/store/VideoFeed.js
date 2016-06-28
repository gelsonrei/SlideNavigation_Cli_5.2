Ext.define('SlideNavigation.store.VideoFeed', {
    extend: 'Ext.data.Store',
    alias: 'store.videofeed',

    requires: [
        'SlideNavigation.model.VideoFeed',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    config: {
        model: 'SlideNavigation.model.VideoFeed',
        storeId: 'VideoFeed',
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
        console.log('Loading videofeed');
        this.load({
            params:{
                q: feedUrl,
                num: numPosts || 100
            }
        });

    }

});