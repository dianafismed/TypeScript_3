export function logarTempoDeExecucao(){
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ){
    return descriptor;
  }
}



// Esqueleto de um decorator
// export function logarTempoDeExecucao(){
//   return function(
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ){
//     return descriptor;
//   }
// }