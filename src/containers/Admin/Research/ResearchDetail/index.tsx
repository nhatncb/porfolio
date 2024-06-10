/* eslint-disable react/no-unescaped-entities */
import { PageContainer } from '@ant-design/pro-layout';
import { Button } from 'antd';
import DeleteButton from 'components/DeleteButton';
import useFetch from 'hooks/useFetch';
import { Link } from 'react-router-dom';

import type { ArtisticEducationFormSchema } from '../ResearchContentEdit/schema';

const gridClassName = {
  1: 'grid-cols-[300px]',
  2: 'grid-cols-[300px_300px]',
  3: 'grid-cols-[300px_300px_300px]',
} as const;
const ResearchDetail = ({ id }: { id: string }) => {
  const { data } = useFetch<ArtisticEducationFormSchema>({
    queryKey: ['research', id],
    collectionName: 'research',
    id,
  });
  return (
    <PageContainer
      className="bg-white mt-4"
      extra={<DeleteButton collectionName="research" id={id} />}
    >
      <div className="content-container flex-1 overflow-auto">
        <div className="flex justify-end">
          <Link to={`/admin/research/${id}/edit`}>
            <Button type="primary">Edit</Button>
          </Link>
        </div>
        <div className="p-10 flex flex-col justify-between h-full">
          <div className="flex justify-end">
            <div className="flex items-end flex-col">
              <div className="normal-text font-medium">Keywords: {data?.keywords} </div>
              <div
                className={`grid ${
                  gridClassName[(data?.content?.length as never) || 1]
                } gap-6 mt-6 normal-text`}
              >
                {data?.content?.map((item, index) => (
                  <div className="max-w-[300px]" key={index}>
                    {item.data}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="title-text font-semibold">{data?.title}</div>
            <div className="flex items-center mt-2 justify-between">
              <div className="text-[18px] leading-6 font-medium">{data?.summary}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[72px] font-medium normal-text px-[48px] black-top-border normal-text leading-4 justify-between items-center">
        by {data?.author}
        <div className="flex gap-3 svg-24 items-center svg-16"></div>
      </div>
    </PageContainer>
  );
};

export default ResearchDetail;
