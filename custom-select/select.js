$$(".custom-select").each(function(el){
    el.setStyle({width:el.getWidth()+'px'});
    el.down('select').setStyle({width: el.getWidth() + 60 + 'px'});
});