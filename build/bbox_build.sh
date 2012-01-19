#!/bin/sh
python build.py -c closure bbox OpenLayers.js
python buildUncompressed.py bbox OpenLayers.pretty.js
