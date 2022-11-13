import icon from './assets/images/panda.png'
import { loadHome } from './homepage'
import { loadMenu } from './menu'

export function header(){


    const header = document.createElement("header")
    const titles = document.createElement("div")
    titles.id = "titles"
    const logo = new Image()
    logo.src = icon
    logo.alt = "Logo"
    const restoName = document.createElement("h1")
    restoName.innerText = "Bobaland"
    const headline = document.createElement("h2")
    headline.innerText = "Every boba you dreamt of"

    titles.append(logo, restoName, headline)

    const nav = document.createElement("div")
    nav.id = "nav"
    const navList = document.createElement("ul")
    const homeLink = document.createElement("li")
    homeLink.innerHTML = `Home`
    homeLink.onclick = loadHome
    const menuLink = document.createElement("li")
    menuLink.innerHTML = `Menu`
    menuLink.onclick = loadMenu
    const contactLink = document.createElement("li")
    contactLink.innerHTML = `Contact`

    navList.append(homeLink, menuLink, contactLink)
    nav.appendChild(navList)
    
    header.append(titles, nav)

    const content = document.getElementById("content")
    content.appendChild(header)
    
}
