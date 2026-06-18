import * as React from "react";
const LiveIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" {...props}>
        <circle cx={12} cy={12} r={3} fill="#fff" />
        <path
            d="M5 12a7 7 0 0 1 14 0"
            stroke="#fff"
            strokeWidth={2}
            fill="none"
        />
        <path
            d="M2 12a10 10 0 0 1 20 0"
            stroke="#fff"
            strokeWidth={2}
            fill="none"
        />
    </svg>
);
export default LiveIcon;