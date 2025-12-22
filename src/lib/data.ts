import type { LucideIcon } from 'lucide-react';
import { Coffee, IceCream, CakeSlice, Flame } from 'lucide-react';

export type Recipe = {
  id: string;
  titulo: string;
  categoria:
    | 'cafe-da-manha-da-nutri'
    | 'sobremesas-zero'
    | 'bolos-para-comer-sem-culpa'
    | 'airfryer-proteica';
  ingredientes: string[];
  modo_preparo: string;
  imagem: string;
};

export type Category = {
  slug: Recipe['categoria'];
  title: string;
  description: string;
  Icon: LucideIcon;
  email: string;
  senha: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: 'cafe-da-manha-da-nutri',
    title: 'Café Da Manhã Da Nutri',
    description: 'Comece o dia com energia e saúde. Receitas práticas para um café da manhã nutritivo.',
    Icon: Coffee,
    email: 'cafe@fit.com',
    senha: 'CAFEFIT1',
  },
  {
    slug: 'sobremesas-zero',
    title: 'Sobremesas Zero',
    description: 'Delícias sem açúcar para matar a vontade de doce sem sair da dieta.',
    Icon: IceCream,
    email: 'sobremesas@zero.com',
    senha: 'ZEROCAFE2',
  },
  {
    slug: 'bolos-para-comer-sem-culpa',
    title: 'Bolos para Comer Sem Culpa',
    description: 'Bolos fofinhos e saborosos em versões saudáveis para qualquer hora do dia.',
    Icon: CakeSlice,
    email: 'bolos@semculpa.com',
    senha: 'BOLOFIT3',
  },
  {
    slug: 'airfryer-proteica',
    title: 'Airfryer Proteica',
    description: 'Receitas ricas em proteína, feitas na airfryer para mais praticidade e menos gordura.',
    Icon: Flame,
    email: 'Airfryer@proteica.com',
    senha: 'PROTEINAFIT4',
  },
];

export const RECIPES: Recipe[] = [
  // Café da Manhã
  {
    id: 'crepioca-fit',
    titulo: 'Crepioca Fit',
    categoria: 'cafe-da-manha-da-nutri',
    imagem: 'breakfast-1',
    ingredientes: ['1 ovo', '2 colheres de sopa de goma de tapioca', '1 colher de sopa de requeijão light', 'Sal a gosto'],
    modo_preparo: 'Bata o ovo. Adicione a tapioca, o requeijão e o sal. Misture bem. Despeje na frigideira antiaderente em fogo baixo. Doure dos dois lados.',
  },
  {
    id: 'panqueca-de-banana',
    titulo: 'Panqueca de Banana',
    categoria: 'cafe-da-manha-da-nutri',
    imagem: 'breakfast-1',
    ingredientes: ['1 banana amassada', '1 ovo', '2 colheres de sopa de aveia em flocos', 'Canela em pó a gosto'],
    modo_preparo: 'Misture todos os ingredientes. Aqueça uma frigideira antiaderente. Despeje pequenas porções da massa. Cozinhe até dourar.',
  },
  // Sobremesas Zero
  {
    id: 'mousse-de-maracuja-zero',
    titulo: 'Mousse de Maracujá Zero',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['1 xícara de suco de maracujá concentrado sem açúcar', '1 lata de creme de leite light', '1/2 xícara de adoçante culinário'],
    modo_preparo: 'Bata todos os ingredientes no liquidificador. Leve para gelar por 2 horas.',
  },
  // Bolos
  {
    id: 'bolo-de-cenoura-fit',
    titulo: 'Bolo de Cenoura Fit',
    categoria: 'bolos-para-comer-sem-culpa',
    imagem: 'cake-1',
    ingredientes: ['2 cenouras médias', '3 ovos', '1/2 xícara de óleo de coco', '1 xícara de farinha de aveia', '1 xícara de adoçante culinário', '1 colher de sopa de fermento em pó'],
    modo_preparo: 'Bata cenouras, ovos e óleo no liquidificador. Misture com os secos. Asse em forno pré-aquecido a 180°C.',
  },
  // Airfryer
  {
    id: 'frango-crocante-airfryer',
    titulo: 'Frango Crocante na Airfryer',
    categoria: 'airfryer-proteica',
    imagem: 'airfryer-1',
    ingredientes: ['500g de filé de frango em cubos', 'Sal, pimenta e páprica a gosto', '1/2 xícara de farinha de amêndoas'],
    modo_preparo: 'Tempere o frango. Passe na farinha de amêndoas. Leve à airfryer por 20 minutos a 200°C.',
  },
];
