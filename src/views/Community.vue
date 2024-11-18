<template>
  <div class="community">
    <div class="container">
      <h1 class="page-title">社区交流</h1>
      <div class="community-content">
        <div class="notice">
          <h2>功能开发中</h2>
          <p>社区交流功能即将上线，敬请期待！</p>
          <p>预计包含以下功能：</p>
          <ul>
            <li>康复经验分享</li>
            <li>训练心得交流</li>
            <li>伤病预防讨论</li>
            <li>专家在线答疑</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Community'
}
</script>

<style scoped>
.community {
  padding: 100px 0;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
  min-height: 100vh;
}

.page-title {
  text-align: center;
  margin-bottom: 50px;
  font-size: 2.5rem;
  color: var(--text-color);
}

.community-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.notice {
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: var(--shadow);
  text-align: center;
  max-width: 600px;
}

.notice h2 {
  color: var(--primary-color);
  margin-bottom: 20px;
}

.notice p {
  margin-bottom: 20px;
  color: var(--text-color);
}

.notice ul {
  list-style: none;
  text-align: left;
  margin: 0 auto;
  max-width: 300px;
}

.notice li {
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
}

.notice li::before {
  content: '•';
  color: var(--primary-color);
  position: absolute;
  left: 0;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .notice {
    margin: 0 20px;
    padding: 30px;
  }
}
</style> 