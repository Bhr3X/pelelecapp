# PelelecApp

Acervo jornalístico em formato de mensageiro. Sem acesso ao celular real ou autenticação independente de arquivos.

- Modo perícia ativo por padrão: exibe fontes e notas editoriais.
- Citações curtas, resumos identificados e contrapontos.
- Retratos editoriais com origem/licença; iniciais quando não verificados.
- Conversas pendentes não exibem falas não validadas.
- Nenhuma resposta automática atribuída a pessoas reais.

A estrutura visual da versão e56af75 foi preservada. Tema claro padrão, com ajustes pontuais de contraste. Textos e comportamento documental foram revisados.

## Executar

`python3 -m http.server 4174 --bind 127.0.0.1`

Abrir http://127.0.0.1:4174

## Verificar

`node --test tests/editorial.cjs tests/expanded.cjs tests/i18n.cjs tests/threads.cjs`

[Threads](threads.html): o caso na imprensa, dia a dia ([como funciona](docs/threads.md)).

[Auditoria e fontes](docs/auditoria.md). O dossiê recebido foi indexado; 26 cartões foram incorporados após consulta às fontes. [Cobertura e limites](docs/incorporacao-dossie.md). A verificação integral dos demais registros e licenças das fotos compartilhadas permanece pendente. A licença MIT do código não substitui as licenças próprias das fotografias.
