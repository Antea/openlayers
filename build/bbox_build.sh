#!/bin/sh
python build.py -c jsmin bbox OpenLayers.js
python buildUncompressed.py bbox OpenLayers.pretty.js
mv OpenLayers.* ../../openlayers-vaadin-wrapper/src/main/resources/org/vaadin/vol/public/OpenLayers-2.12/
