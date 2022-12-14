import * as React from "react"

function HomeIcon({ fill = "#6C7281", ...rest }) {
    return (
        <svg
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 463.89285 438.87704"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <g transform="translate(-42.339 -276.34)">
                <path
                    fill={fill}
                    stroke="#000"
                    strokeWidth="10"
                    d="m437.15 499.44zl-162.81-144.19-162.91 144.25v206.12c0 5.3234 4.3016 9.5938 9.625 9.5938h101.81v-90.375c0-5.3234 4.2704-9.625 9.5938-9.625h83.656c5.3234 0 9.5938 4.3016 9.5938 9.625v90.375h101.84c5.3234 0 9.5938-4.2704 9.5938-9.5938v-206.19zm-325.72 0.0625z"
                />
                <path
                    fill={fill}
                    stroke="#000"
                    strokeWidth="10"
                    d="m273.39 276.34-231.05 204.58 24.338 27.457 207.66-183.88 207.61 183.88 24.291-27.457-231-204.58-0.89792 1.0397-0.94518-1.0397z"
                />
                <path
                    fill={fill}
                    stroke="#000"
                    strokeWidth="10"
                    d="m111.43 305.79h58.571l-0.51038 34.691-58.061 52.452v-87.143z"
                />
            </g>
        </svg>
    )
}

export default HomeIcon
