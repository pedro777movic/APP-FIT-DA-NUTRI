
# 🥗 Cantinho Fit da Nutri - App de Receitas

Este é o repositório principal do aplicativo **Cantinho Fit da Nutri**, um organizador alimentar premium com mais de 460 receitas fit validadas.

## 🏗️ Arquitetura do Projeto

O projeto foi construído utilizando as tecnologias mais modernas do ecossistema React/Next.js para garantir performance offline e UX fluida.

### 📍 Onde encontrar o que importa:

- **Banco de Receitas (+460 itens):** `src/lib/data.ts`
  - Centralizamos todas as receitas neste arquivo para facilitar a leitura por agentes de IA e migração de dados.
  - Estrutura: Cada receita possui um `id` único, `titulo`, `categoria`, `ingredientes`, `modo_preparo` e `imagem`.

- **Lógica de Acesso & Auth:** `src/hooks/use-auth.tsx`
  - Gerencia o desbloqueio das categorias via e-mail e senha.
  - O estado é persistido no `localStorage` sob a chave `nutri-app-auth`.

- **Componentes de UI:** `src/components/ui/`
  - Baseado em **Shadcn UI** e **Tailwind CSS**.
  - Estilo visual focado em Leveza, Controle e Bem-estar.

- **Rotas e Páginas:** `src/app/`
  - `[category]/page.tsx`: Lista de receitas da categoria.
  - `[category]/[recipeId]/page.tsx`: Visualização detalhada da receita.

## 🚀 Guia para Migração (Antigravity IA)

Este projeto foi preparado tecnicamente para ser interpretado por agentes de IA externos.

1. **Dados:** A IA deve ler `src/lib/data.ts` como a única fonte da verdade para o conteúdo.
2. **Estilos:** O arquivo `src/app/globals.css` contém as variáveis de cores (HSL).
3. **Responsividade:** O app é **Mobile First**. Testar sempre em viewports de 375px a 430px.
4. **Performance:** As imagens utilizam placeholders mapeados em `src/lib/placeholder-images.json`.

## 🛠️ Comandos Úteis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera a versão de produção.

---
*Mantido com ❤️ para promover uma alimentação leve e sem culpa.*
