let aboutOffset = $("#about").offset().top;
$(window).scroll(function () { 
    let wins= $(window).scrollTop();
    if(wins>aboutOffset-50){
        $("#navBar").css("background-color", "rgba(0, 0, 0, 0.7)"); 

    }
    else{
        $("#navBar").css("background-color", "transparent"); 
    }
});
$("a").click(function (e) { 
    let x=  $(e.target).attr('href');
    console.log(x)
    let aboutOffset = $(x).offset().top;
    console.log(aboutOffset)
    $("html,body").animate({scrollTop:aboutOffset}, 2000) 
});
