var anim = document.querySelector("h1");
anim.animate([
    {transform: 'translateY(0em)'},
    {transform: 'translateY(-5em)'}
],{
    duration:3000,
    direction : "alternate",
    iterations:2,

});
function about(){
var anim1 = document.querySelector("#about");
anim1.animate([
    {transform: 'translateY(0em)'},
    {transform: 'translateY(-5em)'}
],{
    duration:1500,
    direction : "alternate",
    iterations:2,

})};

function education(){
    var anim1 = document.querySelector("#education");
    anim1.animate([
        {transform: 'translateY(0em)'},
        {transform: 'translateY(-5em)'}
    ],{
        duration:1500,
        direction : "alternate",
        iterations:2,
    
    })};

    function work(){
        var anim1 = document.querySelector("#work");
        anim1.animate([
            {transform: 'translateY(0em)'},
            {transform: 'translateY(-5em)'}
        ],{
            duration:1500,
            direction : "alternate",
            iterations:2,
        
        })};

        function skills(){
            var anim1 = document.querySelector("#skills");
            anim1.animate([
                {transform: 'translateY(0em)'},
                {transform: 'translateY(-5em)'}
            ],{
                duration:1500,
                direction : "alternate",
                iterations:2,
            
            })};