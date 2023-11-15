import { mixed, number, object, string } from 'yup';

import type { IListQuery } from './types';
import { SortOderEnum } from './types';

export const tableQuerySchema = object().shape({
  page: number().default(1),
  limit: number().default(10),
  order: mixed<SortOderEnum>().oneOf(Object.values(SortOderEnum)).nullable(),
  orderBy: string(),
});

export const getSortString = (orderBy: string, order: SortOderEnum): string => {
  if (order === 'descend') {
    return `${orderBy}.desc`;
  }
  return `${orderBy}.asc`;
};

export const formatQuery = <TObjectSchema>(query: IListQuery<TObjectSchema>) => {
  const formattedQuery = { ...query };
  if (formattedQuery.orderBy && formattedQuery.order) {
    formattedQuery.sort = getSortString(formattedQuery.orderBy, formattedQuery.order);
    delete formattedQuery.order;
    delete formattedQuery.orderBy;
  }

  (Object.keys(formattedQuery) as Array<keyof typeof formattedQuery>).forEach((key) => {
    const property = formattedQuery[key];
    if (
      property === undefined ||
      property === null ||
      property === '' ||
      (Array.isArray(property) && property.length === 0)
    ) {
      delete formattedQuery[key];
    }
  });
  return formattedQuery;
};
