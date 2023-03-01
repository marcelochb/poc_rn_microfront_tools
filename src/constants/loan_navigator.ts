

import { INavigator } from "./types";

export const LOAN_NAVIGATORS:INavigator = {
  stack: {
    name: 'LoanStack',
    title: 'Empréstimos',
  },
  screens: {
    list: {
      name: 'LoanList',
      title: 'Empréstimos'
    },
    detail: {
      name: 'LoanDetail',
      title: 'Detalhes do emprestímo'
    }
  }
}
