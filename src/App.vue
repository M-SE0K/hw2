<template>
  <main class="chuseok-page">
    <!-- decorative background elements -->
    <div class="sky-gradient"></div>
    <div class="stars">
      <div class="star s1"></div>
      <div class="star s2"></div>
      <div class="star s3"></div>
    </div>

    <!-- moon -->
    <div class="moon-wrapper">
      <div class="moon">
        <div class="moon-glow"></div>
        <div class="rabbit">
          <!-- 달토끼 실루엣 -->
          <div class="ear left"></div>
          <div class="ear right"></div>
          <div class="head"></div>
          <div class="body"></div>
          <div class="mortar"></div>
          <div class="pestle"></div>
        </div>
      </div>
    </div>

    <!-- headline / greeting -->
    <section class="hero">
      <p class="tag">한가위</p>
      <h1 class="title">
        풍성한 한가위 되세요 🎑
      </h1>
      <p class="subtitle">
        둥근 보름달처럼, 당신의 마음도 가득 찼으면 좋겠어요.
      </p>
    </section>

    <!-- wishes cards -->
    <section class="wishes">
      <article class="wish-card">
        <div class="icon">🌕</div>
        <div class="wish-texts">
          <h2>마음 가득</h2>
          <p>
            고마운 사람에게 한마디 전하기 좋은 날이에요.
            "덕분에 많이 행복했어." 라는 말도 충분히 선물이에요.
          </p>
        </div>
      </article>

      <article class="wish-card">
        <div class="icon">🏠</div>
        <div class="wish-texts">
          <h2>가족 가득</h2>
          <p>
            멀리 있어도 괜찮아요. 잘 지내냐는 안부 하나면,
            우리는 이미 연결돼 있으니까요.
          </p>
        </div>
      </article>

      <article class="wish-card">
        <div class="icon">🍊</div>
        <div class="wish-texts">
          <h2>건강 가득</h2>
          <p>
            맛있게 먹고 푹 쉬고, 내 몸 챙기는 명절로.
            이번 한가위는 진짜 휴식 모드로 가요.
          </p>
        </div>
      </article>
    </section>

    <!-- footer line -->
    <footer class="footer">
      <div class="divider"></div>
      <p class="footer-text">
        2025 한가위 • 행복 가득하세요 🌝
      </p>
    </footer>
  </main>
</template>

<script setup lang="ts">
// 현재로는 별도 로직 없음.
// 필요한 경우 예: 오늘 날짜나 방문자 이름 props로 받아서 메시지 커스터마이즈 가능.
</script>

<style scoped>
/* Layout base */
.chuseok-page {
  position: relative;
  min-height: 100vh;
  color: #fff;
  font-family: "Pretendard", system-ui, -apple-system, BlinkMacSystemFont,
    "Apple SD Gothic Neo", "Noto Sans KR", Roboto, "Segoe UI", sans-serif;
  padding: 2rem 1.5rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background: radial-gradient(
      circle at 50% 20%,
      rgba(255, 255, 255, 0.08) 0%,
      rgba(0, 0, 0, 0) 60%
    ),
    linear-gradient(160deg, #1a1b3a 0%, #2a2a5a 40%, #3a2e4f 70%, #4e2c3b 100%);
}

/* Subtle moving gradient overlay for "alive" feeling */
.sky-gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 20% 20%,
    rgba(255, 223, 125, 0.18) 0%,
    rgba(0, 0, 0, 0) 70%
  );
  animation: floatGlow 6s ease-in-out infinite alternate;
  pointer-events: none;
}

@keyframes floatGlow {
  0% {
    transform: translate3d(-10px, -10px, 0) scale(1);
    opacity: 0.6;
  }
  100% {
    transform: translate3d(10px, 10px, 0) scale(1.05);
    opacity: 0.9;
  }
}

/* Stars */
.stars {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.star {
  position: absolute;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  border-radius: 50%;
  width: 3px;
  height: 3px;
  opacity: 0.8;
  animation: twinkle 2.5s infinite ease-in-out;
}

.s1 {
  top: 12%;
  left: 20%;
  animation-delay: 0.2s;
}
.s2 {
  top: 30%;
  right: 15%;
  animation-delay: 1s;
}
.s3 {
  top: 55%;
  left: 10%;
  animation-delay: 1.8s;
}

@keyframes twinkle {
  0% {
    opacity: 0.2;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
}

/* Moon */
.moon-wrapper {
  position: absolute;
  top: 4rem;
  right: 2rem;
  width: 140px;
  height: 140px;
  z-index: 2;
}

.moon {
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #fff8d6 0%, #ffe27a 40%, #cc9f2a 75%);
  box-shadow: 0 0 30px rgba(255, 231, 150, 0.8),
    0 0 80px rgba(255, 212, 94, 0.4);
  overflow: visible;
}

.moon-glow {
  content: "";
  position: absolute;
  inset: -30px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 223, 125, 0.4) 0%,
    rgba(255, 223, 125, 0) 70%
  );
  filter: blur(10px);
  animation: pulse 4s ease-in-out infinite;
  pointer-events: none;
}

@keyframes pulse {
  0% {
    opacity: 0.4;
    transform: scale(0.95);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
  100% {
    opacity: 0.4;
    transform: scale(0.95);
  }
}

/* Rabbit silhouette on the moon */
.rabbit {
  position: absolute;
  bottom: 22px;
  left: 30px;
  width: 80px;
  height: 80px;
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.2));
}

.rabbit .ear {
  position: absolute;
  width: 14px;
  height: 28px;
  background: rgba(70, 50, 10, 0.25);
  border-radius: 40% 40% 50% 50%;
  top: 0;
}

.rabbit .ear.left {
  left: 24px;
  transform: rotate(-10deg);
}
.rabbit .ear.right {
  left: 38px;
  transform: rotate(10deg);
}

.rabbit .head {
  position: absolute;
  top: 18px;
  left: 24px;
  width: 32px;
  height: 28px;
  border-radius: 50%;
  background: rgba(70, 50, 10, 0.25);
}

.rabbit .body {
  position: absolute;
  top: 32px;
  left: 12px;
  width: 44px;
  height: 32px;
  background: rgba(70, 50, 10, 0.25);
  border-radius: 50% 40% 40% 50%;
}

.rabbit .mortar {
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 22px;
  height: 20px;
  background: rgba(70, 50, 10, 0.28);
  border-radius: 4px 4px 6px 6px;
}

.rabbit .pestle {
  position: absolute;
  bottom: 24px;
  right: 18px;
  width: 8px;
  height: 24px;
  background: rgba(70, 50, 10, 0.28);
  border-radius: 4px;
  transform: rotate(-15deg);
  transform-origin: bottom center;
  animation: pound 1.5s infinite ease-in-out;
}

@keyframes pound {
  0%,
  100% {
    transform: rotate(-15deg) translateY(0);
  }
  50% {
    transform: rotate(-5deg) translateY(-3px);
  }
}

/* Greeting / hero text */
.hero {
  z-index: 3;
  text-align: center;
  margin-top: 6rem;
  max-width: 28rem;
}

.tag {
  display: inline-block;
  font-size: 0.8rem;
  line-height: 1;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.28);
  padding: 0.4rem 0.6rem;
  border-radius: 999px;
  letter-spacing: -0.03em;
  backdrop-filter: blur(4px);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
}

.title {
  margin: 1rem 0 0.5rem;
  line-height: 1.3;
  font-size: clamp(1.8rem, 1.2rem + 1.5vw, 2.4rem);
  font-weight: 600;
  letter-spacing: -0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.8),
    0 0 24px rgba(255, 255, 200, 0.5);
  color: #fffbe9;
}

.subtitle {
  font-size: 0.95rem;
  font-weight: 300;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9);
  letter-spacing: -0.03em;
}

/* Wishes cards section */
.wishes {
  z-index: 3;
  margin-top: 2.5rem;
  width: 100%;
  max-width: 900px;

  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 720px) {
  .wishes {
    grid-template-columns: repeat(3, 1fr);
  }
}

.wish-card {
  background: rgba(255, 255, 255, 0.07);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.8),
    0 0 60px rgba(255, 214, 140, 0.15);
  padding: 1.25rem 1rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  min-height: 160px;
  backdrop-filter: blur(6px);
  position: relative;
  isolation: isolate;
}

.icon {
  font-size: 1.4rem;
  line-height: 1;
  margin-right: 0.75rem;
  user-select: none;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.7));
}

.wish-texts h2 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.4rem;
  line-height: 1.4;
  letter-spacing: -0.03em;
  color: #fffdf4;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9),
    0 0 16px rgba(255, 241, 168, 0.4);
}

.wish-texts p {
  font-size: 0.85rem;
  font-weight: 300;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.9);
  word-break: keep-all;
}

/* Card hover glow */
.wish-card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    circle at 20% 20%,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  opacity: 0;
  transition: opacity 0.25s ease;
  pointer-events: none;
}
.wish-card:hover::after {
  opacity: 1;
}

/* footer */
.footer {
  margin-top: 3rem;
  width: 100%;
  max-width: 900px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1.4;
  z-index: 3;
  text-shadow: 0 2px 6px rgba(0,0,0,0.9);
}

.divider {
  height: 1px;
  width: 100%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  opacity: 0.4;
  margin-bottom: 1rem;
}

.footer-text {
  margin: 0;
  letter-spacing: -0.03em;
  word-break: keep-all;
}
</style>
