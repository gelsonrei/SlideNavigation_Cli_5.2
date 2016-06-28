
Ext.define('SlideNavigation.view.FeedPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.feedpanel',

    requires: [
        'SlideNavigation.view.PostsList',
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
                title: 'Posts',
                iconCls: 'star',
                id: 'postsTab',
                layout: 'fit',
                items: [
                    {
                        xtype: 'navigationview',
                        id: 'postsNav',
                        useTitleForBackButtonText: true,
                        items: [
                            {
                                xtype: 'postslist',
                                title: 'Posts'
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