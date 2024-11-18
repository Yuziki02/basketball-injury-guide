<template>
  <section id="injuries" class="injuries-section">
    <div class="container">
      <h2 class="section-title" v-observe-visibility="onVisibilityChange">
        常见篮球运动伤病
      </h2>
      <div class="injury-cards">
        <div 
          v-for="(injury, index) in injuries" 
          :key="index"
          class="injury-card"
          :class="{ 'visible': isVisible }"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div class="card-icon">
            <img :src="injury.icon" :alt="injury.title">
          </div>
          <h3>{{ injury.title }}</h3>
          <p>{{ injury.description }}</p>
          <ul class="symptoms">
            <li v-for="(symptom, idx) in injury.symptoms" :key="idx">
              {{ symptom }}
            </li>
          </ul>
          <button class="learn-more" @click="showDetails(injury)">
            了解更多
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const ankleIcon = new URL('../assets/images/injuries/ankle.jpg', import.meta.url).href
const kneeIcon = new URL('../assets/images/injuries/knee.jpg', import.meta.url).href
const fingerIcon = new URL('../assets/images/injuries/finger.jpg', import.meta.url).href

export default {
  name: 'InjuriesSection',
  data() {
    return {
      isVisible: false,
      injuries: [
        {
          title: '踝关节扭伤',
          icon: ankleIcon,
          description: '最常见的篮球伤病之一，通常由落地不当或急停转向造成',
          symptoms: [
            '关节肿胀',
            '局部疼痛',
            '活动受限'
          ]
        },
        {
          title: '膝关节损伤',
          icon: kneeIcon,
          description: '包括韧带拉伤、半月板损伤等，多发生在跳跃落地时',
          symptoms: [
            '膝关节疼痛',
            '不稳定感',
            '弯曲受限'
          ]
        },
        {
          title: '手指损伤',
          icon: fingerIcon,
          description: '接球、抢球时容易发生的指关节扭伤或脱位',
          symptoms: [
            '指关节肿胀',
            '活动受限',
            '握力下降'
          ]
        }
      ]
    }
  },
  methods: {
    onVisibilityChange(isVisible) {
      if (isVisible) {
        this.isVisible = true;
      }
    },
    showDetails(injury) {
      // 实现详情展示逻辑
    }
  }
}
</script>

<style scoped>
.injuries-section {
  padding: 100px 0;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
}

.section-title {
  text-align: center;
  margin-bottom: 50px;
  font-size: 2.5rem;
  color: var(--text-color);
}

.injury-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;
}

.injury-card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: var(--shadow);
  transition: transform 0.3s, box-shadow 0.3s;
  opacity: 0;
  transform: translateY(30px);
}

.injury-card.visible {
  animation: slideUp 0.6s ease-out forwards;
}

.card-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
}

.card-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.injury-card h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
  font-size: 1.5rem;
}

.injury-card p {
  margin-bottom: 20px;
  color: var(--text-color);
}

.symptoms {
  list-style: none;
  margin-bottom: 20px;
}

.symptoms li {
  padding: 8px 0;
  padding-left: 25px;
  position: relative;
}

.symptoms li::before {
  content: '•';
  color: var(--primary-color);
  position: absolute;
  left: 0;
}

.learn-more {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s;
}

.learn-more:hover {
  background: darken(var(--primary-color), 10%);
  transform: translateY(-2px);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .injury-cards {
    grid-template-columns: 1fr;
  }
}
</style> 