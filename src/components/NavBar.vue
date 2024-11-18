<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="container">
      <router-link to="/" class="logo">篮球防伤康复</router-link>
      <ul class="nav-links">
        <li><router-link to="/" class="nav-link">首页</router-link></li>
        <li><router-link to="/training" class="nav-link">训练计划</router-link></li>
        <li><router-link to="/nutrition" class="nav-link">营养指导</router-link></li>
        <li><router-link to="/nba-cases" class="nav-link">NBA案例</router-link></li>
        <li><router-link to="/community" class="nav-link">社区交流</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  transition: all 0.3s ease;
  padding: 20px 0;
}

.navbar-scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  padding: 15px 0;
}

.navbar-scrolled .nav-link {
  color: #333;
}

.navbar-scrolled .logo {
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  transition: color 0.3s;
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.nav-link {
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: all 0.3s;
  position: relative;
  padding: 5px 0;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--primary-color);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  transition: width 0.3s ease;
  border-radius: 2px;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.navbar-scrolled .nav-link:hover,
.navbar-scrolled .nav-link.router-link-active {
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
}

/* 动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.navbar {
  animation: fadeIn 0.5s ease-out;
}
</style> 