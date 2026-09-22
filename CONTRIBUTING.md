# Contribuindo com o PelelecApp 📱⚖️

Agradecemos o interesse em contribuir com o **PelelecApp**! Este é um projeto de reconstituição jornalística e simulação forense interativa em código aberto (*open-source*).

---

## 🧭 Princípios Editoriais & Jornalísticos

Para que uma nova conversa, áudio ou registro seja incorporado ao projeto:

1. **Fonte Jornalística ou Judicial Pública Verificável**: Toda mensagem deve ter sido tornada pública por veículos consolidados da imprensa brasileira/internacional (*The Intercept, CNN Brasil, Folha de S.Paulo, O Globo, UOL, JOTA, AP News, CartaCapital*) ou laudos periciais desclassificados da Polícia Federal e do Supremo Tribunal Federal (Inq. 4.932).
2. **Registro de Contrapontos e Defesas Oficiais**: Se um investigado ou autoridade contestou a autenticidade ou o teor da mensagem, essa negativa deve estar explicitada no campo `factCheckNote` e na modal de fonte.
3. **Sem Dados Sensíveis Pessoais**: Telefones pessoais, e-mails privados e números de documentos devem ser preservados/mascarados (`+55 61 9811*-****`).
4. **Sem Conteúdo Sintético Falso**: Não adicione mensagens inventadas ou diálogos gerados por IA apresentados como reais.

---

## 🛠️ Como rodar o projeto localmente

O projeto foi intencionalmente construído com **tecnologias puras da web (HTML5, CSS3, Vanilla ES6 JavaScript)**, sem a necessidade de etapas complexas de compilação (*zero build step*):

```bash
# Clone o repositório
git clone https://github.com/Bhr3X/pelelecapp.git
cd pelelecapp

# Inicie qualquer servidor estático simples:
python3 -m http.server 8080
# ou
npx serve .
```

Abra no navegador em `http://localhost:8080`.

---

## 📂 Estrutura de Arquivos

```
├── index.html        # Estrutura do app, banners, modais e WhatsApp Web layout
├── css/
│   ├── style.css     # Temas (Dark/Light), responsividade mobile e layout WhatsApp
│   └── forensic.css  # Efeitos Cellebrite, Bloco de Notas iOS, áudio player e modais
├── js/
│   ├── data.js       # Base de dados estruturada de contatos, mensagens e fontes
│   ├── forensic.js   # Lógica do Modo Perícia PF e gerenciamento de modais
│   └── app.js        # Controle de navegação, chat, busca e eventos mobile
├── LICENSE           # Licença MIT
└── README.md         # Documentação completa
```

---

## 🚀 Como enviar um Pull Request

1. Faça um Fork do projeto no GitHub.
2. Crie uma branch para sua modificação: `git checkout -b feature/novo-contato-ou-ajuste`.
3. Adicione o novo contato ou mensagem em `js/data.js` com a respectiva fonte jornalística no formato padrão.
4. Teste em visualização desktop e mobile.
5. Envie um Pull Request detalhando a fonte da apuração e os prints/documentos públicos que embasam a alteração.
