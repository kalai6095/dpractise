define([
'dojo/_base/declare',
    'dijit/_widgetBase',
    'dijit/_OnDijitClickMixin',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/text!./First.html',
    'dijit/form/Button'
],function(
    declare,
    _widgetBase,
    _OnDijitClickMixin,
    _TemplatedMixin,
    _WidgetsInTemplateMixin,
    template
){
    return declare([_widgetBase,
        _OnDijitClickMixin,
        _TemplatedMixin,
        _WidgetsInTemplateMixin],{

        templateString:template,

    });

});