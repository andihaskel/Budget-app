import React from 'react';
import Dimensions from 'Dimensions';


const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;


const mulHeight = 0.80966;
const textList = x -161;
const listWidth = 1;
const viewHeigth = mulHeight * y;


//Constants
export default Style = {
DEVICE_WIDTH: x,
DEVICE_HEIGHT: y,
CARD_HEIGHT: 0,
CARD_WIDTH: 0,
VIEW_HEIGHT: viewHeigth,
FONT_SIZE: 20,
CIRCLE_SIZE: x/2,
TEXTLIST_WIDTH: textList,
THUMBNAIL_SIZE: x * 0.1,

}
