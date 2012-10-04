document.observe("dom:loaded", function() {
    $$('.test span').each(function(el){
        el.observe('click', function(event){
            $('test-zone').select('label').each(function(elem){
                elem.writeAttribute("class", el.readAttribute('id'));
                if (el.readAttribute('id') == "none") {
                    elem.previous("input").writeAttribute("class", el.readAttribute('id'));
                } else {
                    elem.previous("input").writeAttribute("class", "");
                }
            });
        });
    });

    $$("#test-zone3 input[type=radio]").each(function(el){
        if (el.up("label")) {
            el.up("label").addClassName("custom-radio-label").down("input[type=radio]").insert({
                after: "<span class='custom-tick'></span>"
            });
        }
    });

    $('psd_example').observe('click', function(event){
        $('psd_example_show').toggle();
    });

});


/*
$(document).ready(function() {
    var custom_radio_label = $("#test-zone3 input[type=radio]").parent("label");
    custom_radio_label.addClass("custom-radio-label");
    $("<span class='custom-tick'></span>").insertAfter(custom_radio_label.children("input[type=radio]"));
});*/



