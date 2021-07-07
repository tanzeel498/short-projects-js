const panels = document.querySelectorAll(".panel");


function removePanelsActive(){
    panels.forEach(panel => {
        panel.classList.remove("active");
    });
}


panels.forEach(panel =>{
    panel.addEventListener('click', () =>{
        removePanelsActive();
        panel.classList.add("active");
    });
});


