<template>
  <section id="recovery" class="recovery-section">
    <div class="container">
      <h2 class="section-title" v-observe-visibility="onVisibilityChange">
        受伤后的康复步骤
      </h2>
      <div class="timeline">
        <div 
          v-for="(phase, index) in recoveryPhases" 
          :key="index"
          class="timeline-item"
          :class="{ 'visible': isVisible }"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div class="timeline-content">
            <h3>{{ phase.title }}</h3>
            <div v-if="phase.type === 'rice'" class="rice-principle">
              <div v-for="(item, idx) in phase.items" :key="idx" class="rice-item">
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
              </div>
            </div>
            <ul v-else>
              <li v-for="(item, idx) in phase.items" :key="idx">
                {{ item.text }}
                <ul v-if="item.subItems">
                  <li v-for="(subItem, subIdx) in item.subItems" :key="subIdx">
                    {{ subItem }}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RecoverySection',
  data() {
    return {
      isVisible: false,
      recoveryPhases: [
        {
          title: '急性期处理 (0-48小时)',
          type: 'rice',
          items: [
            {
              title: 'R - Rest（休息）',
              description: '立即停止运动，避免继续受伤'
            },
            {
              title: 'I - Ice（冰敷）',
              description: '每次20分钟，每2-3小时一次'
            },
            {
              title: 'C - Compression（压迫）',
              description: '使用弹性绷带适度包扎'
            },
            {
              title: 'E - Elevation（抬高）',
              description: '将受伤部位抬高过心脏'
            }
          ]
        },
        {
          title: '恢复期 (3-7天)',
          type: 'list',
          items: [
            { text: '继续RICE原则' },
            { text: '开始轻微活动度训练' },
            {
              text: '可以进行：',
              subItems: [
                '轻度拉伸',
                '等长收缩训练',
                '关节活动度练习'
              ]
            }
          ]
        },
        {
          title: '功能恢复期 (1-4周)',
          type: 'list',
          items: [
            { text: '渐进性力量训练' },
            { text: '平衡训练' },
            { text: '专项动作训练' },
            {
              text: '注意事项：',
              subItems: [
                '循序渐进，不可操之过急',
                '有疼痛立即停止',
                '建议在专业指导下进行'
              ]
            }
          ]
        },
        {
          title: '运动恢复期 (4周以后)',
          type: 'list',
          items: [
            {
              text: '返回训练计划：',
              subItems: [
                '先进行基础体能训练',
                '逐步加入篮球专项训练',
                '最后恢复对抗性训练'
              ]
            },
            { text: '心理调适' },
            { text: '预防再次受伤' }
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
    }
  }
}
</script>

<style scoped>
.recovery-section {
  padding: 100px 0;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
}

.section-title {
  text-align: center;
  margin-bottom: 50px;
  font-size: 2.5rem;
  color: var(--text-color);
}

.timeline {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: var(--primary-color);
}

.timeline-item {
  margin-bottom: 60px;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
}

.timeline-item.visible {
  animation: slideUp 0.6s ease-out forwards;
}

.timeline-content {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: var(--shadow);
  position: relative;
  width: calc(50% - 30px);
  margin-left: auto;
}

.timeline-item:nth-child(odd) .timeline-content {
  margin-left: 0;
  margin-right: auto;
}

.timeline-content::before {
  content: '';
  position: absolute;
  top: 20px;
  right: -40px;
  width: 20px;
  height: 20px;
  background: var(--primary-color);
  border-radius: 50%;
}

.timeline-item:nth-child(odd) .timeline-content::before {
  right: auto;
  left: -40px;
}

.timeline-content h3 {
  color: var(--primary-color);
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.rice-principle {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.rice-item {
  padding: 15px;
  border-radius: 10px;
  background: #f8f9fa;
}

.rice-item h4 {
  color: var(--primary-color);
  margin-bottom: 10px;
}

ul {
  list-style: none;
}

ul li {
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
}

ul li::before {
  content: '•';
  color: var(--primary-color);
  position: absolute;
  left: 0;
}

@media (max-width: 768px) {
  .timeline::before {
    left: 20px;
  }

  .timeline-content {
    width: calc(100% - 50px);
    margin-left: 50px !important;
  }

  .timeline-content::before {
    left: -40px !important;
  }
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
</style> 