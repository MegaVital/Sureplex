import { FunctionComponent } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

type PaginationProps = {}

export const Pagination: FunctionComponent<PaginationProps> = () => {
    return (
        <div className='container grid rounded-xl shaded shadow-md bg-white max-w-fit font-bold mb-12 sm:min-w-396px sm:h-10 sm:bg-back'>
            <nav className="isolate inline-flex -space-x-px sm:ml-1.5" aria-label="Pagination">
                <a href="/" className="relative inline-flex items-center rounded-l-md py-2 sm:py-7px px-4 mr-0.5 border-r border-slate-200">
                    <ChevronLeftIcon className="h-5 w-5 font-bold text-gray-400" aria-hidden="true" />
                </a>
                <div>
                    <a href="/" className="relative inline-flex items-center px-4 py-2 sm:py-7px ml-8 text-md text-gray-500 font-bold sm:px-3">
                        1
                    </a>
                    <a aria-current="page" href="/" className="relative z-10 inline-flex items-center border-b-2 border-b-pag-blue px-4 py-2 sm:py-7px text-md text-pag-blue sm:text-pag-media sm:border-b-pag-media sm:px-2.5">
                        2
                    </a>
                    <a href="/" className="relative inline-flex items-center px-4 py-2 sm:py-7px text-md text-gray-500 font-bold sm:px-2.5">
                        3
                    </a>
                    <a href="/" className="relative inline-flex items-center px-4 py-2 sm:py-7px text-md text-gray-500 font-bold sm:px-2.5">
                        4
                    </a>
                    <a href="/" className="relative inline-flex items-center px-4 py-2 sm:py-7px text-md text-gray-500 font-bold sm:px-2.5">
                        5
                    </a>
                    <a href="/" className="relative inline-flex items-center px-4 py-2 sm:py-7px text-md text-gray-500 font-bold sm:px-2.5">
                        ...
                    </a>
                    <a href="/" className="relative inline-flex items-center px-4 py-2 sm:py-7px mr-8 text-md text-gray-500 font-bold sm:px-2.5">
                        18
                    </a>
                </div>
                <a href="/" className="relative inline-flex items-center rounded-r-md  py-2 sm:py-7px px-4 sm:px-3 pl-4 border-l border-slate-200">
                    <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </a>
            </nav>
        </div>
    )
} 