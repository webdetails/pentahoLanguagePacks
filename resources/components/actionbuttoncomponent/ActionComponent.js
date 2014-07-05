/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
var HelpMixin = Base.extend({
    _docstring: function (){
        return "Mixin that provides documentation for the developer"; //brief description (always available)
        /**
         Use this block for providing more verbose information on this class.
         The comments in this._docstring will only be available if Dashboards.debug > 0.
         */
    },
    help: function (fun) {
        /**
         Prints the help text of a function.

         Arguments:
         fun -- The function (or alternatively an object with help defined)
         */
        /* TODO: Consider moving the code to Dashboards.help()

         It's nice because you can  extend it to do this (not always desired):

         var global = (function () { return this; })();
         Function.prototype.toString = function () { help(global[this.name]); }

         Then everytime you just type the function and hit enter you will get the documentation.
         Function.prototype.doc = function () { help(global[this.name]); }
         Would create a doc() method for all functions.﻿
         */
        var h0 = h = '';
        switch (typeof fun){
        case "string":
            if (fun) {
                h0 = (this.name + '.' + fun + ': ');
                fun = this[fun];
            } else {
                return this.help();
            }
            break;
        case "function":
            h0 =  fun.name ? (this.name + '.' + fun.name + ': ') : '';
            // Attempt to get the name using _.find(dir(this), fun)
            break;
        default:
            h0 =  (this.name + ': ' + this._docstring() + '\n') || "";
            fun = this._docstring;
        }

        var sf = new String(fun);
        //var matches = sf.match(/\/\*\*([\s\S]*)\*\//m);
        var matches = (sf.slice(0).split('/**', 2)[1] || "").split('*/', 1)[0];
        if (matches){
            // remove all whitespace cause by indenting the code
            h = _.map( matches.split('\n'),
                        function (s) {
                            return s.trim();
                        }
                      ).join('\n').trim();

        }
        h = (h.length>0) ? h :  "No help available";
        return Dashboards.log(h0 + h);
        if (!(fun instanceof Function)) {
            if (fun.help) {
                return Dashboards.log(fun.help);
            }
            return Dashboards.log("I can not help you with that topic.");
        }

        return Dashboards.log("I can not help you with that function.");
    }
});



var ActionComponent = ActionComponent || UnmanagedComponent.extend(new HelpMixin()).extend({
    _docstring: function (){
        return "Abstract class for components triggering a query on demand";
        /**
         Uses an UnmanagedComponent.synchronous() lifecycle.
         Methods/properties defined in CDE for all child classes:

         this.actionDefinition (datasource used to trigger the action)
         this.actionParameters (parameters to be passed to the datasource)
         this.successCallback(data)
         this.failureCallback()

         Each descendant is expected to override the following methods:
         - render()

         Quirks:
         - in this.actionParameters, static values should be quoted, in order to survive the "eval" in Dashboards.getParameterValue:

         */
    },
    update: function () {
        /**
         Entry-point of the component, manages the actions
         */
        var render = _.bind(this.render, this);
        if(typeof this.manageCallee == "undefined" || this.manageCallee) {
            this.synchronous(render);
        } else {
            render();
        }

    },
    render: function() {},
    triggerAction: function () {
        /**
         Call the endpoint, passing any parameters
         */
        var ad = this.actionDefinition,
            params = Dashboards.propertiesArrayToObject( this.actionParameters );

        var failureCallback =  (this.failureCallback) ?  (this.failureCallback) : function (){},
            successCallback = this.successCallback ?  (this.successCallback) : function (){};

        return Dashboards.getQuery(ad).fetchData(params, _.bind(successCallback, this), _.bind(failureCallback, this));
        if (Dashboards.debug) {
            Dashboards.log('ActionComponent.triggerAction('+ ad.pluginId + ', ' + ad.endpoint + ') was called', 'debug');
        }
    },
    hasAction: function(){
        /**
         Detect if the endpoint is defined
         */
        if ( ! this.actionDefinition){
            return false;
        }
        if (Dashboards.detectQueryType){
            return !! Dashboards.detectQueryType(this.actionDefinition);
        } else {
            return !! this.actionDefinition.queryType && Dashboards.hasQuery(this.actionDefinition.queryType);
        }

    }



});
