import type { ProColumns, ProTableProps } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import type { TablePaginationConfig } from 'antd';
import { Empty, Space, Typography } from 'antd';
import type { FilterValue, SorterResult } from 'antd/es/table/interface';
// import EmptyIcon from 'assets/icons/empty.svg';
import { SortOderEnum } from 'hooks/types';
import useSearch from 'hooks/useSearch';
import { useEffect, useMemo } from 'react';
// import { useTranslation } from 'react-i18next';
import { mixed, object, string } from 'yup';

type ParamsType = Record<string, any>;

const tableQuerySchem = object({
  order: mixed<SortOderEnum>().oneOf(Object.values(SortOderEnum)),
  orderBy: string(),
});

export interface CustomTableProps<TData> extends ProTableProps<TData, ParamsType> {}
const CustomTable = <TData extends Record<string, any>>({
  columns = [],
  pagination,
  ...props
}: CustomTableProps<TData>) => {
  // const { t } = useTranslation();
  const { query, setQuery } = useSearch({ schema: tableQuerySchem });
  const { order, orderBy } = query;
  const formatColumns: ProColumns<TData>[] = useMemo(() => {
    return columns.map((col) => {
      if (col.key === orderBy) {
        return { ...col, hideInSearch: true, defaultSortOrder: order };
      }
      return { ...col, hideInSearch: true };
    });
  }, [columns, order, orderBy]);

  useEffect(() => {
    if (typeof pagination === 'object') {
      const { total, current, pageSize } = pagination;
      if (
        total &&
        current &&
        pageSize &&
        Math.ceil(total / pageSize) < current &&
        current !== 1 &&
        props.loading === false
      ) {
        setQuery({ ...query, page: 1 });
      }
    }
  }, [pagination, props.loading, query, setQuery]);

  const handleTableChange = (
    params: TablePaginationConfig,
    filter: Record<string, FilterValue | null>,
    sorter: SorterResult<TData> | SorterResult<TData>[],
  ) => {
    // TODO: Handle multisort
    if (!Array.isArray(sorter)) {
      setQuery({
        ...query,
        ...filter,
        page: params.current,
        limit: params.pageSize,
        order: sorter.order,
        // Column that has sorter should have key prop
        orderBy: sorter.order ? sorter.columnKey?.toString() : undefined,
      });
    }
  };
  return (
    <ProTable
      className="[&_.ant-pro-card-body]:p-0"
      locale={{
        emptyText: (
          <Empty
            className="p-8"
            description={
              <Space direction="vertical">
                <Typography.Text className="font-bold text-[16px]">No data</Typography.Text>
                <Typography.Text className="text-gray-5">No data to display</Typography.Text>
              </Space>
            }
            // image={<EmptyIcon />}
          />
        ),
      }}
      onChange={handleTableChange}
      options={false}
      pagination={pagination}
      rowKey="_id"
      scroll={{ x: 'max-content' }}
      search={false}
      {...props}
      columns={props.onChange ? columns : formatColumns}
    />
  );
};

export default CustomTable;
