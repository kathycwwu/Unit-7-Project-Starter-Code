// $("button").click(function(){
//     let q1 = $(".one").val();
    
//     $(".fortune-display").text(q1);
// });

// $("button").click(function(){
//     let q2 = $(".two").val();
    
//     $(".fortune-display").text(q2);
// });

// $("button").click(function(){
//     let q4 = $(".four").val();
    
//     $(".fortune-display").text(q4);
// });

// $("button").click(function(){
//     let q3 = $(".three").val();
    
//     $(".fortune-display").text(q3);
// });


//$("fortune-display").text(" likes to ");

//console.log("q4");

$(".submit").click(function(){
    //let things = $(".to-pack-input").val();
    let q1 = $(".one").val();
    let q2 = $(".two").val();
    let q3 = $(".three").val();
    let q4 = $(".four").val();
    $(".fortune-display").append(q1 + " will " + q2 + " for " + q3*12 + " hours by " + "20" + 94 +".");
    
    
});