import { ModelOfNavigator } from "./types";

export const LOAN_NAVIGATORS:ModelOfNavigator = {
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
