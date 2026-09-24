/* Classificação editorial dos veículos citados, usada em diversidade.html.
   É uma decisão do PelelecApp, não um dado objetivo: a página mostra cada veículo com o grupo atribuído
   para que qualquer pessoa possa contestar. Correções: https://github.com/Bhr3X/pelelecapp/issues
   Critério: linha editorial pública e habitual de cada veículo. Veículo sem histórico claro fica "nao".
   Fontes do tipo documento (PDF da PF, do STF, da PGR) contam como "oficial", seja qual for o site que as hospeda. */
window.PELELEC_VEICULOS = {
  atualizado: '2026-09-23',
  // Grafias diferentes do mesmo veículo.
  apelidos: { Wikipedia: 'Wikipédia', 'GitHub API': 'GitHub', 'Folha PE': 'Folha de Pernambuco', 'ND Mais': 'ND+', ConJur: 'Conjur', PF: 'Polícia Federal', 'Estadão Conteúdo via UOL': 'Estadão Conteúdo', 'Agência Brasil via UOL': 'Agência Brasil' },
  grupos: {
    direita: { nome: 'Direita / conservador', cor: '#1f6fb2' },
    centro: { nome: 'Generalista / centro', cor: '#7a8a94' },
    esquerda: { nome: 'Esquerda / progressista', cor: '#c2413b' },
    estatal: { nome: 'Estatal (EBC)', cor: '#b08a2e' },
    oficial: { nome: 'Documento oficial', cor: '#2f8f6b' },
    nao: { nome: 'Não classificado', cor: '#b9c3c9' },
  },
  veiculos: {
    direita: ['Revista Oeste', 'Gazeta do Povo', 'O Antagonista', 'Crusoé', 'Jovem Pan', 'Gazeta Brasil', 'Brasil Paralelo', 'Pleno.News', 'Claudio Dantas', 'Revista Sociedade Militar', 'Diário do Poder'],
    esquerda: ['Brasil de Fato', 'CartaCapital', 'Revista Fórum', 'ICL Notícias', 'Brasil 247', 'Intercept Brasil', 'Jornal GGN', 'Agência Pública', 'Hora do Povo', 'DCM'],
    estatal: ['Agência Brasil', 'TV Brasil', 'Agência Brasil via UOL'],
    oficial: ['STF', 'PF', 'Polícia Federal', 'Câmara dos Deputados', 'Registro.br'],
    centro: [
      'Poder360', 'CNN Brasil', 'Metrópoles', 'O Tempo', 'Correio Braziliense', 'Jornal de Brasília', 'InfoMoney', 'Estado de Minas',
      'Congresso em Foco', 'Band', 'SBT News', 'Terra', 'UOL', 'Folha de S.Paulo', 'Estadão', 'Estadão Conteúdo', 'Estadão Conteúdo via UOL',
      'Estadão MT', 'O Globo', 'g1', 'BBC News Brasil', 'Associated Press', 'Times Brasil', 'IstoÉ Dinheiro', 'O Povo', 'A Tarde', 'ND+', 'ND Mais',
      'NSC Total', 'RIC', 'Tribuna do Norte', 'A Gazeta', 'Folha de Pernambuco', 'Folha PE', 'Diario de Pernambuco', 'Bahia Notícias', 'Metro 1',
      'Migalhas', 'Conjur', 'ConJur', 'JOTA', 'Núcleo Jornalismo', 'Aos Fatos', 'Lance!', 'Jornal da Paraíba', 'Diário do Grande ABC',
      'Correio do Estado', 'Jornal Cruzeiro do Sul', 'Tribuna Online', 'Gazetaweb', 'O Imparcial', 'Diário de São Paulo', 'Diário da Manhã',
      'Notícias ao Minuto', 'Rádio Pampa', 'Agência UVA', 'PlatôBR', 'Valor Econômico', 'Veja', 'piauí',
    ],
  },
};
