# Diversidade das fontes

Página `diversidade.html`. Todos os números são calculados no navegador a partir de `js/data.js`, então se atualizam junto com os dados.

| Bloco | O que mede |
|---|---|
| Fontes por grupo | Cada link conta uma vez. Documento oficial (PF, STF, PGR) conta como "oficial", mesmo hospedado por um veículo |
| Quanto do acervo depende de cada grupo | Registros que citam ao menos uma fonte do grupo |
| Concentração | Participação dos 3 e dos 10 maiores veículos; índice HHI (0 a 10.000) |
| Os dois lados em cada fato | Fatos da linha do tempo com fontes de direita e de esquerda, só de um lado ou de nenhum |
| Veículo a veículo | Fontes, documentos, registros e fatos por veículo, com o grupo atribuído |

A classificação dos veículos é editorial e fica em `js/veiculos.js`. Veículo sem linha editorial clara fica como "não classificado". Correções entram por issue.

## Revista Oeste e Gazeta do Povo (23/09/2026)

Entraram 120 fontes (Oeste 65, Gazeta 55), ligadas a 64 fatos da linha do tempo. As ligações de confiança média ficam só como cobertura.

A Gazeta foi conferida com a página aberta. A Oeste bloqueia leitura automatizada: título, data, autor e URL foram conferidos no feed oficial de busca do próprio site, sem abrir o texto.

Resultado:

- a direita passou de 16% para 29% das fontes;
- a esquerda está em 10%;
- os fatos com os dois lados passaram de 17 para 25.

A página mostra esse desequilíbrio como ele é.

## Verificar

`node --test tests/diversidade.cjs`
