const heading1 = document.querySelector(".topic1");
const heading2 = document.querySelector(".topic2");
const heading3 = document.querySelector(".topic3");

// const handleClick = (dropdown, btnDesign) => {
//     const drops = ["dropdown1", "dropdown2", "dropdown3"]
//     const btns = ["btnDesign1", "btnDesign2", "btnDesign3"]
//     // console.log("Entered function")
//     for (let i = 0; i < drops.length; i++){
//         // console.log("Entered loop")
//         if (drops[i] === dropdown){
//             // console.log("Entered drop if")
//             if(drops[i] === "dropdown1"){
//                 document.querySelector(`.${dropdown}`).style.display = "flex";
//                 document.querySelector(`.dropdown1`).style.display = "flex";
//             }
//             document.querySelector(`.${dropdown}`).style.display = "block";
//         } else {
//             document.querySelector(`.${dropdown}`).setAttribute("style", "display: none !important");
//         }

//         if (btns[i] === btnDesign){
//             // console.log("Entered btn if")
//             document.querySelector(`.${btnDesign}`).style.display = "block";
//         } else {
//             document.querySelector(`.${btnDesign}`).setAttribute("style", "display: none !important");
//         }
//     }
// }

heading1.addEventListener("click", function (e) {
    e.stopPropagation();

    // handleClick("dropdown1", "btnDesign1")

    document.querySelector(".dropdown1").style.display = "flex";
    document.querySelector(".dropdown2").setAttribute("style", "display: none !important");
    document.querySelector(".dropdown3").setAttribute("style", "display: none !important");

    document.querySelector(".btnDesign1").style.display = "block";
    document.querySelector(".btnDesign2").setAttribute("style", "display: none !important");
    document.querySelector(".btnDesign3").setAttribute("style", "display: none !important");

});

heading2.addEventListener("click", function (e) {
    e.stopPropagation();

    document.querySelector(".dropdown1").setAttribute("style", "display: none !important");
    document.querySelector(".dropdown2").style.display = "block";
    document.querySelector(".dropdown3").setAttribute("style", "display: none !important");

    document.querySelector(".btnDesign1").setAttribute("style", "display: none !important");
    document.querySelector(".btnDesign2").style.display = "block";
    document.querySelector(".btnDesign3").setAttribute("style", "display: none !important");
});

heading3.addEventListener("click", function (e) {
    e.stopPropagation();

    document.querySelector(".dropdown1").setAttribute("style", "display: none !important");
    document.querySelector(".dropdown2").setAttribute("style", "display: none !important");
    document.querySelector(".dropdown3").style.display = "block";
;
    document.querySelector(".btnDesign1").setAttribute("style", "display: none !important");
    document.querySelector(".btnDesign2").setAttribute("style", "display: none !important");
    document.querySelector(".btnDesign3").style.display = "block";
});

window.addEventListener("click", function () {
    document.querySelector(".dropdown1").style.display = "none";
    document.querySelector(".dropdown2").style.display = "none";
    document.querySelector(".dropdown3").style.display = "none";

    document.querySelector(".btnDesign1").style.display = "none";
    document.querySelector(".btnDesign2").style.display = "none";
    document.querySelector(".btnDesign3").style.display = "none";
})


