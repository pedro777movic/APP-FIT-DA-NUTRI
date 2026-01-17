import type { LucideIcon } from 'lucide-react';
import { Coffee, IceCream, CakeSlice, Flame } from 'lucide-react';

export type Recipe = {
  id: string;
  titulo: string;
  categoria:
    | 'cafe-da-manha'
    | 'sobremesas-zero'
    | 'bolos-sem-culpa'
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
    title: 'Café da Manhã Fit da Nutri',
    description: 'Comece o dia com energia e saúde.',
    Icon: Coffee,
    email: 'cafe@fit.com',
    senha: 'CAFEFIT1',
    checkoutUrl: 'https://pay.cakto.com.br/3fmx6e8_558568',
  },
  {
    slug: 'sobremesas-zero',
    title: 'Sobremesas Zero',
    description: 'Delícias para matar a vontade de doce sem sair da dieta.',
    Icon: IceCream,
    email: 'sobremesas@zero.com',
    senha: 'ZEROCAFE2',
    checkoutUrl: 'https://pay.cakto.com.br/b5xw5as_558897',
  },
  {
    slug: 'bolos-sem-culpa',
    title: 'Receitas de Bolo Sem Culpa',
    description: 'Bolos fofinhos e saudáveis para qualquer hora do dia.',
    Icon: CakeSlice,
    email: 'bolos@semculpa.com',
    senha: 'BOLOFIT3',
    checkoutUrl: 'https://pay.cakto.com.br/7w2nrt3_558930',
  },
  {
    slug: 'airfryer-proteica',
    title: 'Airfryer Proteica',
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
    id: 'smoothie-de-pasta-de-amendoim',
    titulo: 'Smoothie de Pasta de Amendoim',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-24',
    ingredientes: ['1 scoop de whey protein de chocolate', '1 banana congelada', '2 colheres de sopa de pasta de amendoim', '200ml de leite', 'Gelo a gosto'],
    modo_preparo: 'Coloque todos os ingredientes no liquidificador. Bata em alta velocidade até a mistura ficar lisa, cremosa e atingir a consistência de um smoothie. Sirva imediatamente.',
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
    id: 'smoothie-de-banana-com-morango',
    titulo: 'Smoothie de Banana com Morango',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-38',
    ingredientes: ['200ml de leite', '1 banana madura', '1 xícara de morangos', '1/2 pote de iogurte natural', 'Gotas de essência de baunilha', 'Mel a gosto'],
    modo_preparo: 'Bata todos os ingredientes no liquidificador até obter uma mistura cremosa e homogênea. Sirva imediatamente, bem gelado.',
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
    id: 'crepioca-2',
    titulo: 'Crepioca',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-1',
    ingredientes: ['2 colheres de sopa de goma de tapioca', '1 ovo'],
    modo_preparo: 'Em uma tigela, misture a goma de tapioca e o ovo até ficar homogêneo. Despeje em uma frigideira antiaderente aquecida e cozinhe dos dois lados até dourar.',
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
    id: 'crepioca-temperada',
    titulo: 'Crepioca Temperada',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-63',
    ingredientes: ['1 ovo', '2 colheres de sopa de goma de tapioca', '1 colher de sopa de queijo parmesão ralado', 'Salsinha picada a gosto', 'Sal e temperos a gosto'],
    modo_preparo: 'Bata o ovo com um garfo e misture a goma de tapioca, o queijo parmesão, a salsinha e os temperos. Aqueça uma frigideira antiaderente em fogo baixo e despeje a massa, espalhando para formar uma panqueca fina. Cozinhe até dourar dos dois lados.',
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
    id: 'granola-funcional',
    titulo: 'Granola Funcional',
    categoria: 'cafe-da-manha',
    imagem: 'breakfast-77',
    ingredientes: ['1 colher de sopa de óleo de coco', '1/2 xícara de amêndoas', '1/2 xícara de castanha de caju', '1/4 xícara de avelãs', '1/4 xícara de sementes de girassol', '1/4 xícara de coco ralado sem açúcar'],
    modo_preparo: 'Em uma frigideira grande, aqueça o óleo de coco em fogo baixo. Adicione as oleaginosas e as sementes, mexendo constantemente até dourarem levemente. Adicione o coco ralado no final e mexa por mais um minuto. Deixe esfriar completamente antes de guardar.',
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
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['1 xícara de suco de maracujá concentrado sem açúcar', '1 lata de creme de leite light', '1/2 xícara de adoçante culinário (xilitol ou eritritol)', '1 envelope de gelatina incolor sem sabor'],
    modo_preparo: 'Hidrate a gelatina conforme as instruções da embalagem. No liquidificador, bata o suco de maracujá, o creme de leite e o adoçante. Adicione a gelatina hidratada e bata por mais um minuto. Despeje em taças individuais e leve para gelar por pelo menos 2 horas, ou até firmar completamente.',
  },
  {
    id: 'creme-banana-pasta-amendoim',
    titulo: 'Creme de Banana com Pasta de Amendoim',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-2',
    ingredientes: ['2 bananas maduras congeladas em rodelas', '1 colher de sopa de pasta de amendoim integral', '2 colheres de sopa de água gelada (ou mais, se necessário)'],
    modo_preparo: 'Bata a banana congelada com a pasta de amendoim até virar um creme, adicionando água se necessário. Sirva imediatamente como um sorvete.',
  },
  {
    id: 'pacoca-fit',
    titulo: 'Paçoca Fit',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-3',
    ingredientes: ['1 xícara de amendoim torrado sem pele e sem sal', '1/2 xícara de leite em pó desnatado', '2 colheres de sopa de adoçante (xilitol ou eritritol)', '2 a 3 colheres de sopa de leite desnatado líquido'],
    modo_preparo: 'Processe o amendoim, junte o leite em pó e o adoçante. Adicione leite líquido aos poucos até dar liga. Pressione em uma forma e gele por 1 hora antes de cortar.',
  },
  {
    id: 'salada-frutas-granola',
    titulo: 'Salada de Frutas com Granola',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-4',
    ingredientes: ['1 xícara de morangos picados', '1 banana em rodelas', '1 fatia de mamão em cubos', '1 fatia de abacaxi em cubos', '1 kiwi em rodelas', '1/2 xícara de granola integral sem açúcar'],
    modo_preparo: 'Em uma tigela grande, misture delicadamente todas as frutas picadas. Sirva em porções individuais e finalize com uma generosa porção de granola por cima para adicionar crocância.',
  },
  {
    id: 'sorvete-abacaxi-laranja',
    titulo: 'Sorvete de Abacaxi e Laranja',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-6',
    ingredientes: ['2 xícaras de abacaxi congelado em cubos', 'Suco de 1 laranja', 'Adoçante a gosto (opcional)'],
    modo_preparo: 'Bata o abacaxi congelado e o suco de laranja no processador até obter um creme liso. Adoce se desejar e leve ao congelador por 2 horas para firmar.',
  },
  {
    id: 'sorvete-banana-amendoim',
    titulo: 'Sorvete de Banana com Amendoim',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-7',
    ingredientes: ['3 bananas maduras congeladas em rodelas', '2 colheres de sopa de pasta de amendoim integral', '1 colher de chá de essência de baunilha'],
    modo_preparo: 'Em um processador, bata as bananas congeladas com a pasta de amendoim e a baunilha até a mistura ficar cremosa, com consistência de sorvete macio.',
  },
  {
    id: 'sorvete-frutas-tropicais',
    titulo: 'Sorvete Natural de Frutas Tropicais',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-8',
    ingredientes: ['1 banana madura congelada', 'Polpa de 1 maracujá congelada', '1/2 xícara de manga congelada em cubos'],
    modo_preparo: 'Bata todas as frutas congeladas em um processador até se transformarem em um creme gelado. Leve ao freezer por mais 3 horas para uma consistência mais firme.',
  },
  {
    id: 'sorvete-proteico',
    titulo: 'Sorvete Proteico',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-9',
    ingredientes: ['2 bananas maduras congeladas em rodelas', '1 scoop de whey protein (sabor baunilha ou chocolate)', '1 colher de sopa de mel ou algumas gotas de stevia (opcional)'],
    modo_preparo: 'Bata as bananas congeladas com o whey protein e adoçante até obter uma mistura cremosa. Leve ao freezer por pelo menos 4 horas para firmar.',
  },
  {
    id: 'creme-de-laranja-e-cenoura-2',
    titulo: 'Creme de Laranja e Cenoura',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['Cenoura', 'Água', 'Suco de laranja', 'Amido de milho', 'Açúcar'],
    modo_preparo: 'Bata a cenoura com os líquidos. Leve ao fogo com os secos até engrossar. Sirva gelado.'
  },
  {
    id: 'doce-de-pao-dormido-2',
    titulo: 'Doce de Pão Dormido',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['Pão amanhecido', 'Maçã', 'Uvas-passas', 'Ovos', 'Leite', 'Açúcar', 'Baunilha', 'Canela'],
    modo_preparo: 'Monte os pães com frutas. Cubra com ovos batidos com leite. Refrigere e asse até dourar.'
  },
  {
    id: 'arroz-doce-com-especiarias-2',
    titulo: 'Arroz Doce com Especiarias',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['Arroz', 'Leite', 'Açúcar', 'Canela', 'Cravo', 'Gengibre', 'Noz-moscada', 'Açafrão', 'Raspas de limão'],
    modo_preparo: 'Cozinhe o arroz e finalize com leite, açúcar e especiarias até ficar cremoso.'
  },
  {
    id: 'compota-da-entrecasca-de-laranja-2',
    titulo: 'Compota da Entrecasca de Laranja',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['Parte branca da casca de laranja', 'Bicarbonato', 'Açúcar', 'Canela', 'Cravo'],
    modo_preparo: 'Ferva a casca com bicarbonato, lave e cozinhe em calda aromatizada até macia.'
  },
  {
    id: 'trufa-de-banana-com-chocolate-2',
    titulo: 'Trufa de Banana com Chocolate',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['Banana', 'Açúcar', 'Chocolate 70%', 'Manteiga', 'Canela'],
    modo_preparo: 'Cozinhe tudo até desgrudar da panela. Esfrie, modele e finalize no cacau.'
  },
  {
    id: 'sorvete-de-banana-2',
    titulo: 'Sorvete de Banana',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['Banana', 'Canela', 'Água'],
    modo_preparo: 'Bata tudo até ficar cremoso e leve ao congelador.'
  },
  {
    id: 'brigadeiro-fit-2',
    titulo: 'Brigadeiro Fit',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['Leite em pó desnatado', 'Água', 'Chocolate em pó 80%', 'Adoçante', 'Frutas picadas'],
    modo_preparo: 'Misture tudo até homogeneizar e sirva sobre frutas.'
  },
  {
    id: 'pudim-de-chia-2',
    titulo: 'Pudim de Chia',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['Chia', 'Leite vegetal', 'Frutas picadas'],
    modo_preparo: 'Misture chia e leite vegetal. Leve à geladeira durante a noite e finalize com frutas.'
  },
  {
    id: 'brigadeiro-surpresa-2',
    titulo: 'Brigadeiro Surpresa',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['Leite condensado light', 'Biomassa de banana verde', 'Cacau', 'Leite desnatado'],
    modo_preparo: 'Misture tudo e leve ao fogo até ponto de brigadeiro.'
  },
  {
    id: 'gelatina-de-whey-2',
    titulo: 'Gelatina de Whey',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['Gelatina diet', 'Iogurte desnatado', 'Gelo', 'Whey protein'],
    modo_preparo: 'Prepare a gelatina, bata com os demais ingredientes e leve para gelar.'
  },
  {
    id: 'salada-de-frutas-especial-2',
    titulo: 'Salada de Frutas Especial',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['Mamão', 'Banana', 'Morango', 'Laranja', 'Kiwi', 'Suco de laranja'],
    modo_preparo: 'Pique as frutas e misture com o suco. Sirva gelado.'
  },
  {
    id: 'sorvete-de-banana-proteico-2',
    titulo: 'Sorvete de Banana Proteico',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['Banana', 'Whey protein'],
    modo_preparo: 'Bata a banana congelada até cremosa e misture o whey.'
  },
  {
    id: 'beijinho-fit-2',
    titulo: 'Beijinho Fit',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['Leite em pó desnatado', 'Óleo de coco', 'Adoçante', 'Água quente', 'Coco ralado'],
    modo_preparo: 'Bata tudo, modele bolinhas, passe no coco e asse levemente.'
  },
  {
    id: 'brigadeiro-de-colher-funcional-2',
    titulo: 'Brigadeiro de Colher Funcional',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['Biomassa de banana verde', 'Xilitol', 'Óleo de coco', 'Chocolate 70%', 'Leite de coco', 'Sal'],
    modo_preparo: 'Cozinhe tudo até atingir ponto cremoso.'
  },
  {
    id: 'trufa-funcional-2',
    titulo: 'Trufa Funcional',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['Farelo de aveia', 'Açúcar mascavo', 'Cacau', 'Pasta de amendoim'],
    modo_preparo: 'Misture tudo, modele bolinhas e finalize no cacau.'
  },
  {
    id: 'pe-de-moleque-fitness-2',
    titulo: 'Pé de Moleque Fitness',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['Chocolate amargo', 'Amendoim', 'Biscoito de arroz'],
    modo_preparo: 'Derreta o chocolate, misture os secos, nivele e gele.'
  },
  {
    id: 'banoffee-no-pote-2',
    titulo: 'Banoffee no Pote',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['Bolacha', 'Doce de leite', 'Banana', 'Iogurte grego', 'Canela'],
    modo_preparo: 'Monte em camadas no pote e sirva gelado.'
  },
  {
    id: 'mousse-de-leite-em-po-2',
    titulo: 'Mousse de Leite em Pó',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['Leite em pó', 'Água gelada', 'Suco de maracujá em pó'],
    modo_preparo: 'Bata tudo no liquidificador e leve para gelar.'
  },
  {
    id: 'pudim-de-chocolate-com-whey-2',
    titulo: 'Pudim de Chocolate com Whey',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['Água', 'Cacau', 'Leite em pó', 'Pudim diet', 'Whey protein'],
    modo_preparo: 'Misture tudo, leve ao fogo até ferver e gele.'
  },
  {
    id: 'danete-cremoso-de-chocolate-2',
    titulo: 'Danete Cremoso de Chocolate',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['Leite de coco', 'Cacau', 'Chocolate em pó', 'Abacate congelado', 'Chia', 'Adoçante'],
    modo_preparo: 'Bata tudo no liquidificador até ficar cremoso. Sirva com raspas de chocolate 70%.'
  },
  {
    id: 'abacate-com-limao-e-mel-2',
    titulo: 'Abacate com Limão e Mel',
    categoria: 'sobremesas-zero',
    imagem: 'cake-70',
    ingredientes: ['Abacate', 'Limão', 'Mel'],
    modo_preparo: 'Corte o abacate e finalize com limão e mel.'
  },
  {
    id: 'sagu-funcional-de-chia-com-alfarroba-2',
    titulo: 'Sagu Funcional de Chia com Alfarroba',
    categoria: 'sobremesas-zero',
    imagem: 'cake-25',
    ingredientes: ['Chia', 'Leite de coco', 'Alfarroba', 'Açúcar mascavo'],
    modo_preparo: 'Misture tudo, deixe hidratar até formar gel e leve para gelar.'
  },
  {
    id: 'banana-quentinha-com-canela-2',
    titulo: 'Banana Quentinha com Canela',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-7',
    ingredientes: ['Banana', 'Canela'],
    modo_preparo: 'Corte a banana, polvilhe canela e aqueça rapidamente.'
  },
  {
    id: 'pudim-de-manga-2',
    titulo: 'Pudim de Manga',
    categoria: 'sobremesas-zero',
    imagem: 'cake-24',
    ingredientes: ['Leite de coco', 'Manga', 'Chia', 'Baunilha'],
    modo_preparo: 'Bata parte do leite com a manga, misture o restante com chia e gele em camadas.'
  },
  {
    id: 'maca-assada-com-canela-2',
    titulo: 'Maçã Assada com Canela',
    categoria: 'sobremesas-zero',
    imagem: 'cake-50',
    ingredientes: ['Maçã', 'Canela em pó', 'Canela em pau'],
    modo_preparo: 'Recheie a maçã com canela, embrulhe e asse até macia.'
  },
  {
    id: 'mingau-delicia-de-coco',
    titulo: 'Mingau Delícia de Coco',
    categoria: 'cafe-da-manha',
    imagem: 'dessert-1',
    ingredientes: ['3 colheres de sopa de aveia ou quinoa', '1 colher de sopa de amaranto', '200ml de leite de coco', 'Canela a gosto', '1/2 banana ou ameixa seca picada'],
    modo_preparo: 'Cozinhe a aveia (ou quinoa) com amaranto, leite de coco e canela em fogo baixo, mexendo sempre, até engrossar. Sirva com a fruta de sua escolha.',
  },
  {
    id: 'docinho-de-frutas-secas-2',
    titulo: 'Docinho de Frutas Secas',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-3',
    ingredientes: ['1/2 xícara de tâmaras', '1/4 xícara de banana passa', '1/4 xícara de damasco', '1/4 xícara de ameixa', '1/2 xícara de castanhas', '1 colher de sopa de alfarroba', '1 colher de sopa de óleo de coco'],
    modo_preparo: 'Processe todos os ingredientes até formar uma massa homogênea. Modele pequenas bolinhas e leve à geladeira por alguns minutos para firmar.',
  },
  {
    id: 'sorvete-de-banana-com-cacau-2',
    titulo: 'Sorvete de Banana com Cacau',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-7',
    ingredientes: ['2 bananas congeladas', '1 colher de sopa de cacau em pó', '1 colher de sopa de gel de chia', '1 colher de sopa de açúcar mascavo'],
    modo_preparo: 'Congele as bananas em rodelas. Bata-as com os demais ingredientes em um processador até obter um creme. Leve ao congelador para firmar.',
  },
  {
    id: 'cuscuz-branco-doce-2',
    titulo: 'Cuscuz Branco Doce',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-5',
    ingredientes: ['1 xícara de tapioca granulada', '400ml de leite ou água quente', '3 colheres de sopa de açúcar', '50g de coco ralado', 'Leite condensado a gosto'],
    modo_preparo: 'Misture a tapioca com o açúcar, escalde com o líquido quente e abafe por 10 minutos. Finalize com coco ralado e leite condensado a gosto.',
  },
  {
    id: 'sorvete-de-ora-pro-nobis-2',
    titulo: 'Sorvete de Ora-pro-nóbis',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-8',
    ingredientes: ['1 lata de leite condensado', '1 lata de creme de leite', '1/2 xícara de leite em pó', '50g de coco ralado', '1 xícara de água', '1 xícara de folhas de ora-pro-nóbis'],
    modo_preparo: 'Bata as folhas de ora-pro-nóbis com água e coe. Bata o suco com os demais ingredientes no liquidificador. Leve ao freezer até firmar, mexendo na metade do tempo.',
  },
  {
    id: 'brigadeiro-de-batata-doce-2',
    titulo: 'Brigadeiro de Batata-doce',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-3',
    ingredientes: ['1 xícara de batata-doce cozida e amassada', '2 colheres de sopa de açúcar mascavo', '2 colheres de sopa de cacau em pó', '1 colher de sopa de manteiga'],
    modo_preparo: 'Amasse bem a batata-doce. Leve ao fogo com os outros ingredientes, mexendo até desgrudar do fundo da panela. Esfrie, modele e finalize como preferir.',
  },
  {
    id: 'mousse-de-maracuja-2',
    titulo: 'Mousse de Maracujá',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['1 lata de leite condensado', '1 lata de creme de leite', 'A mesma medida de suco de maracujá concentrado'],
    modo_preparo: 'Bata todos os ingredientes no liquidificador até a mistura ficar bem homogênea e aerada. Despeje em uma travessa ou em taças individuais e leve para gelar até firmar.'
  },
  {
    id: 'brigadeiro-fit-proteico-2',
    titulo: 'Brigadeiro Fit Proteico',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-3',
    ingredientes: ['Proteína em pó', 'Amido de milho', 'Cacau', 'Leite vegetal', 'Batata-doce', 'Essência de chocolate'],
    modo_preparo: 'Misture tudo, leve ao fogo até engrossar, modele e finalize.'
  },
  {
    id: 'pudim-de-forno-com-whey-2',
    titulo: 'Pudim de Forno com Whey',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-5',
    ingredientes: ['Ovos', 'Amido de milho', 'Whey de chocolate'],
    modo_preparo: 'Misture tudo, leve ao forno em banho-maria até firmar.'
  },
  // Receitas 61-90
  {
    id: 'sorvete-diet-2',
    titulo: 'Sorvete Diet',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-9',
    ingredientes: ['Gelatina diet', 'Leite condensado diet', 'Creme de leite'],
    modo_preparo: 'Bata tudo no liquidificador, leve para gelar, bata novamente e volte à geladeira até firmar.'
  },
  {
    id: 'iogurte-de-limao-diet-2',
    titulo: 'Iogurte de Limão Diet',
    categoria: 'sobremesas-zero',
    imagem: 'cake-8',
    ingredientes: ['Iogurte natural desnatado', 'Leite desnatado', 'Gelatina sabor limão'],
    modo_preparo: 'Dissolva a gelatina, misture com o leite e o iogurte e leve à geladeira até firmar.'
  },
  {
    id: 'creme-de-coco-com-maracuja-diet-2',
    titulo: 'Creme de Coco com Maracujá Diet',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['Leite de coco', 'Água morna', 'Leite desnatado', 'Coco ralado', 'Maracujá', 'Leite condensado diet', 'Gelatina sem sabor', 'Claras'],
    modo_preparo: 'Bata tudo no liquidificador (menos as claras). Incorpore as claras em neve e gele.'
  },
  {
    id: 'doce-de-leite-diet-2',
    titulo: 'Doce de Leite Diet',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['Frutose', 'Leite desnatado', 'Amido de milho', 'Bicarbonato de sódio'],
    modo_preparo: 'Cozinhe tudo em fogo baixo até engrossar. Esfrie e leve à geladeira até firmar.'
  },
  {
    id: 'banana-em-calda-natural-2',
    titulo: 'Banana em Calda Natural',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-2',
    ingredientes: ['Banana', 'Água'],
    modo_preparo: 'Cozinhe as bananas em fogo bem baixo até soltarem a própria calda.'
  },
  {
    id: 'mousse-de-cacau-com-nuts-2',
    titulo: 'Mousse de Cacau com Nuts',
    categoria: 'sobremesas-zero',
    imagem: 'cake-53',
    ingredientes: ['Abacate', 'Cacau em pó', 'Xilitol', 'Chia', 'Leite de coco', 'Castanha-do-pará', 'Amêndoas', 'Hortelã'],
    modo_preparo: 'Bata tudo até virar um creme. Gele e finalize com nuts e hortelã.'
  },
  {
    id: 'banana-no-palito-com-chocolate-2',
    titulo: 'Banana no Palito com Chocolate',
    categoria: 'sobremesas-zero',
    imagem: 'cake-51',
    ingredientes: ['Banana', 'Chocolate amargo', 'Óleo de coco'],
    modo_preparo: 'Derreta o chocolate, banhe as bananas e leve ao freezer até endurecer.'
  },
  {
    id: 'beijinho-fit-3',
    titulo: 'Beijinho Fit',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['Leite em pó desnatado', 'Coco ralado', 'Leite de coco', 'Adoçante'],
    modo_preparo: 'Misture tudo, gele rapidamente e modele as bolinhas.'
  },
  {
    id: 'bolinhas-de-banana-e-castanhas-2',
    titulo: 'Bolinhas de Banana e Castanhas',
    categoria: 'sobremesas-zero',
    imagem: 'cake-38',
    ingredientes: ['Aveia', 'Banana madura', 'Farinha de amêndoas', 'Castanhas', 'Canela', 'Pasta de amendoim', 'Mel', 'Óleo de coco'],
    modo_preparo: 'Misture tudo, gele a massa e modele bolinhas.'
  },
  {
    id: 'brigadeiro-light-2',
    titulo: 'Brigadeiro Light',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-3',
    ingredientes: ['Óleo de coco ou ghee', 'Cacau em pó', 'Açúcar demerara', 'Leite desnatado', 'Leite em pó'],
    modo_preparo: 'Cozinhe tudo em fogo baixo até ponto de brigadeiro.'
  },
  {
    id: 'chandelle-fit-2',
    titulo: 'Chandelle Fit',
    categoria: 'sobremesas-zero',
    imagem: 'cake-53',
    ingredientes: ['Leite desnatado', 'Cacau em pó', 'Amido de milho', 'Xilitol'],
    modo_preparo: 'Cozinhe mexendo até engrossar e leve para gelar.'
  },
  {
    id: 'cremoso-de-frutas-2',
    titulo: 'Cremoso de Frutas',
    categoria: 'sobremesas-zero',
    imagem: 'cake-26',
    ingredientes: ['Iogurte desnatado', 'Mel', 'Nozes', 'Frutas vermelhas'],
    modo_preparo: 'Misture tudo e sirva gelado.'
  },
  {
    id: 'frozen-yogurt-de-mamao-2',
    titulo: 'Frozen Yogurt de Mamão',
    categoria: 'sobremesas-zero',
    imagem: 'cake-48',
    ingredientes: ['Mamão congelado', 'Iogurte desnatado', 'Mel'],
    modo_preparo: 'Bata tudo até virar um creme e congele antes de servir.'
  },
  {
    id: 'geleia-de-amora-2',
    titulo: 'Geleia de Amora',
    categoria: 'sobremesas-zero',
    imagem: 'cake-47',
    ingredientes: ['Amora', 'Açúcar mascavo'],
    modo_preparo: 'Cozinhe até reduzir e bata se quiser mais cremoso.'
  },
  {
    id: 'leite-condensado-fake-2',
    titulo: 'Leite Condensado Fake',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-5',
    ingredientes: ['Leite em pó desnatado', 'Óleo de coco', 'Açúcar mascavo', 'Água quente'],
    modo_preparo: 'Bata tudo e leve à geladeira até engrossar.'
  },
  {
    id: 'maca-recheada-2',
    titulo: 'Maçã Recheada',
    categoria: 'sobremesas-zero',
    imagem: 'cake-50',
    ingredientes: ['Maçã', 'Farofa de amêndoas', 'Nozes', 'Óleo de coco', 'Canela', 'Mel'],
    modo_preparo: 'Recheie a maçã e asse até ficar macia.'
  },
  {
    id: 'manjar-de-coco-2',
    titulo: 'Manjar de Coco',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-5',
    ingredientes: ['Leite desnatado', 'Leite em pó', 'Iogurte natural', 'Leite de coco', 'Gelatina sem sabor', 'Adoçante', 'Ameixa'],
    modo_preparo: 'Bata tudo, gele até firmar e finalize com calda de ameixa.'
  },
  {
    id: 'mousse-de-limao-2',
    titulo: 'Mousse de Limão',
    categoria: 'sobremesas-zero',
    imagem: 'cake-8',
    ingredientes: ['Leite em pó desnatado', 'Adoçante', 'Água quente', 'Limão'],
    modo_preparo: 'Bata tudo até engrossar e leve para gelar.'
  },
  {
    id: 'pacoca-fit-2',
    titulo: 'Paçoca Fit',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-3',
    ingredientes: ['Amendoim torrado', 'Leite em pó desnatado', 'Adoçante', 'Leite desnatado'],
    modo_preparo: 'Processe tudo, compacte e gele antes de cortar.'
  },
  {
    id: 'pe-de-moleque-fit-2',
    titulo: 'Pé de Moleque Fit',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['Açúcar de coco', 'Água', 'Mel', 'Amendoim torrado'],
    modo_preparo: 'Prepare a calda, misture o amendoim, espalhe e corte após esfriar.'
  },
  {
    id: 'petit-gateau-fit',
    titulo: 'Petit Gateau Fit',
    categoria: 'sobremesas-zero',
    imagem: 'cake-64',
    ingredientes: ['Chocolate amargo', 'Xylitol', 'Ovo', 'Pasta de amendoim', 'Farinha de aveia'],
    modo_preparo: 'Derreta o chocolate com a pasta de amendoim. Misture com o ovo, xylitol e aveia. Asse por poucos minutos até o centro ficar cremoso.',
  },
  {
    id: 'petit-gateau-com-pasta-de-amendoim-recheado',
    titulo: 'Petit Gateau com Pasta de Amendoim Recheado',
    categoria: 'sobremesas-zero',
    imagem: 'cake-65',
    ingredientes: ['Chocolate amargo', 'Óleo de coco', 'Xylitol', 'Ovo', 'Farinha de aveia', 'Pasta de amendoim'],
    modo_preparo: 'Congele a pasta de amendoim com óleo. Prepare a massa e coloque o recheio no centro. Asse até firmar por fora e manter o interior cremoso.',
  },
  {
    id: 'picole-de-amendoim',
    titulo: 'Picolé de Amendoim',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-7',
    ingredientes: ['Banana', 'Pasta de amendoim', 'Água gelada'],
    modo_preparo: 'Bata tudo no liquidificador até ficar cremoso. Coloque em forminhas de picolé. Leve ao freezer até firmar.',
  },
  {
    id: 'pudim-de-chia-com-creme-de-manga',
    titulo: 'Pudim de Chia com Creme de Manga',
    categoria: 'sobremesas-zero',
    imagem: 'cake-24',
    ingredientes: ['Leite de coco', 'Chia', 'Mel', 'Baunilha', 'Canela', 'Manga'],
    modo_preparo: 'Misture o leite com chia e mel. Leve à geladeira até engrossar. Processe a manga e monte em camadas.',
  },
  {
    id: 'pudim-de-chia-de-chocolate',
    titulo: 'Pudim de Chia de Chocolate',
    categoria: 'sobremesas-zero',
    imagem: 'cake-25',
    ingredientes: ['Leite de amêndoas', 'Chia', 'Mel', 'Baunilha', 'Cacau em pó'],
    modo_preparo: 'Misture o leite com chia e mel. Separe parte e adicione cacau. Gele até firmar e monte em camadas.',
  },
  {
    id: 'pudim-de-leite-nutritivo',
    titulo: 'Pudim de Leite Nutritivo',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-5',
    ingredientes: ['Ovos', 'Leite desnatado', 'Leite em pó', 'Creme de ricota', 'Adoçante', 'Baunilha', 'Açúcar mascavo'],
    modo_preparo: 'Bata tudo no liquidificador. Despeje sobre a calda na forma. Asse em banho-maria até firmar.',
  },
  {
    id: 'sorvete-de-abacaxi-e-laranja',
    titulo: 'Sorvete de Abacaxi e Laranja',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-6',
    ingredientes: ['Abacaxi congelado', 'Laranja', 'Adoçante'],
    modo_preparo: 'Processe as frutas congeladas até virar creme. Leve ao freezer antes de servir.',
  },
  {
    id: 'sorvete-de-banana-e-amendoim',
    titulo: 'Sorvete de Banana e Amendoim',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-7',
    ingredientes: ['Banana congelada', 'Pasta de amendoim'],
    modo_preparo: 'Bata a banana congelada até ficar cremosa. Adicione a pasta de amendoim. Sirva imediatamente.',
  },
  {
    id: 'tiramisu-fit',
    titulo: 'Tiramisú Fit',
    categoria: 'sobremesas-zero',
    imagem: 'cake-27',
    ingredientes: ['Ovo', 'Xylitol', 'Farinha de aveia', 'Leite', 'Fermento', 'Ricota', 'Cream cheese', 'Baunilha', 'Café', 'Cacau'],
    modo_preparo: 'Prepare um bolinho rápido. Umedeça no café. Monte camadas com o creme. Finalize com cacau.',
  },
  // Bolos
  {
    id: 'bolo-de-beterraba',
    titulo: 'Bolo de Beterraba',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-66',
    ingredientes: ['Beterraba', 'Suco de laranja', 'Ovos', 'Açúcar', 'Óleo', 'Farinha de trigo', 'Fermento', 'Manteiga', 'Achocolatado', 'Leite'],
    modo_preparo: 'Bata a beterraba com o suco no liquidificador. Misture aos demais ingredientes da massa, incorporando as claras em neve por último. Asse até firmar e cubra com a calda fervida até encorpar.'
  },
  {
    id: 'bolo-de-feijao-2',
    titulo: 'Bolo de Feijão',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-67',
    ingredientes: ['Ovos', 'Açúcar', 'Farinha de trigo', 'Feijão cozido', 'Óleo', 'Fermento'],
    modo_preparo: 'Bata gemas, açúcar, óleo e feijão. Incorpore a farinha, as claras em neve e o fermento. Asse até dourar.'
  },
  {
    id: 'torta-de-aveia-2',
    titulo: 'Torta de Aveia',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-81',
    ingredientes: ['Ovos', 'Leite em pó', 'Açúcar', 'Manteiga', 'Aveia em flocos', 'Canela', 'Fermento'],
    modo_preparo: 'Misture tudo, espalhe e pressione na forma. Asse até dourar. Pode adicionar cobertura de chocolate.'
  },
  {
    id: 'bolo-de-laranja-com-casca-2',
    titulo: 'Bolo de Laranja com Casca',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-68',
    ingredientes: ['Laranja', 'Ovos', 'Açúcar', 'Óleo', 'Leite', 'Farinha de trigo', 'Fermento'],
    modo_preparo: 'Bata laranjas, gemas, açúcar, óleo e leite. Misture com a farinha e fermento e finalize com claras em neve. Asse.'
  },
  {
    id: 'bolo-vitaminado-de-cascas',
    titulo: 'Bolo Vitaminado de Cascas',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-69',
    ingredientes: ['Laranja', 'Beterraba com casca', 'Cenoura com casca', 'Ovos', 'Açúcar mascavo', 'Azeite', 'Farinha de trigo', 'Chia', 'Linhaça'],
    modo_preparo: 'Bata vegetais, laranja, ovos e óleo. Misture a farinha e sementes e asse.'
  },
  {
    id: 'bolo-de-abacate-2',
    titulo: 'Bolo de Abacate',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-70',
    ingredientes: ['Abacate', 'Ovos', 'Leite de coco', 'Açúcar', 'Manteiga', 'Farinha de trigo', 'Chia', 'Fermento'],
    modo_preparo: 'Bata os líquidos com o abacate. Misture aos secos e asse até firmar.'
  },
  {
    id: 'bolo-de-abobrinha-e-beterraba-2',
    titulo: 'Bolo de Abobrinha e Beterraba',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-71',
    ingredientes: ['Abobrinha', 'Beterraba', 'Ovos', 'Óleo', 'Açúcar', 'Farinha de aveia', 'Cacau', 'Canela'],
    modo_preparo: 'Bata os vegetais com os líquidos e misture aos secos. Asse até assar por completo.'
  },
  {
    id: 'cookies-de-coco-e-castanhas-2',
    titulo: 'Cookies de Coco e Castanhas',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-29',
    ingredientes: ['Castanhas', 'Farinha de coco', 'Adoçante', 'Bicarbonato', 'Leite de coco', 'Chocolate amargo'],
    modo_preparo: 'Misture tudo, modele cookies e asse até dourar.'
  },
  {
    id: 'cheesecake-anabolico-2',
    titulo: 'Cheesecake Anabólico',
    categoria: 'bolos-sem-culpa',
    imagem: 'dessert-1',
    ingredientes: ['Cream cheese light', 'Iogurte desnatado', 'Ovos', 'Adoçante', 'Whey protein', 'Baunilha'],
    modo_preparo: 'Bata tudo, asse em duas temperaturas e leve à geladeira antes de servir.'
  },
  {
    id: 'cookie-de-grao-de-bico-2',
    titulo: 'Cookie de Grão-de-Bico',
    categoria: 'bolos-sem-culpa',
    imagem: 'dessert-1',
    ingredientes: ['Grão-de-bico', 'Azeite', 'Chia', 'Farinha de arroz', 'Temperos'],
    modo_preparo: 'Processe o grão, misture os demais ingredientes, molde e asse.'
  },
  {
    id: 'palitinhos-crocantes-2',
    titulo: 'Palitinhos Crocantes',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-28',
    ingredientes: ['Batata baroa', 'Cenoura', 'Azeite', 'Polvilho azedo', 'Chia', 'Sal'],
    modo_preparo: 'Misture tudo, modele palitos e asse até dourar.'
  },
  {
    id: 'biscoitinhos-de-banana-e-aveia-2',
    titulo: 'Biscoitinhos de Banana e Aveia',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-33',
    ingredientes: ['Banana madura', 'Aveia em flocos', 'Canela'],
    modo_preparo: 'Misture tudo, modele os biscoitos e asse até dourar.'
  },
  {
    id: 'biscoitinhos-de-mel-2',
    titulo: 'Biscoitinhos de Mel',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-32',
    ingredientes: ['Ovo', 'Óleo de coco', 'Mel', 'Açúcar mascavo', 'Fermento', 'Linhaça', 'Polvilho doce', 'Amido de milho'],
    modo_preparo: 'Misture os líquidos, incorpore os secos, modele bolinhas e asse até dourar.'
  },
  {
    id: 'biscoitinhos-de-aveia-com-creme-de-cacau-2',
    titulo: 'Biscoitinhos de Aveia com Creme de Cacau',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-36',
    ingredientes: ['Farinha integral', 'Farelo de aveia', 'Óleo de coco', 'Açúcar demerara', 'Ovo', 'Fermento', 'Avelã', 'Chocolate 70%', 'Leite vegetal'],
    modo_preparo: 'Prepare a massa, asse os biscoitos. Bata o recheio e recheie após esfriar.'
  },
  {
    id: 'muffin-de-ricota-com-tomatinho-2',
    titulo: 'Muffin de Ricota com Tomatinho',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-17',
    ingredientes: ['Ovos', 'Farinha de aveia', 'Fermento', 'Tomate', 'Cottage', 'Sal'],
    modo_preparo: 'Misture a massa, distribua em forminhas, adicione o recheio e asse.'
  },
  {
    id: 'panqueca-doce-de-forno-2',
    titulo: 'Panqueca Doce de Forno',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-61',
    ingredientes: ['Farinha de arroz', 'Azeite', 'Gergelim', 'Água morna', 'Banana', 'Mel'],
    modo_preparo: 'Prepare a massa, asse a base e finalize com banana e mel.'
  },
  {
    id: 'tortinha-de-chocolate-e-nuts-2',
    titulo: 'Tortinha de Chocolate e Nuts',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-11',
    ingredientes: ['Amêndoas', 'Tâmara', 'Chia', 'Óleo de coco', 'Chocolate 70%', 'Leite de coco'],
    modo_preparo: 'Processe amêndoas, tâmaras e chia para a base e pressione em forminhas. Derreta o chocolate com leite de coco para o recheio. Recheie as bases e refrigere.'
  },
  {
    id: 'muffin-de-pitanga-2',
    titulo: 'Muffin de Pitanga',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-64',
    ingredientes: ['1 xícara de farinha sem glúten', '1/2 xícara de açúcar demerara', '1 xícara de pitanga sem caroço', '1/4 xícara de óleo de coco', '1/4 xícara de água', '1 colher de chá de baunilha', '1 colher de sopa de linhaça', '1 colher de sopa de fermento'],
    modo_preparo: 'Misture todos os ingredientes até obter uma massa homogênea. Distribua em forminhas de muffin e asse em forno pré-aquecido a 180°C até dourar.'
  },
  {
    id: 'bolinho-de-cenoura-funcional-2',
    titulo: 'Bolinho de Cenoura Funcional',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-91',
    ingredientes: ['Ovos', 'Açúcar demerara', 'Óleo de coco', 'Cenoura', 'Fécula de batata', 'Farinha de arroz', 'Farinha de linhaça', 'Fermento', 'Chocolate 70%'],
    modo_preparo: 'Bata os líquidos. Misture aos secos. Distribua em forminhas e asse.'
  },
  {
    id: 'cocadinha-low-carb-2',
    titulo: 'Cocadinha Low Carb',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-52',
    ingredientes: ['Coco fresco ralado', 'Ovos', 'Xilitol', 'Fermento'],
    modo_preparo: 'Misture tudo, coloque em forminhas e asse até dourar.'
  },
  {
    id: 'bolo-minuto-2',
    titulo: 'Bolo Minuto',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-14',
    ingredientes: ['Óleo de coco', 'Farinha de coco', 'Xilitol', 'Fermento', 'Ovo', 'Baunilha'],
    modo_preparo: 'Misture tudo em uma caneca e leve ao micro-ondas até assar.'
  },
  {
    id: 'bolinho-de-cenoura-com-chocolate-2',
    titulo: 'Bolinho de Cenoura com Chocolate',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-91',
    ingredientes: ['Cenoura', 'Ovos', 'Manteiga', 'Farinha de amêndoas', 'Fermento', 'Xilitol', 'Chocolate 70%', 'Creme de leite'],
    modo_preparo: 'Prepare a massa, asse os bolinhos e finalize com a calda de chocolate.'
  },
  {
    id: 'brigadeirao-fit-2',
    titulo: 'Brigadeirão Fit',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-56',
    ingredientes: ['Ovos', 'Leite desnatado', 'Leite em pó', 'Cacau', 'Xilitol', 'Óleo de coco'],
    modo_preparo: 'Bata tudo e asse em banho-maria até firmar.'
  },
  {
    id: 'brownie-de-batata-doce-2',
    titulo: 'Brownie de Batata-doce',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-62',
    ingredientes: ['Batata-doce', 'Ovos', 'Cacau', 'Mel', 'Água', 'Farinha de amêndoas', 'Nozes', 'Fermento'],
    modo_preparo: 'Bata a massa, misture as nozes e asse até ficar úmido no centro.'
  },
  {
    id: 'brownie-fit-de-aveia-2',
    titulo: 'Brownie Fit de Aveia',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-63',
    ingredientes: ['Chocolate meio amargo', 'Óleo de coco', 'Ovos', 'Açúcar mascavo', 'Aveia', 'Nozes'],
    modo_preparo: 'Misture tudo e asse até o ponto desejado.'
  },
  {
    id: 'cookie-de-microondas',
    titulo: 'Cookie de Micro-ondas',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-35',
    ingredientes: ['Gema', 'Farinha de amêndoas', 'Chocolate 70%', 'Açúcar mascavo', 'Baunilha', 'Óleo de coco'],
    modo_preparo: 'Misture tudo e leve ao micro-ondas até firmar.'
  },
  {
    id: 'goiabinhas-fit-2',
    titulo: 'Goiabinhas Fit',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-54',
    ingredientes: ['Farinha de arroz ou aveia', 'Manteiga', 'Água', 'Xilitol', 'Goiabada sem açúcar'],
    modo_preparo: 'Prepare a massa, asse e recheie após esfriar.'
  },
  {
    id: 'palha-italiana-fit-2',
    titulo: 'Palha Italiana Fit',
    categoria: 'bolos-sem-culpa',
    imagem: 'dessert-3',
    ingredientes: ['Biscoito integral', 'Leite de coco', 'Chocolate amargo', 'Mel', 'Xilitol'],
    modo_preparo: 'Misture tudo, coloque em forma e leve à geladeira até firmar.'
  },
  {
    id: 'bolo-de-banana-caramelizada',
    titulo: 'Bolo de Banana Caramelizada',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-86',
    ingredientes: ['Banana', 'Ovos', 'Farinha de aveia', 'Óleo de coco', 'Fermento', 'Mel'],
    modo_preparo: 'Bata parte das bananas com os ovos, aveia e óleo. Misture o fermento. Forre a forma com mel e banana fatiada. Despeje a massa e asse até dourar.'
  },
  {
    id: 'bolo-de-banana-e-cacau',
    titulo: 'Bolo de Banana e Cacau',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-2',
    ingredientes: ['Banana', 'Ovo', 'Farelo de aveia', 'Farinha de arroz', 'Açúcar mascavo', 'Cacau', 'Gotas de chocolate', 'Fermento'],
    modo_preparo: 'Misture os secos. Bata ovos e banana. Una tudo, adicione fermento e gotas. Asse até passar no teste do palito.'
  },
  {
    id: 'bolo-de-banana-e-chocolate',
    titulo: 'Bolo de Banana e Chocolate',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-3',
    ingredientes: ['Banana', 'Aveia', 'Pasta de amendoim', 'Chocolate 70%'],
    modo_preparo: 'Bata banana, aveia e pasta. Misture o chocolate. Asse até firmar.'
  },
  {
    id: 'bolo-de-banana-e-coco-integral',
    titulo: 'Bolo de Banana e Coco Integral',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-4',
    ingredientes: ['Banana', 'Ovo', 'Açúcar demerara', 'Óleo de coco', 'Farinha de arroz integral', 'Farinha de trigo integral', 'Leite de coco', 'Coco ralado', 'Baunilha', 'Canela', 'Fermento'],
    modo_preparo: 'Misture os ingredientes, fermento por último. Intercale massa e banana com canela. Asse até dourar.'
  },
  {
    id: 'bolo-de-banana-e-nozes',
    titulo: 'Bolo de Banana e Nozes',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-5',
    ingredientes: ['Ovo', 'Aveia', 'Farinha de trigo integral', 'Banana', 'Iogurte natural', 'Óleo de coco', 'Adoçante', 'Nozes', 'Canela', 'Fermento', 'Bicarbonato'],
    modo_preparo: 'Misture tudo, fermento por último. Asse até o palito sair limpo.'
  },
  {
    id: 'bolo-de-cenoura',
    titulo: 'Bolo de Cenoura',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-87',
    ingredientes: ['Ovo', 'Cenoura', 'Açúcar mascavo', 'Óleo de coco', 'Farinha de aveia', 'Farinha integral', 'Fermento', 'Cacau', 'Açúcar', 'Água'],
    modo_preparo: 'Bata os ingredientes da massa. Misture o fermento. Asse até dourar. Prepare a calda e cubra.'
  },
  {
    id: 'bolo-de-cenoura-mesclado',
    titulo: 'Bolo de Cenoura Mesclado',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-6',
    ingredientes: ['Ovo', 'Óleo de coco', 'Açúcar demerara', 'Farinha de aveia', 'Cenoura', 'Fermento', 'Chocolate', 'Bicarbonato', 'Chocolate meio amargo', 'Creme de leite'],
    modo_preparo: 'Bata a base de cenoura. Misture com aveia e fermento. Separe parte e misture chocolate. Intercale as massas e asse. Cubra com ganache.'
  },
  {
    id: 'bolo-de-chocolate-de-frigideira',
    titulo: 'Bolo de Chocolate de Frigideira',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-7',
    ingredientes: ['Cacau', 'Farinha de aveia', 'Óleo de coco', 'Ovo', 'Xilitol', 'Fermento'],
    modo_preparo: 'Misture tudo. Asse em frigideira tampada até dourar dos dois lados.'
  },
  {
    id: 'bolo-de-limao',
    titulo: 'Bolo de Limão',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-8',
    ingredientes: ['Ovo', 'Óleo de coco', 'Limão', 'Leite', 'Xilitol', 'Farinha de aveia', 'Fermento'],
    modo_preparo: 'Bata tudo. Asse até dourar.'
  },
  {
    id: 'bolo-de-milho',
    titulo: 'Bolo de Milho',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-9',
    ingredientes: ['Ovo', 'Milho', 'Leite de coco', 'Fubá', 'Açúcar mascavo', 'Farinha de arroz', 'Coco ralado', 'Fermento'],
    modo_preparo: 'Bata tudo, fermento por último. Asse até firmar.'
  },
  {
    id: 'bolo-frape-de-coco-e-cacau',
    titulo: 'Bolo Frapê de Coco e Cacau',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-10',
    ingredientes: ['Ovo', 'Leite de coco', 'Manteiga', 'Farinha de coco', 'Cacau', 'Fermento', 'Adoçante'],
    modo_preparo: 'Prepare a massa branca. Separe parte e misture o cacau. Intercale e asse.'
  },
  {
    id: 'bolo-integral-de-banana',
    titulo: 'Bolo Integral de Banana',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-4',
    ingredientes: ['Ovo', 'Banana', 'Óleo de coco', 'Mel', 'Baunilha', 'Farinha integral', 'Aveia', 'Fermento', 'Canela', 'Sal'],
    modo_preparo: 'Bata os líquidos. Misture com os secos. Asse até dourar.'
  },
  {
    id: 'bolo-integral-de-chocolate',
    titulo: 'Bolo Integral de Chocolate',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-11',
    ingredientes: ['Ovo', 'Açúcar mascavo', 'Cacau', 'Óleo de coco', 'Água', 'Farinha de aveia', 'Farinha integral', 'Chia', 'Fermento'],
    modo_preparo: 'Bata ovos e açúcar. Misture os demais ingredientes. Asse até firmar.'
  },
  {
    id: 'bolo-integral-de-laranja',
    titulo: 'Bolo Integral de Laranja',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-12',
    ingredientes: ['Laranja', 'Ovo', 'Óleo de coco', 'Açúcar mascavo', 'Farinha de aveia', 'Farinha integral', 'Fermento'],
    modo_preparo: 'Bata os líquidos. Misture com as farinhas e fermento. Asse até dourar.'
  },
  {
    id: 'bolo-integral-de-maca',
    titulo: 'Bolo Integral de Maçã',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-13',
    ingredientes: ['Maçã', 'Óleo de coco', 'Ovo', 'Açúcar de coco', 'Mel', 'Farinha integral', 'Aveia', 'Uva passa', 'Canela', 'Gengibre', 'Noz-moscada', 'Fermento'],
    modo_preparo: 'Misture os ingredientes. Asse até o palito sair limpo.'
  },
  {
    id: 'cheesecake-de-framboesa',
    titulo: 'Cheesecake de Framboesa',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-15',
    ingredientes: ['Farinha de amêndoas', 'Aveia', 'Mel', 'Creme de ricota', 'Iogurte grego', 'Gelatina incolor', 'Adoçante', 'Framboesa', 'Água'],
    modo_preparo: 'Asse a base. Prepare o creme e leve para gelar. Cubra com a geleia fria.'
  },
  {
    id: 'cuca-de-farofa-integral',
    titulo: 'Cuca de Farofa Integral',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-16',
    ingredientes: ['Farelo de aveia', 'Leite', 'Ovo', 'Adoçante', 'Óleo de coco', 'Fermento', 'Pasta de amendoim', 'Canela'],
    modo_preparo: 'Misture a massa. Cubra com a farofa. Asse até dourar.'
  },
  {
    id: 'muffin-de-banana',
    titulo: 'Muffin de Banana',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-76',
    ingredientes: ['Banana', 'Ovo', 'Farinha de aveia', 'Canela', 'Fermento'],
    modo_preparo: 'Misture tudo. Asse em forminhas.'
  },
  {
    id: 'muffin-de-banana-e-coco',
    titulo: 'Muffin de Banana e Coco',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-4',
    ingredientes: ['Banana', 'Ovo', 'Farinha de amêndoas', 'Farinha de coco', 'Coco ralado', 'Leite de coco', 'Canela', 'Sal', 'Fermento', 'Adoçante'],
    modo_preparo: 'Misture tudo. Asse até dourar.'
  },
  {
    id: 'muffin-de-baunilha-com-chocolate',
    titulo: 'Muffin de Baunilha com Chocolate',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-2',
    ingredientes: ['Farinha de aveia', 'Bicarbonato', 'Baunilha', 'Ovo', 'Leite de coco', 'Mel', 'Óleo de coco', 'Chocolate 70%'],
    modo_preparo: 'Misture líquidos e secos. Asse em forminhas.'
  },
  {
    id: 'muffin-de-cacau-e-banana',
    titulo: 'Muffin de Cacau e Banana',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-2',
    ingredientes: ['Banana', 'Ovo', 'Leite', 'Farelo de aveia', 'Cacau', 'Fermento'],
    modo_preparo: 'Bata tudo, fermento por último. Asse até firmar.'
  },
  {
    id: 'muffin-de-cenoura-com-chocolate',
    titulo: 'Muffin de Cenoura com Chocolate',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-91',
    ingredientes: ['Ovo', 'Cenoura', 'Óleo de coco', 'Açúcar mascavo', 'Xilitol', 'Farinha de aveia', 'Fermento', 'Canela', 'Sal', 'Chocolate'],
    modo_preparo: 'Bata a base. Misture os secos e chocolate. Asse até dourar.'
  },
  {
    id: 'muffin-de-maca',
    titulo: 'Muffin de Maçã',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-13',
    ingredientes: ['Farinha de aveia', 'Purê de maçã', 'Açúcar mascavo', 'Óleo de coco', 'Fermento', 'Canela'],
    modo_preparo: 'Misture tudo. Asse em forminhas.'
  },
  {
    id: 'muffin-proteico-de-chocolate',
    titulo: 'Muffin Proteico de Chocolate',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-11',
    ingredientes: ['Banana', 'Leite de coco', 'Aveia', 'Mel', 'Cacau', 'Ovo', 'Óleo de coco', 'Whey protein', 'Bicarbonato', 'Chocolate'],
    modo_preparo: 'Bata tudo. Asse até crescer.'
  },
  {
    id: 'torta-de-liquidificador-de-legumes',
    titulo: 'Torta de Liquidificador de Legumes',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-72',
    ingredientes: ['Ovo', 'Farinha de aveia', 'Leite vegetal', 'Óleo', 'Fermento', 'Sal', 'Tomate', 'Cebola', 'Azeitona', 'Cenoura', 'Milho', 'Orégano'],
    modo_preparo: 'Bata a massa. Intercale massa e recheio. Asse até dourar.'
  },
  {
    id: 'torta-de-chocolate-de-aveia-e-linhaca',
    titulo: 'Torta de Chocolate de Aveia e Linhaça',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-11',
    ingredientes: ['Farelo de aveia', 'Linhaça', 'Melado', 'Óleo de coco', 'Baunilha', 'Abacate', 'Cacau', 'Chocolate 70%'],
    modo_preparo: 'Asse a base. Bata o recheio. Refrigere até firmar.'
  },
  {
    id: 'tortinha-de-frutas',
    titulo: 'Tortinha de Frutas',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-16',
    ingredientes: ['Aveia', 'Clara de ovo', 'Adoçante', 'Iogurte grego', 'Frutas'],
    modo_preparo: 'Asse a massa. Recheie e decore.'
  },
  {
    id: 'torta-de-frango-de-liquidificador',
    titulo: 'Torta de Frango de Liquidificador',
    categoria: 'bolos-sem-culpa',
    imagem: 'airfryer-28',
    ingredientes: ['Ovo', 'Azeite', 'Farinha integral', 'Leite', 'Sal', 'Orégano', 'Fermento', 'Frango desfiado'],
    modo_preparo: 'Bata a massa. Intercale com o recheio. Asse até firmar.'
  },
  {
    id: 'torta-de-espinare-integral',
    titulo: 'Torta de Espinafre Integral',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-44',
    ingredientes: ['Farinha de trigo integral', 'Farinha de aveia', 'Manteiga', 'Ovo', 'Ricota', 'Espinafre', 'Alho', 'Azeite', 'Sal', 'Pimenta', 'Noz-moscada', 'Muçarela'],
    modo_preparo: 'Prepare a massa. Misture o recheio. Asse até dourar.'
  },
  // Airfryer
  {
    id: 'sementinhas-de-abobora-torradas-2',
    titulo: 'Sementinhas de Abóbora Torradas',
    categoria: 'airfryer-proteica',
    imagem: 'cake-41',
    ingredientes: ['Sementes de abóbora', 'Azeite', 'Sal', 'Pimenta-preta'],
    modo_preparo: 'Lave, seque, misture com azeite e temperos e asse até ficarem crocantes.'
  },
  {
    id: 'barrinhas-de-cereal-vapt-vupt-2',
    titulo: 'Barrinhas de Cereal Vapt-vupt',
    categoria: 'airfryer-proteica',
    imagem: 'cake-22',
    ingredientes: ['Banana madura', 'Farinha de aveia', 'Açúcar mascavo', 'Castanhas trituradas', 'Farinha de linhaça', 'Coco ralado'],
    modo_preparo: 'Amasse as bananas, misture tudo, asse e corte ainda morno.'
  },
  {
    id: 'pao-de-queijo-de-mandioquinha-2',
    titulo: 'Pão de Queijo de Mandioquinha',
    categoria: 'airfryer-proteica',
    imagem: 'cake-19',
    ingredientes: ['Polvilho azedo', 'Polvilho doce', 'Azeite', 'Mandioquinha cozida', 'Água', 'Sal', 'Ervas'],
    modo_preparo: 'Escalde os polvilhos com água e azeite quentes, misture o purê, modele e asse.'
  },
  {
    id: 'chips-de-legumes-2',
    titulo: 'Chips de Legumes',
    categoria: 'airfryer-proteica',
    imagem: 'airfryer-6',
    ingredientes: ['Beterraba', 'Batata-doce', 'Azeite', 'Sal', 'Pimenta'],
    modo_preparo: 'Fatie fino, tempere, distribua sem sobrepor e asse até crocantes.'
  },
  {
    id: 'nuts-caramelizadas-2',
    titulo: 'Nuts Caramelizadas',
    categoria: 'airfryer-proteica',
    imagem: 'cake-41',
    ingredientes: ['Amêndoas', 'Castanha-de-caju', 'Açúcar mascavo', 'Manteiga', 'Canela', 'Amaranto'],
    modo_preparo: 'Derreta açúcar e manteiga, junte as nuts, mexa e finalize com amaranto.'
  },
  {
    id: 'banana-pao-assada-2',
    titulo: 'Banana-pão Assada',
    categoria: 'sobremesas-zero',
    imagem: 'breakfast-66',
    ingredientes: ['1 banana-pão madura', '2 claras de ovo', 'Gotas de essência de baunilha', 'Um pouco de água', 'Canela em pó', 'Frutas vermelhas para servir'],
    modo_preparo: 'Asse a banana-pão com casca em forno a 180°C até ficar macia. Retire a polpa, amasse bem e misture com as claras, a baunilha e a canela. Leve a uma panela com um pouco de água e cozinhe em fogo baixo, mexendo, até engrossar e virar um creme. Sirva com frutas vermelhas.'
  },
  {
    id: 'tapioca-fitness-2',
    titulo: 'Tapioca Fitness',
    categoria: 'airfryer-proteica',
    imagem: 'breakfast-67',
    ingredientes: ['Goma de tapioca', 'Queijo minas ou ricota', 'Frango desfiado', 'Frutas picadas', 'Chocolate amargo 70%'],
    modo_preparo: 'Peneire a goma de tapioca sobre uma frigideira antiaderente aquecida, formando um disco. Quando a massa se unir, adicione o recheio de sua preferência: para uma versão salgada, use queijo e frango; para uma doce, use frutas e pedaços de chocolate. Dobre e sirva.',
  },
  {
    id: 'churros-fit-2',
    titulo: 'Churros Fit',
    categoria: 'airfryer-proteica',
    imagem: 'cake-57',
    ingredientes: ['Água', 'Açúcar de coco', 'Óleo de coco', 'Sal', 'Farinha integral'],
    modo_preparo: 'Prepare a massa, modele os churros e asse até dourar.'
  }
];
