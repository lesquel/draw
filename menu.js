const clic = () =>{
    document.addEventListener("click", e =>{
        if (!e.target.matches(".btn_menu") && !e.target.matches(".close")) return false;

        if (e.target.matches(".btn_menu")) document.querySelector(".form").classList.add("formActivo")
        if (e.target.matches(".close")) document.querySelector(".form").classList.remove("formActivo")
    })
}
clic()