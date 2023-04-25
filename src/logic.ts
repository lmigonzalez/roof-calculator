import { laborPrice } from "./data/laborPrice";
import { prices } from "./data/materialsPrice";

export function tilesSum(...tiles: tile[])
{
    return tiles.map((tiles)=>tiles.price).reduce((sum, price) => price + sum);
}

export interface material{
    name: string,
    price: number;
}

export interface tile{
    mesure: number, // respect m^2
    material: material,
    price:number,
}

export function mapMaterialPrice(...tiles: tile[])
{
    return tiles.map((tile)=> tile.price=tile.material.price*tile.mesure)
}

export function loadMaterial(state: string, material: string): material {
    const ste = state as keyof typeof prices;    
    return { name: material, price: Object.entries(prices[ste]).find((item)=> item[0]===material)?.[1] as number}
}

export function loadTile(material: material, mesure: number): tile {    
    return {mesure:mesure,material:material,price:material.price}
}

export function loadAverageLaborPrice(state: string) {
    const ste = state as keyof typeof prices;   
    return laborPrice[ste].average();
}