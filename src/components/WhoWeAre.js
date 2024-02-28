import React from 'react';

const WhoWeAre = React.forwardRef(({}, ref) =>
{
    return <div ref={ref} className="whoWeAreDiv">Who we are!!!</div>
});

export default WhoWeAre