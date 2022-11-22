import { FunctionComponent } from 'react'

type EmploymentTypeProps = {
    employmentType: string
}

export const EmploymentType: FunctionComponent<EmploymentTypeProps> = ({ employmentType }) => {
    return (
        <span className="flex flex-row items-center justify-center rounded-lg border border-transparent bg-emp_bg border-slate-300 w-56 h-12 sm:w-122px px-6 py-4 mr-2 text-sm font-bold text-emp_text uppercase">
            {employmentType}
        </span>
    )
}
