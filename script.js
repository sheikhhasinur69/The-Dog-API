

const loadDog = () =>{
    fetch('https://api.thedogapi.com/v1/breeds')
.then(res => res.json())
.then(data => displayDog(data))
}

const displayDog = (dogList) =>{
    const main = document.getElementById('main');
    const first10Data = dogList.slice(0,10);
    
    for(const dog of first10Data){
        const div = document.createElement('div');
        div.className = 'col-lg-4'
        div.innerHTML = `
        <img class="w-50" src="${dog.image.url}">
        <h2>Name: ${dog.name}</h2>
        <p>Life span: ${dog.life_span}</p>
        <p>Origin: ${dog.origin}</p>
        <p>Weight: ${dog.weight.imperial}</p>
        `
        main.appendChild(div)
    }
}