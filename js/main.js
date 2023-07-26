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


