import * as React from "react"
import { SVGProps } from "react"

const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 19l-7-7 7-7" 
    />
  </svg>
)

export default ArrowLeftIcon
