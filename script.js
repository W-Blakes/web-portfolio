const load_Container = document.getElementById('load');
const load_Logo = document.getElementById('load_logo');
const homepage_Btn = document.getElementById('homepage');

const quick_Select = document.querySelector('.quick-select');
const quickLink_Open = document.querySelector('.quick-select-btn');
const quickLink_Close = document.querySelector('.close');
const quick_SelectLinks = document.querySelectorAll('.quick-select li');

const nav = document.querySelector('nav');
const profile = document.querySelector('.profile');
const navLinks = document.querySelectorAll('nav ul li a');
const navLists = document.querySelectorAll('nav ul');
const hero_section = document.getElementById('home');
const about_section = document.getElementById('about');
const skills_section = document.getElementById('skills');
const skill_bars = document.querySelectorAll(
  '.skills-container .skill .skill-level'
);
const qualities_section = document.getElementById('qualities');
const qualities = document.querySelectorAll('#qualities .quality i');
const portfolio_section = document.getElementById('portfolio');
const projects_section = document.getElementById('projects');
const contact_section = document.getElementById('contact');
const projectsContainer = document.querySelector('.projects-container');
const project_IMG_Overlay = document.querySelector('img');
const project_Overlay = document.querySelector('.project-overlay');
const project_BG_Overlay = document.querySelector('.project-bg-overlay');
const profilePic = document.getElementById('profile-pic');
const picRings = document.getElementById('pic-rings');
const hobbies = document.querySelector('.hobbies');
const hobbiesIcons = document.querySelectorAll('.hobbies div i');

// Page Loader
const loadScreen = function () {
  console.log('load screen');
  load_Container.classList.remove('load');
  load_Logo.classList.remove('load');
  setTimeout(() => {
    load_Container.classList.add('load');
    load_Logo.classList.add('load');
  }, 2500);
};
const queLoadScreen = function () {
  console.log('preload screen');
  load_Container.classList.toggle('load');
  load_Logo.classList.toggle('load');
  setTimeout(() => {
    load_Container.classList.toggle('load');
    load_Logo.classList.toggle('load');
  }, 20);
};

if (homepage_Btn) {
  homepage_Btn.addEventListener('click', () => {
    loadScreen();
  });
}

// Quick Nav Skills Btn scrolls to about/skills section

quickLink_Open.addEventListener('click', () => {
  console.log('click');
  toggleQuickNavBtn();
  quick_Select.classList.remove('hidden');
  quick_Select.classList.remove('hide');

  quick_SelectLinks.forEach((link) => {
    link.addEventListener('click', () => {
      toggleQuickNavBtn();
      quick_Select.classList.add('hide');
    });
  });

  quick_Select.addEventListener('click', () => {
    quick_Select.classList.add('hide');
    quickLink_Open.classList.remove('hide');
    quickLink_Close.classList.add('hide');
  });
});
quickLink_Close.addEventListener('click', () => {
  toggleQuickNavBtn();
  quick_Select.classList.add('hide');
});

function toggleQuickNavBtn() {
  quickLink_Open.classList.toggle('hide');
  quickLink_Close.classList.toggle('hide');
}

const navHeight = nav.offsetHeight;
document.documentElement.style.setProperty(
  '--scroll-padding',
  navHeight + 'px'
);
if (profilePic) {
  profilePic.addEventListener('mouseover', (e) => {
    e.target.classList.add('activate');
  });
  profilePic.addEventListener('click', () => {
    hobbies.classList.add('show');
    hobbiesIcons.forEach((icon) => icon.classList.add('turn'));
    profile.classList.add('slide');
  });
  profilePic.addEventListener('touchstart', (e) => {
    e.target.classList.add('activate');
    profile.classList.add('slide');
  });
  profilePic.addEventListener('touchmove', (e) => {
    hobbies.classList.remove('show');
    e.target.classList.remove('activate');
    profile.classList.remove('slide');
  });
  profilePic.addEventListener('mouseleave', (e) => {
    hobbies.classList.remove('show');
    e.target.classList.remove('activate');
    profile.classList.remove('slide');
  });
  (window.onscroll = profilePic.classList.remove('activate')),
    profile.classList.remove('slide');
}

//**  SWITCH NAV **//'
isDesktop = false;
isMobile = false;

function checkMobile() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
    // screen.orientation.type == 'landscape-primary' &&
    // screen.orientation.angle !== 90
  ) {
    isMobile = true;
    isDesktop = false;
  } else {
    isMobile = false;
    isDesktop = true;
    return;
  }
}

function changeNav() {
  if (isMobile == true) {
    navLists[0].classList.add('hide');
    navLists[1].classList.remove('hide');
  } else if (isDesktop == true) {
    navLists[0].classList.remove('hide');
    navLists[1].classList.add('hide');
  }
}
changeNav();

window.onload = checkMobile();
window.onload = changeNav();

window.addEventListener('resize', () => {
  checkMobile();
  changeNav();
});

if (isMobile) {
  console.log('its mobile');
  // LOAD MOBILE VIEW //
  if (about_section) {
    about_section.classList.add('slide-right');
    skills_section.classList.add('slide-left');
    setTimeout(() => {
      skill_bars.forEach((bar) => {
        bar.classList.add('add');
      });
    }, 100);
    qualities_section.classList.add('slide-right');
    setTimeout(
      () => qualities.forEach((qty) => qty.classList.add('show')),
      500
    );
    portfolio_section.classList.add('slide-left');
  }
}

function loadPage_sections() {
  // about section
  if (window.scrollY >= hero_section.offsetHeight - 200) {
    about_section.classList.add('slide-right');
  }
  // desktop skills and about
  if (window.scrollY >= about_section.offsetHeight - 100) {
    setTimeout(() => {
      skills_section.classList.add('slide-left');
      about_section.classList.add('slide-right');
      skill_bars.forEach((bar) => {
        bar.classList.add('add');
      });
    }, 0);
  }
  // skills section
  if (window.scrollY >= skills_section.offsetHeight) {
    skills_section.classList.add('slide-left');
    setTimeout(() => {
      skill_bars.forEach((bar) => {
        bar.classList.add('add');
      });
    }, 500);
  }
  // qualities section
  if (window.scrollY >= qualities_section.offsetHeight + 400) {
    qualities_section.classList.add('slide-right');
    setTimeout(
      () =>
        qualities.forEach((qty) => {
          qty.classList.add('show');
          qty.classList.add('shine');
        }),
      1000
    );
  }
  // portfolio section
  if (
    window.scrollY >=
    portfolio_section.offsetHeight - portfolio_section.offsetHeight / 2
  ) {
    portfolio_section.classList.add('slide-left');
  }
  if (isMobile) {
    // LOAD MOBILE VIEW //
    about_section.classList.add('slide-right');
    skills_section.classList.add('slide-left');
    setTimeout(() => {
      skill_bars.forEach((bar) => {
        bar.classList.add('add');
      });
    }, 100);
    qualities_section.classList.add('slide-right');
    setTimeout(
      () => qualities.forEach((qty) => qty.classList.add('show')),
      500
    );
    portfolio_section.classList.add('slide-left');
  }
}
document.addEventListener('scroll', loadPage_sections);

//**  STICKY NAV **//

function fixNav() {
  if (window.scrollY >= hero_section.offsetHeight) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}

window.addEventListener('scroll', () => {
  fixNav();
  // loadOnScroll();
  checkMobile();
});

//**  PORTFOLIO PROJECTS **//
if (projectsContainer) {
  const portfolio = [
    {
      image: '/images/cyber_home.png',
      images: [
        '/images/cyber_mobile.png',
        '/images/cyber_full.png',
        '/images/cyber_gallery.png',
        '/images/cyber_menu.png',
        '/images/cyber_buildmenu_2.png',
        '/images/cyber_build_1.png',
        '/images/cyber_build_2.png',
        '/images/cyber_build_3.png',
      ],
      logo: '',
      projectName: 'Cyber Stroller',
      projectDesc: 'Product Site',
      button: 'Learn More',
      link: 'https://cyberstroller.tech',
      alt: '',
      overlayTech: '3ds max, Javascript, CSS & Html...',
      overlayDesc:
        'A Tesla product site that allows users to build and save their custom vehicle utilizing dynamic stactic 3d rendering images via local strorage. Pending Features: Live 3D 360 \u00B0 turnable & User Database',
      overlayBtn: 'View Site',
      showType: 'flip',
    },
    {
      image: '/images/auto_load.png',
      images: [
        '/images/auto_load.png',
        '/images/auto_settings.png',
        '/images/auto_main.png',
        '/images/auto_test.png',
      ],
      logo: '',
      projectName: 'Autobody IQ',
      projectDesc: 'Quiz App',
      button: 'Learn More',
      link: 'https://autobodyiq.tech',
      alt: '',
      overlayTech: 'Javascript, CSS & Html',
      overlayDesc:
        'Small passion project that can challange automotive hobbists and seasoned technicians on their knowledge of automotive refinishing practices. Program utilizes local storage to store user profile settings and test completion for each level of difficulty',
      overlayBtn: 'View Site',
      showType: 'flip',
    },
    {
      image: '/images/bviews_full.png',
      images: [],
      logo: '',
      projectName: 'Birds View',
      projectDesc: 'Lawncare Site',
      button: 'Learn More',
      link: 'https://birdsviewlawn.com',
      alt: '',
      overlayTech: 'Javascript, CSS & Html',
      overlayDesc:
        'Freelance project for a start up comapany in South Atlanta. Things to come includes: Customer login, Quote Generator, Booking and Testionial Map Feature',
      overlayBtn: 'View Site',
      showType: 'scroll',
    },
    {
      image: '/images/istream_full.png',
      images: [],
      logo: '',
      projectName: 'Ice Stream',
      projectDesc: 'Movie Trailer App',
      button: 'Learn More',
      link: 'https://icestream.tech',
      alt: '',
      overlayTech: 'Javascript, CSS & Html',
      overlayDesc:
        'Small Movie trailer app that uses AJAX to fetch and manipulate data form a movie database. User can browse genres and search for specific titles. Pending Features: Login, Notification Updates, Volume toggle and Full-screen mode',
      overlayBtn: 'View App',
      showType: 'scroll',
    },
    {
      image: '/images/crush_mobile.png',
      images: [
        '/images/crush_mobile.png',
        '/images/crush_desk.png',
        '/images/crush_g_loss.png',
        '/images/crush_g_win.png',
      ],
      logo: '',
      projectName: 'Riche Crush',
      projectDesc: 'Matching Game',
      button: 'Learn More',
      link: 'https://williamblakes.com',
      alt: '',
      overlayTech: 'Adobe Illustrator, Javascript, CSS & Html',
      overlayDesc:
        'Match items to reach the score goal before timer countdown and limited amount of moves expire. Pending Features: Player Login, Leaderboard and Multiple Levels. ',
      overlayBtn: 'Play',
      showType: 'flip',
    },
    {
      image: '/images/purple_mobile.png',
      images: [
        '/images/purple_mobile.png',
        '/images/purple_desk.png',
        '/images/purple_full.png',
        '/images/purple_gallery.png',
        '/images/purple_footer.png',
      ],
      logo: '',
      projectName: 'Purple Steak',
      projectDesc: 'Resturant Site',
      button: 'Learn More',
      link: 'https://purplesteak.tech',
      alt: '',
      overlayTech: 'Javascript, CSS & Html',
      overlayDesc:
        'Resturant franchise landing page with a great mobile freindly design. Pending Features: Full site Navigation, Customer Login, Map Locations and Contact Form',
      overlayBtn: 'View Page',
      showType: 'flip',
    },
  ];

  //**  lOAD PORTFOLIO PROJECTS **//

  function loadProjects() {
    let idx = 0;

    for (let i = 0; i <= portfolio.length - 1; i++) {
      idx = i;
      const { image, projectName, projectDesc, button } = portfolio[idx];
      portfolioProject = document.createElement('div');
      portfolioProject.classList.add('project-image');
      portfolioProject.innerHTML = `
      
      <img class="img-p" src=${image} alt="" data-idx="${idx}">
      <h3 class="project-name">${projectName}</h3>
      <p class="project-desc">${projectDesc}</p>
   
      <button class="project-btn" id="project-${idx + 1}">${button}</button>
      `;
      projectsContainer.appendChild(portfolioProject);
    }
  }

  loadProjects();
  //**  SHOW PROJECTS OVERLAY**//
  const projectsBtn = document.querySelectorAll(
    '.project-image button.project-btn'
  );
  function showProject() {
    projectsBtn.forEach((project) => {
      project.addEventListener('click', () => {
        currentProject = project.parentElement;
        // project_IMG_Overlay.src = project.parentElement.childNodes[1].src;
        document.querySelector('.showcase').classList.add('active');
        idx = Number(project.id.split('').pop()) - 1;
        currentProjectId = project.id;
        project_Overlay.innerHTML = `
      <div class="project-overlay">
        <h4 class="project-overlay-name">${portfolio[idx].projectName}</h4>
        <div class="details">
           <i class="fa-solid fa-circle-info shown"></i>
           <i class="fa-solid fa-circle-xmark"></i>
        </div>
        <p class="project-overlay-description"><span>${portfolio[idx].overlayTech}</span>${portfolio[idx].overlayDesc}
        <a href="${portfolio[idx].link}">Go to site <i class="fa-solid   fa-arrow-up-right-from-square"></i>
        </a>
        </p>
        <div class="show-nav hide">
           <i class="fa-solid fa-circle-arrow-left"></i>
           <i class="fa-solid fa-circle-arrow-right"></i>
        </div>
        <div class="img-container">
          <img class="scroll" src=${portfolio[idx].image} alt="">
        </div>
      </div>
      `;
        const detailsBtn = document.querySelectorAll('.details i');
        const showNavBtn = document.querySelectorAll('.show-nav i');
        const show_Overlay = document.querySelector('.show-nav');
        const img_Overlay = document.querySelector('.img-container img');
        const title = document.querySelector('.project-overlay-name');
        const description = document.querySelector(
          '.project-overlay-description'
        );
        imgIdx = 0;
        if (portfolio[idx].showType == 'flip') {
          show_Overlay.classList.remove('hide');
          img_Overlay.classList.remove('scroll');
        }
        showNavBtn.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            if (e.target.className.includes('right')) {
              imgIdx++;
              if (portfolio[idx].images[imgIdx] !== undefined) {
                img_Overlay.src = `${portfolio[idx].images[imgIdx]}`;
              } else {
                imgIdx = 0;
                img_Overlay.src = `${portfolio[idx].image}`;
              }
            }
            if (e.target.className.includes('left')) {
              console.log(imgIdx);
              if (imgIdx == 0) {
                console.log('go to last');
                imgIdx = portfolio[idx].images.length;
                img_Overlay.src = `${
                  portfolio[idx].images[portfolio[idx].images.length - 1]
                }`;
              } else {
                console.log('prev');
                img_Overlay.src = `${portfolio[idx].images[imgIdx - 1]}`;
              }
              imgIdx--;
            }
          });
        });
        detailsBtn.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            if (e.target.className.includes('fa-circle-info')) {
              img_Overlay.classList.add('slide');
              show_Overlay.classList.add('slide');
              detailsBtn[0].classList.toggle('shown');
              detailsBtn[1].classList.add('shown');
              project_Overlay.classList.add('shown');
              title.classList.toggle('show');
              description.classList.toggle('show');
            } else {
              img_Overlay.classList.remove('slide');
              show_Overlay.classList.remove('slide');
              detailsBtn[0].classList.toggle('shown');
              detailsBtn[1].classList.remove('shown');
              project_Overlay.classList.remove('shown');
              title.classList.remove('show');
              description.classList.remove('show');
            }
          });
        });
      });

      project_BG_Overlay.addEventListener('click', () => {
        if ((project_IMG_Overlay.classList = 'active')) {
          document.querySelector('.showcase').classList.remove('active');
        }
      });
    });
  }
  showProject();
}

// HIGHLIGHT NAV //

function highlightNav() {
  navLinks.forEach((link) => link.classList.remove('active'));
  if (window.scrollY >= 0 && window.scrollY < hero_section.clientHeight) {
    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[0].classList.add('active');
    navLinks[4].classList.add('active');
  }
  if (
    window.scrollY >= hero_section.clientHeight &&
    window.scrollY <= hero_section.clientHeight + about_section.clientHeight
  ) {
    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[1].classList.add('active');
    navLinks[5].classList.add('active');
  }
  if (
    window.scrollY >= hero_section.clientHeight + about_section.clientHeight &&
    window.scrollY <=
      hero_section.clientHeight +
        about_section.clientHeight +
        projectsContainer.clientHeight +
        contact_section.clientHeight
  ) {
    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[2].classList.add('active');
    navLinks[6].classList.add('active');
  }
  if (
    window.scrollY >=
    hero_section.clientHeight +
      about_section.clientHeight +
      projectsContainer.clientHeight +
      contact_section.clientHeight
  ) {
    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[3].classList.add('active');
    navLinks[7].classList.add('active');
  }
}

window.addEventListener('scroll', highlightNav);
