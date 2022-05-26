// TYPING

let i = 0;
const text = "Hello. My name is Anthony Flath.";
const speed = 70;

type();

function type() {
    if (i < text.length) {
        document.getElementById('typed').innerHTML += text.charAt(i);
        i++;
        if (i == 6) {
            setTimeout(type, 10 * speed);
        } else {
            setTimeout(type, speed);
        }
    } else {
        setTimeout(clear, text.length * speed / 2);
    }
}

function clear() {
    i = 0;
    document.getElementById('typed').innerHTML = '';
    type();
}


// LINE-ANIMATION

const lines = document.querySelectorAll('.line-wrapper');
const observers = [];
for (let i = 0; i < lines.length; ++i) {
    observers[i] = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const line = entry.target.querySelector('.line');
            if (entry.isIntersecting) {
                line.classList.add('line-animation');
                return;
            }
    
            line.classList.remove('line-animation');
        });
    });
    observers[i].observe(lines[i]);
}

