
function initMap() {
		var mapDiv = document.getElementById('map');
		var map = new google.maps.Map(mapDiv, {
				          center: {lat: 41.410463, lng: 2.175955},
				          zoom: 15,
				          minZoom:15,
				          maxZoom:15,

				          styles: [
				            {
				              featureType: 'all',
				              stylers: [
				                { saturation: -100 }
				              ]
				            },{
				              featureType: 'road.arterial',
				              elementType: 'geometry',
				              stylers: [
				                { hue: '#183d45' },
				                { saturation: 50 }
				              ]
				            },{
				              featureType: 'poi.business',
				              elementType: 'labels',
				              stylers: [
				                { visibility: 'off' }
				              ]
	            		}
	          			]
				     });

				    var marker = new google.maps.Marker({
		    			position: map.getCenter(),
		    			icon: {
		      			path: google.maps.SymbolPath.CIRCLE,
		      			scale: 12,
		      			strokeColor: '#183d45',
		      			fstrokeWeight: 5
		    			},
		    			draggable: false,
		    			map: map
		 				});
				    }
					function initialize() {

				      var stylesArray = [
				  	{	featureType: 'road',
				    	elementType: 'geometry',
				    	stylers: [
				     		 {hue: "#00d4ff"},
				      		 {saturation: '60'},
				     		 {lightness: '10'}]
				  	},
				  	{
					    featureType: 'road',
					    elementType: 'geometry',
					    stylers: [
					    {vivibility: "simplified"}]
					  	}
						];
					}

				