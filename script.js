alert("THIS IS A CALCULATOR BY SOMESH KAMAD, NEVER USE IN A EXAM")
let screen = document.getElementById("screen");
let screenValue = '';
buttons = document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('Button Text Is', buttonText)
        if(buttonText=='X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText=='÷'){
            buttonText = '/';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText =='C'){
            screenValue = "";
            screen.value = screenValue;

        }
        else if (buttonText =='='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}