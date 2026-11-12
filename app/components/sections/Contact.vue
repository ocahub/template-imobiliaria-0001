<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const company = useRhCompany()
</script>

<template>
  <section id="contato" class="t-contact">
    <div class="t-wrap t-contact__row">
      <div>
        <RhText tag="h2" class="t-h2" path="title" :value="p.title" ph="Título" />
        <RhText tag="p" path="text" :value="p.text" ph="Texto" ml />
      </div>
      <div class="t-contact__cta">
        <RhWhatsappButton class="t-btn t-btn--accent t-btn--big" message="Olá! Vim pelo site e gostaria de atendimento." source="contato">
          <RhText path="button" :value="p.button" ph="Botão" />
          <template #missing><p class="t-contact__missing">Cadastre o WhatsApp da loja no painel (Loja › Dados da loja › Contatos do site) para o botão aparecer.</p></template>
        </RhWhatsappButton>
        <p v-if="company.values.value.whatsapp" class="t-contact__phone">WhatsApp {{ company.values.value.whatsapp }}</p>
        <RhText tag="small" path="note" :value="p.note" ph="Aviso" />
      </div>
    </div>
  </section>
</template>
