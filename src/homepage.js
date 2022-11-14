export function loadHome(){

    const content = document.getElementById("main-content")
    content.innerText = ""
    const presentation = document.createElement("p")
    presentation.id = "presentation"
    presentation.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis justo at nisi aliquet, et tempor nibh fermentum. Sed gravida ante ut metus aliquet, vitae tempor orci porta. In mollis malesuada erat vel ultricies. Ut non libero eleifend, imperdiet eros in, tincidunt turpis. In dictum rhoncus arcu, quis finibus turpis mattis et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue mauris ligula, id euismod metus pulvinar sit amet. Nam ullamcorper, sem accumsan euismod auctor, ante lorem commodo ex, et pretium massa lacus ut odio. Proin sit amet porttitor ligula. Pellentesque vel libero in eros tristique iaculis ac nec nisl. Praesent ornare metus odio, pretium consequat enim posuere in. Praesent in nisl aliquet mauris semper dictum vitae in sapien. Duis et placerat velit. Nulla facilisi. Quisque hendrerit neque ex, at vulputate turpis ultrices ut. Aenean cursus dolor vel lobortis cursus.

    Aenean nec dui eget nisi pretium porttitor. In tincidunt feugiat metus, vel rhoncus tortor feugiat vel. Donec vel erat nec metus facilisis aliquam. Cras tempus massa sed ex tincidunt sagittis. Morbi luctus nisi vitae enim fringilla sodales. Nulla facilisi. Donec elit purus, elementum id pharetra vitae, commodo vel purus. Suspendisse ut sapien at eros iaculis aliquam. Aenean nec mi nec mauris elementum convallis eget eu eros. Phasellus suscipit congue scelerisque. Mauris ac dapibus lacus.
    `
    content.append(presentation)

}

