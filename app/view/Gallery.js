Ext.define('SlideNavigation.view.Gallery', {
	extend: 'Ext.Container',
	xtype: 'gallery',
	requires : ['Ext.data.JsonP', 'SlideNavigation.view.GalleryCarousel'],
	config: {
			cls : 'gallery',
			scrollable : true,
			showNavigation : true,
			floatingCloseBtn : true,
			
			// Template to show the thumbnail images
			
				tpl : Ext.XTemplate([
                '<div class="demo-weather">',
                    '<tpl for=".">',
                        '<div class="photo day">',
                        //'<div class="gallery" id="photos">',
                           '<div class="date">{title}</div>',
                                '<img  id="image" class="thumbnail" src="{[this.getPhotoURL("s", values)]} " data-fullimage="{[this.getPhotoURL("n", values)]} ">',
                           '</div>',
                        //  '</div>',
                    '</tpl>',
                '</div>',
                {
                    getPhotoURL: function(size, values) { 
                        size = size || 's';
                        var url = 'http://farm' + values.farm + '.static.flickr.com/' + values.server + '/' + values.id + '_' + values.secret + '_' + size + '.jpg';
                        return url;
                    }
                }
            ]
			)
	},
	
	initialize : function(){
		var me = this;
		
		// Add tap event on the images to open the carousel
		me.element.on('tap', function(e, el){
			//console.log("tap ", el)
			me.showGalleryCarousel(el);												
		}, me, {
			delegate : 'img.thumbnail'
		});
		
		me.loadImages();
		me.callParent(arguments);
	},
	
	/**
		* Load the images and add them to the gallery container
		* Here is the point where you have to change the fetching mechanism 
		* say to get data with proxy and save in a Store.
		* Also, you may have to change the   
		*/
	loadImages : function(){
		var me = this;
		


		Ext.data.JsonP.request({
           
            url: 'https://api.flickr.com/services/rest/',
            callbackKey: 'jsoncallback',
            params: {
                method:'flickr.photos.search',
                api_key:'1fde7f50e3729b651ab2e4b832801eef',
                user_id:'64040686@N07',
                format:'json',
                nojsoncallback:1
            },

            
			success: function(response) {
				me.items = response.photos;
				//console.log(me.items);
				me.setData(response.photos.photo);
			}
			
        });

	},
	
	/**
	 * Show the gallery carousel with all the images
	 */
	showGalleryCarousel : function(clickedImage){
		var me = this,
		clickedImgIndex = 0,

		// Create the Gallery Carousel
		galleryCarousel = Ext.Viewport.add({
			xtype : 'gallerycarousel',
			totalCount : me.element.query('img.thumbnail').length
		});

		//console.log("showGalleryCarousel "+me.element.query('img.thumbnail').length);
		// Query all the images and save in an array
		me.images = me.images || me.element.query('img.thumbnail');
		
		// On clicking close icon, hide the carousel 
		// and destroy it after a certain perdiod
		galleryCarousel.element.on('tap', function(e, el){
			galleryCarousel.hide(true);
			
			Ext.defer(function(){
				Ext.Viewport.remove(galleryCarousel);
			}, 300);
		}, this, {
			delegate : 'div[data-action="close_carousel"]'
		});
		

		//console.log("clickedImage1", clickedImage, clickedImage.getElementsByTagName("img"));
		// Get the image index which is clicked
		/*while( (clickedImage = clickedImage.previousSibling) != null ) {
			console.log("clickedImage2", clickedImage,clickedImgIndex, clickedImage, clickedImage.previousSibling);
			clickedImgIndex++;
		}	*/

		//console.log(clickedImage.getAttribute('data-fullimage'));
		

		// Add the images as separate containers in the carousel
		for(var i=0; i<me.images.length; i++){
			galleryCarousel.add({
				xtype : 'container',
				html : '<img class="gallery-item" src="' + Ext.get(me.images[i]).getAttribute('data-fullimage') + '" />',
				//xtype:'pinchzoomimage',
				//src: Ext.get(me.images[i]).getAttribute('data-fullimage'),
				index : i + 1
			});

			if (clickedImage.getAttribute('data-fullimage')==Ext.get(me.images[i]).getAttribute('data-fullimage'))
				clickedImgIndex = i;
		}	



                    
                
                					
		
		// Set the clicked image container as the active item of the carousel
		galleryCarousel.setActiveItem(clickedImgIndex);
		
		// Show the carousel
		galleryCarousel.show();
	}
});
