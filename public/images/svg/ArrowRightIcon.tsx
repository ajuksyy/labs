import * as React from "react"
import { SVGProps } from "react"

const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    width="16"
    height="16"
    {...props}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d="M9 5l7 7-7 7" 
    />
  </svg>
)

export default ArrowRightIcon
