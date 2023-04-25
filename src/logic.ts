import { laborPrice } from "./data/laborPrice";
import { prices } from "./data/materialsPrice";

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

function loadMaterial(state: string, material: string): material {
    const ste = state as keyof typeof prices;      
    return { name: material, price: Object.entries(prices[ste]).find((item)=> item[0]===material)?.[1] as number}
}

function loadTile(material: material, mesure: number): tile {    
    return {mesure:mesure,material:material,price:material.price}
}

 function loadAverageLaborPrice(state: string) {
    const ste = state as keyof typeof prices; 
    return laborPrice[ste].average()
}

export function Calculate(material: string, dim: number, state: string) {
    
    const mat = loadMaterial(state, material);
     
    const tile = { mesure: 1, material: mat, price: 0 } as tile
    console.log(tile)
    const tiles:tile[] = []
    for (let index = 0; index < dim; index++) {        
       tiles.push(tile)
    }    
    mapMaterialPrice(...tiles)
    console.log(tilesSum(...tiles))
   
    return tilesSum(...tiles) + loadAverageLaborPrice(state)*dim
}