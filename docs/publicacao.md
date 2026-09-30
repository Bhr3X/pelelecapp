# Publicação completa do PelelecApp

Em 30/09/2026, o usuário autorizou permanentemente: "Quero que o processo sempre seja de deploy completo, incluindo merge!" A autorização cobre a versão sanitizada do PelelecApp. Procedência pública, precisão das datas, contraponto e privacidade continuam obrigatórios; `research/raw` e PDFs brutos não são publicáveis.

| Etapa | Prova necessária |
|---|---|
| Cobertura | Checagem até o dia/horário atual em Brasília; veículos e lacunas registrados |
| Revisão | Texto conferido na fonte; literal/relato e precisão identificados; contraponto e sanitização |
| Build | Snapshot cumulativo, `node tools/build-archive.mjs`, versões de cache derivadas de `js/data.js` em ambas as páginas |
| Verificação | `node --test tests/*.cjs` aprovado; navegador local desktop/móvel com o item novo e fontes |
| Commit e push | SHA revisada disponível na branch remota |
| Merge | PR cumulativo revisado incorporado à main; SHA remota confirmada |
| Deploy | Run de GitHub Pages da mesma SHA concluído com sucesso |
| Publicação | Hashes/versões públicas correspondem à revisão; navegador público desktop/móvel mostra o item correto |

GitHub Pages publica `main` na raiz `/`: https://bhr3x.github.io/pelelecapp/. Cada atualização de dados carrega a pesquisa cumulativa. Confirme por IDs de registros, fontes e fatos quais PRs antigos estão incluídos; publique uma atualização e feche os PRs de dados substituídos após a conferência pública. PRs de funcionalidades independentes têm revisão própria.

Se não houver nova notícia admitida, ainda confira atualizações pendentes e a versão pública. Registre "checado até [horário BRT], sem novos itens admitidos" e as lacunas; não avance a data do acervo para simular novidade. A data da mensagem e a data da reportagem têm significados distintos.

Para verificar o deploy, use `gh run list --repo Bhr3X/pelelecapp` e acompanhe o run correspondente à SHA resultante do merge. Compare os bytes públicos de `js/data.js`, `index.html` e `threads.html`, baixados com cache-buster, com os arquivos dessa revisão. Em ambas as páginas, o parâmetro de versão de `js/data.js` deve corresponder ao conteúdo gerado pelo build.

No navegador público, confira o novo registro, a fonte, o contraponto e a data em Threads, em desktop e em largura móvel. Registre o que foi observado; testes e hashes não substituem essa conferência.

Falha ou permissão negada interrompe o estágio dependente. Informe a ação, a causa, o último estado confirmado, PR/run/SHA e o próximo passo. Commit, push, PR e merge isolados não justificam anunciar publicação.

A automação nativa do Codex `pelelecapp-atualiza-o-e-publica-o-a-cada-6h` foi confirmada ACTIVE em 30/09/2026 e executa a cada seis horas na tarefa atual. É a única responsável pelo agendamento. A interface Routines do Claude mostrou nenhuma rotina; seu arquivo legado `~/.claude/scheduled-tasks/pelelecapp-atualizacao-6h/SKILL.md` é referência, não prova de execução. Não habilite uma segunda rotina. O handover detalhado permanece na pesquisa local: `HANDOVER-ATUALIZACOES.md`.
