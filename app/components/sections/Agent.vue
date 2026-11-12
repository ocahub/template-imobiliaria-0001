<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
</script>

<template>
  <section class="t-sec">
    <div class="t-wrap t-agent">
      <div class="t-agent__img" :style="bg(p.image)" role="img" :aria-label="p.name" />
      <div>
        <RhText tag="h2" class="t-h2" path="name" :value="p.name" ph="Nome" />
        <RhText tag="p" class="t-role" path="role" :value="p.role" ph="Cargo e CRECI" />
        <RhText tag="p" class="t-body" path="text" :value="p.text" ph="Apresentação" ml />
        <RhWhatsappButton class="t-btn t-btn--accent" source="corretor"><RhText path="button" :value="p.button" ph="Botão" /></RhWhatsappButton>
      </div>
    </div>
  </section>
</template>
