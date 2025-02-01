import { Indicator } from "./Indicator";
import { Subcomponent } from "./Subcomponent";

export interface LayoutDecisionPrinciple {
    subcomponents: Subcomponent[];
    indicators: Indicator[];
}