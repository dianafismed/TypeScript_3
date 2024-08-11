export function domInjector(seletor: string){
  return function (
    target: any,
    propertyKey: string   // será o seletor do DOM
  ){
    // Assim que a classe eh carregada, esse decorator é acionado
    console.log(`Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`);

    let elemento: HTMLElement;

    // Preciso criar um getter para poder acessar a propriedade
    const getter = function(){
      // Caso o elemento já tenha sido buscado antes ele é retornado, caso contrario entra na condicao do if
      if(!elemento){
        elemento = <HTMLInputElement>document.querySelector(seletor);
        console.log(`Buscando o elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`);
      }
      return elemento;
    }

    Object.defineProperty(target, propertyKey, {get: getter});
    
  }
}