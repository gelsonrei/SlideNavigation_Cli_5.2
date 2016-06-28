
Ext.define('SlideNavigation.view.PostsList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.postslist',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        id: 'postsList',
        layout: 'fit',
        cls: 'postStyle',
        store: 'Posts',
       
        itemTpl: [  '{title}','' ]
    }

});