# Vinícola Araucária — site

Site estático (HTML, CSS e JS prontos, sem etapa de build).

Publicado no GitHub Pages: https://ant-metric.github.io/vin-cola-/

## Caminhos

Todos os links e arquivos usam o prefixo `/vin-cola-/` (ex.: `/vin-cola-/vinhos/`, `/vin-cola-/site/...`), porque o GitHub Pages serve o site nessa subpasta.
Se o site for para um domínio próprio (servido na raiz), troque `/vin-cola-/` por `/` em todos os `.html`.

## Como rodar localmente

Abrir o `index.html` direto no navegador não funciona. Use o servidor incluído (precisa do Node.js):

```powershell
node servidor-local.js
```

e abra http://localhost:8080/vin-cola-/

## Estrutura

| Página | Caminho |
| --- | --- |
| Início | `/` |
| A ideia | `/a-ideia/` |
| As histórias | `/historias/` (6 histórias em subpastas) |
| O vinho | `/vinhos/` |
| Vinhos | `/vinhos/rebelde/`, `/vinhos/imperfeito/`, `/vinhos/pedra-fincada/`, `/vinhos/para-os-amigos/` |
| Elaboração | `/vinhos/elaboracao/` |
| À mesa | `/a-mesa/` |
| Degustações | `/degustacoes/` |
| Contato | `/contato/` |
| Privacidade / Cookies | `/privacidade/`, `/cookies/` |

- `site/templates/css` e `site/templates/js`: estilos e scripts do site.
- `site/assets/garrafas`: fotos das garrafas da Vinícola Araucária.
- `favicon.svg`: ícone da aba.

## Pendências

1. **Fotos:** cerca de 55 fotos ainda são carregadas de `imperialebolgheri.com`, o site da empresa que serviu de base (incluindo garrafas com os rótulos deles). Precisam ser trocadas por fotos próprias, salvas em `site/assets/`.
2. **Formulários** (contato e reserva de degustação): ainda não enviam nada. Precisam de um serviço de envio (ex.: Formspree, Netlify Forms) ou de um link de WhatsApp/e-mail.
3. **Links sem destino (`#`):** "escrever à casa", "sob consulta", "Conheça a casa", "Comprar" e "Saiba mais". Faltam e-mail, telefone, endereço e loja.
4. **Fonte dos títulos (Alfarn):** é carregada do Adobe Fonts da empresa original e deve parar de funcionar no domínio próprio. É preciso licenciar a fonte ou trocar por outra.
5. **Histórias:** ainda contam a história da família italiana original (Enio, Matteo e as datas) e precisam ser reescritas com a história da Araucária.
6. **Vinhos:** os nomes (Rebelde, Imperfeito, Pedra Fincada, Para os Amigos) são provisórios, e as fichas técnicas ainda são as do site original.
7. **SEO:** depois de definir o domínio, recolocar a URL canônica, a imagem de compartilhamento (`og:image`) e os dados estruturados (schema.org) com endereço e telefone corretos.
8. **Textos legais:** revisar a política de privacidade e a de cookies conforme a LGPD.
