async function getCharacter(){
    const name = document.getElementById('name').value.toLowerCase();
    const transformation_name = `${name} ` + document.getElementById('transformation').value.toLowerCase();
    const data = await fetch(`https://dragonball-api.com/api/characters?limit=60`);
    const result = await data.json();
    const id = result.items.find(char => char.name.toLowerCase() === name).id;
    const characters = await fetch(`https://dragonball-api.com/api/characters/${id}`);
    const character = await characters.json(); 
    console.log(character);
    const paragraph = document.getElementById('description');
    paragraph.textContent = character.description;
    const transformation = character.transformations.find(tran => tran.name.toLowerCase() === transformation_name); 
    const image = document.getElementById('character-img');
    if(transformation){
        image.src = transformation.image;
    }else{
        image.src = character.image;
    }
    image.style.display = 'block';    
}




