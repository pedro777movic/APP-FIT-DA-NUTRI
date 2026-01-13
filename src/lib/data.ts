import type { LucideIcon } from 'lucide-react';
import { Coffee, IceCream, CakeSlice, Flame, Soup, Salad } from 'lucide-react';

export type Recipe = {
  id: string;
  titulo: string;
  categoria:
    | 'cafe-da-manha'
    | 'almoco'
    | 'jantar'
    | 'lanches'
    | 'sobremesas-sem-culpa'
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
  checkoutUrl: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: 'cafe-da-manha',
    title: 'Café da Manhã',
    description: 'Comece o dia com energia e saúde.',
    Icon: Coffee,
    email: 'cafe@fit.com',
    senha: 'CAFEFIT1',
    checkoutUrl: 'https://pay.cakto.com.br/3fmx6e8_558568',
  },
  {
    slug: 'almoco',
    title: 'Almoço',
    description: 'Opções leves e nutritivas para a sua principal refeição.',
    Icon: Salad,
    email: 'almoco@fit.com',
    senha: 'ALMOCOFIT',
    checkoutUrl: '#',
  },
  {
    slug: 'jantar',
    title: 'Jantar',
    description: 'Refeições equilibradas para terminar o dia bem.',
    Icon: Soup,
    email: 'jantar@fit.com',
    senha: 'JANTARFIT',
    checkoutUrl: '#',
  },
  {
    slug: 'lanches',
    title: 'Lanches',
    description: 'Para quando bater a fome entre as refeições.',
    Icon: Flame, // Placeholder, can be changed
    email: 'lanches@fit.com',
    senha: 'LANCHESFIT',
    checkoutUrl: 'https://pay.cakto.com.br/pu44qb2_558933',
  },
  {
    slug: 'sobremesas-sem-culpa',
    title: 'Sobremesas sem Culpa',
    description: 'Delícias para matar a vontade de doce sem sair da dieta.',
    Icon: IceCream,
    email: 'sobremesas@zero.com',
    senha: 'ZEROCAFE2',
    checkoutUrl: 'https://pay.cakto.com.br/b5xw5as_558897',
  },
  {
    slug: 'airfryer-proteica',
    title: 'Especial Airfryer',
    description: 'Receitas práticas e ricas em proteína na airfryer.',
    Icon: Flame,
    email: 'Airfryer@proteica.com',
    senha: 'PROTEINAFIT4',
    checkoutUrl: 'https://pay.cakto.com.br/pu44qb2_558933',
  },
];

export const RECIPES: Recipe[] = [
  // Café da Manhã
  {
    id: 'crepioca-fit',
    titulo: 'Crepioca Fit',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-1',
    ingredientes: ['1 ovo', '2 colheres de sopa de goma de tapioca', '1 colher de sopa de requeijão light', 'Sal a gosto'],
    modo_preparo: 'Em uma tigela, bata o ovo com um garfo. Adicione a goma de tapioca, o requeijão light e uma pitada de sal, misturando bem até obter uma massa homogênea. Despeje a mistura em uma frigideira antiaderente pré-aquecida em fogo baixo. Deixe dourar de um lado e depois vire para dourar do outro. Sirva quente com o recheio de sua preferência.',
  },
  {
    id: 'panqueca-de-banana',
    titulo: 'Panqueca de Banana',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-14',
    ingredientes: ['1 banana prata madura amassada', '1 ovo', '2 colheres de sopa de aveia em flocos', 'Canela em pó a gosto'],
    modo_preparo: 'Em um prato fundo, amasse bem a banana. Adicione o ovo e a aveia, misturando tudo com um garfo até formar uma massa uniforme. Polvilhe canela a gosto. Aqueça uma frigideira antiaderente em fogo médio e despeje pequenas porções da massa. Cozinhe até as bordas firmarem e o centro borbulhar, depois vire e doure o outro lado. Sirva com mel ou frutas frescas.',
  },
  {
    id: 'shake-hipercalorico',
    titulo: 'Shake Hipercalórico',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-17',
    ingredientes: ['1 scoop de whey protein (sabor de sua preferência)', '300ml de leite integral', '1 banana prata madura', '2 colheres de sopa de aveia em flocos', '5 cubos de gelo'],
    modo_preparo: 'Coloque todos os ingredientes no liquidificador: o leite, a banana picada, a aveia, o whey protein e o gelo. Bata em alta velocidade por cerca de 1 a 2 minutos, ou até a mistura ficar completamente homogênea e cremosa. Sirva imediatamente.',
  },
  {
    id: 'mingau-proteico-de-aveia',
    titulo: 'Mingau Proteico de Aveia',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-18',
    ingredientes: ['2 claras de ovo (ou 1 ovo inteiro)', '1 gema', '3 colheres de sopa de farinha de aveia', '150ml de água ou leite', 'Canela em pó a gosto'],
    modo_preparo: 'Em uma panela pequena, antes de levar ao fogo, misture bem as claras, a gema e a farinha de aveia até dissolver. Adicione a água (ou leite) e a canela. Leve ao fogo baixo, mexendo continuamente com um fouet para não empelotar. Continue mexendo até o mingau atingir a consistência desejada, mais grossa e cremosa.',
  },
  {
    id: 'barra-de-proteina-caseira',
    titulo: 'Barra de Proteína Caseira',
    categoria: 'lanches',
    imagem: 'breakfast-19',
    ingredientes: ['1 xícara de aveia em flocos', '1/2 xícara de pasta de amendoim', '2 scoops de whey protein (sabor baunilha ou chocolate)', '2 colheres de sopa de sementes de linhaça', '3 a 4 colheres de sopa de água ou leite'],
    modo_preparo: 'Em uma tigela, misture a aveia, o whey protein e a linhaça. Adicione a pasta de amendoim e misture bem. Aos poucos, adicione a água ou leite, mexendo até formar uma massa densa e moldável. Forre uma forma pequena com plástico filme, espalhe a massa uniformemente e pressione bem. Leve ao congelador por 30 minutos para firmar. Retire, corte em barras e conserve na geladeira.',
  },
  {
    id: 'panqueca-low-carb-simples',
    titulo: 'Panqueca Low Carb Simples',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-13',
    ingredientes: ['2 ovos', '2 colheres de sopa de farinha de castanha ou chia', '1 colher de sopa de creme de leite', '1 colher de sopa de queijo parmesão ralado fino', 'Sal e pimenta a gosto'],
    modo_preparo: 'Em uma tigela, bata os ovos e adicione a farinha, o creme de leite e o queijo parmesão. Tempere com sal e pimenta e misture tudo muito bem com um garfo até a massa ficar homogênea. Aqueça uma frigideira antiaderente em fogo baixo, unte se necessário, e despeje metade da massa. Doure dos dois lados e repita o processo com o restante da massa.',
  },
  {
    id: 'pao-cetogenico-rapido',
    titulo: 'Pão Cetogênico Rápido',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-10',
    ingredientes: ['1 ovo grande', '2 colheres de sopa de farinha de coco', '1/2 colher de chá de fermento em pó', '1 pitada de sal'],
    modo_preparo: 'Em uma tigela pequena, bata o ovo com um garfo. Adicione a farinha de coco, o fermento e o sal, misturando rapidamente até incorporar. Despeje a massa em um pequeno recipiente quadrado ou redondo untado e leve ao micro-ondas por 90 segundos em potência alta. Desenforme, corte ao meio e doure as fatias em uma frigideira com manteiga para um acabamento crocante.',
  },
  {
    id: 'vitamina-de-banana-proteica',
    titulo: 'Vitamina de Banana Proteica',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-20',
    ingredientes: ['1 banana congelada em rodelas', '1/2 pote de iogurte natural desnatado', '1 scoop de whey protein de baunilha', '1 pitada de canela em pó', '1 colher de chá de café solúvel', '100ml de leite desnatado ou água'],
    modo_preparo: 'Coloque todos os ingredientes no liquidificador, começando pelos líquidos. Bata em alta velocidade até que a mistura esteja completamente lisa, cremosa e sem pedaços de banana. Se necessário, pare para raspar as laterais do copo. Sirva imediatamente para melhor consistência.',
  },
  {
    id: 'panqueca-para-hipertrofia',
    titulo: 'Panqueca para Hipertrofia',
    categoria: 'almoco',
    imagem: 'breakfast-21',
    ingredientes: ['100ml de leite', '2 ovos', '4 colheres de sopa de aveia em flocos', '2 colheres de sopa de farinha integral', '1 fio de azeite', 'Recheio: 4 fatias de peito de peru e 2 colheres de sopa de queijo cottage'],
    modo_preparo: 'No liquidificador, bata o leite, os ovos, a aveia, a farinha integral e o azeite até obter uma massa lisa. Aqueça uma frigideira antiaderente e despeje porções da massa para formar as panquecas, dourando ambos os lados. Recheie cada disco de panqueca com peito de peru e queijo cottage, enrole e sirva.',
  },
  {
    id: 'barra-proteica-de-pasta-de-amendoim',
    titulo: 'Barra Proteica de Pasta de Amendoim',
    categoria: 'lanches',
    imagem: 'breakfast-22',
    ingredientes: ['1/4 xícara de mel ou melado', '1/4 xícara de açúcar mascavo', '1 xícara de pasta de amendoim', '1 pitada de canela', '1/4 xícara de semente de linhaça', '2 xícaras de aveia em flocos'],
    modo_preparo: 'Em uma panela, aqueça o mel, o açúcar mascavo e a pasta de amendoim em fogo baixo, mexendo até ficar homogêneo. Retire do fogo e adicione a canela, a linhaça e a aveia, misturando bem. Pressione a mistura em uma forma forrada com papel manteiga e leve ao congelador por pelo menos 1 hora. Depois de firme, corte em barras.',
  },
  {
    id: 'panqueca-de-pasta-de-amendoim',
    titulo: 'Panqueca de Pasta de Amendoim',
    categoria: 'lanches',
    imagem: 'breakfast-23',
    ingredientes: ['1/2 xícara de farinha de trigo', '1/4 xícara de farelo de trigo', '1 colher de sopa de açúcar mascavo', '1 ovo', '2 colheres de sopa de pasta de amendoim', '3/4 xícara de leite'],
    modo_preparo: 'Em uma tigela, misture a farinha, o farelo de trigo e o açúcar. Em outra tigela, bata o ovo e misture com a pasta de amendoim e o leite. Junte as duas misturas e mexa até ficar homogêneo. Aqueça uma frigideira untada e cozinhe pequenas porções da massa, dourando dos dois lados.',
  },
  {
    id: 'smoothie-de-pasta-de-amendoim',
    titulo: 'Smoothie de Pasta de Amendoim',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-24',
    ingredientes: ['1 scoop de whey protein de chocolate', '1 banana congelada', '2 colheres de sopa de pasta de amendoim', '200ml de leite', 'Gelo a gosto'],
    modo_preparo: 'Coloque todos os ingredientes no liquidificador. Bata em alta velocidade até a mistura ficar lisa, cremosa e atingir a consistência de um smoothie. Sirva imediatamente.',
  },
  {
    id: 'sanduiche-de-amendoim-com-geleia',
    titulo: 'Sanduíche de Amendoim com Geleia',
    categoria: 'lanches',
    imagem: 'breakfast-25',
    ingredientes: ['2 colheres de sopa de pasta de amendoim integral', '1 colher de sopa de geleia sem açúcar (sabor de sua preferência)', '2 fatias de pão integral'],
    modo_preparo: 'Toste levemente as fatias de pão, se desejar. Em uma fatia, espalhe generosamente a pasta de amendoim. Na outra fatia, espalhe a geleia. Junte as duas fatias para montar o sanduíche e corte ao meio se preferir. É um lanche rápido, clássico e energético.',
  },
  {
    id: 'granola-caseira-amendoim',
    titulo: 'Granola Caseira de Amendoim',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-26',
    ingredientes: ['1/2 xícara de pasta de amendoim', '1/4 xícara de mel', '1 colher de chá de canela em pó', '1 colher de chá de extrato de baunilha', '2 xícaras de aveia em flocos grossos'],
    modo_preparo: 'Pré-aqueça o forno a 160°C. Em uma tigela, misture a pasta de amendoim, o mel, a canela e a baunilha. Adicione a aveia e incorpore bem. Espalhe a mistura em uma assadeira forrada com papel manteiga e asse por 20-25 minutos, mexendo na metade do tempo, até ficar dourada e crocante. Deixe esfriar completamente antes de guardar.',
  },
  {
    id: 'pasta-amendoim-caseira',
    titulo: 'Pasta de Amendoim Caseira',
    categoria: 'lanches',
    imagem: 'breakfast-27',
    ingredientes: ['500g de amendoim torrado sem pele e sem sal'],
    modo_preparo: 'Se o amendoim estiver cru, asse em forno pré-aquecido a 180°C por cerca de 10-15 minutos, até dourar levemente. Deixe esfriar um pouco. Coloque o amendoim ainda morno em um processador de alimentos potente. Processe continuamente, parando para raspar as laterais do recipiente a cada minuto. O amendoim primeiro virará uma farofa, depois uma massa densa e, finalmente, uma pasta cremosa e lisa. Guarde em um pote de vidro bem fechado.',
  },
  {
    id: 'panqueca-proteica-de-ovo-aveia',
    titulo: 'Panqueca Proteica de Ovo e Aveia',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-28',
    ingredientes: ['4 claras de ovo', '4 colheres de sopa de aveia em flocos', '1 fio de azeite', 'Canela em pó a gosto'],
    modo_preparo: 'No liquidificador ou em uma tigela com um garfo, bata as claras de ovo com a aveia e a canela até obter uma mistura homogênea. Aqueça uma frigideira antiaderente com um fio de azeite. Despeje pequenas porções da massa e cozinhe em fogo baixo até firmar. Vire para dourar do outro lado. Sirva com frutas ou mel.',
  },
  {
    id: 'omelete-proteico',
    titulo: 'Omelete Proteico',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-29',
    ingredientes: ['3 claras de ovo', '1 ovo inteiro', '2 colheres de sopa de leite', '1/2 tomate picado sem sementes', '1 colher de sopa de cebolinha picada', '2 fatias de queijo branco picado', 'Sal e pimenta do reino a gosto', 'Azeite para untar'],
    modo_preparo: 'Em uma tigela, bata as claras e o ovo inteiro. Adicione o leite, o tomate, a cebolinha e o queijo, temperando com sal e pimenta. Misture bem. Aqueça uma frigideira antiaderente untada com azeite em fogo médio. Despeje a mistura de ovos e cozinhe, mexendo levemente no início. Quando as bordas estiverem firmes, dobre ao meio e cozinhe por mais um minuto de cada lado.',
  },
  {
    id: 'pao-de-mandioca-com-whey',
    titulo: 'Pão de Mandioca com Whey',
    categoria: 'lanches',
    imagem: 'breakfast-30',
    ingredientes: ['500g de mandioca cozida e amassada', '2 ovos', '1 gema para pincelar', '10g de fermento biológico seco', '1 colher de sopa de manteiga', '1 pitada de sal', '1 colher de sopa de açúcar', '1/2 xícara de whey protein sem sabor'],
    modo_preparo: 'Em uma tigela, dissolva o fermento no açúcar. Adicione os ovos, a manteiga e a mandioca amassada, misturando bem. Aos poucos, incorpore o whey protein e o sal, sovando até obter uma massa macia e que não grude nas mãos. Deixe a massa descansar por 30 minutos. Modele os pães, pincele com a gema e asse em forno pré-aquecido a 180°C por cerca de 30 minutos, ou até dourar.',
  },
  {
    id: 'crepe-de-chocolate-com-whey',
    titulo: 'Crepe de Chocolate com Whey',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'breakfast-31',
    ingredientes: ['1 colher de sopa de cacau em pó', '15g de chocolate amargo 70% derretido', '2 claras de ovo', 'Morangos picados para rechear', '1/2 scoop de whey protein de chocolate'],
    modo_preparo: 'Em uma tigela, bata as claras com um garfo. Adicione o cacau, o chocolate derretido e o whey protein, misturando bem até formar uma massa homogênea. Aqueça uma frigideira antiaderente em fogo baixo. Despeje a massa, formando um disco fino. Cozinhe por cerca de 1 minuto de cada lado. Retire, recheie com os morangos picados e dobre.',
  },
  {
    id: 'mini-panquecas-de-banana',
    titulo: 'Mini Panquecas de Banana',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-32',
    ingredientes: ['1 ovo', '2 colheres de sopa de farinha de aveia', '1/2 banana madura picada', 'Morangos fatiados para decorar', 'Mel para finalizar'],
    modo_preparo: 'Em uma tigela, misture o ovo com a farinha de aveia até obter uma massa lisa. Incorpore os pedacinhos de banana. Aqueça uma frigideira antiaderente em fogo médio e despeje pequenas colheradas da massa para formar as mini panquecas. Cozinhe até dourar de ambos os lados. Sirva com morangos frescos fatiados e um fio de mel por cima.',
  },
  {
    id: 'pao-de-queijo-de-frigideira',
    titulo: 'Pão de Queijo de Frigideira',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-33',
    ingredientes: ['1 ovo', '2 colheres de sopa de goma de tapioca', '1 fatia de muçarela light', '1 colher de sopa de queijo parmesão ralado', '1 pitada de sal'],
    modo_preparo: 'Em uma tigela, bata o ovo e adicione a goma de tapioca, metade do parmesão e o sal, misturando bem. Despeje na frigideira antiaderente em fogo baixo. Quando a massa firmar, coloque a muçarela e o restante do parmesão em uma metade e dobre a outra por cima. Pressione levemente e doure dos dois lados.',
  },
  {
    id: 'vitamina-hiperproteica',
    titulo: 'Vitamina Hiperproteica',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-34',
    ingredientes: ['200ml de leite desnatado', '1 scoop de whey protein ou albumina (sabor de sua preferência)', '1 xícara de morangos congelados'],
    modo_preparo: 'Coloque todos os ingredientes no liquidificador. Bata em alta velocidade por cerca de 1 a 2 minutos, até a mistura ficar completamente homogênea, cremosa e sem pedaços de fruta. Sirva imediatamente para uma consistência perfeita.',
  },
  {
    id: 'requeijao-caseiro',
    titulo: 'Requeijão Caseiro',
    categoria: 'lanches',
    imagem: 'breakfast-35',
    ingredientes: ['1 litro de leite integral', '4 colheres de sopa de suco de limão ou vinagre branco', '1 colher de sopa de manteiga sem sal', 'Sal a gosto'],
    modo_preparo: 'Aqueça o leite em uma panela até começar a ferver. Desligue o fogo, adicione o suco de limão e mexa delicadamente. Deixe descansar por 5 minutos para talhar. Coe a mistura em uma peneira fina forrada com um pano limpo para separar a massa do soro. Transfira a massa para um liquidificador, adicione a manteiga, o sal e um pouco do soro (2 a 3 colheres de sopa). Bata até ficar cremoso e liso. Leve à geladeira por pelo menos 2 horas para firmar.',
  },
  {
    id: 'manteiga-de-azeite',
    titulo: 'Manteiga de Azeite',
    categoria: 'lanches',
    imagem: 'breakfast-36',
    ingredientes: ['250ml de azeite extra virgem de boa qualidade', 'Ervas frescas a gosto (alecrim, tomilho)', 'Grãos de pimenta a gosto', '1 dente de alho (opcional)'],
    modo_preparo: 'No liquidificador, bata o azeite com as ervas, os grãos de pimenta e o alho, se estiver usando, até que tudo esteja bem incorporado. Despeje a mistura em um recipiente que possa ir ao freezer e congele por algumas horas, até solidificar. Depois de firme, transfira para a geladeira. A textura ficará cremosa como a de uma manteiga para passar no pão.',
  },
  {
    id: 'panini-proteico',
    titulo: 'Panini Proteico',
    categoria: 'lanches',
    imagem: 'breakfast-37',
    ingredientes: ['1 ovo', '2 colheres de sopa de queijo cottage', '2 colheres de sopa de farinha de aveia ou linhaça', '1/2 colher de chá de fermento em pó', 'Sal e temperos a gosto'],
    modo_preparo: 'Em uma tigela, misture bem o ovo, o cottage e a farinha. Adicione o fermento, sal e temperos, incorporando tudo. Despeje em uma forma pequena untada e leve ao micro-ondas por 3 minutos. Depois de firme, corte ao meio e doure as fatias em uma sanduicheira ou frigideira até ficar crocante.',
  },
  {
    id: 'smoothie-de-banana-com-morango',
    titulo: 'Smoothie de Banana com Morango',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-38',
    ingredientes: ['200ml de leite', '1 banana madura', '1 xícara de morangos', '1/2 pote de iogurte natural', 'Gotas de essência de baunilha', 'Mel a gosto'],
    modo_preparo: 'Bata todos os ingredientes no liquidificador até obter uma mistura cremosa e homogênea. Sirva imediatamente, bem gelado.',
  },
  {
    id: 'aipim-com-ghee',
    titulo: 'Aipim com Ghee',
    categoria: 'lanches',
    imagem: 'breakfast-39',
    ingredientes: ['500g de aipim (mandioca)', '2 colheres de sopa de manteiga ou ghee', 'Sal a gosto'],
    modo_preparo: 'Descasque e corte o aipim em pedaços. Cozinhe em água e sal até ficar bem macio. Escorra a água e sirva quente, finalizando com a manteiga ghee por cima para derreter.',
  },
  {
    id: 'muesli-proteico',
    titulo: 'Muesli Proteico',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-40',
    ingredientes: ['1 pote de iogurte natural', '1/4 xícara de leite', '4 colheres de sopa de aveia', '1 colher de sopa de linhaça', '1 colher de chá de mel', '1/2 maçã picada', 'Nozes e uvas-passas a gosto'],
    modo_preparo: 'Em uma tigela, misture o iogurte, o leite, a aveia, a linhaça e o mel. Deixe descansar na geladeira por pelo menos 1 hora. Na hora de servir, adicione a maçã picada, as nozes e as uvas-passas.',
  },
  {
    id: 'tapioca-proteica',
    titulo: 'Tapioca Proteica',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-41',
    ingredientes: ['4 colheres de sopa de goma de tapioca', '1 colher de sopa de sementes de chia', '1 ovo cozido e amassado', 'Sal a gosto'],
    modo_preparo: 'Peneire a goma de tapioca com a chia sobre uma frigideira antiaderente aquecida. Quando formar uma massa única, espalhe o ovo cozido amassado por cima, tempere com sal, dobre ao meio e sirva.',
  },
  {
    id: 'cafe-batido-com-oleo-de-coco',
    titulo: 'Café Batido com Óleo de Coco',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-42',
    ingredientes: ['1 xícara de café quente', '1 colher de sopa de óleo de coco'],
    modo_preparo: 'No liquidificador ou com um mixer de mão, bata o café quente com o óleo de coco até formar uma espuma cremosa na superfície. Sirva imediatamente.',
  },
  {
    id: 'granola-caseira-2',
    titulo: 'Granola Caseira',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-43',
    ingredientes: ['2 xícaras de aveia em flocos grossos', '1/2 xícara de flocos de milho sem açúcar', '1/4 xícara de linhaça', '1/4 xícara de farelo de amaranto', '2 colheres de sopa de óleo de coco', '3 colheres de sopa de mel', '1 colher de sopa de cacau em pó', 'Canela a gosto', '1 xícara de mix de castanhas', '1/2 xícara de frutas secas'],
    modo_preparo: 'Pré-aqueça o forno a 160°C. Misture todos os ingredientes, exceto as frutas secas, e espalhe em uma assadeira. Asse por 30 minutos, mexendo na metade do tempo. Depois de frio, adicione as frutas secas e guarde em um pote bem fechado.',
  },
  {
    id: 'cambuquira-com-ovos',
    titulo: 'Cambuquira com Ovos',
    categoria: 'almoco',
    imagem: 'breakfast-44',
    ingredientes: ['1 maço de cambuquira (brotos de abóbora)', '3 ovos', '1 cebola pequena picada', '2 dentes de alho picados', 'Azeite para refogar', 'Sal e pimenta a gosto'],
    modo_preparo: 'Refogue a cebola e o alho no azeite. Adicione a cambuquira lavada e picada e refogue até murchar. Abra um espaço no meio da panela, quebre os ovos e mexa delicadamente até cozinharem. Tempere com sal e pimenta.',
  },
  {
    id: 'pao-integral',
    titulo: 'Pão Integral',
    categoria: 'lanches',
    imagem: 'breakfast-45',
    ingredientes: ['2 ovos', '1/2 xícara de óleo', '1 colher de sopa de manteiga', '1 xícara de leite morno', '1 xícara de água morna', '1 colher de sopa de sal', '2 sachês de fermento biológico seco', '1/2 xícara de aveia', '1/2 xícara de linhaça', 'Aproximadamente 1kg de farinha integral'],
    modo_preparo: 'No liquidificador, bata os ovos, óleo, manteiga, leite, água e sal. Em uma tigela, misture o fermento, aveia, linhaça e metade da farinha. Despeje o líquido e vá adicionando mais farinha até a massa soltar das mãos. Sove, deixe crescer e asse em forno a 180°C até dourar.',
  },
  {
    id: 'pao-de-cenoura',
    titulo: 'Pão de Cenoura',
    categoria: 'lanches',
    imagem: 'breakfast-46',
    ingredientes: ['2 cenouras médias cozidas', '2 ovos', '1/2 xícara de óleo', '1 xícara de leite morno', '2 colheres de sopa de açúcar', '1 colher de chá de sal', '2 sachês de fermento biológico seco', 'Aproximadamente 1kg de farinha de trigo'],
    modo_preparo: 'Bata a cenoura com os líquidos, ovos, açúcar e sal no liquidificador. Misture com o fermento e a farinha até dar ponto. Deixe a massa crescer, modele os pães e asse em forno médio até dourar.',
  },
  {
    id: 'bolinho-de-chuva',
    titulo: 'Bolinho de Chuva',
    categoria: 'lanches',
    imagem: 'breakfast-47',
    ingredientes: ['2 ovos', '1 xícara de açúcar', '2 e 1/2 xícaras de farinha de trigo', '1 xícara de leite', '1 colher de sopa de fermento em pó'],
    modo_preparo: 'Misture todos os ingredientes até obter uma massa cremosa. Com uma colher, pegue porções da massa e frite em óleo quente ou asse na airfryer a 180°C até dourar. Passe no açúcar com canela.',
  },
  {
    id: 'crepioca-2',
    titulo: 'Crepioca',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-1',
    ingredientes: ['2 colheres de sopa de goma de tapioca', '1 ovo'],
    modo_preparo: 'Em uma tigela, misture a goma de tapioca e o ovo até ficar homogêneo. Despeje em uma frigideira antiaderente aquecida e cozinhe dos dois lados até dourar.',
  },
  {
    id: 'pao-com-ora-pro-nobis',
    titulo: 'Pão com Ora-pro-nóbis',
    categoria: 'lanches',
    imagem: 'breakfast-48',
    ingredientes: ['1kg de farinha de trigo', '2 ovos', '2 colheres de sopa de açúcar', '10g de fermento biológico seco', '1 colher de sopa de sal', '1/2 xícara de leite', '1 xícara de água', '1/2 xícara de óleo', '2 xícaras de folhas de ora-pro-nóbis'],
    modo_preparo: 'Bata os líquidos com as folhas de ora-pro-nóbis no liquidificador. Em uma tigela, misture a farinha, açúcar, sal e fermento. Adicione o líquido e sove até a massa ficar lisa. Deixe crescer, modele e asse até dourar.',
  },
  {
    id: 'barrinha-de-cereal-com-castanhas',
    titulo: 'Barrinha de Cereal com Castanhas',
    categoria: 'lanches',
    imagem: 'breakfast-49',
    ingredientes: ['1 xícara de aveia', '1/2 xícara de gergelim', '1/2 xícara de açúcar mascavo', '1/4 xícara de melado', '1/2 xícara de amêndoas', '1/2 xícara de castanhas', '1 banana amassada', 'Canela a gosto', '1 colher de sopa de óleo de coco'],
    modo_preparo: 'Misture todos os ingredientes e espalhe em uma forma untada. Asse em forno a 180°C por 20 minutos ou até firmar. Deixe esfriar e corte em barras.',
  },
  {
    id: 'barrinha-de-cereal-com-amendoim',
    titulo: 'Barrinha de Cereal com Amendoim',
    categoria: 'lanches',
    imagem: 'breakfast-50',
    ingredientes: ['1/2 xícara de linhaça', '1 xícara de aveia', '1 xícara de açúcar', '1 xícara de amendoim torrado', '1/2 xícara de leite', '1 colher de chá de fermento', 'Uvas-passas a gosto'],
    modo_preparo: 'Misture todos os ingredientes e modele em formato de barras. Asse em forno médio pré-aquecido até dourar. Deixe esfriar para firmar.',
  },
  {
    id: 'bolinho-salgado-de-milho',
    titulo: 'Bolinho Salgado de Milho',
    categoria: 'lanches',
    imagem: 'breakfast-51',
    ingredientes: ['1 lata de milho verde', '2 ovos', '1/2 xícara de queijo ralado', '1 xícara de leite', '2 colheres de sopa de manteiga', '1 xícara de fubá', '1 colher de sopa de fermento', '1 abobrinha ralada', '1 cebola picada', '2 dentes de alho', 'Sal e pimenta a gosto'],
    modo_preparo: 'Bata o milho com os líquidos no liquidificador. Refogue os temperos e a abobrinha. Misture tudo com os ingredientes secos. Coloque em forminhas e asse em forno a 180°C até firmar.',
  },
  {
    id: 'crepioca-simples',
    titulo: 'Crepioca Simples',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-1',
    ingredientes: ['2 ovos', '2 colheres de sopa de goma de tapioca', '2 colheres de sopa de água'],
    modo_preparo: 'Bata todos os ingredientes com um garfo. Despeje em uma frigideira antiaderente aquecida e cozinhe dos dois lados.',
  },
  {
    id: 'mingau-com-pasta-de-amendoim',
    titulo: 'Mingau com Pasta de Amendoim',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-52',
    ingredientes: ['3 colheres de sopa de farelo de aveia', '2 claras de ovo', '1 colher de sopa de pasta de amendoim', 'Canela e cacau a gosto'],
    modo_preparo: 'Cozinhe a aveia com água até virar um mingau. Desligue o fogo e adicione as claras, mexendo vigorosamente. Finalize com a pasta de amendoim, canela e cacau.',
  },
  {
    id: 'mingau-proteico-com-banana',
    titulo: 'Mingau Proteico com Banana',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-53',
    ingredientes: ['1 scoop de proteína em pó', '3 colheres de sopa de aveia', '1/2 banana amassada', 'Cacau e canela a gosto'],
    modo_preparo: 'Misture todos os ingredientes em uma panela com um pouco de água. Leve ao fogo baixo, mexendo até encorpar. Pode ser feito no micro-ondas também.',
  },
  {
    id: 'panqueca-de-tapioca',
    titulo: 'Panqueca de Tapioca',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-1',
    ingredientes: ['1 ovo', '2 colheres de sopa de goma de tapioca', '1/2 banana amassada', 'Canela a gosto'],
    modo_preparo: 'Misture todos os ingredientes com um garfo. Asse em frigideira antiaderente dos dois lados, em fogo baixo.',
  },
  {
    id: 'panqueca-fit-de-banana-2',
    titulo: 'Panqueca Fit de Banana',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-14',
    ingredientes: ['1 banana prata madura', '1 ovo', '1 colher de sopa de aveia', 'Canela a gosto'],
    modo_preparo: 'Amasse a banana, misture com o ovo, a aveia e a canela. Asse em frigideira antiaderente em fogo baixo dos dois lados.',
  },
  {
    id: 'panqueca-rica-em-fibras',
    titulo: 'Panqueca Rica em Fibras',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-54',
    ingredientes: ['1 banana', '1 ovo', '2 colheres de sopa de aveia'],
    modo_preparo: 'Em um prato, amasse bem a banana com um garfo. Adicione o ovo e a aveia, misturando tudo até formar uma massa homogênea. Aqueça uma frigideira antiaderente em fogo baixo e despeje a massa, formando um disco. Cozinhe até dourar de um lado, depois vire e doure do outro.',
  },
  {
    id: 'pao-de-queijo-caseiro',
    titulo: 'Pão de Queijo Caseiro',
    categoria: 'lanches',
    imagem: 'breakfast-8',
    ingredientes: ['250g de polvilho azedo', '250g de polvilho doce', '200g de queijo ralado', '3 ovos', '1 xícara de água fervente', '1/2 xícara de óleo', '1 colher de chá de sal'],
    modo_preparo: 'Em uma tigela, misture os polvilhos. Ferva a água com o óleo e o sal e escalde a mistura de polvilhos, mexendo bem. Deixe esfriar um pouco e adicione os ovos e o queijo, sovando até a massa ficar lisa. Modele bolinhas e asse em forno pré-aquecido a 180°C até dourar.',
  },
  {
    id: 'pao-de-queijo-sem-lactose',
    titulo: 'Pão de Queijo sem Lactose',
    categoria: 'lanches',
    imagem: 'breakfast-55',
    ingredientes: ['500g de inhame cozido e amassado', '1/4 xícara de azeite', '1 colher de chá de sal', '500g de polvilho doce'],
    modo_preparo: 'Em uma tigela, misture o inhame amassado com o azeite e o sal. Aos poucos, adicione o polvilho doce, sovando até a massa ficar homogênea e soltar das mãos. Se necessário, ajuste a quantidade de polvilho. Modele pequenas bolinhas, distribua em uma assadeira e asse em forno pré-aquecido a 200°C por cerca de 30 minutos ou até dourarem.',
  },
  {
    id: 'pao-de-aveia-no-microondas',
    titulo: 'Pão de Aveia no Micro-ondas',
    categoria: 'lanches',
    imagem: 'breakfast-10',
    ingredientes: ['2 ovos', '2 colheres de sopa de água', '4 colheres de sopa de farinha de aveia', '1 colher de chá de fermento em pó', 'Orégano e pimenta a gosto'],
    modo_preparo: 'Em uma tigela que possa ir ao micro-ondas, bata os ovos com a água. Adicione a farinha de aveia, o orégano e a pimenta, misturando bem. Por último, incorpore o fermento. Leve ao micro-ondas por cerca de 3 minutos em potência alta, ou até a massa firmar. Desenforme e, se desejar, doure as fatias em uma frigideira.',
  },
  {
    id: 'pao-de-queijo-low-carb',
    titulo: 'Pão de Queijo Low Carb',
    categoria: 'lanches',
    imagem: 'breakfast-56',
    ingredientes: ['2 ovos', '1 xícara de queijo sem lactose ralado', '1/2 xícara de sementes de girassol trituradas', '1/4 xícara de farinha de coco', '2 colheres de sopa de psyllium', '1 colher de sopa de chia', 'Sal a gosto', '1 colher de sopa de fermento em pó', '1/2 colher de chá de goma xantana'],
    modo_preparo: 'Em uma tigela, misture todos os ingredientes secos. Adicione os ovos e o queijo, mexendo bem até formar uma massa homogênea. Deixe a massa descansar por 10 minutos para hidratar. Modele pãezinhos, coloque em uma assadeira e asse em forno pré-aquecido a 180°C por 20-25 minutos, ou até dourarem.',
  },
  {
    id: 'pao-de-queijo-rapido',
    titulo: 'Pão de Queijo Rápido',
    categoria: 'lanches',
    imagem: 'breakfast-8',
    ingredientes: ['2 xícaras de polvilho doce', '1 xícara de queijo parmesão ralado', '1 caixinha de creme de leite (200g)', '1 pitada de sal'],
    modo_preparo: 'Em uma tigela, misture o polvilho, o queijo e o sal. Adicione o creme de leite aos poucos, mexendo com as mãos até formar uma massa que desgrude. Se a massa ficar muito seca, adicione mais creme de leite; se ficar grudenta, adicione mais polvilho. Modele bolinhas e asse em forno pré-aquecido a 200°C por cerca de 20 minutos, ou até dourarem.',
  },
  {
    id: 'pao-integral-de-liquidificador',
    titulo: 'Pão Integral de Liquidificador',
    categoria: 'lanches',
    imagem: 'breakfast-45',
    ingredientes: ['1 xícara de polvilho doce', '1 xícara de farinha de arroz', '1/2 xícara de farelo de aveia', '1/4 xícara de azeite ou óleo de coco', '2 ovos', '1 xícara de água morna', '1 colher de sopa de fermento biológico seco', '1 colher de chá de sal', 'Sementes a gosto para decorar'],
    modo_preparo: 'No liquidificador, bata os ovos, a água e o azeite. Em uma tigela, misture as farinhas, o sal e as sementes. Despeje a mistura líquida sobre os secos e mexa bem. Adicione o fermento e incorpore delicadamente. Despeje a massa em uma forma de pão untada e deixe crescer por 30 minutos. Asse em forno pré-aquecido a 180°C por cerca de 30-40 minutos, ou até o palito sair limpo.',
  },
  {
    id: 'pate-de-frango-saudavel',
    titulo: 'Patê de Frango Saudável',
    categoria: 'lanches',
    imagem: 'breakfast-57',
    ingredientes: ['200g de frango cozido e desfiado', '1 pote de iogurte natural desnatado', '1 colher de chá de açafrão', 'Orégano a gosto', 'Suco de 1/2 limão', '1 fio de azeite', '1/2 cenoura ralada', '1/4 de pimentão picado', 'Azeitonas picadas a gosto', 'Sal e cebolinha a gosto'],
    modo_preparo: 'Em uma tigela, misture o iogurte com o açafrão, orégano, suco de limão, azeite e sal. Adicione o frango desfiado, a cenoura, o pimentão e as azeitonas, incorporando tudo. Finalize com a cebolinha picada. Leve à geladeira por pelo menos 30 minutos antes de servir para apurar os sabores.',
  },
  {
    id: 'panqueca-de-aveia',
    titulo: 'Panqueca de Aveia',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-1',
    ingredientes: ['1 xícara de aveia em flocos finos', '1 xícara de água', '1 colher de sopa de melado de cana', '1 colher de sopa de farinha de linhaça', '1/2 colher de chá de fermento em pó'],
    modo_preparo: 'No liquidificador, bata a aveia, a água, o melado e a farinha de linhaça até obter uma massa lisa. Deixe descansar por 5 minutos. Incorpore o fermento delicadamente. Aqueça uma frigideira antiaderente em fogo baixo e despeje pequenas porções da massa, dourando dos dois lados.',
  },
  {
    id: 'granola-caseira-3',
    titulo: 'Granola Caseira',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-43',
    ingredientes: ['2 xícaras de aveia em flocos grossos', '1 xícara de mix de oleaginosas (castanhas, amêndoas, nozes)', '2 colheres de sopa de óleo de coco', '3 colheres de sopa de mel', '1 colher de sopa de chia', '1 colher de sopa de linhaça', 'Canela em pó a gosto', '1/2 xícara de uvas-passas', '1 pitada de sal'],
    modo_preparo: 'Pré-aqueça o forno a 160°C. Em uma tigela grande, misture a aveia, as oleaginosas, o óleo de coco, o mel, a chia, a linhaça, a canela e o sal. Espalhe a mistura em uma assadeira forrada e asse por 25-30 minutos, mexendo na metade do tempo para dourar por igual. Retire do forno, espere esfriar e adicione as uvas-passas. Guarde em um pote bem fechado.',
  },
  {
    id: 'pao-de-abobora',
    titulo: 'Pão de Abóbora',
    categoria: 'lanches',
    imagem: 'breakfast-58',
    ingredientes: ['1 xícara de abóbora cabotiá cozida e amassada', '1/2 xícara de polvilho doce', '1/2 xícara de polvilho azedo', '1/4 xícara de água', '2 colheres de sopa de óleo de coco', '1 colher de sopa de chia', 'Sal a gosto'],
    modo_preparo: 'Pré-aqueça o forno a 200°C. Em uma tigela, misture a abóbora amassada com os polvilhos, a água, o óleo de coco, a chia e o sal. Mexa bem até formar uma massa homogênea e que seja possível modelar. Faça pequenas bolinhas e coloque em uma assadeira antiaderente. Asse por cerca de 25-30 minutos ou até que os pãezinhos estejam dourados.',
  },
  {
    id: 'pao-integral-microondas',
    titulo: 'Pão Integral de Micro-ondas',
    categoria: 'lanches',
    imagem: 'breakfast-59',
    ingredientes: ['1 ovo', '2 colheres de sopa de farelo de aveia', '1 colher de sopa de iogurte natural ou água', '1/2 colher de chá de fermento em pó', 'Ervas ou sementes a gosto'],
    modo_preparo: 'Em uma caneca ou tigela, misture bem o ovo, o farelo de aveia e o iogurte. Adicione o fermento e as ervas, mexendo delicadamente. Leve ao micro-ondas por cerca de 2-3 minutos em potência alta. Desenforme e, se desejar, doure em uma frigideira ou sanduicheira.',
  },
  {
    id: 'crepe-whey-protein',
    titulo: 'Crepe de Whey Protein',
    categoria: 'lanches',
    imagem: 'breakfast-60',
    ingredientes: ['1 scoop de whey protein (sabor de sua preferência)', '2 claras de ovo'],
    modo_preparo: 'Em uma tigela, bata as claras levemente com um garfo. Adicione o whey protein e misture bem até dissolver completamente e formar uma massa homogênea. Aqueça uma frigideira antiaderente em fogo baixo e despeje a massa, formando um disco fino. Cozinhe por cerca de 1 minuto de cada lado, até firmar. Sirva com frutas ou a cobertura de sua preferência.',
  },
  {
    id: 'pao-sem-gluten-lactose',
    titulo: 'Pão sem Glúten e sem Lactose',
    categoria: 'lanches',
    imagem: 'breakfast-61',
    ingredientes: ['3 ovos', '1/2 xícara de leite de coco', '1/2 xícara de água morna', '1/4 xícara de azeite', '1 e 1/2 xícara de farinha de arroz', '1/2 xícara de polvilho doce', '1/2 xícara de fubá', '2 colheres de sopa de açúcar demerara', '1 colher de chá de sal', '10g de fermento biológico seco'],
    modo_preparo: 'No liquidificador, bata os ovos, o leite de coco, a água e o azeite. Em uma tigela, misture as farinhas, o fubá, o açúcar e o sal. Despeje a mistura líquida sobre os secos e mexa bem. Adicione o fermento e incorpore. Despeje em uma forma de pão untada, deixe crescer por 30 minutos e asse em forno a 180°C por 35-40 minutos.',
  },
  {
    id: 'crepioca-temperada',
    titulo: 'Crepioca Temperada',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-63',
    ingredientes: ['1 ovo', '2 colheres de sopa de goma de tapioca', '1 colher de sopa de queijo parmesão ralado', 'Salsinha picada a gosto', 'Sal e temperos a gosto'],
    modo_preparo: 'Bata o ovo com um garfo e misture a goma de tapioca, o queijo parmesão, a salsinha e os temperos. Aqueça uma frigideira antiaderente em fogo baixo e despeje a massa, espalhando para formar uma panqueca fina. Cozinhe até dourar dos dois lados.',
  },
  {
    id: 'bolo-amendoas-cacau',
    titulo: 'Bolo de Amêndoas e Cacau',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'breakfast-65',
    ingredientes: ['1 ovo', '2 colheres de sopa de farinha de aveia', '2 colheres de sopa de farinha de amêndoas', '1 colher de sopa de óleo de coco', '1 colher de sopa de cacau em pó', 'Mel ou adoçante a gosto', '1/2 colher de chá de fermento em pó'],
    modo_preparo: 'Em uma caneca grande, misture todos os ingredientes com um garfo até obter uma massa homogênea. Leve ao micro-ondas em potência alta por cerca de 2 a 3 minutos, ou até que o bolo esteja firme ao toque. Sirva na própria caneca.',
  },
  {
    id: 'tapioca-fitness',
    titulo: 'Tapioca Fitness',
    categoria: 'lanches',
    imagem: 'breakfast-67',
    ingredientes: ['Goma de tapioca', 'Queijo minas ou ricota', 'Frango desfiado', 'Frutas picadas', 'Chocolate amargo 70%'],
    modo_preparo: 'Peneire a goma de tapioca sobre uma frigideira antiaderente aquecida, formando um disco. Quando a massa se unir, adicione o recheio de sua preferência: para uma versão salgada, use queijo e frango; para uma doce, use frutas e pedaços de chocolate. Dobre e sirva.',
  },
  {
    id: 'suco-detoxificante',
    titulo: 'Suco Detoxificante',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-68',
    ingredientes: ['200ml de água', '1 folha de couve', 'Algumas folhas de hortelã', '1/2 maçã', '1/2 pepino', '1 rodela fina de gengibre'],
    modo_preparo: 'Lave bem todos os ingredientes. Pique a maçã e o pepino. Coloque tudo no liquidificador e bata em alta velocidade até a mistura ficar completamente líquida e homogênea. Sirva imediatamente, sem coar, para aproveitar todas as fibras.',
  },
  {
    id: 'suco-gaseificado',
    titulo: 'Suco Gaseificado',
    categoria: 'lanches',
    imagem: 'breakfast-69',
    ingredientes: ['200ml de água com gás gelada', '2 fatias de abacaxi', 'Folhas de hortelã a gosto', 'Gelo', 'Suco de 1/2 limão'],
    modo_preparo: 'No liquidificador, bata o abacaxi, a hortelã, o suco de limão e o gelo (sem a água com gás). Despeje a mistura em um copo e complete suavemente com a água com gás para não perder o efeito efervescente. Sirva em seguida.',
  },
  {
    id: 'suco-rosa',
    titulo: 'Suco Rosa',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-70',
    ingredientes: ['200ml de água', '1 fatia de melancia', '1/4 de beterraba crua', '1 rodela de gengibre', '1 pitada de canela em pó'],
    modo_preparo: 'Pique a melancia e a beterraba. Coloque todos os ingredientes no liquidificador e bata bem até obter uma mistura lisa e vibrante. Sirva gelado.',
  },
  {
    id: 'suco-verde',
    titulo: 'Suco Verde',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-71',
    ingredientes: ['200ml de água de coco', '1 folha de couve', '1/2 maçã', 'Suco de 1/2 limão', '1 rodela de gengibre'],
    modo_preparo: 'Lave bem a couve e a maçã. Coloque todos os ingredientes no liquidificador e bata em alta potência até que a mistura esteja completamente homogênea. Sirva imediatamente, sem coar, para um máximo aproveitamento dos nutrientes.',
  },
  {
    id: 'sucha-hibisco-morango',
    titulo: 'Suchá de Hibisco com Morango',
    categoria: 'lanches',
    imagem: 'breakfast-72',
    ingredientes: ['200ml de chá de hibisco gelado', '5 morangos frescos ou congelados', 'Folhas de hortelã a gosto', 'Gelo'],
    modo_preparo: 'Prepare o chá de hibisco e deixe esfriar completamente. No liquidificador, bata o chá gelado, os morangos, a hortelã e o gelo até obter uma bebida refrescante e homogênea. Sirva em seguida.',
  },
  {
    id: 'pao-de-queijo-low-carb-2',
    titulo: 'Pão de Queijo Low Carb',
    categoria: 'lanches',
    imagem: 'breakfast-56',
    ingredientes: ['2 ovos', '1 colher de sopa de manteiga derretida', '1 xícara de queijo parmesão ralado', '1/2 xícara de queijo muçarela ralado', '1 colher de chá de fermento em pó', '3 colheres de sopa de farinha de linhaça ou amêndoas'],
    modo_preparo: 'Pré-aqueça o forno a 180°C. Em uma tigela, misture os ovos, a manteiga e os queijos. Adicione a farinha e o fermento, mexendo bem. Distribua a massa em forminhas de silicone ou de empada e asse por cerca de 20 minutos, ou até dourarem.',
  },
  {
    id: 'pao-rapidex',
    titulo: 'Pão Rapidex',
    categoria: 'lanches',
    imagem: 'breakfast-73',
    ingredientes: ['1 ovo', '2 colheres de sopa de farinha de aveia', '1 colher de sopa de farinha de amêndoas', 'Sal e especiarias a gosto'],
    modo_preparo: 'Em uma tigela pequena, misture bem todos os ingredientes com um garfo até formar uma massa lisa. Aqueça uma frigideira pequena antiaderente em fogo baixo e despeje a massa. Cozinhe por cerca de 2-3 minutos de cada lado, até firmar e dourar.',
  },
  {
    id: 'pate-de-atum',
    titulo: 'Patê de Atum',
    categoria: 'lanches',
    imagem: 'breakfast-74',
    ingredientes: ['1 lata de atum sólido ao natural, escorrido', '2 colheres de sopa de azeite', 'Salsinha picada a gosto', 'Orégano a gosto', 'Azeitonas verdes picadas a gosto'],
    modo_preparo: 'Em uma tigela, amasse o atum com um garfo. Adicione o azeite, a salsinha, o orégano e as azeitonas, misturando bem até formar uma pasta. Leve à geladeira por pelo menos 15 minutos para apurar o sabor antes de servir.',
  },
  {
    id: 'guacamole',
    titulo: 'Guacamole',
    categoria: 'lanches',
    imagem: 'breakfast-75',
    ingredientes: ['1 avocado maduro', '1/2 tomate sem sementes picado', 'Suco de 1/2 limão', '1/4 de cebola roxa picada finamente', 'Sal e pimenta do reino a gosto'],
    modo_preparo: 'Em uma tigela, amasse a polpa do avocado com um garfo, deixando alguns pedaços. Adicione o tomate, a cebola e o suco de limão. Tempere com sal e pimenta e misture delicadamente. Sirva imediatamente.',
  },
  {
    id: 'ball-proteico',
    titulo: 'Ball Proteico',
    categoria: 'lanches',
    imagem: 'breakfast-76',
    ingredientes: ['1/2 xícara de oleaginosas (amêndoas, castanhas)', '2 colheres de sopa de cacau em pó', '1 scoop de whey protein', '2 colheres de sopa de mel ou agave', 'Coco ralado para enrolar', '1/2 banana amassada', '2 colheres de sopa de aveia'],
    modo_preparo: 'Triture as oleaginosas em um processador. Em uma tigela, misture todos os ingredientes (exceto o coco ralado) até formar uma massa densa. Modele pequenas bolinhas com as mãos e passe no coco ralado. Leve à geladeira por 30 minutos para firmar.',
  },
  {
    id: 'granola-funcional',
    titulo: 'Granola Funcional',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-77',
    ingredientes: ['1 colher de sopa de óleo de coco', '1/2 xícara de amêndoas', '1/2 xícara de castanha de caju', '1/4 xícara de avelãs', '1/4 xícara de sementes de girassol', '1/4 xícara de coco ralado sem açúcar'],
    modo_preparo: 'Em uma frigideira grande, aqueça o óleo de coco em fogo baixo. Adicione as oleaginosas e as sementes, mexendo constantemente até dourarem levemente. Adicione o coco ralado no final e mexa por mais um minuto. Deixe esfriar completamente antes de guardar.',
  },
  {
    id: 'pao-de-aveia',
    titulo: 'Pão de Aveia',
    categoria: 'lanches',
    imagem: 'breakfast-78',
    ingredientes: ['500g de farinha integral', '1 xícara de aveia em flocos', '10g de fermento biológico seco', '1 colher de sopa de açúcar mascavo', '1 ovo', '3 colheres de sopa de azeite', '1 colher de chá de sal', 'Aproximadamente 300ml de água morna'],
    modo_preparo: 'Em uma tigela, misture a farinha, a aveia, o fermento, o açúcar e o sal. Adicione o ovo, o azeite e a água aos poucos, sovando até obter uma massa macia e que não grude. Deixe a massa crescer por 1 hora. Modele o pão, coloque em uma forma e asse em forno a 180°C por 30-40 minutos.',
  },
  {
    id: 'pao-de-aveia-e-mel',
    titulo: 'Pão de Aveia e Mel',
    categoria: 'lanches',
    imagem: 'breakfast-79',
    ingredientes: ['250ml de leite morno', '1 ovo', '2 colheres de sopa de azeite', '10g de fermento biológico seco', '2 colheres de sopa de açúcar mascavo', '1 colher de chá de sal', '2 xícaras de farinha de trigo integral', '1 xícara de flocos de aveia', '2 colheres de sopa de mel'],
    modo_preparo: 'No liquidificador, bata o leite, o ovo, o azeite e o fermento. Em uma tigela, misture os ingredientes secos. Despeje a mistura líquida, adicione o mel e sove. Coloque em uma forma de pão untada, deixe crescer por 40 minutos e asse em forno pré-aquecido a 180°C até dourar.',
  },
  {
    id: 'pao-de-banana',
    titulo: 'Pão de Banana',
    categoria: 'lanches',
    imagem: 'breakfast-80',
    ingredientes: ['3 bananas maduras amassadas', '2 ovos', '1/4 xícara de óleo de coco', '1 e 1/2 xícara de aveia em flocos', '1 colher de chá de canela em pó', '1 colher de sopa de fermento em pó', '1 pitada de sal', '1/2 xícara de castanhas picadas (opcional)'],
    modo_preparo: 'Em uma tigela, misture as bananas amassadas com os ovos e o óleo de coco. Adicione a aveia, a canela, o sal e as castanhas, misturando bem. Incorpore o fermento por último. Despeje em uma forma de bolo inglês untada e asse em forno a 180°C por cerca de 40 minutos.',
  },
  {
    id: 'pao-de-maca-com-canela',
    titulo: 'Pão de Maçã com Canela Integral',
    categoria: 'lanches',
    imagem: 'breakfast-81',
    ingredientes: ['1 maçã picada', '1/2 xícara de água', '2 colheres de açúcar mascavo', 'Canela a gosto', '2 xícaras de farinha integral', '1/2 xícara de farinha de aveia', '2 ovos', '1/4 xícara de óleo de coco', '1/2 xícara de iogurte natural', '1 colher de chá de goma xantana', '10g de fermento biológico seco'],
    modo_preparo: 'Cozinhe a maçã com a água, açúcar e canela até amolecer. Em uma tigela, misture as farinhas, a goma e o fermento. Adicione os ovos, óleo, iogurte e a mistura de maçã cozida. Sove, deixe crescer por 30 minutos e asse em forno a 180°C até dourar.',
  },
  {
    id: 'pao-integral-simples',
    titulo: 'Pão Integral',
    categoria: 'lanches',
    imagem: 'breakfast-45',
    ingredientes: ['3 xícaras de farinha de trigo integral', '10g de fermento biológico seco', '1 e 1/2 xícara de água morna', '1 colher de chá de sal', '1 colher de sopa de açúcar mascavo', '2 colheres de sopa de óleo de coco', '2 colheres de sopa de linhaça'],
    modo_preparo: 'Em uma tigela, misture a farinha, o fermento, o sal e o açúcar. Adicione a água morna, o óleo e a linhaça, sovando bem por 10 minutos. Deixe a massa crescer em um local aquecido por 1 hora. Modele o pão e asse em forno pré-aquecido a 200°C por cerca de 30 minutos.',
  },
  {
    id: 'paozinho-de-aveia',
    titulo: 'Pãozinho de Aveia',
    categoria: 'lanches',
    imagem: 'breakfast-82',
    ingredientes: ['1/2 pote de iogurte natural', '3 colheres de sopa de farelo de aveia', '1 clara de ovo', '1/2 colher de chá de fermento em pó', 'Temperos a gosto'],
    modo_preparo: 'Em uma tigela, misture bem todos os ingredientes. Despeje em um recipiente pequeno untado que possa ir ao micro-ondas e cozinhe em potência alta por 2 a 3 minutos, ou até firmar. Sirva puro ou com recheio.',
  },
  {
    id: 'paozinho-recheado-ovo',
    titulo: 'Pãozinho Recheado com Ovo',
    categoria: 'lanches',
    imagem: 'breakfast-83',
    ingredientes: ['1/4 xícara de leite de coco', '1 colher de chá de vinagre', '3 colheres de sopa de farinha de aveia', '1/4 colher de chá de bicarbonato de sódio', '1/4 colher de chá de fermento em pó', 'Sal a gosto', '1 fio de azeite', '1 ovo'],
    modo_preparo: 'Misture o leite de coco com o vinagre e deixe descansar por 5 minutos. Adicione os ingredientes secos e o azeite, misturando bem. Em uma forminha de muffin untada, coloque metade da massa, quebre o ovo no centro, cubra com o restante da massa e asse em forno a 180°C até dourar.',
  },
  {
    id: 'paozinho-portugues',
    titulo: 'Pãozinho Português',
    categoria: 'lanches',
    imagem: 'breakfast-84',
    ingredientes: ['1 pote de iogurte natural (170g)', '2 colheres de sopa de azeite', '1 colher de chá de fermento em pó', '1 pitada de sal', 'Aproximadamente 1 xícara de farinha de aveia', '1 gema para pincelar'],
    modo_preparo: 'Em uma tigela, misture o iogurte, o azeite, o sal e o fermento. Adicione a farinha de aveia aos poucos, até a massa ficar macia e desgrudar das mãos. Modele bolinhas, pincele com a gema e asse em forno pré-aquecido a 180°C por 20-25 minutos.',
  },
  {
    id: 'pao-tostado-abacate-ovo',
    titulo: 'Pão Tostado com Abacate e Ovo',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-85',
    ingredientes: ['2 ovos cozidos', '2 fatias de pão integral', '1/2 abacate maduro', '1 colher de chá de manteiga', 'Suco de limão a gosto', 'Sal e pimenta do reino a gosto'],
    modo_preparo: 'Toste as fatias de pão em uma frigideira com manteiga até dourarem. Em uma tigela, amasse o abacate com um garfo, tempere com limão, sal e pimenta. Espalhe a pasta de abacate sobre as torradas e finalize com os ovos cozidos fatiados por cima.',
  },
  // Sobremesas Zero
  {
    id: 'mousse-de-maracuja-zero',
    titulo: 'Mousse de Maracujá Zero',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-1',
    ingredientes: ['1 xícara de suco de maracujá concentrado sem açúcar', '1 lata de creme de leite light', '1/2 xícara de adoçante culinário (xilitol ou eritritol)', '1 envelope de gelatina incolor sem sabor'],
    modo_preparo: 'Hidrate a gelatina conforme as instruções da embalagem. No liquidificador, bata o suco de maracujá, o creme de leite e o adoçante. Adicione a gelatina hidratada e bata por mais um minuto. Despeje em taças individuais e leve para gelar por pelo menos 2 horas, ou até firmar completamente.',
  },
  {
    id: 'creme-banana-pasta-amendoim',
    titulo: 'Creme de Banana com Pasta de Amendoim',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-2',
    ingredientes: ['2 bananas maduras congeladas em rodelas', '1 colher de sopa de pasta de amendoim integral', '2 colheres de sopa de água gelada (ou mais, se necessário)'],
    modo_preparo: 'Bata a banana congelada com a pasta de amendoim até virar um creme, adicionando água se necessário. Sirva imediatamente como um sorvete.',
  },
  {
    id: 'pacoca-fit',
    titulo: 'Paçoca Fit',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-3',
    ingredientes: ['1 xícara de amendoim torrado sem pele e sem sal', '1/2 xícara de leite em pó desnatado', '2 colheres de sopa de adoçante (xilitol ou eritritol)', '2 a 3 colheres de sopa de leite desnatado líquido'],
    modo_preparo: 'Processe o amendoim, junte o leite em pó e o adoçante. Adicione leite líquido aos poucos até dar liga. Pressione em uma forma e gele por 1 hora antes de cortar.',
  },
  {
    id: 'salada-frutas-granola',
    titulo: 'Salada de Frutas com Granola',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-4',
    ingredientes: ['1 xícara de morangos picados', '1 banana em rodelas', '1 fatia de mamão em cubos', '1 fatia de abacaxi em cubos', '1 kiwi em rodelas', '1/2 xícara de granola integral sem açúcar'],
    modo_preparo: 'Em uma tigela grande, misture delicadamente todas as frutas picadas. Sirva em porções individuais e finalize com uma generosa porção de granola por cima para adicionar crocância.',
  },
  {
    id: 'pudim-leite-fit',
    titulo: 'Pudim de Leite Fit',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-5',
    ingredientes: ['4 ovos', '500ml de leite desnatado', '1 xícara de leite em pó desnatado', '1/2 xícara de creme de ricota light', '1/2 xícara de adoçante culinário (xilitol)', '1 colher de chá de essência de baunilha'],
    modo_preparo: 'Bata todos os ingredientes no liquidificador. Despeje em uma forma de pudim e asse em banho-maria por cerca de 1 hora a 180°C. Deixe esfriar e gele por 4 horas.',
  },
  {
    id: 'sorvete-abacaxi-laranja',
    titulo: 'Sorvete de Abacaxi e Laranja',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-6',
    ingredientes: ['2 xícaras de abacaxi congelado em cubos', 'Suco de 1 laranja', 'Adoçante a gosto (opcional)'],
    modo_preparo: 'Bata o abacaxi congelado e o suco de laranja no processador até obter um creme liso. Adoce se desejar e leve ao congelador por 2 horas para firmar.',
  },
  {
    id: 'sorvete-banana-amendoim',
    titulo: 'Sorvete de Banana com Amendoim',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-7',
    ingredientes: ['3 bananas maduras congeladas em rodelas', '2 colheres de sopa de pasta de amendoim integral', '1 colher de chá de essência de baunilha'],
    modo_preparo: 'Em um processador, bata as bananas congeladas com a pasta de amendoim e a baunilha até a mistura ficar cremosa, com consistência de sorvete macio.',
  },
  {
    id: 'sorvete-frutas-tropicais',
    titulo: 'Sorvete Natural de Frutas Tropicais',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-8',
    ingredientes: ['1 banana madura congelada', 'Polpa de 1 maracujá congelada', '1/2 xícara de manga congelada em cubos'],
    modo_preparo: 'Bata todas as frutas congeladas em um processador até se transformarem em um creme gelado. Leve ao freezer por mais 3 horas para uma consistência mais firme.',
  },
  {
    id: 'sorvete-proteico',
    titulo: 'Sorvete Proteico',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-9',
    ingredientes: ['2 bananas maduras congeladas em rodelas', '1 scoop de whey protein (sabor baunilha ou chocolate)', '1 colher de sopa de mel ou algumas gotas de stevia (opcional)'],
    modo_preparo: 'Bata as bananas congeladas com o whey protein e adoçante até obter uma mistura cremosa. Leve ao freezer por pelo menos 4 horas para firmar.',
  },
  {
    id: 'bolo-de-beterraba-cobertura-chocolate',
    titulo: 'Bolo de Beterraba com Cobertura de Chocolate',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-66',
    ingredientes: ['1 xícara (chá) de suco de laranja', '4 xícaras (chá) de beterraba picada', '3 ovos', '2 xícaras (chá) de açúcar', '¾ xícara (chá) de óleo', '3 xícaras (chá) de farinha de trigo (ou integral)', '1 colher (sopa) de fermento', 'Para a cobertura:', '1 colher (sopa) de manteiga', '3 colheres (sopa) de cacau ou achocolatado', '3 colheres (sopa) de açúcar', '1 xícara (chá) de leite'],
    modo_preparo: 'Bata a beterraba com o suco de laranja no liquidificador. Em uma tigela, misture as gemas, o açúcar e o óleo, depois adicione a mistura de beterraba. Incorpore a farinha, as claras em neve e o fermento. Asse em forno médio pré-aquecido. Para a calda, cozinhe todos os ingredientes até engrossar e cubra o bolo ainda quente.'
  },
  {
    id: 'bolo-de-feijao',
    titulo: 'Bolo de Feijão',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-67',
    ingredientes: ['4 ovos', '2 xícaras de açúcar', '1 ½ xícara de farinha de trigo', '1 xícara de feijão cozido e batido', '1 xícara de óleo', '1 colher (sopa) de fermento'],
    modo_preparo: 'Bata as claras em neve e reserve. Bata as gemas com o açúcar, óleo e o feijão batido. Adicione a farinha e, por último, incorpore delicadamente as claras em neve e o fermento. Asse a 200°C por 40-45 minutos.'
  },
  {
    id: 'torta-de-aveia',
    titulo: 'Torta de Aveia',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-81',
    ingredientes: ['2 ovos', '1 xícara de leite em pó', '1/2 xícara de açúcar', '1 colher de sopa de manteiga', '1 xícara de aveia em flocos', '1 colher de chá de canela em pó', '1 colher de sopa de fermento'],
    modo_preparo: 'Misture bem todos os ingredientes até formar uma massa homogênea. Pressione a massa no fundo de uma forma de torta. Asse em forno pré-aquecido a 180°C até dourar. Sirva com uma cobertura de chocolate se desejar.'
  },
  {
    id: 'creme-de-laranja-e-cenoura',
    titulo: 'Creme de Laranja e Cenoura',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-1',
    ingredientes: ['1 cenoura', '200ml de água', '100ml de suco de laranja', '2 colheres de sopa de amido de milho', '3 colheres de sopa de açúcar'],
    modo_preparo: 'Cozinhe a cenoura e bata no liquidificador com a água e o suco de laranja. Leve a mistura ao fogo com o amido de milho e o açúcar, mexendo constantemente até engrossar. Deixe esfriar e sirva gelado.'
  },
  {
    id: 'doce-de-pao-dormido',
    titulo: 'Doce de Pão Dormido',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-1',
    ingredientes: ['3 pães amanhecidos fatiados', '1 maçã fatiada', 'Uvas-passas a gosto', '2 ovos', '200ml de leite', '2 colheres de sopa de açúcar', 'Gotas de baunilha', 'Canela em pó'],
    modo_preparo: 'Em um refratário, intercale camadas de pão fatiado, maçã e uvas-passas. Em uma tigela, bata os ovos com o leite, açúcar e baunilha, e despeje sobre os pães. Leve à geladeira por 30 minutos, polvilhe canela e asse até dourar.'
  },
  {
    id: 'arroz-doce-com-especiarias',
    titulo: 'Arroz Doce com Especiarias',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-1',
    ingredientes: ['1 xícara de arroz cozido', '500ml de leite', '1/2 xícara de açúcar', 'Canela em pau', 'Cravos-da-índia', '1 rodela de gengibre', 'Noz-moscada', 'Açafrão', 'Raspas de limão'],
    modo_preparo: 'Em uma panela, junte o arroz já cozido com o leite, açúcar e todas as especiarias. Cozinhe em fogo baixo, mexendo ocasionalmente, até o creme engrossar e ficar com a consistência desejada. Sirva quente ou frio.'
  },
  {
    id: 'compota-da-entrecasca-de-laranja',
    titulo: 'Compota da Entrecasca de Laranja',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-1',
    ingredientes: ['Parte branca da casca de 2 laranjas', '1 colher de chá de bicarbonato de sódio', '1 xícara de açúcar', 'Canela em pau', 'Cravos-da-índia'],
    modo_preparo: 'Para retirar o amargor, ferva a parte branca da casca com bicarbonato de sódio. Em seguida, cozinhe as cascas em uma calda de açúcar com especiarias até que fiquem macias e translúcidas.'
  },
  {
    id: 'trufa-de-banana-com-chocolate',
    titulo: 'Trufa de Banana com Chocolate',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-1',
    ingredientes: ['2 bananas nanicas maduras', '1 colher de sopa de açúcar', '50g de chocolate 70%', '1 colher de chá de manteiga', 'Canela a gosto', 'Cacau em pó para enrolar'],
    modo_preparo: 'Cozinhe a banana amassada com açúcar, chocolate, manteiga e canela até que a mistura desgrude do fundo da panela. Deixe a massa esfriar, modele pequenas bolinhas e passe no cacau em pó para finalizar.'
  },
  {
    id: 'sorvete-de-banana-simples',
    titulo: 'Sorvete de Banana Simples',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-1',
    ingredientes: ['3 bananas maduras congeladas', 'Canela em pó a gosto', 'Um pouco de água (se necessário)'],
    modo_preparo: 'Bata as bananas congeladas com canela em um processador potente, adicionando um pouco de água se necessário para ajudar a bater, até obter uma consistência cremosa. Sirva imediatamente para um sorvete mais macio.'
  },
  {
    id: 'brigadeiro-fit',
    titulo: 'Brigadeiro Fit',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-1',
    ingredientes: ['1 xícara de leite em pó desnatado', '1/2 xícara de água', '1 colher de sopa de chocolate em pó 80%', 'Adoçante a gosto', 'Frutas picadas para servir'],
    modo_preparo: 'Misture bem o leite em pó, a água, o chocolate em pó e o adoçante até formar um creme homogêneo. Sirva como uma calda saborosa sobre frutas frescas picadas de sua preferência.'
  },
  {
    id: 'pudim-de-chia',
    titulo: 'Pudim de Chia',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-1',
    ingredientes: ['3 colheres de sopa de sementes de chia', '200ml de leite vegetal', 'Frutas picadas a gosto (manga, morango)'],
    modo_preparo: 'Em um pote, misture as sementes de chia com o leite vegetal. Leve à geladeira por pelo menos 4 horas, ou de um dia para o outro, para formar um pudim consistente. Sirva com frutas frescas por cima.'
  },
  {
    id: 'brigadeiro-surpresa',
    titulo: 'Brigadeiro Surpresa',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-1',
    ingredientes: ['1 lata de leite condensado light', '1 xícara de biomassa de banana verde', '2 colheres de sopa de cacau em pó', '1/4 xícara de leite desnatado'],
    modo_preparo: 'Leve todos os ingredientes ao fogo médio, mexendo continuamente com uma espátula, até que a mistura desgrude completamente do fundo da panela. Deixe esfriar completamente antes de modelar os docinhos.'
  },
  {
    id: 'gelatina-de-whey',
    titulo: 'Gelatina de Whey',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-1',
    ingredientes: ['1 pacote de gelatina diet (sabor de sua preferência)', '1 pote de iogurte desnatado', 'Cubos de gelo', '1 scoop de whey protein (sabor que combine com a gelatina)'],
    modo_preparo: 'Prepare a gelatina conforme as instruções, mas usando menos água para um sabor mais concentrado. No liquidificador, bata a gelatina preparada com o iogurte, os cubos de gelo e o whey protein. Leve para gelar até firmar.'
  },
  {
    id: 'salada-de-frutas-especial',
    titulo: 'Salada de Frutas Especial',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-1',
    ingredientes: ['1/2 mamão papaia em cubos', '1 banana em rodelas', '1 xícara de morangos picados', 'Gomos de 1 laranja', '1 kiwi em rodelas', 'Suco de 1 laranja para regar'],
    modo_preparo: 'Junte todas as frutas picadas em uma tigela grande. Regue com o suco de laranja para realçar o sabor e evitar que as frutas escureçam. Sirva gelado para uma sobremesa refrescante.'
  },
  {
    id: 'sorvete-de-banana-proteico',
    titulo: 'Sorvete de Banana Proteico',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-1',
    ingredientes: ['2 bananas maduras e congeladas', '1 scoop de whey protein (sabor baunilha ou chocolate)'],
    modo_preparo: 'Em um processador de alimentos, bata as bananas congeladas até obter uma base cremosa e lisa. Adicione o whey protein e bata novamente para incorporar completamente. Sirva imediatamente como um sorvete macio.'
  },
  {
    id: 'cookies-de-coco-e-castanhas',
    titulo: 'Cookies de Coco e Castanhas',
    categoria: 'lanches',
    imagem: 'cake-29',
    ingredientes: ['1 xícara de castanhas', '1/2 xícara de farinha de coco', 'Adoçante a gosto', '1/2 colher de chá de bicarbonato de sódio', '1/4 xícara de leite de coco', '50g de chocolate amargo picado'],
    modo_preparo: 'Misture todos os ingredientes até formar uma massa. Modele pequenos discos e asse em forno pré-aquecido a 180°C até que os cookies fiquem dourados e firmes.'
  },
  {
    id: 'beijinho-fit',
    titulo: 'Beijinho Fit',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-1',
    ingredientes: ['1 xícara de leite em pó desnatado', '2 colheres de sopa de óleo de coco', 'Adoçante culinário a gosto', 'Água quente (o suficiente para dar ponto)', 'Coco ralado sem açúcar para enrolar'],
    modo_preparo: 'Bata o leite em pó, o óleo de coco e o adoçante, adicionando água quente aos poucos até formar uma massa moldável. Modele pequenas bolinhas, passe no coco ralado e asse levemente para firmar.'
  },
  {
    id: 'brigadeiro-de-colher-funcional',
    titulo: 'Brigadeiro de Colher Funcional',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-1',
    ingredientes: ['1 xícara de biomassa de banana verde', '2 colheres de sopa de xilitol', '1 colher de sopa de óleo de coco', '50g de chocolate 70%', '1/4 xícara de leite de coco', '1 pitada de sal'],
    modo_preparo: 'Misture todos os ingredientes em uma panela e leve ao fogo baixo. Mexa continuamente até o chocolate derreter e a mistura atingir uma consistência cremosa, ideal para comer de colher.'
  },
  {
    id: 'trufa-funcional',
    titulo: 'Trufa Funcional',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-1',
    ingredientes: ['1/2 xícara de farelo de aveia', '2 colheres de sopa de açúcar mascavo', '2 colheres de sopa de cacau em pó', '3 colheres de sopa de pasta de amendoim'],
    modo_preparo: 'Misture bem todos os ingredientes até formar uma massa densa e homogênea. Modele pequenas bolinhas com as mãos, passe no cacau em pó para cobrir e leve à geladeira para firmar antes de servir.'
  },
  {
    id: 'pe-de-moleque-fitness',
    titulo: 'Pé de Moleque Fitness',
    categoria: 'lanches',
    imagem: 'dessert-1',
    ingredientes: ['100g de chocolate amargo 70%', '1/2 xícara de amendoim torrado sem sal', '2 biscoitos de arroz integrais picados'],
    modo_preparo: 'Derreta o chocolate em banho-maria ou no micro-ondas. Misture com o amendoim e o biscoito de arroz picado. Espalhe a mistura em uma superfície com papel manteiga, nivele e leve à geladeira para endurecer.'
  },
  {
    id: 'banoffee-no-pote',
    titulo: 'Banoffee no Pote',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-1',
    ingredientes: ['4 bolachas integrais trituradas', '1/2 pote de doce de leite sem açúcar', '1 banana em rodelas', '1/2 pote de iogurte grego natural', 'Canela em pó para polvilhar'],
    modo_preparo: 'Em um pote de vidro, monte camadas na seguinte ordem: farofa de bolacha, doce de leite, rodelas de banana e, por fim, o iogurte grego. Finalize polvilhando canela por cima e sirva gelado.'
  },
  {
    id: 'mousse-de-leite-em-po',
    titulo: 'Mousse de Leite em Pó',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-1',
    ingredientes: ['1 xícara de leite em pó desnatado', '1 xícara de água gelada', '1 pacote de suco em pó zero açúcar (sabor maracujá)'],
    modo_preparo: 'Bata o leite em pó com a água gelada no liquidificador até obter uma mistura cremosa. Adicione o suco em pó e bata novamente para incorporar. Leve para gelar até firmar.'
  },
  {
    id: 'pudim-de-chocolate-com-whey',
    titulo: 'Pudim de Chocolate com Whey',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-1',
    ingredientes: ['200ml de água', '2 colheres de sopa de cacau em pó', '3 colheres de sopa de leite em pó desnatado', '1 pacote de pudim diet sabor chocolate', '1 scoop de whey protein de chocolate'],
    modo_preparo: 'Dissolva todos os ingredientes na água fria, mexendo bem. Leve ao fogo baixo, mexendo continuamente até ferver. Cozinhe por mais um minuto, despeje em uma forma e leve para gelar.'
  },
  {
    id: 'cheesecake-anabolico',
    titulo: 'Cheesecake Anabólico',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-1',
    ingredientes: ['200g de cream cheese light', '1 pote de iogurte desnatado', '2 ovos', 'Adoçante a gosto', '1 scoop de whey protein de baunilha', 'Gotas de baunilha'],
    modo_preparo: 'Bata todos os ingredientes no liquidificador. Asse em banho-maria, primeiro em forno alto por 15 minutos e depois em forno baixo por mais 45 minutos. Deixe esfriar dentro do forno e leve à geladeira.'
  },
  {
    id: 'cookie-de-grao-de-bico',
    titulo: 'Cookie de Grão-de-Bico',
    categoria: 'lanches',
    imagem: 'dessert-1',
    ingredientes: ['1 xícara de grão-de-bico cozido', '2 colheres de sopa de azeite', '1 colher de sopa de chia', '1/2 xícara de farinha de arroz', 'Temperos a gosto (páprica, orégano)'],
    modo_preparo: 'Processe o grão-de-bico até virar uma pasta. Misture os demais ingredientes, modele os cookies e asse em forno pré-aquecido a 180°C até ficarem firmes e levemente dourados.'
  },
  {
    id: 'palitinhos-crocantes',
    titulo: 'Palitinhos Crocantes',
    categoria: 'lanches',
    imagem: 'cake-28',
    ingredientes: ['1 xícara de batata baroa cozida', '1/2 xícara de cenoura cozida', '1/4 xícara de azeite', '1 xícara de polvilho azedo', '1/4 xícara de chia', 'Sal a gosto'],
    modo_preparo: 'Amasse os legumes cozidos e misture com os demais ingredientes até formar uma massa. Modele palitos finos, coloque em uma assadeira e asse em forno pré-aquecido até ficarem crocantes.'
  },
  {
    id: 'danete-cremoso-de-chocolate',
    titulo: 'Danete Cremoso de Chocolate',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-1',
    ingredientes: ['200ml de leite de coco', '2 colheres de sopa de cacau em pó', '2 colheres de sopa de chocolate em pó', '1/2 abacate congelado', '1 colher de sopa de chia', 'Adoçante a gosto'],
    modo_preparo: 'Bata todos os ingredientes no liquidificador até obter um creme aveludado e homogêneo. Sirva gelado, decorado com raspas de chocolate 70% se desejar.'
  },
  {
    id: 'biscoitinhos-de-banana-e-aveia',
    titulo: 'Biscoitinhos de Banana e Aveia',
    categoria: 'lanches',
    imagem: 'cake-33',
    ingredientes: ['2 bananas maduras', '1 xícara de aveia em flocos', 'Canela em pó a gosto'],
    modo_preparo: 'Amasse bem as bananas e misture com a aveia e a canela. Modele pequenos biscoitos e asse em forno pré-aquecido a 180°C até dourarem.'
  },
  {
    id: 'sementinhas-de-abobora-torradas',
    titulo: 'Sementinhas de Abóbora Torradas',
    categoria: 'lanches',
    imagem: 'cake-41',
    ingredientes: ['Sementes de 1 abóbora', 'Azeite', 'Sal', 'Pimenta-preta a gosto'],
    modo_preparo: 'Lave e seque bem as sementes. Misture com azeite e temperos e espalhe em uma assadeira. Asse em forno baixo, mexendo ocasionalmente, até ficarem crocantes e douradas.'
  },
  {
    id: 'barrinhas-de-cereal-vapt-vupt',
    titulo: 'Barrinhas de Cereal Vapt-vupt',
    categoria: 'lanches',
    imagem: 'cake-22',
    ingredientes: ['2 bananas maduras', '1 xícara de farinha de aveia', '2 colheres de sopa de açúcar mascavo', '1/2 xícara de castanhas trituradas', '1 colher de sopa de farinha de linhaça', '1/4 xícara de coco ralado'],
    modo_preparo: 'Amasse bem as bananas e misture com todos os outros ingredientes. Pressione a massa em uma forma untada, asse em forno médio e corte as barrinhas ainda morno.'
  },
  {
    id: 'biscoitinhos-de-mel',
    titulo: 'Biscoitinhos de Mel',
    categoria: 'lanches',
    imagem: 'cake-32',
    ingredientes: ['1 ovo', '3 colheres de sopa de óleo de coco', '3 colheres de sopa de mel', '2 colheres de sopa de açúcar mascavo', '1/2 colher de chá de fermento', '1 colher de sopa de linhaça', '1/2 xícara de polvilho doce', '1/2 xícara de amido de milho'],
    modo_preparo: 'Misture os líquidos com o açúcar. Incorpore os ingredientes secos aos poucos até formar uma massa. Modele pequenas bolinhas e asse em forno pré-aquecido até dourarem.'
  },
  {
    id: 'pao-de-queijo-de-mandioquinha',
    titulo: 'Pão de Queijo de Mandioquinha',
    categoria: 'lanches',
    imagem: 'cake-19',
    ingredientes: ['1 xícara de polvilho azedo', '1/2 xícara de polvilho doce', '1/4 xícara de azeite', '2 xícaras de mandioquinha cozida e amassada', '1/4 xícara de água', 'Sal e ervas a gosto'],
    modo_preparo: 'Escalde os polvilhos com água e azeite quentes. Misture o purê de mandioquinha e os temperos. Modele bolinhas e asse até dourarem.'
  },
  {
    id: 'biscoitinhos-de-aveia-com-creme-de-cacau',
    titulo: 'Biscoitinhos de Aveia com Creme de Cacau',
    categoria: 'lanches',
    imagem: 'cake-36',
    ingredientes: ['1 xícara de farinha integral', '1/2 xícara de farelo de aveia', '1/4 xícara de óleo de coco', '2 colheres de sopa de açúcar demerara', '1 ovo', '1/2 colher de chá de fermento', 'Recheio: 1 xícara de avelã torrada, 1/4 xícara de chocolate 70%, 1 colher de sopa de leite vegetal'],
    modo_preparo: 'Prepare a massa dos biscoitos, asse e deixe esfriar. Para o recheio, bata a avelã com o chocolate derretido e o leite até obter um creme. Recheie os biscoitos.'
  },
  {
    id: 'muffin-de-ricota-com-tomatinho',
    titulo: 'Muffin de Ricota com Tomatinho',
    categoria: 'lanches',
    imagem: 'cake-17',
    ingredientes: ['2 ovos', '3 colheres de sopa de farinha de aveia', '1 colher de chá de fermento', 'Tomate cereja', 'Queijo cottage', 'Sal a gosto'],
    modo_preparo: 'Misture os ingredientes da massa. Distribua em forminhas, adicione um tomate cereja e uma colher de cottage em cada uma. Asse até dourar.'
  },
  {
    id: 'chips-de-legumes',
    titulo: 'Chips de Legumes',
    categoria: 'lanches',
    imagem: 'airfryer-6',
    ingredientes: ['1 beterraba', '1 batata-doce', 'Azeite', 'Sal', 'Pimenta a gosto'],
    modo_preparo: 'Fatie os legumes bem finos. Tempere com azeite, sal e pimenta. Distribua em uma assadeira sem sobrepor e asse em forno baixo até ficarem crocantes.'
  },
  {
    id: 'panqueca-doce-de-forno',
    titulo: 'Panqueca Doce de Forno',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-61',
    ingredientes: ['1 xícara de farinha de arroz', '1 colher de sopa de azeite', '1 colher de sopa de gergelim', '1/2 xícara de água morna', '1 banana em rodelas', 'Mel a gosto'],
    modo_preparo: 'Prepare a massa da panqueca e asse em uma forma redonda para criar a base. Finalize com as rodelas de banana e um fio de mel por cima.'
  },
  {
    id: 'abacate-com-limao-e-mel',
    titulo: 'Abacate com Limão e Mel',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-70',
    ingredientes: ['1/2 abacate', 'Suco de 1/2 limão', '1 colher de chá de mel'],
    modo_preparo: 'Corte o abacate ao meio e retire o caroço. Finalize regando com o suco de limão e o mel. Sirva imediatamente.'
  },
  {
    id: 'sagu-funcional-de-chia-com-alfarroba',
    titulo: 'Sagu Funcional de Chia com Alfarroba',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-25',
    ingredientes: ['3 colheres de sopa de chia', '200ml de leite de coco', '1 colher de sopa de alfarroba em pó', '1 colher de sopa de açúcar mascavo'],
    modo_preparo: 'Misture todos os ingredientes em uma tigela. Deixe hidratar na geladeira por pelo menos 2 horas, mexendo ocasionalmente, até formar um gel consistente. Sirva gelado.'
  },
  {
    id: 'banana-quentinha-com-canela',
    titulo: 'Banana Quentinha com Canela',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-7',
    ingredientes: ['1 banana', 'Canela em pó a gosto'],
    modo_preparo: 'Corte a banana ao meio no sentido do comprimento. Polvilhe canela a gosto e aqueça no micro-ondas por 30 a 40 segundos, ou em uma frigideira antiaderente.'
  },
  {
    id: 'nuts-caramelizadas',
    titulo: 'Nuts Caramelizadas',
    categoria: 'lanches',
    imagem: 'cake-41',
    ingredientes: ['1 xícara de amêndoas', '1 xícara de castanha-de-caju', '3 colheres de sopa de açúcar mascavo', '1 colher de sopa de manteiga', '1 colher de chá de canela', '2 colheres de sopa de amaranto em flocos'],
    modo_preparo: 'Derreta o açúcar e a manteiga em uma panela. Junte as nuts e a canela, mexendo até caramelizar. Retire do fogo, misture o amaranto e espalhe para esfriar.'
  },
  {
    id: 'pudim-de-manga',
    titulo: 'Pudim de Manga',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-24',
    ingredientes: ['200ml de leite de coco', '1 manga madura', '3 colheres de sopa de chia', '1 colher de chá de baunilha'],
    modo_preparo: 'Bata metade do leite de coco com a manga. Misture o restante do leite com a chia e a baunilha e deixe hidratar. Monte em taças, alternando as camadas dos cremes.'
  },
  {
    id: 'maca-assada-com-canela',
    titulo: 'Maçã Assada com Canela',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-50',
    ingredientes: ['1 maçã', 'Canela em pó', '1 canela em pau'],
    modo_preparo: 'Retire o miolo da maçã. Recheie a cavidade com canela em pó e espete um pau de canela. Embrulhe em papel alumínio e asse em forno médio até ficar macia.'
  },
  {
    id: 'mingau-delicia-de-coco',
    titulo: 'Mingau Delícia de Coco',
    categoria: 'cafe-da-manha',
    imagem: 'dessert-1',
    ingredientes: ['3 colheres de sopa de aveia ou quinoa', '1 colher de sopa de amaranto', '200ml de leite de coco', 'Canela a gosto', '1/2 banana ou ameixa seca picada'],
    modo_preparo: 'Cozinhe a aveia (ou quinoa) com amaranto, leite de coco e canela em fogo baixo, mexendo sempre, até engrossar. Sirva com a fruta de sua escolha.'
  },
  {
    id: 'tortinha-de-chocolate-e-nuts',
    titulo: 'Tortinha de Chocolate e Nuts',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-11',
    ingredientes: ['1 xícara de amêndoas', '1/2 xícara de tâmaras sem caroço', '1 colher de sopa de chia', '1 colher de sopa de óleo de coco', '100g de chocolate 70%', '100ml de leite de coco'],
    modo_preparo: 'Processe amêndoas, tâmaras e chia para a base e pressione em forminhas. Derreta o chocolate com leite de coco para o recheio. Recheie as bases e refrigere.'
  },
  {
    id: 'docinho-de-frutas-secas',
    titulo: 'Docinho de Frutas Secas',
    categoria: 'lanches',
    imagem: 'dessert-3',
    ingredientes: ['1/2 xícara de tâmaras', '1/4 xícara de banana passa', '1/4 xícara de damasco', '1/4 xícara de ameixa', '1/2 xícara de castanhas', '1 colher de sopa de alfarroba', '1 colher de sopa de óleo de coco'],
    modo_preparo: 'Processe todos os ingredientes até formar uma massa homogênea. Modele pequenas bolinhas e leve à geladeira por alguns minutos para firmar.'
  },
  {
    id: 'sorvete-de-banana-com-cacau',
    titulo: 'Sorvete de Banana com Cacau',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-7',
    ingredientes: ['2 bananas congeladas', '1 colher de sopa de cacau em pó', '1 colher de sopa de gel de chia', '1 colher de sopa de açúcar mascavo'],
    modo_preparo: 'Congele as bananas em rodelas. Bata-as com os demais ingredientes em um processador potente até obter um creme. Leve ao congelador para firmar.'
  },
  {
    id: 'cuscuz-branco-doce',
    titulo: 'Cuscuz Branco Doce',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-5',
    ingredientes: ['1 xícara de tapioca granulada', '400ml de leite ou água quente', '3 colheres de sopa de açúcar', '50g de coco ralado', 'Leite condensado a gosto'],
    modo_preparo: 'Misture a tapioca com o açúcar, escalde com o líquido quente e abafe por 10 minutos. Finalize com coco ralado e leite condensado a gosto.'
  },
  {
    id: 'sorvete-de-ora-pro-nobis',
    titulo: 'Sorvete de Ora-pro-nóbis',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-8',
    ingredientes: ['1 lata de leite condensado', '1 lata de creme de leite', '1/2 xícara de leite em pó', '50g de coco ralado', '1 xícara de água', '1 xícara de folhas de ora-pro-nóbis'],
    modo_preparo: 'Bata as folhas de ora-pro-nóbis com água e coe. Bata o suco com os demais ingredientes no liquidificador. Leve ao freezer até firmar, mexendo na metade do tempo.'
  },
  {
    id: 'brigadeiro-de-batata-doce',
    titulo: 'Brigadeiro de Batata-doce',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-3',
    ingredientes: ['1 xícara de batata-doce cozida e amassada', '2 colheres de sopa de açúcar mascavo', '2 colheres de sopa de cacau em pó', '1 colher de sopa de manteiga'],
    modo_preparo: 'Amasse bem a batata-doce. Leve ao fogo com os outros ingredientes, mexendo até desgrudar do fundo da panela. Esfrie, modele e finalize como preferir.'
  },
  {
    id: 'mousse-de-maracuja',
    titulo: 'Mousse de Maracujá',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-1',
    ingredientes: ['1 lata de leite condensado', '1 lata de creme de leite', 'A mesma medida de suco de maracujá concentrado'],
    modo_preparo: 'Bata todos os ingredientes no liquidificador até a mistura ficar bem homogênea e aerada. Despeje em uma travessa ou em taças individuais e leve para gelar até firmar.'
  },
  {
    id: 'banana-pao-assada',
    titulo: 'Banana-pão Assada',
    categoria: 'lanches',
    imagem: 'breakfast-66',
    ingredientes: ['1 banana-pão madura', '2 claras de ovo', 'Gotas de essência de baunilha', 'Um pouco de água', 'Canela em pó', 'Frutas vermelhas para servir'],
    modo_preparo: 'Asse a banana-pão com casca em forno a 180°C até ficar macia. Retire a polpa, amasse bem e misture com as claras, a baunilha e a canela. Leve a uma panela com um pouco de água e cozinhe em fogo baixo, mexendo, até engrossar e virar um creme. Sirva com frutas vermelhas.'
  },
  {
    id: 'muffin-de-pitanga',
    titulo: 'Muffin de Pitanga',
    categoria: 'lanches',
    imagem: 'cake-64',
    ingredientes: ['1 xícara de farinha sem glúten', '1/2 xícara de açúcar demerara', '1 xícara de pitanga sem caroço', '1/4 xícara de óleo de coco', '1/4 xícara de água', '1 colher de chá de baunilha', '1 colher de sopa de linhaça', '1 colher de sopa de fermento'],
    modo_preparo: 'Misture todos os ingredientes até obter uma massa homogênea. Distribua em forminhas de muffin e asse em forno pré-aquecido a 180°C até dourar.'
  },
  {
    id: 'brigadeiro-fit-proteico',
    titulo: 'Brigadeiro Fit Proteico',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-3',
    ingredientes: ['1 scoop de proteína em pó', '1 colher de sopa de amido de milho', '1 colher de sopa de cacau', '200ml de leite vegetal', '1/2 xícara de batata-doce cozida', 'Essência de chocolate (opcional)'],
    modo_preparo: 'Cozinhe e amasse a batata-doce. Bata com os demais ingredientes e leve ao fogo baixo até engrossar. Deixe esfriar, modele as bolinhas e finalize como desejar.'
  },
  {
    id: 'pudim-de-forno-com-whey',
    titulo: 'Pudim de Forno com Whey',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-5',
    ingredientes: ['3 ovos', '1 colher de sopa de amido de milho', '2 scoops de whey de chocolate'],
    modo_preparo: 'Misture bem todos os ingredientes até obter uma massa homogênea. Despeje em uma forma e asse em banho-maria no forno até que, ao espetar um palito, ele saia limpo.'
  },
  {
    id: 'sorvete-diet',
    titulo: 'Sorvete Diet',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-9',
    ingredientes: ['1 pacote de gelatina diet (sabor de sua preferência)', '1 lata de leite condensado diet', '1 lata de creme de leite'],
    modo_preparo: 'Prepare a gelatina e bata no liquidificador com o leite condensado e o creme de leite. Leve para gelar por 3 horas. Bata novamente na batedeira e volte ao freezer até firmar.'
  },
  {
    id: 'iogurte-de-limao-diet',
    titulo: 'Iogurte de Limão Diet',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-8',
    ingredientes: ['1 pote de iogurte natural desnatado', '200ml de leite desnatado', '1 pacote de gelatina sabor limão diet'],
    modo_preparo: 'Dissolva a gelatina conforme a embalagem. Misture com o leite e o iogurte. Leve à geladeira em taças individuais até firmar.'
  },
  {
    id: 'creme-de-coco-com-maracuja-diet',
    titulo: 'Creme de Coco com Maracujá Diet',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-1',
    ingredientes: ['1 xícara de leite de coco', '1 xícara de água morna', '1/2 xícara de leite desnatado em pó', '1/2 xícara de coco ralado', 'Polpa de 1 maracujá', '1/2 xícara de leite condensado diet', '1 envelope de gelatina sem sabor', '2 claras em neve'],
    modo_preparo: 'Bata todos os ingredientes no liquidificador, exceto as claras. Incorpore delicadamente as claras em neve à mistura e leve para gelar até firmar.'
  },
  {
    id: 'doce-de-leite-diet',
    titulo: 'Doce de Leite Diet',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-1',
    ingredientes: ['1/2 xícara de frutose', '1 litro de leite desnatado', '1 colher de sopa de amido de milho', '1 colher de café de bicarbonato de sódio'],
    modo_preparo: 'Cozinhe todos os ingredientes em fogo baixo, mexendo sempre, por cerca de 40 minutos ou até engrossar. Deixe esfriar e leve à geladeira para firmar.'
  },
  {
    id: 'banana-em-calda-natural',
    titulo: 'Banana em Calda Natural',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-2',
    ingredientes: ['4 bananas maduras', '1/2 xícara de água'],
    modo_preparo: 'Fatie as bananas e cozinhe em fogo bem baixo com a água, mexendo ocasionalmente, até que elas soltem a própria calda e fiquem macias.'
  },
  {
    id: 'cocadinha-low-carb',
    titulo: 'Cocadinha Low Carb',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-52',
    ingredientes: ['1 xícara de coco fresco ralado', '2 ovos', '2 colheres de sopa de xilitol', '1/2 colher de chá de fermento em pó'],
    modo_preparo: 'Misture bem todos os ingredientes. Coloque a massa em forminhas de silicone ou de papel e asse em forno pré-aquecido a 180°C até dourar.'
  },
  {
    id: 'mousse-de-cacau-com-nuts',
    titulo: 'Mousse de Cacau com Nuts',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-53',
    ingredientes: ['1 abacate maduro', '3 colheres de sopa de cacau em pó', '3 colheres de sopa de xilitol', '1 colher de sopa de chia', '100ml de leite de coco', '1/4 xícara de castanha-do-pará picada', '1/4 xícara de amêndoas laminadas', 'Folhas de hortelã para decorar'],
    modo_preparo: 'Bata o abacate, cacau, xilitol, chia e leite de coco até obter um creme. Leve para gelar por 2 horas e sirva finalizado com as nuts e hortelã.'
  },
  {
    id: 'bolo-minuto',
    titulo: 'Bolo Minuto',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-14',
    ingredientes: ['1 colher de sopa de óleo de coco', '2 colheres de sopa de farinha de coco', '1 colher de sopa de xilitol', '1/2 colher de chá de fermento', '1 ovo', 'Gotas de baunilha'],
    modo_preparo: 'Misture todos os ingredientes em uma caneca e leve ao micro-ondas por 1 a 2 minutos, ou até que esteja assado.'
  },
  {
    id: 'bolinho-de-cenoura-com-chocolate',
    titulo: 'Bolinho de Cenoura com Chocolate',
    categoria: 'lanches',
    imagem: 'cake-52',
    ingredientes: ['1 cenoura pequena ralada', '2 ovos', '1 colher de sopa de manteiga derretida', '1/2 xícara de farinha de amêndoas', '1/2 colher de chá de fermento', 'Adoçante (xilitol) a gosto', 'Calda: 50g de chocolate 70%, 2 colheres de sopa de creme de leite'],
    modo_preparo: 'Prepare a massa misturando todos os ingredientes. Asse os bolinhos em forminhas. Finalize com a calda de chocolate preparada derretendo o chocolate com o creme de leite.'
  },
  {
    id: 'banana-no-palito-com-chocolate',
    titulo: 'Banana no Palito com Chocolate',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-51',
    ingredientes: ['2 bananas', '100g de chocolate amargo 70%', '1 colher de chá de óleo de coco'],
    modo_preparo: 'Corte as bananas ao meio e espete um palito em cada pedaço. Derreta o chocolate com o óleo de coco, banhe as bananas e coloque sobre papel manteiga. Leve ao freezer até endurecer.'
  },
  {
    id: 'beijinho-fit-2',
    titulo: 'Beijinho Fit',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-52',
    ingredientes: ['1 xícara de leite em pó desnatado', '1/2 xícara de coco ralado sem açúcar', '1/4 xícara de leite de coco', 'Adoçante a gosto'],
    modo_preparo: 'Misture todos os ingredientes até obter uma massa que desgrude das mãos. Leve à geladeira por 15 minutos e depois modele as bolinhas.'
  },
  {
    id: 'bolinhas-de-banana-e-castanhas-2',
    titulo: 'Bolinhas de Banana e Castanhas',
    categoria: 'lanches',
    imagem: 'cake-38',
    ingredientes: ['1 xícara de aveia', '1 banana madura amassada', '1/2 xícara de farinha de amêndoas', '1/2 xícara de castanhas picadas', '1 colher de chá de canela', '2 colheres de sopa de pasta de amendoim', '1 colher de sopa de mel', '1 colher de sopa de óleo de coco'],
    modo_preparo: 'Misture todos os ingredientes até formar uma massa. Leve a massa à geladeira por 30 minutos para firmar e depois modele as bolinhas.'
  },
  {
    id: 'brigadeirao-fit-2',
    titulo: 'Brigadeirão Fit',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-56',
    ingredientes: ['3 ovos', '1 xícara de leite desnatado', '1/2 xícara de leite em pó', '3 colheres de sopa de cacau em pó', '3 colheres de sopa de xilitol', '1 colher de sopa de óleo de coco'],
    modo_preparo: 'Bata todos os ingredientes no liquidificador. Despeje em uma forma de pudim e asse em banho-maria em forno a 180°C até firmar.'
  },
  {
    id: 'brigadeiro-light',
    titulo: 'Brigadeiro Light',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-3',
    ingredientes: ['1 colher de sopa de óleo de coco ou ghee', '2 colheres de sopa de cacau em pó', '2 colheres de sopa de açúcar demerara', '200ml de leite desnatado', '1 xícara de leite em pó'],
    modo_preparo: 'Leve todos os ingredientes ao fogo baixo, mexendo continuamente, até atingir o ponto de brigadeiro de colher ou de enrolar.'
  },
  {
    id: 'brownie-de-batata-doce',
    titulo: 'Brownie de Batata-doce',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-62',
    ingredientes: ['2 xícaras de batata-doce cozida e amassada', '3 ovos', '1/2 xícara de cacau em pó', '1/4 xícara de mel', '1/4 xícara de água', '1 xícara de farinha de amêndoas', '1/2 xícara de nozes picadas', '1 colher de sopa de fermento'],
    modo_preparo: 'Bata a massa do brownie com todos os ingredientes, exceto as nozes. Misture as nozes por último. Asse em forno pré-aquecido até que o centro esteja cozido, mas ainda úmido.'
  },
  {
    id: 'brownie-fit-de-aveia',
    titulo: 'Brownie Fit de Aveia',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-63',
    ingredientes: ['100g de chocolate meio amargo', '2 colheres de sopa de óleo de coco', '2 ovos', '1/2 xícara de açúcar mascavo', '1 xícara de farinha de aveia', 'Nozes picadas a gosto'],
    modo_preparo: 'Misture todos os ingredientes em uma tigela, incorporando as nozes por último. Asse em forno pré-aquecido até que um palito inserido no centro saia com algumas migalhas úmidas.'
  },
  {
    id: 'chandelle-fit-2',
    titulo: 'Chandelle Fit',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-53',
    ingredientes: ['500ml de leite desnatado', '2 colheres de sopa de cacau em pó', '2 colheres de sopa de amido de milho', '3 colheres de sopa de xilitol'],
    modo_preparo: 'Dissolva o amido no leite frio. Junte os outros ingredientes e leve ao fogo baixo, mexendo sempre até engrossar. Despeje em taças e leve à geladeira.'
  },
  {
    id: 'churros-fit-2',
    titulo: 'Churros Fit',
    categoria: 'lanches',
    imagem: 'cake-57',
    ingredientes: ['1 xícara de água', '1 colher de sopa de açúcar de coco', '1 colher de sopa de óleo de coco', '1 pitada de sal', '1 xícara de farinha integral'],
    modo_preparo: 'Leve os líquidos e o açúcar ao fogo. Quando ferver, adicione a farinha de uma vez e cozinhe até formar uma massa. Modele os churros e asse até dourarem.'
  },
  {
    id: 'cookie-de-micro-ondas',
    titulo: 'Cookie de Micro-ondas',
    categoria: 'lanches',
    imagem: 'cake-35',
    ingredientes: ['1 gema', '1 colher de sopa de farinha de amêndoas', 'Gotas de chocolate 70%', '1 colher de chá de açúcar mascavo', 'Gotas de baunilha', '1/2 colher de sopa de óleo de coco'],
    modo_preparo: 'Misture todos os ingredientes e leve ao micro-ondas em um prato pequeno, em potência alta, por cerca de 1 a 2 minutos, ou até firmar.'
  },
  {
    id: 'cremoso-de-frutas',
    titulo: 'Cremoso de Frutas',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-26',
    ingredientes: ['1 pote de iogurte desnatado', '1 colher de sopa de mel', '1/4 xícara de nozes picadas', '1 xícara de frutas vermelhas'],
    modo_preparo: 'Em uma taça, misture o iogurte com o mel. Adicione as nozes picadas e as frutas vermelhas frescas por cima para finalizar.'
  },
  {
    id: 'frozen-yogurt-de-mamao',
    titulo: 'Frozen Yogurt de Mamão',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-48',
    ingredientes: ['1/2 mamão congelado em pedaços', '1 pote de iogurte desnatado', '1 colher de sopa de mel'],
    modo_preparo: 'Bata o mamão congelado com o iogurte e o mel em um processador ou liquidificador potente até formar um creme homogêneo. Leve ao congelador por mais um tempo antes de servir.'
  },
  {
    id: 'geleia-de-amora-2',
    titulo: 'Geleia de Amora',
    categoria: 'lanches',
    imagem: 'cake-47',
    ingredientes: ['2 xícaras de amora', '1/2 xícara de açúcar mascavo'],
    modo_preparo: 'Leve as amoras e o açúcar mascavo ao fogo baixo. Cozinhe, mexendo de vez em quando, até as frutas desmancharem e a mistura engrossar. Se quiser mais cremosa, bata com um mixer.'
  },
  {
    id: 'goiabinhas-fit-2',
    titulo: 'Goiabinhas Fit',
    categoria: 'lanches',
    imagem: 'cake-54',
    ingredientes: ['1 xícara de farinha de arroz ou aveia', '1/4 xícara de manteiga', '1/4 xícara de água', '2 colheres de sopa de xilitol', '100g de goiabada sem açúcar'],
    modo_preparo: 'Prepare a massa misturando farinha, manteiga, água e xilitol. Modele os biscoitos, faça uma cavidade no centro, recheie com um pedaço de goiabada e asse até dourar.'
  },
  {
    id: 'leite-condensado-fake',
    titulo: 'Leite Condensado Fake',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-5',
    ingredientes: ['1 xícara de leite em pó desnatado', '1 colher de sopa de óleo de coco', '1/4 xícara de açúcar mascavo', '1/2 xícara de água quente'],
    modo_preparo: 'Bata todos os ingredientes no liquidificador por 5 minutos. Leve à geladeira por pelo menos 2 horas para engrossar.'
  },
  {
    id: 'maca-recheada-2',
    titulo: 'Maçã Recheada',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-50',
    ingredientes: ['1 maçã', '1/4 xícara de farofa de amêndoas', 'Nozes picadas', '1 colher de chá de óleo de coco', 'Canela a gosto', '1 fio de mel'],
    modo_preparo: 'Retire o miolo da maçã. Misture a farofa com os demais ingredientes e recheie a maçã. Asse em forno médio até ficar macia.'
  },
  {
    id: 'manjar-de-coco',
    titulo: 'Manjar de Coco',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-5',
    ingredientes: ['500ml de leite desnatado', '1/2 xícara de leite em pó', '1 pote de iogurte natural', '200ml de leite de coco', '1 envelope de gelatina sem sabor', 'Adoçante a gosto', 'Calda de ameixa para servir'],
    modo_preparo: 'Hidrate a gelatina. Bata todos os ingredientes no liquidificador. Despeje em uma forma e gele até firmar. Sirva com a calda de ameixa.'
  },
  {
    id: 'mousse-de-limao-2',
    titulo: 'Mousse de Limão',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-8',
    ingredientes: ['1 xícara de leite em pó desnatado', 'Adoçante a gosto', '1/2 xícara de água quente', 'Suco de 2 limões'],
    modo_preparo: 'Bata o leite em pó, adoçante e água quente no liquidificador. Com o liquidificador ligado, adicione o suco de limão aos poucos até engrossar. Leve para gelar.'
  },
  {
    id: 'pacoca-fit-2',
    titulo: 'Paçoca Fit',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-3',
    ingredientes: ['1 xícara de amendoim torrado', '1/2 xícara de leite em pó desnatado', 'Adoçante a gosto', '2 colheres de sopa de leite desnatado'],
    modo_preparo: 'Processe o amendoim. Adicione os pós e por último o leite até dar liga. Compacte em uma forma e gele antes de cortar.'
  },
  {
    id: 'palha-italiana-fit',
    titulo: 'Palha Italiana Fit',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-3',
    ingredientes: ['1/2 pacote de biscoito integral triturado', '200ml de leite de coco', '100g de chocolate amargo', '2 colheres de sopa de mel ou xilitol'],
    modo_preparo: 'Derreta o chocolate com o leite de coco. Misture os demais ingredientes. Coloque em uma forma forrada e leve à geladeira até firmar. Corte em quadrados.'
  },
  {
    id: 'pe-de-moleque-fit-2',
    titulo: 'Pé de Moleque Fit',
    categoria: 'lanches',
    imagem: 'dessert-3',
    ingredientes: ['1/2 xícara de açúcar de coco', '1/4 xícara de água', '1 colher de sopa de mel', '1 xícara de amendoim torrado'],
    modo_preparo: 'Prepare uma calda com o açúcar, água e mel. Misture o amendoim, espalhe sobre uma superfície untada e corte após esfriar.'
  },
  {
    id: 'petit-gateau-fit',
    titulo: 'Petit Gateau Fit',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-64',
    ingredientes: ['50g de chocolate amargo 70%', '1 colher de sopa de xylitol', '1 ovo', '1 colher de sopa de pasta de amendoim', '1 colher de sopa de farinha de aveia'],
    modo_preparo: 'Derreta o chocolate com a pasta de amendoim. Misture o ovo, o xylitol e a farinha de aveia. Asse em forno alto por poucos minutos para manter o centro cremoso.'
  },
  {
    id: 'petit-gateau-com-pasta-de-amendoim-recheado',
    titulo: 'Petit Gateau com Pasta de Amendoim Recheado',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-65',
    ingredientes: ['50g de chocolate amargo 70%', '1 colher de sopa de óleo de coco', '1 colher de sopa de xylitol', '1 ovo', '1 colher de sopa de farinha de aveia', 'Recheio: 1 colher de sopa de pasta de amendoim, 1 colher de chá de óleo de coco'],
    modo_preparo: 'Congele a pasta de amendoim com o óleo em pequenas porções. Prepare a massa do petit gateau, coloque o recheio congelado no centro e asse até firmar por fora.'
  },
  {
    id: 'picole-de-amendoim',
    titulo: 'Picolé de Amendoim',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-7',
    ingredientes: ['2 bananas congeladas', '2 colheres de sopa de pasta de amendoim', '1/4 xícara de água gelada'],
    modo_preparo: 'Bata todos os ingredientes no liquidificador até obter um creme homogêneo. Coloque em forminhas de picolé e leve ao freezer até firmar completamente.'
  },
  {
    id: 'pudim-de-chia-com-creme-de-manga',
    titulo: 'Pudim de Chia com Creme de Manga',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-24',
    ingredientes: ['200ml de leite de coco', '3 colheres de sopa de chia', '1 colher de sopa de mel', 'Gotas de baunilha', 'Canela a gosto', 'Polpa de 1 manga'],
    modo_preparo: 'Misture o leite com a chia, mel e especiarias e leve à geladeira para engrossar. Processe a manga para fazer um creme. Monte em camadas em uma taça.'
  },
  {
    id: 'pudim-de-chia-de-chocolate',
    titulo: 'Pudim de Chia de Chocolate',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-25',
    ingredientes: ['200ml de leite de amêndoas', '3 colheres de sopa de chia', '1 colher de sopa de mel', 'Gotas de baunilha', '2 colheres de sopa de cacau em pó'],
    modo_preparo: 'Misture o leite com a chia e o mel. Separe metade da mistura e adicione o cacau. Leve as duas partes para gelar até firmar e depois monte em camadas.'
  },
  {
    id: 'pudim-de-leite-nutritivo',
    titulo: 'Pudim de Leite Nutritivo',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-5',
    ingredientes: ['4 ovos', '500ml de leite desnatado', '1 xícara de leite em pó', '1/2 xícara de creme de ricota', 'Adoçante a gosto', '1 colher de chá de baunilha', 'Calda: 1/2 xícara de açúcar mascavo'],
    modo_preparo: 'Bata todos os ingredientes do pudim no liquidificador. Despeje sobre a calda de açúcar mascavo já preparada na forma. Asse em banho-maria até firmar.'
  },
  // Airfryer
  {
    id: 'macarrao-de-abobrinha-com-ovos',
    titulo: 'Macarrão de Abobrinha com Ovos',
    categoria: 'airfryer-proteica',
    imagem: 'airfryer-7',
    ingredientes: ['Ovos', 'Abobrinhas', 'Tomate', 'Sal'],
    modo_preparo: 'Bata os ovos com sal e faça omeletes finas. Deixe esfriar, enrole e corte em tiras. Corte a abobrinha em formato de espaguete e pique o tomate. Misture tudo delicadamente e sirva como uma salada.'
  },
  {
    id: 'nhoque-de-moranga',
    titulo: 'Nhoque de Moranga',
    categoria: 'airfryer-proteica',
    imagem: 'airfryer-8',
    ingredientes: ['Purê de moranga', 'Ovo', 'Farinha de arroz ou trigo', 'Sal', 'Noz-moscada'],
    modo_preparo: 'Misture o purê de moranga com o ovo e os temperos. Adicione a farinha aos poucos até dar ponto de enrolar. Faça rolinhos, corte os nhoques e cozinhe em água fervente até subirem à superfície.'
  },
  {
    id: 'bolinho-de-feijao',
    titulo: 'Bolinho de Feijão',
    categoria: 'airfryer-proteica',
    imagem: 'airfryer-9',
    ingredientes: ['Feijão cozido e amassado', 'Cenoura ralada', 'Azeite', 'Amido de milho ou farinha de trigo', 'Temperos naturais', 'Sal'],
    modo_preparo: 'Misture todos os ingredientes até formar uma massa firme. Modele pequenos bolinhos, coloque na airfryer pré-aquecida a 200°C e asse por 15-20 minutos, até dourar.'
  },
  {
    id: 'almondegas-ao-molho-de-mamao',
    titulo: 'Almôndegas ao Molho de Mamão',
    categoria: 'airfryer-proteica',
    imagem: 'airfryer-10',
    ingredientes: ['Pão', 'Carne moída', 'Sal', 'Mamão', 'Cebola', 'Alho', 'Polpa de tomate', 'Salsa'],
    modo_preparo: 'Misture a carne com o pão umedecido e modele as almôndegas. Asse na airfryer a 200°C por 15 minutos. Para o molho, refogue cebola e alho, adicione o mamão batido, a polpa de tomate e cozinhe. Junte as almôndegas e finalize com salsa.'
  },
  {
    id: 'arroz-verdinho',
    titulo: 'Arroz Verdinho',
    categoria: 'almoco',
    imagem: 'airfryer-11',
    ingredientes: ['Arroz', 'Cebola', 'Alho', 'Talos de agrião', 'Salsa', 'Rama de cenoura', 'Sal'],
    modo_preparo: 'Cozinhe o arroz como de costume. Em outra panela, refogue cebola e alho. Adicione os talos e ervas picados e refogue. Misture este refogado ao arroz cozido, ajuste o sal e sirva.'
  },
  {
    id: 'aproveitamento-de-pao-salgado',
    titulo: 'Aproveitamento de Pão (Versão Salgada)',
    categoria: 'lanches',
    imagem: 'airfryer-12',
    ingredientes: ['Pães', 'Tomate', 'Cebola', 'Ovos', 'Leite', 'Muçarela', 'Orégano', 'Sal', 'Pimenta'],
    modo_preparo: 'Em um refratário, disponha os pães com tomate e cebola. Despeje os ovos batidos com leite e temperos. Cubra com muçarela e asse na airfryer a 180°C por 15-20 minutos.'
  },
  {
    id: 'panqueca-de-arroz-salgada',
    titulo: 'Panqueca de Arroz Salgada',
    categoria: 'almoco',
    imagem: 'airfryer-13',
    ingredientes: ['Arroz cozido', 'Cebola', 'Cenoura ralada', 'Salsa', 'Cebolinha', 'Ovos', 'Amido de milho', 'Queijo ralado', 'Sal'],
    modo_preparo: 'Misture bem todos os ingredientes. Modele discos finos e asse na airfryer pré-aquecida a 180°C por cerca de 15 minutos, virando na metade do tempo.'
  },
  {
    id: 'salada-de-cascas',
    titulo: 'Salada de Cascas',
    categoria: 'almoco',
    imagem: 'airfryer-14',
    ingredientes: ['Casca de abóbora', 'Casca de berinjela', 'Casca de chuchu', 'Tomate', 'Cebola', 'Azeite', 'Ervas', 'Sal'],
    modo_preparo: 'Cozinhe as cascas no vapor até ficarem macias. Pique as cascas cozidas e misture com o tomate e a cebola. Tempere e sirva morna ou fria.'
  },
  {
    id: 'salpicao-de-cascas',
    titulo: 'Salpicão de Cascas',
    categoria: 'almoco',
    imagem: 'airfryer-15',
    ingredientes: ['Cascas variadas', 'Couve', 'Salsão', 'Azeite', 'Limão', 'Sal', 'Ervas'],
    modo_preparo: 'Cozinhe as cascas no vapor até amaciarem. Pique-as, misture com a couve e o salsão. Tempere e leve à geladeira por 30 minutos antes de servir.'
  },
  {
    id: 'panqueca-super-facil',
    titulo: 'Panqueca Super Fácil',
    categoria: 'lanches',
    imagem: 'airfryer-16',
    ingredientes: ['Ovos', 'Cenoura', 'Fubá ou flocão', 'Aveia', 'Leite de coco'],
    modo_preparo: 'Bata os ovos, cenoura, fubá e leite de coco no liquidificador. Incorpore a aveia. Despeje pequenas porções na airfryer e asse a 180°C por 10-12 minutos, virando na metade.'
  },
  {
    id: 'omelete-de-jambu',
    titulo: 'Omelete de Jambu',
    categoria: 'cafe-da-manha',
    imagem: 'airfryer-17',
    ingredientes: ['Ovos', 'Jambu cozido', 'Cebola', 'Azeite', 'Sal', 'Pimenta'],
    modo_preparo: 'Bata os ovos com sal e pimenta. Adicione o jambu. Em uma forma pequena, refogue a cebola, despeje a mistura de ovos e asse na airfryer a 180°C por 12-15 minutos.'
  },
  {
    id: 'feijao-caseiro-com-vegetais',
    titulo: 'Feijão Caseiro com Vegetais',
    categoria: 'almoco',
    imagem: 'airfryer-18',
    ingredientes: ['Feijão cozido', 'Abóbora', 'Maxixe', 'Quiabo', 'Couve', 'Alho', 'Cebola', 'Sal'],
    modo_preparo: 'Cozinhe o feijão. Refogue alho e cebola. Adicione os legumes e cozinhe com a água do feijão. Junte o feijão e a couve, deixe o caldo engrossar e tempere.'
  },
  {
    id: 'torta-de-legumes-airfryer',
    titulo: 'Torta de Legumes na Airfryer',
    categoria: 'lanches',
    imagem: 'airfryer-19',
    ingredientes: ['2 colheres de sopa de manteiga', '1 xícara de farinha de trigo', '3 ovos', '1 xícara de leite', '1 xícara de verduras cozidas e picadas (espinafre, brócolis)'],
    modo_preparo: 'Misture manteiga derretida, farinha, ovos e leite. Incorpore as verduras. Despeje em uma forma pequena e asse na airfryer a 180°C por 25-30 minutos.'
  },
  {
    id: 'falso-omelete-rapido',
    titulo: 'Falso Omelete Rápido',
    categoria: 'cafe-da-manha',
    imagem: 'airfryer-20',
    ingredientes: ['1/2 xícara de creme de leite', '2 colheres de sopa de farinha de trigo ou tapioca', 'Recheio a gosto (legumes refogados, queijo)', 'Sal e temperos a gosto'],
    modo_preparo: 'Misture o creme de leite, a farinha e o sal. Incorpore o recheio. Despeje em forminhas e asse na airfryer a 180°C por cerca de 15 minutos.'
  },
  {
    id: 'macarrao-cremoso-proteico',
    titulo: 'Macarrão Cremoso Proteico',
    categoria: 'jantar',
    imagem: 'airfryer-21',
    ingredientes: ['200g de macarrão cozido', '1/2 xícara de leite', '2 colheres de sopa de creme de leite', '1/2 cebola e 1 dente de alho picados', '150g de frango desfiado ou carne moída refogada', 'Legumes cozidos a gosto', 'Queijo ralado para gratinar'],
    modo_preparo: 'Cozinhe o macarrão. Refogue a proteína. Em um refratário, misture todos os ingredientes, cubra com queijo e leve à airfryer a 200°C por 10 minutos para gratinar.'
  },
  {
    id: 'cuscuz-pernambucano-fit',
    titulo: 'Cuscuz Pernambucano Fit',
    categoria: 'jantar',
    imagem: 'airfryer-22',
    ingredientes: ['1 xícara de farinha de milho flocada (flocão)', '1 xícara de água', '1/2 colher de chá de sal', '1 xícara de legumes cozidos e picados (cenoura, ervilha, milho)', '1 ovo cozido picado', '50g de charque desfiada e dessalgada', '50g de queijo coalho em cubos'],
    modo_preparo: 'Hidrate a farinha de milho. Misture com os legumes, ovo e charque. Coloque metade em um refratário, distribua o queijo e cubra com o restante. Asse na airfryer a 180°C por 15 minutos.'
  },
  {
    id: 'pastelao-de-mandioca-proteico',
    titulo: 'Pastelão de Mandioca Proteico',
    categoria: 'lanches',
    imagem: 'airfryer-23',
    ingredientes: ['2 xícaras de mandioca cozida e amassada', '1/2 xícara de farinha de arroz', 'Recheio: 1 xícara de frango ou jaca desfiada e temperada', 'Farinha de baru para empanar', 'Folhas de ora-pro-nóbis picadas (opcional)'],
    modo_preparo: 'Misture a mandioca com a farinha e ora-pro-nóbis. Abra uma porção, recheie e feche. Passe na farinha de baru e asse na airfryer a 200°C por 20 minutos, virando na metade.'
  },
  {
    id: 'sopa-paraguaia-do-cerrado',
    titulo: 'Sopa Paraguaia do Cerrado',
    categoria: 'jantar',
    imagem: 'airfryer-24',
    ingredientes: ['1 xícara de farinha de milho', '1 lata de milho verde', '200g de queijo minas padrão em cubos', '3 ovos', '500ml de leite', '1 cebola picada', '1/2 xícara de castanha de baru picada'],
    modo_preparo: 'Misture todos os ingredientes. Despeje em uma forma que caiba na airfryer e asse a 180°C por 30-40 minutos, até firmar e dourar.'
  },
  {
    id: 'molho-de-tomate-caseiro',
    titulo: 'Molho de Tomate Caseiro',
    categoria: 'lanches',
    imagem: 'airfryer-25',
    ingredientes: ['5 tomates maduros', '2 dentes de alho', '1 cebola pequena', 'Ervas frescas a gosto (manjericão, orégano)', 'Sal e azeite a gosto'],
    modo_preparo: 'Refogue alho e cebola no azeite. Adicione os tomates e ervas, e cozinhe até desmanchar. Bata no liquidificador, tempere com sal e reserve.'
  },
  {
    id: 'caldo-verde-com-vegetais',
    titulo: 'Caldo Verde com Vegetais',
    categoria: 'jantar',
    imagem: 'airfryer-26',
    ingredientes: ['1 abobrinha', '1 xícara de brócolis', '3 folhas de couve', '1 inhame ou batata-doce', '1/4 de repolho', '2 dentes de alho', 'Sal a gosto'],
    modo_preparo: 'Cozinhe todos os vegetais até ficarem macios. Bata tudo no liquidificador com um pouco da água do cozimento. Volte para a panela, aqueça e ajuste o sal.'
  },
  {
    id: 'coxinha-de-batata-doce-com-frango',
    titulo: 'Coxinha de Batata Doce com Frango',
    categoria: 'lanches',
    imagem: 'airfryer-27',
    ingredientes: ['2 xícaras de batata-doce cozida e amassada', '1/2 xícara de farelo de aveia', '1 xícara de frango cozido e desfiado para o recheio'],
    modo_preparo: 'Misture a batata-doce com a aveia. Abra porções, recheie com frango e modele as coxinhas. Asse na airfryer a 200°C por 20 minutos, até dourarem.'
  },
  {
    id: 'bolinho-de-frango-com-legumes',
    titulo: 'Bolinho de Frango com Legumes',
    categoria: 'lanches',
    imagem: 'airfryer-28',
    ingredientes: ['300g de frango moído ou triturado', '1/2 abobrinha ralada', '1/2 cenoura ralada', '50g de queijo minas padrão em cubos pequenos'],
    modo_preparo: 'Misture o frango com os legumes e tempere. Modele bolinhos com um cubo de queijo no centro. Asse na airfryer a 180°C por 25 minutos.'
  },
  {
    id: 'molho-de-melancia',
    titulo: 'Molho de Melancia',
    categoria: 'lanches',
    imagem: 'airfryer-29',
    ingredientes: ['2 xícaras de melancia sem sementes', '1/2 pimentão vermelho', '1 dente de alho', '1/2 cebola', 'Ervas frescas (hortelã) e sal a gosto'],
    modo_preparo: 'Bata a melancia com o pimentão. Refogue alho e cebola, adicione o suco e cozinhe até reduzir. Tempere e finalize com ervas. Ótimo para saladas.'
  },
  {
    id: 'refogado-de-casca-de-melancia',
    titulo: 'Refogado de Casca de Melancia',
    categoria: 'almoco',
    imagem: 'airfryer-30',
    ingredientes: ['Parte branca da casca de 1/4 de melancia', '2 dentes de alho picados', '1/2 cebola picada', 'Azeite e sal a gosto'],
    modo_preparo: 'Retire a parte verde externa e rale a parte branca da casca. Refogue alho e cebola no azeite, adicione a casca e cozinhe até ficar macia. Tempere com sal.'
  },
  {
    id: 'antepasto-de-casca-de-banana',
    titulo: 'Antepasto de Casca de Banana',
    categoria: 'lanches',
    imagem: 'airfryer-31',
    ingredientes: ['Casca de 3 bananas', '1/2 cebola roxa fatiada', 'Ervas finas, sal e azeite a gosto'],
    modo_preparo: 'Ferva as cascas de banana por 10 minutos. Escorra e fatie. Tempere com cebola, ervas, sal e azeite. Asse na airfryer a 160°C por 15 minutos.'
  },
  {
    id: 'frango-perfumado',
    titulo: 'Frango Perfumado',
    categoria: 'airfryer-proteica',
    imagem: 'airfryer-32',
    ingredientes: ['4 sobrecoxas de frango sem pele', 'Suco de 1 limão', 'Pimentões coloridos fatiados', '1 cebola em rodelas', '1 tomate em rodelas', 'Ervas frescas (alecrim, tomilho)'],
    modo_preparo: 'Tempere o frango com limão, sal e pimenta. Em um refratário, faça uma cama com os legumes e ervas, coloque o frango por cima e asse na airfryer a 180°C por 30-35 minutos.'
  },
  {
    id: 'tomates-assados-rusticos',
    titulo: 'Tomates Assados Rústicos',
    categoria: 'lanches',
    imagem: 'airfryer-33',
    ingredientes: ['4 tomates maduros cortados ao meio', '4 dentes de alho inteiros', '1 cebola em pétalas', 'Azeite abundante', 'Ervas frescas a gosto'],
    modo_preparo: 'Coloque os tomates, alho e cebola em uma forma. Regue com azeite e ervas. Asse na airfryer a 160°C por 25 minutos. Amasse levemente com um garfo para criar uma pasta rústica.'
  },
  {
    id: 'panqueca-low-carb-salgada-2',
    titulo: 'Panqueca Low Carb Salgada',
    categoria: 'lanches',
    imagem: 'airfryer-34',
    ingredientes: ['2 ovos', '2 colheres de sopa de farinha de amêndoas', '1 colher de sopa de farelo de aveia', '1/2 colher de chá de fermento em pó', 'Sal e temperos a gosto'],
    modo_preparo: 'Misture todos os ingredientes. Despeje pequenas porções em um tapete de silicone na airfryer e asse a 180°C por 10-12 minutos, virando na metade. Recheie como preferir.'
  },
  {
    id: 'arroz-integral-a-grega',
    titulo: 'Arroz Integral à Grega',
    categoria: 'almoco',
    imagem: 'airfryer-35',
    ingredientes: ['1 xícara de arroz integral', '1/2 cebola picada', '1 cenoura pequena em cubos', 'Cebolinha picada a gosto', 'Azeite e sal'],
    modo_preparo: 'Refogue a cebola e a cenoura no azeite. Adicione o arroz, cubra com água fervente, tempere e cozinhe em fogo baixo. Finalize com cebolinha.'
  },
  {
    id: 'grao-de-bico-com-legumes',
    titulo: 'Grão-de-Bico com Legumes',
    categoria: 'almoco',
    imagem: 'airfryer-36',
    ingredientes: ['2 xícaras de grão-de-bico cozido', '1 cebola picada', '2 dentes de alho picados', '1/2 talo de alho-poró fatiado', '1 tomate em cubos', 'Legumes variados (brócolis, couve-flor)', 'Azeite e sal a gosto'],
    modo_preparo: 'Refogue cebola, alho e alho-poró. Adicione o tomate e os legumes, cozinhando até ficarem macios. Misture o grão-de-bico, ajuste o sal e sirva.'
  },
  {
    id: 'hamburguer-de-grao-de-bico',
    titulo: 'Hambúrguer de Grão-de-Bico',
    categoria: 'airfryer-proteica',
    imagem: 'airfryer-37',
    ingredientes: ['1 xícara de grão-de-bico cozido', '1 dente de alho', '1/2 cebola', 'Salsinha e orégano a gosto', 'Suco de 1/2 limão', '3 colheres de sopa de farinha de aveia'],
    modo_preparo: 'Processe o grão-de-bico com os temperos. Transfira para uma tigela, adicione a farinha e misture até dar liga. Modele os hambúrgueres e grelhe até dourar.'
  },
  {
    id: 'kibe-vegetariano-proteico',
    titulo: 'Kibe Vegetariano Proteico',
    categoria: 'airfryer-proteica',
    imagem: 'airfryer-38',
    ingredientes: ['1 xícara de trigo para kibe', '1 xícara de proteína de soja texturizada fina', '1/2 xícara de aveia em flocos', '1 xícara de lentilha cozida', '2 dentes de alho', '1 cebola', 'Folhas de hortelã a gosto', 'Azeite para regar'],
    modo_preparo: 'Hidrate o trigo e a proteína de soja. Misture com lentilha, aveia e temperos. Pressione em uma forma, regue com azeite e asse a 180°C por 30 minutos.'
  },
  {
    id: 'hamburgao-de-forno-proteico',
    titulo: 'Hamburgão de Forno Proteico',
    categoria: 'lanches',
    imagem: 'airfryer-39',
    ingredientes: ['Massa: 2 xícaras de farinha integral, 10g de fermento biológico, 1/4 xícara de óleo, 1 colher de linhaça', 'Recheio: Hambúrguer de proteína de soja, queijo, tomate'],
    modo_preparo: 'Prepare a massa e deixe crescer. Abra, recheie com o hambúrguer e outros itens, feche e asse a 180°C até dourar.'
  },
  {
    id: 'guacamole-proteico',
    titulo: 'Guacamole Proteico',
    categoria: 'lanches',
    imagem: 'airfryer-40',
    ingredientes: ['1 abacate maduro', 'Suco de 1 limão', '1 fio de azeite', 'Sal a gosto', '1 dente de alho picado', '1/2 cebola picada', 'Pimenta a gosto'],
    modo_preparo: 'Amasse o abacate com um garfo. Adicione os demais ingredientes, misture bem e leve à geladeira por 15 minutos antes de servir.',
  },
  {
    id: 'tartar-de-salmao-com-guacamole',
    titulo: 'Tartar de Salmão com Guacamole',
    categoria: 'jantar',
    imagem: 'airfryer-41',
    ingredientes: ['200g de salmão fresco picado', 'Suco de 1 limão', '1 colher de chá de mostarda Dijon', 'Azeite e pimenta a gosto', 'Guacamole para acompanhar'],
    modo_preparo: 'Tempere o salmão picado com limão, mostarda, azeite e pimenta. Deixe marinar na geladeira. Sirva o tartar sobre uma cama de guacamole fresco.',
  },
  {
    id: 'arroz-de-couve-flor',
    titulo: 'Arroz de Couve-Flor',
    categoria: 'almoco',
    imagem: 'airfryer-42',
    ingredientes: ['1 couve-flor média', '1 colher de sopa de manteiga ghee', 'Sal e pimenta a gosto'],
    modo_preparo: 'Processe ou rale a couve-flor até obter grãos. Em uma frigideira, derreta a manteiga e refogue a couve-flor por 5-7 minutos. Tempere e sirva.',
  },
  {
    id: 'torta-proteica-de-atum',
    titulo: 'Torta Proteica de Atum',
    categoria: 'lanches',
    imagem: 'airfryer-43',
    ingredientes: ['1 xícara de farinha integral', '1/2 xícara de whey protein sem sabor', '2 ovos', '1 xícara de leite vegetal', '1/4 xícara de óleo de coco', '1 lata de atum', '1/2 xícara de queijo cottage', '1 colher de sopa de fermento'],
    modo_preparo: 'Bata ovos, leite e óleo. Adicione farinha e whey. Incorpore o fermento. Despeje metade da massa na forma, recheie com atum e cottage, cubra e asse a 180°C por 30-35 minutos.',
  },
  {
    id: 'escondidinho-de-batata-doce-com-frango',
    titulo: 'Escondidinho de Batata Doce com Frango',
    categoria: 'jantar',
    imagem: 'airfryer-44',
    ingredientes: ['500g de batata-doce cozida', '300g de frango desfiado', '1 xícara de molho de tomate', '1/2 xícara de queijo cottage', '1/2 cebola e alho picados'],
    modo_preparo: 'Amasse a batata-doce para um purê. Refogue o frango com temperos e molho. Em um refratário, faça uma camada de frango, cubra com o purê e espalhe o cottage. Gratine no forno ou airfryer.',
  },
  {
    id: 'pastel-proteico-de-batata-doce',
    titulo: 'Pastel Proteico de Batata Doce',
    categoria: 'lanches',
    imagem: 'airfryer-45',
    ingredientes: ['1 xícara de batata-doce cozida e amassada', '3 colheres de sopa de farinha de aveia', '1 colher de sopa de azeite', 'Recheio: carne moída refogada', 'Sal a gosto'],
    modo_preparo: 'Misture batata-doce, aveia, azeite e sal. Abra a massa, recheie e feche. Pincele gema e asse na airfryer a 200°C até dourar.',
  },
  {
    id: 'sopa-de-lentilha-com-carne',
    titulo: 'Sopa de Lentilha com Carne',
    categoria: 'jantar',
    imagem: 'airfryer-46',
    ingredientes: ['1 xícara de lentilha', '200g de músculo cozido e desfiado', '1/2 xícara de couve picada', '1 xícara de couve-flor em floretes', '1 cebola e 2 dentes de alho'],
    modo_preparo: 'Refogue alho e cebola. Adicione lentilha e carne, cubra com água e cozinhe. Adicione a couve-flor e a couve, cozinhe mais um pouco e sirva.',
  },
  {
    id: 'torta-de-tapioca-com-frango-airfryer',
    titulo: 'Torta de Tapioca com Frango (Airfryer)',
    categoria: 'lanches',
    imagem: 'airfryer-47',
    ingredientes: ['1 xícara de goma de tapioca', '200g de frango cozido e desfiado', '100g de muçarela ralada', '2 ovos', '2 colheres de sopa de requeijão light', '1 colher de chá de fermento em pó'],
    modo_preparo: 'Misture bem todos os ingredientes. Despeje em uma forma que caiba na airfryer e asse a 180°C por 20-25 minutos, até firmar e dourar.',
  },
  {
    id: 'salada-de-bacalhau-com-feijao-fradinho',
    titulo: 'Salada de Bacalhau com Feijão Fradinho',
    categoria: 'almoco',
    imagem: 'airfryer-48',
    ingredientes: ['300g de bacalhau dessalgado e desfiado', '1 xícara de feijão fradinho cozido', '1 banana-da-terra grelhada em cubos', '1/2 cebola roxa fatiada', 'Azeite, vinagre e coentro a gosto'],
    modo_preparo: 'Misture delicadamente o bacalhau, feijão, banana e cebola. Tempere com azeite, vinagre e coentro fresco. Sirva fria.',
  },
  {
    id: 'nhoque-de-baroa-com-molho-de-salvia',
    titulo: 'Nhoque de Baroa com Molho de Sálvia',
    categoria: 'jantar',
    imagem: 'airfryer-49',
    ingredientes: ['500g de batata baroa cozida e amassada', '1 xícara de farinha de trigo (aproximadamente)', '2 gemas', '2 colheres de sopa de manteiga', 'Folhas de sálvia fresca'],
    modo_preparo: 'Misture a batata com as gemas e a farinha. Modele os nhoques e cozinhe em água fervente. Em uma frigideira, derreta a manteiga com a sálvia e salteie os nhoques cozidos.',
  },
  {
    id: 'picadinho-a-jardineira-proteico',
    titulo: 'Picadinho à Jardineira Proteico',
    categoria: 'almoco',
    imagem: 'airfryer-50',
    ingredientes: ['400g de carne em cubos (alcatra)', '1 cenoura em cubos', '1 chuchu em cubos', '1 batata-doce em cubos', '1/2 xícara de vagem picada', '2 dentes de alho', 'Azeite'],
    modo_preparo: 'Doure o alho e sele a carne. Adicione os legumes, cubra com água e cozinhe em fogo baixo até tudo ficar macio e o caldo engrossar.',
  },
  {
    id: 'empadao-de-grao-de-bico-proteico',
    titulo: 'Empadão de Grão-de-Bico Proteico',
    categoria: 'lanches',
    imagem: 'airfryer-51',
    ingredientes: ['Massa: 2 xícaras de grão-de-bico cozido, 2 colheres de sopa de azeite, sal', 'Recheio: 200g de frango desfiado, 1/2 cebola, molho de tomate, 1/2 lata de milho'],
    modo_preparo: 'Para a massa, bata o grão-de-bico com azeite e sal. Forre uma forma. Refogue o recheio de frango, coloque na torta e asse a 180°C por 25 minutos.',
  },
  {
    id: 'arroz-de-couve-flor-com-frango-e-pimentoes',
    titulo: 'Arroz de Couve-flor com Frango e Pimentões',
    categoria: 'almoco',
    imagem: 'airfryer-52',
    ingredientes: ['1 xícara de arroz integral cozido', '1 couve-flor picada', '500g de peito de frango em cubos', '1 cebola picada', '2 dentes de alho picados', '1 pimentão vermelho fatiado', '1 pimentão amarelo fatiado', 'Óleo, sal e ervas a gosto'],
    modo_preparo: 'Cozinhe o arroz. Refogue a couve-flor com temperos e misture ao arroz. Em outra panela, refogue o frango com pimentões e sirva junto com o arroz de couve-flor.',
  },
  {
    id: 'escondidinho-de-baroa-com-creme-de-frango',
    titulo: 'Escondidinho de Baroa com Creme de Frango',
    categoria: 'jantar',
    imagem: 'airfryer-53',
    ingredientes: ['500g de batata baroa cozida', '1 cebola picada', '1 dente de alho picado', 'Azeite', '1 gema para pincelar', 'Recheio: 300g de frango desfiado, molho de tomate, creme de ricota, requeijão, cheiro-verde, sal e pimenta'],
    modo_preparo: 'Faça um purê com a baroa refogada no azeite com cebola e alho. Misture os ingredientes do recheio. Monte camadas de purê e recheio, pincele com gema e asse até dourar.',
  },
  {
    id: 'salada-de-atum-com-quinoa-no-pote',
    titulo: 'Salada de Atum com Quinoa no Pote',
    categoria: 'almoco',
    imagem: 'airfryer-54',
    ingredientes: ['1 lata de atum em água', '1 xícara de quinoa em grãos cozida', 'Suco de 1/2 limão siciliano', 'Folhas de espinafre', '1 colher de sopa de mostarda Dijon', 'Ramos de dill (endro)'],
    modo_preparo: 'Cozinhe a quinoa. Misture com o atum, limão e mostarda. Em um pote, coloque o molho, a mistura de atum e finalize com o espinafre.',
  },
  {
    id: 'ensopado-vegetariano-proteico',
    titulo: 'Ensopado Vegetariano Proteico',
    categoria: 'jantar',
    imagem: 'airfryer-55',
    ingredientes: ['1/2 couve-flor em floretes', '1 batata-doce em cubos', '1 xícara de abóbora japonesa em cubos', '1 xícara de grão-de-bico cozido', '1 cebola picada', '2 dentes de alho picados', '1 tomate picado', '200ml de leite de coco', 'Especiarias (cúrcuma, cominho, coentro)'],
    modo_preparo: 'Refogue cebola e alho com especiarias. Adicione tomate e um pouco de água. Junte os legumes e o leite de coco, cozinhando até amaciarem. Finalize com o grão-de-bico.',
  },
  {
    id: 'linguado-com-crosta-de-castanhas',
    titulo: 'Linguado com Crosta de Castanhas',
    categoria: 'jantar',
    imagem: 'airfryer-56',
    ingredientes: ['2 filés de linguado', 'Suco de 1/2 limão', 'Sal e pimenta a gosto', '1/2 xícara de castanha de caju triturada', '1/4 xícara de amêndoas trituradas', '2 colheres de sopa de farinha de linhaça', '1 colher de sopa de mostarda Dijon', 'Coentro picado'],
    modo_preparo: 'Tempere o peixe. Misture as castanhas, amêndoas e linhaça. Pincele mostarda nos filés, cubra com a mistura de castanhas e asse a 200°C por 15-20 minutos.',
  },
  {
    id: 'quibe-vegano-de-abobora-com-quinoa',
    titulo: 'Quibe Vegano de Abóbora com Quinoa',
    categoria: 'lanches',
    imagem: 'airfryer-57',
    ingredientes: ['1 xícara de quinoa cozida', '1 xícara de abóbora japonesa assada e amassada', '1/2 alho-poró fatiado', 'Páprica, cominho e gengibre em pó a gosto', 'Sal e cebolinha a gosto'],
    modo_preparo: 'Cozinhe a quinoa. Asse e amasse a abóbora. Refogue o alho-poró com temperos. Misture tudo, pressione em uma forma e asse a 180°C por 30-35 minutos.',
  },
  {
    id: 'sufle-colorido-de-frango',
    titulo: 'Suflê Colorido de Frango',
    categoria: 'jantar',
    imagem: 'airfryer-58',
    ingredientes: ['200g de frango desfiado', '1 xícara de brócolis cozido', '1/2 cenoura cozida', '1/2 beterraba cozida', '1/2 xícara de vagem cozida', '3 ovos (gemas e claras separadas)', '2 colheres de sopa de farinha de arroz', '100ml de água', 'Cheiro-verde a gosto'],
    modo_preparo: 'Refogue o frango com legumes. Misture com gemas, farinha e água. Incorpore as claras em neve. Despeje em um refratário e asse a 180°C por 30 minutos.',
  },
  {
    id: 'sopa-de-legumes-com-frango',
    titulo: 'Sopa de Legumes com Frango',
    categoria: 'jantar',
    imagem: 'airfryer-59',
    ingredientes: ['1 peito de frango em cubos', '1 cenoura em cubos', '1 chuchu em cubos', '1 inhame em cubos', 'Folhas de agrião', '1 cebola picada', '1 tomate picado', 'Sal a gosto'],
    modo_preparo: 'Refogue o frango com cebola e tomate. Junte os legumes e água. Bata parte dos legumes para engrossar o caldo e finalize com frango e agrião.',
  },
  {
    id: 'espaguete-de-abobrinha',
    titulo: 'Espaguete de Abobrinha',
    categoria: 'jantar',
    imagem: 'airfryer-60',
    ingredientes: ['2 abobrinhas', '200g de polpa de tomate', '1 tomate picado', 'Folhas de manjericão', 'Amêndoas laminadas', '1 dente de alho picado', '1/2 cebola picada', 'Azeite'],
    modo_preparo: 'Fatie as abobrinhas em tiras e salteie rapidamente. Prepare um molho com tomate, alho e cebola. Sirva o espaguete com o molho e finalize com manjericão e amêndoas.',
  },
  {
    id: 'omelete-funcional-colorido',
    titulo: 'Omelete Funcional Colorido',
    categoria: 'cafe-da-manha',
    imagem: 'airfryer-61',
    ingredientes: ['3 claras de ovo', '1 gema', '1/2 tomate picado', '1/4 de alho-poró fatiado', '1/4 de cebola roxa picada', '4 aspargos picados', 'Sal e pimenta a gosto'],
    modo_preparo: 'Bata os ovos com temperos. Adicione os vegetais e misture. Cozinhe em frigideira untada em fogo baixo até firmar. Dobre e sirva.',
  },
  {
    id: 'x-tudo-saudavel',
    titulo: 'X-Tudo Saudável',
    categoria: 'lanches',
    imagem: 'airfryer-62',
    ingredientes: ['Pão: 1 ovo, 1/2 batata baroa cozida, 1 colher de sopa de aveia, 1 colher de queijo cottage, 1/2 colher de chá de fermento, sal', 'Hambúrguer: 100g de patinho moído, 1/2 xícara de quinoa cozida, 1/2 cebola, temperos'],
    modo_preparo: 'Prepare o pão no micro-ondas e doure. Misture os ingredientes do hambúrguer, modele e grelhe. Monte o sanduíche com seus acompanhamentos preferidos.',
  },
  {
    id: 'pastel-integral-assado-2',
    titulo: 'Pastel Integral Assado',
    categoria: 'lanches',
    imagem: 'airfryer-63',
    ingredientes: ['1 xícara de inhame cozido e amassado', '1/2 xícara de farinha de arroz', '1/4 xícara de fécula de batata', '1 colher de sopa de linhaça', '1 colher de sopa de polvilho azedo', '1 colher de sopa de azeite', '1 colher de sopa de chia', '1 colher de chá de fermento', 'Gemas para pincelar', 'Recheio: 200g de frango desfiado e temperado'],
    modo_preparo: 'Misture os ingredientes da massa. Abra, recheie com o frango e feche. Pincele gema e asse em forno pré-aquecido a 180°C até dourar.',
  },
  {
    id: 'ceviche-proteico',
    titulo: 'Ceviche Proteico',
    categoria: 'jantar',
    imagem: 'airfryer-64',
    ingredientes: ['150g de salmão fresco em cubos', '150g de linguado fresco em cubos', 'Suco de 2 laranjas', 'Suco de 1 limão', '1/2 xícara de tomate-cereja cortado ao meio', '1/2 cebola roxa fatiada', '1/4 de pimentão picado', 'Azeite e orégano a gosto'],
    modo_preparo: 'Marine os peixes nos sucos por 20 minutos na geladeira. Escorra parte do líquido, adicione os vegetais, tempere com azeite e orégano e sirva.',
  },
  {
    id: 'espaguete-de-abobora-com-carne',
    titulo: 'Espaguete de Abóbora com Carne',
    categoria: 'jantar',
    imagem: 'airfryer-65',
    ingredientes: ['1 abóbora espaguete pequena', '300g de carne moída', '1/2 lata de tomate pelado', '1 cebola picada', '2 dentes de alho picados', 'Pimenta, azeite e cheiro-verde a gosto'],
    modo_preparo: 'Asse a abóbora até ficar macia. Desfie a polpa para formar o "espaguete". Prepare um molho com a carne moída, misture com a abóbora e finalize com cheiro-verde.',
  },
  {
    id: 'torta-de-frango-light',
    titulo: 'Torta de Frango Light',
    categoria: 'lanches',
    imagem: 'airfryer-66',
    ingredientes: ['Massa: 1 xícara de água, 1 ovo, 1 clara, 1/2 xícara de leite desnatado, 1 xícara de farinha integral, 1/2 xícara de farinha branca, sal, orégano', 'Recheio: 300g de frango desfiado, 1/2 lata de milho, 1/2 cebola, 1/2 cenoura, 1 tomate, cheiro-verde'],
    modo_preparo: 'Bata a massa. Monte com o recheio e asse a 180°C por 30-40 minutos.',
  },
  {
    id: 'yakisoba-vegetariano-com-pancs',
    titulo: 'Yakisoba Vegetariano com Pancs',
    categoria: 'jantar',
    imagem: 'airfryer-37',
    ingredientes: ['200g de macarrão para yakisoba', '1 xícara de cogumelos fatiados', '1 cenoura em tiras', '1 xícara de brócolis', '1 xícara de couve-flor', 'Folhas de acelga', 'Folhas de ora-pro-nóbis', 'Molho: 1/2 xícara de shoyu, 1 colher de sopa de amido de milho, 1 xícara de água'],
    modo_preparo: 'Cozinhe o macarrão. Refogue os legumes e cogumelos. Adicione o molho preparado com shoyu, amido e água, e cozinhe até engrossar. Misture o macarrão e sirva.',
  },
  {
    id: 'lasanha-de-abobrinha-com-queijo-branco',
    titulo: 'Lasanha de Abobrinha com Queijo Branco',
    categoria: 'jantar',
    imagem: 'airfryer-38',
    ingredientes: ['2 abobrinhas fatiadas finamente', '300g de queijo branco em fatias', 'Massa: 1 xícara de farinha de trigo, 1 ovo, 2 colheres de sopa de cheiro-verde', 'Temperos a gosto'],
    modo_preparo: 'Prepare uma massa fina com farinha, ovo e temperos. Em um refratário, monte camadas de abobrinha, massa e queijo. Finalize com queijo e asse a 180°C por 30 minutos.',
  },
  {
    id: 'gratinado-de-espinafre',
    titulo: 'Gratinado de Espinafre',
    categoria: 'jantar',
    imagem: 'airfryer-39',
    ingredientes: ['1 maço de espinafre cozido e picado', '2 ovos', '1/2 xícara de farinha integral', '1 xícara de leite desnatado', '1/2 cebola picada', '1 dente de alho picado', 'Queijo ralado a gosto'],
    modo_preparo: 'Refogue cebola e alho e misture com espinafre. Prepare um molho branco com farinha e leite. Incorpore ovos e espinafre, despeje em refratário, cubra com queijo e gratine.',
  },
  {
    id: 'cuscuz-de-camarao-proteico',
    titulo: 'Cuscuz de Camarão Proteico',
    categoria: 'jantar',
    imagem: 'airfryer-40',
    ingredientes: ['200g de camarão limpo', '1 xícara de farinha de milho', '1/2 cebola picada', '1/2 xícara de ervilha', 'Azeitonas picadas', '1/2 xícara de molho de tomate', 'Cheiro-verde a gosto'],
    modo_preparo: 'Refogue o camarão com temperos. Adicione molho, ervilha e azeitonas. Junte a farinha, mexendo sempre. Coloque em uma forma e cozinhe no vapor ou asse até firmar.',
  },
  {
    id: 'arroz-de-couve-flor-funcional',
    titulo: 'Arroz de Couve-flor Funcional',
    categoria: 'almoco',
    imagem: 'airfryer-41',
    ingredientes: ['1 couve-flor grande', '1 colher de sopa de azeite', '1 dente de alho picado', '1/2 cebola picada', '1/2 xícara de água', '1 colher de chá de açafrão', 'Sal a gosto'],
    modo_preparo: 'Processe a couve-flor. Refogue alho e cebola, adicione a couve-flor e açafrão. Acrescente água, tempere e cozinhe até a água secar.',
  },
  {
    id: 'chili-vegano-proteico',
    titulo: 'Chili Vegano Proteico',
    categoria: 'jantar',
    imagem: 'airfryer-42',
    ingredientes: ['1 cebola picada', '2 tomates picados', '2 dentes de alho picados', 'Cheiro-verde picado', '1/2 xícara de extrato de tomate', '1 xícara de feijão cozido', '1 xícara de proteína de soja texturizada', 'Azeite', 'Pimenta e cominho a gosto'],
    modo_preparo: 'Hidrate a proteína de soja. Refogue cebola e alho, adicione a proteína, tomate, extrato e temperos. Junte o feijão e cozinhe até o molho encorpar.',
  },
  {
    id: 'coxinha-assada-de-batata-doce',
    titulo: 'Coxinha Assada de Batata-doce',
    categoria: 'lanches',
    imagem: 'airfryer-43',
    ingredientes: ['2 xícaras de batata-doce cozida e amassada', '1/2 xícara de farinha de aveia', 'Recheio: 200g de frango desfiado e temperado', 'Sal e pimenta a gosto'],
    modo_preparo: 'Misture a batata-doce com a farinha, sal e pimenta. Abra porções da massa, recheie com o frango e modele as coxinhas. Asse a 200°C até dourar.',
  },
  {
    id: 'escondidinho-de-carne-moida',
    titulo: 'Escondidinho de Carne Moída',
    categoria: 'jantar',
    imagem: 'airfryer-44',
    ingredientes: ['500g de carne moída', '1 cebola picada', '2 dentes de alho picados', '1 tomate picado', 'Purê: 500g de mandioca cozida, 1/2 xícara de leite, 1 colher de sopa de manteiga', 'Queijo ralado para gratinar'],
    modo_preparo: 'Prepare um purê com a mandioca. Refogue a carne moída. Em um refratário, monte uma camada de carne e cubra com o purê. Polvilhe queijo e asse até gratinar.',
  },
  {
    id: 'grao-de-bico-crocante',
    titulo: 'Grão-de-bico Crocante',
    categoria: 'lanches',
    imagem: 'airfryer-4',
    ingredientes: ['1 xícara de grão-de-bico cozido', '1 colher de sopa de azeite', 'Páprica, cúrcuma, cominho, sal e pimenta a gosto'],
    modo_preparo: 'Seque o grão-de-bico, misture com azeite e temperos. Asse a 200°C por 20-25 minutos, mexendo na metade, até ficar crocante.',
  },
  {
    id: 'hamburguer-de-frango-com-aveia',
    titulo: 'Hambúrguer de Frango com Aveia',
    categoria: 'airfryer-proteica',
    imagem: 'airfryer-12',
    ingredientes: ['500g de peito de frango moído', '1/2 xícara de aveia em flocos', '1/2 cebola picada', '1 dente de alho picado', 'Sal e pimenta a gosto'],
    modo_preparo: 'Processe o frango com cebola e alho. Misture com aveia e temperos. Modele os hambúrgueres e grelhe até dourar.',
  },
  {
    id: 'nuggets-caseiros-proteicos',
    titulo: 'Nuggets Caseiros Proteicos',
    categoria: 'airfryer-proteica',
    imagem: 'airfryer-13',
    ingredientes: ['500g de frango moído', '1 xícara de farinha de aveia para empanar', '1/2 cebola', 'Salsa', 'Alho', 'Orégano', 'Azeite', 'Curry', 'Suco de limão', '1 ovo'],
    modo_preparo: 'Processe o frango com temperos. Modele os nuggets, passe no ovo e na farinha de aveia. Asse a 200°C até dourar.',
  },
  {
    id: 'pastel-assado-saudavel',
    titulo: 'Pastel Assado Saudável',
    categoria: 'lanches',
    imagem: 'airfryer-14',
    ingredientes: ['1 xícara de farinha de aveia', '1/2 xícara de creme de leite', '1 pitada de sal', '1 gema para pincelar', 'Azeite', 'Orégano'],
    modo_preparo: 'Misture os ingredientes da massa, recheie a gosto, pincele com gema e asse até dourar.',
  },
  {
    id: 'panquecas-salgadas-proteicas',
    titulo: 'Panquecas Salgadas Proteicas',
    categoria: 'almoco',
    imagem: 'airfryer-15',
    ingredientes: ['1 xícara de leite', '2 ovos', '1 fio de azeite', '1 xícara de farinha de trigo', '1 pitada de sal'],
    modo_preparo: 'Bata todos os ingredientes da massa, doure as panquecas na frigideira e recheie a gosto.',
  },
  {
    id: 'panqueca-de-aveia-com-frango-2',
    titulo: 'Panqueca de Aveia com Frango',
    categoria: 'almoco',
    imagem: 'airfryer-16',
    ingredientes: ['Massa: 1 xícara de farelo de aveia, 1 xícara de leite desnatado, 2 ovos, sal', 'Recheio: 300g de frango desfiado, cebola, cenoura, tomate, ervilha, molho de tomate, ervas'],
    modo_preparo: 'Prepare a massa e os discos de panqueca. Refogue o recheio de frango com legumes. Recheie as panquecas e sirva.',
  },
  {
    id: 'pizza-de-aveia',
    titulo: 'Pizza de Aveia',
    categoria: 'lanches',
    imagem: 'airfryer-17',
    ingredientes: ['1 ovo', '4 colheres de sopa de farinha de aveia', '4 colheres de sopa de leite', '1 colher de sopa de azeite', 'Sal a gosto'],
    modo_preparo: 'Misture os ingredientes. Abra a massa em forma untada e pré-asse por 15 minutos a 180°C. Adicione o recheio e volte ao forno para derreter o queijo.',
  },
  {
    id: 'salada-de-grao-de-bico-com-frango-e-legumes',
    titulo: 'Salada de Grão-de-Bico com Frango e Legumes',
    categoria: 'almoco',
    imagem: 'airfryer-18',
    ingredientes: ['1 xícara de grão-de-bico', '1 cenoura', '1 batata-doce', '1 xícara de brócolis', '200g de frango desfiado', 'Tempero verde a gosto'],
    modo_preparo: 'Cozinhe o grão-de-bico na pressão. Cozinhe os legumes no vapor. Misture tudo com o frango e os temperos.',
  },
  {
    id: 'snack-de-grao-de-bico-crocante-2',
    titulo: 'Snack de Grão-de-Bico Crocante',
    categoria: 'lanches',
    imagem: 'airfryer-19',
    ingredientes: ['1 xícara de grão-de-bico cozido', 'Azeite', 'Sal', 'Páprica defumada', 'Pimenta'],
    modo_preparo: 'Tempere os grãos e asse a 180°C em forno pré-aquecido até ficarem crocantes.',
  },
  {
    id: 'sufle-de-legumes',
    titulo: 'Suflê de Legumes',
    categoria: 'jantar',
    imagem: 'airfryer-20',
    ingredientes: ['1 cenoura', '1 abobrinha', '1/2 xícara de ervilha', '1 cebola', '2 colheres de farinha de trigo', '1 colher de manteiga', '1 xícara de leite', '3 ovos', 'Queijo parmesão', 'Temperos'],
    modo_preparo: 'Refogue os legumes. Prepare um creme com manteiga, cebola, farinha e leite. Misture as gemas, queijo e legumes. Incorpore as claras em neve e asse.',
  },
  {
    id: 'torta-de-frango-com-massa-de-couve-flor',
    titulo: 'Torta de Frango com Massa de Couve-flor',
    categoria: 'lanches',
    imagem: 'airfryer-21',
    ingredientes: ['Massa: 1 couve-flor, 2 ovos, 1 xícara de farinha de aveia, óleo, leite, fermento', 'Recheio: Frango, cebola, alho, cenoura, tomate, queijo, cúrcuma, sal'],
    modo_preparo: 'Bata os ingredientes da massa. Refogue o frango com legumes. Misture tudo, cubra com queijo e asse até dourar.',
  },
  {
    id: 'bacalhau-a-congrado',
    titulo: 'Bacalhau à Congrado',
    categoria: 'jantar',
    imagem: 'airfryer-32',
    ingredientes: ['Postas de bacalhau dessalgado', 'Batatas', 'Azeite', 'Alho', 'Cravinho', 'Cebola', 'Sal', 'Pimenta', 'Salsa'],
    modo_preparo: 'Em uma panela, monte camadas alternadas de cebola em rodelas, temperos, batata em rodelas e o bacalhau. Regue generosamente com azeite, tampe e cozinhe em fogo baixo até que as batatas e o bacalhau estejam macios.'
  },
  {
    id: 'creme-de-abobora-com-carne-light',
    titulo: 'Creme de Abóbora com Carne Light',
    categoria: 'jantar',
    imagem: 'airfryer-26',
    ingredientes: ['Abóbora em cubos', 'Carne magra em cubos', 'Água', 'Cebola', 'Sal', 'Salsa', 'Cebolinha'],
    modo_preparo: 'Cozinhe a abóbora em água e sal. Bata no liquidificador com um pouco da água do cozimento. Em outra panela, refogue a cebola e a carne. Junte o creme de abóbora, cozinhe por alguns minutos e finalize com as ervas.'
  },
  {
    id: 'berinjela-recheada-proteica',
    titulo: 'Berinjela Recheada Proteica',
    categoria: 'airfryer-proteica',
    imagem: 'airfryer-1',
    ingredientes: ['Berinjela', 'Carne moída magra', 'Tomate', 'Cebola', 'Molho de tomate', 'Sal', 'Pimenta', 'Salsinha', 'Requeijão light (opcional)'],
    modo_preparo: 'Corte a berinjela ao meio e retire parte do miolo. Refogue a carne moída com cebola, tomate e o miolo picado. Recheie as metades da berinjela, cubra com requeijão se desejar e asse na airfryer ou forno até dourar.'
  },
  {
    id: 'torta-integral-de-legumes-com-atum',
    titulo: 'Torta Integral de Legumes com Atum',
    categoria: 'lanches',
    imagem: 'airfryer-43',
    ingredientes: ['Ovos', 'Abobrinha ralada', 'Cenoura ralada', 'Tomate', 'Atum', 'Leite desnatado', 'Óleo vegetal', 'Fermento', 'Farinha integral', 'Sal', 'Pimenta', 'Orégano', 'Parmesão ralado'],
    modo_preparo: 'Misture bem todos os ingredientes em uma tigela até formar uma massa firme. Coloque em uma forma untada, finalize com queijo parmesão por cima e asse em forno pré-aquecido até dourar.'
  },
  {
    id: 'macarrao-integral-com-brocolis',
    titulo: 'Macarrão Integral com Brócolis',
    categoria: 'almoco',
    imagem: 'airfryer-21',
    ingredientes: ['Macarrão integral', 'Brócolis', 'Azeite', 'Alho', 'Sal', 'Pimenta', 'Pimenta calabresa'],
    modo_preparo: 'Cozinhe o macarrão conforme as instruções da embalagem. Em uma frigideira, refogue o brócolis (previamente cozido no vapor) com alho e azeite. Misture o macarrão cozido, tempere e sirva.'
  },
  {
    id: 'pizza-fake-de-brocolis-proteica',
    titulo: 'Pizza Fake de Brócolis Proteica',
    categoria: 'lanches',
    imagem: 'airfryer-17',
    ingredientes: ['Farelo de aveia', 'Farelo de trigo', 'Aveia em flocos', 'Ovo', 'Leite desnatado', 'Sal', 'Brócolis', 'Requeijão light', 'Muçarela light', 'Orégano'],
    modo_preparo: 'Misture os ingredientes da massa e doure em uma frigideira dos dois lados para formar um disco. Cubra com requeijão, brócolis cozido, queijo e orégano. Aqueça até o queijo derreter.'
  },
  {
    id: 'salada-tropical-proteica',
    titulo: 'Salada Tropical Proteica',
    categoria: 'almoco',
    imagem: 'airfryer-14',
    ingredientes: ['Rúcula', 'Nozes', 'Uva passa', 'Manga', 'Tomate', 'Laranja', 'Queijo cottage', 'Manjericão', 'Cebolinha'],
    modo_preparo: 'Monte uma base com as folhas de rúcula. Distribua os demais ingredientes por cima, como manga e tomate em cubos, gomos de laranja, nozes e o queijo cottage. Sirva com molho de vinagre balsâmico.'
  },
  {
    id: 'salada-colorida-light',
    titulo: 'Salada Colorida Light',
    categoria: 'almoco',
    imagem: 'airfryer-15',
    ingredientes: ['Alface', 'Agrião', 'Cenoura ralada', 'Beterraba cozida', 'Pepino', 'Tomate'],
    modo_preparo: 'Lave e prepare todas as folhas e vegetais. Monte a salada em uma travessa, começando pelas folhas e adicionando os outros ingredientes por cima para um visual colorido. Tempere a gosto na hora de servir.'
  },
  {
    id: 'tabule-tropical',
    titulo: 'Tabule Tropical',
    categoria: 'almoco',
    imagem: 'airfryer-11',
    ingredientes: ['Trigo para quibe', 'Tomate', 'Pepino', 'Manga', 'Hortelã', 'Salsinha', 'Cebolinha', 'Limão', 'Azeite'],
    modo_preparo: 'Hidrate o trigo para quibe conforme as instruções. Escorra bem e misture com tomate, pepino e manga picados, e as ervas frescas. Tempere com limão, azeite e sal. Sirva gelado.'
  },
  {
    id: 'frittata-de-abobrinha-proteica',
    titulo: 'Frittata de Abobrinha Proteica',
    categoria: 'almoco',
    imagem: 'airfryer-19',
    ingredientes: ['Abobrinha ralada', 'Ovos', 'Alho', 'Cebolinha', 'Salsinha', 'Farinha de aveia', 'Fermento', 'Sal', 'Pimenta', 'Tomate'],
    modo_preparo: 'Misture bem todos os ingredientes em uma tigela. Despeje pequenas porções em uma frigideira antiaderente para dourar dos dois lados ou asse em forminhas na airfryer até firmar.'
  },
  {
    id: 'risoto-proteico-de-frango',
    titulo: 'Risoto Proteico de Frango',
    categoria: 'jantar',
    imagem: 'airfryer-11',
    ingredientes: ['Frango em cubos', 'Arroz integral cozido', 'Abobrinha', 'Brócolis', 'Cebola', 'Cream cheese light', 'Sal', 'Pimenta', 'Salsinha'],
    modo_preparo: 'Refogue o frango e os legumes picados. Junte o arroz integral já cozido e misture bem. Finalize adicionando o cream cheese para dar cremosidade e sirva com salsinha fresca.'
  },
  {
    id: 'hamburguer-de-quinoa',
    titulo: 'Hambúrguer de Quinoa',
    categoria: 'lanches',
    imagem: 'airfryer-37',
    ingredientes: ['Quinoa cozida', 'Farinha de mandioca', 'Azeite', 'Cebolinha', 'Manjericão', 'Sal', 'Pimenta'],
    modo_preparo: 'Misture todos os ingredientes até obter uma massa que dê para modelar. Forme os hambúrgueres e asse em forno pré-aquecido ou doure em uma frigideira antiaderente com um fio de azeite.'
  },
  {
    id: 'sanduiche-proteico-de-frango-com-abacate',
    titulo: 'Sanduíche Proteico de Frango com Abacate',
    categoria: 'lanches',
    imagem: 'airfryer-31',
    ingredientes: ['Pão integral', 'Peito de frango', 'Abacate', 'Limão', 'Alho', 'Salsinha', 'Maionese', 'Folhas verdes'],
    modo_preparo: 'Grelhe o peito de frango temperado. Amasse o abacate com limão, alho e salsinha. Monte o sanduíche com o pão, as folhas verdes, a pasta de abacate e o frango grelhado.'
  },
  {
    id: 'x-salada-proteico',
    titulo: 'X-Salada Proteico',
    categoria: 'lanches',
    imagem: 'airfryer-39',
    ingredientes: ['Carne moída magra', 'Ovo', 'Muçarela', 'Pão de hambúrguer', 'Tomate', 'Alface', 'Bacon', 'Maionese'],
    modo_preparo: 'Modele e grelhe o hambúrguer de carne. Frite o ovo e o bacon. Monte o sanduíche no pão com todos os ingredientes, incluindo alface, tomate, queijo e maionese.'
  },
  {
    id: 'salgado-maromba',
    titulo: 'Salgado Maromba',
    categoria: 'lanches',
    imagem: 'airfryer-27',
    ingredientes: ['Ricota', 'Couve-flor cozida', 'Farinha de linhaça', 'Clara de ovo', 'Sal', 'Orégano', 'Parmesão'],
    modo_preparo: 'Bata todos os ingredientes em um processador até formar uma massa. Modele os salgados no formato desejado, passe no parmesão ralado e asse em forno pré-aquecido até dourar.'
  },
  {
    id: 'hamburguer-de-grao-de-bico-2',
    titulo: 'Hambúrguer de Grão-de-Bico',
    categoria: 'lanches',
    imagem: 'airfryer-37',
    ingredientes: ['Grão-de-bico cozido', 'Alho', 'Cebola', 'Salsinha', 'Orégano', 'Limão', 'Farinha de aveia'],
    modo_preparo: 'Processe todos os ingredientes até obter uma massa. Modele os hambúrgueres e grelhe até dourar dos dois lados.'
  },
  {
    id: 'kibe-vegetariano-proteico-2',
    titulo: 'Kibe Vegetariano Proteico',
    categoria: 'lanches',
    imagem: 'airfryer-38',
    ingredientes: ['Trigo para kibe', 'Proteína de soja', 'Aveia', 'Lentilha cozida', 'Alho', 'Cebola', 'Hortelã', 'Azeite'],
    modo_preparo: 'Hidrate o trigo e a soja. Misture todos os ingredientes, coloque em uma forma untada e asse até dourar.'
  },
  {
    id: 'hamburgão-de-forno-proteico-2',
    titulo: 'Hamburgão de Forno Proteico',
    categoria: 'lanches',
    imagem: 'airfryer-39',
    ingredientes: ['Farinha integral', 'Fermento biológico', 'Linhaça', 'Óleo', 'Proteína de soja', 'Tomate', 'Temperos'],
    modo_preparo: 'Prepare a massa e deixe crescer. Abra, recheie com um hambúrguer vegetal e temperos. Feche e asse até dourar.'
  },
  {
    id: 'guacamole-proteico-2',
    titulo: 'Guacamole Proteico',
    categoria: 'lanches',
    imagem: 'airfryer-40',
    ingredientes: ['Abacate', 'Limão', 'Azeite', 'Sal', 'Alho', 'Cebola', 'Pimenta'],
    modo_preparo: 'Amasse o abacate e misture com os demais ingredientes. Leve à geladeira por alguns minutos antes de servir.'
  },
  {
    id: 'tartar-de-salmao-com-guacamole-2',
    titulo: 'Tartar de Salmão com Guacamole',
    categoria: 'jantar',
    imagem: 'airfryer-41',
    ingredientes: ['Salmão fresco', 'Limão', 'Mostarda', 'Azeite', 'Pimenta', 'Abacate', 'Tomate', 'Cebola'],
    modo_preparo: 'Pique o salmão e tempere com limão, mostarda e azeite. Prepare a guacamole com o abacate. Sirva o tartar sobre a guacamole.'
  },
  {
    id: 'arroz-de-couve-flor-2',
    titulo: 'Arroz de Couve-Flor',
    categoria: 'almoco',
    imagem: 'airfryer-42',
    ingredientes: ['Couve-flor', 'Manteiga ghee', 'Sal', 'Pimenta'],
    modo_preparo: 'Pique a couve-flor em pedaços pequenos. Refogue na manteiga ghee até ficar macia. Tempere a gosto.'
  },
  {
    id: 'torta-proteica-de-atum-2',
    titulo: 'Torta Proteica de Atum',
    categoria: 'lanches',
    imagem: 'airfryer-43',
    ingredientes: ['Farinha integral', 'Whey protein', 'Ovos', 'Leite vegetal', 'Óleo de coco', 'Atum', 'Cottage', 'Fermento'],
    modo_preparo: 'Bata a massa no liquidificador. Despeje metade em uma forma, coloque o recheio de atum e cottage, e cubra com o resto da massa. Asse até dourar.'
  },
  {
    id: 'escondidinho-de-batata-doce-com-frango-2',
    titulo: 'Escondidinho de Batata Doce com Frango',
    categoria: 'jantar',
    imagem: 'airfryer-44',
    ingredientes: ['Batata doce', 'Frango desfiado', 'Molho de tomate', 'Cottage', 'Cebola', 'Alho'],
    modo_preparo: 'Faça um purê com a batata doce. Refogue o frango com os temperos. Monte em camadas em um refratário e asse para gratinar.'
  },
  {
    id: 'pastel-proteico-de-batata-doce-2',
    titulo: 'Pastel Proteico de Batata Doce',
    categoria: 'lanches',
    imagem: 'airfryer-45',
    ingredientes: ['Batata doce', 'Farinha de aveia', 'Azeite', 'Carne moída', 'Sal'],
    modo_preparo: 'Prepare a massa com batata doce, farinha e azeite. Recheie, feche e asse na airfryer até dourar.'
  },
  {
    id: 'sopa-de-lentilha-com-carne-2',
    titulo: 'Sopa de Lentilha com Carne',
    categoria: 'jantar',
    imagem: 'airfryer-46',
    ingredientes: ['Lentilha', 'Músculo cozido', 'Couve', 'Couve-flor', 'Cebola', 'Alho'],
    modo_preparo: 'Refogue os temperos, adicione a lentilha e a carne. Cozinhe e acrescente os vegetais até ficarem macios.'
  },
  {
    id: 'torta-de-tapioca-com-frango-airfryer-2',
    titulo: 'Torta de Tapioca com Frango (Airfryer)',
    categoria: 'lanches',
    imagem: 'airfryer-47',
    ingredientes: ['Tapioca', 'Frango cozido', 'Muçarela', 'Ovos', 'Requeijão light', 'Fermento'],
    modo_preparo: 'Misture todos os ingredientes e asse na airfryer até que a torta esteja firme e dourada por cima.'
  },
  {
    id: 'salada-de-bacalhau-com-feijao-fradinho-2',
    titulo: 'Salada de Bacalhau com Feijão Fradinho',
    categoria: 'almoco',
    imagem: 'airfryer-48',
    ingredientes: ['Bacalhau', 'Feijão fradinho', 'Banana-da-terra', 'Cebola roxa', 'Azeite', 'Vinagre', 'Coentro'],
    modo_preparo: 'Misture todos os ingredientes delicadamente e tempere a gosto. Sirva fria.'
  },
  {
    id: 'nhoque-de-baroa-com-molho-de-salvia-2',
    titulo: 'Nhoque de Baroa com Molho de Sálvia',
    categoria: 'jantar',
    imagem: 'airfryer-49',
    ingredientes: ['Batata baroa', 'Farinha de trigo', 'Gemas', 'Manteiga', 'Sálvia'],
    modo_preparo: 'Prepare a massa dos nhoques e cozinhe. Finalize salteando na manteiga com folhas de sálvia.'
  },
  {
    id: 'picadinho-a-jardineira-proteico-2',
    titulo: 'Picadinho à Jardineira Proteico',
    categoria: 'almoco',
    imagem: 'airfryer-50',
    ingredientes: ['Carne em cubos', 'Cenoura', 'Chuchu', 'Batata doce', 'Vagem', 'Alho', 'Azeite'],
    modo_preparo: 'Doure a carne e os temperos. Adicione os legumes e cozinhe em fogo baixo até tudo ficar macio.'
  },
  {
    id: 'empadao-de-grao-de-bico-proteico-2',
    titulo: 'Empadão de Grão-de-Bico Proteico',
    categoria: 'lanches',
    imagem: 'airfryer-51',
    ingredientes: ['Grão-de-bico cozido', 'Azeite', 'Sal', 'Frango desfiado', 'Cebola', 'Molho de tomate', 'Milho'],
    modo_preparo: 'Bata o grão-de-bico para a massa. Monte o empadão com o recheio e asse até dourar.'
  },
  {
    id: 'yakisoba-vegetariano-com-pancs-2',
    titulo: 'Yakisoba Vegetariano com Pancs',
    categoria: 'jantar',
    imagem: 'airfryer-37',
    ingredientes: ['Macarrão para yakisoba', 'Cogumelos', 'Cenoura', 'Brócolis', 'Couve-flor', 'Acelga', 'Ora-pro-nóbis', 'Shoyu', 'Amido de milho'],
    modo_preparo: 'Cozinhe o macarrão. Refogue os legumes e cogumelos, adicione o molho e cozinhe até engrossar. Misture tudo.'
  },
  {
    id: 'lasanha-de-abobrinha-com-queijo-branco-2',
    titulo: 'Lasanha de Abobrinha com Queijo Branco',
    categoria: 'jantar',
    imagem: 'airfryer-38',
    ingredientes: ['Abobrinha', 'Queijo branco', 'Farinha de trigo', 'Ovos', 'Cheiro-verde', 'Temperos'],
    modo_preparo: 'Monte camadas de abobrinha, massa fina e queijo. Asse até gratinar.'
  },
  {
    id: 'gratinado-de-espinafre-2',
    titulo: 'Gratinado de Espinafre',
    categoria: 'jantar',
    imagem: 'airfryer-39',
    ingredientes: ['Espinafre', 'Ovos', 'Farinha integral', 'Leite desnatado', 'Alho', 'Cebola', 'Queijo ralado'],
    modo_preparo: 'Prepare um creme, misture com espinafre e ovos. Cubra com queijo e gratine.'
  },
  {
    id: 'cuscuz-de-camarao-proteico-2',
    titulo: 'Cuscuz de Camarão Proteico',
    categoria: 'jantar',
    imagem: 'airfryer-40',
    ingredientes: ['Camarão', 'Farinha de milho', 'Azeite', 'Cebola', 'Ervilha', 'Azeitona', 'Molho de tomate', 'Cheiro-verde'],
    modo_preparo: 'Refogue o camarão e os demais ingredientes. Junte a farinha de milho, modele e cozinhe no vapor.'
  },
  {
    id: 'arroz-de-couve-flor-funcional-2',
    titulo: 'Arroz de Couve-flor Funcional',
    categoria: 'almoco',
    imagem: 'airfryer-41',
    ingredientes: ['Couve-flor', 'Azeite', 'Alho', 'Cebola', 'Água', 'Açafrão', 'Sal'],
    modo_preparo: 'Processe a couve-flor. Refogue com temperos, adicione água e cozinhe até secar.'
  },
  {
    id: 'chili-vegano-proteico-2',
    titulo: 'Chili Vegano Proteico',
    categoria: 'jantar',
    imagem: 'airfryer-42',
    ingredientes: ['Cebola', 'Tomate', 'Alho', 'Cebolinha', 'Coentro', 'Extrato de tomate', 'Feijão', 'Proteína de soja', 'Azeite', 'Temperos'],
    modo_preparo: 'Hidrate a soja e refogue com os demais ingredientes até o molho encorpar.'
  },
  {
    id: 'coxinha-assada-de-batata-doce-2',
    titulo: 'Coxinha Assada de Batata-doce',
    categoria: 'lanches',
    imagem: 'airfryer-43',
    ingredientes: ['Batata-doce', 'Farinha de aveia', 'Frango desfiado', 'Sal', 'Pimenta', 'Alho'],
    modo_preparo: 'Faça a massa com a batata e farinha, recheie com o frango e asse até dourar.'
  },
  {
    id: 'escondidinho-de-carne-moida-2',
    titulo: 'Escondidinho de Carne Moída',
    categoria: 'jantar',
    imagem: 'airfryer-44',
    ingredientes: ['Carne moída', 'Alho', 'Cebola', 'Tomate', 'Mandioca', 'Leite', 'Manteiga', 'Queijo ralado'],
    modo_preparo: 'Prepare o purê de mandioca e o recheio de carne. Monte em camadas e gratine no forno.'
  },
  {
    id: 'omelete-proteico-completo',
    titulo: 'Omelete Proteico Completo',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-62',
    ingredientes: ['Claras de ovo', 'Gema', 'Tomate', 'Cebola', 'Salsa', 'Frango desfiado', 'Ervilha', 'Manteiga', 'Queijo branco', 'Whey protein', 'Farinha de aveia', 'Sal', 'Orégano'],
    modo_preparo: 'Bata todos os ingredientes em uma tigela. Despeje em uma frigideira antiaderente untada com manteiga. Cozinhe em fogo baixo até a omelete firmar, virando na metade do tempo para dourar ambos os lados.'
  },
  {
    id: 'crepioca-proteica',
    titulo: 'Crepioca Proteica',
    categoria: 'lanches',
    imagem: 'breakfast-63',
    ingredientes: ['Ovo', 'Goma de tapioca', 'Parmesão ralado', 'Salsinha', 'Sal', 'Temperos'],
    modo_preparo: 'Bata o ovo com um garfo e misture com a goma de tapioca, queijo parmesão, salsinha e temperos a gosto. Despeje a mistura em uma frigideira antiaderente aquecida e cozinhe como uma panqueca, dourando dos dois lados.'
  },
  {
    id: 'carne-seca-com-cebola',
    titulo: 'Carne-Seca com Cebola',
    categoria: 'jantar',
    imagem: 'airfryer-50',
    ingredientes: ['Carne-seca', 'Manteiga', 'Cebola', 'Pimenta vermelha', 'Coentro'],
    modo_preparo: 'Dessalgue e cozinhe a carne-seca até ficar macia. Desfie e reserve. Em uma frigideira, refogue a cebola fatiada na manteiga até dourar. Adicione a carne desfiada, a pimenta e finalize com coentro fresco picado.'
  },
  {
    id: 'omelete-de-espinafre',
    titulo: 'Omelete de Espinafre',
    categoria: 'cafe-da-manha',
    imagem: 'airfryer-17',
    ingredientes: ['Ovos', 'Espinafre', 'Azeite', 'Salsa', 'Manjericão', 'Alho', 'Sal'],
    modo_preparo: 'Refogue o alho no azeite e adicione o espinafre, cozinhando até murchar. Em uma tigela, bata os ovos com a salsa, manjericão e sal. Junte o espinafre refogado e despeje em uma frigideira quente. Cozinhe até firmar.'
  },
  {
    id: 'risoto-de-shitake-integral',
    titulo: 'Risoto de Shitake Integral',
    categoria: 'jantar',
    imagem: 'airfryer-11',
    ingredientes: ['Arroz integral', 'Água', 'Azeite ou manteiga', 'Cebola roxa', 'Cogumelo shitake', 'Alho', 'Vinho branco', 'Creme de leite', 'Queijo parmesão'],
    modo_preparo: 'Cozinhe o arroz integral parcialmente em água. Em outra panela, refogue a cebola, o alho e os cogumelos fatiados. Deglaceie com vinho branco, adicione o arroz e vá adicionando mais líquido aos poucos. Finalize com creme de leite e queijo parmesão.'
  },
  {
    id: 'sorvete-de-abacaxi-e-laranja',
    titulo: 'Sorvete de Abacaxi e Laranja',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-6',
    ingredientes: ['Abacaxi congelado', 'Laranja', 'Adoçante'],
    modo_preparo: 'Bata as frutas congeladas em um processador potente até formar um creme homogêneo e liso. Adoce a gosto, se necessário. Leve ao congelador por mais algumas horas para firmar antes de servir.'
  },
  {
    id: 'sorvete-de-banana-e-amendoim',
    titulo: 'Sorvete de Banana e Amendoim',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-7',
    ingredientes: ['Banana congelada', 'Pasta de amendoim'],
    modo_preparo: 'Em um processador, bata as bananas congeladas em rodelas até obter uma consistência cremosa. Adicione a pasta de amendoim e bata mais um pouco para incorporar. Sirva imediatamente como um sorvete macio.'
  },
  {
    id: 'tiramisu-fit',
    titulo: 'Tiramisú Fit',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-27',
    ingredientes: ['Ovo', 'Xylitol', 'Farinha de aveia', 'Leite', 'Fermento', 'Ricota', 'Cream cheese', 'Baunilha', 'Café', 'Cacau'],
    modo_preparo: 'Prepare um bolinho rápido com os primeiros ingredientes e asse. Misture os queijos para fazer o creme. Umedeça fatias do bolo no café e monte camadas alternadas com o creme em uma taça. Finalize polvilhando cacau.'
  },
  {
    id: 'bolo-de-banana-caramelizada',
    titulo: 'Bolo de Banana Caramelizada',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-86',
    ingredientes: ['Banana', 'Ovos', 'Farinha de aveia', 'Óleo de coco', 'Fermento', 'Mel'],
    modo_preparo: 'Bata duas bananas com ovos, aveia e óleo. Adicione o fermento. Forre uma forma com mel e rodelas da banana restante, despeje a massa por cima e asse até dourar.'
  },
  {
    id: 'bolo-de-banana-e-cacau',
    titulo: 'Bolo de Banana e Cacau',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-2',
    ingredientes: ['Banana', 'Ovos', 'Farelo de aveia', 'Farinha de arroz', 'Açúcar mascavo', 'Cacau', 'Chocolate 70%', 'Fermento'],
    modo_preparo: 'Misture os ingredientes secos, bata os ovos com a banana e junte as duas partes. Adicione o fermento e o chocolate e asse até firmar.'
  },
  {
    id: 'bolo-de-banana-e-chocolate',
    titulo: 'Bolo de Banana e Chocolate',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-3',
    ingredientes: ['Banana', 'Aveia', 'Pasta de amendoim', 'Chocolate 70%'],
    modo_preparo: 'Amasse a banana e misture com aveia e pasta de amendoim. Incorpore o chocolate picado e asse em forminhas até firmar.'
  },
  {
    id: 'bolo-de-banana-e-coco-integral',
    titulo: 'Bolo de Banana e Coco Integral',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-4',
    ingredientes: ['Banana', 'Ovos', 'Açúcar demerara', 'Óleo de coco', 'Farinha de arroz integral', 'Farinha de trigo integral', 'Leite de coco', 'Coco ralado', 'Baunilha', 'Canela', 'Fermento'],
    modo_preparo: 'Misture os ingredientes líquidos e secos separadamente, depois una as misturas e adicione o fermento. Intercale camadas de massa e banana fatiada na forma. Asse até dourar.'
  },
  {
    id: 'bolo-de-banana-e-nozes',
    titulo: 'Bolo de Banana e Nozes',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-5',
    ingredientes: ['Ovos', 'Aveia', 'Farinha integral', 'Banana', 'Iogurte natural', 'Óleo de coco', 'Adoçante', 'Nozes', 'Canela', 'Fermento', 'Bicarbonato'],
    modo_preparo: 'Misture todos os ingredientes, deixando o fermento e o bicarbonato por último. Despeje em uma forma untada e asse até que o palito saia limpo.'
  },
  {
    id: 'bolo-de-cenoura-com-calda-de-cacau',
    titulo: 'Bolo de Cenoura com Calda de Cacau',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-1',
    ingredientes: ['Ovos', 'Cenoura', 'Açúcar mascavo', 'Óleo de coco', 'Aveia', 'Farinha integral', 'Fermento'],
    modo_preparo: 'Bata os ingredientes líquidos e a cenoura no liquidificador. Misture com os secos e asse. Prepare uma calda simples de cacau e cubra o bolo.'
  },
  {
    id: 'bolo-de-cenoura-mesclado',
    titulo: 'Bolo de Cenoura Mesclado',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-6',
    ingredientes: ['Ovos', 'Óleo de coco', 'Açúcar demerara', 'Aveia', 'Cenoura', 'Chocolate em pó', 'Fermento'],
    modo_preparo: 'Prepare a massa base de cenoura. Separe uma parte e misture com o chocolate em pó. Alterne as massas na forma para criar o efeito mesclado e asse.'
  },
  {
    id: 'bolo-de-chocolate-de-frigideira',
    titulo: 'Bolo de Chocolate de Frigideira',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-7',
    ingredientes: ['Cacau', 'Farinha de aveia', 'Óleo de coco', 'Ovos', 'Xylitol', 'Fermento'],
    modo_preparo: 'Misture todos os ingredientes até obter uma massa homogênea. Cozinhe em uma frigideira antiaderente tampada em fogo baixo, virando para dourar dos dois lados.'
  },
  {
    id: 'bolo-de-limao-fit',
    titulo: 'Bolo de Limão Fit',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-8',
    ingredientes: ['Ovos', 'Óleo de coco', 'Limão', 'Leite desnatado', 'Xylitol', 'Farinha de aveia', 'Fermento'],
    modo_preparo: 'Bata os líquidos e o adoçante no liquidificador. Misture com a farinha e o fermento. Asse em forno médio até dourar.'
  },
  {
    id: 'bolo-de-milho-com-coco',
    titulo: 'Bolo de Milho com Coco',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-9',
    ingredientes: ['Ovos', 'Milho', 'Leite de coco', 'Fubá', 'Açúcar mascavo', 'Farinha de arroz', 'Coco ralado', 'Fermento'],
    modo_preparo: 'Bata todos os ingredientes no liquidificador, exceto o fermento. Incorpore o fermento por último e asse até firmar.'
  },
  {
    id: 'bolo-frape-de-coco-e-cacau',
    titulo: 'Bolo Frapê de Coco e Cacau',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-10',
    ingredientes: ['Ovos', 'Leite de coco', 'Manteiga', 'Farinha de coco', 'Cacau', 'Adoçante', 'Fermento'],
    modo_preparo: 'Prepare uma massa branca, separe metade e adicione o cacau. Alterne as massas em uma forma para um efeito mesclado e asse.'
  },
  {
    id: 'bolo-integral-de-banana-e-mel',
    titulo: 'Bolo Integral de Banana e Mel',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-4',
    ingredientes: ['Ovos', 'Banana', 'Óleo de coco', 'Mel', 'Baunilha', 'Farinha integral', 'Aveia', 'Fermento'],
    modo_preparo: 'Bata os ingredientes líquidos com a banana. Incorpore os ingredientes secos e o fermento. Asse em forma untada até dourar.'
  },
  {
    id: 'bolo-integral-de-chocolate-e-chia',
    titulo: 'Bolo Integral de Chocolate e Chia',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-11',
    ingredientes: ['Ovos', 'Açúcar mascavo', 'Cacau', 'Óleo de coco', 'Água quente', 'Aveia', 'Farinha integral', 'Chia', 'Fermento'],
    modo_preparo: 'Bata os ovos com açúcar. Adicione os demais ingredientes, deixando a chia e o fermento para o final. Asse até o palito sair limpo.'
  },
  {
    id: 'bolo-integral-de-laranja',
    titulo: 'Bolo Integral de Laranja',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-12',
    ingredientes: ['Laranja', 'Ovos', 'Óleo de coco', 'Açúcar mascavo', 'Aveia', 'Farinha integral', 'Fermento'],
    modo_preparo: 'Bata os ingredientes líquidos e a laranja no liquidificador. Misture com os secos e o fermento. Asse em forno médio.'
  },
  {
    id: 'bolo-integral-de-maca-e-especiarias',
    titulo: 'Bolo Integral de Maçã e Especiarias',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-13',
    ingredientes: ['Maçã', 'Óleo de coco', 'Ovos', 'Açúcar de coco', 'Mel', 'Farinha integral', 'Aveia', 'Passas', 'Canela', 'Gengibre', 'Noz-moscada'],
    modo_preparo: 'Misture os ingredientes líquidos. Envolva as maçãs e passas nas farinhas e especiarias. Junte tudo e asse até firmar.'
  },
  {
    id: 'brownie-de-caneca-expresso',
    titulo: 'Brownie de Caneca Expresso',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-14',
    ingredientes: ['Ovo', 'Farinha de coco', 'Farinha de linhaça', 'Açúcar demerara', 'Óleo de coco', 'Cacau', 'Pasta de amendoim', 'Chocolate'],
    modo_preparo: 'Misture todos os ingredientes em uma caneca. Leve ao micro-ondas por um minuto e meio, deixando o centro úmido.'
  },
  {
    id: 'cheesecake-de-framboesa-saudavel',
    titulo: 'Cheesecake de Framboesa Saudável',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-15',
    ingredientes: ['Farinha de amêndoas', 'Mel', 'Creme de ricota', 'Iogurte grego', 'Gelatina', 'Framboesa', 'Adoçante'],
    modo_preparo: 'Prepare e pré-asse a base. Bata o creme com gelatina e despeje sobre a base. Refrigere até firmar e finalize com uma calda de framboesa.'
  },
  {
    id: 'cuca-de-farofa-integral',
    titulo: 'Cuca de Farofa Integral',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-16',
    ingredientes: ['Farelo de aveia', 'Leite desnatado', 'Ovo', 'Adoçante', 'Óleo de coco', 'Pasta de amendoim', 'Canela', 'Aveia'],
    modo_preparo: 'Prepare a massa e despeje em uma forma. Misture os ingredientes da farofa e espalhe por cima. Asse até dourar.'
  },
  {
    id: 'muffin-de-banana-classico',
    titulo: 'Muffin de Banana Clássico',
    categoria: 'lanches',
    imagem: 'cake-48',
    ingredientes: ['Banana', 'Ovos', 'Aveia', 'Canela', 'Fermento'],
    modo_preparo: 'Amasse bem a banana e misture com os demais ingredientes. Distribua a massa em forminhas de muffin e asse em forno pré-aquecido a 180°C por cerca de 20 minutos.'
  },
  {
    id: 'muffin-de-banana-e-coco',
    titulo: 'Muffin de Banana e Coco',
    categoria: 'lanches',
    imagem: 'cake-4',
    ingredientes: ['Banana', 'Ovo', 'Farinha de amêndoas', 'Farinha de coco', 'Coco ralado', 'Leite de coco', 'Canela', 'Sal', 'Fermento', 'Adoçante'],
    modo_preparo: 'Misture todos os ingredientes até obter uma massa homogênea. Distribua em forminhas de muffin e asse em forno pré-aquecido a 180°C até dourar.'
  },
  {
    id: 'muffin-de-baunilha-com-chocolate',
    titulo: 'Muffin de Baunilha com Chocolate',
    categoria: 'lanches',
    imagem: 'cake-14',
    ingredientes: ['Farinha de aveia', 'Bicarbonato', 'Baunilha', 'Ovo', 'Leite de coco', 'Mel', 'Óleo de coco', 'Chocolate 70%'],
    modo_preparo: 'Misture os ingredientes líquidos e os secos separadamente. Junte as duas misturas e incorpore o chocolate. Asse em forminhas de muffin a 180°C por 20-25 minutos.'
  },
  {
    id: 'muffin-de-cacau-e-banana',
    titulo: 'Muffin de Cacau e Banana',
    categoria: 'lanches',
    imagem: 'cake-2',
    ingredientes: ['Banana', 'Ovo', 'Leite', 'Farelo de aveia', 'Cacau', 'Fermento'],
    modo_preparo: 'Bata todos os ingredientes no liquidificador, deixando o fermento por último. Distribua em forminhas e asse em forno a 180°C até que um palito saia limpo.'
  },
  {
    id: 'muffin-de-cenoura-com-chocolate',
    titulo: 'Muffin de Cenoura com Chocolate',
    categoria: 'lanches',
    imagem: 'cake-52',
    ingredientes: ['Ovo', 'Cenoura', 'Óleo de coco', 'Açúcar mascavo', 'Xilitol', 'Farinha de aveia', 'Fermento', 'Canela', 'Sal', 'Chocolate'],
    modo_preparo: 'Bata a base com cenoura e líquidos. Misture os secos e as gotas de chocolate. Asse em forminhas a 180°C até dourar.'
  },
  {
    id: 'muffin-de-maca',
    titulo: 'Muffin de Maçã',
    categoria: 'lanches',
    imagem: 'cake-13',
    ingredientes: ['Farinha de aveia', 'Purê de maçã', 'Açúcar mascavo', 'Óleo de coco', 'Fermento', 'Canela'],
    modo_preparo: 'Misture todos os ingredientes até obter uma massa homogênea. Distribua em forminhas de muffin e asse em forno pré-aquecido a 180°C por 20-25 minutos.'
  },
  {
    id: 'muffin-proteico-de-chocolate',
    titulo: 'Muffin Proteico de Chocolate',
    categoria: 'lanches',
    imagem: 'cake-11',
    ingredientes: ['Banana', 'Leite de coco', 'Aveia', 'Mel', 'Cacau', 'Ovo', 'Óleo de coco', 'Whey protein', 'Bicarbonato', 'Chocolate'],
    modo_preparo: 'Bata todos os ingredientes no liquidificador. Distribua em forminhas e asse a 180°C até crescer e firmar.'
  },
  {
    id: 'torta-de-liquidificador-de-legumes',
    titulo: 'Torta de Liquidificador de Legumes',
    categoria: 'lanches',
    imagem: 'airfryer-19',
    ingredientes: ['Ovo', 'Farinha de aveia', 'Leite vegetal', 'Óleo', 'Fermento', 'Sal', 'Tomate', 'Cebola', 'Azeitona', 'Cenoura', 'Milho', 'Orégano'],
    modo_preparo: 'Bata a massa no liquidificador. Em uma forma, intercale camadas de massa e recheio de legumes. Asse em forno a 180°C até dourar.'
  },
  {
    id: 'torta-de-chocolate-de-aveia-e-linhaca',
    titulo: 'Torta de Chocolate de Aveia e Linhaça',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'cake-11',
    ingredientes: ['Farelo de aveia', 'Linhaça', 'Melado', 'Óleo de coco', 'Baunilha', 'Abacate', 'Cacau', 'Chocolate 70%'],
    modo_preparo: 'Asse a base pressionada em uma forma. Para o recheio, bata o abacate com o cacau e o chocolate derretido. Refrigere a torta montada até firmar.'
  },
  {
    id: 'tortinha-de-frutas',
    titulo: 'Tortinha de Frutas',
    categoria: 'sobremesas-sem-culpa',
    imagem: 'dessert-1',
    ingredientes: ['Aveia', 'Clara de ovo', 'Adoçante', 'Iogurte grego', 'Frutas'],
    modo_preparo: 'Asse a massa em forminhas de torta. Após esfriar, recheie com o iogurte e decore com as frutas frescas.'
  },
  {
    id: 'mini-frittata-de-grao-de-bico',
    titulo: 'Mini Frittata de Grão-de-Bico',
    categoria: 'lanches',
    imagem: 'cake-17',
    ingredientes: ['Vegetais', 'Cebola', 'Azeite', 'Farinha de grão-de-bico', 'Fermento', 'Sal', 'Pimenta'],
    modo_preparo: 'Refogue os vegetais. Misture a farinha de grão-de-bico com água, fermento e temperos. Junte os vegetais e asse em forminhas de muffin até dourar.'
  },
  {
    id: 'torta-de-frango-de-liquidificador',
    titulo: 'Torta de Frango de Liquidificador',
    categoria: 'lanches',
    imagem: 'airfryer-66',
    ingredientes: ['Ovo', 'Azeite', 'Farinha integral', 'Leite', 'Sal', 'Orégano', 'Fermento', 'Frango desfiado'],
    modo_preparo: 'Bata todos os ingredientes da massa no liquidificador. Em uma forma untada, intercale camadas de massa com o recheio de frango desfiado. Asse em forno médio até firmar e dourar.'
  },
  {
    id: 'torta-de-espinafre-integral',
    titulo: 'Torta de Espinafre Integral',
    categoria: 'lanches',
    imagem: 'airfryer-39',
    ingredientes: ['Farinha de trigo integral', 'Farinha de aveia', 'Manteiga', 'Ovo', 'Ricota', 'Espinafre', 'Alho', 'Azeite', 'Sal', 'Pimenta', 'Noz-moscada', 'Muçarela'],
    modo_preparo: 'Prepare a massa e forre uma forma. Refogue o espinafre com alho e misture com a ricota e temperos para o recheio. Coloque o recheio na massa, cubra com muçarela e asse até dourar.'
  }
];
