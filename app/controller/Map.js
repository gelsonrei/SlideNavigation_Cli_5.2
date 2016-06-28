
Ext.require('Ext.device.Geolocation');
Ext.require('Ext.util.Geolocation');

var markers = Array();
function clearOverlays() {
  for (var i = 0; i < markers.length; i++ ) {
    markers[i].setMap(null);
  }
  markers.length = 0;
}


Ext.define('SlideNavigation.controller.Map', {
    extend: 'Ext.app.Controller',
    alias: 'controller.map',

    config: {
        views: [
            'MyMap'
        ],

        refs: {
            MyMap: {
                selector: '#map',
                xtype: 'mymap'
            }
        },

        control: {
            "map": {
                maprender: 'onMapMaprender',
                zoomchange: 'onMapZoomChange',
                activate: 'onMapActivate',
                deactivate: 'onMapDeactivate'
            }
        }
    },

    onMapMaprender: function(map, gmap, eOpts) {
 
    },



    onMapZoomChange: function(map, gmap, zoomLevel, eOpts) {
        //console.log(gmap.zoom);
        //console.log(map,gmap);
        map.useCurrentLocation= true;
    },

    onMapDeactivate: function(newActiveItem, container, oldActiveItem, eOpts) {
      console.log("deactivate");
      clearOverlays();
      console.log(markers);
    },

    onMapActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var map = newActiveItem.getMap();
        var bibLoc = [  [-29.1614093,-51.1515976],
                        //[-29.1626298,-51.1444686],
                        [-29.1920434,-51.2583581],
                        [-29.1479542,-51.5247858],
                        [-28.4891288,-50.9371157],
                        [-29.3656702,-50.8169188],
                        [-29.2121786,-51.3520666],
                        [-28.8333137,-51.8969198],
                        [-28.7802622,-51.6118122],
                        [-28.9386462,-51.5499615],
                        [-29.6165163,-51.3443324],
                        [-29.9959833,-51.2023486]


                     ];
        var bibNom = [  'Biblioteca Central - BICE',
                        //'Instituto de Biotecnologia - Bloco 57 - Cidade Universitária',
                        'Campus 8',
                        'Campus Universitário da Região dos Vinhedos',
                        'Campus Universitário de Vacaria',
                        'Campus Universitário da Região das Hortênsias',
                        'Campus Universitário de Farroupilha',
                        'Campus Universitário de Guaporé',
                        'Campus Universitário de Nova Prata',
                        'Núcleo Universitário de Veranópolis',
                        'Campus Universitário Vale do Caí',
                        'Polo EAD Porto Alegre'
                     ];


        var bibContent = [
        '<div id="content"> <font color="black">'+
          '<div id="siteNotice"> </div>'+
          '<h1 id="firstHeading" class="firstHeading">Biblioteca Central - BICE</h1>'+
          '<div align="left" id="bodyContent">'+
              //'<p>Situada na Cidade Universitária, em Caxias do Sul, ocupando um espaço de 4.532 m² de área construída,'+
              //' a Biblioteca Central dispõe de moderna infraestrutura associada às mais avançadas fontes de pesquisa, '+
              //'constituindo-se em importante suporte informacional às atividades acadêmicas de estudo e pesquisa, inerentes '+
              //'à própria missão da Universidade.</p>'+
              //'<p>O papel de gerenciamento do Sistema de Bibliotecas é realizado pela Biblioteca Central. Como um dos mais '+
              //'importantes órgãos de apoio às atividades acadêmicas, a Biblioteca Central é também um importante espaço '+
              //'acadêmico, que privilegia a informação e a cultura e por onde circulam diariamente cerca de 2 mil pessoas, '+
              //'em sua maioria alunos e professores.</p>'+
              '<p><b>Horário de atendimento</b> - De segunda a sexta, das 7h45min às 22h40min e aos sábados, das 7h45min às 19h.</p>'+
              '<p>Telefone: <a href="tel:5432899000">(54) 3218-2173</a> </p>'+
            '</div>'+
        '</font></div>',
        /*
        '<div id="content"><font color="black">'+
          '<div id="siteNotice"> </div>'+
          '<h1 id="firstHeading" class="firstHeading">Instituto de Biotecnologia - Bloco 57 - Cidade Universitária </h1>'+
          '<div align="left" id="bodyContent">'+
              '<p>Horário: De segunda a sexta-feira, das 8h às 11h30min e das 13h30min às 17h.</p>'+
              '<p>Telefone: <a href="tel:5432182670">(54) 3218-2670</a> </p>'+
              '<p>Acervo composto por mais de 8.300 exemplares</p>'+
            '</div>'+
        '</font></div>',*/

        '<div id="content"><font color="black">'+
          '<div id="siteNotice"> </div>'+
          '<h1 id="firstHeading" class="firstHeading">Campus 8 </h1>'+
          '<div id="bodyContent">'+
              '<p><b>Horário:</b> De segunda a sexta-feira, das 8h às 12h e das 13h às 22h20min.</p>'+
              '<p>Telefone: <a href="tel:5432899000">(54) 3289-9000</a> </p>'+
              '<p>Acervo composto por mais de 61.700 exemplares</p>'+
            '</div>'+
        '</font></div>',


        '<div id="content" ><font color="black" >'+
          '<div id="siteNotice"> </div>'+
          '<h1 id="firstHeading" class="firstHeading">Campus Universitário da Região dos Vinhedos </h1>'+
          '<div  id="bodyContent">'+
              '<p <b>Horário:</b> de segunda a sexta-feira das 7h45min às 11h25min e das 13h25min às 22h25min.<br> Aos sábados das 7h50min às 11h25min.</p>'+
              '<p Telefone: <a href="tel:5434495200">(54) 3449-5200</a> </p>'+
              '<p>Acervo composto por mais de 135.000 exemplares</p>'+
            '</div>'+
        '</font></div>',

        '<div id="content"><font align="left" color="black">'+
          '<div id="siteNotice"> </div>'+
          '<h1 id="firstHeading" class="firstHeading">Campus Universitário de Vacaria </h1>'+
          '<div align="left" id="bodyContent">'+
              '<p>Horário: de segunda a quinta-feira das 8h15min às 11h15min e das 13h15min às 22h30min.</p>'+ 
              '<p>Sexta-feira das 8h15min às 16h45min e das 18h às 22h30min.</p>'+ 
              '<p>Sábado das 8h15min às 11h15min. </p>'+
              '<p>Telefone: <a href="tel:5439085400">(54) 3908-5400</a> </p>'+
              '<p>Acervo composto por mais de 82.200 exemplares</p>'+
            '</div>'+
        '</font></div>',

        '<div id="content"><font color="black">'+
          '<div id="siteNotice"> </div>'+
          '<h1 id="firstHeading" class="firstHeading">Campus Universitário da Região das Hortênsias </h1>'+
          '<div id="bodyContent">'+
              '<p>Horário: de segunda a sexta-feira das 13h30min às 22h30min. Aos sábados das 9h às 11h.</p>'+
              '<p>Telefone: <a href="tel:5432825220">(54) 3282-5220</a> </p>'+
              '<p>Acervo composto por mais de 53.000 exemplares</p>'+
            '</div>'+
        '</font></div>',

        '<div id="content"><font color="black">'+
          '<div id="siteNotice"> </div>'+
          '<h1 id="firstHeading" class="firstHeading">Campus Universitário de Farroupilha </h1>'+
          '<div id="bodyContent">'+
              '<p>Horário: de segunda a sexta-feira das 13h30min às 17h e das 18h às 22h30min.</p>'+
              '<p>Telefone: <a href="tel:5432612922">(54) 3261-2922</a> </p>'+
              '<p>Acervo composto por mais de 39.400 exemplares</p>'+
            '</div>'+
        '</font></div>',

        '<div id="content"><font color="black">'+
          '<div id="siteNotice"> </div>'+
          '<h1 id="firstHeading" class="firstHeading">Campus Universitário de Guaporé </h1>'+
          '<div id="bodyContent">'+
              '<p>Horário: de segunda a sexta-feira das 13h30min às 16h30min e das 17h30min às 22h30min. </p>'+
              '<p>Telefone: <a href="tel:5434438400">(54) 3443-8400</a> </p>'+
              '<p>Acervo composto por mais de 35.600 exemplares</p>'+
            '</div>'+
        '</font></div>',

        '<div id="content"><font color="black">'+
          '<div id="siteNotice"> </div>'+
          '<h1 id="firstHeading" class="firstHeading">Campus Universitário de Nova Prata </h1>'+
          '<div id="bodyContent">'+
              '<p>Horário: de segunda a sexta-feira das 13h30min às 16h30min e das 17h30min às 22h30min</p>'+
              '<p>Telefone: <a href="tel:54242-1008">(54) 242-1008</a> </p>'+
              '<p>Acervo composto por mais de 23.500 exemplares</p>'+
            '</div>'+
        '</font></div>',

        '<div id="content"><font color="black">'+
          '<div id="siteNotice"> </div>'+
          '<h1 id="firstHeading" class="firstHeading">Núcleo Universitário de Veranópolis </h1>'+
          '<div id="bodyContent">'+
              '<p>Horário: de segunda a sexta-feira das 13h30min às 16h30min e das 17h30min às 22h30min.</p>'+
              '<p>Telefone: <a href="tel:5434411723">(54) 3441-1723</a> </p>'+
              '<p>Acervo composto por mais de 12.500 exemplares</p>'+
            '</div>'+
        '</font></div>',

        '<div id="content"><font color="black">'+
          '<div id="siteNotice"> </div>'+
          '<h1 id="firstHeading" class="firstHeading">Campus Universitário Vale do Caí</h1>'+
          '<div id="bodyContent">'+
              '<p>Horário: de segunda a sexta-feira das 13h30min às 17h30min e das 18h30min às 22h30min. </p>'+
              '<p>Telefone: <a href="tel:51 35361727">(51) 3536-1727</a> </p>'+
              '<p>Acervo composto por mais de 23.000 exemplares</p>'+
            '</div>'+
        '</font></div>',

        '<div id="content"><font color="black">'+
          '<div id="siteNotice"> </div>'+
          '<h1 id="firstHeading" class="firstHeading">Polo EAD Porto Alegre </h1>'+
          '<div id="bodyContent">'+
              '<p>Horário: de segunda a sexta-feira das 13h30min às 17h e das 18h às 22h30min.</p>'+
              '<p>Telefone: <a href="tel:5133622650">(51) 3362-2650</a> </p>'+
              '<p>Acervo composto por mais de 2.800 exemplares</p>'+
            '</div>'+
        '</font></div>'

        ];

        
        var infoWindows = Array();
        for (i = 0; i < bibLoc.length; i++) {  
          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(bibLoc[i][0],bibLoc[i][1]),
            map: map,
            title: bibNom[i],
            idx: i, 
            icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/blue-pushpin.png',
            animation: google.maps.Animation.DROP
          });

          var infoWindow = new google.maps.InfoWindow({
            content : bibContent[i]
          });
          infoWindows.push(infoWindow);
          markers.push(marker);

          google.maps.event.addListener(marker, 'click', function(event) {
            for (j = 0; j < infoWindows.length; j++){
                infoWindows[j].close();
                markers[j].setAnimation(null);
            }
            //map.setZoom(15);
            map.setCenter(markers[this.idx].getPosition());
            console.log(map.getCenter());
            markers[this.idx].setAnimation(google.maps.Animation.BOUNCE);
            infoWindows[this.idx].open(map, this);
          });
          
        }
       

        
        //console.log(bibMarkers);
        

        var contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
          '<div id="bodyContent">'+
          '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
          'sandstone rock formation in the southern part of the '+
          'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
          'south west of the nearest large town, Alice Springs; 450&#160;km '+
          '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
          'features of the Uluru - Kata Tjuta National Park. Uluru is '+
          'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
          'Aboriginal people of the area. It has many springs, waterholes, '+
          'rock caves and ancient paintings. Uluru is listed as a World '+
          'Heritage Site.</p>'+
          '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
          'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
          '(last visited June 22, 2009).</p>'+
          '</div>'+
          '</div>';

          var infowindow = new google.maps.InfoWindow({
              content: contentString
          });

/*
        // instantiate the Geocoder class
        var geocoder = new google.maps.Geocoder();

        // define a sample street address + zip
        var address = "Rua das Gardênias, 626, Caxias do Sul, RS";

        // Instantiate a "please wait" message
        Ext.Viewport.setMasked({xtype:'loadmask', message:'Please Wait...'});

        // geocode the address
        geocoder.geocode( { 'address': address }, function(results, status)
         {
          if (status == google.maps.GeocoderStatus.OK) {
            var lat=results[0].geometry.location.lat();
            var lng=results[0].geometry.location.lng();
            var marker = new google.maps.Marker({  // Build the marker
        		position: results[0].geometry.location,
        		map: map,
                title:"Casa do Gelson: Rua das Gardênias, 626, Caxias do Sul, RS",
                animation: google.maps.Animation.DROP
            });
            google.maps.event.addListener(marker, 'click', toggleBounce);
            map.setCenter(results[0].geometry.location);

            function toggleBounce() {

              map.setZoom(15);
              map.setCenter(marker.getPosition());

              if (marker.getAnimation() != null) {
                marker.setAnimation(null);
              } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
              }
              infowindow.open(map,marker);
            }
              
            //Ext.Msg.alert("Success!",lat + "," +lng);
          }

          // turn off please wait message
          Ext.Viewport.setMasked(false);
         });*/

      /*
       var geo = Ext.create('Ext.util.Geolocation', {
       autoUpdate: false,
       listeners: {
        locationupdate: function(geo) {
            var currentLat = geo.getLatitude();
            var currentLng =  geo.getLongitude();
            var altitude = geo.getAltitude();
            var speed = geo.getSpeed();
            var heading= geo.getHeading();
            
            var userLocation = new google.maps.LatLng(currentLat,currentLng);
            var userLocationMarker = new google.maps.Marker({
                position: userLocation,
                map: map,
                title: 'Eu',
                icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/yellow-dot.png',
                clickable: true
            });
            markers.push(userLocationMarker);
            map.setCenter(userLocation);
            //Ext.Msg.alert('Loc',userLocation);
        },
        locationerror: function(geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
           if(bTimeout)
             Ext.Msg.alert('Timeout occurred',"Could not get current position");
           else 
             alert('Error occurred.');
           }
        }
       });
       geo.updateLocation();
       */
     
       
         // Instantiate a "please wait" message
        //Ext.Viewport.setMasked({xtype:'loadmask', message:'Aguarde...'});
        
        Ext.device.Geolocation.getCurrentPosition({
            allowHighAccuracy: true,
            maximumAge: 0,
            success: function(position) {
                var lat = position.coords.latitude,
                    lon = position.coords.longitude;

                var userLocation = new google.maps.LatLng(lat,lon);

                var userLocationMarker = new google.maps.Marker({
                    position: userLocation,
                    map: map,
                    title: 'Eu',
                    icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/yellow-dot.png',
                    clickable: true
                });
                markers.push(userLocationMarker);

                map.setCenter(new google.maps.LatLng(-29.1614093,-51.1515976));
                 Ext.Viewport.setMasked(false);
                //Ext.Msg.alert('Loc',userLocation);
            },
            failure: function() {

                if (device.platform=="Android") // tava bugado no ios, tirei
                  Ext.Msg.alert('Ops','Não foi possível localizar você!');

                map.setCenter(new google.maps.LatLng(-29.1614093,-51.1515976));
                 Ext.Viewport.setMasked(false);
            }
        });

       map.setCenter(new google.maps.LatLng(bibLoc[0][0],bibLoc[0][1]));
       map.setZoom(10);
       console.log(map.getCenter());

    }

});