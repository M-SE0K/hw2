<template>
  <main class="chuseok-page">
    <!-- background sky / gradient -->
    <div class="sky"></div>

    <!-- floating moon with rabbit -->
    <div class="moon-area">
      <div class="moon">
        <div class="moon-glow"></div>
        <div class="rabbit">
          <div class="ear left"></div>
          <div class="ear right"></div>
          <div class="head"></div>
          <div class="body"></div>
          <div class="mortar"></div>
          <div class="pestle"></div>
        </div>
      </div>
    </div>

    <!-- HERO / MAIN COPY -->
    <header class="hero">
      <div class="badge">2025 한가위 특별 페이지</div>
      <h1 class="headline">
        풍성한 보름달처럼,<br />
        당신의 마음에도 밝은 빛이 가득하길 🌕
      </h1>
      <p class="lead">
        추석은 단순한 연휴가 아니라 “함께”의 이야기예요.
        잘 지냈냐는 한마디와 나눠먹는 한 조각 송편 속에
        1년치 안부와 그리움이 녹아 있어요.
      </p>
    </header>

    <!-- SECTION: 무엇이 한가위를 특별하게 만들까? -->
    <section class="section intro">
      <h2 class="section-title">한가위는 왜 “가장 큰 날”일까?</h2>
      <p class="section-desc">
        한가위(추석)는 음력 8월 15일, 곡식이 무르익는 수확의 계절 한가운데서
        “올해도 잘 버텼다”를 서로 확인하고 감사하는 날이에요.
        <br /><br />
        이 날의 보름달은 단순한 달이 아니라,
        “우리 집 모두 무탈하게, 내년에도 잘 부탁해”라는 마음을 비추는 큰 등불처럼 여겨졌습니다.
        그래서 예전 사람들은 달을 보며 빌었고, 지금 우리는 서로를 보며 빌어요.
      </p>

      <!-- simple decorative image / placeholder -->
      <div class="image-card">
        <img
          class="image"
          src="./img/img0.jpeg"
          alt="밝은 보름달과 야경"
        />
        <p class="img-caption">
          “보름달은 멀리 있는 가족도 한 하늘 아래서 함께 보고 있는 같은 창문이었다”
        </p>
      </div>
    </section>

    <!-- SECTION: 전통 음식 -->
    <section class="section food">
      <h2 class="section-title">추석 음식 이야기</h2>
      <div class="cards">
        <!-- 송편 -->
        <article class="card">
          <div class="card-image-wrap">
            <img
              class="card-image"
              src="./img/img1.jpeg"
              alt="다양한 색의 송편"
            />
          </div>
          <div class="card-body">
            <h3 class="card-title">송편 (松餠)</h3>
            <p class="card-text">
              반달 모양으로 반죽을 빚어 참깨·콩·깨소금 등을 넣어 찌는 떡.
              “송편을 예쁘게 빚으면 예쁜 아이를 낳는다”는 말이 전해질 만큼
              정성과 소망이 담긴 음식이에요.
              <br /><br />
              가족이 둘러앉아 송편을 함께 빚는 시간 자체가
              사실상 그 집만의 작은 한가위 전통이에요.
            </p>
          </div>
        </article>

        <!-- 전 / 부침 -->
        <article class="card">
          <div class="card-image-wrap">
            <img
              class="card-image"
              src="./img/img2.jpeg"
              alt="노릇하게 부친 전"
            />
          </div>
          <div class="card-body">
            <h3 class="card-title">각종 전(煎)</h3>
            <p class="card-text">
              호박전, 동그랑땡, 버섯전, 동태전… 기름에 노릇하게 지져낸 전은
              “수고 많았다”는 어른들의 위로이자
              “많이 먹어라”라는 은근한 사랑 표현이에요.
              <br /><br />
              명절 부엌에서 나는 전 부치는 소리와 냄새는
              어린 시절 기억에서 거의 BGM처럼 깔려 있죠.
            </p>
          </div>
        </article>

        <!-- 과일/햇과일 -->
        <article class="card">
          <div class="card-image-wrap">
            <img
              class="card-image"
              src="./img/img3.jpeg"
              alt="추석 제사용 과일"
            />
          </div>
          <div class="card-body">
            <h3 class="card-title">햇과일</h3>
            <p class="card-text">
              막 수확한 배, 사과, 밤은 조상님께 감사 인사를 올리는 제수(祭需)이자
              “올해 농사 잘 됐습니다”라는 보고서였어요.
              <br /><br />
              현대에는 정갈하게 깎아 함께 나누어 먹으면서
              수확의 기쁨을 나누는 상징처럼 남아있습니다.
            </p>
          </div>
        </article>
      </div>
    </section>

    <!-- SECTION: 전통 놀이 -->
    <section class="section play">
      <h2 class="section-title">온 가족이 같이 놀던 한가위 놀이</h2>

      <div class="play-grid">
        <div class="play-item">
          <div class="play-header">
            <span class="play-emoji">🪀</span>
            <h3 class="play-title">강강술래</h3>
          </div>
          <p class="play-text">
            달 밝은 밤, 손에 손을 잡고 둥글게 원을 만들고
            노래를 부르며 돌던 호흡 게임이자 군무.
            옛날엔 풍농제(풍년 기원 의식)의 일부였고,
            지금은 ‘다 같이 놀았다’의 상징 같은 민속춤이에요.
          </p>
        </div>

        <div class="play-item">
          <div class="play-header">
            <span class="play-emoji">🪁</span>
            <h3 class="play-title">연날리기 & 씨름</h3>
          </div>
          <p class="play-text">
            겨울 이미지로 많이 기억하지만,
            고향에 모인 김에 친척들과 몸으로 부딪히며 놀던 대표 액티비티가 씨름.
            단순한 힘 자랑이 아니라 “우리 집 장사 누구냐”를 뽑는 이벤트였죠.
          </p>
        </div>

        <div class="play-item">
          <div class="play-header">
            <span class="play-emoji">🎯</span>
            <h3 class="play-title">투호</h3>
          </div>
          <p class="play-text">
            항아리나 통에 화살 모양 막대를 던져 넣는 놀이.
            규칙은 단순한데 은근 승부욕이 넘쳐서,
            작은 마루방이 순식간에 ‘가문의 명예전’이 되곤 했습니다.
          </p>
        </div>
      </div>

      <!-- story block -->
      <div class="story-box">
        <h3 class="story-title">한 장면을 상상해봐요</h3>
        <p class="story-text">
          창문 열면 서늘한 가을 냄새, 부엌에서는 달큰한 기름 냄새,
          거실에는 TV 너무 크게 보는 삼촌,
          방 한쪽엔 낮잠 자는 할머니.
          그리고 테이블 위엔 아직도 따끈한 송편.
          <br /><br />
          추석은 결국 풍경이에요.
          “잘 지내지?”라는 그 말이 오가는 풍경.
        </p>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="divider"></div>
      <p class="footer-text">
        🌕 한가위 잘 보내세요. 모두의 올가을이 편안하고 부드럽길.
      </p>
      <p class="footer-credits">
        Text & page layout generated with GPT-5 Thinking.
        <br />
        Images from Unsplash (placeholder).
      </p>
    </footer>
  </main>
</template>

<script setup lang="ts">
// 이 페이지는 정적 랜딩 페이지 컨셉이라 현재 별도 상태나 로직은 없음.
// 추후 필요하다면 props나 store를 받아서 사용자 이름/지역 인사말 등 개인화 가능.
</script>

<style scoped>
/* overall page */
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
  background: radial-gradient(
      circle at 50% 20%,
      rgba(255, 255, 255, 0.08) 0%,
      rgba(0, 0, 0, 0) 60%
    ),
    linear-gradient(160deg, #1a1b3a 0%, #2a2a5a 40%, #3a2e4f 70%, #4e2c3b 100%);
  overflow: hidden;
}

/* animated subtle glow layer */
.sky {
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

/* moon with rabbit */
.moon-area {
  position: absolute;
  top: 2rem;
  right: 1.5rem;
  width: 140px;
  height: 140px;
  z-index: 2;
}
.moon {
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 30%,
    #fff8d6 0%,
    #ffe27a 40%,
    #cc9f2a 75%
  );
  box-shadow: 0 0 30px rgba(255, 231, 150, 0.8),
    0 0 80px rgba(255, 212, 94, 0.4);
}
.moon-glow {
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

/* cute rabbit silhouette */
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

/* HERO */
.hero {
  z-index: 3;
  text-align: center;
  margin-top: 6rem;
  max-width: 32rem;
  color: #fff;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.8),
    0 0 24px rgba(255, 255, 200, 0.5);
}
.badge {
  display: inline-block;
  font-size: 0.75rem;
  line-height: 1;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.28);
  padding: 0.4rem 0.6rem;
  border-radius: 999px;
  letter-spacing: -0.03em;
  backdrop-filter: blur(4px);
}
.headline {
  margin: 1rem 0 0.75rem;
  line-height: 1.3;
  font-size: clamp(1.8rem, 1.2rem + 1.5vw, 2.4rem);
  font-weight: 600;
  letter-spacing: -0.04em;
  color: #fffbe9;
}
.lead {
  font-size: 0.95rem;
  font-weight: 300;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: -0.03em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9);
}

/* GENERIC SECTION STYLING */
.section {
  position: relative;
  z-index: 3;
  max-width: 900px;
  width: 100%;
  margin-top: 3rem;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9);
}
.section-title {
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
  color: #fffdf4;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9),
    0 0 16px rgba(255, 241, 168, 0.4);
}
.section-desc {
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.82);
  letter-spacing: -0.03em;
  word-break: keep-all;
}

/* IMAGE CARD */
.image-card {
  margin-top: 1.5rem;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.8),
    0 0 60px rgba(255, 214, 140, 0.15);
  overflow: hidden;
  backdrop-filter: blur(6px);
}
.image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}
.img-caption {
  margin: 0;
  font-size: 0.8rem;
  padding: 0.8rem 1rem 1rem;
  font-weight: 300;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  word-break: keep-all;
}

/* FOOD CARDS GRID */
.cards {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}
@media (min-width: 720px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
.card {
  background: rgba(255, 255, 255, 0.07);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.8),
    0 0 60px rgba(255, 214, 140, 0.15);
  overflow: hidden;
  backdrop-filter: blur(6px);
  display: flex;
  flex-direction: column;
}
.card-image-wrap {
  width: 100%;
  max-height: 180px;
  overflow: hidden;
}
.card-image {
  display: block;
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.card-body {
  padding: 1rem 1rem 1.25rem;
}
.card-title {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: -0.03em;
  color: #fffdf4;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9),
    0 0 16px rgba(255, 241, 168, 0.4);
}
.card-text {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 300;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.9);
  word-break: keep-all;
}

/* PLAY SECTION */
.play-grid {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}
@media (min-width: 720px) {
  .play-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.play-item {
  background: rgba(255, 255, 255, 0.07);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.8),
    0 0 60px rgba(255, 214, 140, 0.15);
  padding: 1rem 1rem 1.25rem;
  min-height: 180px;
  backdrop-filter: blur(6px);
}
.play-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
.play-emoji {
  font-size: 1.3rem;
  line-height: 1;
  margin-right: 0.5rem;
}
.play-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: #fffdf4;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9),
    0 0 16px rgba(255, 241, 168, 0.4);
  letter-spacing: -0.03em;
}
.play-text {
  font-size: 0.8rem;
  font-weight: 300;
  line-height: 1.5;
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  word-break: keep-all;
}

/* STORY BOX */
.story-box {
  margin-top: 2rem;
  background: rgba(255, 255, 255, 0.09);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.22);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.8),
    0 0 60px rgba(255, 214, 140, 0.2);
  padding: 1rem 1rem 1.25rem;
  backdrop-filter: blur(8px);
}
.story-title {
  margin: 0 0 0.5rem 0;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: -0.03em;
  color: #fffdf4;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9),
    0 0 16px rgba(255, 241, 168, 0.4);
}
.story-text {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 300;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.82);
  word-break: keep-all;
}

/* FOOTER */
.footer {
  margin-top: 4rem;
  width: 100%;
  max-width: 900px;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
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
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.03em;
  word-break: keep-all;
}
.footer-credits {
  margin: 0;
  font-size: 0.7rem;
  line-height: 1.4;
  opacity: 0.8;
  word-break: keep-all;
}
</style>
