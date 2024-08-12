import { Imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel.js";

export interface Modelo <T> extends Imprimivel, Comparavel<T>{
  // cria um atalho para todas as outras interfaces a serem implementadas
}