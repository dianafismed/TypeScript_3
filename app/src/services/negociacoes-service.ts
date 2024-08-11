import { NegociacaoDoDia } from "../interfaces/negociacao-do-dia";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService{

  public obterNegociacoesDoDia(): Promise<Negociacao[]> {
    return fetch('http://localhost:8080/dados')    // fiz uma requisicao
            .then(res => res.json())  // recebi os dados e transformei em json
            .then((dados: NegociacaoDoDia[]) =>{  // recebi um array do tipo negociacao_do-dia
              return dados.map(dadoDeHoje => {
                // retorna um array em que cada tipo eh uma Negociacao
                return new Negociacao(
                  new Date(),
                  dadoDeHoje.vezes,
                  dadoDeHoje.montante
                )
              })
            })
  }
}