type ModelOfNavigatorItem = {
  name: string;
  title: string;
}
 type ModelOfNavigatorScreens = {
  list: ModelOfNavigatorItem;
  detail: ModelOfNavigatorItem;
}
 type ModelOfNavigator = {
  stack: ModelOfNavigatorItem;
  screens: ModelOfNavigatorScreens;
}

export const LOAN_NAVIGATORS:ModelOfNavigator
