Ext.define('SlideNavigation.controller.DicasPosts', {
    extend: 'Ext.app.Controller',
    alias: 'controller.dicasposts',

    config: {
        models: [
            'DicasPost'
        ],
        stores: [
            'DicasPosts',
            'DicasFeed',
            'DicasFeeds'
        ],
        views: [
            'DicasList',
            'DicasStory'
        ],

        refs: {
            dicasNav: '#dicasNav',
            dicasList: '#dicasList'
        },

        control: {
            "dicaslist": {
                activate: 'onDicasListActivate',
                itemtap: 'onDicasListItemTap'
            }
        }
    },

    onDicasListActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        this.getApplication().fireEvent('dicasUpdateNav');
        console.log('dicaslist activate')
    },

    onDicasListItemTap: function(dataview, index, target, record, e, eOpts) {
        
        var story = Ext.create('widget.dicasstory',{
            title: record.get('title')
        });

        story.setData(record.data);
        this.getDicasNav().push(story);

    },

    launch: function() {
        this.loadPostsOnFeedLoad();
        if (device.platform=="iOS")
           Ext.getStore('DicasFeed').loadFeed('http://appsbiblioios.wordpress.com/feed/'); //ios
        else
            Ext.getStore('DicasFeed').loadFeed('https://appsbiblioandroid.wordpress.com/feed/'); //android
        console.log('dicas launch');
    },

    loadPostsOnFeedLoad: function() {
        var self = this;
        console.log("dicas loadPostsOnFeedLoad");
        Ext.getStore('DicasFeed').on('load', function(store, records) {
            var feed = records[0],
                posts, title, feedsStore;

            if (feed) {
                posts = feed.dicasposts().getData().items;
                title = feed.get('title');
                console.log(posts);//[0].data.link);
                
                
                 //gambiarra pra fazer as imagens não ultrapassarem as bordas da tela  
                for (i=0; i<posts.length; i++){
                    res = (posts[i].data.story);
                    var find = '<a href="https://';  //<a href="https://itunes.apple.com/
                    var re = new RegExp(find, 'g');
                    res = res.replace(re, '<a onclick="window.open(\'https://'); //<a onclick="window.open(\'https://bibliotecaucs.wordpress.com/\',\'_system\', \'location=yes\')" href="javascript:void(0)" <i class="fa fa-wordpress"></i></a></li> \

                    //find = '><img src="https://appsbiblioios';
                    
                    find = '"><img';
                    re = new RegExp(find, 'g');
                    res = res.replace(re, '\',\'_blank\', \'location=no\',\'closebuttoncaption=Voltar\')" href="javascript:void(0)"> <img');// src="https://appsbiblioios');
                    //system\', \'location=yes\')" href="javascript:void(0)"> <img src="https://appsbiblioios');// src="https://appsbiblioios');

                    posts[i].data.story = res;

                    console.log(posts[i].data.story);
                
                }//
            
                

               
                Ext.getStore('DicasPosts').setData(posts);
                
                //self.getPostsList().title = title;

            } else {
                //Ext.Msg.alert('Erro', 'Não foi possível carregar as Dicas. Verifique a URL.');
            }
        });

    },

    onUpdateNavDicas: function() {
        var self = this;
        console.log("posts onUpdateNavDicas");
        // ugly hack, so that this happens after title is internally set by back state stack
        /*
        Ext.defer(function(){
            var title = self.getPostsList().title;
            self.getDicasNav().getNavigationBar().setTitle(title);
        },500);
*/
    },

    init: function(application) {
        console.log("dicas init");
        application.on([
        { event: 'dicasUpdateNav', fn: this.onUpdateNavDicas, scope: this }
        ]);
    }

});