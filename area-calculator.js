 // console.log('calculateTriangleArea')

//  -----TRIANGLE AREA--------

function calculateTriangleArea(){
//1.
 //get triangle-base value
  const baseField = document.getElementById('triangle-base');
  const baseValueTextString = baseField.value;
  baseField.value = '';
  const base = parseFloat(baseValueTextString);

  //2.
  //get triangle-height value

  const heightField = document.getElementById('triangle-height')
  const heightValueTextString = heightField.value;
  heightField.value = '';
  const height = parseFloat(heightValueTextString);

//3.calculation
  const area = 0.5 * base * height;

//4.
//show triangle area
const triangleAreaSpan = document.getElementById('triangle-area');
triangleAreaSpan.innerText = area;

}




//  -----RECTANGLE AREA--------

function calculateRectangleArea(){
// 1. 
 //get rectangle-width value for 
  const widthField = document.getElementById('rectangle-width');
  const widthFieldValueString = widthField.value;
  widthField.value = '';
  const width = parseFloat(widthFieldValueString);


  //2.
  //get rectangle-length value
  const lengthField = document.getElementById('rectangle-length')
  const lengthFieldValueString = lengthField.value;
  lengthField.value = '';
  const length = parseFloat(lengthFieldValueString);

  //Valid input: width and length
  if(isNaN(width) || isNaN(length) ){
    alert('please insert a valid number');
    return;
  }

 //3.calculation
  const area =  width * length;


//4.
//show rectangle area
const rectangleAreaSpan = document.getElementById('rectangle-area');
rectangleAreaSpan.innerText = area;

}





///--------------------------------------------------------------------------------------------------------------

//        -----PARALLELOGRAM AREA-------- 


// Reusable function -----> reduce duplicate code

function calculateParallelogramArea(){

  const base = getInputValue('parallelogram-base');
  
  const  height = getInputValue('parallelogram-height');

    //Valid input: base and height
    if(isNaN(base) || isNaN(height) ){
      alert('please insert a valid number');
      return;
    }

  const area = base * height;
  setElementInnerText('parallelogram-area',area);
}



//        -----ELLIPSE AREA-------- 


function calculateEllipseArea(){

  const ellipseMajor = getInputValue('ellipse-major-radius');

  const ellipseMinor = getInputValue('ellipse-minor-radius');

  const area = 3.14 * ellipseMajor * ellipseMinor;


  setElementInnerText('ellipse-area',area);

}






// Reusable GetInputValue field in number 

function getInputValue(fieldId){
 const inputField = document.getElementById(fieldId);
 const inputValueText = inputField.value;
 inputField.value = '';
 const valueInput = parseFloat(inputValueText);
 return valueInput;

}


//Reusable set span, p ,div, etc Text:
function setElementInnerText(elementId, area){
  const element = document.getElementById(elementId);
  element.innerText = area;
}


// ----DATA VALIDATION---
/*
 * 1. start the proper type of input field (number , data, email)
 * 2. check type using typeof
 * 3. isNaN ---> NaN means NOT A NUMBER. NaN is Checking weather the input is not a number or not.
 */








