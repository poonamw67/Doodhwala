import React from "react"

const WhereWeAre = React.forwardRef((props, ref) =>
{
    return(
        <div ref={ref} className="whereWeAreDiv">Where we are!!!!</div>
    )
});

export default WhereWeAre