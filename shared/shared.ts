window.addEventListener("load", ()=>{
  document.body.classList.remove("preload")

  const Topbar = document.getElementById("Topbar")!
  
  // 스크롤시 탑바 블러 추가
  function TopbarRecalculate() {
    const scrollY = document.body.scrollTop
    // TopPage.clientHeight
    if (scrollY>1) {
      if (!Topbar.classList.contains("topbar-blur")) Topbar.classList.add("topbar-blur")
    } else {
      if (Topbar.classList.contains("topbar-blur")) Topbar.classList.remove("topbar-blur")
    }
  }
  document.body.addEventListener("scroll", TopbarRecalculate)
  document.body.addEventListener("scrollend", TopbarRecalculate)
  
  // 콘텐츠 스크롤시 페이드인 페이드아웃
  function ContentRecalculate(entry) {
    if (entry.isIntersecting) {
      if (!entry.target.classList.contains("page-content-showen"))
        entry.target.classList.add("page-content-showen")
    } else if (entry.target.offsetTop > document.body.scrollTop) {
      if (entry.target.classList.contains("page-content-showen"))
        entry.target.classList.remove("page-content-showen")
    }
  }
  let contentObserver = new IntersectionObserver(
    e=>e.forEach(entry=>ContentRecalculate(entry)),
    {
      root: document.body,
      rootMargin: "0px",
      threshold: 0.12,
    }
  )
  document.querySelectorAll(".page-content").forEach(e=>contentObserver.observe(e))
})