

const color=[
    {
        name:'pink',
        code:'#fb839e',
        url:'css/skins/pink.css'
    },
    {
        name:'yellow',
        code:'#f4ca16 ',
        url:'css/skins/blue.css'
    }
]

$(document).ready(function(){
    setColors();
    function setColors(){
        for(let i=0;i<color.length;i++){
            const span=document.createElement("span");
            span.style.backgroundColor=color[i].code;
            $(".colors").append(span);
        }
        }

        $(".colors span").click(function(){
            const index=$(this).index();
            $(".alternate-style").attr("href",color[index].url);
        });
        
        $(".theme-mode").change(function(){
            if($(this).val() == "light"){
                $("body").removeClass("dark")
            }
            else{
                $("body").addClass("dark")

            }
        })
        $(".s-toggle-btn").click(function(){
            $(".setting").toggleClass("open");
        })
})