var GoogleMarkerBuilder=(function namespace(){
    function Init(map,contentBuilder){
        config.map=map;
        config.contentBuilder=contentBuilder;
    }
    Init.prototype.setMarker=function(info){
        var position=new google.maps.LatLng(info.lat,info.lng);
        var markerColor=config.iconColor[0];
        if(info.color!=undefined){
            config.iconColor.map(function(color){
                if(color==info.color){
                    markerColor=color;
                }
            });
        }
        var marker=new google.maps.Marker({
            position: position,
            map: config.map,
            icon:"http://www.google.com/mapfiles/ms/micons/"+markerColor+"-dot.png",
        });
        info.marker=marker;
        var infoOfWindow=getInfoWindow(position,info,config.contentBuilder);
        info.infoWindow=new google.maps.InfoWindow(infoOfWindow);
        google.maps.event.addDomListener(marker,"click",function(){
            info.infoWindow.open(config.map,this); //this for marker
        });
    }
    Init.prototype.setMarkers=function(infos){
        infos.map(function(info){
            Init.prototype.setMarker(info);
        });
    }
    function getInfoWindow(position,info,contentBuilder){
        var temp={};
        temp.position=position;
        temp.content=contentBuilder.call(this,info);
        return temp;
    }
    var config={
        map:null,
        contentBuilder:null,
        iconColor:[
            "blue",
            "yellow",
            "green",
            "ltblue",
            "orange",
            "pink",
            "purple",
            "red"
        ],
    };
    return Init;
}());