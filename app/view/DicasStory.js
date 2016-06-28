
Ext.define('SlideNavigation.view.DicasStory', {
    extend: 'Ext.Panel',
    alias: 'widget.dicasstory',

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