/* Local translations. The Portuguese documentary data remains the source of truth. */
(() => {
  const pending = 'The previous version contained statements and metadata whose supporting evidence was not located in this review. This conversation awaits further research; that does not establish that its participants had no contact.';
  const messages = {
    'mg-fotos': 'Metrópoles reports that Vorcaro sent photos of two properties for sale in Miami. The files are not available in this archive; the article consulted does not allow the two images to be reliably identified.',
    mg1: 'CNN dates this conversation to two days after the BRB board approved buying a stake in Master. That approval does not mean the transaction was completed.',
    mg2: 'Any news?', mg3: 'According to the transcript, Vorcaro expresses concern about other banks’ reactions and news coverage of the transaction.',
    mg4: 'There was a lot of exposure.', mg5: 'I thought there would be some, but not that much',
    mg6: 'In the published sequence, he says news reports could hinder the authorities’ assessment of the transaction. This is the participant’s account, not an editorial finding.',
    'mg-resposta': 'Martha said she was unaware of the suspicions concerning the bank and denied receiving houses, a car or a boat. The article records her statement after the conversations were disclosed.',
    lm1: 'Agência Brasil reported that a ruling by André Mendonça cited indications of an intimidation structure linked to Vorcaro and Mourão. This describes suspicions under investigation.',
    lm2: 'The search index located the article, but the full text could not be opened. This excerpt is identified as limited context and links to the publisher.',
    am1: 'Page 1 of the annex records the 24-hour disappearing-message setting for this contact. This card represents the system notice, not a specific deleted message.',
    'ds-am-deleted': 'Page 1 of the annex shows four deletion markers between 22:17:06 and 22:18:21 (UTC−03:00), associated with the contact saved as Alexandre de Moraes BRASILIA. The original content is not shown. The attribution of the contact is disputed.',
    'am-gratidao': 'We are always together. You know I owe you my life’s gratitude',
    am2: 'CNN reports questions from Vorcaro about the progress of the investigations and the possibility of leaving the country. The identity attributed to the recipient is disputed.',
    am3: 'We have to find a way to defuse this, my God',
    'am-online': 'I’m going to sign with the foreign investors and I’m online',
    am4: 'No written reply attributed to Moraes appears here. AP reported that the September 15 session ended without a decision on opening the investigation.',
    pc1: 'my friend, we’re together now', pc2: 'we really are together for life.',
    pc3: 'The article describes concerns about documents needed for the transaction and assessment of the deal. This summary does not reproduce a literal message.',
    pc4: 'CNN reports messages about a visit to Master and the prospect of integrating the institutions.',
    'ds-bc1': 'According to CNN, Belline Santana created the WhatsApp group that included Vorcaro and Paulo Sérgio Neves de Souza.',
    'ds-bc2': 'The article describes a conversation about restrictions on BRB’s purchase of loan portfolios. Vorcaro asks for an assessment; Paulo Sérgio considers the decision difficult because it involves the Central Bank’s legal department.',
    'ds-bc3': 'In the reported sequence, Paulo Sérgio suggests an official letter about receipts from the portfolios. CNN publishes images of the exchange.',
    'ds-bc4': 'The Federal Police interpreted the exchanges as advice provided to Vorcaro. The article consulted does not include statements from the defense teams; this does not establish that no later response exists.',
    'ds-nr1': 'CNN and Metrópoles identify Newton and Camilla Ramos as the people referred to in aides’ messages as “turma do KN”. This does not turn those aides’ messages into direct statements by Newton.',
    'ds-nr2': 'CNN reports requests concerning accommodation and a VIP box in conversations between Vorcaro and aides. The article publishes the messages and Newton’s response.',
    'ds-nr3': 'Newton said the inquiries about properties and transport were private and unrelated to his public duties. Nunes Marques denied authorizing anyone to speak on his behalf or exchanging messages with Vorcaro.',
    fb1: 'The Intercept describes Flávio sending a video. The file is not part of this MVP; its absence does not mean it was manually deleted.',
    fb2: 'Brother, I am and will always be with you; there’s no beating around the bush between us. I just need you to give me some guidance! Hugs!',
    fb3: 'The Intercept linked the records to negotiations to finance Dark Horse. The article distinguishes the financial commitment from payments it says it documented.',
    fb4: 'AP recorded the senator’s denial of wrongdoing after publication. Read the response alongside the original article.',
    mf1: 'The article describes an audio message from Frias thanking Vorcaro for supporting the film. Consult the original player at the source; this card is not a recovered file.',
    mf2: 'I’m on a call, I’ll call you right after', mf3: 'OK',
    mf4: 'According to the publisher, Frias shared a screenshot of a conversation with the film’s director. That image has not been included in the MVP.',
    jd1: 'Doria expresses concern about what he had been hearing and suggests meeting for coffee. The published screenshot excerpt has no day or time.',
    jd2: 'About what?', jd3: 'You, Maurício, the bank. In private', jd4: 'I didn’t quite understand, do you want to call me?', jd5: 'I’ll call now',
    jd6: 'CNN describes an unanswered call and a return call by Vorcaro. The article does not report the conversation’s content. This archive has no recording.',
    'ds-cs1': 'Gonet is solid', 'ds-cs2': 'Did the guy drop out?', 'ds-cs3': 'Yes', 'ds-cs4': 'Really great',
    'ds-cs5': 'CNN transcribes an audio message in which Ciro says he asked Gonet to speak to a candidate so that he would withdraw. This is the lawyer’s account; the app does not play the audio.',
    'ds-cs6': 'According to the article, Ciro sent a selfie with Gonet and requested a call. The photo published by the outlet can be viewed through the source link.',
    'ds-cs7': 'Call here',
    'ds-cs8': 'Ciro forwarded messages attributed to Gonet, with congratulations and a reference to a trip. The sender in the chat is Ciro; Gonet is the attributed author of the forwarded text.',
    'ds-cs9': 'UOL reproduces a record of Ciro sending a photograph of a meeting in London with Vorcaro and Gonet. The photograph and its sharing have different dates.',
    'ds-cs10': 'Gonet denied a close relationship with Vorcaro. He said the April 2024 meeting included other authorities and described the lawyer-mediated call as brief and mundane.',
    'ds-ff1': 'According to the article, Faria shared contact cards associated with Moraes’s name. The numbers are not reproduced.',
    'ds-ff2': 'Did you reply to Vivi?',
    'ds-ff3': 'The article describes an exchange about the duration of a contract with the Barci de Moraes law firm. Vorcaro asks about three years; Faria mentions four and accepts the three-year alternative.',
    'ds-ff4': 'The bald guy can’t be late',
    'ds-ff5': 'Faria said he suggested the firm for a case in the São Paulo courts, without meeting with the firm or knowing the agreed amounts.',
    'ds-cr1': 'The contract described by CNN provided for success fees in 12 lawsuits. The R$427 million figure corresponds to the scenario of winning, not a payment established by this excerpt.',
    'ds-cr2': 'CNN reports a message in which Camilla celebrates a court outcome and mentions a vote by Nunes Marques. The dossier gives June 3; this card retains the date precision verified in the text consulted.',
    'ds-cr3': 'Metrópoles publishes screenshots of messages and details of the contract. Consult the images in the original article; they have not been included as files in the app.'
  };
  const contexts = {
    martha: 'A selection of messages about business and public reaction. Intimate passages unrelated to that context were excluded. Martha denied knowing about the scheme under investigation or receiving the assets mentioned in the coverage. Statements about banks’ reactions reflect the account attributed to Vorcaro.',
    turma: 'Context only. The full source could not be opened during research, so we did not reconstruct dialogue from search snippets. The indexed Agência Brasil summary said it was seeking responses from the defense teams at publication. This does not establish that no later response exists.',
    stf_alexandre: 'This selection includes messages attributed by investigators to a contact associated with the justice. Moraes disputes the identification and interpretation. In a defense statement released on September 15, 2026, he disputed the alleged exchanges and said the material contained no message text authored by him. The March denial is also in the catalogue.',
    paulo_brb: 'Excerpts published in an article about the investigation. The exchanges alone do not establish that a crime occurred. In the article consulted, Vorcaro’s defense declined to comment, and the outlet said it had contacted Costa’s lawyers. No later response was verified for this selection.',
    bacen_operacoes: 'CNN reports a group created by Belline Santana with Vorcaro and Paulo Sérgio Neves de Souza. The source describes Federal Police suspicions and includes no defense response. This selection is not a finding of criminal liability.',
    desembargador_fasano: 'Identification from the articles; responses from Newton and Nunes Marques appear in the cards below.',
    flavio_bolsonaro: 'A short selection from the Intercept’s original reporting on financing Dark Horse. The full report and audio remain on the publisher’s website. After publication, Flávio Bolsonaro denied wrongdoing, according to AP. The existence of the messages alone does not establish criminal liability.',
    mario_frias: 'InfoMoney covers audio and messages published by the Intercept. We do not reproduce voices or create synthetic audio. InfoMoney records that Frias initially denied contributions from Vorcaro, then claimed a difference in interpretation about the formal source of the funds. Consult the article for context.',
    joao_doria: 'CNN published a short exchange and confirmation from Doria’s press office. The content of the subsequent call is not available in the article. His press office confirmed the exchange, dated it to May 2025 and described it as a gesture of courtesy before the case’s more serious public fallout.',
    ciro_soares: 'Excerpts from the conversation with Ciro, including third-party messages. Gonet denies closeness to Vorcaro and described the call as brief. Ciro denied wrongdoing in connection with the London photo.',
    fabio_faria: 'Messages mediating contacts, as reported by the Federal Police. Faria says he only suggested the firm, did not meet with it and did not know the amounts. Moraes disputes the attribution of the conversations.',
    camilla_ramos: 'Fees contingent on success. No statement from Camilla herself was located.'
  };
  const dictionary = {
    'Seleção editorial de reportagens':'Editorial selection of news reports', 'Resumo do caso reportado...':'Summary of the reported case...', 'Todas':'All', '💖 Peleleca & Íntimo':'💖 Peleleca & Personal', '💀 A Turma / Sicário':'💀 The Group / Sicário', '⚖️ STF & Poder':'⚖️ Supreme Court & Power', '🏛️ Congresso & Centrão':'🏛️ Congress & Centrão', '📑 Advocacia & Honorários':'📑 Lawyers & Fees', '📱 Projeto DV & Mídia':'📱 Project DV & Media', "🏨 Fasano & 'Na Minha Conta'":"🏨 Fasano & 'On My Tab'", '✈️ Jatinho & Cumbica':'✈️ Private Jet & Cumbica',
    'Acervo documental':'Documentary archive', '(Acervo)':'(Archive)', 'Banco Master • Fontes públicas':'Banco Master • Public sources', 'Fontes públicas':'Public sources',
    'PelelecApp - Acervo de Conversas Publicadas':'PelelecApp - Published Conversations Archive',
    'Revisão':'Review', 'Perícia:':'Forensic mode:', 'ATIVA':'ON', 'Modo Perícia':'Forensic mode',
    'Alternar Modo Escuro / Claro':'Switch dark / light mode', 'Sobre o PelelecApp':'About PelelecApp',
    'Ver critérios de revisão editorial':'View editorial review criteria', 'Exibir notas e fontes documentais':'Show documentary notes and sources', 'Exibir notas e fontes documentais; não recupera arquivos':'Show notes and sources; does not recover files',
    "Pesquisar conversa, 'peleleca', 'dívida'...":"Search conversations, 'peleleca', 'debt'...",
    'Acervo documental · somente leitura':'Documentary archive · read only', 'Carregando...':'Loading...', 'Fonte na Mídia':'News source', 'Ver matéria jornalística original':'View original news article', 'Ficha do Interlocutor':'Contact details', 'Clique para ver ficha documental e contexto jornalístico':'View documentary details and reporting context',
    'Dados do Interlocutor':'Contact details', 'Informação de contato':'Contact information', '🔍 Contexto e contraponto':'🔍 Context and responses', '📰 Reportagem de Referência':'📰 Reference article (original Portuguese)',
    'Não exibida: sem necessidade editorial':'Not displayed: no editorial need', 'Contexto e contraponto:':'Context and responses:',
    'Checagem Jornalística & Fonte':'Reporting & Source', 'Interlocutor:':'Contact:', 'Contato':'Contact', 'Veículo':'Publisher', 'Manchete':'Headline', 'Data':'Date', 'Ler Matéria Original ↗':'Read original article (Portuguese) ↗',
    'Revisão editorial • PelelecApp':'Editorial review • PelelecApp', 'CRITÉRIOS DOCUMENTAIS':'DOCUMENTARY CRITERIA', 'Operação Compliance Zero':'Operation Compliance Zero', 'Critérios desta seleção:':'Selection criteria:',
    'O PelelecApp organiza reportagens em formato de mensageiro. Citações, resumos e registros de mídia são identificados. Não representa acesso ao celular real.':'PelelecApp organizes news reporting in a messenger format. Quotes, summaries and media records are labeled. It does not represent access to the actual phone.',
    'O modo perícia começa ativo e mostra fontes por item. Não recupera mensagens ou imagens. Atribuições contestadas e respostas públicas aparecem no contexto da conversa.':'Forensic mode starts enabled and shows sources for each item. It does not recover messages or images. Disputed attributions and public responses appear in the conversation context.',
    'Retratos são escolhas editoriais, com créditos e licença na ficha do contato. Imagens genéricas anteriormente apresentadas como anexos foram retiradas.':'Portraits are editorial selections, with credits and licensing in the contact details. Generic images previously presented as attachments have been removed.',
    'Auditoria, fontes e pendências ↗':'Audit, sources and pending checks (Portuguese) ↗',
    'Acervo jornalístico — sem acesso ao aparelho. Retratos editoriais; não são avatares originais. Fontes e limites disponíveis em cada recorte.':'Journalistic archive — no access to the device. Editorial portraits, not original avatars. Sources and limitations accompany each excerpt. English quotations are translations; switch to PT for the original wording.',
    'Citação publicada':'Published quote · translated from Portuguese', 'Resumo editorial':'Editorial summary', 'Contexto':'Context', 'Mídia documentada':'Documented media', 'Verificação pendente':'Verification pending', '· trecho':'· excerpt', 'Horário não informado':'Time not reported',
    'Fonte do registro':'Record source', 'Consulte a reportagem completa e o contraponto dos citados.':'Read the full article and the responses of those mentioned.',
    'Revisão editorial — não é laudo oficial':'Editorial review — not an official forensic report', 'Consulta em 22/09/2026':'Consulted on 22 September 2026', 'Sem acesso ao aparelho':'No access to the device', 'Sem extração de dados':'No data extraction',
    'Cartões editoriais':'Editorial cards', 'Recuperações pelo app':'Recoveries by the app', 'Arquivos extraídos pelo app':'Files extracted by the app', 'Conversas na lista':'Conversations in the list',
    'Citações curtas e resumos identificados, com fonte por item.':'Short quotes and labeled summaries, with a source for each item.', 'Modo perícia exibe notas e fontes; não recupera arquivos.':'Forensic mode shows notes and sources; it does not recover files.', 'Datas e horários só aparecem na precisão informada pela reportagem.':'Dates and times retain the precision provided by the reporting.', 'Retratos editoriais com créditos; não são avatares originais.':'Credited editorial portraits, not original avatars.', 'Imagens genéricas removidas: não comprovam anexos das conversas.':'Generic images removed: they do not establish what was attached to conversations.', 'Falas não validadas aguardam pesquisa complementar.':'Unverified statements await further research.',
    '📷 Retrato editorial:':'📷 Editorial portrait:', 'Origem':'Source', 'Licença':'License', '· enquadramento circular':'· circular crop',
    'Nenhum contato ou mensagem encontrada para':'No contact or message found for',
    'Interlocutora em relatos sobre o banco':'Participant in accounts about the bank', 'Identificado na cobertura como “Sicário”':'Identified in reporting as “Sicário”', 'Contato atribuído · atribuição contestada':'Attributed contact · disputed attribution',
    'Henrique Vorcaro (Pai) 💼':'Henrique Vorcaro (Father) 💼', 'Patriarca & Operador Financeiro':'Patriarch & Financial Operator', 'Ex-presidente do BRB':'Former BRB president', 'Mesa de Operações & Captação CDB':'Trading Desk & Bank Deposit Funding', 'Acionista Majoritário SAF':'Majority Football Corporation Shareholder', 'Arthur Lira & Articulação 🏛️':'Arthur Lira & Political Coordination 🏛️', 'Articulação Política & CPIs':'Political Coordination & Parliamentary Inquiries', 'Advocacia Institucional 📑⚖️':'Institutional Legal Services 📑⚖️', 'Assessoria Jurídica Estratégica':'Strategic Legal Advice', 'Grupo Master':'Master Group', 'Grupo relatado: Vorcaro, Belline e Paulo Sérgio':'Reported group: Vorcaro, Belline and Paulo Sérgio', "Agência Mídia ('Projeto DV') 📱💸":"Media Agency ('Project DV') 📱💸", 'Operações de Narrativa & Ataques':'Narrative Operations & Attacks', 'Desembargador do TRF-1':'Federal appellate judge (TRF-1)', 'Piloto · identificação pendente':'Pilot · identification pending', 'Piloto Chefe / Frota Aérea Master':'Chief Pilot / Master Air Fleet', 'Cláudio Castro (Gov. RJ) 🏖️🍷':'Cláudio Castro (RJ Governor) 🏖️🍷', 'Governador & Aportes Previdenciários':'Governor & Pension Investments', 'Senador · mensagens sobre um filme':'Senator · messages about a film', 'Deputado · mensagens sobre um filme':'Congressman · messages about a film', 'Ex-governador de São Paulo':'Former governor of São Paulo', 'Advogado · mensagens encaminhadas':'Lawyer · forwarded messages', 'Ex-ministro das Comunicações':'Former communications minister', 'Advogada · contrato de honorários':'Lawyer · fee agreement',
    '📷 Duas fotos compartilhadas · arquivos indisponíveis':'📷 Two shared photos · files unavailable', 'O assunto: a operação com o BRB':'The topic: the BRB transaction', 'Vorcaro descreve tensão':'Vorcaro describes tension', 'A preocupação com a aprovação':'Concern about approval', 'A resposta de Martha':'Martha’s response', 'Relato de decisão judicial':'Report of a court ruling', 'Transcrição ainda não incorporada':'Transcript not yet included', 'Mensagens temporárias · 24 horas':'Disappearing messages · 24 hours', '🚫 Quatro mensagens apagadas · conteúdo indisponível':'🚫 Four deleted messages · content unavailable', 'Perguntas sobre a investigação':'Questions about the investigation', 'O que este recorte não demonstra':'What this excerpt does not establish', 'Documentação da operação':'Transaction documents', 'Visita e integração':'Visit and integration', 'Criação do grupo relatada':'Reported creation of the group', 'Limite e atribuição':'Limitation and attribution', 'Identificação na cobertura':'Identification in the reporting', 'Menções em conversas com terceiros':'Mentions in conversations with third parties', 'Contrapontos':'Responses', 'Vídeo de visualização única':'View-once video', 'Documentos e cobranças':'Documents and payment requests', 'A manifestação de Flávio':'Flávio’s response', 'Áudio publicado · ouvir no veículo':'Published audio · listen at the source', 'Outra troca sobre o projeto':'Another exchange about the project', 'Um convite para conversar':'An invitation to talk', 'Ligação relatada · conteúdo indisponível':'Reported call · content unavailable', 'Relato em áudio':'Audio account', '📷 Selfie compartilhada · ver na fonte':'📷 Shared selfie · view at the source', 'Mensagem encaminhada · atribuição da reportagem':'Forwarded message · attribution by the article', '📷 Londres · foto compartilhada':'📷 London · shared photo', 'Contraponto':'Response', 'Cartões de contato · números omitidos':'Contact cards · numbers omitted', 'Manifestação de Faria':'Faria’s response', 'Honorários condicionados ao êxito':'Fees contingent on success', 'Capturas publicadas · consultar na fonte':'Published screenshots · view at the source',
    'Ver fotografia publicada ↗':'View published photograph ↗', 'Ver fotografia na reportagem ↗':'View photograph in the article ↗', 'Ver capturas na reportagem ↗':'View screenshots in the article ↗', 'Ver na fonte ↗':'View at the source ↗', 'Crédito no veículo: Reprodução. Licença de republicação não verificada.':'Publisher’s credit: Reproduction. Republication license not verified.', 'Crédito: Reprodução / UOL. Licença de republicação não verificada.':'Credit: Reproduction / UOL. Republication license not verified.', 'Licença de reprodução das capturas não verificada.':'Screenshot reproduction license not verified.',
    'Divulgação · jogo no navegador':'Promotion · browser game', 'Divulgação · prints reais do jogo':'Promotion · actual game screenshots', 'Conteúdo promocional':'Promotional content', 'Site oficial do jogo · V2 beta':'Official game website · V2 beta', 'DIVULGAÇÃO':'PROMOTION', '📷 Conheça os personagens e o jogo':'📷 Meet the characters and see the game', 'VER ↗':'VIEW ↗', 'Abrir divulgação do Brasília Survivors':'Open Brasília Survivors promotion', 'Divulgação · Brasília Survivors':'Promotion · Brasília Survivors', 'Terminou de explorar o acervo? Conheça Brasília Survivors: escolha seu personagem e entre na arena.':'Finished exploring the archive? Discover Brasília Survivors: choose your character and enter the arena.', 'Escolha seu personagem':'Choose your character', 'A partida em ação':'The game in action', 'Seleção de personagens da V2 beta, com Biroliro selecionado.':'V2 beta character selection with Biroliro selected.', 'Biroliro na arena Resort Tayaya, com inimigos e um apoio ativo.':'Biroliro in the Resort Tayaya arena, with enemies and one active support.', 'Pronto para jogar?':'Ready to play?', '🕹️ JOGAR AGORA ↗':'🕹️ PLAY NOW ↗', 'Prints reais do site oficial · V2 beta · 22/09/2026.':'Actual screenshots from the official website · V2 beta · 22 September 2026.', 'Imagens: Brasília Survivors. Conteúdo promocional, fora do acervo documental.':'Images: Brasília Survivors. Promotional content, separate from the documentary archive.', 'Ampliar:':'Enlarge:', 'Divulgação do Brasília Survivors, separada do acervo documental. Capturas da versão V2 beta disponível no site oficial em 22/09/2026, reproduzidas a pedido do responsável pelo projeto.':'Brasília Survivors promotion, separate from the documentary archive. Screenshots of the V2 beta available on the official website on 22 September 2026, reproduced at the project owner’s request.',
    'Anexo':'Attachment', 'Enviar mensagem':'Send message', 'Voltar':'Back', 'Nome':'Name', 'Cargo / Função':'Position / Role', 'Transcrição pendente de verificação':'Transcript awaiting verification', 'Revisão editorial':'Editorial review'
  };
  Object.assign(dictionary, {
    'Selfie de Ciro Soares e Paulo Gonet publicada pela CNN Brasil':'Selfie of Ciro Soares and Paulo Gonet published by CNN Brasil',
    'Fotografia do encontro em Londres reproduzida pelo UOL no registro da conversa de Ciro':'Photograph of the London meeting reproduced by UOL in the record of Ciro’s conversation',
    'Imagem da publicação original':'Image from the original publication',
    'Imagem indisponível no momento. Consulte a reportagem abaixo.':'Image currently unavailable. See the article below.',

    'Pudim em combate · Brasília Survivors':'Pudim in combat · Brasília Survivors',
    'Mapa inicial de relatos; mencionar uma pessoa não comprova diálogo direto com ela.':'Initial overview of accounts; mentioning a person does not establish a direct conversation with them.',
    'Publica sequência datada de 30/03/2025. Os horários abaixo são os transcritos pelo veículo; fuso não informado.':'Publishes a sequence dated 30 March 2025. The times below are those transcribed by the outlet; no time zone is specified.',
    'A assessoria de Doria confirma o diálogo e situa o contato em maio de 2025. O print consultado pelo veículo não informa data.':'Doria’s press office confirms the exchange and dates it to May 2025. The screenshot consulted by the outlet has no date.',
    'Atribuição ao destinatário baseada na investigação relatada pela imprensa. Moraes contesta os diálogos.':'Attribution to the recipient is based on the investigation reported by the press. Moraes disputes the exchanges.',
    'Contraponto: Moraes contesta as supostas trocas e afirma que não há texto de mensagem de sua autoria no material.':'Response: Moraes disputes the alleged exchanges and says there is no message text authored by him in the material.',
    'Negativa contemporânea ao primeiro conjunto de divulgações; não confundir com a defesa de setembro.':'Denial issued around the first disclosures; distinct from the September defense statement.',
    'Relata ativação de exclusão automática em 24 horas em 17/09/2025. Não fornece contagem de mensagens apagadas para este MVP.':'Reports activation of automatic deletion after 24 hours on 17 September 2025. Does not supply a deleted-message count for this MVP.',
    'Contexto processual da data: sessão terminou sem decisão sobre a abertura da investigação. Não é conclusão de culpa ou inocência.':'Procedural context at that date: the session ended without a decision on opening the investigation. This is not a finding of guilt or innocence.',
    'Reportagem original com documentos, áudios e mensagens. Não representa o histórico integral dos envolvidos.':'Original reporting with documents, audio and messages. It does not represent the participants’ complete history.',
    'Registra a reação pública do senador após a divulgação das mensagens.':'Records the senator’s public reaction after the messages were disclosed.',
    'Cobertura que atribui o material ao Intercept. É fonte secundária e informa mudança de versão de Frias.':'Coverage attributing the material to the Intercept. This is a secondary source and reports a change in Frias’s account.',
    'Texto localizado no índice de busca; abertura integral falhou. Incluído apenas como contexto, sem reconstrução literal de diálogos.':'Text located in the search index; the full article could not be opened. Included as context only, without reconstructing literal dialogue.',
    'Referência adicional localizada no índice; não utilizada para transcrever mensagens.':'Additional reference located in the index; not used to transcribe messages.',
    'O veículo informa 20h48, horário de Brasília, em 17/11/2025. A atribuição do destinatário é contestada.':'The outlet gives 20:48 Brasília time on 17 November 2025. Attribution of the recipient is disputed.',
    'Relata envio de duas fotos em 19/05/2024. As imagens dos imóveis não foram identificadas na página consultada. Não usamos fotos genéricas como se fossem os anexos.':'Reports two photos sent on 19 May 2024. The property images were not identified on the page consulted. We do not use generic photos as though they were the attachments.',
    'A foto de abertura é uma montagem editorial; não deve ser confundida com a foto compartilhada com Mendonça.':'The opening photo is an editorial montage; it should not be confused with the shared photo with Mendonça.',
    'A página reproduz o registro com a fotografia. Crédito indicado: Reprodução. Licença de republicação não verificada; visualizar na origem.':'The page reproduces the record with the photograph. Stated credit: Reproduction. Republication license not verified; view at the source.',
    'Resumo jornalístico; o áudio de resposta de visualização única não é reproduzido neste acervo.':'News summary; the view-once audio reply is not reproduced in this archive.',
    'A reportagem apresenta suspeitas da investigação; não é sentença. A defesa de Vorcaro não comentou; o texto informa que procurou os advogados de Costa.':'The article presents suspicions under investigation, not a verdict. Vorcaro’s defense declined to comment; the text says Costa’s lawyers were contacted.',
    'São mensagens na conversa Ciro–Vorcaro; mensagens encaminhadas não constituem um chat direto com Gonet. Há divergências de grafia entre transcrições; não normalizamos silenciosamente.':'These messages appear in the Ciro–Vorcaro conversation; forwarded messages do not constitute a direct chat with Gonet. Transcriptions differ in spelling; we do not silently normalize them.',
    'Faria afirma ter sugerido o escritório, sem participar de reunião com a banca ou conhecer valores. Esta reportagem situa pedidos para apagar mensagens em novembro; CartaCapital e dossiê apontam abril. Esse trecho não recebeu data exata no acervo.':'Faria says he suggested the firm without meeting with it or knowing the amounts. This article dates requests to delete messages to November; CartaCapital and the dossier give April. That excerpt has no exact date in this archive.',
    'Honorários condicionados ao êxito, não prova de pagamento efetivado. Inclui as manifestações de Newton Ramos e Nunes Marques.':'Fees contingent on success, not evidence of a completed payment. Includes responses from Newton Ramos and Nunes Marques.',
    'Prints disponíveis no veículo; licença de reprodução das imagens não verificada.':'Screenshots available from the publisher; image reproduction license not verified.',
    'A matéria relata conclusões da PF. Não contém manifestação das defesas; isso não significa ausência de resposta posterior.':'The article reports Federal Police conclusions. It contains no defense response; that does not mean no later response exists.',
    'Página 1 conferida visualmente: quatro marcadores de exclusão em 01/10/2025 e configuração de 24 horas. O conteúdo apagado não aparece. O PDF contém telefone; não reproduzimos a página nem o número. A atribuição a Moraes é contestada.':'Page 1 visually checked: four deletion markers on 1 October 2025 and a 24-hour setting. The deleted content is not shown. The PDF contains a phone number; we reproduce neither the page nor the number. Attribution to Moraes is disputed.'
  });

  for (const contact of window.PELELEC_DATA.contacts) {
    if (contexts[contact.id]) dictionary[contact.contextSummary] = contexts[contact.id];
    else if (contact.messages.every(m=>m.editorialType==='pending')) dictionary[contact.contextSummary] = pending;
    for (const message of contact.messages) dictionary[message.text] = messages[message.id] || (message.editorialType === 'pending' ? pending : message.text);
  }
  const escapeRE = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Longest first, one pass: translated text is never translated again.
  const pattern = new RegExp(Object.keys(dictionary).sort((a,b)=>b.length-a.length).map(escapeRE).join('|'), 'g');
  const months = {janeiro:'January',fevereiro:'February',março:'March',abril:'April',maio:'May',junho:'June',julho:'July',agosto:'August',setembro:'September',outubro:'October',novembro:'November',dezembro:'December'};
  let locale = 'pt';
  const originals = new WeakMap();
  let observer;
  function text(value) {
    if (locale !== 'en') return value;
    let result = String(value).replace(pattern, match => dictionary[match]);
    result = result.replace(/(\d{1,2})º? de (\w+|março) de (\d{4})/g, (_,day,month,year)=>months[month] ? `${day} ${months[month]} ${year}` : _);
    result = result.replace(/\b(Janeiro|Fevereiro|Março|Abril|Maio|Junho|Julho|Agosto|Setembro|Outubro|Novembro|Dezembro|janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro) de (\d{4})/g,(_,m,y)=>`${months[m.toLowerCase()]} ${y}`);
    return result.replace(/resposta pública/g,'public response').replace(/resposta publicada/g,'published response').replace(/contexto posterior/g,'later context').replace(/publicação/g,'publication').replace(/Pesquisa de /g,'Research on ').replace(/Review de /g,'Review on ').replace(/segundo a assessoria/g,'according to the press office').replace(/datas variam por registro/g,'dates vary by record').replace(/dia não conferido na reportagem textual/g,'day not verified in the article text').replace(/manifestação/g,'statement').replace(/· envio/g,'· sent').replace(/· fotografia/g,'· photograph').replace(/atualizada em/g,'updated on');
  }
  function translateNode(node, key, read, write) {
    const current = read();
    const state = originals.get(node) || {};
    if (!state[key] || current !== state[key].translated) state[key] = {original:current};
    const translated = text(state[key].original);
    state[key].translated = translated;
    originals.set(node,state);
    if (current !== translated) write(translated);
  }
  function apply() {
    if (observer) observer.disconnect();
    const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while(walk.nextNode()) {
      const node=walk.currentNode;
      if (node.parentElement.closest('script,style,[data-no-translate]')) continue;
      translateNode(node,'text',()=>node.nodeValue,value=>node.nodeValue=value);
    }
    document.querySelectorAll('[title],[placeholder],[aria-label],img[alt]').forEach(node=>{
      for(const attribute of ['title','placeholder','aria-label','alt']) if(node.hasAttribute(attribute)) translateNode(node,attribute,()=>node.getAttribute(attribute),value=>node.setAttribute(attribute,value));
    });
    document.documentElement.lang = locale === 'en' ? 'en' : 'pt-BR';
    document.title = text('PelelecApp - Acervo de Conversas Publicadas');
    document.querySelectorAll('[data-language]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.language===locale)));
    if(observer) observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['title','placeholder','aria-label','alt']});
  }
  function setLanguage(next) {
    locale = next === 'en' ? 'en' : 'pt';
    try { localStorage.setItem('pelelec-language',locale); } catch (_) { /* Private browsing may disable storage. */ }
    if (window.PelelecApp?.searchQuery) window.PelelecApp.renderContacts();
    apply();
  }
  window.PelelecI18n={text,apply,setLanguage,get locale(){return locale;},messages};
  document.addEventListener('DOMContentLoaded',()=>{
    try { locale = localStorage.getItem('pelelec-language') === 'en' ? 'en' : 'pt'; } catch (_) {}
    document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.language)));
    observer = new MutationObserver(apply);
    apply();
  });
})();
