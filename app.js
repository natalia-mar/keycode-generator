const keyPressed = document.getElementById("box");

window.addEventListener('keydown', (e) => {
    console.log(e);


    const keycode = e.keyCode;
    const code = e.code;
    const key = e.key;

    keyPressed.innerHTML =`
    <div class="key-code">${code} <span> code</span></div>
    <div class="key-code">${key}<span> key</span></div>
    <div class="key-code">${keycode}<span>  keycode </span></div>
    `
});