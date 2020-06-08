$('option').each(function() {
    if (this.selected)
        
        console.log('this option is selected');
});

$(".module").click(function(){
    if($(this).hasClass("collapse"))
    {
        $(this).removeClass("collapse");
    }
    else
    {
        //$(this).addClass("collapse");
    }
});