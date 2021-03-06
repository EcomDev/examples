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

    $$("#test-zone3 input[type=checkbox]").each(function(el){
        if (el.up("label")) {
            el.up("label").addClassName("custom-checkbox-label").down("input[type=checkbox]").insert({
                after: "<span class='custom-tick'></span>"
            });
        }
    });

    $('psd_example').observe('click', function(event){
        $('psd_example_show').toggle();
    });

});