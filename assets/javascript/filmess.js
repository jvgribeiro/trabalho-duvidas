var iframe = document.getElementById("meuIframe");

// Alterar o src, por exemplo:
if (id == 1) {
  iframe.src = "https://www.youtube.com/embed/K70MooI8vBE";
} else if (id == 2) {
  iframe.src = "https://www.youtube.com/embed/zaPcin5knJk";
} else if (id == 3) {
  iframe.src = "https://www.youtube.com/embed/9KZyUQpihsE";
} else if (id == 4) {
  iframe.src = "https://www.youtube.com/embed/BydjQP2aFd0";
} else if (id == 5) {
  iframe.src = "https://www.youtube.com/embed/R991B2-W4uo";
} else if (id == 6) {
  iframe.src = "https://www.youtube.com/embed/4e414vW9gFs";
} else if (id == 7) {
  iframe.src = "https://www.youtube.com/embed/F3OxA9Cz17A";
} else if (id == 8) {
  iframe.src = "https://www.youtube.com/embed/FU_bAopCcSE";
} else if (id == 9) {
  iframe.src = "https://www.youtube.com/embed/-YHVFM_8a-s";
} else if (id == 10) {
  iframe.src = "https://www.youtube.com/embed/_4is7I_ZxTg";
} else if (id == 11) {
  iframe.src = "https://www.youtube.com/embed/HBsM5-G-Wco";
} else if (id == 12) {
  iframe.src = "https://www.youtube.com/embed/4cajBzu_N-g";
}

// Ou mudar o tamanho:
iframe.width = "560";
iframe.height = "350";

const filme = [
  {
    id: 1,
    titulo: "Tudo que você precisa saber sobre o filme: A libertação (2024)",
    imagem: "assets/fotos-filmes/foto-a-libertacao.webp",
    sinopse: "Sinópse de A Libertação (2024):",
    p_sinopse: `Nem tudo que te liberta... te salva.
    Em um futuro não tão distante, o mundo vive sob a ilusão de ordem. Após a queda das grandes potências e o surgimento de uma nova coalizão mundial conhecida apenas como A Aliança, a humanidade acreditava finalmente ter alcançado a paz. Mas por trás dos uniformes impecáveis e das promessas de segurança, existe uma verdade aterradora — e há quem esteja disposto a revelá-la.
    Eva Dray, uma ex-agente da inteligência mundial, é trazida de volta à ativa após anos de reclusão. A missão: investigar uma série de apagões globais que estão afetando as mentes das pessoas — memórias sendo apagadas, personalidades substituídas, consciências sendo reprogramadas como se a identidade humana fosse apenas um software a ser reescrito. O que começa como uma investigação tecnológica rapidamente mergulha no terror psicológico, em experimentos clandestinos de manipulação mental, inteligência artificial autoconsciente e cultos secretos infiltrados nas mais altas esferas de poder.
    Enquanto Eva tenta decifrar os sinais, ela é atormentada por visões do passado e por vozes que insistem em sussurrar uma mensagem: Você não foi libertada... você foi ativada.
    De fábricas abandonadas no deserto até laboratórios submersos sob megacidades decadentes, Eva precisa confrontar não apenas um sistema corrompido, mas também sua própria mente, enquanto o mundo à sua volta colapsa em uma espiral de paranoia, traumas e revelações perturbadoras. A cada passo, ela se aproxima de uma verdade insuportável: a verdadeira prisão não tem grades — ela vive dentro da sua cabeça.
    A Libertação é um thriller distópico eletrizante, recheado de suspense psicológico, crítica social e dilemas existenciais. Uma história onde a linha entre liberdade e controle é tão tênue quanto a sanidade humana. E uma vez que você enxerga... não dá mais pra fechar os olhos.`,

    elenco: "Elenco de A Libertação (2024)",
    ator_1: "Natalie Dormer como Eva Dray",
    p_ator_1:
      "A estrela britânica de Game of Thrones e Penny Dreadful: City of Angels entrega aqui a melhor performance da carreira. Dormer vive Eva Dray, uma ex-espiã marcada por traumas, que se vê arrastada de volta ao coração da conspiração global. Fria por fora, mas em constante colapso interno, sua atuação é carregada de nuances — alternando entre o olhar calculista de uma estrategista e o desespero contido de quem já perdeu tudo.",
    ator_2: "Rami Malek como Dr. Elias Voss",
    p_ator_2:
      "A estrela britânica de Game of Thrones e Penny Dreadful: City of Angels entrega aqui a melhor performance da carreira. Dormer vive Eva Dray, uma ex-espiã marcada por traumas, que se vê arrastada de volta ao coração da conspiração global. Fria por fora, mas em constante colapso interno, sua atuação é carregada de nuances — alternando entre o olhar calculista de uma estrategista e o desespero contido de quem já perdeu tudo.",
    ator_3: "Florence Pugh como Kira Nox",
    p_ator_3:
      "Pugh interpreta uma hacker prodígio, ex-membro de um culto cibernético que agora age como aliada de Eva — mas nunca com total confiança. Kira é irreverente, rebelde, com um toque de caos, e serve como a voz crítica que questiona os sistemas de poder e identidade no filme. Florence entrega um equilíbrio incrível entre sarcasmo e intensidade emocional, dominando cada cena com energia imprevisível.",
    ator_4: "Pedro Pascal como Comandante Rael Mykov",
    p_ator_4:
      "Pascal vive o principal antagonista militar do filme: um comandante da Aliança com uma fachada heroica e um passado tenebroso. Rael é o tipo de vilão que acredita piamente estar fazendo o certo, e isso o torna ainda mais perigoso. Com seu carisma brutal e olhos carregados de história, Pascal constrói um personagem complexo, que transita entre mentor e monstro. Curiosidade: Pascal se inspirou em líderes reais de regimes autoritários para compor o personagem.",
    ator_5: "Tilda Swinton como IA “ADA” (voz e forma holográfica)",
    p_ator_5:
      'Sim, Tilda Swinton dá voz — e corpo holográfico — à inteligência artificial que supervisiona a "reprogramação da humanidade". É fria, elegante e assustadoramente lógica. ADA é uma presença constante e onipresente no filme, quase como uma deusa digital. A atuação de Tilda é minimalista e poética, como se cada palavra tivesse sido moldada para cortar a alma.',

    titulo_trailer: "Trailer do filme A libertação (2024)",
    meuIframe: iframe,
  },
  {
    id: 2,
    titulo: "Tudo que você precisa saber sobre o filme: Terrifier 3",
    imagem: "assets/fotos-filmes/terrifier3.jpg",
    sinopse: "Sinópse de Terrifier 3:",
    p_sinopse: `Nem todo pesadelo termina ao amanhecer.
    Após os eventos brutais do Halloween anterior, o mundo acreditava que o terror havia finalmente acabado. Mas o que ninguém sabia é que o mal não morre — ele apenas muda de rosto. No coração de uma cidade marcada pelo trauma e pela negação coletiva, um novo ciclo de horrores se aproxima... e ele veste maquiagem.
    
    Art, o palhaço, retorna — mais cruel, mais sádico e mais enigmático do que nunca. Não há explicação lógica para sua existência, e quanto mais tentam compreendê-lo, mais perto do abismo se aproximam. Seus ataques agora seguem um padrão quase ritualístico, envolvendo símbolos arcanos, aparições inexplicáveis e uma presença maligna que parece se alimentar do medo coletivo.
    
    Sienna, sobrevivente marcada não apenas fisicamente, mas espiritualmente, começa a ser assombrada por sonhos vívidos e sinais que indicam que sua ligação com Art é muito mais profunda do que se imaginava. À medida que o Halloween se aproxima novamente, ela mergulha em uma investigação que mistura ocultismo, insanidade e dimensões onde a dor é eterna.
    
    Das entranhas de hospitais abandonados aos becos silenciosos que escondem horrores indescritíveis, Terrifier 3 arrasta o público para um pesadelo sangrento onde a realidade se desfaz. Em um jogo de gato e rato com a própria sanidade, cada grito ecoa uma verdade terrível:
    o palhaço não quer apenas matar... ele quer eternizar o medo.
    
    Terrifier 3 é uma descida ainda mais intensa ao terror absoluto — um conto grotesco, imprevisível e implacável, onde a única certeza é que, uma vez que ele sorri... é tarde demais para correr.`,

    elenco: "Elenco de Terrifier 3:",
    ator_1: "David Howard Thornton como Art the Clown",
    p_ator_1:
      "O pesadelo silencioso retorna. David Howard Thornton entrega uma atuação ainda mais perturbadora como Art, o palhaço assassino que redefiniu o terror moderno. Sem uma única palavra, Thornton constrói um monstro icônico — expressivo, teatral, cômico e absolutamente aterrorizante. Sua presença em cena é hipnótica: cada movimento é calculado, cada sorriso é uma promessa de dor. Em Terrifier 3, Art transcende o vilão slasher e se consolida como uma entidade do caos, tão imprevisível quanto inesquecível.",
    ator_2: "Lauren LaVera como Sienna Shaw",
    p_ator_2:
      "A nova rainha do terror está de volta. Lauren LaVera retorna como Sienna, a jovem guerreira marcada por um destino maior do que ela mesma. Sua performance é uma montanha-russa emocional: vulnerável, intensa, corajosa. Com presença física de heroína e alma de sobrevivente, LaVera transforma Sienna numa figura mitológica — parte mártir, parte messias. Em um mundo que desmorona ao seu redor, ela se recusa a quebrar... e é exatamente isso que faz dela o maior desafio de Art.",
    ator_3: "Elliott Fullam como Jonathan Shaw",
    p_ator_3:
      "Jonathan, irmão de Sienna, é o coração em frangalhos da história. Elliott Fullam retorna com uma performance contida e inquietante, refletindo a angústia de uma juventude sem rumo em um mundo dominado pelo medo. Há algo no olhar de Fullam — entre a inocência e a obsessão — que instiga o espectador. Em Terrifier 3, Jonathan não é mais apenas um coadjuvante: ele é a chave para segredos antigos, e talvez... para o próprio mal.",
    ator_4: "Samantha Scaffidi como Victoria Heyes",
    p_ator_4:
      "Ela sobreviveu ao primeiro massacre. Mas a que custo? Samantha Scaffidi retorna como Victoria, agora uma figura deformada não só fisicamente, mas espiritualmente. Sua atuação em Terrifier 3 é um estudo sobre o trauma e a loucura: inquietante, imprevisível, quase profética. Cada frase balbuciada, cada gesto trêmulo, carrega uma densidade emocional brutal. Victoria já foi uma vítima. Agora, ninguém sabe ao certo o que ela é.",
    ator_5: "Chris Jericho como Burke",
    p_ator_5:
      "Lenda do wrestling, Jericho surpreende em Terrifier 3 com um papel sombrio e enigmático. Como Burke, ele abandona o carisma explosivo para viver uma presença silenciosa e carregada de mistério. Ele não veio lutar — veio te fazer duvidar de quem realmente comanda o terror.",

    titulo_trailer: "Trailer do filme Terrifier 3",
    meuIframe: iframe,
  },
  {
    id: 3,
    titulo: "Tudo que você precisa saber sobre o filme: Demolidor",
    imagem: "assets/fotos-filmes/demolidor.webp",
    sinopse: "Sinópse de Demolidor:",
    p_sinopse: `Antes de se reerguer, é preciso ser destruído.
    
    Matt Murdock já enfrentou o pior das ruas, das leis e de si mesmo. Mas nada o preparou para o que está por vir. Em Demolidor: Renascido, o inferno não é apenas um lugar — é um estado de alma. E desta vez, ele não está apenas à beira do abismo… ele foi empurrado.
    
    Após ser exposto, caçado e desmantelado peça por peça, Murdock perde tudo: seu nome, sua fé, sua identidade. Traído por aqueles em quem confiava e perseguido por forças que operam nas sombras do sistema, ele é reduzido à ruína. Mas mesmo no fundo do poço, uma chama ainda arde — não de esperança, mas de justiça crua e vingativa.
    
    Enquanto a cidade é sufocada por uma nova onda de corrupção e medo, um homem se ergue das cinzas. Mais implacável. Mais focado. Mais perigoso. O Demolidor não busca redenção — ele quer respostas. E o que ele descobrirá em seu retorno pode abalar não apenas o submundo, mas toda a estrutura de poder que mantém o caos sob controle.
    
    Demolidor: Renascido é um renascimento à base de dor, perda e luta. Um thriller urbano carregado de tensão psicológica, dilemas morais e reviravoltas brutais. Porque, às vezes, o herói precisa ser destruído… para que o justiceiro possa nascer.`,

    elenco: "Elenco de Demolidor:",
    ator_1: "Charlie Cox como Matt Murdock / Demolidor",
    p_ator_1:
      "Charlie Cox retorna em sua performance mais densa como o vigilante cego de Hell’s Kitchen. Em Renascido, Cox interpreta um Murdock à beira do colapso — um homem desfeito pela dor, pela dúvida e pela fé dilacerada. Sua presença é silenciosa, mas intensa; um equilíbrio entre o advogado altruísta e o justiceiro brutal. Cox mergulha nas camadas mais sombrias do personagem e emerge com uma atuação crua, vulnerável e inesquecível.",

    ator_2: "Vincent D’Onofrio como Wilson Fisk / Rei do Crime",
    p_ator_2:
      "Vincent D’Onofrio entrega um Rei do Crime mais ameaçador do que nunca. Sua interpretação de Fisk é fria, calculada e cheia de fúria reprimida. Em Renascido, ele não apenas manipula o sistema — ele o reescreve. D’Onofrio transforma cada palavra dita e cada olhar em uma ameaça velada, construindo um vilão que domina sem levantar a voz. É a encarnação perfeita do poder silencioso e da violência contida.",

    ator_3: "Jon Bernthal como Frank Castle / Justiceiro",
    p_ator_3:
      "Jon Bernthal volta como Frank Castle, agora uma figura ainda mais imprevisível e letal. Seu Justiceiro carrega o peso de guerras pessoais não vencidas, e em Renascido, ele atua como catalisador do caos. Bernthal traz intensidade e verdade ao personagem, com uma brutalidade que é tanto física quanto emocional. Em um mundo onde a linha entre herói e monstro se esvai, Castle é o espelho quebrado de Murdock — e talvez sua última chance de salvação ou ruína.",

    ator_4: "Deborah Ann Woll como Karen Page",
    p_ator_4:
      "Deborah Ann Woll entrega uma Karen Page devastada e determinada. Em meio ao colapso de Matt e à escalada do crime, Karen é o fio tênue que ainda o liga à humanidade. Sua atuação mistura dor e força com maestria — uma mulher marcada por perdas, mas incapaz de desistir. Cada cena com Woll é carregada de verdade, dando profundidade emocional a uma personagem que se recusa a ser apenas coadjuvante.",

    ator_5: "Elden Henson como Foggy Nelson",
    p_ator_5:
      "Elden Henson traz leveza e alma a um universo cada vez mais sombrio. Como Foggy, ele é a âncora moral de Matt — mas em Renascido, até ele se vê abalado. Henson oferece uma performance sincera e comovente, refletindo o esgotamento de quem luta por justiça em um sistema podre. Entre o humor e a dor, Foggy representa o lado mais humano da batalha… e o que resta quando os heróis perdem o caminho.",
    titulo_trailer: "Trailer do filme Demolidor",
    meuIframe: iframe,
  },
  {
    id: 4,
    titulo: "Tudo que você precisa saber sobre o filme: Elementos",
    imagem: "assets/fotos-filmes/elementos.jpg",
    sinopse: "Sinópse de Elementos:",
    p_sinopse: `Nem todo elemento está em equilíbrio.
    Na cidade de Elemental City, onde fogo, água, terra e ar coexistem em harmonia aparente, a paz é uma ilusão cuidadosamente construída. A segregação entre os elementos molda o cotidiano como uma regra não escrita — e quebrá-la significa desafiar a própria natureza.
    
    Ember, uma jovem flamejante impulsiva e orgulhosa de suas raízes, sempre acreditou que seu lugar estava definido: proteger o legado da família e jamais se misturar. Mas tudo muda quando ela conhece Wade, um espírito da água sensível e empático, que vê o mundo por lentes completamente diferentes. O que começa como um acidente se transforma em um encontro que abala as estruturas da cidade — e dos próprios corações.
    
    Enquanto forças maiores tentam apagar essa chama improvável, Ember e Wade mergulham em um caminho de autodescoberta, onde a química entre eles é tão real quanto perigosa. Entre tempestades emocionais, tradições sufocantes e escolhas impossíveis, os dois precisarão provar que o amor verdadeiro não respeita fronteiras — nem elementos.
    
    Elementos é uma fábula visual arrebatadora sobre identidade, pertencimento e transformação. Uma jornada emocional onde o fogo não destrói — ele ilumina. E onde até a água pode aprender a queimar.`,

    elenco: "Elenco de Elementos:",
    ator_1: "Leah Lewis como Faísca (Ember Lumen)",
    p_ator_1:
      "Com um fogo que arde por dentro e por fora, Leah Lewis dá voz a Faísca, uma jovem da comunidade do Fogo que vive entre o dever e o desejo. Sua interpretação é calorosa, determinada e cheia de alma. Faísca é mais do que uma rebelde com um coração em chamas — ela é o símbolo da colisão entre tradição e descoberta. A cada palavra, a cada emoção, Leah transforma o calor do fogo em pura humanidade animada.",

    ator_2: "Mamoudou Athie como Gota (Wade Ripple)",
    p_ator_2:
      "Sensível até a última lágrima, Mamoudou Athie empresta sua voz a Gota, um ser da água em constante estado de emoção. Sua performance é fluida, leve e profundamente tocante. Gota é a empatia em forma líquida, e Athie traduz isso com graça e vulnerabilidade. Em meio às diferenças elementais, ele nos mostra que sentir não é fraqueza — é força em estado puro.",

    ator_3: "Ronnie del Carmen como Bernie Lumen",
    p_ator_3:
      "A chama da tradição que insiste em permanecer acesa. Ronnie del Carmen interpreta Bernie, o pai protetor e orgulhoso de Faísca. Seu papel é um tributo à ancestralidade e ao sacrifício silencioso de tantos imigrantes. Com voz firme e olhar de saudade, Bernie representa o elo entre o passado e o presente, onde o amor se manifesta em formas duras, mas sempre sinceras.",

    ator_4: "Shila Ommi como Cinder Lumen",
    p_ator_4:
      "Mãe, guia espiritual e força invisível da família Lumen, Cinder ganha vida na voz de Shila Ommi com ternura e sabedoria. Entre incensos e intuições, ela lê o coração de quem passa, inclusive o da própria filha. Sua performance aquece como um chá de lar e memórias, lembrando que o verdadeiro fogo da família é aceso no cuidado diário.",

    ator_5: "Wendi McLendon-Covey como Gale",
    p_ator_5:
      "Com a energia de uma tempestade prestes a explodir, Wendi McLendon-Covey traz humor e dinamismo como Gale, a chefe da cidade que comanda os ventos da burocracia com charme e intensidade. Sua presença é um sopro de caos bem-vindo, equilibrando leveza com autoridade. Um vendaval cômico que refresca — e bagunça — o coração da trama.",
    titulo_trailer: "Trailer do filme Elementos",
    meuIframe: iframe,
  },
  {
    id: 5,
    titulo: "Tudo que você precisa saber sobre o filme: Ricos de amor 2",
    imagem: "assets/fotos-filmes/ricos-de-amor.webp",
    sinopse: "Sinópse de Ricos de amor 2:",
    p_sinopse: `Nem todo recomeço começa do zero.
    Após os altos e baixos de um amor que desafiou mundos opostos, Teto e Paula decidiram apostar no sentimento que os unia. Mas em um país de contrastes, onde privilégios são herança e sonhos são resistência, amar não basta — é preciso lutar para continuar amando.
    
    Agora longe do conforto da fazenda de tomates, Teto tenta provar que pode construir sua própria história — sem atalhos, sem sobrenome, apenas com trabalho e paixão. Enquanto isso, Paula, cada vez mais dedicada à medicina e à realidade dura das comunidades ribeirinhas, descobre que seu idealismo precisa enfrentar uma verdade mais difícil: às vezes, quem mais ama... é quem mais se afasta.
    
    Entre encontros e desencontros, viagens pelo Brasil profundo e escolhas que doem, "Ricos de Amor 2" mergulha no abismo que separa intenções e consequências. E quando o orgulho se torna um obstáculo maior do que a distância, resta a pergunta: até onde vale a pena lutar por um amor que parece sempre escapar?
    
    Ricos de Amor 2 é um drama romântico com alma tropical e coração partido. Uma jornada sobre crescer, ceder e descobrir que o verdadeiro luxo nunca esteve no que se tem — mas no que se sente. Porque no fim, o amor só é rico... quando é real.`,

    elenco: "Elenco de Ricos de amor 2:",
    ator_1: "Danilo Mesquita como Teto",
    p_ator_1:
      "Teto não é mais o herdeiro mimado da Tomatec — é um homem em busca de propósito. Danilo Mesquita retorna com maturidade e carisma, entregando uma performance que transita entre o charme impulsivo e a vulnerabilidade de quem tenta provar seu valor. Em 'Ricos de Amor 2', Teto é mais do que um galã: ele é o reflexo de um Brasil jovem, sonhador e em conflito com suas raízes.",

    ator_2: "Giovanna Lancellotti como Paula",
    p_ator_2:
      "Paula é razão e fogo. Giovanna Lancellotti imprime firmeza e paixão à médica idealista que carrega o peso de tantas causas — e um coração dividido. Sua presença em cena é pulsante, e cada escolha da personagem ecoa a força de quem luta por algo maior que si mesma. Em meio à floresta, à distância e às incertezas do amor, Paula é o centro moral e emocional do filme.",

    ator_3: "Jaffar Bambirra como Igor",
    p_ator_3:
      "Amigo, cúmplice, alívio cômico e consciência em momentos-chave. Jaffar Bambirra brilha como Igor, trazendo leveza e autenticidade ao grupo. Seu timing é impecável, mas há também um toque de maturidade que se revela conforme os dilemas se intensificam. Igor é o amigo que todos gostariam de ter — e talvez, o mais sensato entre eles.",

    ator_4: "Lellê como Monique",
    p_ator_4:
      "Com energia contagiante e olhar afiado, Lellê dá vida a Monique, uma jovem determinada a conquistar seu espaço sem abrir mão de sua identidade. Em 'Ricos de Amor 2', Monique deixa de ser coadjuvante e se impõe com graça e poder. Lellê entrega um equilíbrio raro entre comédia e empoderamento, fazendo da personagem uma voz forte em meio ao caos emocional do grupo.",

    ator_5: "Fernanda Paes Leme como Alana",
    p_ator_5:
      "Fernanda Paes Leme interpreta Alana, a executiva implacável que representa o choque entre o mundo corporativo e os sonhos pessoais. Com uma performance elegante e sutilmente ameaçadora, Fernanda constrói uma antagonista que é mais complexa do que aparenta. Alana não quer destruir — quer dominar. E nesse jogo, sentimentos são apenas distrações.",
    titulo_trailer: "Trailer do filme Ricos de amor 2",
    meuIframe: iframe,
  },
  {
    id: 6,
    titulo: "Tudo que você precisa saber sobre o filme: Lobisomem (2025)",
    imagem: "assets/fotos-filmes/lobisomem.jpg",
    sinopse: "Sinópse de Lobisomem (2025):",
    p_sinopse: `Nem toda fera uiva apenas à luz da lua.
Décadas após o último ataque registrado, o mundo acreditava que a maldição havia sido enterrada com seus mitos. Mas as lendas não morrem... elas apenas aguardam. E desta vez, a lua cheia nasce sobre um novo tipo de escuridão — uma que anda entre nós, sem som, sem aviso... até que seja tarde demais.

Um vilarejo isolado, cercado por florestas antigas e silêncios desconfortáveis, torna-se o epicentro de uma série de assassinatos brutais. Os corpos? Destroçados, como se a própria natureza tivesse enlouquecido. Mas não é a natureza. É algo ancestral. Selvagem. Faminto.

Enquanto os moradores mergulham no pânico e na paranoia, um forasteiro chega carregando cicatrizes — físicas e espirituais. Ele conhece a lenda. Ele a viu de perto. E agora, precisa impedir que o ciclo recomece... ou se tornar parte dele.

O que começa como uma busca por respostas se transforma em uma luta contra o tempo, contra o instinto... contra a própria humanidade. Em meio a sombras, segredos e sangue, a pergunta permanece: o monstro está lá fora — ou dentro de nós?

Lobisomem (2025) não é apenas um filme de horror. É uma experiência visceral. Um mergulho nos limites da carne, da fé e do medo. Uma história onde o uivo não anuncia perigo — ele celebra a destruição.

Porque desta vez, a lua não quer apenas iluminar.
Ela quer devorar.`,

    elenco: "Elenco de Lobisomem (2025):",
    ator_1: "Boyd Holbrook como Daniel Granger",
    p_ator_1:
      "Boyd Holbrook mergulha nas profundezas do horror com uma performance carregada de tensão e melancolia. Como Daniel Granger, um homem perseguido por segredos antigos e cicatrizes invisíveis, Holbrook traz à tela uma intensidade crua — entre o caçador e o amaldiçoado. Seus silêncios dizem mais que mil palavras, e seu olhar carrega o peso de alguém que já encarou o monstro… e talvez tenha voltado com ele dentro de si. Em Lobisomem (2025), Holbrook não interpreta um herói. Ele interpreta um homem no limite da besta.",
    ator_2: "Ana de Armas como Celina Vega",
    p_ator_2:
      "Com um magnetismo inquietante, Ana de Armas entrega uma atuação hipnótica como Celina — uma médica determinada a salvar vidas, mesmo quando a ciência já não é suficiente. Sua presença em cena mistura força e fragilidade, ceticismo e fé. Celina não é apenas uma aliada: é o espelho das verdades que Daniel tenta enterrar. Em um mundo onde a lógica se curva ao sobrenatural, de Armas brilha como uma luz solitária prestes a ser engolida pela escuridão.",

    ator_3: "Willem Dafoe como Padre Tomas",
    p_ator_3:
      "Willem Dafoe encarna o fanatismo e a fé em sua forma mais visceral. Como o enigmático Padre Tomas, ele é o guardião de um segredo antigo, disposto a tudo para impedir que o mal caminhe livremente pela terra. Dafoe é magnético, imprevisível, e profundamente desconfortável — um homem santo que carrega pecados demais. Em Lobisomem (2025), ele não salva almas... ele as julga.",

    ator_4: "Sophia Lillis como Mara Granger",
    p_ator_4:
      "Sophia Lillis traz uma vulnerabilidade feroz ao papel de Mara, filha de Daniel e herdeira de uma linhagem que ela nunca pediu. Em seus olhos, vive o medo da transformação — e talvez, o desejo secreto por ela. Lillis captura com maestria a turbulência de uma jovem dividida entre amor e instinto, humanidade e selvageria. Ela é inocente, sim — mas isso nunca salvou ninguém sob a lua cheia.",

    ator_5: "Giancarlo Esposito como Xavier Blackthorn",
    p_ator_5:
      "Imponente e sussurrante como uma ameaça antiga, Giancarlo Esposito encarna Xavier, o homem por trás da cortina. Nem caçador, nem criatura — algo no meio, algo pior. Ele não precisa correr. Ele já está à frente. Esposito domina cada cena com frieza e sofisticação, como um maestro do caos que entende a verdadeira natureza do medo. Em Lobisomem (2025), sua presença é a promessa de que o mal nem sempre vem com garras. Às vezes, ele vem de terno.",

    titulo_trailer: "Trailer do filme Lobisomem (2025)",
    meuIframe: iframe,
  },
  {
    id: 7,
    titulo: "Tudo que você precisa saber sobre o filme: Oppenheimer",
    imagem: "assets/fotos-filmes/oppenheimer.webp",
    sinopse: "Sinópse de Oppenheimer:",
    p_sinopse: `Nem todo apocalipse começa com gritos. Alguns começam com silêncio.
    
    No coração de uma nação dividida entre a guerra e a ciência, um homem caminha entre sombras e explosões. Seu nome: J. Robert Oppenheimer. Sua missão: decifrar os segredos do universo… e abrir as portas do inferno.
    
    Ele não empunha armas. Ele as cria.
    Com olhos afundados e mente afiada como bisturi, Oppenheimer lidera um projeto que ultrapassa a razão e mergulha no absoluto. A cada cálculo, uma vida. A cada teste, o destino do mundo.
    
    Mas há um preço para tocar o poder dos deuses — e Oppenheimer começa a ouvir o eco desse preço em seus próprios pesadelos. Delírios de fogo, partículas dançantes como espectros e rostos que jamais se apagam. Ele já não sabe se está construindo uma arma… ou convocando uma entidade.
    
    Entre corredores assombrados por decisões irreversíveis e reuniões que selam destinos com assinaturas frias, Oppenheimer se transforma num thriller psicológico onde a ciência é o monstro e o criador, ao mesmo tempo.
    
    Este não é apenas um filme sobre a bomba.
    É um mergulho no abismo de um homem que viu o futuro...
    ...e nunca mais conseguiu dormir.
    
    Oppenheimer é um conto aterrador sobre culpa, poder e destruição.
    Porque às vezes, o terror não vem com garras.
    Vem com fórmulas. E vem para ficar.`,

    elenco: "Elenco de Oppenheimer:",
    ator_1: "Cillian Murphy como J. Robert Oppenheimer",
    p_ator_1:
      "O homem por trás do apocalipse. Cillian Murphy entrega a performance mais assombrosa de sua carreira como J. Robert Oppenheimer — não um herói, não um vilão, mas algo infinitamente mais complexo. Com olhos que carregam mil silêncios e uma presença que parece pesar toneladas, Murphy constrói um gênio atormentado, seduzido pelo poder e esmagado pela culpa. Ele não interpreta Oppenheimer — ele se torna o homem que viu o fim do mundo… e continuou vivendo nele.",

    ator_2: "Emily Blunt como Kitty Oppenheimer",
    p_ator_2:
      "A tempestade por trás do cientista. Emily Blunt encarna Kitty com uma ferocidade que beira o instável — mulher de aço, de falhas, de fúrias mal contidas. Sua Kitty é mais do que esposa: é cúmplice, juíza e espelho da degradação silenciosa de um lar corroído por segredos atômicos. Blunt entrega uma performance crua, afiada, onde cada silêncio dela diz mais do que mil discursos. Uma força emocional que lateja no subtexto da tragédia.",

    ator_3: "Robert Downey Jr. como Lewis Strauss",
    p_ator_3:
      "O julgamento vem de terno e gravata. Robert Downey Jr. abandona todo carisma para se transformar num estrategista implacável, frio, obcecado. Como Lewis Strauss, ele é a sombra burocrática que espreita o criador da bomba, o homem que troca verdades por influência. Downey cria um antagonista sem levantar a voz — apenas com olhares, hesitações e um veneno que se infiltra lentamente. Um lobo em pele de diplomata.",

    ator_4: "Florence Pugh como Jean Tatlock",
    p_ator_4:
      "Florence Pugh entrega intensidade pura como Jean Tatlock — a mulher que talvez tenha sido a única fissura real na couraça emocional de Oppenheimer. Sua performance é como um sonho febril: apaixonada, melancólica, autodestrutiva. Tatlock não está apenas em cena — ela assombra o filme, como um eco de tudo o que Oppenheimer tentou esquecer. Pugh a interpreta com coragem brutal e olhos que parecem esconder o fim do mundo.",

    ator_5: "Matt Damon como General Leslie Groves",
    p_ator_5:
      "Matt Damon incorpora o peso da guerra com uma autoridade inquietante. Como General Groves, ele é o arquiteto prático do desastre, o homem que comanda sem jamais duvidar. Damon dá vida a um personagem que anda na linha tênue entre o pragmatismo e o fanatismo, entre a ordem e o abismo. Cada decisão sua soa como uma sentença. E, no fim, ele também é apenas mais um peão… num tabuleiro que ninguém consegue mais controlar.",
    meuIframe: iframe,
  },
  {
    id: 8,
    titulo: "Tudo que você precisa saber sobre o filme: Smile 2",
    imagem: "assets/fotos-filmes/smile-2.webp",
    sinopse: "Sinópse de Smile 2:",
    p_sinopse: `Nem todo sorriso é sinal de alegria.
    Depois dos eventos traumáticos que abalaram Rose Cotter e chocaram o mundo, acreditava-se que a maldição havia sido contida — ou, ao menos, esquecida. Mas o mal, como o medo, não desaparece: ele apenas se disfarça. E agora, ele voltou a sorrir.
    
    Uma nova vítima entra em cena. Nikki, uma estrela pop em ascensão, começa a ser assombrada por visões grotescas e sorrisos que não pertencem a nenhum rosto vivo. O que começa como uma sequência de pesadelos surreais logo se transforma em uma espiral de paranoia, onde realidade e delírio se confundem. Vozes sussurram nos camarins. Alguém a observa nos bastidores. E a cada dia, o sorriso se aproxima.
    
    Com a pressão da fama, a exaustão emocional e uma equipe que duvida da sua sanidade, Nikki se vê sozinha em uma luta contra algo invisível e impiedoso. O rastro de sangue deixado por Rose é apenas o começo — há algo mais profundo por trás dessa entidade sorridente. Um segredo enterrado, um trauma coletivo, uma força que não mata por matar... mas sim, por deixar cicatrizes eternas.
    
    Smile 2 é um mergulho no terror psicológico com toques de pesadelo surreal. De estúdios de gravação sombrios a corredores vazios de hotéis de luxo, o filme cria um labirinto de horror onde o verdadeiro monstro é a incerteza. Porque quando todos estão sorrindo, ninguém está seguro.
    
    Ele está de volta. Ele está sorrindo. E desta vez, ele quer o palco.`,

    elenco: "Elenco de Smile 2:",
    ator_1: "Naomi Scott como Skye Riley",
    p_ator_1:
      "Naomi Scott brilha em um papel sombrio como Skye, uma popstar atormentada por visões que a arrastam para um pesadelo sorridente. Sua atuação transita entre o glamour e o desespero, revelando uma vítima à beira do colapso — e talvez, da verdade.",
    ator_2: "Kyle Gallner como Joel",
    p_ator_2:
      "De volta ao inferno, Kyle Gallner encarna um Joel mais quebrado, mais determinado. Sua busca por respostas o coloca novamente no caminho da entidade, agora como peça-chave num jogo onde a sanidade é o preço da sobrevivência.",
    ator_3: "Rosemarie DeWitt como Dra. Madeline North",
    p_ator_3:
      "Cética e analítica, a Dra. North é puxada para o terror que tenta compreender. Rosemarie DeWitt entrega uma performance densa e silenciosamente angustiante, onde o colapso da razão se torna inevitável.",
    ator_4: "Lukas Gage como Alex",
    p_ator_4:
      "Lukas Gage dá vida a Alex, amigo e produtor de Skye — espirituoso por fora, abalado por dentro. Ele é o alívio cômico que logo se vê cercado pelo pavor. E o sorriso começa a pesar.",
    ator_5: "Rob Morgan como Detetive Buckley",
    p_ator_5:
      "Rob Morgan traz gravidade ao papel do detetive Buckley, um homem endurecido pela realidade, mas que agora encara o inexplicável. Ele não acredita em maldições… até elas o olharem de volta.",

    titulo_trailer: "Trailer do filme Smile 2",
    meuIframe: iframe,
  },
  {
    id: 9,
    titulo: "Tudo que você precisa saber sobre o filme: A primeira profecia",
    imagem: "assets/fotos-filmes/a-primeira-profecia.webp",
    sinopse: "Sinópse de A primeira profecia:",
    p_sinopse: `Nem toda fé leva à salvação.
    Muito antes do nascimento do Anticristo, o mal já caminhava entre nós — invisível, disfarçado, sussurrando promessas em ouvidos santos. Em uma Roma mergulhada em silêncio e sombra, onde o sagrado e o profano se confundem, uma jovem noviça chega em busca de propósito… e encontra o início do fim.
    
    Margaret não é como as outras. Há algo em seu olhar — uma dúvida que queima, uma luz que incomoda. Quando ela começa a investigar uma série de eventos estranhos dentro da igreja, descobre que não foi chamada por acaso. Vozes ecoam nas paredes. Crianças desaparecem. E o ventre de uma virgem abriga uma ameaça que desafia o divino.
    
    Enquanto o Vaticano tenta esconder seus pecados mais antigos, Margaret mergulha numa conspiração que atravessa séculos. O que ela encontra vai muito além de possessões e exorcismos: é uma arquitetura do apocalipse, planejada em silêncio, protegida pela fé... e prestes a se cumprir.
    
    A Primeira Profecia é um mergulho perturbador nas origens do horror bíblico — uma fábula sacrílega onde o terror cresce no útero da inocência, e a verdade pode ser a maior heresia de todas. Porque às vezes, o nascimento é apenas o início do inferno.`,

    elenco: "Elenco de A primeira profecia:",
    ator_1: "Nell Tiger Free como Margaret Daino",
    p_ator_1:
      "Nell Tiger Free entrega uma performance hipnótica como Margaret, a jovem noviça cujo olhar inocente esconde uma tempestade crescente. Com presença delicada e inquieta, ela traduz o conflito entre fé e dúvida com nuances dolorosas. Em sua jornada, Margaret não apenas descobre o mal — ela o sente crescer dentro de si. Um papel complexo, vivido com intensidade silenciosa e olhos que parecem ver além do véu da realidade.",

    ator_2: "Tawfeek Barhom como Padre Gabriel",
    p_ator_2:
      "Barhom é o equilíbrio entre compaixão e inquietação. Como Padre Gabriel, ele representa a última linha entre o sagrado e o profano, mas carrega nos ombros o peso de verdades demais. Sua atuação transmite um senso de urgência contido, como alguém que já viu demais... e talvez esteja começando a acreditar que não há salvação.",

    ator_3: "Sônia Braga como Irmã Silvia",
    p_ator_3:
      "Sônia Braga impõe respeito com poucas palavras. Como Irmã Silvia, ela é ao mesmo tempo guia e enigma, uma figura que transita entre o cuidado materno e o fanatismo sutil. Sua presença em cena é como um sussurro de alerta — algo está errado, mas ninguém ousa nomear. Em cada gesto, um peso ancestral.",

    ator_4: "Bill Nighy como Cardeal Lawrence",
    p_ator_4:
      "Veterano do mistério, Nighy encarna o Cardeal com uma elegância sombria. Sua autoridade é inquestionável, mas suas intenções... nem tanto. O ator traz camadas de ambiguidade ao papel — ora mentor, ora manipulador, ele é o rosto político de uma fé que pode estar servindo ao próprio inferno.",

    ator_5: "Ralph Ineson como A Voz",
    p_ator_5:
      "Com uma voz que arrepia a espinha, Ralph Ineson é mais que um personagem — é uma presença. Mesmo invisível por boa parte da trama, sua influência ecoa em pesadelos, sussurros e rituais. Quando finalmente ouvimos sua fala em plena escuridão, entendemos: o mal tem um timbre. E é sedutor.",
    titulo_trailer: "Trailer do filme A primeira profecia",
    meuIframe: iframe,
  },
  {
    id: 10,
    titulo:
      "Tudo que você precisa saber sobre o filme: Homem-Aranha: Através do Aranhaverso",
    imagem: "assets/fotos-filmes/homem-aranha.webp",
    sinopse: "Sinópse de Homem-Aranha: Através do Aranhaverso:",
    p_sinopse: `Nem todo herói escolhe o próprio destino.
    Depois de enfrentar as consequências de um universo onde tudo parecia estar desmoronando, Miles Morales acreditava ter encontrado seu lugar como o Homem-Aranha. Mas a verdade é mais complexa — e mais perigosa — do que ele jamais imaginou. Entre dimensões que colapsam, realidades que se sobrepõem e decisões que moldam o próprio tecido do multiverso, um novo confronto se aproxima... e dessa vez, o inimigo pode usar a máscara também.
    
    Quando uma ameaça interdimensional conhecida apenas como A Mancha começa a corroer as fronteiras entre os mundos, Miles é lançado em uma espiral de descobertas amargas. Cada universo possui sua própria versão do Aranha — e cada um guarda cicatrizes. Liderados por Miguel O’Hara, um Homem-Aranha do futuro com convicções inabaláveis e métodos implacáveis, a elite dos Aranhaversos impõe regras duras em nome de um equilíbrio que ninguém compreende por completo.
    
    Mas e se o equilíbrio for, na verdade, uma prisão?
    
    Miles se vê caçado por aqueles que deveriam ser seus aliados, ao mesmo tempo em que luta para proteger o que ama — sua família, seu mundo... sua identidade. Em um universo onde cada escolha tem peso cósmico, ele se recusa a aceitar que o destino já esteja escrito.
    
    Das metrópoles neon do futuro às fendas abstratas entre realidades, Através do Aranhaverso é uma jornada visualmente alucinante e emocionalmente devastadora. Um mergulho profundo em identidade, sacrifício e livre-arbítrio, onde o verdadeiro inimigo pode ser a ideia de que todo herói precisa sofrer para ser legítimo.
    
    Miles não quer seguir o caminho esperado.
    Ele quer abrir um novo.
    E quando um Aranha escolhe lutar contra o destino... o multiverso inteiro treme.`,

    elenco: "Elenco de Homem-Aranha: Através do Aranhaverso:",
    ator_1: "Shameik Moore como Miles Morales",
    p_ator_1:
      "Shameik Moore aprofunda ainda mais a alma de Miles Morales — um herói em conflito entre o que esperam dele e o que ele deseja ser. Sua voz transmite angústia, esperança e um senso inabalável de identidade. Em Através do Aranhaverso, Miles não é apenas um Aranha — ele é o questionamento vivo do que significa ser um. E Moore entrega cada linha com uma vulnerabilidade que ressoa como um grito contra o destino.",

    ator_2: "Hailee Steinfeld como Gwen Stacy",
    p_ator_2:
      "Hailee Steinfeld retorna como uma Gwen dividida entre mundos, escolhas e lealdades. Sua voz carrega leveza e dor, rebeldia e ternura. Em cada silêncio entre as palavras, há uma tragédia não dita. Gwen não é só uma heroína: é uma alma errante tentando encontrar um lugar onde não precise perder tudo para salvar alguém.",

    ator_3: "Oscar Isaac como Miguel O’Hara",
    p_ator_3:
      "Oscar Isaac impõe autoridade e melancolia como o impiedoso Miguel O’Hara. Um Homem-Aranha vindo do futuro, moldado por perdas e convicções. Sua performance vocal é firme, quase implacável — mas há rachaduras no aço. Em Miguel, Isaac cria um líder que inspira... e assusta. Ele não quer salvar o multiverso. Quer controlar o que resta dele.",

    ator_4: "Daniel Kaluuya como Hobie Brown / Aranha-Punk",
    p_ator_4:
      "Kaluuya injeta energia anárquica em Hobie, o Aranha-Punk que desafia tudo — inclusive as regras do próprio filme. Com sotaque carregado e atitude afiada, Hobie é o caos necessário num sistema opressor. Kaluuya entrega cada fala como uma guitarra rasgando a lógica. Ele não está ali pra seguir ordens. Está ali pra explodir narrativas.",

    ator_5: "Jason Schwartzman como A Mancha",
    p_ator_5:
      "Jason Schwartzman dá vida à ameaça mais insólita e perturbadora do Aranhaverso: A Mancha. O que começa como humor vira horror puro. Sua voz transita entre o patético e o apavorante, revelando um antagonista trágico, deformado e inevitável. Em vez de músculos ou armas, ele carrega vazio — e isso é infinitamente pior.",

    titulo_trailer: "Trailer do filme Homem Aranha: Através do Aranhaverso",
    meuIframe: iframe,
  },
  {
    id: 11,
    titulo: "Tudo que você precisa saber sobre o filme: Anora",
    imagem: "assets/fotos-filmes/anora.jpg",
    sinopse: "Sinópse de Anora:",
    p_sinopse: `Nem todo conto de fadas sobrevive ao casamento.
    Na cidade que nunca dorme, onde os sonhos são comprados por hora e o amor é uma ilusão que se vende com troco, Anora acreditava ter encontrado sua saída. Uma jovem stripper do Brooklyn, moldada pela dureza da noite e pela esperança que insiste em não morrer, vê sua vida virar de cabeça para baixo ao se casar impulsivamente com o filho de um oligarca russo.
    
    Mas o que parecia ser um conto moderno de Cinderela com neon e vodka, logo mergulha em um pesadelo de poder, controle e redenção impossível. Quando a família bilionária do noivo surge em Nova York, trazendo consigo segurança privada, tradições inegociáveis e um desprezo visceral por tudo que Anora representa, o jogo muda — e ninguém sai ileso.
    
    Entre boates esfumaçadas, apartamentos de luxo que escondem prisões emocionais e encontros silenciosos onde o dinheiro fala mais alto que qualquer sentimento, Anora tenta manter sua identidade intacta. Mas quanto vale a liberdade quando o amor vira contrato, e o casamento... uma guerra fria?
    
    Anora é uma dança agridoce entre empoderamento e submissão, entre sobrevivência e desejo. Um conto urbano cruelmente honesto, onde a mulher não é mais o prêmio — ela é o campo de batalha.
    
    No final, talvez a pergunta não seja quem ama quem.
    Mas sim... quanto isso vai custar.`,

    elenco: "Elenco de Anora:",
    ator_1: "Mikey Madison como Anora",
    p_ator_1:
      "Mikey Madison entrega uma performance brutalmente honesta como Anora, a jovem stripper com sonhos maiores do que o mundo permite. Sua atuação é crua, magnética e cheia de nuances: ela transita entre a dureza de quem sobrevive e a vulnerabilidade de quem ainda acredita. Madison não interpreta Anora — ela a incorpora. Em cada olhar cortante e sorriso quebrado, sentimos a força de alguém que se recusa a ser definida pelo ambiente. Uma protagonista que não pede permissão — apenas existe, com fúria e ternura.",

    ator_2: "Mark Eydelshteyn como Vanya",
    p_ator_2:
      "Mark Eydelshteyn impressiona como Vanya, o herdeiro impulsivo e enigmático que muda o destino de Anora com uma proposta tão absurda quanto tentadora. Sua atuação carrega um charme quase trágico — a criança mimada vestida de príncipe decadente. Entre a arrogância e o desespero, ele revela camadas inesperadas. Vanya não é só um catalisador — é um reflexo distorcido de um mundo onde o amor e o poder colidem.",

    ator_3: "Yulia Klass como Lena",
    p_ator_3:
      "Yulia Klass brilha como Lena, a figura fria e controladora que representa o império familiar. Com poucas palavras e uma presença cortante, Klass constrói uma mulher movida por instinto e conveniência. Lena não precisa gritar — sua autoridade está nos silêncios, nos olhares, nas ordens veladas. É ela quem dita as regras do jogo… e faz questão de lembrar quem está pagando a conta.",

    ator_4: "Petar Milchev como Igor",
    p_ator_4:
      "Como Igor, o segurança particular com alma de carcereiro, Petar Milchev incorpora a brutalidade sem disfarces. Sua atuação é física, tensa, sempre à beira da violência. Mas atrás da fachada de obediência há um desconforto crescente — uma faísca de humanidade que ameaça sair do controle. Igor é o cão de guarda... mas até cães mordem os donos.",

    ator_5: "Karren Karagulian como Tigran",
    p_ator_5:
      "Velho conhecido dos fãs de cinema independente, Karagulian retorna em grande estilo como Tigran, o gerente de boate que vê tudo, comenta pouco e nunca aposta em quem não pode pagar. Cínico, astuto e surpreendentemente comovente, Tigran é um dos poucos que realmente entendem o que está em jogo. Ele não acredita em finais felizes — só em finais lucrativos.",
    titulo_trailer: "Trailer do filme Anora",
    meuIframe: iframe,
  },
  {
    id: 12,
    titulo: "Tudo que você precisa saber sobre o filme: Suzume",
    imagem: "assets/fotos-filmes/suzume.webp",
    sinopse: "Sinópse de Suzume:",
    p_sinopse: `Nem toda porta leva à liberdade.
    Às vezes, ela abre direto para o fim do mundo.
    
    Em uma pequena cidade esquecida pelo tempo, a jovem Suzume leva uma vida comum — até encontrar uma porta misteriosa em ruínas. Curiosa, ela a abre... e o que deveria ser apenas uma passagem esquecida revela-se um portal para uma tragédia iminente. A partir daquele instante, o equilíbrio entre mundos começa a ruir.
    
    Suzume se vê lançada em uma corrida contra o invisível. Ao lado de um jovem enigmático que transforma-se em uma cadeira amaldiçoada, ela atravessa o Japão tentando fechar outras portas iguais — cada uma guardando forças caóticas que, se liberadas, trarão desastres catastróficos. Mas quanto mais Suzume fecha essas passagens, mais próxima ela chega de um trauma antigo que ainda ecoa dentro dela.
    
    Entre paisagens deslumbrantes e terremotos metafísicos, Suzume é uma jornada visualmente estonteante, onde o real se funde ao espiritual, e o passado caminha ao lado do presente. É uma história sobre perdas que deixamos trancadas, sobre o luto que aprendemos a carregar… e sobre a coragem de seguir em frente, mesmo quando tudo parece ruir ao nosso redor.
    
    Makoto Shinkai entrega mais do que um conto fantástico: ele revela as rachaduras invisíveis que todos carregamos — e mostra que às vezes, para fechar uma porta, é preciso primeiro abrir o coração.`,

    elenco: "Elenco de Suzume:",
    ator_1: "Nanoka Hara como Suzume Iwato",
    p_ator_1:
      "A alma inquieta da história. Nanoka Hara dá voz e coração à protagonista Suzume com uma entrega delicada e poderosa. Em sua interpretação, Suzume não é apenas uma adolescente comum — ela é uma sobrevivente de luto, uma aventureira relutante e, acima de tudo, uma buscadora da verdade. Hara transmite, com sensibilidade arrebatadora, o peso invisível do passado e a chama persistente da esperança. Suzume é uma porta entre mundos, e Hara nos faz querer segui-la até o fim.",
    ator_2: "Hokuto Matsumura como Souta Munakata",
    p_ator_2:
      "Souta é mais do que um guardião de portais — ele é um espírito em conflito, preso entre o dever e o desejo de viver. Hokuto Matsumura imprime ao personagem uma serenidade comovente, mesmo quando sua forma física é transformada em uma simples cadeira. É nas entrelinhas de sua voz que sentimos o amor silencioso, a melancolia de uma missão solitária e o fardo de segurar o mundo nas costas. Um herói trágico... e inesquecível.",
    ator_3: "Eri Fukatsu como Tamaki Iwato",
    p_ator_3:
      "Como a tia que criou Suzume, Eri Fukatsu entrega uma atuação que equilibra força e fragilidade. Tamaki é protetora, mas também humana — falha, exausta, cheia de medos não ditos. Fukatsu constrói essa figura com tanta verdade que sua presença emociona mesmo nos momentos mais contidos. Ela é o reflexo de um Japão ferido, tentando seguir em frente, um passo de cada vez.",
    ator_4: "Shōta Sometani como Serizawa",
    p_ator_4:
      "Um alívio cômico com alma. Serizawa poderia ser apenas o amigo engraçado, mas Shōta Sometani lhe dá um charme espontâneo e uma doçura inesperada. Sua jornada ao lado de Suzume e Souta se torna uma ponte entre o mundo real e o fantástico — mostrando que até nas histórias mais surreais, ainda há espaço para humanidade.",
    ator_5: "Ann Yamane como Daijin (voz)",
    p_ator_5:
      "Pequeno no tamanho, colossal no impacto. Daijin, o gato enigmático que parece saber mais do que revela, é dublado com carisma sobrenatural por Ann Yamane. Sua voz brinca entre o afeto e o desconforto, tornando o personagem ainda mais ambíguo e fascinante. Daijin é fofo... até que você percebe que ele pode destruir tudo.",

    titulo_trailer: "Trailer do filme Suzume",
    meuIframe: iframe,
  },
];
