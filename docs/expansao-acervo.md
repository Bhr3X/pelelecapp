# Expansão do acervo — 22/09/2026

Esta página registra a primeira expansão (1.197 cartões). A rodada seguinte acrescentou 45 transcrições: totais atuais e limites em [Comparação MasterWhats](comparacao-masterwhats.md).

## Publicação autorizada

O usuário autorizou expressamente publicar a base ampliada e sobrepor a proibição de deploy da pasta de pesquisa. As demais regras documentais e de privacidade foram preservadas.

## Cobertura desta versão

| Medida | Total |
|---|---:|
| Conversas com registros da pesquisa | 68 |
| Entradas antigas ainda pendentes | 6 |
| Entradas na lista, sem publicidade | 74 |
| Registros da pesquisa incorporados | 1.142 |
| Eventos cronológicos da pesquisa | 3 |
| Complementos editoriais e cartões pendentes | 52 |
| Total de cartões | 1.197 |
| Fotos, capturas e documentos ilustrados | 12 |
| Conversas entre terceiros | 7 |
| Registros de baixa confiança excluídos pelo build de origem | 32 |

Cartões não equivalem a mensagens originais únicas. Complementos editoriais podem resumir registros já existentes. As 68 conversas da pesquisa incluem grupos e diálogos entre terceiros; não são 68 interlocutores diretos de Vorcaro.

## Origem e transformação

O build da pesquisa fornecida foi executado e passou no seu validador: nenhuma mensagem descartada por ausência de fonte, 32 registros de baixa confiança excluídos do aplicativo, 249 duplicações reunidas e uma exclusão da curadoria. A exportação sanitizada ficou em `data/research-snapshot.json`; não foram publicados os arquivos brutos da pesquisa nem PDFs com dados pessoais.

`node tools/build-archive.mjs` transforma essa exportação para o esquema do site. Os testes comparam o texto e as referências dos 1.145 registros/eventos contra a exportação: nenhum texto foi completado, normalizado ou reescrito. Horários só são exibidos quando a precisão do dado é `minute`; datas aproximadas permanecem assinaladas.

A seleção anterior está em `data/editorial-base.json`. Fotos já aprovadas e complementos úteis foram preservados, sem somá-los como novas mensagens originais da pesquisa. A fotografia de Londres mantém o enquadramento completo. Londres, selfie e alfaiataria usam os arquivos locais previamente fornecidos pela pesquisa; as nove imagens editoriais adicionais continuam nas URLs dos veículos.

## Conferência e limites

Os estados de verificação recebidos são exibidos, sem promovê-los a autenticação independente:

- 542 conferidas na fonte;
- 139 conferidas com tolerância;
- 45 transcritas de imagem de documento;
- 13 transcritas de imagem publicada;
- uma parcial;
- 405 sem conferência literal registrada (incluem respostas curtas, relatos, anexos, exclusões e eventos).

A existência de um link não prova a autenticidade de uma mensagem nem a disponibilidade permanente da reportagem. Não houve nova conferência manual integral das 429 fontes da pesquisa nesta migração. Estados de conferência são herdados da pesquisa fornecida. Não declaramos que o acervo abrange todas as mensagens atualmente públicas.

Transcrições importadas ficam no português original inclusive na interface inglesa, com aviso visível. Isso evita apresentar traduções como texto original. Os complementos editoriais que já tinham inglês continuam traduzidos.

## Comportamento preservado ou acrescentado

- Visual existente, tema claro e perícia ativa por padrão.
- Fontes acessíveis em todo registro documentado, inclusive com a perícia desativada.
- Contexto e outro lado visíveis no início das conversas ampliadas.
- Remetentes em grupos; aviso e balões à esquerda em conversas entre terceiros.
- Notas, visualização única, exclusões e recuperações atribuídas à PF identificadas separadamente.
- Variantes, referência de página, contexto e grau de conferência nos detalhes do registro.
- Publicidade somente ao fim da lista completa, com Pudim e prints do jogo preservados.

## Validação

- Build e validador da origem aprovados.
- 18 testes de integração/editoriais/i18n aprovados, incluindo fidelidade de texto, procedência, privacidade, horários e atribuições.
- 74 entradas abertas no navegador local: 1.197 cartões renderizados, sem erros de console.
- Busca por `divida de vida` encontra o contato atribuído a Moraes.
- Fonte documental e detalhes de A1-m12 conferidos; status parcial permanece explícito.
- PT/EN mantém a mesma transcrição; temas claro e escuro conferidos.
- Viewport móvel 375 × 812: nenhum overflow horizontal na conversa verificada.

## Resumo por arquivo

| Arquivo | Responsabilidade |
|---|---|
| `data/research-snapshot.json` | Exportação sanitizada da base fornecida |
| `data/editorial-base.json` | Seleção anterior, para preservar complementos e mídias |
| `tools/build-archive.mjs` | Conversão reproduzível, sem reescrever mensagens |
| `js/data.js` | Acervo gerado, 74 entradas e 1.197 cartões |
| `js/app.js` | Metadados, variantes, atribuições e outro lado |
| `js/i18n.js` | Novos rótulos e preservação do texto original |
| `css/style.css` | Legibilidade dos metadados e quebra de textos longos |
| `assets/media/` | Três fotografias documentais provenientes da pesquisa |
| `index.html` | Versão dos recursos para atualizar o cache |
| `tests/` | Invariantes editoriais, fidelidade e tradução |
| `AGENTS.md` | Registro da autorização de publicação e regras da integração |

Capturas locais: `outputs/expanded-desktop-details.png`, `outputs/expanded-desktop-dark.png`, `outputs/expanded-mobile-light.png`, `outputs/expanded-mobile-dark.png`, `outputs/expanded-third-party.png`.
