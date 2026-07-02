# Bapweb — Site institucional

Site da **Bapweb**, empresa de tecnologia e estratégia digital. O objetivo é revelar o valor de negócios no ambiente digital e converter visitantes em contato via WhatsApp.

- **Domínio:** www.bapweb.com.br
- **Posicionamento:** "A Bapweb transforma o valor de negócios em uma presença digital clara, estratégica e capaz de gerar percepção, confiança e crescimento."

## Estrutura

```
├── index.html      # LP principal (hero, quem somos, soluções, diferenciais, processo, CTA)
├── modelos.html    # Página de Projetos/Portfólio (grid por segmento + CTA)
├── style.css       # Design system compartilhado (dark premium, base azul, aurora)
├── script.js       # Navbar scroll, smooth scroll, reveal on scroll, parallax do hero
├── bapweb_icon.png # Ícone da marca (nav, footer e favicon) — recorte do ícone transparente
├── bapweb_logo.png # Lockup completo da marca (reserva p/ OG image / usos futuros)
└── prints/         # Screenshots dos modelos por segmento
```

## Identidade visual

Tokens no topo do `style.css`:

```css
--brand:      #2c5bff;  /* azul da marca (#1B51FE) refinado para tela */
--brand-deep: #1b51fe;  /* azul exato da logo */
--brand-lt:   #6e93ff;
--indigo:     #7c6bff;  /* harmoniza com o azul (aurora) */
--cyan:       #35c6ff;  /* harmoniza com o azul (aurora) */
--bg:         #060910;  /* navy quase-preto */
```

A "aurora" do hero (`.aurora .blob`) usa azul → índigo → ciano em movimento sutil,
com opacidade baixa para manter a sofisticação.

## Pendências de assets

- [x] **Ícone da Bapweb** — `bapweb_icon.png` integrado no nav, footer e favicon.
- [ ] Prints reais dos projetos entregues (hoje usa os modelos de referência da pasta `prints/`).

## Personalização

- **WhatsApp:** `wa.me/5519971273568` (buscar por `wa.me/` no HTML).
- **Contato:** e-mail `lucasfgb9@gmail.com` · Instagram `@lucasbaptistawb` (no footer).
- **Conteúdo:** todo o texto está direto no HTML, sem CMS ou build.

## Como publicar

Projeto HTML/CSS/JS puro — sem dependências, sem build.

```bash
npx vercel        # deploy (recomendado)
```

## Tecnologias

- HTML5 semântico · CSS3 (variáveis, grid, backdrop-filter, animações)
- JavaScript vanilla (IntersectionObserver, parallax, prefers-reduced-motion)
- Google Fonts — Inter
