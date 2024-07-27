async function test(){
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    const result = data.json();
    console.log(result.name);
}

    

test();