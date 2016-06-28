
Ext.define('SlideNavigation.view.PostsStory', {
    extend: 'Ext.Panel',
    alias: 'widget.postsstory',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        maxWidth: '',
        layout: 'fit',
        styleHtmlContent: true,
        cls: 'postStyle',
        scrollable: 'vertical',
        tpl: ['{story}']
    }

});