//type LinkType = { link: string, text: string, active?: boolean }
interface LinkType { link: string, text: string, active?: boolean }

document.addEventListener('DOMContentLoaded', () => {
    const [ul] = document.getElementsByTagName('ul')
    const items: LinkType[] =
        [
            { link: '/home', text: 'Home', active: true },
            { link: '/about', text: 'About' }
        ]
    items.map(i => {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.innerText = i.text
        a.setAttribute('href', i.link)
        if (i.active)
            a.setAttribute('class', 'active')
        li.appendChild(a)
        return li
    }).forEach(li => ul.appendChild(li))
})