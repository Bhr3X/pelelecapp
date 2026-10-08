# Recomendação do criador — 08/10/2026

## O que mudou

A divulgação do Brasília Survivors deixou de se apresentar como contato e conversa.
Uma recomendação identificada como **Do mesmo criador · Jogo satírico** aparece no
fim da lista completa e em **Sobre o PelelecApp**. Não aparece nas buscas ou
categorias do acervo. O botão abre o jogo em outra aba e preserva a leitura atual.

A recomendação usa as cores do tema ativo e oferece português e inglês. O domínio,
a indicação de jogo no navegador sem instalação e a separação entre ficção e acervo
ficam visíveis. Não há sobreposição automática, som, animação ou download.

## Imagem

`assets/promo/brasilia-menu-20261008.png` é uma captura real da produção do Brasília
Survivors em 08/10/2026, com 390 × 844 pixels. Foi copiada integralmente de
`IMAGENS/01-MENU-ATUAL-PRODUCAO.png` do pacote de divulgação autorizado pelo criador.
A imagem é exibida inteira, sem corte. Crédito: Brasília Survivors. A captura não
contém pontuações ou posições de ranking simuladas.

## Atribuição e limites de medição

O link usa somente estes parâmetros estáticos:

- `utm_source=pelelecapp`
- `utm_medium=referral`
- `utm_campaign=do_mesmo_criador`
- `utm_content=about` ou `utm_content=list`

Nenhum contato, termo de busca, identificador do leitor ou conteúdo do acervo entra
no link. Valores de placement fora de `about` e `list` são rejeitados. O destino é
fixo: `https://brasiliasurvivors.com.br/`.

O PelelecApp não possui coletor de analytics neste checkout; nenhum foi adicionado.
Os parâmetros permitem atribuir **chegadas** no destino se o jogo as registrar.
Eles não medem impressões ou cliques originados aqui, nem comprovam uma conversão.
A contagem de chegada também não é um denominador de taxa de clique.

## Verificação local

- `node --test tests/*.cjs`: 29 testes passaram.
- Chromium: 390 × 844, 320 × 740 e 1280 × 900.
- Português/inglês; temas claro/escuro; sem overflow horizontal nos cartões.
- Captura completa carregada; link abre outra aba com atribuição esperada.
- Conversa selecionada e dados serializados do acervo preservados após navegar.
- Botão com altura mínima de 44 pixels; busca não incorpora a recomendação.
- Sem erros JavaScript nos cenários exercitados.

Evidências locais e roteiro: `scratch/creator-cross-promo/` (ignorado pelo Git).
Não foi testado em um aparelho físico. Estes resultados são de preview local;
commit, push, revisão e publicação são etapas separadas.
