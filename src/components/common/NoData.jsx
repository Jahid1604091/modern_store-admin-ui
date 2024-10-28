import React from 'react';
import { MdInfoOutline } from 'react-icons/md'; 

const NoData = () => {
  return (
    <div className="flex flex-col items-center justify-center text-gray-500 py-10">
      <MdInfoOutline className="text-6xl mb-4" />
      <p className="text-xl font-semibold">No Data Available</p>
      <p className="text-sm">Please check back later.</p>
    </div>
  );
}

export default NoData;
