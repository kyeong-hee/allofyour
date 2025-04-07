// BestItem Swiper
const bestSwiper = new Swiper(".bestSwiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 800,

  // media-query
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    541: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 3,
    }
  }
});


// header scrollevent
let lastScrollTop = 0;
let header = document.querySelector('.bottom_h');

// scroll event
window.addEventListener('scroll', ()=>{
  let currentScroll = window.scrollY || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop){
    // 스크롤 아래로 내렸을 때
    header.style.opacity = '0';
    header.style.pointerEvents = 'none';
  } else{
    // 스크롤 위로 올렸을 때
    header.style.opacity = '1';
    header.style.pointerEvents = 'auto';
    header.style.zIndex = '100';
  }
  lastScrollTop = currentScroll <=0 ? 0: currentScroll;
});


// All items
let items = [
  {
    id: 1,
    title: "하트 니트반팔 카라니트",
    price: "42,000원",
    sale: "37,800원",
    img: "./img/item/하트_반팔카라니트.jpg",
  },
  {
    id: 2,
    title: "가죽 버뮤다 팬츠",
    price: "34,200원",
    sale: "31,800원",
    img: "./img/item/가죽_버뮤다팬츠.jpg",
  },
  {
    id: 3,
    title: "기모 반팔 티셔츠",
    price: "19,000원",
    sale: "17,100원",
    img: "./img/item/기모_반팔티셔츠.jpg",
  },
  {
    id: 4,
    title: "나시 원피스 잠옷",
    price: "29,000원",
    sale: "26,100원",
    img: "./img/item/나시_원피스_잠옷.jpg",
  },
  {
    id: 5,
    title: "니트 뷔스티에 조끼",
    price: "27,000원",
    sale: "24,300원",
    img: "./img/item/니트_뷔스티에_조끼.jpg",
  },
  {
    id: 6,
    title: "단가라 시스루 니트",
    price: "20,000원",
    sale: "18,000원",
    img: "./img/item/단가라_시스루니트.jpg",
  },
  {
    id: 7,
    title: "데님미니스커트 치마바지",
    price: "36,000원",
    sale: "32,400원",
    img: "./img/item/데님미니스커트_치마바지.jpg",
  },
  {
    id: 8,
    title: "라운드넥 가디건",
    price: "33,000원",
    sale: "29,700원",
    img: "./img/item/라운드넥가디건.jpg",
  },
  {
    id: 9,
    title: "레이어드 뷔스티에 티셔츠",
    price: "30,000원",
    sale: "27,000원",
    img: "./img/item/레이어드_뷔스티에_티셔츠.jpg",
  },
  {
    id: 10,
    title: "레이어드 시스루 스커트",
    price: "23,000원",
    sale: "20,700원",
    img: "./img/item/레이어드_시스루_스커트.jpg",
  },
  {
    id: 11,
    title: "레이어드 이너 나시",
    price: "25,000원",
    sale: "22,500원",
    img: "./img/item/레이어드_이너_나시.jpg",
  },
  {
    id: 12,
    title: "반소매 청남방",
    price: "40,000원",
    sale: "36,000원",
    img: "./img/item/반팔_청남방.jpg",
  },
  {
    id: 13,
    title: "밴딩 화이트 롱스커트",
    price: "38,000원",
    sale: "34,200원",
    img: "./img/item/밴딩_화이트_롱스커트.jpg",
  },
  {
    id: 14,
    title: "벌룬핏 롱스커트",
    price: "38,000원",
    sale: "34,200원",
    img: "./img/item/벌룬_롱스커트.jpg",
  },
  {
    id: 15,
    title: "벌룬핏 세미크롭 맨투맨",
    price: "25,000원",
    sale: "22,500원",
    img: "./img/item/벌룬_세미크롭맨투맨.jpg",
  },
  {
    id: 16,
    title: "벌룬핏 타이 블라우스",
    price: "28,000원",
    sale: "25,200원",
    img: "./img/item/벌룬_타이_블라우스.jpg",
  },
  {
    id: 17,
    title: "뷔스티에 하객룩 원피스",
    price: "36,000원",
    sale: "32,400원",
    img: "./img/item/뷔스티에_원피스.jpg",
  },
  {
    id: 18,
    title: "세미와이드핏 청바지",
    price: "36,000원",
    sale: "32,400원",
    img: "./img/item/세미와이드_청바지.jpg",
  },
  {
    id: 19,
    title: "세미와이드핏 트레이닝팬츠",
    price: "32,000원",
    sale: "28,800원",
    img: "./img/item/세미와이드_트레이닝팬츠.jpg",
  },
  {
    id: 20,
    title: "스웨이드 캉캉 미니스커트",
    price: "30,000원",
    sale: "27,000원",
    img: "./img/item/스웨이드_캉캉_미니스커트.jpg",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  let contents = document.querySelector(".all_items");

  function allItems(allItem) {
    let itemListHTML = allItem.map((item) => {
      return `
            <div class="item">
              <a href="#"><img src=${item.img} alt=${item.title}></a>
                <div class="item_info">
                    <div class="tit_text">
                        <h3><a href="#">${item.title}</a></h3>
                        <div class="price_box">
                          <p class="price">${item.sale}</p>
                          <p class="origin_price">${item.price}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
    }).join("");
    
    contents.innerHTML = itemListHTML;

  };

  allItems(items);

});

// mobile menu
let menuIcon = document.querySelector('.m_menu svg');
let subMenu = document.querySelector('.m_category');
let closeBtn = document.querySelector('.close_btn');

// 서브메뉴 열기
menuIcon.addEventListener("click", ()=>{
  subMenu.classList.add("active");
});
// 서브메뉴 닫기
closeBtn.addEventListener("click",()=>{
  subMenu.classList.remove("active");
});


// bottom nav
let menuBtn = document.querySelector('.menubtn svg');
let submenu = document.querySelector('.bottom_category');
let closebtn = document.querySelector('.b_close_btn')

menuBtn.addEventListener("click",()=>{
  submenu.classList.add("active");
});
closebtn.addEventListener("click",()=>{
  submenu.classList.remove("active");
});



// topbtn
document.addEventListener("DOMContentLoaded", function () {
  const topBtn = document.querySelector(".topbtn");
  const footer = document.querySelector("footer");
  const bestSection = document.querySelector(".best");

  function handleTopBtn() {
    const bestOffsetTop = bestSection.offsetTop;
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;

    // best 섹션 위까지 스크롤 안 왔으면 안 보임
    if (scrollY < bestOffsetTop) {
      topBtn.style.display = "none";
      return;
    }

    // best 섹션 이후부터는 보여줌
    topBtn.style.display = "block";

    // footer가 보이면 탑버튼을 위로 올림
    if (footerTop < windowHeight) {
      const overlap = windowHeight - footerTop;
      topBtn.style.transform = `translateY(-${overlap + 10}px)`;
    } else {
      topBtn.style.transform = "translateY(0)";
    }
  }

  window.addEventListener("scroll", handleTopBtn);
  window.addEventListener("resize", handleTopBtn);
  handleTopBtn();
});


