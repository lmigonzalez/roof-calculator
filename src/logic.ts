import { laborPrice } from "./data/laborPrice";
import { prices } from "./data/materialsPrice";
import { pric } from "./data/prices";

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

function loadMaterial(material: string, submaterial: string): material {
    const ste = material as keyof typeof pric;
    return { name: material, price: Object.entries(pric[ste]).find((item)=> item[0]===submaterial)?.[1] as number}
}

// function loadTile(material: material, mesure: number): tile {    
//     return {mesure:mesure,material:material,price:material.price}
// }

 function loadAverageLaborPrice(state: string) {
    const ste = state as keyof typeof prices; 
    return laborPrice[ste].average()
}

export function Calculate( value: {state: string,
    dimensions: string,
    roofMaterial: string,
    subMaterial: string,
    newGutters: string,
    oldRoof: string,
    stories: string,
    skylights: string,
    vents: string,
    dormers: string}) {
    
    const dim = parseFloat(value.dimensions);
    const old = parseFloat(value.oldRoof);
    const vent = parseFloat(value.vents);
    const sky = parseFloat(value.skylights);
    const dorm = parseFloat(value.dormers);
    const stor = parseFloat(value.stories); 
    const gutt = parseFloat(value.newGutters)

    const mat = loadMaterial(value.roofMaterial, value.subMaterial);    
    const tile = { mesure: 1, material: mat, price: 0 } as tile 
    const tiles:tile[] = []
    for (let index = 0; index < dim; index++) {        
       tiles.push(tile)
    }    
    
    mapMaterialPrice(...tiles)

    const result = (tilesSum(...tiles) + loadAverageLaborPrice(value.state)*dim + old*dim + vent*935 + gutt*10*Math.sqrt(dim) + sky*2500 + dorm*10000)*(stor===0?1:stor*(3 / 2))
    
    return result
}