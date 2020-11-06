// Option 1
let projectImg = document.querySelectorAll(".project-img");
let projectPara = document.querySelectorAll(".project-p");
let projectSpan = document.querySelectorAll(".project-span");

for (let i = 0; i < projectImg.length; i++) {
    projectImg[i].addEventListener("mouseover", function() {
        projectSpan[i].style.visibility = "visible";
        projectSpan[i].style.visibility = "visible";
    });

    projectImg[i].addEventListener("mouseout", function() {
        projectSpan[i].style.visibility = "hidden";
        projectSpan[i].style.visibility = "hidden";
    });
}

for (let i = 0; i < projectImg.length; i++) {
    projectPara[i].addEventListener("mouseover", function() {
        projectSpan[i].style.visibility = "visible";
        projectSpan[i].style.visibility = "visible";
    });

    projectPara[i].addEventListener("mouseout", function() {
        projectSpan[i].style.visibility = "hidden";
        projectSpan[i].style.visibility = "hidden";
    });
}