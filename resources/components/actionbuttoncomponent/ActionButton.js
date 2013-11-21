var MixinButtonAPI = Base.extend({
    initButtonAPI : function(bool){
        bool = (bool == undefined) ? true : bool;
        this._isJquery = bool;
    },

    disable: function(){
        if (this._isJquery){
            $('#' + this.htmlObject + ' button').attr('disabled', 'disabled');
        }
    },
    enable: function(){
        if (this._isJquery){
            $('#' + this.htmlObject + ' button').removeAttr('disabled');
        }
    },
    setLabel: function(label){
       if (this._isJquery){
            $('#' + this.htmlObject + ' button').text(label.toString());
        }
    }
});


var ActionButtonComponent = ActionComponent.extend(new MixinButtonAPI()).extend({
    _docstring: function (){
        /**
         * Available methods:
         *   enable()/disable()
         *   setLabel()

         */
        return "Button Component that triggers a server action when clicked";
    },
    draw: function() {
        var myself = this,
            ad = this.actionDefinition;
        var b = $("<button type='button'/>").text(this.label).unbind("click").bind("click", function(){
            if ( _.isFunction(myself.expression) ){
                myself.expression.apply(myself, arguments);
            }
            if ( myself.hasAction()) {
                return myself.triggerAction.apply(myself);
            }
        });
        if (typeof this.buttonStyle === "undefined" || this.buttonStyle === "themeroller"){
            b.button();
            this.initButtonAPI(true);
        } else {
            this.initButtonAPI(false);
        }
        b.appendTo($("#"+ this.htmlObject).empty());
    }
});
