Ext.define("SlideNavigation.view.Main", {
    extend: 'Ext.ux.slidenavigation.View',
    
    requires: [
        'Ext.Container',
        'Ext.MessageBox',
        'Ext.Panel',
        'Ext.Toolbar',
        'Ext.event.publisher.Dom',
        'Ext.Map',
        'SlideNavigation.view.MyMap',
        'SlideNavigation.view.FeedPanel',

        'Ext.ux.PinchZoomImage'

    ],

    
    config: {
        fullscreen: true,

         
        /**
         *  Any component within the container with an 'x-toolbar' class
         *  will be draggable.  To disable draggin all together, set this
         *  to false.
         */
        slideSelector: 'x-toolbar',
        //slideSelector: false,
        

        /**
         *  Container must be dragged 10 pixels horizontally before allowing
         *  the underlying container to actually be dragged.
         *
         *  @since 0.2.2
         */
        //containerSlideDelay: 10,
        containerSlideDelay: -1, //não faz drag no container só pela tool bar
        
        /**
         *  Time in milliseconds to animate the closing of the container
         *  after an item has been clicked on in the list.
         */
        selectSlideDuration: 200,
        slideDuration : 200,

        /**
         *  Enable content masking when container is open.
         *
         *  @since 0.2.0
         */
        itemMask: true,

        /**
         *  Define the default slide button config.  Any item that has
         *  a `slideButton` value that is either `true` or a button config
         *  will use these values at the default.
         */
        slideButtonDefaults: {
            selector: 'toolbar'
        },
         
        /**
         *  This allows us to configure how the actual list container
         *  looks.  Here we've added a custom search field and have
         *  modified the width.
         */
        list: {
            maxDrag: 400,
            width: 200,

            id: 'xlist',
            cls:'myList',
            itemCls: 'myList',
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                height:60,
                ui: 'light',                    
                title: {
                    title: 'Menu',
                    //centered: true,
                    width: 200,
                    top: 20,
                    left: 0
                }
                
                /**
                 *  Here's an example of how to add a different type of
                 *  component into the toolbar of the list.
                 */
              
            }]
        },
        
        /**
         *  Change this to 'right' to dock the navigation list to the right.
         */
        listPosition: 'left',

        /**
         *  Example of how to re-order the groups.
         */
        groups: {
           
            //'.': 1,
            'Catálogo': 2,
            'Notícias & Dicas': 3,
            'Group 3': 4
        },
        
        /**
         *  These are the default values to apply to the items within the
         *  container.
         */
        defaults: {
            style: 'background: #fff',
            xtype: 'container'
        },
        
        items: [{
            title: 'Início',
            itemIcon: 'resources/icons/itemIcon/home.png',
            group: 'Catálogo',
            slideButton: true,
            items: [{
                xtype: 'toolbar',
                 title: {
                    title:  'UCS Biblioteca',
                    centered: true,
                    top: 20,
                    left: 60
                },
                //title: 'Bibliotecas UCS',
                height:60,
                docked: 'top'

            },{
                id: 'iframeIni',
                
               style: 'position: relative; min-height: 1px; padding: 1px;color: #fff;background-color: #fff; width: 100%; height:100%; overflow:auto; -webkit-overflow-scrolling : touch;',
               
                html: '<html manifest="" lang="en-US">\
                        <body>\
                          <div>\
                            <object id="object" height="700" width="100%" type="text/html" data="https://biblioteca.ucs.br/pergamum/mobile/consulta.php"></object>\
                          </div>\
                         </body>\
                      </html>'
               
            }
           
            ]


            /*
            slideButton: true,
            items: [{
                xtype: 'toolbar',
                title: 'Bibliotecas UCS',
                docked: 'top'
            },{
                xtype: 'panel',
                cls: 'backImgFull',
                maskOnOpen: true
            }]
            */
        },{
            title: 'Consulta',
            itemIcon: 'resources/icons/itemIcon/search.png',
            group: 'Catálogo',
            slideButton: true,
            items: [{
                xtype: 'toolbar',
                 title: {
                    title: 'Catálogo',
                    centered: true,
                    top: 20,
                    left: 60
                },
                height:60,
                docked: 'top'
            },{
                id: 'iframeCon',
                style: 'position: relative; min-height: 1px; padding: 1px;color: #fff;background-color: #fff; width: 100%; height:100%; overflow:auto; -webkit-overflow-scrolling : touch;',
               
                html: '<html manifest="" lang="en-US">\
                        <body>\
                         <div>\
                           <object id="object" height="700" width="100%" type="text/html" data="https://biblioteca.ucs.br/pergamum/mobile/consulta.php"></object>\
                         </div>\
                       </body>\
                      </html>'
               
            }
            ]
          
        },
        {
            title: 'Reserva',
            itemIcon: 'resources/icons/itemIcon/download.png',
            group: 'Catálogo',
            slideButton: true,
            items: [{
                xtype: 'toolbar',
                title: {
                    title: 'Catálogo',
                    centered: true,
                    top: 20,
                    left: 60
                },
                height:60,
                docked: 'top'
            },{
                id: 'iframeRes',
                style: 'position: relative; min-height: 1px; padding: 1px;color: #fff;background-color: #fff; width: 100%; height:100%; overflow:auto; -webkit-overflow-scrolling : touch;',
               
                html: '<html manifest="" lang="en-US">\
                        <body>\
                            <div>\
                             <object id="object" height="700" width="100%" type="text/html" data="https://biblioteca.ucs.br/pergamum/mobile/minhas_reservas.php"></object>\
                            </div>\
                        </body>\
                      </html>'
               
            }

            ]
        },
        {
            title: 'Renovação',
            itemIcon: 'resources/icons/itemIcon/history.png',
            group: 'Catálogo',
            slideButton: true,
            items: [{
                xtype: 'toolbar',
                title: {
                    title: 'Catálogo',
                    centered: true,
                    top: 20,
                    left: 60
                },
                height:60,
                docked: 'top'
            },{
                id: 'iframeRen',
                style: 'position: relative; min-height: 1px; padding: 1px;color: #fff;background-color: #fff; width: 100%; height:100%; overflow:auto; -webkit-overflow-scrolling : touch;',
               
                html: '<html manifest="" lang="en-US">\
                        <body>\
                          <div>\
                            <object id="object" height="700" width="100%" type="text/html" data="https://biblioteca.ucs.br/pergamum/mobile/renovacao.php"></object>\
                          </div>\
                        </body>\
                      </html>'
               
            }

            ]
        },
         {
            title: 'Notícias',
            itemIcon: 'resources/icons/itemIcon/feed.png',
            group: 'Notícias & Dicas',
            slideButton: true,
            items: [{
                xtype: 'toolbar',
                title: {
                    title: 'Notícias BICE',
                    centered: true,
                    top: 20,
                    left: 60
                },
                height:60,
                docked: 'top'
            },{
                xtype: 'feedpanel',
                layout: 'card',
                styleHtmlContent: true
            }]
        },{
            title: 'Tutoriais',
            itemIcon: 'resources/icons/itemIcon/youtube.png',
            group: 'Notícias & Dicas',
            slideButton: true,
            
            items: [{
                xtype: 'toolbar',
                title: {
                    title: 'Vídeos',
                    centered: true,
                    top: 20,
                    left: 60
                },
                height:60,
                docked: 'top'
            },{
                styleHtmlContent: true,
                xtype: 'videopanel',
                layout: 'card'
            }]
        },{
            title: 'Fotos',
            itemIcon: 'resources/icons/itemIcon/flickr.png',
            group: 'Notícias & Dicas',
            slideButton: true,
            
            items: [{
                xtype: 'toolbar',
                 title: {
                    title: 'Fotos Flickr',
                    centered: true,
                    top: 20,
                    left: 60
                },
                height:60,
                docked: 'top'
            },{
                styleHtmlContent: true,
                xtype: 'gallery',//fotopanel',
                layout: 'card'
            }]
        },/*
        {
            title: 'Zoom',
            itemIcon: 'resources/icons/itemIcon/info.png',
            group: 'Notícias & Dicas',
            slideButton: true,
            items: [{
                docked: 'top',
                xtype: 'toolbar',
                title: 'Pinch zoom image'
            },
            {
            layout:'fit',
                xtype:'pinchzoomimage',
                style:'background-color:#000',
                src:'resources/images/miniMap.jpg'
            }   
            ]
        },*/
        {
            title: 'Outras APPs',
            itemIcon: 'resources/icons/itemIcon/fire.png',
            group: 'Notícias & Dicas',
            slideButton: true,
            items: [{
                xtype: 'toolbar',
                 title: {
                    title: 'Dicas',
                    centered: true,
                    top: 20,
                    left: 60
                },
                height:60,
                docked: 'top'
            },{
                xtype: 'dicaspanel',
                layout: 'card',
                styleHtmlContent: true
               
            }]
        },
        {
            title: 'Localização',
            itemIcon: 'resources/icons/itemIcon/location.png',
            group: 'Fale Conosco',
            
            slideButton: true,
            items: [{
                xtype: 'toolbar',
                  title: {
                   title: 'Localização',
                    centered: true,
                    top: 20,
                    left: 60
                },
                height:60, 
                docked: 'top'
            }, {
                    xtype: 'mymap',
                    title: 'Mapa',
                    iconCls: 'maps'
                }]
        },{
            title: 'Contato',
            itemIcon: 'resources/icons/itemIcon/mail.png',
            group: 'Fale Conosco',
            slideButton: true,

            // Explicitly disable `slideButton` (this is the default)
            //slideButton: false,
            
            items: [{
                xtype: 'toolbar',
                 title: {
                     title: 'Contato',
                    centered: true,
                    top: 20,
                    left: 60
                },
                height:60,
                docked: 'top'
            },

           

            {
                /*scrollable: {
                    direction: 'vertical',
                    directionLock: false
                },*/
                //style: 'position: relative; min-height: 1px; padding: 1px;color: #fff;background-color: #fff; width: 100%; height:100%; overflow:auto; -webkit-overflow-scrolling : touch;',
                style: 'background-color: #122136; width: 100%; height:100%',
                html: '<html manifest="" lang="en-US">\
                       <body>\
                            <div class="widget-contact">\
                                <div class="home-section boxed-ligth-gray col-sm-6 col-md-6">\
                                    <br><h1>SISTEMA DE BIBLIOTECAS - UCS </h1>\
                                    <address>\
                                      <b>Universidade de Caxias do Sul</b><br>\
                                      Rua Francisco Getúlio Vargas, 1130<br>\
                                      Caxias do Sul - RS    CEP 95070-560<br><br>\
                                      <strong>Tel: </strong><a href="#" onclick="window.open(\'tel:5432182173\', \'_system\', \'location=yes\');">(+55) 54 3218 2173</a>  \
                                      <br>\
                                      <br><strong>Email: </strong>\
                                      <a href="mailto:bice@ucs.br">bice@ucs.br</a>\
                                      <br>\
                                    </address>\
                                </div>\
                               <address> \
                                <div class="home-section boxed-gray  col-sm-6 col-md-6">\
                                    <ul class="company-social"> \
                                        <strong> Estamos nas redes sociais <br></strong><br> \
                                        <li class="social-facebook"><a onclick="window.open(\'https://www.facebook.com/bibliotecaucs?sk=wall\',\'_blank\', \'location=no,closebuttoncaption=Voltar\')" href="javascript:void(0)" <i class="fa fa-facebook"></i></a></li> \
                                        <li class="social-twitter"><a onclick="window.open(\'https://twitter.com/bibliotecaucs\',\'_blank\', \'location=no,closebuttoncaption=Voltar\')" href="javascript:void(0)" <i class="fa fa-twitter"></i></a></li> \
                                        <li class="social-dribble"><a onclick="window.open(\'https://www.youtube.com/user/BibliotecasUCS\',\'_blank\', \'location=no,closebuttoncaption=Voltar\')" href="javascript:void(0)" <i class="fa fa-youtube"></i></a></li> \
                                        <li class="social-facebook"><a onclick="window.open(\'https://www.flickr.com/photos/bibliotecaucs/sets/\',\'_blank\', \'location=no,closebuttoncaption=Voltar\')" href="javascript:void(0)" <i class="fa fa-flickr"></i></a></li> \
                                        <li class="social-deviantart"><a onclick="window.open(\'https://instagram.com/bibliotecaucs/\',\'_blank\', \'location=no,closebuttoncaption=Voltar\')" href="javascript:void(0)" <i class="fa fa-instagram"></i></a></li> \
                                        <li class="social-vimeo"><a onclick="window.open(\'https://bibliotecaucs.wordpress.com/\',\'_blank\', \'location=no,closebuttoncaption=Voltar\')" href="javascript:void(0)" <i class="fa fa-wordpress"></i></a></li> \
                                    </ul> \
                                </div> \
                                </address>\
                                <div class="home-section boxed-ligth-gray col-xs-12 col-sm-6 col-md-6">\
                                  <div class="btn btn-default active"> \
                                      <style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class="embed-container"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.300124534516!2d-51.15099924999998!3d-29.161555249999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ebcef79f181af%3A0x27759526b600717b!2sBICE+-+Biblioteca+Central+UCS+-+Petr%C3%B3polis%2C+Caxias+do+Sul+-+RS!5e1!3m2!1spt-BR!2sbr!4v1426204884422" width="600" height="450" frameborder="0" style="border:0"></iframe></div></div>\
                                  </div>\
                                 </div>\
                            </div>\
                        </body></html>'
                //html: '<h1 <a href="#" onclick="window.open(\'tel:5434196222\', \'_system\', \'location=yes\');">Call Me</a> <br><br><br>  <a href="http://www.facebook.com/bibliotecaucs?sk=wall"><img class="alignnone size-full wp-image-8539" title="Facebook" src="resources/images/facebook.png" alt="" width="100%" height="100%" /></a>  <br><br><br> <a href="https://twitter.com/#!/bibliotecaucs"><img class="alignnone size-full wp-image-8541" title="Twitter" src="resources/images/twitter.png" alt="" width="100%" height="100%" /></a> <br><br><br> <a href="mailto:mvteixeira@ucs.br"><img class="alignnone size-full wp-image-8541" title="Email" src="resources/images/email.png" alt="" width="100%" height="100%" /></a> </div>'
                //html: '<h1<a Call Me href="mailto:abc@gmail.com" data-rel="external" /> </a>'

                //<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class="embed-container"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.300124534516!2d-51.15099924999998!3d-29.161555249999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ebcef79f181af%3A0x27759526b600717b!2sBICE+-+Biblioteca+Central+UCS+-+Petr%C3%B3polis%2C+Caxias+do+Sul+-+RS!5e1!3m2!1spt-BR!2sbr!4v1426204884422" width="600" height="450" frameborder="0" style="border:0"></iframe></div></div>\
            }]
        }]
    }
});


