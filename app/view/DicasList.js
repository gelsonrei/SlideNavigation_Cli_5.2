
Ext.define('SlideNavigation.view.DicasList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.dicaslist',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        id: 'dicasList',
        layout: 'fit',
        cls: 'postStyle',
        store: 'DicasPosts',
       
        itemTpl: [  '{title}','' ]
    }

});