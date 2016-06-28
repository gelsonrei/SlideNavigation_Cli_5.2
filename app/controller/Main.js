/**
 *  @class SlideNavigationExample.controller.Main
 *
 *  This {@link Ext.app.Controller} serves as a demonstration of how to
 *  listen to various events relating to a {@link Ext.ux.slidenavigation.View}.
 *
 */
Ext.define("SlideNavigation.controller.Main", {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            slideNav:                   'slidenavigationview',
            moviePosterListContainer:   'slidenavigationview container[title="Fotos"]'
           
        },

        control: {
            /**
             *  Here are examples of the various events you can listen for.
             */
            slideNav: {

                open: function(nav, position, duration) {
                    console.log('Container open (position='+position+',duration='+duration+')');
                    //Ext.getCmp('iframe').setHidden(true);
                    //var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
                },

                back: function(nav, position, duration) {
                    console.log('Container close (position='+position+',duration='+duration+')');
                    //Ext.getCmp('iframe').setHidden(false);
                },

                close: function(nav, position, duration) {
                    console.log('Container close (position='+position+',duration='+duration+')');
                    //Ext.getCmp('iframe').setHidden(false);
                },

                select: function(nav, item, index) {
                    console.log('Selected item (index='+index+')');
                },

                opened: function(nav) {
                    console.log('Container opened');

                  
                    if (Ext.getCmp('iframeIni')) Ext.getCmp('iframeIni').setHidden(true);
                    if (Ext.getCmp('iframeRes')) Ext.getCmp('iframeRes').setHidden(true);
                    if (Ext.getCmp('iframeCon')) Ext.getCmp('iframeCon').setHidden(true);
                    if (Ext.getCmp('iframeRen')) Ext.getCmp('iframeRen').setHidden(true);
                },

                closed: function(nav) {
                    console.log('Container closed');

                    if (Ext.getCmp('iframeIni')) Ext.getCmp('iframeIni').setHidden(false);
                    if (Ext.getCmp('iframeRes')) Ext.getCmp('iframeRes').setHidden(false);
                    if (Ext.getCmp('iframeCon')) Ext.getCmp('iframeCon').setHidden(false);
                    if (Ext.getCmp('iframeRen')) Ext.getCmp('iframeRen').setHidden(false);
                },

                slideend: function(nav) {
                    console.log('Container slideend');
                },

                slidestart: function(nav) {
                    console.log('Container slidestart');
                },

                dragstart: function(nav) {
                    console.log('Container dragstart');
                },

                dragend: function(nav) {
                    console.log('Container dragend');
                }
            },

            /**
             *  The 'activate' event fires on the container, not the child
             *  element.
             *
             */
            moviePosterListContainer: {
                activate: function(container) {
                    console.log('Activate moviePosterListContainer');
                }
            }
        }
    }
});