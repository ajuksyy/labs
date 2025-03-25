import * as React from "react"
import { SVGProps } from "react"

const LightningIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path 
      d="M13 10V3L4 14H11V21L20 10H13Z" 
      fill="currentColor" 
    />
  </svg>
)

export default LightningIcon
