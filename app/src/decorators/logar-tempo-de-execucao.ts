export function logarTempoDeExecucao(){
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ){
    const metodoOriginal = descriptor.value; // guarda o método original
    descriptor.value = function(...args: Array<any>){ // ou ...args: any []
      const t1 = performance.now();
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();
      console.log(`${propertyKey}, Tempo de execução: ${(t2 - t1)/1000} segundos`);
      retorno;
    };
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