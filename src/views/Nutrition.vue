<template>
  <div class="nutrition">
    <div class="container">
      <h1 class="page-title">营养指导</h1>
      <div class="nutrition-grid">
        <div v-for="(category, index) in nutritionGuide" 
             :key="index"
             class="nutrition-card"
             :class="{ 'visible': isVisible }"
             :style="{ animationDelay: `${index * 0.1}s` }">
          <div class="card-header" :style="{ backgroundColor: category.color }">
            <h2>{{ category.title }}</h2>
            <span class="timing">{{ category.timing }}</span>
          </div>
          <div class="card-content">
            <div class="recommendations">
              <h3>推荐食物</h3>
              <div class="food-grid">
                <div v-for="(food, idx) in category.foods" 
                     :key="idx"
                     class="food-item">
                  <img :src="food.image" :alt="food.name">
                  <div class="food-info">
                    <h4>{{ food.name }}</h4>
                    <p>{{ food.benefit }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="tips">
              <h3>注意事项</h3>
              <ul>
                <li v-for="(tip, idx) in category.tips" :key="idx">
                  {{ tip }}
                </li>
              </ul>
            </div>
            <div class="meal-plan" v-if="category.mealPlan">
              <h3>示例食谱</h3>
              <div class="meal-items">
                <div v-for="(meal, idx) in category.mealPlan" 
                     :key="idx"
                     class="meal-item">
                  <span class="meal-time">{{ meal.time }}</span>
                  <p class="meal-content">{{ meal.content }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nutrition',
  data() {
    return {
      isVisible: false,
      nutritionGuide: [
        {
          title: '日常训练期营养',
          timing: '常规训练期间',
          color: '#3498db',
          foods: [
            {
              name: '全谷物',
              image: '/images/nutrition/grains.jpg',
              benefit: '提供持久能量，富含碳水化合物和膳食纤维'
            },
            {
              name: '瘦肉蛋白',
              image: '/images/nutrition/protein.jpg',
              benefit: '促进肌肉修复和生长'
            }
          ],
          tips: [
            '保持充足的水分摄入',
            '合理分配三餐时间',
            '注意营养均衡'
          ],
          mealPlan: [
            {
              time: '早餐',
              content: '全麦面包 + 鸡蛋 + 牛奶 + 水果'
            },
            {
              time: '午餐',
              content: '糙米饭 + 鸡胸肉 + 西兰花 + 胡萝卜'
            }
          ]
        },
        {
          title: '赛前营养补充',
          timing: '比赛前2-3小时',
          color: '#2ecc71',
          foods: [
            {
              name: '香蕉',
              image: '/images/nutrition/banana.jpg',
              benefit: '提供快速能量，补充钾元素'
            },
            {
              name: '能量棒',
              image: '/images/nutrition/energybar.jpg',
              benefit: '便携易消化的能量来源'
            }
          ],
          tips: [
            '避免高脂肪食物',
            '选择容易消化的食物',
            '控制食物量'
          ]
        },
        {
          title: '恢复期营养',
          timing: '训练/比赛后',
          color: '#e74c3c',
          foods: [
            {
              name: '蛋白质奶昔',
              image: '/images/nutrition/protein-shake.jpg',
              benefit: '快速补充蛋白质，促进肌肉恢复'
            },
            {
              name: '水果',
              image: '/images/nutrition/fruits.jpg',
              benefit: '补充维生素和抗氧化物质'
            }
          ],
          tips: [
            '30分钟内补充碳水和蛋白',
            '注意补充流失的电解质',
            '适量补充维生素C'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.nutrition {
  padding: 100px 0;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
}

.page-title {
  text-align: center;
  margin-bottom: 50px;
  font-size: 2.5rem;
  color: var(--text-color);
}

.nutrition-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  padding: 20px;
}

.nutrition-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: var(--shadow);
  opacity: 0;
  transform: translateY(20px);
}

.nutrition-card.visible {
  animation: slideUp 0.6s ease-out forwards;
}

.card-header {
  padding: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header h2 {
  margin: 0;
  font-size: 1.5rem;
}

.timing {
  background: rgba(255, 255, 255, 0.2);
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
}

.card-content {
  padding: 20px;
}

.food-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 15px 0;
}

.food-item {
  display: flex;
  align-items: center;
  gap: 15px;
  background: #f8f9fa;
  padding: 15px;
  border-radius: 10px;
}

.food-item img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
}

.food-info h4 {
  margin: 0 0 5px 0;
  color: var(--text-color);
}

.food-info p {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
}

.tips {
  margin: 25px 0;
}

.tips ul {
  list-style: none;
}

.tips li {
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
}

.tips li::before {
  content: '•';
  color: var(--primary-color);
  position: absolute;
  left: 0;
}

.meal-items {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 15px;
}

.meal-item {
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.meal-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.meal-time {
  font-weight: 500;
  color: var(--primary-color);
}

.meal-content {
  margin: 5px 0 0 0;
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
  .nutrition-grid {
    grid-template-columns: 1fr;
  }
  
  .food-grid {
    grid-template-columns: 1fr;
  }
}
</style> 