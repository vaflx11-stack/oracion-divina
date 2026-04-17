# 🙏 Oración Divina — Guia Completo de Instalação e Deploy

> Site/app espiritual em espanhol, igual ao Divine Prayer, com orações, música e modo dormir.

\---

## 📋 O QUE VOCÊ VAI PRECISAR

* Um computador com internet
* Uma conta gratuita na **Vercel** (vercel.com) — onde o site vai ficar hospedado
* Uma conta gratuita no **GitHub** (github.com) — onde o código fica salvo
* O **Node.js** instalado no seu computador (nodejs.org)

\---

## 🗂️ ESTRUTURA DO PROJETO

```
oracion-divina/
├── app/
│   ├── login/page.js          ← Tela de login
│   ├── home/page.js           ← Página inicial
│   ├── oraciones/page.js      ← Página de orações
│   ├── musica/page.js         ← Página de músicas
│   ├── dormir/page.js         ← Página de dormir
│   ├── globals.css            ← Estilos globais
│   └── layout.js              ← Layout raiz
├── components/
│   └── BottomNav.js           ← Barra de navegação inferior
├── public/
│   ├── audios/                ← Coloque seus arquivos .mp3 aqui
│   ├── pdfs/                  ← Coloque seus PDFs aqui
│   ├── images/                ← Coloque suas imagens aqui
│   └── manifest.json          ← Configuração de PWA (app)
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

\---

## 🚀 PASSO A PASSO — DO ZERO AO SITE NO AR

### PASSO 1 — Instalar o Node.js

1. Acesse **nodejs.org**
2. Baixe a versão **LTS** (a recomendada)
3. Instale normalmente como qualquer programa

Para verificar se funcionou, abra o **Terminal** (no Windows: pressione `Win + R`, digite `cmd`, aperte Enter) e digite:

```
node --version
```

Deve aparecer algo como `v20.x.x`

\---

### PASSO 2 — Instalar o projeto no seu computador

Abra o Terminal e execute estes comandos (um por vez):

```bash
# Entre na pasta onde você descompactou o projeto
cd caminho/para/oracion-divina

# Instale as dependências
npm install

# Teste localmente (o site abre no seu computador)
npm run dev
```

Depois de `npm run dev`, abra o navegador e acesse: **http://localhost:3000**

Você vai ver o site funcionando! 🎉

\---

### PASSO 3 — Adicionar seus conteúdos

#### 📂 Imagens

Coloque seus arquivos `.jpg`, `.png` na pasta `public/images/`

Os nomes que o site usa por padrão:

* `angel-hero.jpg` — anjo da tela inicial
* `oracion-manana.jpg` — foto da oração da manhã
* (você pode trocar os emojis por imagens reais editando os arquivos em `app/`)

#### 🎵 Áudios

Coloque seus arquivos `.mp3` na pasta `public/audios/`

Os nomes que o site espera (você pode mudar nos arquivos):

* `abundancia-888hz.mp3`
* `reino-angelico.mp3`
* `ondas-doradas-432hz.mp3`
* `milagro-528hz.mp3`
* `riquezas-meditativas.mp3`
* `piano-vibracion.mp3`
* `iman-dinero.mp3`
* `energia-tranquila.mp3`
* `atraccion-riqueza.mp3`

#### 📄 PDFs

Coloque seus arquivos `.pdf` na pasta `public/pdfs/`

\---

### PASSO 4 — Criar conta no GitHub e subir o código

1. Acesse **github.com** e crie uma conta gratuita
2. Clique em **"New repository"** (novo repositório)
3. Dê o nome `oracion-divina`
4. Clique em **"Create repository"**

Depois, no Terminal, dentro da pasta do projeto:

```bash
git init
git add .
git commit -m "Primeiro commit - Oración Divina"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/oracion-divina.git
git push -u origin main
```

(Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub)

\---

### PASSO 5 — Fazer deploy na Vercel (colocar no ar)

1. Acesse **vercel.com** e crie uma conta gratuita (pode entrar com o GitHub)
2. Clique em **"New Project"**
3. Clique em **"Import"** no seu repositório `oracion-divina`
4. Deixe tudo nas configurações padrão
5. Clique em **"Deploy"**

Aguarde 1-2 minutos... e pronto! 🚀

A Vercel vai te dar um endereço como: `oracion-divina.vercel.app`

\---

### PASSO 6 — Domínio personalizado (opcional)

Se você quiser um domínio como `oraciondivina.com`:

1. Compre um domínio no **registro.br**, **GoDaddy** ou **Namecheap**
2. No painel da Vercel, vá em **Settings > Domains**
3. Adicione seu domínio
4. Siga as instruções para apontar o DNS

\---

## ✏️ COMO EDITAR O CONTEÚDO

### Mudar as orações

Abra o arquivo `app/oraciones/page.js` e edite o array `oracionesDiarias` ou `intenciones`.

Cada oração tem este formato:

```javascript
{ 
  id: 1,                              // número único
  titulo: 'Nome da Oração',          // título
  subtitulo: 'Descrição curta.',     // subtítulo
  img: '🙏',                         // emoji OU caminho para imagem
  texto: 'Texto completo da oração.' // o texto que aparece ao abrir
}
```

### Mudar as músicas

Abra `app/musica/page.js` e edite o array `musicas`.

### Mudar as orações para dormir

Abra `app/dormir/page.js` e edite o array `items`.

### Mudar cores

Abra `app/globals.css` e edite as variáveis no topo:

```css
--gold: #C9A84C;        ← cor dourada principal
--cream: #F5F0E8;       ← fundo bege claro
--divine-dark: #0f0c24; ← fundo escuro
```

\---

## 🔄 ATUALIZAR O SITE DEPOIS DE FAZER MUDANÇAS

Toda vez que você editar algo, basta rodar no Terminal:

```bash
git add .
git commit -m "Descrição do que mudei"
git push
```

A Vercel detecta automaticamente e atualiza o site em 1-2 minutos! ✨

\---

## ❓ PROBLEMAS COMUNS

**"npm não é reconhecido"** → O Node.js não foi instalado corretamente. Reinstale.

**Site abre mas sem estilo** → Execute `npm install` novamente.

**Áudio não toca** → Verifique se o arquivo .mp3 está na pasta `public/audios/` com o nome exato.

**PDF não abre** → Verifique se o arquivo .pdf está na pasta `public/pdfs/` com o nome exato.

\---

## 📱 COMO INSTALAR COMO APP NO CELULAR

O site já está configurado como PWA (Progressive Web App). Para instalar:

**No iPhone (Safari):**

1. Abra o site no Safari
2. Toque no botão de compartilhar (quadrado com seta)
3. Toque em "Adicionar à Tela de Início"

**No Android (Chrome):**

1. Abra o site no Chrome
2. Toque nos três pontinhos (menu)
3. Toque em "Adicionar à tela inicial"

\---

Feito com 🙏 — Que Deus abençoe seu projeto!

