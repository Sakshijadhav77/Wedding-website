
$(window).on("load",function(){
    $(".preloader").fadeOut(600);
})


$(window).on("load",function(){
    let slideIndex=$(".slide.active").index();
    const slideLen= $(".slide").length;

    function slideShow(){
        $(".slide").removeClass("active").eq(slideIndex).addClass("active");
        if(slideIndex==slideLen-1){
            slideIndex=0;
        }
        else{
            slideIndex++;
        }
        setTimeout(slideShow, 5000);
        }
    slideShow();
})

$(document).ready(function(){

    //nav toggle
    $(".hamburger-btn").click(function(){
        $(".header .nav").slideToggle();
    })
    $(".header .nav a").click(function(){
        if($(window).width()< 768){
        $(".header .nav").slideToggle();
        }
    })

    //fixed header
    $(window).scroll(function(){
        if($(this).scrollTop( )>100){
            $(".header").addClass("fixed");
        }
        else{
            $(".header").removeClass("fixed");
        }
    })

    //scrollIt
        $.scrollIt({
            topOffset: -50
        });
      

    //families filter
    familiesFilter($(".filter-btn.active").attr("data-target"))
    $(".filter-btn").click(function(){
    familiesFilter($(this).attr("data-target"))
    })
    function familiesFilter(target){
        console.log(target)
        $(".fliter-btn").removeClass("active");
        $(".filter-btn[data-target='"+target+"']").addClass("active");
        $(".families-item").hide();
        $(".families-item[data-category='"+target+"' ").fadeIn();
    }
})