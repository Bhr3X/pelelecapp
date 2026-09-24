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

Três varreduras entraram na pesquisa como fontes e fatos: imprensa de 19 a 23/09, lacunas de 01 a 18/09 e diversificação de veículos por fato.

- 168 fontes novas: de 477 para 645 na pesquisa (668 na página, contando documentos do acervo editorial);
- 20 fatos novos na linha do tempo (de 59 para 79);
- 92 ligações novas entre fatos e veículos. As 17 de confiança média ficam só como cobertura, não como fonte do fato;
- Poder360, CNN Brasil e Metrópoles caíram de 42% para 35% das fontes. Entraram mais Revista Oeste, Gazeta do Povo, O Antagonista, Jovem Pan, Agência Brasil, Brasil de Fato, CartaCapital e Agência Pública.

Não foi possível ler g1, Folha, Estadão, O Globo, Veja, UOL, Valor, piauí, BBC, DW, Reuters e AP diretamente (bloqueio ou falta de indexação).

Três itens foram conferidos direto na fonte:

- a mensagem de Warde e a nota do Planalto (Poder360);
- a ordem de Fux ao Senado (CNN Brasil);
- a reativação do MasterWhats (Gazeta do Povo).

As mensagens novas encontradas (37) não entraram no acervo. Aguardam revisão editorial e conferência na fonte.

A festa de 31/10/2023 (piauí, 11/09) ficou de fora: a cobertura tem conotação sexual.

## Verificar

`node --test tests/threads.cjs`
