import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  //variavel não pode fica publica, tem que receber qualquer tipo de dados e deve ser um Arrey//
  private dados: any = [];

  constructor() { }

  //é preciso criar um metodo para guarda os dodos dentro da aplicação//
  //que é preciso criar parametro como um index que é para facilitar a busca de dados no arrey e os dados que devem ser do tipo "any"//
  //o metodo deve retorna um boolean[ nomeDoMetodo(parametro): tipoDoRetorno ]//
  guardarDados(index: string, dados: any): boolean{
    if(index){
      //[index] sera o valor passado pelo parametro do metodo e em seguida os dados sera armazenado no index desejado//
      this.dados[index] = dados;
      return true;
    }else{
      return false;
    }
  }
  //É preciso criar um metodo para pegar os dados//
  pegarDados(index: string): any{
    //é preciso fazer um if para validar o index//
    if(index){
      //devemos retorna o dado com o referente index que desejamos buscar//
      return this.dados[index];
    }else{
      return null;
    }
  }
  //precisamos criar um metodo para deletar os dados//
  deletarDados(index: string): boolean{
      return delete this.dados[index];
   }


}
