$(document).ready(function() {
    var custom_radio_label = $("input[type=radio]").parent("label");
    custom_radio_label.addClass("custom-radio-label");
    $("<span class='custom-tick'></span>").insertAfter(custom_radio_label.children("input[type=radio]"));
});