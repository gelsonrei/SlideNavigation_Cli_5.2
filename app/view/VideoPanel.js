
Ext.define('SlideNavigation.view.VideoPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.videopanel',

    requires: [
        'SlideNavigation.view.VideoList',
        'Ext.navigation.View',
        'Ext.dataview.List',
        'Ext.navigation.Bar',
        'Ext.Button',
        'Ext.tab.Bar'
    ],

    config: {
        styleHtmlContent: true,
        layout: 'fit',
        items: [
            {
                xtype: 'container',
                title: 'Vídeos',
                iconCls: 'star',
                id: 'videosTab',
                layout: 'fit',
                items: [
                    {
                        xtype: 'navigationview',
                        id: 'videosNav',
                        useTitleForBackButtonText: true,
                        items: [
                            {
                                xtype: 'videolist',
                                title: 'Vídeos'
                            }
                        ]
                    }
                ]
            }
            
          
        ],
        tabBar: {
            docked: 'bottom',
            hidden : true
        }
    }
  

});