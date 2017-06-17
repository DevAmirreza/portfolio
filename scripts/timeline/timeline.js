/**
 * Created by Amirreza on 17-Jun-2017.
 */


// Mouse over each point dispaly its corresponding line
$(".line > div").css({
    "visibility" : "hidden"
});


let elem = $(".point") ;



// elem.on("mouseover",(elem)=>{
//     let clsLine = "." + elem.target.id ;
//     console.log(clsLine) ;
//     $(clsLine + "> div").css({
//         "visibility":"visible",
//         "transition" : "1s"
//     }) ;
// }) ;
//
//
// elem.on("mouseout",(elem)=>{
//     let clsLine = "." + elem.target.id ;
//     console.log(clsLine) ;
//     $(clsLine + "> div").css({
//         "visibility":"hidden",
//         "transition" : "0.2s"
//     }) ;
// }) ;




counter = 0 ;
$(window).on("scroll" ,()=>{
    let scrollPos = $(window).scrollTop() ;
    console.log(scrollPos);
    console.log("=>>>>> " + counter)

    if(  scrollPos > 1050 &&  scrollPos < 1250 ){
        console.log("first triggered");
        $(".li-1 > div").css({
            "visibility":"visible",
            "transition" : "0.8s"
        }) ;
    }else if( scrollPos > 1250 &&  scrollPos < 1450) {

        console.log("second triggered");
        $(".li-2 > div").css({
            "visibility": "visible",
            "transition": "0.8s"
        });

    }else if( scrollPos > 1450 &&  scrollPos < 2000){

            console.log("second triggered");
            $(".li-3 > div").css({
                "visibility":"visible",
                "transition" : "0.2s"
            }) ;




    }else if(scrollPos < 500){
        $(".line > div").css({
            "visibility":"hidden",
            "transition" : "0.2s"
        }) ;
        counter = 0 ;
}



})






