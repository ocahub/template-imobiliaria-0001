// Template de site de imobiliaria (00047). O conteudo (paginas, secoes, textos
// e imagens) a tenant edita no painel em Loja › Site › Páginas; o build le a
// versao publicada no cloud-management. O que mora aqui: as secoes
// (app/components/sections), o visual e o template.json (o contrato com o painel).
export default defineNuxtConfig({
  modules: ['@ocahub/kit'],
  compatibilityDate: '2026-10-01',
  devtools: { enabled: false },

  rhfactor: {
    storeId: process.env.RHFACTOR_STORE_ID ?? '',
    apiBase: process.env.RHFACTOR_API_BASE ?? 'http://localhost:8085',
    iamBase: process.env.RHFACTOR_IAM_BASE ?? 'http://localhost:8080',
    contractsBase: process.env.RHFACTOR_CONTRACTS_BASE ?? 'http://localhost:8082',
    paymentsBase: process.env.RHFACTOR_PAYMENTS_BASE ?? 'http://localhost:8089',
    // Template de imobiliaria: sempre no modo imob; a busca sai da inicial.
    imob: true,
    pages: { shelf: '/imoveis' },
    siteContent: true
  },

  // Cada tipo de secao e um componente global Section{Tipo}: o kit monta a pagina pelo tipo.
  components: [
    { path: '~/components/sections', prefix: 'Section', global: true },
    '~/components'
  ],

  css: ['~/assets/css/template.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Manrope:wght@400;500;600;700;800&display=swap' }
      ]
    }
  }
})
