export function logarTempoDeExecucao(emSegundos: Boolean = false){
  return function(
    target: any,
    propertyKey: string,  // nome do método
    descriptor: PropertyDescriptor
  ){
    const metodoOriginal = descriptor.value; // guarda o método original
    descriptor.value = function(...args: Array<any>){ // ou ...args: any []
      let divisor = 1;
      let unidade = 'milissegundos';
      if(emSegundos){
        divisor = 1000;
        unidade = 'segundos';
      }
      const t1 = performance.now();
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();
      console.log(`${propertyKey}, Tempo de execução: ${(t2 - t1)/divisor} ${unidade}`);
      return retorno;
    };
    return descriptor;
  }
}

