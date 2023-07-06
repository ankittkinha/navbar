const heading1 = document.querySelector(".topic1");
const heading2 = document.querySelector(".topic2");
const heading3 = document.querySelector(".topic3");

heading1.addEventListener("click", function (e) {
    e.stopPropagation();

    document.querySelector(".dropdown1").style.display = "flex";
    document.querySelector(".dropdown2").setAttribute("style", "display: none !important");
    document.querySelector(".dropdown3").setAttribute("style", "display: none !important");

    document.querySelector(".btnDesign1").style.display = "block";
    document.querySelector(".btnDesign2").setAttribute("style", "display: none !important");
    document.querySelector(".btnDesign3").setAttribute("style", "display: none !important");

})

heading2.addEventListener("click", function (e) {
    e.stopPropagation();

    document.querySelector(".dropdown1").setAttribute("style", "display: none !important");
    document.querySelector(".dropdown2").style.display = "block"
    document.querySelector(".dropdown3").setAttribute("style", "display: none !important");

    document.querySelector(".btnDesign1").setAttribute("style", "display: none !important");
    document.querySelector(".btnDesign2").style.display = "block"
    document.querySelector(".btnDesign3").setAttribute("style", "display: none !important");
})

heading3.addEventListener("click", function (e) {
    e.stopPropagation();

    document.querySelector(".dropdown1").setAttribute("style", "display: none !important");
    document.querySelector(".dropdown2").setAttribute("style", "display: none !important");
    document.querySelector(".dropdown3").style.display = "block"

    document.querySelector(".btnDesign1").setAttribute("style", "display: none !important");
    document.querySelector(".btnDesign2").setAttribute("style", "display: none !important");
    document.querySelector(".btnDesign3").style.display = "block"
})

window.addEventListener("click", function () {
    document.querySelector(".dropdown1").style.display = "none";
    document.querySelector(".dropdown2").style.display = "none";
    document.querySelector(".dropdown3").style.display = "none";

    document.querySelector(".btnDesign1").style.display = "none";
    document.querySelector(".btnDesign2").style.display = "none";
    document.querySelector(".btnDesign3").style.display = "none";
})

// document.querySelector(".btnDesign1").addEventListener("click", function(){
//     console.log("button1 clicked")
// })


