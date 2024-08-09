export function inspect(){
  return function(
    target: any,
    propertykey: string,
    descriptor: PropertyDescriptor
  ){
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: any[]){
      console.log(`--- Método ${propertykey}`);
      console.log(`------ parâmetros ${JSON.stringify(args)}`);
      const retorno = metodoOriginal.apply(this, args);
      console.log(`------ retorno: ${JSON.stringify(args)}`);
      return retorno;
    };
    return descriptor;
  }
}

// ou dessa forma, caso a função não for receber nenhum parâmetro
// mas na chama dela eh usada a forma @inspect

// export function inspect (
//   target: any,
//   propertykey: string,
//   descriptor: PropertyDescriptor
// ){
//   const metodoOriginal = descriptor.value;
//   descriptor.value = function(...args: any[]){
//     console.log(`--- Método ${propertykey}`);
//     console.log(`------ parâmetros ${JSON.stringify(args)}`);
//     const retorno = metodoOriginal.apply(this, args);
//     console.log(`------ retorno: ${JSON.stringify(retorno)}`);
//     return retorno;
//   };
//   return descriptor;
// }