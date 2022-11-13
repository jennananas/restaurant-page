export function footer(){

    const footer = document.createElement("footer")
    const sources = document.createElement("p")
    sources.innerHTML = `Background image by <a href="https://unsplash.com/@filipbaotic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Filip Baotić</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    `
    const content = document.getElementById("content")

    footer.appendChild(sources)
    content.appendChild(footer)
}