Ext.define('SlideNavigation.store.Posts', {
    extend: 'Ext.data.Store',
    alias: 'store.posts',

    requires: [
        'SlideNavigation.model.Post',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    config: {
        model: 'SlideNavigation.model.Post',
        storeId: 'Posts',
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