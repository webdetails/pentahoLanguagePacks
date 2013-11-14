var MixinButtonAPI = Base.extend({
    initButtonAPI : function(bool){
        this._isJquery = true;
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
        return "Button Component that triggers a server action when clicked";
    },
    draw: function() {
        var myself = this;
        var b = $("<button type='button'/>").text(this.label).unbind("click").bind("click", function(){
            if ( myself.expression ){
                myself.expression.apply(myself, arguments);
            }
            if ( Dashboards.hasQuery(ad) ) {
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
