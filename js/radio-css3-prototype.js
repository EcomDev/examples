$$("input[type=radio]").each(function(el){
    if (el.up("label")) {
        el.up("label").addClassName("custom-radio-label").down("input[type=radio]").insert({
            after: "<span class='custom-tick'></span>"
        });
    }
});