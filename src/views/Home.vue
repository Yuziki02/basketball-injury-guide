<template>
  <div class="home">
    <hero />
    <div class="content-sections">
      <prevention-section />
      <injuries-section />
      <recovery-section />
      <experts-section />
      <faq-section />
    </div>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import PreventionSection from '../components/PreventionSection.vue'
import InjuriesSection from '../components/InjuriesSection.vue'
import RecoverySection from '../components/RecoverySection.vue'
import ExpertsSection from '../components/ExpertsSection.vue'
import FaqSection from '../components/FaqSection.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    PreventionSection,
    InjuriesSection,
    RecoverySection,
    ExpertsSection,
    FaqSection
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
}

.content-sections {
  background: var(--background-color);
}

.content-sections > * {
  margin-bottom: 0;
  position: relative;
}

.content-sections > *::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(to bottom, transparent, var(--background-color));
  pointer-events: none;
}

@media (max-width: 768px) {
  .content-sections > *::after {
    height: 50px;
  }
}
</style> 