type INavigatorItem = {
  name: string;
  title: string;
}
 type INavigatorScreens = {
  list: INavigatorItem;
  detail: INavigatorItem;
}
 type INavigator = {
  stack: INavigatorItem;
  screens: INavigatorScreens;
}

export const LOAN_NAVIGATORS:INavigator
