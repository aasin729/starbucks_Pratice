const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


// 오른쪽 배지 부분 
const bagdeEl = document.querySelector('header .badges');

//window객체는 프로젝트 화면 출력되는 그 자체
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    // 배지 숨기기
    // bagdeEl.style.display = 'none';
    // gsap.to(요소, 지속시간, 옵션); => fade-out 개념 (서서히 사라짐)
    gsap.to(bagdeEl, 0.6, {
      opacity: 0,
      display : 'none'
    });
  }else{
    // 배지 보이기
    // bagdeEl.style.display = 'block';
    gsap.to(bagdeEl, 0.6, {
      opacity: 1,
      display : 'block'
    });
  }
}, 300));
// _,throttle(함수, 시간)


// visual 섹션 부분 순차적으로 이미지 나타나게하기
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  //gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) *  0.7, // 0.7, 1.4, 2.1, 2.7 순으로 나타나게됨
    opacity: 1
  });
});

// 공지사항 수직 슬라이드 부분

// new Swiper(선택자 ,옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});

new Swiper('.promotion .swiper-container', {
  slidesPerView : 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlide : true, // 1번 슬라이드가 가운데 보이기
  loop : true,
  autoplay : {
    delay: 2000
  }
});
