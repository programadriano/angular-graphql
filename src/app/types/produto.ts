export type Produto = {
    CodigoBarras: string;
    Nome: string;
    Preco: number;
  }
  
  export type Query = {
      produtos: Produto[];
  }