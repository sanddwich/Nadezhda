import PriceInterface from "./PriceInterface";
import ProgramElement from "./ProgramElement";

export default interface ProgramInterface {
  name: string
  images: string[]
  prices: PriceInterface[]
  programElements: ProgramElement[]
}