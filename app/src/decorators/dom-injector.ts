export function domInjector(seletor: string){
  return function (
    target: any,
    propertyKey: string   // será o seletor do DOM
  ){
    console.log(`Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`);
    const getter = function(){
      const elemento = <HTMLInputElement> document.querySelector(seletor);
      console.log(`Buscando o elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`);
      return elemento
    }
    Object.defineProperty(target, propertyKey, {get: getter});
  }
}