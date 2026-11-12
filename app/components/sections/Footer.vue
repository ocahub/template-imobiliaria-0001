<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const store = useRhStore()
const company = useRhCompany()
const { global } = useRhSite()
const header = computed(() => global('header')?.props ?? {})
const logo = computed(() => header.value.logoImage || store.value?.logoUrl || '')
const name = computed(() => company.text(header.value.logo) || store.value?.name || '')
</script>

<template>
  <footer class="t-footer">
    <div class="t-wrap t-footer__grid">
      <div>
        <div class="t-logo t-logo--footer">
          <img v-if="logo" class="t-logo__img" :src="logo" :alt="name">
          <template v-else><span class="t-logo__mark" />{{ name }}</template>
        </div>
        <RhText tag="p" path="about" :value="p.about" ph="Sobre a empresa" ml />
      </div>
      <div>
        <h4>Atendimento</h4>
        <RhText tag="p" path="hours" :value="p.hours" ph="Horário" />
        <RhText tag="p" path="phone" :value="p.phone" ph="Telefone" />
        <RhText tag="p" path="whatsapp" :value="p.whatsapp" ph="WhatsApp" />
        <RhText tag="p" path="email" :value="p.email" ph="E-mail" />
      </div>
      <div>
        <h4>Endereços</h4>
        <p v-for="(a, i) in p.addresses" :key="i">
          <RhText :path="`addresses.${i}.label`" :value="a.label" ph="Endereço" /><br>
          <RhText tag="small" :path="`addresses.${i}.creci`" :value="a.creci" ph="CRECI" />
        </p>
      </div>
    </div>
    <div class="t-wrap">
      <div class="t-footer__copy">© {{ new Date().getFullYear() }} {{ name }} · <RhText path="creci" :value="p.creci" ph="CRECI" /></div>
    </div>
  </footer>
</template>
