Ext.define('SlideNavigation.store.VideoPosts', {
    extend: 'Ext.data.Store',
    alias: 'store.videoposts',

    requires: [
        'SlideNavigation.model.VideoPost',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    config: {
        model: 'SlideNavigation.model.VideoPost',
        storeId: 'VideoPosts',
        proxy: {
            type: 'jsonp',
            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0',
            reader: {
                type: 'json',
                rootProperty: 'responseData.feed.entries'
            }
        }
    },

    loadPosts: function(feedUrl, numPosts) {
        this.load({
            params:{
                q: feedUrl,
                num: numPosts || 100
            }
        });

    }

});