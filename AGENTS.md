# PelelecApp

## Invariants
- Interface documental com português padrão e inglês opcional (pedido do usuário em 22/09/2026); nunca se apresentar como acesso ao celular real.
- Não inventar falas, respostas, datas, chamadas, exclusões ou recibos de leitura atribuídos a pessoas reais.
- Cada item editorial tem fonte pública, classificação e data com precisão explícita.
- Alegações e atribuições contestadas devem trazer contexto e contraponto acessível.
- Distinguir transcrição curta, resumo editorial, mídia de visualização única e conteúdo indisponível.
- Fotos somente com procedência e licença verificadas; manter créditos. Iniciais quando não houver foto aprovada.
- Não incluir telefones, endereços privados, intimidade sexual ou dados de terceiros sem interesse público.

## Defaults aprovados pelo usuário em 22/09/2026
- MVP local em HTML/CSS/JavaScript, sem backend ou dependências de execução.
- Layout responsivo inspirado em mensageiro, fontes por item, busca e filtros.
- Informar separadamente implementação, verificação, commit, push e publicação.

## Exceção solicitada em 22/09/2026
- O usuário pediu que as fotos publicadas correspondentes aos registros apareçam nos balões. Podem ser incorporadas das URLs dos veículos após conferência visual e de contexto, com crédito, fonte e estado de direitos explícito. Isso não declara licença aberta nem autoriza substituir anexos ausentes por imagens genéricas.

## Expansão autorizada em 22/09/2026
- O usuário autorizou explicitamente publicar o acervo ampliado e sobrepor a regra de não publicar do projeto de pesquisa Open Master Whats. Permanecem as invariantes documentais e de privacidade.
- `data/research-snapshot.json` é a exportação sanitizada do build da pesquisa fornecida. Não publicar `research/raw` nem PDFs brutos com dados pessoais.
- `node tools/build-archive.mjs` adapta essa base e os complementos de `data/editorial-base.json` para `js/data.js`, sem reescrever mensagens.
- Textos documentais importados ficam no português original em ambos os idiomas da interface, com aviso explícito no inglês. Não apresentar tradução automática como transcrição original.
- Contagens distinguem registros da pesquisa, eventos, complementos editoriais e conversas pendentes. Não declarar completude das mensagens públicas.
