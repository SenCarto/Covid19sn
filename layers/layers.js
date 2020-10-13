var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CARTESENEGAL_1 = new ol.format.GeoJSON();
var features_CARTESENEGAL_1 = format_CARTESENEGAL_1.readFeatures(json_CARTESENEGAL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CARTESENEGAL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CARTESENEGAL_1.addFeatures(features_CARTESENEGAL_1);
var lyr_CARTESENEGAL_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CARTESENEGAL_1, 
                style: style_CARTESENEGAL_1,
                interactive: true,
    title: 'CARTE SENEGAL<br />\
    <img src="styles/legend/CARTESENEGAL_1_0.png" /> 1 - 29<br />\
    <img src="styles/legend/CARTESENEGAL_1_1.png" /> 29 - 99<br />\
    <img src="styles/legend/CARTESENEGAL_1_2.png" /> 99 - 299<br />\
    <img src="styles/legend/CARTESENEGAL_1_3.png" /> 299 - 599<br />\
    <img src="styles/legend/CARTESENEGAL_1_4.png" /> 599 - 3017<br />'
        });
var format_CENTROID_CARTE_SENEGAL_2 = new ol.format.GeoJSON();
var features_CENTROID_CARTE_SENEGAL_2 = format_CENTROID_CARTE_SENEGAL_2.readFeatures(json_CENTROID_CARTE_SENEGAL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CENTROID_CARTE_SENEGAL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROID_CARTE_SENEGAL_2.addFeatures(features_CENTROID_CARTE_SENEGAL_2);
var lyr_CENTROID_CARTE_SENEGAL_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CENTROID_CARTE_SENEGAL_2, 
                style: style_CENTROID_CARTE_SENEGAL_2,
                interactive: false,
    title: 'CENTROID_CARTE_SENEGAL<br />\
    <img src="styles/legend/CENTROID_CARTE_SENEGAL_2_0.png" /> 1 - 29<br />\
    <img src="styles/legend/CENTROID_CARTE_SENEGAL_2_1.png" /> 29 - 99<br />\
    <img src="styles/legend/CENTROID_CARTE_SENEGAL_2_2.png" /> 99 - 299<br />\
    <img src="styles/legend/CENTROID_CARTE_SENEGAL_2_3.png" /> 299 - 599<br />\
    <img src="styles/legend/CENTROID_CARTE_SENEGAL_2_4.png" /> 599 - 3000<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_CARTESENEGAL_1.setVisible(true);lyr_CENTROID_CARTE_SENEGAL_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_CARTESENEGAL_1,lyr_CENTROID_CARTE_SENEGAL_2];
lyr_CARTESENEGAL_1.set('fieldAliases', {'NOM': 'NOM', 'AREA': 'AREA', 'PERIMETRE': 'PERIMETRE', 'Code': 'Code', 'Population': 'Population', 'Cas_confir': 'Cas_confir', });
lyr_CENTROID_CARTE_SENEGAL_2.set('fieldAliases', {'NOM': 'NOM', 'AREA': 'AREA', 'PERIMETRE': 'PERIMETRE', 'Code': 'Code', 'Population': 'Population', 'Cas_confir': 'Cas_confir', });
lyr_CARTESENEGAL_1.set('fieldImages', {'NOM': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETRE': 'TextEdit', 'Code': 'TextEdit', 'Population': 'TextEdit', 'Cas_confir': 'TextEdit', });
lyr_CENTROID_CARTE_SENEGAL_2.set('fieldImages', {'NOM': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETRE': 'TextEdit', 'Code': 'TextEdit', 'Population': 'TextEdit', 'Cas_confir': 'TextEdit', });
lyr_CARTESENEGAL_1.set('fieldLabels', {'NOM': 'inline label', 'AREA': 'inline label', 'PERIMETRE': 'inline label', 'Code': 'inline label', 'Population': 'inline label', 'Cas_confir': 'inline label', });
lyr_CENTROID_CARTE_SENEGAL_2.set('fieldLabels', {'NOM': 'no label', 'AREA': 'no label', 'PERIMETRE': 'no label', 'Code': 'no label', 'Population': 'no label', 'Cas_confir': 'no label', });
lyr_CENTROID_CARTE_SENEGAL_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});