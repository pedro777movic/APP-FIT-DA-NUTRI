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
  {
    id: 'mingau-delicia-de-coco',
    titulo: 'Mingau Delícia de Coco',
    categoria: 'cafe-da-manha',
    imagem: 'dessert-1',
    ingredientes: ['3 colheres de sopa de aveia ou quinoa', '1 colher de sopa de amaranto', '200ml de leite de coco', 'Canela a gosto', '1/2 banana ou ameixa seca picada'],
    modo_preparo: 'Cozinhe a aveia (ou quinoa) com amaranto, leite de coco e canela em fogo baixo, mexendo sempre, até engrossar. Sirva com a fruta de sua escolha.',
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
    id: 'creme-de-laranja-e-cenoura',
    titulo: 'Creme de Laranja e Cenoura',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['1 cenoura média', '200ml de água', '200ml de suco de laranja natural', '2 colheres de sopa de amido de milho', '3 colheres de sopa de açúcar (ou adoçante a gosto)'],
    modo_preparo: 'No liquidificador, bata a cenoura cozida com a água e o suco de laranja. Coe a mistura, transfira para uma panela, adicione o amido e o açúcar. Cozinhe em fogo baixo, mexendo sempre, até engrossar e formar um creme. Despeje em taças e sirva gelado.'
  },
  {
    id: 'doce-de-pao-dormido',
    titulo: 'Doce de Pão Dormido',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['4 fatias de pão amanhecido', '1 maçã em fatias finas', 'Punhado de uvas-passas', '2 ovos', '1 xícara de leite', '2 colheres de sopa de açúcar', 'Gotas de baunilha', 'Canela para polvilhar'],
    modo_preparo: 'Em um refratário, intercale camadas de pão e fatias de maçã, salpicando uvas-passas. Em uma tigela, bata os ovos com o leite, açúcar e baunilha. Despeje sobre o pão, pressione levemente e deixe absorver por 15 minutos na geladeira. Polvilhe canela e asse em forno a 180°C até dourar.'
  },
  {
    id: 'arroz-doce-com-especiarias',
    titulo: 'Arroz Doce com Especiarias',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['1 xícara de arroz', '2 xícaras de água', '1 litro de leite', '1 xícara de açúcar', '1 canela em pau', '3 cravos', '1 rodela de gengibre', 'Noz-moscada ralada', '1 pitada de açafrão', 'Raspas de limão'],
    modo_preparo: 'Cozinhe o arroz na água até secar. Adicione o leite, o açúcar e todas as especiarias. Cozinhe em fogo baixo, mexendo ocasionalmente, até o arroz ficar macio e o doce cremoso. Finalize com raspas de limão.'
  },
  {
    id: 'compota-da-entrecasca-de-laranja',
    titulo: 'Compota da Entrecasca de Laranja',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['Parte branca da casca de 3 laranjas', '1 colher de chá de bicarbonato', '2 xícaras de açúcar', '2 xícaras de água', '1 canela em pau', '3 cravos'],
    modo_preparo: 'Corte a casca em tiras e ferva por 10 minutos em água com bicarbonato. Escorra e lave em água fria. Prepare uma calda com açúcar, água, canela e cravo. Cozinhe as cascas na calda em fogo baixo até ficarem macias e translúcidas.'
  },
  {
    id: 'trufa-de-banana-com-chocolate',
    titulo: 'Trufa de Banana com Chocolate',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['2 bananas nanicas maduras', '1 colher de sopa de açúcar', '50g de chocolate 70% picado', '1/2 colher de sopa de manteiga', 'Canela a gosto', 'Cacau em pó para enrolar'],
    modo_preparo: 'Amasse as bananas e leve ao fogo com açúcar, chocolate, manteiga e canela. Cozinhe, mexendo sempre, até a massa desgrudar do fundo da panela. Deixe esfriar completamente. Modele pequenas trufas, passe no cacau em pó e sirva.'
  },
  {
    id: 'sorvete-de-banana',
    titulo: 'Sorvete de Banana',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['3 bananas maduras congeladas', '1/2 colher de chá de canela em pó', '2 colheres de sopa de água (se necessário)'],
    modo_preparo: 'Em um processador, bata as bananas congeladas com a canela até obter uma consistência cremosa, semelhante a um sorvete. Se precisar, adicione um pouco de água para ajudar a bater. Sirva imediatamente ou leve ao congelador para firmar mais.'
  },
  {
    id: 'brigadeiro-fit',
    titulo: 'Brigadeiro Fit',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['4 colheres de sopa de leite em pó desnatado', '2 colheres de sopa de água', '1 colher de sopa de chocolate em pó 80%', 'Adoçante a gosto', 'Frutas picadas para servir (morangos, uvas)'],
    modo_preparo: 'Em uma tigela, misture bem o leite em pó, a água, o chocolate e o adoçante até formar uma pasta homogênea e cremosa. Sirva imediatamente como uma calda sobre suas frutas picadas preferidas.'
  },
  {
    id: 'pudim-de-chia',
    titulo: 'Pudim de Chia',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['3 colheres de sopa de sementes de chia', '1 xícara de leite vegetal (amêndoas, coco)', 'Frutas picadas a gosto (manga, morango)'],
    modo_preparo: 'Em um pote com tampa, misture as sementes de chia com o leite vegetal. Agite bem e leve à geladeira por pelo menos 4 horas (ou durante a noite) para que as sementes inchem e formem um pudim. Sirva gelado com frutas frescas por cima.'
  },
  {
    id: 'brigadeiro-surpresa',
    titulo: 'Brigadeiro Surpresa',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['1/2 lata de leite condensado light', '1 xícara de biomassa de banana verde', '2 colheres de sopa de cacau em pó', '2 colheres de sopa de leite desnatado'],
    modo_preparo: 'Em uma panela, misture todos os ingredientes. Leve ao fogo baixo, mexendo continuamente, até a mistura engrossar e começar a desgrudar do fundo da panela, atingindo o ponto de brigadeiro de enrolar. Deixe esfriar para modelar.'
  },
  {
    id: 'gelatina-de-whey',
    titulo: 'Gelatina de Whey',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['1 pacote de gelatina diet (sabor de sua preferência)', '1 pote de iogurte desnatado', '5 cubos de gelo', '1 scoop de whey protein (sabor que combine com a gelatina)'],
    modo_preparo: 'Prepare a gelatina conforme as instruções, mas usando metade da água. No liquidificador, bata a gelatina pronta com o iogurte, o gelo e o whey protein até ficar uma mistura cremosa. Leve para gelar até firmar.'
  },
  {
    id: 'salada-de-frutas-especial',
    titulo: 'Salada de Frutas Especial',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['1/2 mamão papaia em cubos', '1 banana em rodelas', '1 xícara de morangos picados', 'Suco de 2 laranjas', '1 kiwi em rodelas'],
    modo_preparo: 'Em uma tigela, misture delicadamente todas as frutas picadas. Regue com o suco de laranja para evitar que as frutas escureçam e para adicionar mais sabor. Sirva a salada de frutas bem gelada.'
  },
  {
    id: 'sorvete-de-banana-proteico',
    titulo: 'Sorvete de Banana Proteico',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['2 bananas maduras congeladas em rodelas', '1 scoop de whey protein (sabor baunilha ou chocolate)'],
    modo_preparo: 'Bata a banana congelada em um processador potente até formar uma base cremosa. Adicione o whey protein e bata novamente apenas para incorporar. Sirva imediatamente como um sorvete macio.'
  },
  {
    id: 'beijinho-fit',
    titulo: 'Beijinho Fit',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['1 xícara de leite em pó desnatado', '1 colher de sopa de óleo de coco', 'Adoçante a gosto (xilitol ou stevia)', '50ml de água quente', 'Coco ralado sem açúcar para enrolar'],
    modo_preparo: 'No processador, bata o leite em pó, óleo de coco, adoçante e água quente até formar uma massa. Modele bolinhas, passe no coco ralado e asse levemente em forno baixo por 5 minutos só para firmar.'
  },
  {
    id: 'brigadeiro-de-colher-funcional',
    titulo: 'Brigadeiro de Colher Funcional',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['1 xícara de biomassa de banana verde', '2 colheres de sopa de xilitol', '1 colher de sopa de óleo de coco', '2 colheres de sopa de chocolate 70%', '100ml de leite de coco', '1 pitada de sal'],
    modo_preparo: 'Em uma panela, misture todos os ingredientes e leve ao fogo baixo, mexendo sem parar, até que a mistura atinja uma consistência cremosa de brigadeiro de colher.'
  },
  {
    id: 'trufa-funcional',
    titulo: 'Trufa Funcional',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['1/2 xícara de farelo de aveia', '2 colheres de sopa de açúcar mascavo', '1 colher de sopa de cacau em pó', '3 colheres de sopa de pasta de amendoim'],
    modo_preparo: 'Em uma tigela, misture todos os ingredientes até formar uma massa que não grude nas mãos. Modele pequenas bolinhas e passe-as no cacau em pó para finalizar.'
  },
  {
    id: 'pe-de-moleque-fitness',
    titulo: 'Pé de Moleque Fitness',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['100g de chocolate amargo 70%', '1 xícara de amendoim torrado sem sal', '3 biscoitos de arroz integrais picados'],
    modo_preparo: 'Derreta o chocolate em banho-maria. Misture o amendoim e o biscoito de arroz picado. Despeje em uma forma forrada, nivele e leve à geladeira por 30 minutos para firmar antes de cortar.'
  },
  {
    id: 'banoffee-no-pote',
    titulo: 'Banoffee no Pote',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['4 bolachas integrais trituradas', '2 colheres de sopa de doce de leite fit', '1 banana em rodelas', '1/2 pote de iogurte grego natural', 'Canela para polvilhar'],
    modo_preparo: 'Em um pote, monte em camadas: comece com a bolacha triturada, seguida pelo doce de leite, rodelas de banana e, por fim, o iogurte grego. Polvilhe canela e sirva gelado.'
  },
  {
    id: 'mousse-de-leite-em-po',
    titulo: 'Mousse de Leite em Pó',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['1 xícara de leite em pó desnatado', '1/2 xícara de água gelada', '1 pacote de suco em pó zero açúcar (sabor maracujá ou limão)'],
    modo_preparo: 'No liquidificador, bata todos os ingredientes em alta velocidade por cerca de 3 a 5 minutos, ou até que a mistura fique bem cremosa e aerada. Despeje em uma travessa e leve para gelar até firmar.'
  },
  {
    id: 'pudim-de-chocolate-com-whey',
    titulo: 'Pudim de Chocolate com Whey',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['300ml de água', '2 colheres de sopa de cacau em pó', '2 colheres de sopa de leite em pó desnatado', '1 pacote de pudim diet sabor chocolate', '1 scoop de whey protein de chocolate'],
    modo_preparo: 'Em uma panela, misture todos os ingredientes. Leve ao fogo médio, mexendo sempre, até ferver e engrossar. Despeje em uma forma ou em potinhos individuais e leve à geladeira para gelar e firmar.'
  },
  {
    id: 'danete-cremoso-de-chocolate',
    titulo: 'Danete Cremoso de Chocolate',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['100ml de leite de coco', '1 colher de sopa de cacau em pó', '1 colher de sopa de chocolate em pó 50%', '1/2 abacate maduro congelado', '1 colher de sopa de chia', 'Adoçante a gosto'],
    modo_preparo: 'Bata todos os ingredientes no liquidificador até obter um creme liso e homogêneo. Sirva gelado, com raspas de chocolate 70% por cima para decorar.'
  },
  {
    id: 'abacate-com-limao-e-mel',
    titulo: 'Abacate com Limão e Mel',
    categoria: 'sobremesas-zero',
    imagem: 'cake-70',
    ingredientes: ['1/2 abacate maduro', 'Suco de 1/2 limão', '1 colher de chá de mel'],
    modo_preparo: 'Amasse o abacate com um garfo, misture o suco de limão e regue com o mel. Sirva imediatamente como uma sobremesa rápida e refrescante.'
  },
  {
    id: 'sagu-funcional-de-chia-com-alfarroba',
    titulo: 'Sagu Funcional de Chia com Alfarroba',
    categoria: 'sobremesas-zero',
    imagem: 'cake-25',
    ingredientes: ['3 colheres de sopa de chia', '200ml de leite de coco', '1 colher de sopa de farinha de alfarroba', '1 colher de sopa de açúcar mascavo'],
    modo_preparo: 'Misture todos os ingredientes em uma tigela e deixe hidratar por pelo menos 30 minutos, mexendo ocasionalmente, até a chia formar um gel. Leve à geladeira e sirva gelado.'
  },
  {
    id: 'banana-quentinha-com-canela',
    titulo: 'Banana Quentinha com Canela',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-7',
    ingredientes: ['1 banana prata', 'Canela em pó a gosto'],
    modo_preparo: 'Corte a banana em rodelas ou ao meio, no sentido do comprimento. Polvilhe canela generosamente e aqueça no micro-ondas por cerca de 30 a 40 segundos. Sirva quente.'
  },
  {
    id: 'pudim-de-manga',
    titulo: 'Pudim de Manga',
    categoria: 'sobremesas-zero',
    imagem: 'cake-24',
    ingredientes: ['100ml de leite de coco', '1 manga madura em cubos', '2 colheres de sopa de chia', 'Gotas de baunilha'],
    modo_preparo: 'Bata metade do leite de coco com a manga. Em um pote, misture o restante do leite de coco com a chia e a baunilha, e deixe hidratar. Monte em camadas: creme de chia no fundo e creme de manga por cima. Gele antes de servir.'
  },
  {
    id: 'maca-assada-com-canela',
    titulo: 'Maçã Assada com Canela',
    categoria: 'sobremesas-zero',
    imagem: 'cake-50',
    ingredientes: ['1 maçã', 'Canela em pó a gosto', '1 canela em pau'],
    modo_preparo: 'Retire o miolo da maçã. No buraco, coloque a canela em pó e o pau de canela. Embrulhe em papel alumínio e asse em forno a 180°C por 20 minutos, ou até ficar macia.'
  },
  {
    id: 'docinho-de-frutas-secas',
    titulo: 'Docinho de Frutas Secas',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-3',
    ingredientes: ['1/2 xícara de tâmaras sem caroço', '1/4 xícara de banana passa', '1/4 xícara de damasco', '1/4 xícara de ameixa sem caroço', '1/2 xícara de castanhas variadas', '1 colher de sopa de alfarroba em pó', '1 colher de sopa de óleo de coco'],
    modo_preparo: 'Em um processador, triture as castanhas. Adicione as frutas secas e os demais ingredientes e processe até formar uma massa moldável. Faça bolinhas e leve à geladeira para firmar.'
  },
  {
    id: 'sorvete-de-banana-com-cacau',
    titulo: 'Sorvete de Banana com Cacau',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-7',
    ingredientes: ['2 bananas maduras congeladas em rodelas', '1 colher de sopa de cacau em pó', '1 colher de sopa de gel de chia (1 colher de chia para 3 de água)', '1 colher de sopa de açúcar mascavo (opcional)'],
    modo_preparo: 'Bata as bananas congeladas com os demais ingredientes em um processador potente até obter um creme homogêneo. Leve ao congelador por mais 1 hora para firmar antes de servir.'
  },
  {
    id: 'cuscuz-branco-doce',
    titulo: 'Cuscuz Branco Doce',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-5',
    ingredientes: ['1 xícara de tapioca granulada', '400ml de leite de coco ou água quente', '3 colheres de sopa de açúcar demerara', '50g de coco ralado sem açúcar', 'Leite condensado fit (opcional)'],
    modo_preparo: 'Em uma tigela, misture a tapioca com o açúcar. Despeje o líquido quente por cima, mexa bem e abafe por 10 minutos. Adicione o coco ralado, misture e finalize com leite condensado fit, se desejar.'
  },
  {
    id: 'sorvete-de-ora-pro-nobis',
    titulo: 'Sorvete de Ora-pro-nóbis',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-8',
    ingredientes: ['1 lata de leite condensado', '1 lata de creme de leite', '1/2 xícara de leite em pó', '50g de coco ralado', '1 xícara de água', '1 xícara de folhas de ora-pro-nóbis higienizadas'],
    modo_preparo: 'Bata as folhas de ora-pro-nóbis com a água no liquidificador e coe. Volte o suco para o liquidificador e bata com os demais ingredientes. Leve ao freezer até firmar, mexendo na metade do tempo para não cristalizar.'
  },
  {
    id: 'brigadeiro-de-batata-doce',
    titulo: 'Brigadeiro de Batata-doce',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-3',
    ingredientes: ['1 xícara de batata-doce cozida e amassada', '2 colheres de sopa de açúcar mascavo', '2 colheres de sopa de cacau em pó', '1 colher de sopa de manteiga ou óleo de coco'],
    modo_preparo: 'Em uma panela, misture todos os ingredientes e leve ao fogo baixo, mexendo sem parar até a massa desgrudar do fundo. Deixe esfriar, modele as bolinhas e passe no granulado ou cacau.'
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
    id: 'brigadeiro-fit-proteico',
    titulo: 'Brigadeiro Fit Proteico',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-3',
    ingredientes: ['1 scoop de proteína em pó (chocolate)', '1 colher de sopa de amido de milho', '2 colheres de sopa de cacau em pó', '200ml de leite vegetal', '1/2 xícara de purê de batata-doce', 'Gotas de essência de chocolate'],
    modo_preparo: 'Misture todos os ingredientes em uma panela e leve ao fogo baixo, mexendo até engrossar. Deixe esfriar, modele e passe no cacau ou em nuts trituradas.'
  },
  {
    id: 'pudim-de-forno-com-whey',
    titulo: 'Pudim de Forno com Whey',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-5',
    ingredientes: ['3 ovos', '1 colher de sopa de amido de milho', '2 scoops de whey de chocolate', '200ml de leite desnatado'],
    modo_preparo: 'Misture todos os ingredientes até ficar homogêneo. Despeje em uma forma de pudim caramelizada com adoçante e leve ao forno em banho-maria por cerca de 40 minutos, ou até firmar.'
  },
  {
    id: 'sorvete-diet',
    titulo: 'Sorvete Diet',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-9',
    ingredientes: ['1 pacote de gelatina diet (sabor morango)', '1 lata de leite condensado diet', '1 lata de creme de leite light'],
    modo_preparo: 'Prepare a gelatina com menos água. Bata no liquidificador com os outros ingredientes, leve ao freezer por 2 horas, bata novamente na batedeira e congele até firmar.'
  },
  {
    id: 'iogurte-de-limao-diet',
    titulo: 'Iogurte de Limão Diet',
    categoria: 'sobremesas-zero',
    imagem: 'cake-8',
    ingredientes: ['1 pote de iogurte natural desnatado', '200ml de leite desnatado', '1 pacote de gelatina diet sabor limão'],
    modo_preparo: 'Dissolva a gelatina conforme a embalagem. Misture com o leite e o iogurte. Leve à geladeira em potinhos individuais até firmar.'
  },
  {
    id: 'creme-de-coco-com-maracuja-diet',
    titulo: 'Creme de Coco com Maracujá Diet',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['200ml de leite de coco light', '100ml de água morna', '100ml de leite desnatado', '50g de coco ralado', 'Polpa de 1 maracujá', '1/2 lata de leite condensado diet', '1 envelope de gelatina sem sabor', '2 claras em neve'],
    modo_preparo: 'Hidrate a gelatina. Bata todos os ingredientes no liquidificador, exceto as claras. Incorpore delicadamente as claras em neve e leve para gelar.'
  },
  {
    id: 'doce-de-leite-diet',
    titulo: 'Doce de Leite Diet',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['1/2 xícara de frutose', '1 litro de leite desnatado', '1 colher de sopa de amido de milho', '1/2 colher de chá de bicarbonato de sódio'],
    modo_preparo: 'Dissolva o amido em um pouco de leite. Cozinhe todos os ingredientes em fogo baixo, mexendo sempre, até engrossar e ficar com cor de doce de leite. Esfrie e leve à geladeira.'
  },
  {
    id: 'banana-em-calda-natural',
    titulo: 'Banana em Calda Natural',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-2',
    ingredientes: ['4 bananas maduras', '1/4 xícara de água'],
    modo_preparo: 'Corte as bananas em rodelas grossas. Cozinhe em fogo bem baixo com a água em uma panela tampada até as bananas soltarem a própria calda e ficarem macias.'
  },
  {
    id: 'cocadinha-low-carb',
    titulo: 'Cocadinha Low Carb',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-52',
    ingredientes: ['1 xícara de coco fresco ralado grosso', '2 ovos', '2 colheres de sopa de xilitol', '1/2 colher de chá de fermento em pó'],
    modo_preparo: 'Misture todos os ingredientes. Coloque pequenas porções em forminhas de silicone ou em uma assadeira untada. Asse em forno a 180°C por cerca de 15 minutos, ou até dourar.'
  },
  {
    id: 'mousse-de-cacau-com-nuts',
    titulo: 'Mousse de Cacau com Nuts',
    categoria: 'sobremesas-zero',
    imagem: 'cake-53',
    ingredientes: ['1 abacate maduro', '3 colheres de sopa de cacau em pó', '3 colheres de sopa de xilitol', '1 colher de sopa de chia', '100ml de leite de coco', 'Punhado de castanha-do-pará e amêndoas', 'Folhas de hortelã'],
    modo_preparo: 'Bata o abacate, cacau, xilitol, chia e leite de coco até virar um creme. Gele por 2 horas e sirva finalizando com as nuts picadas e folhas de hortelã.'
  },
  {
    id: 'bolo-minuto',
    titulo: 'Bolo Minuto',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-14',
    ingredientes: ['1 colher de sopa de óleo de coco', '2 colheres de sopa de farinha de coco', '1 colher de sopa de xilitol', '1/2 colher de chá de fermento', '1 ovo', 'Gotas de baunilha'],
    modo_preparo: 'Misture todos os ingredientes em uma caneca e leve ao micro-ondas por cerca de 1 minuto e 30 segundos, ou até assar por completo.'
  },
  {
    id: 'bolinho-de-cenoura-com-chocolate',
    titulo: 'Bolinho de Cenoura com Chocolate',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-91',
    ingredientes: ['1 cenoura', '2 ovos', '2 colheres de sopa de manteiga derretida', '1 xícara de farinha de amêndoas', '1 colher de chá de fermento', '2 colheres de sopa de xilitol', 'Calda: 50g chocolate 70%, 2 colheres de sopa de creme de leite'],
    modo_preparo: 'Bata a cenoura, ovos e manteiga. Incorpore a farinha, fermento e xilitol. Asse os bolinhos a 180°C. Prepare a calda derretendo o chocolate com o creme de leite e finalize.'
  },
  {
    id: 'banana-no-palito-com-chocolate',
    titulo: 'Banana no Palito com Chocolate',
    categoria: 'sobremesas-zero',
    imagem: 'cake-51',
    ingredientes: ['2 bananas', '100g de chocolate amargo 70%', '1 colher de chá de óleo de coco'],
    modo_preparo: 'Corte as bananas ao meio e espete palitos de picolé. Derreta o chocolate com o óleo de coco. Banhe as bananas no chocolate e coloque em uma travessa forrada. Leve ao freezer até endurecer.'
  },
  {
    id: 'beijinho-fit-2',
    titulo: 'Beijinho Fit',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['1 xícara de leite em pó desnatado', '50g de coco ralado sem açúcar', '150ml de leite de coco light', 'Adoçante a gosto'],
    modo_preparo: 'Misture todos os ingredientes até dar ponto de enrolar. Gele rapidamente por 15 minutos, modele as bolinhas e passe no coco ralado.'
  },
  {
    id: 'bolinhas-de-banana-e-castanhas',
    titulo: 'Bolinhas de Banana e Castanhas',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-38',
    ingredientes: ['1/2 xícara de aveia', '1 banana madura amassada', '1/2 xícara de farinha de amêndoas', '1/4 xícara de castanhas picadas', 'Canela a gosto', '1 colher de sopa de pasta de amendoim', '1 colher de sopa de mel', '1 colher de sopa de óleo de coco'],
    modo_preparo: 'Misture todos os ingredientes até formar uma massa. Gele por 20 minutos para firmar e depois modele bolinhas.'
  },
  {
    id: 'brigadeirao-fit',
    titulo: 'Brigadeirão Fit',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-56',
    ingredientes: ['3 ovos', '200ml de leite desnatado', '1 xícara de leite em pó desnatado', '3 colheres de sopa de cacau em pó', '3 colheres de sopa de xilitol', '1 colher de sopa de óleo de coco'],
    modo_preparo: 'Bata tudo no liquidificador. Despeje em uma forma untada e asse em banho-maria em forno a 180°C por cerca de 45 minutos, ou até firmar.'
  },
  {
    id: 'brigadeiro-light',
    titulo: 'Brigadeiro Light',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-3',
    ingredientes: ['1 colher de sopa de óleo de coco ou ghee', '3 colheres de sopa de cacau em pó', '3 colheres de sopa de açúcar demerara', '1 xícara de leite desnatado', '3 colheres de sopa de leite em pó'],
    modo_preparo: 'Leve tudo ao fogo baixo, mexendo sem parar, até atingir o ponto de brigadeiro de colher ou de enrolar, conforme sua preferência.'
  },
  {
    id: 'brownie-de-batata-doce',
    titulo: 'Brownie de Batata-doce',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-62',
    ingredientes: ['1 xícara de purê de batata-doce', '2 ovos', '1/2 xícara de cacau em pó', '1/2 xícara de mel', '1/4 xícara de água', '1/2 xícara de farinha de amêndoas', '1/2 xícara de nozes picadas', '1 colher de chá de fermento'],
    modo_preparo: 'Bata o purê, ovos, cacau, mel e água. Incorpore a farinha e o fermento. Misture as nozes. Asse em forno a 180°C por 25 minutos, até o centro ficar úmido.'
  },
  {
    id: 'brownie-fit-de-aveia',
    titulo: 'Brownie Fit de Aveia',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-63',
    ingredientes: ['100g de chocolate meio amargo 70%', '2 colheres de sopa de óleo de coco', '2 ovos', '1/2 xícara de açúcar mascavo', '1 xícara de aveia em flocos finos', '1/2 xícara de nozes picadas'],
    modo_preparo: 'Derreta o chocolate com o óleo de coco. Bata os ovos com o açúcar, junte o chocolate derretido, a aveia e as nozes. Asse em forno a 180°C por 20 minutos.'
  },
  {
    id: 'chandelle-fit',
    titulo: 'Chandelle Fit',
    categoria: 'sobremesas-zero',
    imagem: 'cake-53',
    ingredientes: ['250ml de leite desnatado', '1 colher de sopa de cacau em pó 100%', '1 colher de sopa de amido de milho', '1 colher de sopa de xilitol'],
    modo_preparo: 'Dissolva o amido no leite frio. Adicione o cacau e o xilitol. Cozinhe em fogo baixo, mexendo sempre, até engrossar. Leve para gelar.'
  },
  {
    id: 'churros-fit-2',
    titulo: 'Churros Fit',
    categoria: 'airfryer-proteica',
    imagem: 'cake-57',
    ingredientes: ['1 xícara de água', '1 colher de sopa de açúcar de coco', '1 colher de sopa de óleo de coco', '1 pitada de sal', '1 xícara de farinha integral'],
    modo_preparo: 'Ferva a água com açúcar, óleo e sal. Adicione a farinha de uma vez e cozinhe até formar uma bola. Modele os churros com um saco de confeiteiro e asse na airfryer a 200°C até dourar.'
  },
  {
    id: 'cookie-de-microondas',
    titulo: 'Cookie de Micro-ondas',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-35',
    ingredientes: ['1 gema', '2 colheres de sopa de farinha de amêndoas', '1 quadradinho de chocolate 70% picado', '1 colher de chá de açúcar mascavo', 'Gotas de baunilha', '1/2 colher de chá de óleo de coco'],
    modo_preparo: 'Misture todos os ingredientes em uma tigela. Modele um cookie em um prato e leve ao micro-ondas por cerca de 1 minuto, ou até firmar.'
  },
  {
    id: 'cremoso-de-frutas',
    titulo: 'Cremoso de Frutas',
    categoria: 'sobremesas-zero',
    imagem: 'cake-26',
    ingredientes: ['1 pote de iogurte desnatado', '1 colher de sopa de mel', '1 colher de sopa de nozes picadas', '1/2 xícara de frutas vermelhas (morangos, mirtilos)'],
    modo_preparo: 'Em uma taça, misture o iogurte com o mel. Adicione as nozes e as frutas vermelhas por cima e sirva gelado.'
  },
  {
    id: 'frozen-yogurt-de-mamao',
    titulo: 'Frozen Yogurt de Mamão',
    categoria: 'sobremesas-zero',
    imagem: 'cake-48',
    ingredientes: ['1/2 mamão papaia congelado em cubos', '1 pote de iogurte desnatado', '1 colher de sopa de mel (opcional)'],
    modo_preparo: 'Bata o mamão congelado com o iogurte e o mel no processador até virar um creme. Congele por mais 30 minutos antes de servir.'
  },
  {
    id: 'geleia-de-amora',
    titulo: 'Geleia de Amora',
    categoria: 'sobremesas-zero',
    imagem: 'cake-47',
    ingredientes: ['2 xícaras de amora', '2 colheres de sopa de açúcar mascavo ou xilitol'],
    modo_preparo: 'Cozinhe as amoras com o açúcar em fogo baixo, mexendo, até reduzir e engrossar. Se preferir mais lisa, bata no liquidificador após esfriar.'
  },
  {
    id: 'goiabinhas-fit',
    titulo: 'Goiabinhas Fit',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-54',
    ingredientes: ['1 xícara de farinha de arroz ou aveia', '2 colheres de sopa de manteiga ghee', '2 colheres de sopa de água', '1 colher de sopa de xilitol', '50g de goiabada sem açúcar'],
    modo_preparo: 'Misture as farinhas, manteiga, água e xilitol até formar uma massa. Abra, corte em retângulos, recheie com a goiabada e asse a 180°C até dourar.'
  },
  {
    id: 'leite-condensado-fake',
    titulo: 'Leite Condensado Fake',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-5',
    ingredientes: ['1 xícara de leite em pó desnatado', '1 colher de sopa de óleo de coco', '1/2 xícara de açúcar mascavo ou xilitol', '1/2 xícara de água quente'],
    modo_preparo: 'Bata todos os ingredientes no liquidificador até ficar homogêneo e leve à geladeira por pelo menos 2 horas para engrossar.'
  },
  {
    id: 'maca-recheada',
    titulo: 'Maçã Recheada',
    categoria: 'sobremesas-zero',
    imagem: 'cake-50',
    ingredientes: ['1 maçã', '1 colher de sopa de farofa de amêndoas e nozes', '1 colher de chá de óleo de coco', 'Canela a gosto', '1 fio de mel'],
    modo_preparo: 'Retire o miolo da maçã. Misture a farofa com óleo de coco e canela, e recheie a maçã. Regue com mel e asse a 180°C até a maçã ficar macia.'
  },
  {
    id: 'manjar-de-coco',
    titulo: 'Manjar de Coco',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-5',
    ingredientes: ['500ml de leite desnatado', '4 colheres de sopa de leite em pó', '1 iogurte natural', '200ml de leite de coco light', '1 envelope de gelatina sem sabor', 'Adoçante a gosto', 'Calda de ameixa para servir'],
    modo_preparo: 'Hidrate a gelatina. Bata todos os ingredientes no liquidificador. Despeje em uma forma e gele até firmar. Sirva com calda de ameixa.'
  },
  {
    id: 'mousse-de-limao',
    titulo: 'Mousse de Limão',
    categoria: 'sobremesas-zero',
    imagem: 'cake-8',
    ingredientes: ['1 xícara de leite em pó desnatado', '1 colher de sopa de adoçante culinário', '1/2 xícara de água quente', 'Suco de 2 limões'],
    modo_preparo: 'Bata o leite em pó, adoçante e água no liquidificador. Com ele ligado, adicione o suco de limão aos poucos, até engrossar. Leve para gelar.'
  },
  {
    id: 'pacoca-fit-2',
    titulo: 'Paçoca Fit',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-3',
    ingredientes: ['1 xícara de amendoim torrado sem sal', '4 colheres de sopa de leite em pó desnatado', '2 colheres de sopa de adoçante', '2 colheres de sopa de leite desnatado'],
    modo_preparo: 'Processe o amendoim. Adicione os pós e processe mais. Adicione o leite aos poucos até dar liga. Compacte em uma forma e gele antes de cortar.'
  },
  {
    id: 'palha-italiana-fit',
    titulo: 'Palha Italiana Fit',
    categoria: 'bolos-sem-culpa',
    imagem: 'dessert-3',
    ingredientes: ['1 pacote de biscoito integral sem açúcar', '200ml de leite de coco', '100g de chocolate amargo 70%', '1 colher de sopa de mel', '1 colher de sopa de xilitol'],
    modo_preparo: 'Derreta o chocolate com o leite, mel e xilitol. Misture com o biscoito quebrado. Coloque em uma forma e leve à geladeira até firmar. Corte em quadrados.'
  },
  {
    id: 'pe-de-moleque-fit',
    titulo: 'Pé de Moleque Fit',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-1',
    ingredientes: ['1/2 xícara de açúcar de coco', '1/4 xícara de água', '1 colher de sopa de mel', '1 xícara de amendoim torrado sem sal'],
    modo_preparo: 'Prepare uma calda com o açúcar, água e mel. Adicione o amendoim e mexa. Espalhe em uma superfície untada e corte após esfriar.'
  },
  {
    id: 'petit-gateau-fit-2',
    titulo: 'Petit Gateau Fit',
    categoria: 'sobremesas-zero',
    imagem: 'cake-64',
    ingredientes: ['50g de chocolate amargo 70%', '1 colher de sopa de xylitol', '1 ovo', '1 colher de sopa de pasta de amendoim', '1 colher de sopa de farinha de aveia'],
    modo_preparo: 'Derreta o chocolate com a pasta de amendoim. Misture com o ovo, xylitol e aveia. Asse por poucos minutos até o centro ficar cremoso.',
  },
  {
    id: 'petit-gateau-com-pasta-de-amendoim-recheado-2',
    titulo: 'Petit Gateau com Pasta de Amendoim Recheado',
    categoria: 'sobremesas-zero',
    imagem: 'cake-65',
    ingredientes: ['100g de chocolate amargo 70%', '1 colher de sopa de óleo de coco', '2 colheres de sopa de xylitol', '2 ovos', '2 colheres de sopa de farinha de aveia', 'Pasta de amendoim'],
    modo_preparo: 'Congele a pasta de amendoim com óleo. Prepare a massa e coloque o recheio no centro. Asse até firmar por fora e manter o interior cremoso.',
  },
  {
    id: 'picole-de-amendoim-2',
    titulo: 'Picolé de Amendoim',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-7',
    ingredientes: ['2 bananas congeladas', '3 colheres de sopa de pasta de amendoim', '100ml de água gelada'],
    modo_preparo: 'Bata tudo no liquidificador até ficar cremoso. Coloque em forminhas de picolé. Leve ao freezer até firmar.',
  },
  {
    id: 'pudim-de-chia-com-creme-de-manga-2',
    titulo: 'Pudim de Chia com Creme de Manga',
    categoria: 'sobremesas-zero',
    imagem: 'cake-24',
    ingredientes: ['200ml de leite de coco', '3 colheres de sopa de chia', '1 colher de sopa de mel', 'Baunilha', 'Canela', '1 manga madura'],
    modo_preparo: 'Misture o leite com chia, mel, baunilha e canela e gele. Processe a manga. Monte em camadas e sirva.',
  },
  {
    id: 'pudim-de-chia-de-chocolate-2',
    titulo: 'Pudim de Chia de Chocolate',
    categoria: 'sobremesas-zero',
    imagem: 'cake-25',
    ingredientes: ['200ml de leite de amêndoas', '3 colheres de sopa de chia', '1 colher de sopa de mel', 'Baunilha', '1 colher de sopa de cacau em pó'],
    modo_preparo: 'Misture o leite com chia e mel. Separe metade e adicione cacau. Gele e monte em camadas.',
  },
  {
    id: 'pudim-de-leite-nutritivo-2',
    titulo: 'Pudim de Leite Nutritivo',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-5',
    ingredientes: ['4 ovos', '500ml de leite desnatado', '6 colheres de sopa de leite em pó', '4 colheres de sopa de creme de ricota', 'Adoçante', 'Baunilha', '2 colheres de sopa de açúcar mascavo para a calda'],
    modo_preparo: 'Faça a calda com o açúcar. Bata o restante no liquidificador, despeje na forma e asse em banho-maria até firmar.',
  },
  {
    id: 'sorvete-de-abacaxi-e-laranja-3',
    titulo: 'Sorvete de Abacaxi e Laranja',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-6',
    ingredientes: ['2 xícaras de abacaxi congelado', 'Suco de 1 laranja', 'Adoçante a gosto'],
    modo_preparo: 'Processe as frutas congeladas até virar um creme. Leve ao freezer por mais 1 hora antes de servir.',
  },
  {
    id: 'sorvete-de-banana-e-amendoim-3',
    titulo: 'Sorvete de Banana e Amendoim',
    categoria: 'sobremesas-zero',
    imagem: 'dessert-7',
    ingredientes: ['3 bananas maduras congeladas', '2 colheres de sopa de pasta de amendoim'],
    modo_preparo: 'Bata a banana congelada até ficar cremosa, adicione a pasta de amendoim e sirva imediatamente.',
  },
  {
    id: 'tiramisu-fit-2',
    titulo: 'Tiramisú Fit',
    categoria: 'sobremesas-zero',
    imagem: 'cake-27',
    ingredientes: ['Bolinho: 1 ovo, 1 colher de xylitol, 2 de farinha de aveia, 2 de leite, 1/2 de fermento. Creme: 100g de ricota, 100g de cream cheese, xylitol, baunilha. Café forte, Cacau em pó.'],
    modo_preparo: 'Asse o bolinho. Bata o creme. Umedeça fatias do bolo no café e monte camadas com o creme. Finalize com cacau.',
  },
  {
    id: 'bolo-de-banana-caramelizada-2',
    titulo: 'Bolo de Banana Caramelizada',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-86',
    ingredientes: ['Massa: 2 bananas, 2 ovos, 1 xícara de aveia, 1/4 de óleo de coco, 1 colher de fermento. Caramelo: 2 colheres de mel, 2 bananas em rodelas.'],
    modo_preparo: 'Bata os ingredientes da massa. Forre a forma com mel e bananas, despeje a massa e asse até dourar.',
  },
  {
    id: 'bolo-de-banana-e-cacau-2',
    titulo: 'Bolo de Banana e Cacau',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-2',
    ingredientes: ['2 bananas, 2 ovos, 1/2 xícara de farelo de aveia, 1/2 de farinha de arroz, 1/4 de açúcar mascavo, 2 colheres de cacau, chocolate 70%, 1 colher de fermento.'],
    modo_preparo: 'Amasse as bananas e bata com os ovos. Misture os secos, junte tudo, adicione o fermento e asse.',
  },
  {
    id: 'bolo-de-banana-e-chocolate-2',
    titulo: 'Bolo de Banana e Chocolate',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-3',
    ingredientes: ['3 bananas, 1 xícara de aveia, 2 colheres de pasta de amendoim, 50g de chocolate 70%'],
    modo_preparo: 'Amasse as bananas, misture com aveia e pasta de amendoim. Incorpore o chocolate e asse até firmar.',
  },
  {
    id: 'bolo-de-banana-e-coco-integral-2',
    titulo: 'Bolo de Banana e Coco Integral',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-4',
    ingredientes: ['3 bananas, 3 ovos, 1 xícara de açúcar demerara, 1/2 de óleo de coco, 1 de farinha de arroz integral, 1 de farinha de trigo integral, 200ml de leite de coco, 50g de coco ralado, baunilha, canela, 1 colher de fermento.'],
    modo_preparo: 'Bata os líquidos. Adicione as farinhas e coco. Intercale massa e banana. Asse até dourar.',
  },
  {
    id: 'bolo-de-banana-e-nozes-2',
    titulo: 'Bolo de Banana e Nozes',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-5',
    ingredientes: ['3 ovos, 1 xícara de aveia, 1 de farinha integral, 2 bananas, 1 iogurte natural, 1/4 de óleo de coco, adoçante, 1/2 xícara de nozes, canela, 1 colher de fermento, 1/2 de bicarbonato.'],
    modo_preparo: 'Misture tudo, fermento por último. Asse até firmar.',
  },
  {
    id: 'bolo-de-cenoura-com-calda-de-cacau',
    titulo: 'Bolo de Cenoura com Calda de Cacau',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-87',
    ingredientes: ['3 ovos, 2 cenouras, 1 xícara de açúcar mascavo, 1/2 de óleo de coco, 1 de aveia, 1 de farinha integral, 1 colher de fermento.'],
    modo_preparo: 'Bata tudo no liquidificador (menos o fermento), adicione o fermento. Asse e finalize com calda de cacau.',
  },
  {
    id: 'bolo-de-cenoura-mesclado-2',
    titulo: 'Bolo de Cenoura Mesclado',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-6',
    ingredientes: ['3 ovos, 1/2 xícara de óleo de coco, 1 de açúcar demerara, 2 de aveia, 2 cenouras, 2 colheres de chocolate em pó, 1 colher de fermento.'],
    modo_preparo: 'Prepare a massa base, separe metade e misture o chocolate. Mescle as massas na forma e asse.',
  },
  {
    id: 'bolo-de-chocolate-de-frigideira-2',
    titulo: 'Bolo de Chocolate de Frigideira',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-7',
    ingredientes: ['1 colher de cacau, 2 de farinha de aveia, 1 de óleo de coco, 1 ovo, 1 de xylitol, 1/2 colher de fermento.'],
    modo_preparo: 'Misture tudo e asse em frigideira tampada em fogo baixo até firmar.',
  },
  {
    id: 'bolo-de-limao-fit-2',
    titulo: 'Bolo de Limão Fit',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-8',
    ingredientes: ['3 ovos, 1/4 de óleo de coco, suco de 2 limões, 100ml de leite desnatado, 1 xícara de xylitol, 1 e 1/2 de farinha de aveia, 1 colher de fermento.'],
    modo_preparo: 'Bata tudo (menos o fermento) no liquidificador, incorpore o fermento e asse até dourar.',
  },
  {
    id: 'bolo-de-milho-com-coco-2',
    titulo: 'Bolo de Milho com Coco',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-9',
    ingredientes: ['3 ovos, 1 lata de milho, 200ml de leite de coco, 1 xícara de fubá, 1 de açúcar mascavo, 1/2 de farinha de arroz, 50g de coco ralado, 1 colher de fermento.'],
    modo_preparo: 'Bata tudo no liquidificador (menos o fermento), adicione o fermento e asse.',
  },
  {
    id: 'bolo-frape-de-coco-e-cacau-2',
    titulo: 'Bolo Frapê de Coco e Cacau',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-10',
    ingredientes: ['4 ovos, 200ml de leite de coco, 100g de manteiga, 1 xícara de farinha de coco, 2 colheres de cacau, adoçante, 1 colher de fermento.'],
    modo_preparo: 'Prepare a massa branca, separe metade e adicione cacau. Mescle e asse.',
  },
  {
    id: 'bolo-integral-de-banana-e-mel',
    titulo: 'Bolo Integral de Banana e Mel',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-4',
    ingredientes: ['2 ovos, 2 bananas, 1/4 de óleo de coco, 2 colheres de mel, baunilha, 1 xícara de farinha integral, 1/2 de aveia, 1 colher de fermento.'],
    modo_preparo: 'Bata os líquidos e a banana. Misture os secos. Asse até dourar.',
  },
  {
    id: 'bolo-integral-de-chocolate-e-chia-2',
    titulo: 'Bolo Integral de Chocolate e Chia',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-11',
    ingredientes: ['3 ovos, 1 xícara de açúcar mascavo, 1/2 de cacau, 1/2 de óleo de coco, 1/2 de água quente, 1 de aveia, 1 de farinha integral, 1 colher de chia, 1 colher de fermento.'],
    modo_preparo: 'Misture os ingredientes (chia e fermento por último). Asse até firmar.',
  },
  {
    id: 'bolo-integral-de-laranja-2',
    titulo: 'Bolo Integral de Laranja',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-12',
    ingredientes: ['1 laranja, 3 ovos, 1/2 xícara de óleo de coco, 1 de açúcar mascavo, 1 de aveia, 1 de farinha integral, 1 colher de fermento.'],
    modo_preparo: 'Bata os líquidos, misture com os secos e asse.',
  },
  {
    id: 'bolo-integral-de-maca-e-especiarias',
    titulo: 'Bolo Integral de Maçã e Especiarias',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-13',
    ingredientes: ['2 maçãs, 1/4 de óleo de coco, 2 ovos, 1/4 de açúcar de coco, 1/4 de mel, 1 xícara de farinha integral, 1/2 de aveia, passas, canela, gengibre, noz-moscada.'],
    modo_preparo: 'Rale uma maçã e misture com os líquidos. Envolva a outra maçã picada nas farinhas. Junte tudo e asse.',
  },
  {
    id: 'brownie-de-caneca-expresso-2',
    titulo: 'Brownie de Caneca Expresso',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-14',
    ingredientes: ['1 ovo, 1 colher de farinha de coco, 1 de linhaça, 1 de açúcar demerara, 1 de óleo de coco, 1 de cacau, 1 de pasta de amendoim, 1 quadradinho de chocolate.'],
    modo_preparo: 'Misture tudo em uma caneca e leve ao micro-ondas por 2 minutos.',
  },
  {
    id: 'cheesecake-de-framboesa-saudavel',
    titulo: 'Cheesecake de Framboesa Saudável',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-15',
    ingredientes: ['Base: 1 xícara de farinha de amêndoas, 2 colheres de mel. Creme: 200g de creme de ricota, 1 iogurte grego, 1/2 envelope de gelatina. Geleia: 1 xícara de framboesa, adoçante.'],
    modo_preparo: 'Faça a base e asse. Bata o creme e despeje sobre a base fria. Gele. Cubra com a geleia.',
  },
  {
    id: 'cuca-de-farofa-integral-2',
    titulo: 'Cuca de Farofa Integral',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-16',
    ingredientes: ['Massa: 1 xícara de farelo de aveia, 1/2 de leite desnatado, 1 ovo, adoçante, 1 colher de óleo de coco. Farofa: 2 colheres de pasta de amendoim, 2 de aveia, canela.'],
    modo_preparo: 'Despeje a massa na forma, cubra com a farofa e asse até dourar.',
  },
  {
    id: 'muffin-de-banana-classico-2',
    titulo: 'Muffin de Banana Clássico',
    categoria: 'bolos-sem-culpa',
    imagem: 'cake-76',
    ingredientes: ['1 banana amassada, 1 ovo, 3 colheres de aveia, canela, 1/2 colher de chá de fermento.'],
    modo_preparo: 'Amasse a banana, misture os outros ingredientes e asse em forminhas.',
  },
  {
    id: 'escondidinho-de-carne-moida-com-abobora',
    titulo: 'Escondidinho de Carne Moída com Abóbora',
    categoria: 'airfryer-proteica',
    imagem: 'airfryer-32',
    ingredientes: ['500g de carne moída', '400g de abóbora cabotiá cozida e amassada', '1 cebola picada', '2 dentes de alho picados', 'Sal, pimenta e cheiro-verde a gosto', 'Queijo parmesão ralado para gratinar'],
    modo_preparo: 'Refogue a carne moída com cebola e alho. Tempere e reserve. Em um refratário, coloque a carne e cubra com o purê de abóbora. Polvilhe queijo e leve à airfryer a 180°C por 15 minutos para gratinar.',
  }
];
