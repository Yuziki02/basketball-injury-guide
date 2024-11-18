<template>
  <header class="hero" id="home">
    <div class="hero-content">
      <h1 class="fade-in">篮球运动员健康全攻略</h1>
      <p class="fade-in-delay">保护自己，强势回归赛场</p>
      <div class="main-cta fade-in-delay-2">
        <button class="cta-btn primary" @click="scrollTo('#prevention')">
          了解如何预防
        </button>
        <button class="cta-btn secondary" @click="scrollTo('#recovery')">
          康复步骤详情
        </button>
      </div>
    </div>
    <div class="hero-background" :style="{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})` }"></div>
  </header>
</template>

<script>
import heroBg from '../assets/images/hero-bg.jpg'  // 导入背景图片

export default {
  name: 'Hero',
  data() {
    return {
      backgroundImage: heroBg
    }
  },
  methods: {
    scrollTo(target) {
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.hero {
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.hero-content {
  max-width: 800px;
  padding: 0 20px;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
  font-weight: 700;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.main-cta {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.cta-btn {
  padding: 15px 30px;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.cta-btn.primary {
  background: var(--primary-color);
  color: white;
}

.cta-btn.secondary {
  background: transparent;
  border: 2px solid white;
  color: white;
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.fade-in-delay {
  animation: fadeIn 1s ease-out 0.3s forwards;
  opacity: 0;
}

.fade-in-delay-2 {
  animation: fadeIn 1s ease-out 0.6s forwards;
  opacity: 0;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero p {
    font-size: 1.2rem;
  }
  
  .main-cta {
    flex-direction: column;
  }
}
</style> 