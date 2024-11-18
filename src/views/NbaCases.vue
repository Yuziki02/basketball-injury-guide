<template>
  <div class="nba-cases">
    <div class="container">
      <h1 class="page-title">NBA球员伤病经历</h1>
      <div class="cases-grid">
        <div v-for="(player, index) in players" 
             :key="index" 
             class="case-card"
             :class="{ 'visible': isVisible }"
             :style="{ animationDelay: `${index * 0.1}s` }">
          <div class="player-image">
            <img :src="player.image" :alt="player.name">
          </div>
          <div class="case-content">
            <h2>{{ player.name }}</h2>
            <p class="team">{{ player.team }}</p>
            <div class="injury-details">
              <h3>伤病经历</h3>
              <ul>
                <li v-for="(injury, idx) in player.injuries" :key="idx">
                  <span class="date">{{ injury.date }}</span>
                  <span class="injury">{{ injury.description }}</span>
                  <p class="recovery">康复过程：{{ injury.recovery }}</p>
                </li>
              </ul>
            </div>
            <div class="lessons">
              <h3>经验总结</h3>
              <p>{{ player.lessons }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NbaCases',
  data() {
    return {
      isVisible: false,
      players: [
        {
          name: '德里克·罗斯',
          team: '芝加哥公牛队',
          image: '/images/players/rose.jpg',
          injuries: [
            {
              date: '2012年4月',
              description: 'ACL撕裂',
              recovery: '手术后进行了长达一年的康复训练'
            }
          ],
          lessons: '保持耐心和积极的心态是康复过程中最重要的。'
        },
        // 可以添加更多球员案例
      ]
    }
  }
}
</script>

<style scoped>
.nba-cases {
  padding: 100px 0;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
}

.page-title {
  text-align: center;
  margin-bottom: 50px;
  font-size: 2.5rem;
  color: var(--text-color);
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;
}

.case-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s;
}

.case-card:hover {
  transform: translateY(-10px);
}

.player-image {
  height: 200px;
  overflow: hidden;
}

.player-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.case-content {
  padding: 20px;
}

.team {
  color: var(--primary-color);
  margin-bottom: 15px;
}

.injury-details {
  margin: 20px 0;
}

.injury-details ul {
  list-style: none;
}

.date {
  color: var(--text-color);
  font-weight: bold;
}

.recovery {
  margin-top: 5px;
  color: #666;
}

.lessons {
  padding-top: 15px;
  border-top: 1px solid #eee;
}

@media (max-width: 768px) {
  .cases-grid {
    grid-template-columns: 1fr;
  }
}
</style> 