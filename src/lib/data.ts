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
    title: 'Café da Manhã da Nutri',
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
  {
    id: 'suco-cascas-frutas',
    titulo: 'Suco de Cascas de Frutas',
    categoria: 'cafe-da-manha-da-nutri',
    imagem: 'breakfast-2',
    ingredientes: ['Cascas de frutas variadas', 'Água', 'Açúcar'],
    modo_preparo: 'Lave bem as cascas. Bata com água no liquidificador, coe e adoce a gosto.',
  },
  {
    id: 'suco-laranja-funcho-hortela',
    titulo: 'Suco de Laranja com Funcho e Hortelã',
    categoria: 'cafe-da-manha-da-nutri',
    imagem: 'breakfast-3',
    ingredientes: ['Laranja', 'Funcho', 'Hortelã', 'Água', 'Açúcar'],
    modo_preparo: 'Bata tudo no liquidificador, coe e sirva gelado.',
  },
  {
    id: 'biscoito-de-cascas',
    titulo: 'Biscoito de Cascas e Talos de Vegetais',
    categoria: 'cafe-da-manha-da-nutri',
    imagem: 'breakfast-4',
    ingredientes: ['Resíduos vegetais picados', 'Ovo', 'Manteiga', 'Fermento', 'Farinha', 'Leite', 'Sal'],
    modo_preparo: 'Misture tudo até formar massa. Abra, corte e asse em assadeira untada.',
  },
  {
    id: 'pao-de-tapioca',
    titulo: 'Pão de Tapioca',
    categoria: 'cafe-da-manha-da-nutri',
    imagem: 'breakfast-5',
    ingredientes: ['Tapioca granulada', 'Leite', 'Sal', 'Ovos', 'Manteiga', 'Queijo parmesão'],
    modo_preparo: 'Misture a tapioca com leite e sal e deixe descansar. Acrescente os demais ingredientes, modele bolinhas e asse até dourar.',
  },
  {
    id: 'terere-tradicional',
    titulo: 'Tereré Tradicional',
    categoria: 'cafe-da-manha-da-nutri',
    imagem: 'breakfast-6',
    ingredientes: ['Erva-mate para tereré', 'Água bem gelada', 'Cubos de gelo', 'Limão ou folhas de hortelã (opcional)'],
    modo_preparo: 'Em um copo apropriado (guampa), coloque a erva-mate até cerca de 2/3 da capacidade. Incline o copo e encaixe a bomba no fundo. Adicione gelo e complete com água gelada. Se desejar, esprema um pouco de limão ou adicione hortelã para um toque refrescante.',
  },
  {
    id: 'bebida-quente-de-bocaiuva',
    titulo: 'Bebida Quente de Bocaiuva',
    categoria: 'cafe-da-manha-da-nutri',
    imagem: 'breakfast-7',
    ingredientes: ['2 colheres de sopa de farinha de bocaiuva', '200ml de leite (pode ser vegetal)', '1 pitada de canela em pó', 'Mel ou adoçante a gosto'],
    modo_preparo: 'Em uma panela, com o fogo ainda desligado, dissolva completamente a farinha de bocaiuva no leite. Adicione a canela. Leve ao fogo baixo, mexendo continuamente para não empelotar, até a mistura aquecer bem e engrossar levemente. Adoce com mel a gosto e sirva imediatamente.',
  },
  {
    id: 'quase-bolo-quase-pao-de-queijo',
    titulo: 'Quase Bolo, Quase Pão de Queijo',
    categoria: 'cafe-da-manha-da-nutri',
    imagem: 'breakfast-8',
    ingredientes: ['1 xícara de polvilho doce', '1/2 xícara de óleo', '2 ovos', '1/2 xícara de queijo ralado (parmesão ou meia cura)'],
    modo_preparo: 'Pré-aqueça o forno a 180°C. No liquidificador, adicione os ovos, o óleo, o queijo ralado e o polvilho doce. Bata tudo por cerca de 2 minutos, até obter uma massa homogênea e lisa. Despeje a mistura em uma forma pequena untada e enfarinhada. Asse por aproximadamente 25-30 minutos, ou até crescer e dourar.',
  },
  {
    id: 'overnight-oats',
    titulo: 'Overnight Oats',
    categoria: 'cafe-da-manha-da-nutri',
    imagem: 'breakfast-9',
    ingredientes: ['4 colheres de sopa de aveia em flocos', '150ml de leite ou iogurte', 'Frutas picadas a gosto (morango, banana, manga)', 'Oleaginosas (castanhas, amêndoas)', 'Canela em pó', 'Mel ou adoçante a gosto'],
    modo_preparo: 'Em um pote de vidro com tampa, comece com uma camada de aveia. Adicione o leite ou iogurte, e em seguida intercale camadas de frutas, oleaginosas e um toque de canela. Repita até preencher o pote. Feche bem e leve à geladeira por pelo menos 4 horas, ou de um dia para o outro.',
  },
  {
    id: 'pao-low-carb-de-microondas',
    titulo: 'Pão Low Carb de Micro-ondas',
    categoria: 'cafe-da-manha-da-nutri',
    imagem: 'breakfast-10',
    ingredientes: ['1 ovo', '2 colheres de sopa de farelo de aveia ou farinha de linhaça', '1/2 banana pequena amassada', '1 colher de café de fermento em pó', '1 pitada de canela', '1 fio de manteiga derretida ou óleo de coco'],
    modo_preparo: 'Em uma tigela pequena ou caneca, bata o ovo. Adicione a banana amassada, o farelo de aveia, a manteiga e a canela, misturando bem. Por último, incorpore o fermento delicadamente. Leve ao micro-ondas em potência alta por cerca de 2 a 3 minutos, ou até a massa firmar e cozinhar por completo.',
  },
  {
    id: 'pao-de-frigideira-fit',
    titulo: 'Pão de Frigideira Fit',
    categoria: 'cafe-da-manha-da-nutri',
    imagem: 'breakfast-11',
    ingredientes: ['1 ovo', '1 colher de sopa de azeite', '2 colheres de sopa de água', '3 colheres de sopa de farelo de aveia', '1 colher de sopa de polvilho doce', 'Sal a gosto', '1 colher de café de fermento em pó'],
    modo_preparo: 'Em uma tigela, misture bem o ovo, o azeite e a água. Adicione o farelo de aveia, o polvilho, o sal e, por último, o fermento. Aqueça uma frigideira antiaderente em fogo baixo, despeje a massa, tampe e cozinhe por cerca de 3-4 minutos. Vire e doure o outro lado.',
  },
  {
    id: 'muffin-fit-de-banana',
    titulo: 'Muffin Fit de Banana',
    categoria: 'cafe-da-manha-da-nutri',
    imagem: 'breakfast-12',
    ingredientes: ['1 ovo', '2 colheres de sopa de farelo de aveia', '1 colher de sopa de farinha de coco', '1 banana madura amassada', 'Canela a gosto', '1 colher de sobremesa de cacau em pó (opcional)', '1/2 colher de café de fermento em pó'],
    modo_preparo: 'Em uma caneca ou recipiente que possa ir ao micro-ondas, misture todos os ingredientes com um garfo até formar uma massa homogênea. Leve ao micro-ondas por aproximadamente 2 minutos em potência alta. Verifique se está firme e cozido antes de retirar.',
  },
  {
    id: 'panqueca-low-carb-salgada',
    titulo: 'Panqueca Low Carb Salgada',
    categoria: 'cafe-da-manha-da-nutri',
    imagem: 'breakfast-13',
    ingredientes: ['2 ovos', '2 colheres de sopa de farinha de amêndoas', '1 colher de sopa de farelo de aveia', '1/2 colher de chá de fermento em pó', '1 colher de sopa de água', 'Sal e temperos a gosto'],
    modo_preparo: 'Bata os ovos e adicione os demais ingredientes, misturando bem até a massa ficar uniforme. Aqueça uma frigideira antiaderente untada com um fio de azeite. Despeje pequenas porções da massa e cozinhe em fogo baixo, dourando dos dois lados.',
  },
  {
    id: 'panqueca-doce-de-banana',
    titulo: 'Panqueca Doce de Banana',
    categoria: 'cafe-da-manha-da-nutri',
    imagem: 'breakfast-14',
    ingredientes: ['1 ovo', '3 colheres de sopa de farinha de amêndoas ou de arroz', '1 banana bem madura amassada', 'Canela em pó a gosto', 'Óleo de coco para untar'],
    modo_preparo: 'Amasse bem a banana e misture com o ovo e a canela. Adicione a farinha escolhida e mexa até incorporar. Aqueça uma frigideira em fogo baixo untada com óleo de coco e despeje porções da massa. Doure ambos os lados e sirva.',
  },
  {
    id: 'pao-de-beijo-vegano',
    titulo: 'Pão de Beijo Vegano',
    categoria: 'cafe-da-manha-da-nutri',
    imagem: 'breakfast-15',
    ingredientes: ['1 xícara de polvilho doce', '1/2 xícara de polvilho azedo', '1/2 xícara de água morna', '1/4 xícara de azeite', '1 xícara de batata ou mandioquinha cozida e amassada', 'Sal e ervas finas a gosto'],
    modo_preparo: 'Pré-aqueça o forno a 200°C. Em uma tigela, misture os polvilhos. Adicione a água morna, o azeite, o legume amassado, o sal e as ervas. Misture com as mãos até formar uma massa que não grude. Modele pequenas bolinhas e distribua em uma assadeira. Asse por cerca de 30 minutos ou até dourarem.',
  },
  {
    id: 'crepioca-de-chocolate',
    titulo: 'Crepioca de Chocolate',
    categoria: 'cafe-da-manha-da-nutri',
    imagem: 'breakfast-16',
    ingredientes: ['1 ovo', '1 clara', '2 colheres de sopa de goma de tapioca', 'Adoçante a gosto', '1 colher de sopa de cacau em pó 100%'],
    modo_preparo: 'Em uma tigela, bata o ovo e a clara. Adicione a goma de tapioca, o adoçante e o cacau em pó. Misture vigorosamente com um garfo ou fouet até que todos os ingredientes estejam bem incorporados e a massa lisa. Despeje em uma frigideira antiaderente pré-aquecida e cozinhe em fogo baixo até firmar, depois vire para dourar o outro lado.',
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
