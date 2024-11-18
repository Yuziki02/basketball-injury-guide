<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="container">
      <div class="logo">篮球防伤康复</div>
      <ul class="nav-links">
        <li v-for="(link, index) in links" :key="index">
          <a :href="link.href" @click="smoothScroll">{{ link.text }}</a>
        </li>
      </ul>
      <div class="mobile-menu" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isScrolled: false,
      links: [
        { href: '#home', text: '首页' },
        { href: '#injuries', text: '常见伤病' },
        { href: '#prevention', text: '预防技巧' },
        { href: '#recovery', text: '康复步骤' },
        { href: '#experts', text: '专业指导' },
        { href: '#faq', text: 'FAQ' }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    smoothScroll(e) {
      e.preventDefault()
      const target = e.target.getAttribute('href')
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
      })
    }
  },
  beforeDestroy() {
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
  box-shadow: var(--shadow);
  padding: 15px 0;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 30px;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  transition: color 0.3s;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: width 0.3s;
}

.nav-links a:hover::after {
  width: 100%;
}

.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
}

.mobile-menu span {
  width: 30px;
  height: 3px;
  background-color: var(--text-color);
  transition: all 0.3s;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .mobile-menu {
    display: flex;
  }
}
</style> 