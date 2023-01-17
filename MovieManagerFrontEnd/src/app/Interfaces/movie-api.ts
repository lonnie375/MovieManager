import { Result } from "./result";

export interface MovieApi {
    searchType: string; 
    expression: string; 
    results: Result[]; 
    errorMessage: string;
}
