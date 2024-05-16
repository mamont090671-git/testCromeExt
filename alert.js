//Удаляем все элементы с указанным классом
var class_el = 'JustifierRowLayout-Incut'
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
//  Садим эвент на событие клика мышки
document.addEventListener('mouseup', (e)=>{
//  Получаем выделенный текст в буфер обмена
    var selected_text = window.getSelection().toString();
    if (selected_text != '')
//  Помещаем текст в буфер обмена
        navigator.clipboard.writeText(selected_text).then(function() {
            console.log('Текст успешно скопирован в буфер обмена');
            }, function(err) {
                console.error('Произошла ошибка при копировании текста: ', err);
                });
        console.log(selected_text);
//  Достаем текст из буфера обмена
    navigator.clipboard.readText()
        .then(text => {
            console.log(text);
        })
        .catch(err => {
            console.log('Something went wrong', err);
        })
});

