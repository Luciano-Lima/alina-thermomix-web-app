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

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', debounce(handleScrollAnimation))
    handleScrollAnimation()  // Ensure animations trigger on page load in case any elements are already in view
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