import { Moviecategory } from "./moviecategory";

export interface Movie {
    id: number; 
    auth0Id: string; 
    imdbId: string;
    title: string; 
    category: Moviecategory; 
   
}
