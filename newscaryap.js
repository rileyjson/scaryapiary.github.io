function adjustContentVisibilityOnScroll() {
    const topSectionHeight = topSection.offsetHeight;
    const contentSectionHeight = contentSection.offsetHeight;
    
    window.addEventListener('scroll', () => {
        handleScroll(topSectionHeight, contentSectionHeight);
    });
}

function handleScroll(topSectionHeight, contentSectionHeight) {
    const thirdSectionHeight = thirdSection.offsetHeight; // Assuming you have this reference
    const secondSectionTrigger = topSectionHeight;
    const thirdSectionTrigger = topSectionHeight + contentSectionHeight;
    const fourthSectionTrigger = thirdSectionTrigger + thirdSectionHeight; // New trigger for the fourth section

    if (window.scrollY >= secondSectionTrigger) {
        contentSection.classList.add('transparent');
    } else {
        contentSection.classList.remove('transparent');
    }

    if (window.scrollY >= thirdSectionTrigger) {
        thirdSection.classList.add('visible');
    } else {
        thirdSection.classList.remove('visible');
    }

    // Logic for the fourth section visibility or changes
    if (window.scrollY >= fourthSectionTrigger) {
        fourthSection.classList.add('visible');
    } else {
        fourthSection.classList.remove('visible');
    }
}

function livetimer() {
    const countdown = () => {
        const countDate = new Date("Mar 1, 2024 00:00:00").getTime();
        const now = new Date().getTime();

        const remainingTime = countDate - now;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(remainingTime / day);
        const textHour = Math.floor((remainingTime % day) / hour);
        const textMinute = Math.floor((remainingTime % hour) / minute);
        const textSecond = Math.floor((remainingTime % minute) / second);

        document.querySelector(".day").innerText = textDay > 0 ? textDay : 0;
        document.querySelector(".hour").innerText = textHour > 0 ? textHour : 0;
        document.querySelector(".minute").innerText = textMinute > 0 ? textMinute : 0;
        document.querySelector(".second").innerText = textSecond > 0 ? textSecond : 0;
    }
    setInterval(countdown, 500);

}

function clickScroll() { //About scroll

    window.scrollBy({top: 720, behavior: 'smooth'});

}


//For newsletter sign up
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('subscribeButton').addEventListener('click', function() {
        var emailInput = document.getElementById('emailInput');
        var message = document.getElementById('newsMessage');
        var emailValue = emailInput.value.trim();

        // Regular expression for basic email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(emailValue === '') {
            message.textContent = 'Please enter an email address.';
            message.style.color = 'red';
        } else if (!emailRegex.test(emailValue)) {
            // If the input doesn't match the email format
            message.textContent = 'Please enter a valid email address.';
            message.style.color = 'red';
        } else {
            message.textContent = 'Thank you for subscribing!';
            message.style.color = 'green';
            emailInput.value = ''; // Optionally clear the input field after successful subscription
        }
    });
});






//start scrolling JS
document.getElementById('musicClick').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
    
    // Scroll to the .thirdSection
    document.querySelector('.thirdSection').scrollIntoView({
      behavior: 'smooth'
    });
  });

  document.getElementById('tourClick').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
    
    // Scroll to the .fourthSection
    document.querySelector('.fourthSection').scrollIntoView({
      behavior: 'smooth'
    });
  });

  document.getElementById('newsletterClick').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
    
    document.querySelector('.footer-dark').scrollIntoView({
      behavior: 'smooth'
    });
  });

  document.getElementById('aboutClick').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
    
    document.querySelector('.contentSection').scrollIntoView({
      behavior: 'smooth'
    });
  });




livetimer();


const topSection = document.getElementById('topSection');
const contentSection = document.getElementById('contentSection');
const thirdSection = document.getElementById('thirdSection');
const fourthSection = document.getElementById('fourthSection');



adjustContentVisibilityOnScroll();

document.getElementById('subscribeButton').addEventListener('click', subscribeMessage);
