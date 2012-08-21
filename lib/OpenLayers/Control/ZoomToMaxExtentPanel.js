/**
 * @requires OpenLayers/Control/Panel.js
 * @requires OpenLayers/Control/ZoomToMaxExtent.js
 */

/**
 * Class: OpenLayers.Control.ZoomToMaxExtentPanel
 * The ZoomToMaxExtentPanel control is a wrapper for <OpenLayers.Control.ZoomToMaxExtent>.
 *
 * Note:
 * If you wish to use this class with the default images and you want
 *       it to look nice in ie6, you should add the following, conditionally
 *       added css stylesheet to your HTML file:
 *
 * (code)
 * <!--[if lte IE 6]>
 *   <link rel="stylesheet" href="../theme/default/ie6-style.css" type="text/css" />
 * <![endif]-->
 * (end)
 *
 * Inherits from:
 *  - <OpenLayers.Control.Panel>
 */
OpenLayers.Control.ZoomToMaxExtentPanel = OpenLayers.Class(OpenLayers.Control.Panel, {

    /**
     * Constructor: OpenLayers.Control.ZoomPanel
     * Add the three zoom control.
     *
     * Parameters:
     * options - {Object} An optional object whose properties will be used
     *     to extend the control.
     */
    initialize: function(options) {
        OpenLayers.Control.Panel.prototype.initialize.apply(this, [options]);
        this.addControls([
            new OpenLayers.Control.ZoomToMaxExtent()
        ]);
    },

    CLASS_NAME: "OpenLayers.Control.ZoomToMaxExtentPanel"
});
