# PelelecApp 📱⚖️

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Deploy-brightgreen?logo=github)](https://bhr3x.github.io/pelelecapp/)
[![Surge Mirror](https://img.shields.io/badge/Surge%20Mirror-pelelecapp.surge.sh-blue)](https://pelelecapp.surge.sh)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Operação Compliance Zero](https://img.shields.io/badge/Inq.%20STF-4.932-orange)](https://bhr3x.github.io/pelelecapp/)

> **Simulador Forense Interativo estilo WhatsApp Web das conversas periciadas no celular apreendido de Daniel Vorcaro (Banco Master / Operação Compliance Zero).**

🌐 **Acesse online:**
- **GitHub Pages:** [https://bhr3x.github.io/pelelecapp/](https://bhr3x.github.io/pelelecapp/)
- **Mirror Alternativo (Surge):** [https://pelelecapp.surge.sh](https://pelelecapp.surge.sh)
- **Jogo Brasília Survivors:** [https://www.brasiliasurvivors.com.br](https://www.brasiliasurvivors.com.br)

---

## 🔍 Sobre o Projeto

O **PelelecApp** é uma reconstituição jornalística e forense interativa no formato da interface do WhatsApp Web (com temas Claro e Escuro, e suporte nativo a dispositivos móveis). 

O projeto reproduz com rigor documental os diálogos, mensagens apagadas, fotos em visualização única, rascunhos do Bloco de Notas do iPhone e notas de voz periciados pela **Polícia Federal (Cellebrite UFED 8.2)** no âmbito do **Inquérito nº 4.932 do Supremo Tribunal Federal (Operação Compliance Zero)**.

### 🌟 Funcionalidades Interativas

- 🕵️ **Modo Perícia PF (Cellebrite UFED):** Um clique no topo ou no chat revela mensagens deletadas com selo forense de recuperação, metadados da tabela SQLite e tags de laudos oficiais.
- 📄 **Reconstituição do Bloco de Notas (iOS):** Mensagens enviadas em modo *"Visualização Única (1x)"* abrem uma modal fiel ao app Notas do iPhone com a carta da *"dívida de vida"* e o rascunho de fuga em Guarulhos.
- 🎙️ **Simulação de Notas de Voz:** Player com forma de onda de áudio animada e botão de transcrição pericial oficial.
- 📱 **Otimização Nativa para Mobile:** Interface WhatsApp Mobile com visualização fluida em tela cheia, sem rolagem residual, suporte a safe-area em iOS e Android, e botão instantâneo de retorno à lista de contatos.
- 📰 **Checagem de Fatos & Fontes:** Cada contato possui uma ficha técnica com link direto para a apuração original de imprensa e registro das manifestações de defesa.
- 💬 **Interação em Tempo Real:** Permite digitar e enviar mensagens como Daniel Vorcaro, recebendo réplicas contextuais simuladas.

---

## 👥 Interlocutores & Conversas Mapeadas

| Interlocutor | Contexto & Citações Periciadas | Veículo / Fonte |
|---|---|---|
| **Martha Graeff 💖** | Meme *"Peleleca"*, jatinhos para Angra, Fasano e reação ao acordo Master × BRB (*"A turma dos bancos está furiosa"*) | CNN Brasil / UOL / Metrópoles |
| **A Turma (Operações) 💀** | Intimidação a jornalistas, dossiês de espionagem e menções ao operador *"Sicário"* | Folha de S.Paulo / O Globo |
| **Contato 'Alexandre' ⚖️** | Carta de *"dívida de vida"*, rascunho *"Segunda devo estar fora?"*, mensagens temporárias 24h e citação de 16/11 *(Contestado pela defesa no STF)* | CNN Brasil / UOL / AP / JOTA |
| **Flávio Bolsonaro 🎬** | Mensagem de lealdade (*"Irmão, estou e estarei contigo sempre..."*), vídeo de pitch 1x e financiamento de R$ 10 mi do filme *Dark Horse* *(Defesa nega ilicitude)* | The Intercept Brasil / AP News |
| **Mario Frias 🎭** | Áudio de voz agradecendo pelo suporte a *Dark Horse* e conversas sobre a produtora | InfoMoney / The Intercept Brasil |
| **João Doria ☕** | Proposta de café reservado em maio de 2025 (*"A você, ao Maurício, ao banco. Reservadamente"*) *(Assessoria confirmou como cortesia institucional)* | CNN Brasil (Gustavo Uribe) |
| **Henrique Vorcaro (Pai) 💼** | Mensagens codificadas por motorista e aportes na holding familiar | Polícia Federal / Inq. 4.932 |
| **Paulo Henrique Costa (BRB) 🏛️** | Negociação de aquisição de carteiras e jatinhos de Brasília a SP | Metrópoles / CNN Brasil |
| **Augusto Lima (Master) 📈** | Alertas de fiscalização da Anbima e do Banco Central | Folha de S.Paulo |
| **Rubens Menin (Galo) 🐔** | Aportes bilionários e reestruturação da SAF do Atlético-MG | GE / O Globo |
| **Arthur Lira 🏛️** | Articulação do Projeto DV e emendas parlamentares | Folha de S.Paulo |
| **Advocacia Institucional 📑** | Honorários de R$ 33 milhões para bancas de prestígio | JOTA / CNN Brasil |
| **Bacen & Will Bank 🏦** | Aprovação de compra e trava de compliance no Banco Central | Valor Econômico |
| **Cláudio Castro (Gov. RJ) 🏖️** | Aportes de R$ 1,2 bi do Rioprevidência e jantar de R$ 66 mil em NY | O Globo / Poder360 |
| **Comandante Marcos ✈️** | Minutos finais e cerco policial no Aeroporto de Guarulhos | G1 / Folha de S.Paulo |

---

## 💻 Como Executar Localmente

O repositório é 100% estático e não requer instalação de dependências pesadas, compilers ou bundlers:

```bash
# Clone o repositório
git clone https://github.com/Bhr3X/pelelecapp.git
cd pelelecapp

# Execute com qualquer servidor HTTP:
python3 -m http.server 8080
# ou com Node
npx serve .
```

Acesse `http://localhost:8080` no seu navegador desktop ou mobile.

---

## 🛡️ Rigor Ético, Jornalístico e Jurídico

1. **Fontes Públicas:** Todos os diálogos, trechos e materiais foram rigorosamente extraídos de **matérias investigativas publicadas na grande imprensa** (Folha, O Globo, CNN Brasil, Intercept, UOL, JOTA, Estadão, AP News) e de **peças e laudos periciais desclassificados do Inquérito 4.932 do STF**.
2. **Registro de Contrapontos:** O projeto registra com destaque as respostas e contestações públicas de todas as autoridades e citados (incluindo as manifestações oficiais das defesas no STF e na imprensa).
3. **Privacidade Preservada:** Números de telefones privados, dados bancários e informações de foro íntimo irrelevantes ao interesse público foram devidamente anonimizados e mascarados.

---

## 📄 Licença

Distribuído sob a licença **MIT**. Consulte `LICENSE` para mais informações.
