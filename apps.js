var typed = new Typed(".auto-type", {
    strings: ["I'm a Software Developer"," and also a UI/UX Designer", "Welcome to my Portfolio Website"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

// document.getElementById("contact").addEventListener("submit", function(event) {
//     event.preventDefault();
//     alert("Thank you for your message! I'll get back to you soon.");
//     document.getElementById("contact").reset();
// });

