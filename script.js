document.addEventListener("DOMContentLoaded",()=>{

        const message = document.getElementById("message");
        const send = document.getElementById("send");

        message.focus();

        send.onclick = () => {
                option = `<option>Me: ${message.value}</option>`;
                list.innerHTML += option;
                message.value='';
        }

        const ENTER = 13;
        message.onkeyup = (event) => {
                if(ENTER === event.keyCode){
                        send.click()
                }
        }
})
