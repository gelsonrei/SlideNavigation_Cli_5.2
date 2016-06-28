
Ext.define('SlideNavigation.view.DicasPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.dicaspanel',

    requires: [
        'SlideNavigation.view.DicasList',
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
                title: 'Dicas Container',
                iconCls: 'star',
                id: 'dicasTab',
                layout: 'fit',
                items: [
                    {
                        xtype: 'navigationview',
                        id: 'dicasNav',
                        useTitleForBackButtonText: true,
                        items: [
                            {
                                xtype: 'dicaslist',
                                title: 'Apps'
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