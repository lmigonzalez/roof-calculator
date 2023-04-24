function tilesSum(...tiles: tile[])
{
    return tiles.map((tiles)=>tiles.price).reduce((sum, price) => price + sum);
}

interface material{
    name: string,
    price: number;
}
interface tile{
    mesure: number, // respect m^2
    material: material,
    price:number,
}

function mapMaterialPrice(...tiles: tile[])
{
    return tiles.map((tile)=> tile.price=tile.material.price*tile.mesure)
}

