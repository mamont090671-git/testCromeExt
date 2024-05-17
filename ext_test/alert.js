//Удаляем все элементы с указанным классом
var class_el = 'JustifierRowLayout-Incut'

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function mutations() {
    var elements = document.getElementsByClassName(class_el);
    while (elements.length > 0) elements[0].remove();
};
//вешаем на событие (изменение страницы) обработчик для таких сайтов как: яндекс картинки
var target = document.documentElement;
const config = {
      attributes: true,
      childList: true,
      subtree: true,
    };
var observer = new MutationObserver(mutations);
observer.observe(target,  config);
/**
var items = document.getElementsByTagName('div');
// For each test item in the list,
// append the entire element as a string of HTML
var count = 1;
for (let i = 0; i < items.length; i++) {
    if (items[i].innerHTML.indexOf('id="yandex') != -1) console.log('index: '+(items[i].innerHTML.indexOf('id="yandex'))+' '+items[i].innerHTML+' count '+count);
    count += 1;
}
*/
//  При выделении текста на странице он автоматически копируется в буфер обмена
//  Садим event на событие клика мышки
document.addEventListener('mouseup', (e)=>{
//  Получаем выделенный текст в буфер обмена
    var selected_text = document.getSelection().toString();
    if (selected_text != '')
//  Помещаем текст в буфер обмена
        navigator.clipboard.writeText(selected_text).then(function() {
            console.log('Текст успешно скопирован в буфер обмена');
            }, function(err) {
                console.error('Произошла ошибка при копировании текста: ', err);
                });
        console.log(selected_text);
/*
//  Достаем текст из буфера обмена
    navigator.clipboard.readText()
        .then(text => {
            console.log(text);
        })
        .catch(err => {
            console.log('Something went wrong', err);
        })
*/
//  Автоматический ответ на тест с сайта - https://prombez24.com/ticket/?testId=152&ticketNum=1
    qi = 0
    ai = 0
    q_true = true
    try{
        var el_list_q = document.getElementsByClassName('question__answers-list')
        var el_protocol = document.getElementsByClassName('checkbox protocol-checkbox')
        var check_protocol = el_protocol[0].getElementsByClassName('check')
        check_protocol[0].click()
    }catch(err){
        q_true = false
        console.log('Error find element Question')
    }
    while (q_true){
        try{
            var el_quest = document.getElementsByName('questionList['+qi+'].questionText')
            var quest_t = el_quest[0].value
            console.log(qi+' '+quest_t)
            el_span = el_list_q[qi].getElementsByTagName('span')
            el_check = el_list_q[qi].getElementsByClassName('check')
        }catch(err){
            break
        }
        while (true){
            try{
                var el_answers = document.getElementsByName('questionList['+qi+'].answers['+ai+'].answerText')
                var answers_t = el_answers[0].value
            }catch(err){
                ai = 0
                break
            }
            answers_status = document.getElementsByName('questionList['+qi+'].answers['+ai+'].correct')
            if (answers_status[0].value == 'true'){

                el_span[ai].style.color = "green"
                el_check[ai].click()
                console.log(ai+'. Правильный ответ: '+answers_t)
            }else{
                console.log(ai+'. '+answers_t)
            }
            ai += 1
        }
        qi += 1
    }
    sleep(2000);
    try{
        var el_button = document.getElementsByTagName('button')
//        el_submit = el_button[0].getElementsByT('submit')
        el_button[0].click()
    }catch(err){
        console.log('error xxx')
    }
//  Конец автоответа
});
