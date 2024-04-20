window.addEventListener("load", ()=>{
  const TopPage = document.getElementById("TopPage")!
  const ScrollButton = document.getElementById("ScrollButton")!

  // 상단페이지 투명도 조절. 25% 이하로 보이면 서서히 fade out 합니다.
  // cubic 따라 ease(scrolled%) 됨.
  // easing https://easings.net/ko#easeInCubic
  function easeInCubic(x:number) {
    return x * x * x
  }
  let transparent = 1
  function ToppageRecalculate() {
    const height = document.body.clientHeight
    const scrollY = document.body.scrollTop
    const offset = scrollY-height*0.5
    let transparent = 0
    if (offset >= 0) {
      transparent = easeInCubic(Math.min(1,offset/(height*0.5)))
    }
    TopPage.style.opacity = (1 - transparent).toString()
  }
  document.body.addEventListener("scroll", ToppageRecalculate)
  document.body.addEventListener("scrollend", ToppageRecalculate)
})

// 스크롤 버튼
// ScrollButton.addEventListener("click",()=>{
//   let currentPos
//   document.querySelectorAll(".page-content").forEach(item=>{
//     item.querySelector(">div").offsetTop
//   })
// })
