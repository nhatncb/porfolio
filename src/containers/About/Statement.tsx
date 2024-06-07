import type { StatementFormSchema } from 'containers/Admin/Statement/Edit/schema';
import useFetch from 'hooks/useFetch';
import React from 'react';

const StatementContent = () => {
  const { data } = useFetch<StatementFormSchema & { cvUrl: string }>({
    queryKey: ['statement', 'main'],
    collectionName: 'statement',
    id: 'main',
  });

  return (
    <div className="flex h-full">
      <div className="max-w-[498px] p-[24px] flex-1 flex items-center justify-center black-right-border">
        <div>
          <img
            alt="dnlx"
            height={412}
            src={data?.thumbnailImage?.url || '/images/Profile.png'}
            width={268}
          />
          <div className="mt-8">
            <div className="flex flex-col gap-[2px]">
              <div className="normal-text">B: {data?.born || ''}</div>
              <div className="normal-text">E: {data?.email || ''}</div>
              <div className="normal-text">T: {data?.phone || ''}</div>
            </div>
          </div>
          {data?.otherInfo && (
            <div className="mt-2 normal-text whitespace-pre-line">{data.otherInfo}</div>
          )}
        </div>
      </div>

      <div className="flex-1 flex p-[24px] justify-center items-center">
        <div className="max-w-[594px] translate-y-[-45px]">
          <div
            className="text-xl"
            dangerouslySetInnerHTML={{ __html: data?.introduction || '' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StatementContent;
