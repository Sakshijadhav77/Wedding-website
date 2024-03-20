

const color=[
    {
        name:'pink',
        code:'#ffc87c',
        url:'css/skins/pink.css'
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