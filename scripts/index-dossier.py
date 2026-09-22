"""Indexa referências e linhas do dossiê sem copiar suas transcrições para publicação."""
import sys,re,json,hashlib
from pathlib import Path
source=Path(sys.argv[1]); raw=source.read_bytes(); lines=raw.decode().splitlines()
entries=[]; section=''; current=None; active=False
for number,line in enumerate(lines,1):
 if line=='## Conversas, contato a contato':active=True
 elif active and line.startswith('## '):active=False
 if not active:continue
 if line.startswith('#### '):section=line[5:]
 if re.match(r'^\*\*.+?\*\* · \*\*\[',line):
  current={'section':section,'line':number,'classification':re.search(r'\[([^]]+)\]',line).group(1),'refs':[]}
  entries.append(current)
 if current:
  for ref in re.findall(r'`([A-Z]\d?-m\d+)`',line):
   if ref not in current['refs']:current['refs'].append(ref)
out={'file':source.name,'sha256':hashlib.sha256(raw).hexdigest(),'declaredMessages':865,'indexedRecords':len(entries),'sections':len(set(e['section'] for e in entries)),'notice':'Índice estrutural, não validação factual. Transcrições não são importadas automaticamente.','records':entries}
Path('docs/dossier-index.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({k:v for k,v in out.items() if k!='records'},ensure_ascii=False))
