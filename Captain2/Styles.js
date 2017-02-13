import React from 'react';
import Dimensions from 'Dimensions';


const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

const headerHeight = 56;
const tabBarHeight = 49;
const mulPoints = 0.59375;
const mulProgressBar = 0.52;
const cardProgressWidth = mulProgressBar * x;
const mulToolbarCard = 0.80;
const cardToolbarWidth = mulToolbarCard * (x-60);
const textList = x -161;
const mulHeight = 0.94;
const viewHeigth = mulHeight * (y - headerHeight - tabBarHeight);
const scrollMul = 0.95;
const ScrollViewHeight = scrollMul * (y - headerHeight);

//Drawer width
const mulDrawer = 0.85;
const drawerWidth = x * mulDrawer;

//Drawer Image height
const mulImageDrawer = 0.27;
const imageDrawerSize = y * mulImageDrawer;

//Constants
export default Style = {
DEVICE_WIDTH: x,
DEVICE_HEIGHT: y,
CARD_HEIGHT: 0,
CARD_WIDTH: 0,
CARD_TOOLBAR_WIDTH: cardToolbarWidth,
CARD_PROGRESS_WIDTH: cardProgressWidth,
CARD_FONT_SIZE: y>600 ? 18 : 15,
CARD_TOOLBAR_FONT_SIZE: y>600 ? 22 : 18,
VIEW_HEIGHT: viewHeigth,
FONT_SIZE: y>600 ? 30 : 20,
CIRCLE_SIZE: x/2,
TEXT_POINTS: (10 + (x/2) * mulPoints),
TEXT_POINTS_SIZE: y>600 ? 40 : 30,
TEXTLIST_WIDTH: textList,
THUMBNAIL_SIZE: x * 0.1,
SCROLL_VIEW_HEIGHT: ScrollViewHeight,
DRAWER_WIDTH: drawerWidth,
DRAWER_FONT_SIZE: y>600 ? 20 : 15,
DRAWER_IMAGE_HEIGHT: imageDrawerSize,
}
