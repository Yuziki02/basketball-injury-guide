<template>
  <div class="training">
    <div class="container">
      <h1 class="page-title">训练计划</h1>
      <div class="training-grid">
        <div v-for="(plan, index) in trainingPlans" 
             :key="index"
             class="training-card"
             :class="{ 'visible': isVisible }"
             :style="{ animationDelay: `${index * 0.1}s` }">
          <div class="plan-header">
            <h2>{{ plan.title }}</h2>
            <span class="duration">{{ plan.duration }}</span>
          </div>
          <div class="plan-content">
            <div class="objectives">
              <h3>训练目标</h3>
              <ul>
                <li v-for="(obj, idx) in plan.objectives" :key="idx">{{ obj }}</li>
              </ul>
            </div>
            <div class="exercises">
              <h3>训练内容</h3>
              <div v-for="(exercise, idx) in plan.exercises" :key="idx" class="exercise-item">
                <h4>{{ exercise.name }}</h4>
                <p class="sets">{{ exercise.sets }}</p>
                <p class="notes">{{ exercise.notes }}</p>
              </div>
            </div>
            <div class="precautions">
              <h3>注意事项</h3>
              <ul>
                <li v-for="(note, idx) in plan.precautions" :key="idx">{{ note }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Training',
  data() {
    return {
      isVisible: false,
      trainingPlans: [
        {
          title: '基础力量训练',
          duration: '6-8周',
          objectives: [
            '增强核心力量',
            '提高下肢稳定性',
            '改善整体协调性'
          ],
          exercises: [
            {
              name: '深蹲',
              sets: '4组 x 12次',
              notes: '保持正确姿势，膝盖不超过脚尖'
            },
            {
              name: '平板支撑',
              sets: '3组 x 45秒',
              notes: '保持核心收紧，身体成一条直线'
            },
            {
              name: '弹跳训练',
              sets: '3组 x 10次',
              notes: '着地时注意缓冲，保护膝关节'
            }
          ],
          precautions: [
            '训练前充分热身',
            '循序渐进增加强度',
            '出现不适及时停止'
          ]
        },
        {
          title: '专项技能训练',
          duration: '4-6周',
          objectives: [
            '提高投篮稳定性',
            '增强运球控制能力',
            '改善移动速度'
          ],
          exercises: [
            {
              name: '投篮训练',
              sets: '200次/天',
              notes: '不同位置，注意投篮手型'
            },
            {
              name: '变向运球',
              sets: '15分钟/组 x 3组',
              notes: '结合实战场景，提高对抗能力'
            }
          ],
          precautions: [
            '保持正确动作要领',
            '注意力集中',
            '适时调整训练强度'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.training {
  padding: 100px 0;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
}

.page-title {
  text-align: center;
  margin-bottom: 50px;
  font-size: 2.5rem;
  color: var(--text-color);
}

.training-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  padding: 20px;
}

.training-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s;
  opacity: 0;
  transform: translateY(20px);
}

.training-card.visible {
  animation: slideUp 0.6s ease-out forwards;
}

.plan-header {
  background: var(--primary-color);
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.plan-header h2 {
  margin: 0;
  font-size: 1.5rem;
}

.duration {
  background: rgba(255, 255, 255, 0.2);
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
}

.plan-content {
  padding: 20px;
}

.objectives, .exercises, .precautions {
  margin-bottom: 25px;
}

.objectives h3, .exercises h3, .precautions h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
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

.exercise-item {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
}

.exercise-item h4 {
  color: var(--text-color);
  margin-bottom: 10px;
}

.sets {
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 5px;
}

.notes {
  font-size: 0.9rem;
  color: #666;
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
  .training-grid {
    grid-template-columns: 1fr;
  }
}
</style> 