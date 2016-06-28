Ext.define('SlideNavigation.controller.VideoPosts', {
    extend: 'Ext.app.Controller',
    alias: 'controller.videoposts',

    config: {
        models: [
            'VideoPost'
        ],
        stores: [
            'VideoPosts',
            'VideoFeed',
            'VideoFeeds'
        ],
        views: [
            'VideoList'
            
        ],

        refs: {
            videosNav: '#videosNav',
            VideoList: '#VideoList'
        },

        control: {
            "videolist": {
                activate: 'onVideosListActivate',
                itemtap: 'onVideosListItemTap'
            }
        }
    },

    onVideosListActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        this.getApplication().fireEvent('videoUpdateNav');
        console.log('Videos postlist activate')
    },

    onVideosListItemTap: function(dataview, index, target, record, e, eOpts) {
                
        Ext.Msg.confirm('Link externo', 'Abrir vídeo no YouTube?', function(result){
            if (result == 'yes') {
                //window.location = record.get('link') + '&feature=player_embedded';
                window.open( record.get('link') + '&feature=player_embedded', '_blank', 'location=no,closebuttoncaption=Voltar'); 
            }
        });

        
    },

    launch: function() {
        this.loadVideosOnFeedLoad();
        //Ext.getStore('VideoFeed').loadFeed('http://www.youtube.com/rss/user/bibliotecasUCS/videos.rss');
        Ext.getStore('VideoFeed').loadFeed('https://www.youtube.com/feeds/videos.xml?channel_id=UCcLIR5Otjva0to5jdX9kN_Q');
        console.log('video launch');
    },

    loadVideosOnFeedLoad: function() {
        var self = this;
        console.log("loadVideosOnFeedLoad VideoPOsts");
        Ext.getStore('VideoFeed').on('load', function(store, records) {
            var feed = records[0],
                posts, title, feedsStore;

            //console.log(feed);

            if (feed) {
                posts = feed.videoposts().getData().items;
                title = feed.get('title');
                console.log(posts[0].data.link)
                
                Ext.getStore('VideoPosts').setData(posts);
                
                //self.getPostsList().title = title;

            } else {
                //Ext.Msg.alert('Erro', 'Não foi possível carregar os videos. Verifique a URL.');
            }
        });

    },

    onUpdateNavVideos: function() {
        console.log("onUpdateNav VideoPOsts");
        var self = this;
        // ugly hack, so that this happens after title is internally set by back state stack
        Ext.defer(function(){
            var title = 'Tutoriais';//self.getPostsList().title;
            self.getVideosNav().getNavigationBar().setTitle(title);
        },500);
    },

    init: function(application) {
        console.log("init VideoPOsts");
        application.on([
        { event: 'videoUpdateNav', fn: this.onUpdateNavVideos, scope: this }
        ]);
    }

});