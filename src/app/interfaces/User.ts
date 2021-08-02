export interface User {
  id: number;
  nome: string;
  matricula: string;
  fonetico: string;
  setor: string;
  cnpj: string;
  razao_social: string;
  ultimo_acesso: string;
  perfil: number;
  status: number;
  empresa: number;
  atende_a: number;
  senha?: string;
}
