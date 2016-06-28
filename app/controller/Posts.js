Ext.define('SlideNavigation.controller.Posts', {
    extend: 'Ext.app.Controller',
    alias: 'controller.posts',

    requires: ['Ext.util.DelayedTask','Ext.device.Device'],

    config: {
        models: [
            'Post'
        ],
        stores: [
            'Posts',
            'Feed',
            'Feeds'
        ],
        views: [
            'PostsList',
            'PostsStory'
        ],

        refs: {
            postsNav: '#postsNav',
            postsList: '#postsList'
        },

        control: {
            "postslist": {
                activate: 'onPostsListActivate',
                itemtap: 'onPostsListItemTap'
            }
        }
    },

    onPostsListActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        this.getApplication().fireEvent('updateNav');
        console.log('postlist activate')
    },

    onPostsListItemTap: function(dataview, index, target, record, e, eOpts) {
        
        var story = Ext.create('widget.postsstory',{
            title: record.get('title')
        });

        story.setData(record.data);
        this.getPostsNav().push(story);

    },

    launch: function() {
        this.loadPostsOnFeedLoad();
        Ext.getStore('Feed').loadFeed('http://bibliotecaucs.wordpress.com/feed/');
        console.log('posts launch');
    },

    loadPostsOnFeedLoad: function() {
        var self = this;
        console.log("posts loadPostsOnFeedLoad");
        Ext.getStore('Feed').on('load', function(store, records) {
            var feed = records[0],
                posts, title, feedsStore, res;

            if (feed) {
                posts = feed.posts().getData().items;
                title = feed.get('title');
                console.log(posts[0].data.link);
                

                //gambiarra pra fazer as imagens não ultrapassarem as bordas da tela  
                for (i=0; i<posts.length; i++){
                    res = (posts[i].data.story);
                    var find = 'width=';
                    var re = new RegExp(find, 'g');
                    res = res.replace(re, 'width="100%"');

                    find = 'height=';
                    re = new RegExp(find, 'g');
                    res = res.replace(re, 'height="100%"');
                    posts[i].data.story = res;
                
                }//

                Ext.getStore('Posts').setData(posts);
                
                //self.getPostsList().title = title;

            } else {
                //Ext.Msg.alert('Erro', 'Não foi possível carregar o Feed. Verifique a URL.');
            }
        });

    },

    onUpdateNav: function() {
        var self = this;
        console.log("posts onUpdateNav");
        // ugly hack, so that this happens after title is internally set by back state stack
        Ext.defer(function(){
            var title = 'Posts';//self.getPostsList().title;
            self.getPostsNav().getNavigationBar().setTitle(title);
        },500);
    },

    init: function(application) {
        console.log("posts init");
        application.on([
        { event: 'updateNav', fn: this.onUpdateNav, scope: this }
        ]);
    }

});