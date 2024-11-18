<template>
  <div class="app">
    <nav-bar />
    <hero />
    <injuries-section />
    <prevention-section />
    <recovery-section />
    <experts-section />
    <faq-section />
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="quick-links">
            <h3>快速导航</h3>
            <ul>
              <li v-for="(link, index) in navLinks" :key="index">
                <a :href="link.href">{{ link.text }}</a>
              </li>
            </ul>
          </div>
          <div class="contact">
            <h3>联系我们</h3>
            <p>电话：400-XXX-XXXX</p>
            <p>邮箱：contact@basketball-health.com</p>
          </div>
          <div class="disclaimer">
            <p>免责声明：本网站内容仅供参考，具体伤病处理请咨询专业医生。</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import InjuriesSection from './components/InjuriesSection.vue'
import PreventionSection from './components/PreventionSection.vue'
import RecoverySection from './components/RecoverySection.vue'
import ExpertsSection from './components/ExpertsSection.vue'
import FaqSection from './components/FaqSection.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Hero,
    InjuriesSection,
    PreventionSection,
    RecoverySection,
    ExpertsSection,
    FaqSection
  },
  data() {
    return {
      navLinks: [
        { href: '#home', text: '首页' },
        { href: '#injuries', text: '常见伤病' },
        { href: '#prevention', text: '预防技巧' },
        { href: '#recovery', text: '康复步骤' },
        { href: '#experts', text: '专业指导' },
        { href: '#faq', text: 'FAQ' }
      ]
    }
  }
}
</script>

<style>
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --text-color: #2c3e50;
  --background-color: #f8f9fa;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Noto Sans SC', sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--background-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer {
  background-color: #2c3e50;
  color: white;
  padding: 40px 0;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.quick-links ul {
  list-style: none;
}

.quick-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.quick-links a:hover {
  color: var(--primary-color);
}

.disclaimer {
  grid-column: 1 / -1;
  text-align: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
</style> 