<template>
  <div class="home">
    <header class="hero">
      <div class="hero-content" data-aos="fade-up">
        <h1>篮球运动员健康全攻略</h1>
        <p>保护自己，强势回归赛场</p>
        <div class="cta-buttons">
          <router-link to="/prevention" class="cta-btn primary">
            了解如何预防
          </router-link>
          <router-link to="/recovery" class="cta-btn secondary">
            康复步骤详情
          </router-link>
        </div>
      </div>
      <div class="hero-image" data-aos="fade-left">
        <img src="@/assets/images/hero-basketball.jpg" alt="篮球运动">
      </div>
    </header>

    <section class="features">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">我们的特色</h2>
        <div class="features-grid">
          <div class="feature-card" v-for="feature in features" :key="feature.title"
               data-aos="fade-up" :data-aos-delay="feature.delay">
            <div class="feature-icon">
              <i :class="feature.icon"></i>
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const features = [
  {
    icon: 'fas fa-shield-alt',
    title: '预防为主',
    description: '专业的预防指导，让您远离运动伤害',
    delay: '0'
  },
  {
    icon: 'fas fa-heartbeat',
    title: '科学康复',
    description: '标准化的康复流程，助您快速恢复',
    delay: '100'
  },
  {
    icon: 'fas fa-user-md',
    title: '专家指导',
    description: '资深专家一对一指导，保障康复效果',
    delay: '200'
  }
]

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true
  })
})
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 0;
  background: linear-gradient(135deg, #f6f9fc 0%, #e9f2f9 100%);
}

.hero-content {
  flex: 1;
  padding: 0 50px;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--text-color);
}

.cta-buttons {
  display: flex;
  gap: 1rem;
}

.cta-btn {
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.3s ease;
}

.cta-btn:hover {
  transform: translateY(-3px);
}

.primary {
  background: var(--secondary-color);
  color: white;
}

.secondary {
  background: white;
  color: var(--secondary-color);
  border: 2px solid var(--secondary-color);
}

/* 更多样式... */
</style> 