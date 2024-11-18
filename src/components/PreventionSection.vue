<template>
  <section id="prevention" class="prevention-section">
    <div class="container">
      <h2 class="section-title" v-observe-visibility="onVisibilityChange">
        预防伤病的方法
      </h2>
      <div class="prevention-grid">
        <div 
          v-for="(item, index) in preventionItems" 
          :key="index"
          class="prevention-item"
          :class="{ 'visible': isVisible }"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div class="item-image">
            <img :src="item.image" :alt="item.title">
          </div>
          <h3>{{ item.title }}</h3>
          <div class="content">
            <ul>
              <li v-for="(point, idx) in item.points" :key="idx">
                {{ point }}
              </li>
            </ul>
            <button v-if="item.hasVideo" class="video-btn" @click="showVideo(item)">
              观看示范视频
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// 使用动态导入
const warmUpImg = new URL('../assets/images/prevention/warm-up.jpg', import.meta.url).href
const stretchingImg = new URL('../assets/images/prevention/stretching.jpg', import.meta.url).href
const equipmentImg = new URL('../assets/images/prevention/equipment.jpg', import.meta.url).href

export default {
  name: 'PreventionSection',
  data() {
    return {
      isVisible: false,
      preventionItems: [
        {
          title: '科学热身',
          image: warmUpImg,
          points: [
            '赛前15-20分钟充分热身',
            '从慢跑开始，逐渐提升强度',
            '慢跑热身（5-10分钟）',
            '动态拉伸（重点是下肢）',
            '专项热身动作（投篮、传球）',
            '注意循序渐进，不要急于进入高强度运动'
          ],
          hasVideo: true
        },
        {
          title: '正确的动作规范',
          image: stretchingImg,
          points: [
            '膝盖微曲缓冲',
            '双脚平稳着地',
            '避免单脚硬着地',
            '保持重心稳定',
            '核心收紧',
            '避免急转急停'
          ],
          hasVideo: false
        },
        {
          title: '防护装备使用',
          image: equipmentImg,
          points: [
            '专业篮球鞋（提供足够支撑）',
            '护踝（预防扭伤）',
            '护膝（保护膝关节）',
            '护指（预防手指伤害）',
            '定期更换磨损的装备',
            '选择合适的尺寸'
          ],
          hasVideo: false
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
    showVideo(item) {
      // 实现视频播放逻辑
      alert('视频播放功能开发中...');
    }
  }
}
</script>

<style scoped>
.prevention-section {
  padding: 100px 0;
  background: linear-gradient(to bottom, #ffffff, #f8f9fa);
}

.section-title {
  text-align: center;
  margin-bottom: 50px;
  font-size: 2.5rem;
  color: var(--text-color);
}

.prevention-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  padding: 20px;
}

.prevention-item {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s;
  opacity: 0;
  transform: translateY(20px);
}

.prevention-item.visible {
  animation: slideUp 0.6s ease-out forwards;
}

.item-image {
  height: 200px;
  overflow: hidden;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.prevention-item:hover .item-image img {
  transform: scale(1.1);
}

.prevention-item h3 {
  padding: 20px;
  margin: 0;
  color: var(--primary-color);
  font-size: 1.5rem;
  border-bottom: 1px solid #eee;
}

.content {
  padding: 20px;
}

.content ul {
  list-style: none;
  margin-bottom: 20px;
}

.content ul li {
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
}

.content ul li::before {
  content: '•';
  color: var(--primary-color);
  position: absolute;
  left: 0;
}

.video-btn {
  width: 100%;
  padding: 12px 25px;
  border: none;
  border-radius: 25px;
  background: var(--primary-color);
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.video-btn:hover {
  background: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
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
  .prevention-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style> 