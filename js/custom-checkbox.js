CustomCheckbox = Class.create({
    initialize: function(path) {
        this.path = path;
        $$(this.path + " input[type=checkbox]").each(function(el){
            el.setStyle({display: 'none'});

            if (el.checked) {
                new Insertion.After(el, "<div class='checkbox__icon checkbox_enable'></div>");
            } else {
                new Insertion.After(el, "<div class='checkbox__icon'></div>");
            }
        });
        this.activate(false);
    },
    activate: function(status) {
        $$(this.path + " .checkbox__icon").each(function(el){
            el.observe('click', this.respondToClick.bind(this, el));
        }.bind(this));
    },
    respondToClick: function (el,event) {
        Element.toggleClassName(el, 'checkbox_enable');
        this.update(el);
    },
    checkCheckbox: function () {
        $$(this.path + " input[type=checkbox]").each(function(el){
            var icon = el.next(".checkbox__icon");

            if(el.checked==true) {
                if (!icon.hasClassName('checkbox_enable')) {
                    icon.toggleClassName('checkbox_enable');
                }
            } else {
                if (icon.hasClassName('checkbox_enable')) {
                    icon.toggleClassName('checkbox_enable');
                }
            }

            this.update(icon);
        }.bind(this));
    },
    update: function (el) {
        if(el.hasClassName('checkbox_enable')) {
            el.previous("input[type=checkbox]").checked=true;
        } else {
            el.previous("input[type=checkbox]").checked=false;
        }
    }
});
document.observe("dom:loaded", function() {
    var testCheckbox = new CustomCheckbox('.block-related');

    $$('.block-related .checkbox__icon').each(function(elem){
        Event.observe(elem, 'click', addRelatedToProduct)
    });

    $$(".block-related .block-content .block-subtitle a").each(function(el){
        el.observe('click', function() {
            testCheckbox.checkCheckbox();
        });
    });
});