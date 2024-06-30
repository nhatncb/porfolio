/* eslint-disable react/no-unescaped-entities */
import RigtIcon from 'assets/icons/black-arrow-right.svg';
import type { ArtisticEducationFormSchema } from 'containers/Admin/Research/ResearchContentEdit/schema';
import useFetch from 'hooks/useFetch';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import helpers from 'utils/helpers';

const gridClassName = {
  1: 'grid-cols-[300px]',
  2: 'grid-cols-[300px_300px]',
  3: 'grid-cols-[300px_300px_300px]',
  4: 'grid-cols-[300px_300px_300px_300px]',
} as const;

const ResearchDetail = () => {
  const { id = '' } = useParams();
  const { data } = useFetch<ArtisticEducationFormSchema>({
    queryKey: ['research', id],
    collectionName: 'research',
    id,
  });
  return (
    <>
      <div className="content-container flex-1 overflow-auto">
        <div className="p-10 flex flex-col justify-between h-full">
          <div className="flex justify-end">
            <div className="flex items-end flex-col">
              <div className="normal-text font-medium">Keywords: {data?.keywords} </div>
              <div
                className={`grid ${
                  gridClassName[(data?.content?.length as never) || 1]
                } gap-6 mt-6 normal-text pb-[84px]`}
              >
                {(data?.content || []).map((item, index) => (
                  <div className="max-w-[300px] leading-[20px]" key={index}>
                    {item.data}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <div>
            <div className="title-text font-semibold">{data?.title}</div>
            <div className="flex items-center mt-2 justify-between">
              <div className="text-[18px] leading-6 font-medium">{data?.summary}</div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="h-[100px] px-12 py-[25px] flex items-center text-[32px] leading-[36px] font-semibold black-top-border">
        <div>
          <div className="title-text font-semibold">{data?.title}</div>
          <div className="flex items-center mt-2 justify-between">
            <div className="text-[18px] leading-6 font-medium">{data?.summary}</div>
          </div>
        </div>
      </div>
      <div className="flex h-[72px] font-medium normal-text px-[48px] black-top-border normal-text leading-4 justify-between items-center">
        by {data?.author}
        <Link
          target="_blank"
          to={data?.viewFullUrl ? helpers.formatUrl(data?.viewFullUrl) || '' : '#'}
        >
          <div className="flex gap-3 svg-24 items-center svg-16">
            <RigtIcon />
            <div className="normal-text">view full</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ResearchDetail;
