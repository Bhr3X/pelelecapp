# Comparação MasterWhats — 22/09/2026

## Resultado

45 transcrições adicionais, conferidas visualmente nas figuras do relatório IPJ-A nº 3298613/2026, foram selecionadas em seis conversas. São trechos adicionais de episódios, não 45 novos fatos ou prova independente de autenticidade do aparelho.

| Conversa | Transcrições adicionadas |
|---|---:|
| Ana Matos | 13 |
| Fábio Faria | 10 |
| Angelo Silva | 8 |
| Fabiano Zettel | 7 |
| Alberto Felix | 4 |
| Romy | 3 |

A base passa a 1.187 registros documentais, três eventos e 52 complementos/cartões pendentes: 1.242 cartões em 74 entradas (68 conversas documentadas, seis pendentes). As 12 imagens existentes foram preservadas. Não foram adicionadas imagens nem fotos de perfil nesta rodada.

## Origem e método

Descoberta: [MasterWhats/Arkanto](https://arkanto.company/vorcaro/vorcazap/), espelho do projeto [MasterZap de Rafael Bressan](https://github.com/rafaelbressan/masterzap).

O export contém 66.387 registros: 65.772 atribuídos à conversa com Martha e 615 transcrições do relatório em outras 23 conversas. Esses números descrevem o export externo, não o conteúdo publicado no PelelecApp nem mensagens autenticadas independentemente.

A comparação preliminar de textos normalizados encontrou 99 candidatos fora da conversa com Martha. Foram conferidas figuras das páginas 149, 151, 152, 153, 156, 157, 191, 192, 194 e 198 no [PDF em alta resolução](https://raw.githubusercontent.com/rafaelbressan/masterzap/main/data/source/IPJ-A-3298613-2026.pdf). Das figuras selecionadas, 45 textos com data, remetente e interesse público foram admitidos. Resumos equivalentes já existentes não receberam uma segunda transcrição nesta rodada. Dados bancários, telefones, endereços e detalhes privados não foram incorporados.

Os outros 54 candidatos não foram admitidos nesta rodada: incluem equivalências com resumos existentes, material privado, fragmentos pouco informativos e trechos ainda sem conferência visual concluída. Isso não é uma classificação definitiva de cada um deles. A detecção por similaridade é preliminar e pode omitir variantes; não prova completude.

O arquivo local `research-downloads/masterwhats-export.zip` fica fora do repositório publicado: 4.470.212 bytes, 69 arquivos, teste de integridade ZIP aprovado. Hash SHA-256: `9db5f4167f9c6c684fafe0dd8dfafc5963343a03d92fa3de02e2dde308da5e45`.

PDF usado na conferência: 218 páginas, SHA-256 `23cfdfa410c47ab09cbb2b443965e3a3095d9bc3dc5fb266efff76d6f5192b60`, igual ao hash declarado pelo export. Isso identifica o arquivo utilizado; não autentica seu conteúdo.

## Limites da conversa com Martha

A fonte externa descreve esse conjunto como vazamento de março de 2026, sem documento-base ou hash correspondente. Uma busca temática preliminar localizou 62 candidatos por palavras-chave; não é uma revisão integral dos 65.772 registros. Não houve importação automática. Permanecem necessários cotejo com fontes publicadas, deduplicação, conferência de atribuições e exclusão de intimidade e dados de terceiros.

## Arquivos e validação

- `data/additional-records.json`: seleção sanitizada, textos, autoria, data, página, figura, contexto e proveniência; marca encaminhamentos quando presentes. Sem export bruto.
- `tools/build-archive.mjs`: incorpora a seleção sem alterar o snapshot anterior; rejeita IDs repetidos e conversas ausentes; preserva ordem relativa dos registros anteriores.
- `js/data.js`: saída gerada.
- `tests/expanded.cjs`: fidelidade dos dois insumos, atribuição, ausência de duplicata exata na mesma data/remetente, privacidade e referências.
- `index.html`: versão de cache atualizada; sem alteração de layout.

Build executado; 19 testes passaram. No navegador local, as seis conversas exibiram os 45 novos registros, sem erros de console. Inspecionados o balão e os detalhes de `MW-fabiano-zettel-4`, com página 149 e figura 148. Captura: `outputs/additional-records-verified.png`. Conferência visual é cotejo com o documento publicado, não perícia independente.
