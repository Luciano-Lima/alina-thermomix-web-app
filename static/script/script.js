const scrollOffset = 20;
const scrollElements = document.querySelectorAll('.js-scroll')

const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
};

const displayScrollElement = (element) => {
    element.classList.add('scrolled');
}

const hideScrollElement = (element) => {
    element.classList.remove('scrolled');
}

//only show the element once when it comes into view
const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, scrollOffset)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el)
        }
    })
}

//Add a Debunce to the scroll envent to improve performance
const debounce = (func, delay = 20) => {
    let timer;
    return () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func()
        }, delay)
    }
}

// DOM Content Loaded: Combine all scripts in a single listener
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', debounce(handleScrollAnimation))
    handleScrollAnimation()  // Ensure animations trigger on page load in case any elements are already in view
    const readMoreBtn = document.querySelector('.read-more')
    const toggleContent = document.querySelector('.toggle-content')

    if (readMoreBtn && toggleContent) {
        readMoreBtn.addEventListener('click', loadContent)
    }
})

// Show / Hide button when video plays

const video = document.getElementById('thermomixVideo')
const buttonsContainer = document.getElementById('thermomixButtons')


video.addEventListener('play', () => {
    buttonsContainer.style.display = 'none'
})

video.addEventListener('pause', () => {
    buttonsContainer.style.display = 'inline-flex'
})

video.addEventListener('ended', () => {
    buttonsContainer.style.display = 'inline-flex'
})


function loadContent() {
    const toggleContent = document.querySelector('.toggle-content')
    toggleContent.classList.toggle('show-content')
    this.innerText = toggleContent.classList.contains('show-content') ? 'Inchide' : 'Citeşte Mai Mult';

}

// pop up tm7
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const closeButton = document.querySelector(".popup-close");

    // Check sessionStorage and hide popup if already closed
    if (sessionStorage.getItem("popupClosed") === "true") {
        popup.style.display = "none"; 
    } else {
        popup.style.display = "flex"; 
    }

    // Add close event listener
    closeButton.addEventListener("click", function () {
        popup.style.display = "none";
        sessionStorage.setItem("popupClosed", "true");
    });
});

//Disclaimer
document.addEventListener('DOMContentLoaded', () => {
    const disclaimerBtn = document.getElementById('disclaimerButton');
    const disclaimerBanner = document.getElementById('disclaimerBanner');
  
    if (disclaimerBtn && disclaimerBanner) {
      // Only show once per session
      if (sessionStorage.getItem('disclaimerClosed') !== 'true') {
        disclaimerBanner.classList.add('show')
      }
  
      disclaimerBtn.addEventListener('click', () => {
        disclaimerBanner.classList.remove('show')
        sessionStorage.setItem('disclaimerClosed', 'true'); // only for the current tab
      });
    }
  });
  



