import React from 'react';
import Dimensions from 'Dimensions';


const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;


const mulHeight = 0.90507;
const viewHeigth = mulHeight * x;
var getViewHeight = function() {
  console.log('Entre a get view height');
  console.log('Height: ' + y);
  console.log('mul: ' + mulHeight);
  var viewHeigth = mulHeight * x;
  console.log('Resultado: ' + viewHeigth);
  return viewHeigth;
}

//Constants
DEVICE_WIDTH: x;
DEVICE_HEIGHT: y;
CARD_HEIGHT: 0;
CARD_WIDTH: 0 ;
VIEW_HEIGHT: viewHeigth;
