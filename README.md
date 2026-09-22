# PelelecApp

Acervo jornalístico em formato de mensageiro. Sem acesso ao celular real ou autenticação independente de arquivos.

- Modo perícia ativo por padrão: exibe fontes e notas editoriais.
- Citações curtas, resumos identificados e contrapontos.
- Retratos editoriais com origem/licença; iniciais quando não verificados.
- Conversas pendentes não exibem falas não validadas.
- Nenhuma resposta automática atribuída a pessoas reais.

A estrutura visual e os dois arquivos CSS da versão e56af75 foram preservados. Textos e comportamento documental foram revisados.

## Executar

`python3 -m http.server 4174 --bind 127.0.0.1`

Abrir http://127.0.0.1:4174

## Verificar

`node --test tests/editorial.cjs`

[Auditoria e fontes](docs/auditoria.md). A pesquisa complementar e novas fotos compartilhadas ainda estão pendentes. A licença MIT do código não substitui as licenças próprias das fotografias.
