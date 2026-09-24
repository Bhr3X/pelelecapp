# Threads: o caso na imprensa, dia a dia

Página `threads.html`. Cada dia reúne o que as fontes do acervo publicaram, com link para o original.

| Bloco | De onde vem |
|---|---|
| Na linha do tempo | `timeline` da pesquisa, só fatos com fonte |
| Na imprensa | Toda fonte com data de dia exato: as do acervo e a cobertura que não sustenta registro (`press`) |
| Primeira aparição | Registros cuja fonte mais antiga no acervo é desse dia |

Regras:

- Manchetes são os títulos das próprias fontes, no original, também na versão em inglês.
- Nenhum texto é atribuído a pessoas. Fatos da linha do tempo são resumos editoriais com fonte.
- "Primeira aparição" é relativa ao acervo: outro veículo pode ter publicado antes.
- Fontes só com mês (ex.: `2026-09`) ficam fora da página.

## Varredura de 23/09/2026

Duas varreduras de imprensa (19 a 23/09 e lacunas de 01 a 18/09) entraram na pesquisa como fontes e fatos:

- 55 fontes novas (58 coletadas, 3 já existiam);
- 20 fatos novos na linha do tempo (de 59 para 79).

Três itens foram conferidos direto na fonte:

- a mensagem de Warde e a nota do Planalto (Poder360);
- a ordem de Fux ao Senado (CNN Brasil);
- a reativação do MasterWhats (Gazeta do Povo).

As mensagens novas encontradas (37) não entraram no acervo. Aguardam revisão editorial e conferência na fonte.

A festa de 31/10/2023 (piauí, 11/09) ficou de fora: a cobertura tem conotação sexual.

## Verificar

`node --test tests/threads.cjs`
