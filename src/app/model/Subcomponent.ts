import { Indicator } from "./Indicator";

export interface Subcomponent {
    id: number;
    header: string;    
    indicators: Indicator[];
}