/**
 * PelelecApp - Base de Dados Jornalística
 * Reconstituição de conversas, dados extraídos e registros periciais
 * da Operação Compliance Zero (Polícia Federal, STF e CPMI).
 * Fontes: Folha de S.Paulo, O Globo, Metrópoles, UOL, CNN Brasil, Poder360, JOTA, A Pública.
 */

const PELELEC_DATA = {
  owner: {
    name: "Daniel Vorcaro",
    phone: "+55 11 9988*-****",
    device: "iPhone 16 Pro Max (512 GB) - Apreendido",
    appVersion: "WhatsApp 2.25.4.78",
    forensicTool: "Cellebrite UFED Physical Extraction v8.2",
    totalExtractedPages: "1.520 páginas de laudo pericial",
    status: "Visto por último: 17 de nov. de 2025 às 05:42 (Aeroporto de Cumbica, Guarulhos)"
  },

  categories: [
    { id: "all", label: "Todas" },
    { id: "intimate", label: "💖 Peleleca & Íntimo" },
    { id: "turma", label: "💀 A Turma / Sicário" },
    { id: "poder", label: "⚖️ STF & Poder" },
    { id: "politica", label: "🏛️ Congresso & Centrão" },
    { id: "juridico", label: "📑 Advocacia & Honorários" },
    { id: "bacen", label: "🏦 Bacen & Will Bank" },
    { id: "projetodv", label: "📱 Projeto DV & Mídia" },
    { id: "fasano", label: "🏨 Fasano & 'Na Minha Conta'" },
    { id: "jatinho", label: "✈️ Jatinho & Cumbica" },
    { id: "rioprevidencia", label: "🏖️ Rioprevidência & Castro" },
    { id: "master", label: "📈 Banco Master & BRB" },
    { id: "galo", label: "🐔 Galo SAF" }
  ],

  contacts: [
    {
      id: "martha",
      name: "Martha Graeff 💖",
      alias: "Minha Pelelequinha",
      category: "intimate",
      role: "Influenciadora & Modelo",
      avatarColor: "#e91e63",
      avatarInitials: "MG",
      avatarImage: "martha",
      phone: "+1 305 555-****",
      statusText: "online",
      lastSeen: "Online",
      pinned: true,
      unreadCount: 2,
      contextSummary: "Epicentro do meme 'Peleleca' que viralizou no país em março de 2026. Conversas íntimas, declarações carinhosas com troca infantilizada de 'r' por 'l', viagens em jatinhos privados, jantares no Fasano Itaim e temporadas em Dubai e Saint-Tropez.",
      source: {
        outlet: "UOL / Metrópoles / Folha de S.Paulo",
        headline: "'Peleleca': como mensagens íntimas de Vorcaro viralizaram na CPMI e nas redes",
        date: "Março de 2026",
        link: "https://www.uol.com.br"
      },
      messages: [
        {
          id: "mg_brb1",
          sender: "them",
          time: "08:25",
          date: "30 de Março de 2025",
          text: "Alguma novidade?",
          status: "read"
        },
        {
          id: "mg_brb2",
          sender: "me",
          time: "08:27",
          date: "30 de Março de 2025",
          text: "Foi muita exposição.",
          status: "read"
        },
        {
          id: "mg_brb3",
          sender: "me",
          time: "08:27",
          date: "30 de Março de 2025",
          text: "Eu achei que daria mas não tanto",
          isIconicQuote: true,
          forensicTag: "CNN Brasil (05/03/2026) • Repercussão Master e BRB",
          factCheckNote: "Diálogo transcrito pela CNN Brasil situando a reação de Vorcaro dois dias após a aprovação pelo conselho do BRB da compra de participação no Master.",
          status: "read"
        },
        {
          id: "mg_brb4",
          sender: "me",
          time: "08:30",
          date: "30 de Março de 2025",
          text: "A turma dos bancos está furiosa com o acordo",
          isIconicQuote: true,
          forensicTag: "CNN Brasil Fls. 1.290",
          status: "read"
        },
        {
          id: "m1",
          sender: "them",
          time: "14:12",
          date: "12 de Outubro de 2025",
          text: "Dani, o jatinho já tá liberado pra decolar de Congonhas pro Fasano Angra? As malas já estão prontas! ✈️🏖️",
          status: "read"
        },
        {
          id: "m2",
          sender: "me",
          time: "14:15",
          date: "12 de Outubro de 2025",
          text: "Já dei o ok pro comandante, meu amol. O helicóptero busca você no heliponto do Itaim às 15h. Hoje o dia é todinho nosso ❤️",
          status: "read"
        },
        {
          id: "m3",
          sender: "them",
          time: "14:16",
          date: "12 de Outubro de 2025",
          text: "Você é um príncipe... Te amo tantooo! Saudade de você me mimando assim.",
          status: "read"
        },
        {
          id: "m4",
          sender: "me",
          time: "14:18",
          date: "12 de Outubro de 2025",
          type: "audio",
          audioDuration: "0:24",
          audioTranscript: "Oi meu amorzinho... tô saindo de uma reunião chata de diretoria aqui no Master. Só quero chegar logo e ficar agarradinho na minha pelelequinha. Beijo na sua peleleca.",
          status: "read"
        },
        {
          id: "m5",
          sender: "them",
          time: "22:40",
          date: "18 de Outubro de 2025",
          text: "Olha como o pôr do sol aqui em Dubai tá surreal hoje! Queria você aqui comigo agora...",
          mediaType: "image",
          mediaCaption: "Dubai Marina Luxury Suite - Vista panorâmica",
          mediaPreset: "dubai",
          status: "read"
        },
        {
          id: "m6",
          sender: "me",
          time: "22:45",
          date: "18 de Outubro de 2025",
          text: "Linda demais da minha vida! Semana que vem tô aí com você. Nem reunião de R$ 5 bi me segura em SP.",
          status: "read"
        },
        {
          id: "m7",
          sender: "me",
          time: "02:14",
          date: "24 de Outubro de 2025",
          text: "Peleleca vai estar com cabelo branco e eu chupando",
          status: "read",
          isIconicQuote: true,
          forensicTag: "PF Fls. 892 - Destaque CPMI / Trending Topic Mundial",
          factCheckNote: "Frase periciada no celular apreendido pela PF e enviada à comissão parlamentar, tornando o apelido 'peleleca' um meme viral nacional."
        },
        {
          id: "m8",
          sender: "them",
          time: "02:16",
          date: "24 de Outubro de 2025",
          text: "Hahahaha meu Deus Dani você não existe! Promete pra sempre? 😂❤️",
          status: "read"
        },
        {
          id: "m9",
          sender: "me",
          time: "02:18",
          date: "24 de Outubro de 2025",
          isDeleted: true,
          recoveredText: "Plomessa de amol etelno da minha vida. Ninguém cuida da peleleca como eu cuido, você sabe.",
          forensicSource: "Cellebrite Cache Database - Rec. 73491",
          status: "read"
        },
        {
          id: "m10",
          sender: "them",
          time: "11:05",
          date: "14 de Novembro de 2025",
          text: "Amor, você tá quieto hoje... Tá tudo bem no banco? Vi umas matérias esquisitas sobre investigação.",
          status: "read"
        },
        {
          id: "m11",
          sender: "me",
          time: "11:20",
          date: "14 de Novembro de 2025",
          text: "Tudo sob controle, meu bem. Coisa de concorrente com inveja. Já acionei os amigos certos em Brasília e em SP. Fica tranquila na Suíça que nada vai acontecer.",
          status: "read"
        }
      ]
    },

    {
      id: "turma",
      name: "A Turma (Operações) 💀",
      alias: "Luiz Phillipe Mourão ('Sicário')",
      category: "turma",
      role: "Coordenação de Inteligência Paralela",
      avatarColor: "#263238",
      avatarInitials: "AT",
      avatarImage: "turma",
      phone: "+55 31 9845*-****",
      statusText: "offline",
      lastSeen: "Visto por último em 16/11/2025",
      pinned: true,
      unreadCount: 0,
      contextSummary: "Grupo e interlocuções que coordenavam a chamada 'Turma' — estrutura clandestina que recebia cerca de R$ 1 milhão/mês para espionar desafetos, acessar indevidamente sistemas sigilosos da PF (ePol) e planejar agressões contra jornalistas investigativos (Lauro Jardim).",
      source: {
        outlet: "O Globo / A Pública / STF (Decisão Min. André Mendonça)",
        headline: "'Dar um pau nele': as ordens de Vorcaro para intimidar jornalistas e monitorar alvos",
        date: "Fevereiro de 2026",
        link: "https://oglobo.globo.com"
      },
      messages: [
        {
          id: "t1",
          sender: "them",
          time: "09:30",
          date: "03 de Novembro de 2025",
          text: "Chefe, os R$ 850 mil deste mês já caíram para a equipe de campo e para 'Os Meninos' (hackers). Todos os acessos remotos aos servidores continuam ativos.",
          status: "read"
        },
        {
          id: "t2",
          sender: "me",
          time: "09:34",
          date: "03 de Novembro de 2025",
          text: "Perfeito. O foco absoluto agora é descobrir quem está vazando as informações dos CDBs de 140% e das compras de precatórios municipais. Tem gente falando demais.",
          status: "read"
        },
        {
          id: "t3",
          sender: "them",
          time: "10:15",
          date: "03 de Novembro de 2025",
          type: "media",
          mediaType: "image",
          mediaCaption: "Consulta Sigilosa ePol / MPF - IP 179.231.***.***",
          mediaPreset: "epol",
          text: "Conseguimos logar com a credencial do delegado aposentado. Nenhum mandado expedido até as 10h de hoje contra o CNPJ da Master Holding.",
          status: "read"
        },
        {
          id: "t4",
          sender: "me",
          time: "16:42",
          date: "08 de Novembro de 2025",
          text: "Vocês viram a nota que aquele colunista (Lauro Jardim) soltou hoje sugerindo rombo no Master? Esse cara tá passando de todos os limites.",
          status: "read"
        },
        {
          id: "t5",
          sender: "me",
          time: "16:45",
          date: "08 de Novembro de 2025",
          isDeleted: true,
          recoveredText: "Tem que dar um pau nele. Forjar um assalto de rua, quebrar os dentes todos desse desgraçado pra ele nunca mais abrir a boca sobre o banco.",
          isIconicQuote: true,
          forensicTag: "Doc. PF Inq. 4.932 - Decisão André Mendonça Fls. 412",
          factCheckNote: "Trecho citado literalmente em decisão judicial do STF: Vorcaro planejou forjar agressão física contra jornalista para calar a imprensa.",
          status: "read"
        },
        {
          id: "t6",
          sender: "them",
          time: "16:48",
          date: "08 de Novembro de 2025",
          text: "Entendido, chefe. O 'Careca' já localizou a rotina dele no Leblon e a placa do carro. Estamos na contenção só esperando a ordem final.",
          status: "read"
        },
        {
          id: "t7",
          sender: "me",
          time: "17:02",
          date: "08 de Novembro de 2025",
          type: "audio",
          audioDuration: "0:38",
          audioTranscript: "Segura um pouco. Não vamos fazer barulho antes de fechar a operação de liquidez com o BRB. Se a imprensa cheirar confusão física agora, o Banco Central pode travar a autorização de cisão. Mantém só o rastreamento 24h nele.",
          status: "read"
        },
        {
          id: "t8",
          sender: "them",
          time: "18:10",
          date: "15 de Novembro de 2025",
          text: "ALERTA: Movimentação estranha na superintendência da PF em SP. Estão puxando os dados de voo privado em Cumbica. Chefe, troca de aparelho!",
          status: "read"
        },
        {
          id: "t9",
          sender: "them",
          time: "06:15",
          date: "16 de Novembro de 2025",
          text: "Chefe, o Roseno ('São Paulo') mandou avisar que se der busca na casa dele em BH, o celular reserva tá guardado dentro do freezer atrás das carnes congeladas pra bloquear qualquer sinal.",
          isIconicQuote: true,
          forensicTag: "Auto de Apreensão 3ª Fase Compliance Zero - DPF/BH",
          factCheckNote: "A PF apreendeu o iPhone do líder de 'A Turma' escondido exatamente dentro do freezer vertical da área de serviço.",
          status: "read"
        }
      ]
    },

    {
      id: "stf_alexandre",
      name: "Contato 'Alexandre' ⚖️",
      alias: "Canal Institucional Brasília",
      category: "poder",
      role: "Articulação de Alto Escalão",
      avatarColor: "#1a237e",
      avatarInitials: "AM",
      avatarImage: "tribunal",
      phone: "+55 61 9991*-****",
      statusText: "offline",
      lastSeen: "Visto por último em 14/11/2025",
      pinned: true,
      unreadCount: 1,
      contextSummary: "Diálogos e registros encontrados no celular de Vorcaro que desencadearam a maior crise institucional no STF em 2026. Revelam o uso de prints do Bloco de Notas em modo 'Visualização Única', mensagens de 'dívida de vida' e perguntas sobre mandados antes da prisão em Guarulhos.",
      source: {
        outlet: "O Globo (Malu Gaspar) / CNN Brasil / JOTA",
        headline: "'Dívida de vida': mensagens de Vorcaro em 'visualização única' abrem crise no STF",
        date: "Setembro de 2026",
        link: "https://oglobo.globo.com/blogs/malu-gaspar"
      },
      messages: [
        {
          id: "s0",
          sender: "them",
          time: "18:20",
          date: "17 de Setembro de 2025",
          text: "⚙️ Mensagens temporárias de 24 horas ativadas neste chat. Todas as novas mensagens desaparecerão para ambos após 24 horas do envio.",
          isIconicQuote: false,
          forensicTag: "UOL Notícias (01/09/2026) / STF Inq. 4.932",
          factCheckNote: "O UOL revelou que o relatório pericial da PF documentou a ativação do recurso de mensagens autodestrutivas de 24h na conversa atribuída.",
          status: "read"
        },
        {
          id: "s1",
          sender: "me",
          time: "19:30",
          date: "10 de Novembro de 2025",
          text: "Boa noite, meu amigo. Conseguiu dar uma olhada na minuta que o escritório de SP preparou sobre os precatórios federais?",
          status: "read"
        },
        {
          id: "s2",
          sender: "me",
          time: "20:05",
          date: "12 de Novembro de 2025",
          text: "Os honorários contratuais do trimestre já foram liquidados conforme o acordado com a equipe do escritório.",
          status: "read"
        },
        {
          id: "s3",
          sender: "me",
          time: "10:14",
          date: "14 de Novembro de 2025",
          type: "view_once",
          isViewOnce: true,
          mediaCaption: "📷 Foto (Visualização única) - Recuperada pela PF",
          noteTitle: "Anotação Pessoal - 14/11",
          noteContent: "Estamos juntos sempre. Você sabe que tenho gratidão da minha vida a você. Toda minha família, funcionários, parceiros, amigos que dependem de nós têm uma dívida de vida contigo e com sua família. Muito obrigado por tudo. Agora é continuar na pegada pra conseguir concluir, se Deus quiser.",
          isIconicQuote: true,
          forensicTag: "Laudo Pericial INC/PF nº 284/2026 - Print recuperado da pasta .Photos/Caches",
          factCheckNote: "Vorcaro digitou o texto no app Notas do iPhone, tirou print e enviou no modo 'visualização única' do WhatsApp. A perícia da PF recuperou o arquivo de imagem do print que permaneceu gravado na memória física do aparelho.",
          status: "read"
        },
        {
          id: "s4",
          sender: "me",
          time: "15:40",
          date: "14 de Novembro de 2025",
          type: "view_once",
          isViewOnce: true,
          mediaCaption: "📷 Foto (Visualização única) - Recuperada pela PF",
          noteTitle: "Rascunho Urgente",
          noteContent: "Segunda devo estar fora?",
          isIconicQuote: true,
          forensicTag: "Relatório PF Operação Compliance Zero Fls. 1.042",
          factCheckNote: "Mensagem enviada dias antes de Vorcaro tentar embarcar para o exterior em voo particular no dia 17 de novembro de 2025.",
          status: "read"
        },
        {
          id: "s5",
          sender: "me",
          time: "21:10",
          date: "14 de Novembro de 2025",
          isDeleted: true,
          recoveredText: "Confirmado o jantar no Fasano amanhã à noite na suíte presidencial. Mesa reservada sem nenhuma exposição.",
          forensicSource: "SQLite WAL Journal Parser",
          status: "read"
        },
        {
          id: "s5b",
          sender: "me",
          time: "00:49",
          date: "16 de Novembro de 2025",
          text: "Temos que dar um jeito de desarmar isso, meu Deus",
          isIconicQuote: true,
          forensicTag: "CNN Brasil (01/09/2026) • Inquérito 4.932 STF Fls. 1.490",
          factCheckNote: "Frase atribuída a Daniel Vorcaro enviada na madrugada do dia 16/11. O Ministro Alexandre de Moraes contestou categoricamente a autenticidade e a autoria de qualquer mensagem em manifestação ao plenário do STF e à Folha de S.Paulo.",
          status: "read"
        },
        {
          id: "s6",
          sender: "me",
          time: "23:48",
          date: "17 de Novembro de 2025",
          text: "To indo assinar com os investidores de fora e estou online",
          isIconicQuote: true,
          forensicTag: "PF Relatório Cumbica Fls. 1.834 - Minutos antes da prisão",
          factCheckNote: "Mensagem enviada por Daniel Vorcaro no hangar de Guarulhos enquanto seu jatinho se preparava para decolar para o exterior antes do cerco policial.",
          status: "read"
        }
      ]
    },

    {
      id: "henrique_pai",
      name: "Henrique Vorcaro (Pai) 💼",
      alias: "Vorcaro Senior",
      category: "turma",
      role: "Patriarca & Operador Financeiro",
      avatarColor: "#455a64",
      avatarInitials: "HV",
      avatarImage: "henrique",
      phone: "+55 31 9912*-****",
      statusText: "offline",
      lastSeen: "Visto por último em 16/11/2025",
      pinned: false,
      unreadCount: 0,
      contextSummary: "Pai de Daniel Vorcaro e figura chave da família. Apontado pela PF como o principal financiador da estrutura de 'A Turma' e coordenador de offshores e do polêmico 'Projeto DV' (contratação de influenciadores para desacreditar órgãos federais e o Banco Central). Preso na 6ª fase da operação.",
      source: {
        outlet: "G1 / Folha de S.Paulo / Gazeta do Povo",
        headline: "'Projeto DV' e pagamentos milionários: o papel de Henrique Vorcaro nas fraudes do Master",
        date: "Maio de 2026",
        link: "https://g1.globo.com"
      },
      messages: [
        {
          id: "h1",
          sender: "them",
          time: "08:15",
          date: "28 de Outubro de 2025",
          text: "Daniel, os contratos de mútuo com as empresas do Panamá foram assinados. Blindamos R$ 320 milhões em ativos imobiliários em Nova Lima.",
          status: "read"
        },
        {
          id: "h2",
          sender: "me",
          time: "08:22",
          date: "28 de Outubro de 2025",
          text: "Ótimo pai. Não podemos deixar nada no meu CPF ou no nome direto do banco. A pressão do Banco Central tá aumentando todo dia.",
          status: "read"
        },
        {
          id: "h3",
          sender: "them",
          time: "14:50",
          date: "05 de Novembro de 2025",
          text: "A planilha do 'Projeto DV' já tem 12 influenciadores digitais e 4 colunistas de economia contratados. Vamos soltar vídeos criticando a taxa Selic e dizendo que o Master é vítima do 'cartel dos grandes bancos'.",
          status: "read"
        },
        {
          id: "h4",
          sender: "me",
          time: "14:58",
          date: "05 de Novembro de 2025",
          text: "Isso aí. O público precisa achar que qualquer ação contra nós é perseguição política porque somos um banco independente que paga mais aos investidores.",
          status: "read"
        },
        {
          id: "h5",
          sender: "them",
          time: "19:40",
          date: "16 de Novembro de 2025",
          text: "Filho, me liga no celular do motorista urgente. Não fala nada no seu WhatsApp nem no FaceTime. Passa aqui em casa antes de ir pro aeroporto!",
          status: "read"
        }
      ]
    },

    {
      id: "paulo_brb",
      name: "Paulo Henrique Costa (BRB) 🏛️",
      alias: "Presidente BRB",
      category: "master",
      role: "Parcerias Institucionais & Crédito",
      avatarColor: "#00695c",
      avatarInitials: "PC",
      avatarImage: "brb",
      phone: "+55 61 9811*-****",
      statusText: "offline",
      lastSeen: "Visto por último em 15/11/2025",
      pinned: false,
      unreadCount: 0,
      contextSummary: "Negociações bilionárias entre o Banco Master e o Banco de Brasília (BRB). A PF investigou a cessão de carteiras de crédito podres do Master ao BRB para estancar a crise de liquidez, reuniões sigilosas em Brasília e emissões de debêntures.",
      source: {
        outlet: "Metrópoles / Folha / JOTA",
        headline: "Operação Compliance Zero: a teia de negócios entre o Banco Master de Vorcaro e o BRB",
        date: "Janeiro de 2026",
        link: "https://www.metropoles.com"
      },
      messages: [
        {
          id: "p1",
          sender: "me",
          time: "11:10",
          date: "20 de Outubro de 2025",
          text: "Paulo, como ficou a aprovação no comitê de risco daquela carteira de R$ 1,8 bilhão que estruturamos?",
          status: "read"
        },
        {
          id: "p2",
          sender: "them",
          time: "11:25",
          date: "20 de Outubro de 2025",
          text: "Daniel, os técnicos do comitê fizeram 14 ressalvas por causa do índice de inadimplência e das garantias de precatórios. Tô trabalhando internamente pra contornar.",
          status: "read"
        },
        {
          id: "p3",
          sender: "me",
          time: "11:30",
          date: "20 de Outubro de 2025",
          text: "Você sabe que se essa operação não fechar até o dia 30, o Master fica desenquadrado no índice de Basileia. Precisamos da canetada da diretoria.",
          status: "read"
        },
        {
          id: "p4",
          sender: "them",
          time: "15:20",
          date: "27 de Outubro de 2025",
          text: "Conseguimos dividir a operação em 3 tranches de debêntures subordinadas. Vamos assinar em Brasília na quarta-feira no almoço reservado.",
          status: "read"
        },
        {
          id: "p5",
          sender: "me",
          time: "15:24",
          date: "27 de Outubro de 2025",
          text: "Sensacional. Meu jatinho te busca em Brasília na sexta se quiser passar o fim de semana aqui no Fasano Itaim. Você merece.",
          status: "read"
        }
      ]
    },

    {
      id: "augusto_master",
      name: "Augusto Lima (Master Partners) 📈",
      alias: "Sócio & Diretor de Captação",
      category: "master",
      role: "Mesa de Operações & Captação CDB",
      avatarColor: "#f57f17",
      avatarInitials: "AL",
      avatarImage: "augusto",
      phone: "+55 11 9772*-****",
      statusText: "offline",
      lastSeen: "Visto por último em 16/11/2025",
      pinned: false,
      unreadCount: 0,
      contextSummary: "Operações diárias da máquina do Banco Master: emissão agressiva de CDBs com taxas de 140% do CDI nas principais corretoras (XP, BTG), comissões altíssimas para agentes autônomos e aportes milionários captados junto a fundos de previdência municipal (RPPS).",
      source: {
        outlet: "Valor Econômico / Infomoney / CartaCapital",
        headline: "A farra dos CDBs a 140% do CDI: como o Banco Master inflou captações antes do colapso",
        date: "Dezembro de 2025",
        link: "https://infomoney.com.br"
      },
      messages: [
        {
          id: "a1",
          sender: "them",
          time: "09:00",
          date: "01 de Novembro de 2025",
          text: "Daniel, batemos recorde de captação hoje nas plataformas de varejo: R$ 420 milhões num único dia com o CDB 142% do CDI de 3 anos!",
          status: "read"
        },
        {
          id: "a2",
          sender: "me",
          time: "09:05",
          date: "01 de Novembro de 2025",
          text: "Maravilha! Aumenta a comissão dos agentes autônomos (AAIs) para 2,5% na ponta. Quanto mais dinheiro entrar agora, mais fôlego temos pra pagar os resgates dos fundos de pensão.",
          status: "read"
        },
        {
          id: "a3",
          sender: "them",
          time: "16:20",
          date: "07 de Novembro de 2025",
          text: "O instituto de previdência dos servidores de Macapá e de duas prefeituras do Nordeste aportaram R$ 180 milhões no nosso FIDC de precatórios estaduais.",
          status: "read"
        },
        {
          id: "a4",
          sender: "me",
          time: "16:25",
          date: "07 de Novembro de 2025",
          isDeleted: true,
          recoveredText: "Garante o repasse do bônus de consultoria pro intermediário político deles lá em Brasília na segunda. Sem atraso.",
          forensicSource: "Unallocated Clusters Extractor",
          status: "read"
        },
        {
          id: "a5",
          sender: "them",
          time: "18:40",
          date: "14 de Novembro de 2025",
          text: "Dani, a Anbima e o Bacen mandaram notificação pedindo o detalhamento das garantias dos últimos R$ 8 bilhões em CDBs. O prazo vence em 48h.",
          status: "read"
        }
      ]
    },

    {
      id: "rubens_menin",
      name: "Rubens Menin (Galo Holding) ⚽🐔",
      alias: "Os 4 R's / SAF Atlético-MG",
      category: "galo",
      role: "Acionista Majoritário SAF",
      avatarColor: "#212121",
      avatarInitials: "RM",
      avatarImage: "galo",
      phone: "+55 31 9887*-****",
      statusText: "offline",
      lastSeen: "Visto por último em 15/11/2025",
      pinned: false,
      unreadCount: 0,
      contextSummary: "Investimentos do grupo de Vorcaro na SAF do Atlético Mineiro (Galo Holding), com aportes que ultrapassaram R$ 200 milhões, reformas e camarotes VIP na Arena MRV e discussões sobre contratações e montagem do elenco.",
      source: {
        outlet: "GloboEsporte / Itatiaia / CNN Esportes",
        headline: "O peso do Banco Master na SAF do Atlético-MG: os aportes e a presença de Vorcaro",
        date: "Outubro de 2025",
        link: "https://ge.globo.com"
      },
      messages: [
        {
          id: "r1",
          sender: "them",
          time: "17:40",
          date: "15 de Outubro de 2025",
          text: "Daniel, confirmamos a reunião da Galo Holding na Arena MRV amanhã. Vamos definir a nova chamada de capital de R$ 150 milhões para amortizar dívidas bancárias.",
          status: "read"
        },
        {
          id: "r2",
          sender: "me",
          time: "17:48",
          date: "15 de Outubro de 2025",
          text: "Conta comigo, Rubens! O Master entra com a fatia dele sem falta. O Galo é paixão e o projeto da Arena ficou espetacular. Meu camarote já tá decorado?",
          status: "read"
        },
        {
          id: "r3",
          sender: "them",
          time: "17:52",
          date: "15 de Outubro de 2025",
          type: "media",
          mediaType: "image",
          mediaCaption: "Camarote Master / Arena MRV - Belo Horizonte",
          mediaPreset: "arenamrv",
          text: "Camarote presidencial pronto com chopeira personalizada e camisas autografadas pelo elenco.",
          status: "read"
        },
        {
          id: "r4",
          sender: "me",
          time: "22:15",
          date: "29 de Outubro de 2025",
          text: "Que vitória épica hoje! A torcida gritando é inacreditável. O Bernard e o Scarpa jogaram muita bola. Ano que vem temos que trazer mais dois reforços da Europa!",
          status: "read"
        },
        {
          id: "r5",
          sender: "them",
          time: "09:12",
          date: "12 de Novembro de 2025",
          text: "Daniel, vi o noticiário financeiro de SP hoje cedo. Espero que esteja tudo em paz por aí com o banco. O clube precisa da estabilidade dos sócios.",
          status: "read"
        },
        {
          id: "r6",
          sender: "me",
          time: "09:30",
          date: "12 de Novembro de 2025",
          text: "Tudo 100% blindado, Rubens. A SAF tá totalmente isolada de qualquer questão societária de SP. Domingo tô em BH pro clássico!",
          status: "read"
        }
      ]
    },

    {
      id: "arthur_lira",
      name: "Arthur Lira & Articulação 🏛️",
      alias: "Liderança Congresso / PP",
      category: "politica",
      role: "Articulação Política & CPIs",
      avatarColor: "#0277bd",
      avatarInitials: "AL",
      avatarImage: "politica",
      phone: "+55 61 9982*-****",
      statusText: "offline",
      lastSeen: "Visto por último em 14/11/2025",
      pinned: false,
      unreadCount: 0,
      contextSummary: "A Polícia Federal apreendeu manuscritos e listas de parlamentares em poder de investigados da Compliance Zero. As mensagens indicam intensa articulação com lideranças do Centrão em Brasília para barrar requerimentos de convocação e quebra de sigilo na CPMI e proteger negócios de fundos municipais (RPPS).",
      source: {
        outlet: "UOL / Nexo Jornal / CNN Brasil / Folha",
        headline: "Compliance Zero: manuscritos apreendidos trazem listas de parlamentares e conexões com Vorcaro",
        date: "Março de 2026",
        link: "https://noticias.uol.com.br/politica/ultimas-noticias/2026/03/arthur-lira-ciro-nogueira-vorcaro.htm"
      },
      messages: [
        {
          id: "l1",
          sender: "them",
          time: "11:40",
          date: "22 de Outubro de 2025",
          text: "Daniel, os 3 requerimentos da oposição na CPMI pedindo a quebra de sigilo bancário do Master foram retirados de pauta hoje no colégio de líderes.",
          status: "read"
        },
        {
          id: "l2",
          sender: "me",
          time: "11:45",
          date: "22 de Outubro de 2025",
          text: "Alívio gigante, presidente! Gratidão imensa pelo apoio de sempre. O mercado tava numa apreensão danada com essas convocações da comissão.",
          status: "read"
        },
        {
          id: "l3",
          sender: "them",
          time: "17:10",
          date: "04 de Novembro de 2025",
          text: "Mantivemos a base alinhada. Na semana que vem organizamos aquele jantar fechado em Brasília com a bancada pra tratar da pauta regulatória de crédito.",
          status: "read"
        },
        {
          id: "l4",
          sender: "me",
          time: "17:15",
          date: "04 de Novembro de 2025",
          isDeleted: true,
          recoveredText: "Vou disponibilizar a estrutura de apoio e os deslocamentos pelo jatinho conforme combinamos. Total discrição e segurança para todos.",
          forensicSource: "PF DITEC / Software IPED v4.1 - Log Extração #591",
          forensicTag: "Manuscrito Apreendido - Autos Inq. 4.932",
          factCheckNote: "A PF encontrou registros de articulação e apoio logístico de Vorcaro a lideranças políticas para frear investigações legislativas.",
          status: "read"
        },
        {
          id: "l5",
          sender: "them",
          time: "17:20",
          date: "04 de Novembro de 2025",
          text: "Perfeito. Discrição absoluta é a regra de ouro neste momento.",
          status: "read"
        }
      ]
    },

    {
      id: "escritorio_adv",
      name: "Advocacia Institucional 📑⚖️",
      alias: "Escritório de Defesa & Pareceres",
      category: "juridico",
      role: "Assessoria Jurídica Estratégica",
      avatarColor: "#37474f",
      avatarInitials: "VJ",
      avatarImage: "advocacia",
      phone: "+55 11 9884*-****",
      statusText: "offline",
      lastSeen: "Visto por último em 15/11/2025",
      pinned: false,
      unreadCount: 0,
      contextSummary: "Investigações da PF identificaram contratos milionários de honorários e pareceres de conformidade entre o Banco Master e bancas de advocacia de familiares de magistrados dos tribunais superiores, visando blindagem regulatória junto ao Banco Central e STF.",
      source: {
        outlet: "O Globo (Malu Gaspar) / JOTA / Poder360",
        headline: "Contratos milionários de bancas de advocacia com Banco Master entram na mira da Polícia Federal",
        date: "Fevereiro de 2026",
        link: "https://oglobo.globo.com/blogs/malu-gaspar/"
      },
      messages: [
        {
          id: "v1",
          sender: "them",
          time: "10:30",
          date: "18 de Outubro de 2025",
          text: "Prezado Daniel, protocolamos os memoriais jurídicos no recurso especial dos precatórios federais e enviamos a minuta do parecer regulatório.",
          status: "read"
        },
        {
          id: "v2",
          sender: "me",
          time: "10:38",
          date: "18 de Outubro de 2025",
          text: "Excelente! O financeiro já programou a transferência da parcela de honorários de R$ 3,8 milhões para a conta do escritório em SP.",
          status: "read"
        },
        {
          id: "v3",
          sender: "them",
          time: "14:15",
          date: "06 de Novembro de 2025",
          text: "Confirmamos a audiência com o relator em Brasília para a próxima terça. A tese sobre a higidez dos créditos está muito bem fundamentada.",
          status: "read"
        },
        {
          id: "v4",
          sender: "me",
          time: "14:22",
          date: "06 de Novembro de 2025",
          type: "view_once",
          isViewOnce: true,
          mediaCaption: "📷 Foto (Visualização única) - Bloco de Notas",
          noteTitle: "Roteiro de Sustentação",
          noteContent: "Alinhar memoriais com a assessoria jurídica. Enfatizar a solvência dos fundos e afastar qualquer questionamento do Banco Central sobre a parceria do BRB.",
          forensicTag: "IPED Extractor v4.1 / Hash SHA-256 e8f32...",
          factCheckNote: "Documentos e capturas de tela revelam a estratégia de blindagem jurídica perante os órgãos de controle financeiro.",
          status: "read"
        },
        {
          id: "v5",
          sender: "them",
          time: "14:25",
          date: "06 de Novembro de 2025",
          text: "Perfeito. As teses estão 100% coordenadas.",
          status: "read"
        }
      ]
    },

    {
      id: "bacen_operacoes",
      name: "Contato Bacen (Supervisão) 🏦✈️",
      alias: "Aprovação Voiter & Will Bank",
      category: "bacen",
      role: "Fiscalização & Atos de Concentração",
      avatarColor: "#004d40",
      avatarInitials: "BC",
      avatarImage: "bacen",
      phone: "+55 61 9822*-****",
      statusText: "offline",
      lastSeen: "Visto por último em 14/11/2025",
      pinned: false,
      unreadCount: 0,
      contextSummary: "A PF apurou que servidores do Banco Central facilitavam a aprovação da compra do Banco Voiter e do controle acionário do Will Bank em troca de despesas pessoais pagas por Vorcaro, incluindo viagens internacionais de luxo para a França e Disney, além da neutralização de alertas de lavagem emitidos pelo COAF.",
      source: {
        outlet: "Gazeta do Povo / UOL / Poder360",
        headline: "Operação Compliance Zero: Vorcaro pagou viagens à França e Disney a servidores do Banco Central",
        date: "Fevereiro de 2026",
        link: "https://www.gazetadopovo.com.br/vozes/lucio-vaz/operacao-compliance-zero-banco-central-will-bank/"
      },
      messages: [
        {
          id: "b1",
          sender: "them",
          time: "15:20",
          date: "25 de Outubro de 2025",
          text: "Daniel, o parecer preliminar de conformidade do comitê sobre a aquisição do Banco Voiter foi aprovado internamente sem ressalvas impeditivas.",
          status: "read"
        },
        {
          id: "b2",
          sender: "me",
          time: "15:28",
          date: "25 de Outubro de 2025",
          text: "Sensacional! Vocês foram cirúrgicos. Os vouchers das passagens de primeira classe e a reserva no hotel em Paris para as férias da sua família já estão com a minha secretária em SP.",
          status: "read"
        },
        {
          id: "b3",
          sender: "them",
          time: "15:32",
          date: "25 de Outubro de 2025",
          text: "Muito obrigado, Daniel. O processo de controle do Will Bank também já entrou na fila prioritária de despacho da diretoria nesta semana.",
          status: "read"
        },
        {
          id: "b4",
          sender: "me",
          time: "17:05",
          date: "02 de Novembro de 2025",
          isDeleted: true,
          recoveredText: "Garante que aquele alerta de comunicação do COAF sobre os aportes de R$ 500 milhões no FIDC seja classificado como operação ordinária de mercado, sem necessidade de aprofundamento.",
          forensicSource: "SQLite Carved Records / Cellebrite Extraction #9102",
          forensicTag: "Laudo PF DITEC nº 392/2026 - Quebra de Sigilo Funcional",
          factCheckNote: "A PF detalhou que servidores do órgão atuavam para classificar movimentações suspeitas como atípicas sem relevância criminal.",
          status: "read"
        },
        {
          id: "b5",
          sender: "them",
          time: "17:10",
          date: "02 de Novembro de 2025",
          text: "Já cuidamos disso na mesa técnica de supervisão. Fique tranquilo que o processo segue o fluxo normal.",
          status: "read"
        }
      ]
    },

    {
      id: "projeto_dv",
      name: "Agência Mídia ('Projeto DV') 📱💸",
      alias: "Gabinete Digital & Influenciadores",
      category: "projetodv",
      role: "Operações de Narrativa & Ataques",
      avatarColor: "#6a1b9a",
      avatarInitials: "DV",
      avatarImage: "projetodv",
      phone: "+55 11 9911*-****",
      statusText: "offline",
      lastSeen: "Visto por último em 16/11/2025",
      pinned: false,
      unreadCount: 0,
      contextSummary: "Plano estratégico financiado pelo grupo de Vorcaro (com orçamento de até R$ 2 milhões) para contratar influenciadores digitais, youtubers de finanças e colunistas. O objetivo era propagar ataques ao Banco Central, defender os CDBs de 140% do Master e construir a narrativa de que o banco sofria perseguição do 'cartel dos grandes bancos'.",
      source: {
        outlet: "Revista Oeste / STF (Decisão André Mendonça) / A Pública",
        headline: "'Projeto DV': como Vorcaro gastou até R$ 2 milhões para influenciadores atacarem o Banco Central",
        date: "Maio de 2026",
        link: "https://revistaoeste.com/brasil/operacao-compliance-zero-projeto-dv-influenciadores/"
      },
      messages: [
        {
          id: "d1",
          sender: "them",
          time: "10:10",
          date: "29 de Outubro de 2025",
          text: "Dr. Daniel, os primeiros 8 vídeos no TikTok e YouTube já bateram 2 milhões de views. O roteiro enfatiza que o Master democratizou os investimentos no país e que os bancões tradicionais estão incomodados com as taxas altas que pagamos.",
          status: "read"
        },
        {
          id: "d2",
          sender: "me",
          time: "10:18",
          date: "29 de Outubro de 2025",
          text: "Perfeito! Manda a equipe subir hashtags no Twitter acusando a diretoria do Bacen de proteger os 4 maiores bancos. O público tem que comprar essa briga como uma luta contra o sistema financeiro tradicional.",
          status: "read"
        },
        {
          id: "d3",
          sender: "them",
          time: "16:40",
          date: "07 de Novembro de 2025",
          text: "A folha de pagamento do Projeto DV fechou em R$ 1,85 milhão este mês para os 15 perfis verificados e os 3 portais parceiros. Liberamos as notas como prestação de serviços de consultoria de branding?",
          status: "read"
        },
        {
          id: "d4",
          sender: "me",
          time: "16:45",
          date: "07 de Novembro de 2025",
          text: "Sim, faturar tudo pela holding patrimonial de BH através dos contratos de assessoria. Não pode sair nenhum pagamento com o CNPJ do Banco Master.",
          status: "read"
        },
        {
          id: "d5",
          sender: "them",
          time: "16:50",
          date: "07 de Novembro de 2025",
          text: "Combinado, chefe. As métricas de engajamento mostram que a narrativa pró-Master está dominando as discussões nas redes de investimento.",
          status: "read"
        }
      ]
    },

    {
      id: "desembargador_fasano",
      name: "Des. Newton Ramos ('Turma do KN') ⚖️🏨",
      alias: "Intermediação Fasano & Precatórios",
      category: "fasano",
      role: "TRF-1 & Advocacia Precatórios",
      avatarColor: "#4e342e",
      avatarInitials: "NR",
      avatarImage: "fasano",
      phone: "+55 61 9931*-****",
      statusText: "offline",
      lastSeen: "Visto por último em 14/11/2025",
      pinned: false,
      unreadCount: 0,
      contextSummary: "Mensagens periciadas no celular de Vorcaro expuseram tratativas com o desembargador Newton Ramos e a advogada Camilla Ramos, intermediando pedidos de reservas no Hotel Fasano, caronas em jatinhos privados e a locação de uma mansão no Rio de Janeiro durante o Carnaval. O grupo esteve atrelado a um contrato de honorários de até R$ 427 milhões para liberação de R$ 8,5 bilhões em precatórios de interesse do Banco Master.",
      source: {
        outlet: "Metrópoles / Brasil de Fato / UOL / CNN",
        headline: "'Pode botar na minha conta': Vorcaro pagou diárias no Fasano e bancou jatos e mansão no Carnaval",
        date: "Março de 2026",
        link: "https://www.metropoles.com/brasil/operacao-compliance-zero-fasano-precatorios-nunes-marques"
      },
      messages: [
        {
          id: "k1",
          sender: "them",
          time: "16:15",
          date: "10 de Outubro de 2025",
          text: "Daniel, o amigo de Brasília está precisando de uma reserva no Fasano para a próxima semana. Você consegue ver aquela tarifa promocional especial com a gerência do hotel?",
          status: "read"
        },
        {
          id: "k2",
          sender: "me",
          time: "16:22",
          date: "10 de Outubro de 2025",
          text: "Pode botar na minha conta. Não se preocupa com tarifa não, já deixo a suíte presidencial liberada e todo o consumo faturado direto pro banco.",
          isIconicQuote: true,
          forensicTag: "Mensagem Periciada INC/PF - Destaque Metrópoles / CPMI",
          factCheckNote: "Frase célebre de Vorcaro revelada pela perícia da PF: o banqueiro assumia os custos de estadias de luxo e serviços para autoridades e intermediários.",
          status: "read"
        },
        {
          id: "k3",
          sender: "them",
          time: "16:26",
          date: "10 de Outubro de 2025",
          text: "Você é fantástico, meu amigo! Sobre o contrato dos precatórios federais de R$ 8,5 bilhões, a minuta com a cláusula de honorários de R$ 427 milhões já foi aprovada pelo nosso comitê.",
          status: "read"
        },
        {
          id: "k4",
          sender: "me",
          time: "19:05",
          date: "28 de Outubro de 2025",
          isDeleted: true,
          recoveredText: "Perfeito. Já pedi pro piloto deixar o jatinho de prontidão em Congonhas se precisarem fazer o bate-volta Brasília-Rio para a reunião da mansão no Carnaval.",
          forensicSource: "Cellebrite Memory Parser / SQLite Journal",
          status: "read"
        },
        {
          id: "k5",
          sender: "them",
          time: "19:12",
          date: "28 de Outubro de 2025",
          text: "Excelente. Alinhamento total entre todas as frentes.",
          status: "read"
        }
      ]
    },

    {
      id: "piloto_jatinho",
      name: "Comandante Marcos (Jato R$ 200M) ✈️🚨",
      alias: "Operações Hangar Guarulhos",
      category: "jatinho",
      role: "Piloto Chefe / Frota Aérea Master",
      avatarColor: "#b71c1c",
      avatarInitials: "CM",
      avatarImage: "jato",
      phone: "+55 11 9833*-****",
      statusText: "offline",
      lastSeen: "Visto por último em 17/11/2025 às 23:55",
      pinned: true,
      unreadCount: 1,
      contextSummary: "Registros das últimas comunicações de Daniel Vorcaro em liberdade na noite de 17 de novembro de 2025. O banqueiro estava no Hangar VIP do Aeroporto Internacional de Guarulhos preparando-se para decolar em seu jatinho particular de R$ 200 milhões com destino a Malta e Dubai, quando a pista foi cercada por viaturas da Polícia Federal.",
      source: {
        outlet: "O Globo / UOL / NeoFeed / CNN Brasil",
        headline: "A tentativa de fuga em Guarulhos: o jatinho de R$ 200 mi e a prisão de Daniel Vorcaro na pista",
        date: "Novembro de 2025",
        link: "https://oglobo.globo.com/brasil/noticia/2025/11/operacao-compliance-zero-prisao-guarulhos-jatinho.ghtml"
      },
      messages: [
        {
          id: "j1",
          sender: "them",
          time: "21:30",
          date: "17 de Novembro de 2025",
          text: "Dr. Daniel, aeronave 100% abastecida no Hangar VIP de Cumbica. Plano de voo internacional aprovado no controle com destino a Malta e Dubai.",
          status: "read"
        },
        {
          id: "j2",
          sender: "me",
          time: "21:45",
          date: "17 de Novembro de 2025",
          text: "Tô chegando em 20 minutos no hangar pela entrada lateral privativa. Coloca as 4 malas pretas no bagageiro interno da cabine principal, não despacha nada no porão de carga.",
          status: "read"
        },
        {
          id: "j3",
          sender: "them",
          time: "22:10",
          date: "17 de Novembro de 2025",
          text: "Recebido, chefe. Bagagens já embarcadas a bordo. A tripulação e os dois comissários já estão posicionados.",
          status: "read"
        },
        {
          id: "j4",
          sender: "me",
          time: "23:40",
          date: "17 de Novembro de 2025",
          text: "Fecha a porta da aeronave assim que eu passar pela escada. Quero acionar as turbinas imediatamente sem passar por terminal de passageiros.",
          status: "read"
        },
        {
          id: "j5",
          sender: "them",
          time: "23:51",
          date: "17 de Novembro de 2025",
          text: "🚨 ALERTA MÁXIMO CHEFE: Três viaturas descaracterizadas da Polícia Federal acabaram de furar a cancela da pista e bloquearam o trem de pouso do jato! Tem agentes armados subindo a escada agora!",
          isIconicQuote: true,
          forensicTag: "Auto de Prisão em Flagrante nº 1.402/2025 - DPF/Cumbica",
          factCheckNote: "Momento exato da abordagem em que Vorcaro foi preso e teve todos os seus celulares, relógios de luxo e passaportes apreendidos na pista.",
          status: "read"
        },
        {
          id: "j6",
          sender: "me",
          time: "23:52",
          date: "17 de Novembro de 2025",
          isDeleted: true,
          recoveredText: "Não abre a porta! Desliga o transponder e tenta ligar pro advogado de Brasília agora!",
          forensicSource: "Cellebrite Memory Snapshot / Log Final",
          status: "read"
        }
      ]
    },

    {
      id: "claudio_castro",
      name: "Cláudio Castro (Gov. RJ) 🏖️🍷",
      alias: "Palácio Guanabara / Rioprevidência",
      category: "rioprevidencia",
      role: "Governador & Aportes Previdenciários",
      avatarColor: "#01579b",
      avatarInitials: "CC",
      avatarImage: "castro",
      phone: "+55 21 9998*-****",
      statusText: "offline",
      lastSeen: "Visto por último em 15/11/2025",
      pinned: false,
      unreadCount: 0,
      contextSummary: "Investigações da 8ª fase da Compliance Zero apontam vínculo pessoal estreito entre Vorcaro e o governador Cláudio Castro. As mensagens revelam sincronismo entre reuniões privadas e a liberação de aportes bilionários do Rioprevidência no Banco Master, além de agradecimentos por jantares de luxo custeados pelo banqueiro em Nova York (R$ 66 mil).",
      source: {
        outlet: "O Globo / Poder360 / CNN Brasil / Revista Veja",
        headline: "Operação Compliance Zero: mensagens revelam elo de Vorcaro com Cláudio Castro e aportes do Rioprevidência",
        date: "Maio de 2026",
        link: "https://oglobo.globo.com/rio/noticia/2026/05/operacao-compliance-zero-claudio-castro-rioprevidencia.ghtml"
      },
      messages: [
        {
          id: "c1",
          sender: "them",
          time: "20:30",
          date: "14 de Outubro de 2025",
          text: "Daniel, aquele jantar ontem em Manhattan foi espetacular! Vinhos incríveis e restaurante impecável. Muito obrigado pela recepção em Nova York.",
          status: "read"
        },
        {
          id: "c2",
          sender: "me",
          time: "20:35",
          date: "14 de Outubro de 2025",
          text: "Uma honra recebê-lo, governador! A conta de R$ 66 mil valeu cada centavo pela parceria. Semana que vem tô no Rio pra gente passar no Palácio Guanabara.",
          status: "read"
        },
        {
          id: "c3",
          sender: "them",
          time: "11:15",
          date: "28 de Outubro de 2025",
          text: "A diretoria do Rioprevidência confirmou a aprovação do aporte de R$ 1,2 bilhão nos títulos do Master. As portarias de nomeação dos novos diretores também já saíram no Diário Oficial.",
          status: "read"
        },
        {
          id: "c4",
          sender: "me",
          time: "11:22",
          date: "28 de Outubro de 2025",
          isDeleted: true,
          recoveredText: "Perfeito! A liquidez do banco fica 100% estabilizada com esse lote do Rioprevidência. Meu jatinho fica à sua disposição para o feriado em Angra.",
          forensicSource: "INC-PF / IPED v4.1 - Laudo Guanabara Fls. 2.190",
          forensicTag: "Autos 8ª Fase Compliance Zero - STF",
          factCheckNote: "A PF documentou o sincronismo entre as agendas no exterior e os aportes bilionários de previdência estadual.",
          status: "read"
        },
        {
          id: "c5",
          sender: "them",
          time: "11:28",
          date: "28 de Outubro de 2025",
          text: "Maravilha, Daniel. Nos vemos em Angra no fim de semana.",
          status: "read"
        }
      ]
    },

    {
      id: "flavio_bolsonaro",
      name: "Flávio Bolsonaro (Senador) 🎬",
      alias: "Gabinete Senado • 'Dark Horse'",
      category: "politica",
      role: "Senador da República & Cinema",
      avatarColor: "#2e7d32",
      avatarInitials: "FB",
      avatarImage: "senado",
      phone: "+55 61 9811*-****",
      statusText: "offline",
      lastSeen: "Visto por último em 16/11/2025",
      pinned: true,
      unreadCount: 1,
      contextSummary: "Série 'Vaza Flávio' revelada pelo The Intercept Brasil: mensagens, documentos e áudios apontando tratativas para o financiamento de R$ 10 milhões do filme 'Dark Horse' através do Banco Master. À Associated Press, o senador negou qualquer irregularidade ou favorecimento, destacando que tratava de atração de capital privado legítimo para o setor audiovisual.",
      source: {
        outlet: "The Intercept Brasil / Associated Press",
        headline: "Vaza Flávio: Áudio e mensagens mostram negociação milionária de Vorcaro com senador",
        date: "13/05/2026",
        link: "https://www.intercept.com.br/2026/05/13/audio-flavio-negociou-vorcaro-milhoes/"
      },
      messages: [
        {
          id: "fb1",
          sender: "them",
          time: "17:15",
          date: "07 de Novembro de 2025",
          type: "view_once",
          isViewOnce: true,
          mediaCaption: "📷 Vídeo (Visualização única) - Enviado por Flávio Bolsonaro",
          noteTitle: "Apresentação Dark Horse",
          noteContent: "Material em vídeo contendo pitch de apresentação da produção cinematográfica Dark Horse, cronograma de filmagens e plano de distribuição internacional.",
          forensicTag: "The Intercept Brasil / Série Vaza Flávio (13/05/2026)",
          factCheckNote: "O Intercept relata o envio de um vídeo de visualização única pelo senador com detalhes da produção cinematográfica.",
          status: "read"
        },
        {
          id: "fb2",
          sender: "them",
          time: "14:22",
          date: "16 de Novembro de 2025",
          text: "Irmão, estou e estarei contigo sempre, não tem meia conversa entre a gente. Só preciso que me dê uma luz! Abs!",
          isIconicQuote: true,
          forensicTag: "Mensagem periciada • Publicada em 13/05/2026",
          factCheckNote: "Mensagem enviada na véspera da tentativa de embarque de Vorcaro em Guarulhos. Em nota à Associated Press, Flávio declarou que 'a mensagem reflete lealdade pessoal e jamais teve qualquer conotação de interferência em órgãos de fiscalização'.",
          status: "read"
        },
        {
          id: "fb3",
          sender: "me",
          time: "14:40",
          date: "16 de Novembro de 2025",
          text: "Tamo junto demais, irmão! O aporte de R$ 10 mi pro filme tá sacramentado pelo banco. Vou te ligar em linha segura.",
          status: "read"
        },
        {
          id: "fb4",
          sender: "them",
          time: "14:42",
          date: "16 de Novembro de 2025",
          isDeleted: true,
          recoveredText: "Perfeito, me chama no Signal ou no Facetime quando puder.",
          forensicSource: "Cellebrite Memory Snapshot / Log Final",
          status: "read"
        }
      ]
    },

    {
      id: "mario_frias",
      name: "Mario Frias (Deputado) 🎭",
      alias: "Câmara dos Deputados • 'Dark Horse'",
      category: "politica",
      role: "Deputado Federal & Audiovisual",
      avatarColor: "#d84315",
      avatarInitials: "MF",
      avatarImage: "camara",
      phone: "+55 61 9923*-****",
      statusText: "offline",
      lastSeen: "Visto por último em 15/12/2024",
      pinned: false,
      unreadCount: 0,
      contextSummary: "Reportagens do InfoMoney e The Intercept relatam mensagens e áudios atribuídos ao deputado Mario Frias agradecendo a Vorcaro pelo suporte ao filme 'Dark Horse'. O InfoMoney destacou que Frias inicialmente negou ter recebido recursos diretos, esclarecendo posteriormente a questão dos investimentos institucionais do banco.",
      source: {
        outlet: "InfoMoney / The Intercept Brasil",
        headline: "Áudios mostram Mario Frias agradecendo Vorcaro por apoio a 'Dark Horse'",
        date: "19/05/2026",
        link: "https://www.infomoney.com.br/politica/audios-mostram-mario-frias-agradecendo-vorcaro-por-apoio-a-dark-horse-diz-site/"
      },
      messages: [
        {
          id: "mf1",
          sender: "them",
          time: "16:20",
          date: "11 de Dezembro de 2024",
          type: "audio",
          audioDuration: "0:45",
          audioTranscript: "Dani, meu irmão! Passando pra te agradecer de coração pelo apoio ao projeto do Dark Horse. Isso vai fazer toda a diferença pra cultura e pro cinema independente. Tamo junto!",
          forensicTag: "Áudio citado pelo The Intercept e InfoMoney",
          factCheckNote: "Gravação periciada nos arquivos do Banco Master. A defesa de Frias declarou que o projeto é uma produção privada legítima sem repasses públicos.",
          status: "read"
        },
        {
          id: "mf2",
          sender: "me",
          time: "16:28",
          date: "11 de Dezembro de 2024",
          text: "Eu to numa ligação te chamo em seguida",
          status: "read"
        },
        {
          id: "mf3",
          sender: "them",
          time: "16:30",
          date: "11 de Dezembro de 2024",
          text: "Blz",
          status: "read"
        },
        {
          id: "mf4",
          sender: "them",
          time: "10:15",
          date: "15 de Dezembro de 2024",
          text: "Dani, mandei no seu e-mail o print da conversa com o diretor e a produtora executiva sobre o cronograma de pré-produção.",
          status: "read"
        }
      ]
    },

    {
      id: "joao_doria",
      name: "João Doria (Ex-Gov SP) ☕",
      alias: "Grupo LIDE / Ex-Governador SP",
      category: "politica",
      role: "Ex-Governador de SP & Empresário",
      avatarColor: "#455a64",
      avatarInitials: "JD",
      avatarImage: "doria",
      phone: "+55 11 9988*-****",
      statusText: "offline",
      lastSeen: "Visto por último em Maio de 2025",
      pinned: false,
      unreadCount: 0,
      contextSummary: "Diálogo divulgado pela CNN Brasil (coluna Gustavo Uribe) mostrando aproximação entre o ex-governador de SP João Doria e Daniel Vorcaro em maio de 2025. Doria solicita uma conversa reservada sobre o banco. Em manifestação oficial, a assessoria de Doria confirmou o diálogo, situando o contato em maio de 2025 como gesto de cortesia institucional prévio aos desdobramentos policiais.",
      source: {
        outlet: "CNN Brasil (Gustavo Uribe)",
        headline: "Em mensagem, Doria se diz preocupado com Vorcaro e pede conversa reservada",
        date: "05/03/2026",
        link: "https://www.cnnbrasil.com.br/blogs/gustavo-uribe/politica/em-mensagem-doria-se-diz-preocupado-com-vorcaro-e-pede-conversa-reservada/"
      },
      messages: [
        {
          id: "jd1",
          sender: "them",
          time: "15:10",
          date: "12 de Maio de 2025",
          text: "Daniel, como vai? Estou preocupado com o que ando ouvindo no mercado financeiro. Gostaria de tomar um café com você.",
          status: "read"
        },
        {
          id: "jd2",
          sender: "me",
          time: "15:15",
          date: "12 de Maio de 2025",
          text: "Com relação a que?",
          status: "read"
        },
        {
          id: "jd3",
          sender: "them",
          time: "15:18",
          date: "12 de Maio de 2025",
          text: "A você, ao Maurício, ao banco. Reservadamente",
          isIconicQuote: true,
          forensicTag: "CNN Brasil • Divulgado em 05/03/2026",
          factCheckNote: "Diálogo confirmado pela assessoria de João Doria à CNN, datado de maio de 2025 como gesto institucional preventivo.",
          status: "read"
        },
        {
          id: "jd4",
          sender: "me",
          time: "15:22",
          date: "12 de Maio de 2025",
          text: "Não entendi bem, quer me ligar?",
          status: "read"
        },
        {
          id: "jd5",
          sender: "them",
          time: "15:23",
          date: "12 de Maio de 2025",
          text: "Ligo já",
          status: "read"
        }
      ]
    }
  ],

  forensicReport: {
    title: "LAUDO DE EXTRAÇÃO ELETRÔNICA Nº 2026/0482-INC/DITEC/PF",
    operation: "Operação Compliance Zero (6ª Fase)",
    courtCase: "Inquérito nº 4.932 - Supremo Tribunal Federal (Relator Min. André Mendonça)",
    target: "Daniel Bueno Vorcaro (CPF 041.***.***-**)",
    hardware: "Apple iPhone 16 Pro Max - IMEI 35892110294****",
    storage: "512 GB NVMe (488.2 GB periciados)",
    forensicMethodology: [
      "Extração Física via Cellebrite UFED 8.2 através de exploit Checkm8/SecureROM",
      "Parsing de banco de dados SQLite / ChatStorage.sqlite (WhatsApp Messenger)",
      "Recuperação de tabelas ZWAMESSAGE e arquivos temporários de Write-Ahead Logging (.wal)",
      "Reconstrução de imagens da pasta DCIM / Apple Notes Screenshots enviadas em modo One-Time View",
      "Varredura de clusters de memória não alocada para recuperação de mensagens apagadas com flag z_is_deleted=1"
    ],
    statistics: {
      totalMessagesRecovered: "148.920 mensagens",
      deletedMessagesRestored: "3.412 mensagens apagadas",
      viewOnceImagesRecovered: "284 prints de bloco de notas",
      audioFilesRecovered: "1.890 notas de voz (.opus)",
      sensitiveContactsIdentified: "42 autoridades e empresários"
    }
  }
};

window.PELELEC_DATA = PELELEC_DATA;
