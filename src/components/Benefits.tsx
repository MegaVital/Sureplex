import { FunctionComponent } from 'react'

type BenefitsProps = {
    benefits: string
}

export const Benefits: FunctionComponent<BenefitsProps> = ({ benefits }) => {
    return (
        <span className="flex flex-row items-center justify-center rounded-lg border border-transparent bg-ben_bg border-ben_border w-56 h-12 px-6 py-4 mr-2 text-sm font-bold text-ben_text uppercase">
            {benefits}
        </span>
    )
}
