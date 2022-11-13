function createMenuContainer(title){
    const cat = document.createElement("div")
    cat.classList.add("menu-container")
    const menuTitle = document.createElement("h2")
    menuTitle.innerText = title
    cat.id = title
    cat.append(menuTitle)
    return cat
}

function createMenuItems(itemType, itemName, itemPrice){
    const container = document.getElementById(itemType)
    const menuItem = document.createElement("div")
    menuItem.classList.add("menu-item")
    const productName = document.createElement("p")
    productName.innerText = itemName
    const productPrice = document.createElement("p")
    productPrice.innerText = itemPrice
    menuItem.append(productName, productPrice)
    container.append(menuItem)



}

export function loadMenu(){
    const content = document.getElementById("main-content")
    content.textContent = ""
    content.append(createMenuContainer("Fruits Drinks"))
    content.append(createMenuContainer("Milk Drinks"))
    content.append(createMenuContainer("Desserts"))

    const fruitDrinks = [
        createMenuItems("Fruits Drinks", "Passionfruit Green Tea", "6$"),
        createMenuItems("Fruits Drinks", "Kiwi Green Tea", "6$")
    ]

    const MilkDrinks = [
        createMenuItems("Milk Drinks", "Taro Milk Tea", "8$"),
        createMenuItems("Milk Drinks", "Matcha Milk Tea", "8$")
    ]

    const Desserts = [
        createMenuItems("Desserts", "Carrot Cake", "4.5$"),
        createMenuItems("Desserts", "Pancakes", "3$")
    ]


    // fruitDrinks.forEach((item) => {
    //     content.append(item)
    // })

    // console.log(content)

}