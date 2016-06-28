
Ext.define('SlideNavigation.view.VideoList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.videolist',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        id: 'videoList',
        layout: 'fit',
        cls: 'postStyle',
        store: 'VideoPosts',
       
        itemTpl: [  '{title}','' ]
    }

});