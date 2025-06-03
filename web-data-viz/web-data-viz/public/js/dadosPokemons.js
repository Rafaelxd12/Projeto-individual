const dados = {
    1: {
      nome: 'Bulbasaur',
      descricao: 'É um Pokémon do tipo Planta/Veneno.',
      curiosidade: 'Ele nasce com uma semente nas costas!',
      imagem: './assets/arts/1.png'
    },
    2: {
    nome: 'Ivysaur',
    descricao: 'É um Pokémon do tipo Planta/Veneno.',
    curiosidade: 'A semente em suas costas cresce à medida que ele evolui.',
    imagem: './assets/arts/2.png'
    },
    3: {
      nome: 'Venusaur',
      descricao: 'É um Pokémon do tipo Planta/Veneno.',
      curiosidade: 'A flor nas costas floresce sob o sol intenso, liberando um aroma forte.',
      imagem: './assets/arts/3.png'
    },
    4: {
      nome: 'Charmander',
      descricao: 'É um Pokémon do tipo Fogo.',
      curiosidade: 'Sua chama na cauda indica sua vitalidade!',
      imagem: './assets/arts/4.png'
    },
    5: {
      nome: 'Charmeleon',
      descricao: 'É um Pokémon do tipo Fogo.',
      curiosidade: 'Seu temperamento é agressivo e sua cauda brilha intensamente ao lutar.',
      imagem: './assets/arts/5.png'
    },
    6: {
      nome: 'Charizard',
      descricao: 'É um Pokémon dos tipos Fogo/Voador.',
      curiosidade: 'Não cospe fogo em oponentes mais fracos; é muito orgulhoso.',
      imagem: './assets/arts/6.png'
    },
    7: {
      nome: 'Squirtle',
      descricao: 'É um Pokémon do tipo Água.',
      curiosidade: 'Recolhe-se em sua concha para se proteger de ataques.',
      imagem: './assets/arts/7.png'
    },
    8: {
      nome: 'Wartortle',
      descricao: 'É um Pokémon do tipo Água.',
      curiosidade: 'Suas caudas peludas são símbolo de longevidade.',
      imagem: './assets/arts/8.png'
    },
    9: {
      nome: 'Blastoise',
      descricao: 'É um Pokémon do tipo Água.',
      curiosidade: 'Possui canhões d’água que disparam com força suficiente para perfurar aço.',
      imagem: './assets/arts/9.png'
    },
    10: {
      nome: 'Caterpie',
      descricao: 'É um Pokémon do tipo Inseto.',
      curiosidade: 'Seu cheiro forte serve para afugentar predadores.',
      imagem: './assets/arts/10.png'
    },
    11: {
      nome: 'Metapod',
      descricao: 'É um Pokémon do tipo Inseto.',
      curiosidade: 'Quase não se move, apenas endurece sua casca enquanto se prepara para evoluir.',
      imagem: './assets/arts/11.png'
    },
    12: {
      nome: 'Butterfree',
      descricao: 'É um Pokémon dos tipos Inseto/Voador.',
      curiosidade: 'Suas asas são cobertas por pós que causam sono e paralisia.',
      imagem: './assets/arts/12.png'
    },
    13: {
      nome: 'Weedle',
      descricao: 'É um Pokémon dos tipos Inseto/Veneno.',
      curiosidade: 'Tem um ferrão venenoso em sua cabeça para se proteger.',
      imagem: './assets/arts/13.png'
    },
    14: {
      nome: 'Kakuna',
      descricao: 'É um Pokémon dos tipos Inseto/Veneno.',
      curiosidade: 'Apesar de imóvel, ainda pode usar seu ferrão em emergências.',
      imagem: './assets/arts/14.png'
    },
    15: {
      nome: 'Beedrill',
      descricao: 'É um Pokémon dos tipos Inseto/Veneno.',
      curiosidade: 'É extremamente territorial e ataca em bando.',
      imagem: './assets/arts/15.png'
    },
    16: {
      nome: 'Pidgey',
      descricao: 'É um Pokémon dos tipos Normal/Voador.',
      curiosidade: 'Usa rajadas de areia para confundir inimigos.',
      imagem: './assets/arts/16.png'
    },
    17: {
      nome: 'Pidgeotto',
      descricao: 'É um Pokémon dos tipos Normal/Voador.',
      curiosidade: 'É altamente territorial e defende seu ninho com bravura.',
      imagem: './assets/arts/17.png'
    },
    18: {
      nome: 'Pidgeot',
      descricao: 'É um Pokémon dos tipos Normal/Voador.',
      curiosidade: 'Pode voar a velocidades incríveis para capturar presas.',
      imagem: './assets/arts/18.png'
    },
    19: {
      nome: 'Rattata',
      descricao: 'É um Pokémon do tipo Normal.',
      curiosidade: 'Se multiplica rapidamente e pode ser encontrado em qualquer lugar.',
      imagem: './assets/arts/19.png'
    },
    20: {
      nome: 'Raticate',
      descricao: 'É um Pokémon do tipo Normal.',
      curiosidade: 'Seus dentes crescem continuamente e roem qualquer coisa.',
      imagem: './assets/arts/20.png'
    },
    21: {
    nome: 'Spearow',
    descricao: 'É um Pokémon dos tipos Normal/Voador.',
    curiosidade: 'Tem um grito estridente que pode ser ouvido de longe.',
    imagem: './assets/arts/21.png'
    },
    22: {
      nome: 'Fearow',
      descricao: 'É um Pokémon dos tipos Normal/Voador.',
      curiosidade: 'Tem grande resistência e pode voar por um dia inteiro.',
      imagem: './assets/arts/22.png'
    },
    23: {
      nome: 'Ekans',
      descricao: 'É um Pokémon do tipo Veneno.',
      curiosidade: 'Consegue se alongar para engolir ovos inteiros.',
      imagem: './assets/arts/23.png'
    },
    24: {
      nome: 'Arbok',
      descricao: 'É um Pokémon do tipo Veneno.',
      curiosidade: 'O padrão em seu peito assusta os inimigos.',
      imagem: './assets/arts/24.png'
    },
    25: {
      nome: 'Pikachu',
      descricao: 'É um Pokémon do tipo Elétrico.',
      curiosidade: 'Suas bochechas armazenam eletricidade.',
      imagem: './assets/arts/25.png'
    },
    26: {
      nome: 'Raichu',
      descricao: 'É um Pokémon do tipo Elétrico.',
      curiosidade: 'Seu corpo libera eletricidade de alta voltagem.',
      imagem: './assets/arts/26.png'
    },
    27: {
      nome: 'Sandshrew',
      descricao: 'É um Pokémon do tipo Terrestre.',
      curiosidade: 'Enrola-se como uma bola para se proteger.',
      imagem: './assets/arts/27.png'
    },
    28: {
      nome: 'Sandslash',
      descricao: 'É um Pokémon do tipo Terrestre.',
      curiosidade: 'Usa suas garras para escavar e se defender.',
      imagem: './assets/arts/28.png'
    },
    29: {
      nome: 'Nidoran♀',
      descricao: 'É um Pokémon do tipo Veneno.',
      curiosidade: 'Possui pequenos espinhos venenosos por todo o corpo.',
      imagem: './assets/arts/29.png'
    },
    30: {
      nome: 'Nidorina',
      descricao: 'É um Pokémon do tipo Veneno.',
      curiosidade: 'Fica agressiva para proteger seus filhotes.',
      imagem: './assets/arts/30.png'
    },
    31: {
      nome: 'Nidoqueen',
      descricao: 'É um Pokémon dos tipos Veneno/Terrestre.',
      curiosidade: 'Seu corpo resistente protege seus parceiros.',
      imagem: './assets/arts/31.png'
    },
    32: {
      nome: 'Nidoran♂',
      descricao: 'É um Pokémon do tipo Veneno.',
      curiosidade: 'Tem grandes orelhas para detectar ameaças.',
      imagem: './assets/arts/32.png'
    },
    33: {
      nome: 'Nidorino',
      descricao: 'É um Pokémon do tipo Veneno.',
      curiosidade: 'Ataca com seu chifre venenoso quando provocado.',
      imagem: './assets/arts/33.png'
    },
    34: {
      nome: 'Nidoking',
      descricao: 'É um Pokémon dos tipos Veneno/Terrestre.',
      curiosidade: 'Sua cauda pode derrubar prédios pequenos.',
      imagem: './assets/arts/34.png'
    },
    35: {
      nome: 'Clefairy',
      descricao: 'É um Pokémon do tipo Fada.',
      curiosidade: 'Dizem que aparece à noite para dançar sob a lua.',
      imagem: './assets/arts/35.png'
    },
    36: {
      nome: 'Clefable',
      descricao: 'É um Pokémon do tipo Fada.',
      curiosidade: 'Tem uma audição tão sensível que ouve cair uma agulha a 1 km.',
      imagem: './assets/arts/36.png'
    },
    37: {
      nome: 'Vulpix',
      descricao: 'É um Pokémon do tipo Fogo.',
      curiosidade: 'Nasce com uma única cauda que se divide com o tempo.',
      imagem: './assets/arts/37.png'
    },
    38: {
      nome: 'Ninetales',
      descricao: 'É um Pokémon do tipo Fogo.',
      curiosidade: 'Dizem que vive mil anos e guarda rancor eterno.',
      imagem: './assets/arts/38.png'
    },
    39: {
      nome: 'Jigglypuff',
      descricao: 'É um Pokémon do tipo Fada.',
      curiosidade: 'Canta uma canção que faz todos dormirem.',
      imagem: './assets/arts/39.png'
    },
    40: {
      nome: 'Wigglytuff',
      descricao: 'É um Pokémon do tipo Fada.',
      curiosidade: 'Seu corpo é tão macio que afunda ao toque.',
      imagem: './assets/arts/40.png'
    },
    41: {
      nome: 'Zubat',
      descricao: 'É um Pokémon dos tipos Veneno/Voador.',
      curiosidade: 'Não possui olhos e se guia por ecolocalização.',
      imagem: './assets/arts/41.png'
    },
    42: {
      nome: 'Golbat',
      descricao: 'É um Pokémon dos tipos Veneno/Voador.',
      curiosidade: 'Chupa o sangue de suas vítimas com suas presas.',
      imagem: './assets/arts/42.png'
    },
    43: {
      nome: 'Oddish',
      descricao: 'É um Pokémon dos tipos Planta/Veneno.',
      curiosidade: 'Enterra-se no solo à noite para absorver nutrientes.',
      imagem: './assets/arts/43.png'
    },
    44: {
      nome: 'Gloom',
      descricao: 'É um Pokémon dos tipos Planta/Veneno.',
      curiosidade: 'Exala um cheiro forte que pode fazer desmaiar.',
      imagem: './assets/arts/44.png'
    },
    45: {
      nome: 'Vileplume',
      descricao: 'É um Pokémon dos tipos Planta/Veneno.',
      curiosidade: 'Tem os maiores pólens do mundo Pokémon.',
      imagem: './assets/arts/45.png'
    },
    46: {
      nome: 'Paras',
      descricao: 'É um Pokémon dos tipos Inseto/Planta.',
      curiosidade: 'Cogumelos em suas costas crescem com o tempo.',
      imagem: './assets/arts/46.png'
    },
    47: {
      nome: 'Parasect',
      descricao: 'É um Pokémon dos tipos Inseto/Planta.',
      curiosidade: 'O cogumelo controla o corpo de Parasect.',
      imagem: './assets/arts/47.png'
    },
    48: {
      nome: 'Venonat',
      descricao: 'É um Pokémon dos tipos Inseto/Veneno.',
      curiosidade: 'Seus olhos compõem-se de vários pequenos sensores.',
      imagem: './assets/arts/48.png'
    },
    49: {
      nome: 'Venomoth',
      descricao: 'É um Pokémon dos tipos Inseto/Veneno.',
      curiosidade: 'As asas brilham e liberam pó venenoso.',
      imagem: './assets/arts/49.png'
    },
    50: {
      nome: 'Diglett',
      descricao: 'É um Pokémon do tipo Terrestre.',
      curiosidade: 'Ninguém sabe como é a parte inferior do seu corpo.',
      imagem: './assets/arts/50.png'
    },
    51: {
      nome: 'Dugtrio',
      descricao: 'É um Pokémon do tipo Terrestre.',
      curiosidade: 'Aparece em trio e cava túneis velozmente.',
      imagem: './assets/arts/51.png'
    },
    52: {
      nome: 'Meowth',
      descricao: 'É um Pokémon do tipo Normal.',
      curiosidade: 'Adora coisas brilhantes e moedas.',
      imagem: './assets/arts/52.png'
    },
    53: {
      nome: 'Persian',
      descricao: 'É um Pokémon do tipo Normal.',
      curiosidade: 'Elegante, mas cruel, usa suas garras silenciosamente.',
      imagem: './assets/arts/53.png'
    },
    54: {
      nome: 'Psyduck',
      descricao: 'É um Pokémon do tipo Água.',
      curiosidade: 'Sofre de dores de cabeça que liberam poderes psíquicos.',
      imagem: './assets/arts/54.png'
    },
    55: {
      nome: 'Golduck',
      descricao: 'É um Pokémon do tipo Água.',
      curiosidade: 'Nada mais rápido que qualquer nadador humano.',
      imagem: './assets/arts/55.png'
    },
    56: {
      nome: 'Mankey',
      descricao: 'É um Pokémon do tipo Lutador.',
      curiosidade: 'Fica furioso por qualquer motivo.',
      imagem: './assets/arts/56.png'
    },
    57: {
      nome: 'Primeape',
      descricao: 'É um Pokémon do tipo Lutador.',
      curiosidade: 'Tão bravo que pode até morrer de raiva.',
      imagem: './assets/arts/57.png'
    },
    58: {
      nome: 'Growlithe',
      descricao: 'É um Pokémon do tipo Fogo.',
      curiosidade: 'Extremamente fiel a seu treinador.',
      imagem: './assets/arts/58.png'
    },
    59: {
      nome: 'Arcanine',
      descricao: 'É um Pokémon do tipo Fogo.',
      curiosidade: 'Corajoso e majestoso como uma lenda.',
      imagem: './assets/arts/59.png'
    },
    60: {
      nome: 'Poliwag',
      descricao: 'É um Pokémon do tipo Água.',
      curiosidade: 'Sua pele é tão fina que dá pra ver seus órgãos.',
      imagem: './assets/arts/60.png'
    },
    61: {
      nome: 'Poliwhirl',
      descricao: 'É um Pokémon do tipo Água.',
      curiosidade: 'Seu espiral no abdômen hipnotiza os inimigos.',
      imagem: './assets/arts/61.png'
    },
    62: {
      nome: 'Poliwrath',
      descricao: 'É um Pokémon dos tipos Água/Lutador.',
      curiosidade: 'É muito musculoso e tem grande resistência.',
      imagem: './assets/arts/62.png'
    },
    63: {
      nome: 'Abra',
      descricao: 'É um Pokémon do tipo Psíquico.',
      curiosidade: 'Dorme 18 horas por dia e se teleporta inconscientemente.',
      imagem: './assets/arts/63.png'
    },
    64: {
      nome: 'Kadabra',
      descricao: 'É um Pokémon do tipo Psíquico.',
      curiosidade: 'O surgimento de Kadabra está ligado a energias estranhas.',
      imagem: './assets/arts/64.png'
    },
    65: {
      nome: 'Alakazam',
      descricao: 'É um Pokémon do tipo Psíquico.',
      curiosidade: 'Seu cérebro é tão poderoso que suas colheres entortam sozinhas.',
      imagem: './assets/arts/65.png'
    },
    66: {
      nome: 'Machop',
      descricao: 'É um Pokémon do tipo Lutador.',
      curiosidade: 'Treina constantemente para aumentar seus músculos.',
      imagem: './assets/arts/66.png'
    },
    67: {
      nome: 'Machoke',
      descricao: 'É um Pokémon do tipo Lutador.',
      curiosidade: 'Usa um cinto para conter seu imenso poder.',
      imagem: './assets/arts/67.png'
    },
    68: {
      nome: 'Machamp',
      descricao: 'É um Pokémon do tipo Lutador.',
      curiosidade: 'Com seus quatro braços, realiza mil golpes por segundo.',
      imagem: './assets/arts/68.png'
    },
    69: {
      nome: 'Bellsprout',
      descricao: 'É um Pokémon dos tipos Planta/Veneno.',
      curiosidade: 'Seu corpo fino balança com o vento.',
      imagem: './assets/arts/69.png'
    },
    70: {
      nome: 'Weepinbell',
      descricao: 'É um Pokémon dos tipos Planta/Veneno.',
      curiosidade: 'Cospe veneno ácido para dissolver presas.',
      imagem: './assets/arts/70.png'
    },
    71: {
    nome: 'Victreebel',
    descricao: 'É um Pokémon dos tipos Planta/Veneno.',
    curiosidade: 'Atrai presas com seu doce aroma antes de digeri-las.',
    imagem: './assets/arts/71.png'
    },
    72: {
      nome: 'Tentacool',
      descricao: 'É um Pokémon dos tipos Água/Veneno.',
      curiosidade: 'Seus tentáculos podem se regenerar se cortados.',
      imagem: './assets/arts/72.png'
    },
    73: {
      nome: 'Tentacruel',
      descricao: 'É um Pokémon dos tipos Água/Veneno.',
      curiosidade: 'Pode controlar seus tentáculos para capturar múltiplas presas.',
      imagem: './assets/arts/73.png'
    },
    74: {
      nome: 'Geodude',
      descricao: 'É um Pokémon dos tipos Rocha/Terrestre.',
      curiosidade: 'Gosta de se esconder entre as pedras.',
      imagem: './assets/arts/74.png'
    },
    75: {
      nome: 'Graveler',
      descricao: 'É um Pokémon dos tipos Rocha/Terrestre.',
      curiosidade: 'Rola montanha abaixo para se mover rapidamente.',
      imagem: './assets/arts/75.png'
    },
    76: {
      nome: 'Golem',
      descricao: 'É um Pokémon dos tipos Rocha/Terrestre.',
      curiosidade: 'Seu corpo é tão duro que pode resistir a explosões.',
      imagem: './assets/arts/76.png'
    },
    77: {
      nome: 'Ponyta',
      descricao: 'É um Pokémon do tipo Fogo.',
      curiosidade: 'Consegue saltar edifícios quando bem treinado.',
      imagem: './assets/arts/77.png'
    },
    78: {
      nome: 'Rapidash',
      descricao: 'É um Pokémon do tipo Fogo.',
      curiosidade: 'Corre mais rápido que a maioria dos carros.',
      imagem: './assets/arts/78.png'
    },
    79: {
      nome: 'Slowpoke',
      descricao: 'É um Pokémon dos tipos Água/Psíquico.',
      curiosidade: 'Tão lento que nem sente quando é mordido.',
      imagem: './assets/arts/79.png'
    },
    80: {
      nome: 'Slowbro',
      descricao: 'É um Pokémon dos tipos Água/Psíquico.',
      curiosidade: 'Ganhou inteligência ao ser mordido por um Shellder.',
      imagem: './assets/arts/80.png'
    },
    81: {
      nome: 'Magnemite',
      descricao: 'É um Pokémon do tipo Elétrico.',
      curiosidade: 'Fica flutuando graças ao magnetismo.',
      imagem: './assets/arts/81.png'
    },
    82: {
      nome: 'Magneton',
      descricao: 'É um Pokémon do tipo Elétrico.',
      curiosidade: 'É a junção de três Magnemites.',
      imagem: './assets/arts/82.png'
    },
    83: {
      nome: 'Farfetch’d',
      descricao: 'É um Pokémon dos tipos Normal/Voador.',
      curiosidade: 'Sempre carrega um alho-poró como arma.',
      imagem: './assets/arts/83.png'
    },
    84: {
      nome: 'Doduo',
      descricao: 'É um Pokémon dos tipos Normal/Voador.',
      curiosidade: 'Suas cabeças pensam independentemente.',
      imagem: './assets/arts/84.png'
    },
    85: {
      nome: 'Dodrio',
      descricao: 'É um Pokémon dos tipos Normal/Voador.',
      curiosidade: 'Cada cabeça representa uma emoção diferente.',
      imagem: './assets/arts/85.png'
    },
    86: {
      nome: 'Seel',
      descricao: 'É um Pokémon do tipo Água.',
      curiosidade: 'Ama nadar em águas geladas.',
      imagem: './assets/arts/86.png'
    },
    87: {
      nome: 'Dewgong',
      descricao: 'É um Pokémon dos tipos Água/Gelo.',
      curiosidade: 'Dormir no gelo ajuda a recarregar sua energia.',
      imagem: './assets/arts/87.png'
    },
    88: {
      nome: 'Grimer',
      descricao: 'É um Pokémon do tipo Veneno.',
      curiosidade: 'Forma-se a partir de lodo poluído.',
      imagem: './assets/arts/88.png'
    },
    89: {
      nome: 'Muk',
      descricao: 'É um Pokémon do tipo Veneno.',
      curiosidade: 'Seu corpo emana um cheiro terrível.',
      imagem: './assets/arts/89.png'
    },
    90: {
      nome: 'Shellder',
      descricao: 'É um Pokémon do tipo Água.',
      curiosidade: 'Pode fechar sua concha com força extrema.',
      imagem: './assets/arts/90.png'
    },
    91: {
      nome: 'Cloyster',
      descricao: 'É um Pokémon dos tipos Água/Gelo.',
      curiosidade: 'Sua concha é praticamente impenetrável.',
      imagem: './assets/arts/91.png'
    },
    92: {
      nome: 'Gastly',
      descricao: 'É um Pokémon dos tipos Fantasma/Veneno.',
      curiosidade: 'Seu corpo é feito de gás venenoso.',
      imagem: './assets/arts/92.png'
    },
    93: {
      nome: 'Haunter',
      descricao: 'É um Pokémon dos tipos Fantasma/Veneno.',
      curiosidade: 'Adora assustar os outros com sua língua longa.',
      imagem: './assets/arts/93.png'
    },
    94: {
      nome: 'Gengar',
      descricao: 'É um Pokémon dos tipos Fantasma/Veneno.',
      curiosidade: 'Pode se esconder na sombra de pessoas.',
      imagem: './assets/arts/94.png'
    },
    95: {
      nome: 'Onix',
      descricao: 'É um Pokémon dos tipos Rocha/Terrestre.',
      curiosidade: 'Seu corpo é composto por enormes pedras.',
      imagem: './assets/arts/95.png'
    },
    96: {
      nome: 'Drowzee',
      descricao: 'É um Pokémon do tipo Psíquico.',
      curiosidade: 'Alimenta-se dos sonhos das pessoas.',
      imagem: './assets/arts/96.png'
    },
    97: {
      nome: 'Hypno',
      descricao: 'É um Pokémon do tipo Psíquico.',
      curiosidade: 'Usa seu pêndulo para hipnotizar suas vítimas.',
      imagem: './assets/arts/97.png'
    },
    98: {
      nome: 'Krabby',
      descricao: 'É um Pokémon do tipo Água.',
      curiosidade: 'Usa suas pinças para se defender e cavar buracos.',
      imagem: './assets/arts/98.png'
    },
    99: {
      nome: 'Kingler',
      descricao: 'É um Pokémon do tipo Água.',
      curiosidade: 'Sua pinça é tão grande que mal consegue levantar.',
      imagem: './assets/arts/99.png'
    },
    100: {
      nome: 'Voltorb',
      descricao: 'É um Pokémon do tipo Elétrico.',
      curiosidade: 'Parece uma Pokébola, o que causa confusão.',
      imagem: './assets/arts/100.png'
    },
    101: {
    nome: 'Electrode',
    descricao: 'É um Pokémon do tipo Elétrico.',
    curiosidade: 'Explode com facilidade quando agitado.',
    imagem: './assets/arts/101.png'
    },
    102: {
      nome: 'Exeggcute',
      descricao: 'É um Pokémon dos tipos Planta/Psíquico.',
      curiosidade: 'Na verdade, é um grupo de sementes, não ovos.',
      imagem: './assets/arts/102.png'
    },
    103: {
      nome: 'Exeggutor',
      descricao: 'É um Pokémon dos tipos Planta/Psíquico.',
      curiosidade: 'Cada cabeça pensa de forma independente.',
      imagem: './assets/arts/103.png'
    },
    104: {
      nome: 'Cubone',
      descricao: 'É um Pokémon do tipo Terrestre.',
      curiosidade: 'Usa o crânio da mãe falecida como capacete.',
      imagem: './assets/arts/104.png'
    },
    105: {
      nome: 'Marowak',
      descricao: 'É um Pokémon do tipo Terrestre.',
      curiosidade: 'Supera sua dor e se torna um guerreiro firme.',
      imagem: './assets/arts/105.png'
    },
    106: {
      nome: 'Hitmonlee',
      descricao: 'É um Pokémon do tipo Lutador.',
      curiosidade: 'Especialista em chutes; suas pernas se esticam muito.',
      imagem: './assets/arts/106.png'
    },
    107: {
      nome: 'Hitmonchan',
      descricao: 'É um Pokémon do tipo Lutador.',
      curiosidade: 'É famoso por seus socos rápidos e variados.',
      imagem: './assets/arts/107.png'
    },
    108: {
      nome: 'Lickitung',
      descricao: 'É um Pokémon do tipo Normal.',
      curiosidade: 'Sua língua é duas vezes maior que seu corpo.',
      imagem: './assets/arts/108.png'
    },
    109: {
      nome: 'Koffing',
      descricao: 'É um Pokémon do tipo Veneno.',
      curiosidade: 'Flutua e libera gases tóxicos constantemente.',
      imagem: './assets/arts/109.png'
    },
    110: {
      nome: 'Weezing',
      descricao: 'É um Pokémon do tipo Veneno.',
      curiosidade: 'Dois Koffings se fundem sob pressão tóxica.',
      imagem: './assets/arts/110.png'
    },
    111: {
      nome: 'Rhyhorn',
      descricao: 'É um Pokémon dos tipos Terra/Rocha.',
      curiosidade: 'Corre em linha reta e não muda de direção facilmente.',
      imagem: './assets/arts/111.png'
    },
    112: {
      nome: 'Rhydon',
      descricao: 'É um Pokémon dos tipos Terra/Rocha.',
      curiosidade: 'Seu chifre pode perfurar até diamantes.',
      imagem: './assets/arts/112.png'
    },
    113: {
      nome: 'Chansey',
      descricao: 'É um Pokémon do tipo Normal.',
      curiosidade: 'Seu ovo é altamente nutritivo e curativo.',
      imagem: './assets/arts/113.png'
    },
    114: {
      nome: 'Tangela',
      descricao: 'É um Pokémon do tipo Planta.',
      curiosidade: 'Seu corpo real está escondido sob os cipós.',
      imagem: './assets/arts/114.png'
    },
    115: {
      nome: 'Kangaskhan',
      descricao: 'É um Pokémon do tipo Normal.',
      curiosidade: 'A fêmea carrega o filhote na bolsa abdominal.',
      imagem: './assets/arts/115.png'
    },
    116: {
      nome: 'Horsea',
      descricao: 'É um Pokémon do tipo Água.',
      curiosidade: 'Nada de forma habilidosa e cospe tinta para escapar.',
      imagem: './assets/arts/116.png'
    },
    117: {
      nome: 'Seadra',
      descricao: 'É um Pokémon do tipo Água.',
      curiosidade: 'Suas nadadeiras vibram rapidamente para fugir de predadores.',
      imagem: './assets/arts/117.png'
    },
    118: {
      nome: 'Goldeen',
      descricao: 'É um Pokémon do tipo Água.',
      curiosidade: 'Nada graciosamente e é chamado de "rainha das águas".',
      imagem: './assets/arts/118.png'
    },
    119: {
      nome: 'Seaking',
      descricao: 'É um Pokémon do tipo Água.',
      curiosidade: 'Usa seu chifre para escavar pedras subaquáticas.',
      imagem: './assets/arts/119.png'
    },
    120: {
      nome: 'Staryu',
      descricao: 'É um Pokémon do tipo Água.',
      curiosidade: 'Regenera seus membros se forem cortados.',
      imagem: './assets/arts/120.png'
    },
    121: {
      nome: 'Starmie',
      descricao: 'É um Pokémon dos tipos Água/Psíquico.',
      curiosidade: 'Seu núcleo brilha em sete cores diferentes.',
      imagem: './assets/arts/121.png'
    },
    122: {
      nome: 'Mr. Mime',
      descricao: 'É um Pokémon dos tipos Psíquico/Fada.',
      curiosidade: 'Cria barreiras invisíveis com seus gestos.',
      imagem: './assets/arts/122.png'
    },
    123: {
      nome: 'Scyther',
      descricao: 'É um Pokémon dos tipos Inseto/Voador.',
      curiosidade: 'Suas lâminas são afiadas como espadas.',
      imagem: './assets/arts/123.png'
    },
    124: {
      nome: 'Jynx',
      descricao: 'É um Pokémon dos tipos Gelo/Psíquico.',
      curiosidade: 'Comunica-se por meio de danças.',
      imagem: './assets/arts/124.png'
    },
    125: {
      nome: 'Electabuzz',
      descricao: 'É um Pokémon do tipo Elétrico.',
      curiosidade: 'Atrai raios durante tempestades.',
      imagem: './assets/arts/125.png'
    },
    126: {
      nome: 'Magmar',
      descricao: 'É um Pokémon do tipo Fogo.',
      curiosidade: 'Seu corpo exala calor como uma fornalha.',
      imagem: './assets/arts/126.png'
    },
    127: {
      nome: 'Pinsir',
      descricao: 'É um Pokémon do tipo Inseto.',
      curiosidade: 'Usa suas pinças para esmagar inimigos.',
      imagem: './assets/arts/127.png'
    },
    128: {
      nome: 'Tauros',
      descricao: 'É um Pokémon do tipo Normal.',
      curiosidade: 'Ataca investindo com seus três rabos girando.',
      imagem: './assets/arts/128.png'
    },
    129: {
      nome: 'Magikarp',
      descricao: 'É um Pokémon do tipo Água.',
      curiosidade: 'É conhecido por sua fraqueza, mas salta alto.',
      imagem: './assets/arts/129.png'
    },
    130: {
      nome: 'Gyarados',
      descricao: 'É um Pokémon dos tipos Água/Voador.',
      curiosidade: 'Sua fúria é destrutiva e incontrolável.',
      imagem: './assets/arts/130.png'
    },
    131: {
      nome: 'Lapras',
      descricao: 'É um Pokémon dos tipos Água/Gelo.',
      curiosidade: 'É gentil e gosta de transportar pessoas.',
      imagem: './assets/arts/131.png'
    },
    132: {
      nome: 'Ditto',
      descricao: 'É um Pokémon do tipo Normal.',
      curiosidade: 'Pode se transformar em qualquer coisa.',
      imagem: './assets/arts/132.png'
    },
    133: {
      nome: 'Eevee',
      descricao: 'É um Pokémon do tipo Normal.',
      curiosidade: 'Pode evoluir para várias formas diferentes.',
      imagem: './assets/arts/133.png'
    },
    134: {
      nome: 'Vaporeon',
      descricao: 'É um Pokémon do tipo Água.',
      curiosidade: 'Seu corpo pode se dissolver na água.',
      imagem: './assets/arts/134.png'
    },
    135: {
      nome: 'Jolteon',
      descricao: 'É um Pokémon do tipo Elétrico.',
      curiosidade: 'Seu corpo solta agulhas elétricas quando irritado.',
      imagem: './assets/arts/135.png'
    },
    136: {
      nome: 'Flareon',
      descricao: 'É um Pokémon do tipo Fogo.',
      curiosidade: 'Armazena calor em seu corpo peludo.',
      imagem: './assets/arts/136.png'
    },
    137: {
      nome: 'Porygon',
      descricao: 'É um Pokémon do tipo Normal.',
      curiosidade: 'Foi inteiramente criado por programação.',
      imagem: './assets/arts/137.png'
    },
    138: {
      nome: 'Omanyte',
      descricao: 'É um Pokémon dos tipos Rocha/Água.',
      curiosidade: 'É um fóssil que foi revivido em laboratório.',
      imagem: './assets/arts/138.png'
    },
    139: {
      nome: 'Omastar',
      descricao: 'É um Pokémon dos tipos Rocha/Água.',
      curiosidade: 'Usa seus tentáculos para capturar presas.',
      imagem: './assets/arts/139.png'
    },
    140: {
      nome: 'Kabuto',
      descricao: 'É um Pokémon dos tipos Rocha/Água.',
      curiosidade: 'Fóssil antigo que ainda possui células vivas.',
      imagem: './assets/arts/140.png'
    },
    141: {
      nome: 'Kabutops',
      descricao: 'É um Pokémon dos tipos Rocha/Água.',
      curiosidade: 'Seus braços afiados são armas letais.',
      imagem: './assets/arts/141.png'
    },
    142: {
      nome: 'Aerodactyl',
      descricao: 'É um Pokémon dos tipos Rocha/Voador.',
      curiosidade: 'Um predador antigo com mandíbulas ferozes.',
      imagem: './assets/arts/142.png'
    },
    143: {
      nome: 'Snorlax',
      descricao: 'É um Pokémon do tipo Normal.',
      curiosidade: 'Passa a maior parte do tempo dormindo e comendo.',
      imagem: './assets/arts/143.png'
    },
    144: {
      nome: 'Articuno',
      descricao: 'É um Pokémon dos tipos Gelo/Voador.',
      curiosidade: 'Diz-se que aparece quando neva.',
      imagem: './assets/arts/144.png'
    },
    145: {
      nome: 'Zapdos',
      descricao: 'É um Pokémon dos tipos Elétrico/Voador.',
      curiosidade: 'Voa entre nuvens de tempestade.',
      imagem: './assets/arts/145.png'
    },
    146: {
      nome: 'Moltres',
      descricao: 'É um Pokémon dos tipos Fogo/Voador.',
      curiosidade: 'Aparece no início da primavera.',
      imagem: './assets/arts/146.png'
    },
    147: {
      nome: 'Dratini',
      descricao: 'É um Pokémon do tipo Dragão.',
      curiosidade: 'Troca de pele constantemente.',
      imagem: './assets/arts/147.png'
    },
    148: {
      nome: 'Dragonair',
      descricao: 'É um Pokémon do tipo Dragão.',
      curiosidade: 'Pode controlar o clima com sua energia.',
      imagem: './assets/arts/148.png'
    },
    149: {
      nome: 'Dragonite',
      descricao: 'É um Pokémon dos tipos Dragão/Voador.',
      curiosidade: 'É poderoso e gentil, ajuda humanos no mar.',
      imagem: './assets/arts/149.png'
    },
    150: {
      nome: 'Mewtwo',
      descricao: 'É um Pokémon do tipo Psíquico.',
      curiosidade: 'Criado geneticamente para ser o mais forte.',
      imagem: './assets/arts/150.png'
    },
    151: {
      nome: 'Mew',
      descricao: 'É um Pokémon do tipo Psíquico.',
      curiosidade: 'Contém o DNA de todos os Pokémon.',
      imagem: './assets/arts/151.png'
    }
  
  };