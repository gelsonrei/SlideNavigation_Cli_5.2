
Ext.define('SlideNavigation.view.FotoPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.fotopanel',

    requires: [
        'Ext.navigation.View',
        'Ext.dataview.List',
        'Ext.navigation.Bar',
        'Ext.Button',
        'Ext.tab.Bar'
    ],

    config: {
        styleHtmlContent: true,
        layout: 'fit',
        scrollable: true,
        items: 
        [{
            xtype: 'container',
            title: 'Fotos Flickr',
            iconCls: 'star',
            id: 'fotosTab',
            layout: 'fit',
            
            items: [{
                    xtype: 'panel',
                    id: 'fotolist',
                    scrollable: 'vertical'
            }]
        }],

        tabBar: {
            docked: 'bottom',
            hidden : true
        }
    }
  

});