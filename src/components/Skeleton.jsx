import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={390}
      height={683}
      viewBox="0 0 390 683"
      backgroundColor="#8a9392"
      foregroundColor="#fdfcfc">
      <rect x="35" y="10" rx="0" ry="0" width="390" height="544" />
      <rect x="115" y="458" rx="0" ry="0" width="1" height="14" />
      <rect x="79" y="570" rx="0" ry="0" width="277" height="20" />
      <rect x="160" y="608" rx="0" ry="0" width="93" height="17" />
      <rect x="36" y="638" rx="0" ry="0" width="98" height="21" />
    </ContentLoader>
  );
};

export default Skeleton;
