var MixinButtonAPI = Base.extend({
    _disable: function(){
        if (this._isJquery){
            $('#' + this.htmlObject + ' button').attr('disabled', 'disabled');
        }
    },
    _enable: function(){
        if (this._isJquery){
            $('#' + this.htmlObject + ' button').removeAttr('disabled');
        }
    },
    _setLabel: function(label){
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
            return myself.triggerAction.apply(myself);
        });
        if (typeof this.buttonStyle === "undefined" || this.buttonStyle === "themeroller"){
            b.button();
            this._isJquery = true;
        } else {
            this._isJquery = false;
        }
        b.appendTo($("#"+ this.htmlObject).empty());
    }
});
