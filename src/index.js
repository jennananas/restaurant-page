import { header } from "./header";
import { homepage, loadHome } from "./homepage";
import { footer } from "./footer";
import './style.css';


function init(){
    header()

    const content = document.getElementById("content")
    const mainContent = document.createElement("div")
    mainContent.id = "main-content"
    content.appendChild(mainContent)

    loadHome()
    
    footer()
}

init()

