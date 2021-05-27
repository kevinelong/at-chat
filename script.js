document.addEventListener("DOMContentLoaded",()=>{

        const message = document.getElementById("message");
        const send = document.getElementById("send");

        message.focus();

        send.onclick = () => {
                list.innerHTML += `<option>Me: ${message.value}</option`;
                message.value='';
        }

        const ENTER = 13;
        message.onkeyup = (event) => {
                if(ENTER === event.keyCode){
                        send.click()
                }
        }
})
