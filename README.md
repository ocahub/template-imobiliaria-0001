# template-imobiliaria-0001

Template de site de imobiliária da plataforma (atividade 00047). A imobiliária
escolhe o template em **Loja › Site** e monta as páginas no editor do painel
(**Editar páginas**): textos, imagens, ordem das seções, páginas novas, cores e
fontes. O build lê a versão **publicada** no cloud-management.

## Como funciona

- **`template.json`**: o contrato com o painel e o cloud-management. Tem as
  seções (tipo, campos de cada uma, grupo, se é global ou dinâmica), as
  aparências (paletas e fontes), o conteúdo padrão de cada seção
  (`sectionDefaults`) e as páginas prontas (`defaults.pages`). O SysAdmin
  cadastra o template em **Plataforma › Templates de site**, e a plataforma lê
  este arquivo da branch.
- **`app/components/sections/`**: um componente por tipo de seção, registrado
  como global com o prefixo `Section` (`hero` → `SectionHero`). O kit monta a
  página pelo tipo (`RhSiteSections`).
- **O que é estático** (textos, imagens, ordem) vem do conteúdo do site. Os
  textos usam `<RhText>`, que no editor do painel é editável ali mesmo.
- **O que é dinâmico** vem do `@ocahub/kit`: vitrine de imóveis
  (`RhPropertyShowcase`), categorias com contagem (`RhPropertyCategories`),
  busca (`RhPropertySearchBox`) e WhatsApp (`RhWhatsappButton`). O template só
  posiciona esses componentes e muda o visual pelo CSS.
- **Variáveis da empresa** nos textos: `{empresa}`, `{whatsapp}`, `{telefone}`,
  `{email}`, `{endereco}`, `{creci}` e `{instagram}`. O site mostra os dados de
  **Loja › Dados da loja › Contatos do site**.

## Versão nova

Mudou uma seção, um campo ou o padrão:

1. Suba a `version` do `template.json`.
2. Faça o push na `main`. No Netlify, cada site ligado ao repositório
   compila sozinho.
3. Em **Plataforma › Templates de site**, clique em **Ler template.json** para
   o editor mostrar os campos novos.

Nunca troque o `id`, porque os sites guardam o template pelo cadastro. Também
não remova um tipo de seção que algum site usa. Uma seção que deixou de existir
some do site e aparece como aviso no editor.

## Rodar local

```bash
npm install
npm run kit:sync        # kit em desenvolvimento (../rhfactor-kit)
RHFACTOR_STORE_ID=<loja> npm run dev
```

Sem conteúdo publicado, o site mostra o padrão do `template.json`.
