# Lucas Baptista — Landing Page

Landing page profissional para divulgação de serviços de criação de sites. O objetivo da página é converter visitantes em leads, direcionando-os a marcar um diagnóstico gratuito via WhatsApp.

## Estrutura

```
LP sites/
├── index.html   # Estrutura e conteúdo da página
├── style.css    # Estilos (tema dark, tipografia, animações)
├── script.js    # Navbar scroll, smooth scroll, reveal on scroll
└── README.md
```

## Seções

1. **Hero** — título de impacto + chamada para diagnóstico gratuito
2. **Problemas** — dores do cliente (ausência de site, lentidão, não-responsivo)
3. **O que entrego** — diferenciais do serviço
4. **Como funciona** — processo em 4 etapas (diagnóstico → entrega)
5. **CTA / Diagnóstico** — botão principal de conversão via WhatsApp

## Personalização

### Número do WhatsApp
O número está definido em dois lugares no `index.html`. Busque por `wa.me/` para localizá-los.

```
wa.me/5519971273568
```

### Texto da mensagem pré-preenchida
A mensagem enviada ao clicar no botão está codificada na URL (`?text=...`). Edite diretamente no `index.html` se quiser mudar o texto.

### Cores
As variáveis de cor ficam no topo do `style.css`:

```css
--purple:  #8b5cf6;
--pink:    #ec4899;
--grad:    linear-gradient(135deg, #8b5cf6, #ec4899);
```

### Conteúdo
Todo o texto está diretamente no `index.html`, sem dependência de CMS ou build tool. Edite diretamente.

## Como publicar

O projeto é HTML/CSS/JS puro — sem dependências, sem build.

**Opção 1 — Vercel (recomendado)**
```bash
npx vercel
```

**Opção 2 — GitHub Pages**
1. Suba os arquivos para um repositório público
2. Ative GitHub Pages em Settings → Pages → Branch: main

**Opção 3 — Qualquer hospedagem**
Faça upload dos três arquivos via FTP ou painel da hospedagem.

## Tecnologias

- HTML5 semântico
- CSS3 (variáveis, grid, animações, backdrop-filter)
- JavaScript vanilla (sem frameworks)
- Google Fonts — Inter
