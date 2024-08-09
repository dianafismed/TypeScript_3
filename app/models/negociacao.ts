export class Negociacao{

  constructor(
    //private _data: Date,
    public readonly data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ){}

  // get data(): Date{
  //   const data = new Date(this._data.getTime());
  //   console.log(data);
  //   return this.data;
  // }

  get volume(): number{
    return this.quantidade * this.valor;
  }

  // método que captura dados em formato string e transforma para o tipo correto
  public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ','));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, quantidade, valor);
  }

}
