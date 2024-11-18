<template>
  <section id="experts" class="experts-section">
    <div class="container">
      <h2 class="section-title" v-observe-visibility="onVisibilityChange">
        专业指导
      </h2>
      <div class="experts-grid">
        <div 
          v-for="(expert, index) in experts" 
          :key="index"
          class="expert-card"
          :class="{ 'visible': isVisible }"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div class="expert-image">
            <img :src="expert.image" :alt="expert.name">
          </div>
          <div class="expert-info">
            <h3>{{ expert.name }}</h3>
            <p class="title">{{ expert.title }}</p>
            <p class="description">{{ expert.description }}</p>
            <div class="expert-specialties">
              <span v-for="(specialty, idx) in expert.specialties" :key="idx">
                {{ specialty }}
              </span>
            </div>
            <button class="contact-btn" @click="contactExpert(expert)">
              预约咨询
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const doctor1Img = new URL('../assets/images/experts/doctor1.jpg', import.meta.url).href
const doctor2Img = new URL('../assets/images/experts/doctor2.jpg', import.meta.url).href
const doctor3Img = new URL('../assets/images/experts/doctor3.jpg', import.meta.url).href

export default {
  name: 'ExpertsSection',
  data() {
    return {
      isVisible: false,
      experts: [
        {
          name: '刘浩洋医生',
          title: '运动医学专家',
          image: doctor1Img,
          description: '从事运动医学20年，专注于篮球运动损伤的预防与治疗',
          specialties: ['关节损伤', '运动康复', '损伤预防'],
          contact: 'QQ：3198298776'
        },
        {
          name: '李世俊医生',
          title: '康复理疗专家',
          image: doctor2Img,
          description: '拥有丰富的运动员康复经验，曾服务多支职业篮球队',
          specialties: ['物理治疗', '功能训练', '康复计划'],
          contact: 'QQ：2925766038'
        },
        {
          name: '王医生',
          title: '运动训练师',
          image: doctor3Img,
          description: '专注于运动损伤预防和体能训练，帮助运动员提高竞技水平',
          specialties: ['体能训练', '损伤预防', '运动表现']
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
    contactExpert(expert) {
      if (expert.contact) {
        alert(`${expert.name}的联系方式：${expert.contact}`);
      } else {
        alert(`即将为您预约 ${expert.name} 的咨询服务，请保持电话畅通。`);
      }
    }
  }
}
</script>

<style scoped>
.experts-section {
  padding: 100px 0;
  background: linear-gradient(to bottom, #ffffff, #f8f9fa);
}

.section-title {
  text-align: center;
  margin-bottom: 50px;
  font-size: 2.5rem;
  color: var(--text-color);
}

.experts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;
}

.expert-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s;
  opacity: 0;
  transform: translateY(30px);
}

.expert-card.visible {
  animation: slideUp 0.6s ease-out forwards;
}

.expert-card:hover {
  transform: translateY(-10px);
}

.expert-image {
  height: 250px;
  overflow: hidden;
}

.expert-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.expert-card:hover .expert-image img {
  transform: scale(1.1);
}

.expert-info {
  padding: 20px;
}

.expert-info h3 {
  color: var(--primary-color);
  margin-bottom: 5px;
  font-size: 1.5rem;
}

.expert-info .title {
  color: var(--text-color);
  font-weight: 500;
  margin-bottom: 15px;
}

.expert-info .description {
  margin-bottom: 20px;
  line-height: 1.6;
}

.expert-specialties {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.expert-specialties span {
  background: #f0f0f0;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: var(--text-color);
}

.contact-btn {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 25px;
  background: var(--primary-color);
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.contact-btn:hover {
  background: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
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
  
  .experts-grid {
    grid-template-columns: 1fr;
  }
}
</style> 