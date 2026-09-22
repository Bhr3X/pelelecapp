# Verificação — 22/09/2026

- Cinco testes Node aprovados: referências, pendências, licenças, limite de citações, escape HTML, ausência de respostas inventadas e contraponto de Moraes.
- Sintaxe de app.js e forensic.js verificada pelo Node.
- CSS idêntico à base e56af75.
- Navegador local: modo perícia ativo no carregamento desktop e móvel (390 × 844); alternância pelo botão móvel observada.
- Quatro imagens de perfil carregadas (naturalWidth > 0): Moraes, Doria, Flávio e Frias.
- Clique no botão de fonte abriu a matéria correta da defesa de Moraes no modal.
- Visual desktop e móvel inspecionado. Cabeçalho móvel mantém truncamento de nomes longos da estrutura existente.
- Não é teste em aparelho físico, nem autenticação das conversas.

## Dossiê e tema claro

- Oito testes Node aprovados após a incorporação.
- Navegador confirmou tema light e perícia aria-pressed=true no carregamento e após recarga.
- Alternância para tema escuro observada; a recarga retorna ao claro.
- Ciro: dez cartões e dois links para fotografias nas fontes renderizados.
- Ajustes de cor corrigem contraste dos metadados/selos no tema claro e links nos cartões de mídia.
- Esta rodada não revalida individualmente todos os registros do dossiê.

## Divulgação ao fim da lista — 22/09/2026
- Banner superior removido. Divulgação adicionada depois dos 20 contatos, somente na lista completa e sem busca.
- Conversa promocional independente do acervo, com capturas reais da seleção e da partida da V2 beta; procedência em `assets/promo/README.md`.
- Navegador: anúncio abaixo da área visível inicial; duas imagens carregadas; CTA amarelo; botão de fonte jornalística oculto na divulgação.
- Emulação de 390 px: sem transbordamento horizontal, imagens com cerca de 304 px, CTA com 44 px de altura; perícia ativa. Não equivale a teste em aparelho físico.
- Nove testes editoriais/funcionais, verificação de sintaxe e diff sem erros.

## PT/EN — 22/09/2026
- Seletor PT/EN no cabeçalho da lista e no chat móvel; português padrão, preferência salva localmente. Sem serviço externo de tradução.
- Interface, 68 cartões, contexto, notas e divulgação traduzidos. Citações em inglês identificadas como traduções; voltar a PT restaura o texto original. Títulos bibliográficos, documentos externos e textos dentro dos prints permanecem no idioma da fonte.
- Dados documentais e URLs preservados; busca aceita o texto traduzido no idioma ativo.
- Navegador: persistência após recarregar, busca por “foreign investors”, modal de fonte, retorno PT/EN e alternância da perícia conferidos. Emulação de 390 px sem transbordamento; botão de fonte compacto para acomodar o seletor.
- 13 testes passaram, incluindo cobertura de todas as mensagens, restauração exata de textos e armazenamento indisponível.

## Fotos compartilhadas inline — 22/09/2026
- ds-cs6: selfie identificada e conferida visualmente no corpo da reportagem da CNN (legenda Ciro Soares / Paulo Gonet). O nome inesperado do arquivo de CDN não foi usado como evidência de conteúdo.
- ds-cs9: fotografia de Londres conferida no corpo da reportagem do UOL indicada no cartão.
- Ambas incorporadas pelas URLs observadas, sem edição, com crédito, alt PT/EN, link à reportagem e aviso de indisponibilidade em caso de falha. Direitos de republicação continuam não verificados; não se declara licença aberta. Inclusão inline solicitada explicitamente pelo usuário.
- Navegador: ambas carregaram no balão; em 390 px, largura aproximada de 304 px, sem transbordamento horizontal. Os arquivos dependem dos servidores dos veículos.
- Outros arquivos não localizados não foram substituídos por imagens genéricas.
- 14 testes passaram; sintaxe e diff sem erros.
