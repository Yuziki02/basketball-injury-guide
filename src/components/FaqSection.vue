<template>
  <section id="faq" class="faq-section">
    <div class="container">
      <h2 class="section-title" v-observe-visibility="onVisibilityChange">
        常见问题
      </h2>
      <div class="faq-grid">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="faq-item"
          :class="{ 'visible': isVisible }"
          :style="{ animationDelay: `${index * 0.1}s` }"
          @click="toggleFaq(index)"
        >
          <div class="faq-question" :class="{ 'active': faq.isOpen }">
            <span>{{ faq.question }}</span>
            <i class="arrow"></i>
          </div>
          <div class="faq-answer" :class="{ 'open': faq.isOpen }">
            <div class="answer-content">
              <p v-if="faq.description">{{ faq.description }}</p>
              <ul v-if="faq.list">
                <li v-for="(item, idx) in faq.list" :key="idx">
                  <strong>{{ item.title }}：</strong> {{ item.content }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FaqSection',
  data() {
    return {
      isVisible: false,
      faqs: [
        {
          question: '多久能康复？',
          description: '康复时间因伤势严重程度而异，一般遵循以下标准：',
          list: [
            { title: '轻度扭伤', content: '1-2周' },
            { title: '中度扭伤', content: '3-6周' },
            { title: '重度扭伤', content: '8-12周或更长' }
          ],
          isOpen: false
        },
        {
          question: '什么时候可以重返球场？',
          description: '需要满足以下条件：完全无疼痛、关节活动度恢复正常、肌力恢复到健侧的90%以上、平衡能力测试通过。建议在专业医生评估后再决定。',
          isOpen: false
        },
        {
          question: '如何预防再次受伤？',
          list: [
            { title: '热身', content: '确保充分的赛前热身' },
            { title: '装备', content: '使用合适的防护装备' },
            { title: '技术', content: '保持正确的运动姿势' },
            { title: '强化', content: '定期进行核心和下肢力量训练' }
          ],
          isOpen: false
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
    toggleFaq(index) {
      this.faqs = this.faqs.map((faq, idx) => ({
        ...faq,
        isOpen: idx === index ? !faq.isOpen : false
      }))
    }
  }
}
</script>

<style scoped>
.faq-section {
  padding: 100px 0;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
}

.section-title {
  text-align: center;
  margin-bottom: 50px;
  font-size: 2.5rem;
  color: var(--text-color);
}

.faq-grid {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.faq-item {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: var(--shadow);
  opacity: 0;
  transform: translateY(20px);
}

.faq-item.visible {
  animation: slideUp 0.6s ease-out forwards;
}

.faq-question {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
  color: var(--text-color);
}

.faq-question:hover {
  background: rgba(52, 152, 219, 0.05);
}

.faq-question.active {
  color: var(--primary-color);
}

.arrow {
  width: 10px;
  height: 10px;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(45deg);
  transition: transform 0.3s;
}

.faq-question.active .arrow {
  transform: rotate(-135deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  background: #f8f9fa;
}

.faq-answer.open {
  max-height: 500px;
}

.answer-content {
  padding: 20px;
  color: var(--text-color);
}

.answer-content p {
  margin-bottom: 15px;
  line-height: 1.6;
}

.answer-content ul {
  list-style: none;
}

.answer-content li {
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
}

.answer-content li::before {
  content: '•';
  color: var(--primary-color);
  position: absolute;
  left: 0;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
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
  
  .faq-grid {
    padding: 0 20px;
  }
  
  .faq-question {
    padding: 15px;
    font-size: 0.95rem;
  }
}
</style> 