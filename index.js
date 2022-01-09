let display = document.getElementById('display');
let my_buttons = Array.from(document.getElementsByClassName('buttons'));

my_buttons.map( my_buttons => {
    my_buttons.addEventListener('click', (e) => {
        switch(e.target.innerText){
            
            
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Ошибка"
                }
                break;
	    case 'C':
                display.innerText = '';
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});