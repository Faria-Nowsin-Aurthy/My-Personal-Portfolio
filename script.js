const audio = document.getElementById('myAudio');
audio.volume = 0.3; // Set volume to 10%

const playButton = document.getElementById('playButton');
playButton.addEventListener('click', () => {
  audio.play().catch(error => {
    // Handle error if playback is blocked
    console.log('Playback failed:', error);
  });
});



var typed = new Typed(".typing",{
    strings:["Web Designer","Web Developer","Graphic Designer","UI/UX Designer","Youtuber"],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true
})

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname , event){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("side-menu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbzV2Dr_3Nf48JKzhE9BrJgOuUEZ3PdxB-ixBYtiQ9OhjgLZyABeAR9KbLko5jbQl--NKw/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message sent successfully"
                setTimeout(function(){
                    msg.innerHTML = ""
                }, 5000)
                form.reset()
            })
        .catch(error => console.error('Error!', error.message))
    })