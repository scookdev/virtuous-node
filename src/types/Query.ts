export interface IQueryGroup {
  groups: IQueryConditionSet[];
}
export interface IQueryConditionSet {
  conditions: IQueryCondition[];
}
export interface IQueryCondition {
  parameter: string;
  operator: string;
  value: number | string;
  secondaryValue?: string;
  values?: string[];
}
export interface IOperatorOption {
  operator: string;
  multipleValuesAllowed: boolean;
  valueRequired: boolean;
}
export interface IQueryOption {
  parameter: string;
  type: string;
  operatorOptions: IOperatorOption[];
  valueOptions: string[] | string;
}
export interface IQueryOptionGroup {
  options: IQueryOption[];
}

// const query = {
//   groups: [
//     {
//       conditions: [
//         {
//           parameter: '<string>',
//           operator: '<string>',
//           value: '<string>',
//           secondaryValue: '<string>',
//           values: ['<string>', '<string>']
//         },
//         {
//           parameter: '<string>',
//           operator: '<string>',
//           value: '<string>',
//           secondaryValue: '<string>',
//           values: ['<string>', '<string>']
//         }
//       ]
//     },
//     {
//       conditions: [
//         {
//           parameter: '<string>',
//           operator: '<string>',
//           value: '<string>',
//           secondaryValue: '<string>',
//           values: ['<string>', '<string>']
//         },
//         {
//           parameter: '<string>',
//           operator: '<string>',
//           value: '<string>',
//           secondaryValue: '<string>',
//           values: ['<string>', '<string>']
//         }
//       ]
//     }
//   ],
//   sortBy: '<string>',
//   descending: '<boolean>'
// };
