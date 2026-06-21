import * as React from "react";
const WaveSvg = (props : React.ComponentPropsWithoutRef<"svg">) => (
    <svg
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className="block w-full h-16 md:h-32 lg:h-36"
        {...props}
    >
        <path
            d="M0,100 C320,220 1120,0 1440,100 L1440,200 L0,200 Z"
            fill="#f3f4f6"
        />
    </svg>
);
export default WaveSvg;
