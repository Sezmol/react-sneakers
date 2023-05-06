import React from 'react';
import ContentLoader from 'react-content-loader';

const CardLoader = (props) => (
  <div className="card">
    <ContentLoader
      speed={2}
      width={150}
      height={187}
      viewBox="0 0 150 187"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="1" y="-1" rx="10" ry="10" width="150" height="91" />
      <rect x="0" y="107" rx="3" ry="3" width="150" height="15" />
      <rect x="0" y="126" rx="3" ry="3" width="93" height="15" />
      <rect x="0" y="163" rx="8" ry="8" width="80" height="24" />
      <rect x="118" y="155" rx="8" ry="8" width="32" height="32" />
    </ContentLoader>
  </div>
);

export default CardLoader;
