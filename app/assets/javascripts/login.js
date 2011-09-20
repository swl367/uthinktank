function fieldFocus(element) {
   if (element.value == element.defaultValue) {
   	element.value = '';
   }
   
} 

function fieldBlur(element){
  if (element.value == '') {
   	element.value = element.defaultValue;
   }
   
}

function fieldBlur2(x, element){
  if (document.getElementById(x).value == '') {
    document.getElementById(x).type ="text";
   	document.getElementById(x).value = element.defaultValue;
   }
   
}

function changeInputPass(x)
{
    document.getElementById(x).type ="password";
}

function changeInputText(x)
{
    document.getElementById(x).type ="text";
} 