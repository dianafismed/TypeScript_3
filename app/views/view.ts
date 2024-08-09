export abstract class View <T>{
  protected elemento: HTMLElement;
  private escapar = false;

  constructor(seletor: string, escapar?: boolean){
    const elemento = document.querySelector(seletor);

    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
    }

    // prevenindo códigos maliciosos
    if (escapar) {
      this.escapar = escapar;
    }
  }
  
  // este método será implementado na classe filha
  protected abstract template(model: T): string;

  public update(model: T): void{
    let template = this.template(model);
    // prevenindo códigos maliciosos
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }
    this.elemento.innerHTML = template;
  }

}