const menu = document.querySelector('.navigation');


const {children} = menu;

for (const path of children) {
    const {textContent, id} = path;

    path.addEventListener('click', () => {
        const currentPath = window.location.pathname;
        if(currentPath === id) return console.log('same path')
        window.location.assign(id);
    });
}