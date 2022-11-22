import { FunctionComponent } from "react";

type JobListItemProps = {
    name: string,
    title: string,
    id: string,
    address: string,
    createdAt: string,
    location: { lat: number, long: number },
    pictures: string[]
}

export const JobListItem: FunctionComponent<JobListItemProps> = ({ name, pictures, address, title, createdAt, location, id }) => {
    const date = new Date(createdAt).toLocaleDateString();
    const lat = location.lat
    const long = location.long
    const avatar = pictures[0] + `?random=${id}`

    return (
        <div className="px-4 py-6 mb-2 mx-auto bg-white rounded-xl shadow-md overflow-hidden w-1400px h-164 flex flex-row justify-between sm:w-396px sm:h-206px sm:bg-back sm:py-0 sm:relative" >
            <div className="flex flex-row sm:mt-11 sm:min-w-fit">
                <img alt='avatar' src={avatar} className='w-20 h-20 rounded-full mr-5 sm:mr-0 sm:min-w-66px sm:h-66px' />
                <span className="grid md:content-between sm:ml-5">
                    <a className="text-xl text-gray-500 font-bold font-sans tracking-tighter flex-wrap max-w-3xl h-14 sm:text-gray-700 sm:text-lg sm:font-normal sm:text-clip sm:tracking-tight sm:overflow-hidden" href={`/${id}`} >{title}</a>
                    <a className='text-gray-400 font-sans text-base' href={`/${id}`}>
                        {name}
                    </a>
                    <a className="flex flex-row gap-2 text-gray-400 font-sans text-base max-w-fit sm:h-6 sm:whitespace-nowrap" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/@${lat},${long},11z`}>
                        <img alt='location' className="w-max h-max" src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxMyAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjUgMThDNi41IDE4IDEzIDExLjk3MDYgMTMgN0MxMyAyLjAyOTQ0IDEwLjA4OTkgMCA2LjUgMEMyLjkxMDE1IDAgMCAyLjAyOTQ0IDAgN0MwIDExLjk3MDYgNi41IDE4IDYuNSAxOFpNNi41IDEwQzguNDMzIDEwIDEwIDguNDMzIDEwIDYuNUMxMCA0LjU2NyA4LjQzMyAzIDYuNSAzQzQuNTY3IDMgMyA0LjU2NyAzIDYuNUMzIDguNDMzIDQuNTY3IDEwIDYuNSAxMFoiIGZpbGw9IiM4NzhEOUQiLz4KPC9zdmc+Cg==' />
                        {address}
                    </a>
                </span>
            </div>
            <div className="flex flex-row sm:absolute sm:justify-between sm:w-11/12">
                <span className='flex flex-row items-center mx-7 justify-center  sm:ml-86 sm: mt-4'>
                    <svg className="sm:hidden" width="96" height="18" viewBox="0 0 96 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.69871 4.58966C7.42979 2.93116 8.82013 0.000488281 9.51634 0.000488281C10.5274 -0.000511719 12.7421 5.68649 12.7421 5.68649C12.7421 5.68649 14.7923 5.86549 16.4493 6.04849C17.3289 6.14549 18.8997 6.29349 18.998 6.77849C19.019 6.88349 18.8927 7.31249 18.663 7.61149C17.69 8.88149 15.1654 11.6025 15.1654 11.6025C15.1654 11.6025 15.3038 12.9025 15.4272 14.3245C15.5064 15.2445 15.7201 17.1085 15.6428 17.4415C15.5586 17.8085 15.4071 17.9085 15.2497 17.9665C14.8384 18.1165 13.8835 17.5335 12.7682 16.9995C11.2486 16.2705 9.54141 15.4915 9.54141 15.4915C9.54141 15.4915 8.41501 16.0805 7.07998 16.6555C5.65367 17.2695 4.20931 18.2815 3.60649 17.9255C3.23035 17.7025 3.50919 15.9645 3.65363 14.4175C3.78904 12.9585 3.90639 11.6255 3.90639 11.6255C3.90639 11.6255 3.06987 10.6435 2.09592 9.59349C1.04375 8.45849 -0.239128 7.23349 0.0387113 6.78349C0.248344 6.44349 1.20523 6.26149 2.81209 6.06249C4.51924 5.85049 6.22439 5.70049 6.22439 5.70049C6.22439 5.70049 6.41022 5.24412 6.69871 4.58966Z" fill="#38415D" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.6987 4.58966C26.4298 2.93116 27.8201 0.000488281 28.5163 0.000488281C29.5274 -0.000511719 31.7421 5.68649 31.7421 5.68649C31.7421 5.68649 33.7923 5.86549 35.4493 6.04849C36.3289 6.14549 37.8997 6.29349 37.998 6.77849C38.019 6.88349 37.8927 7.31249 37.663 7.61149C36.69 8.88149 34.1654 11.6025 34.1654 11.6025C34.1654 11.6025 34.3038 12.9025 34.4272 14.3245C34.5064 15.2445 34.7201 17.1085 34.6428 17.4415C34.5586 17.8085 34.4071 17.9085 34.2497 17.9665C33.8384 18.1165 32.8835 17.5335 31.7682 16.9995C30.2486 16.2705 28.5414 15.4915 28.5414 15.4915C28.5414 15.4915 27.415 16.0805 26.08 16.6555C24.6537 17.2695 23.2093 18.2815 22.6065 17.9255C22.2304 17.7025 22.5092 15.9645 22.6536 14.4175C22.789 12.9585 22.9064 11.6255 22.9064 11.6255C22.9064 11.6255 22.0699 10.6435 21.0959 9.59349C20.0437 8.45849 18.7609 7.23349 19.0387 6.78349C19.2483 6.44349 20.2052 6.26149 21.8121 6.06249C23.5192 5.85049 25.2244 5.70049 25.2244 5.70049C25.2244 5.70049 25.4102 5.24412 25.6987 4.58966Z" fill="#38415D" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M44.6987 4.58966C45.4298 2.93116 46.8201 0.000488281 47.5163 0.000488281C48.5274 -0.000511719 50.7421 5.68649 50.7421 5.68649C50.7421 5.68649 52.7923 5.86549 54.4493 6.04849C55.3289 6.14549 56.8997 6.29349 56.998 6.77849C57.019 6.88349 56.8927 7.31249 56.663 7.61149C55.69 8.88149 53.1654 11.6025 53.1654 11.6025C53.1654 11.6025 53.3038 12.9025 53.4272 14.3245C53.5064 15.2445 53.7201 17.1085 53.6428 17.4415C53.5586 17.8085 53.4071 17.9085 53.2497 17.9665C52.8384 18.1165 51.8835 17.5335 50.7682 16.9995C49.2486 16.2705 47.5414 15.4915 47.5414 15.4915C47.5414 15.4915 46.415 16.0805 45.08 16.6555C43.6537 17.2695 42.2093 18.2815 41.6065 17.9255C41.2304 17.7025 41.5092 15.9645 41.6536 14.4175C41.789 12.9585 41.9064 11.6255 41.9064 11.6255C41.9064 11.6255 41.0699 10.6435 40.0959 9.59349C39.0437 8.45849 37.7609 7.23349 38.0387 6.78349C38.2483 6.44349 39.2052 6.26149 40.8121 6.06249C42.5192 5.85049 44.2244 5.70049 44.2244 5.70049C44.2244 5.70049 44.4102 5.24412 44.6987 4.58966Z" fill="#38415D" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M64.6987 4.58966C65.4298 2.93116 66.8201 0.000488281 67.5163 0.000488281C68.5274 -0.000511719 70.7421 5.68649 70.7421 5.68649C70.7421 5.68649 72.7923 5.86549 74.4493 6.04849C75.3289 6.14549 76.8997 6.29349 76.998 6.77849C77.019 6.88349 76.8927 7.31249 76.663 7.61149C75.69 8.88149 73.1654 11.6025 73.1654 11.6025C73.1654 11.6025 73.3038 12.9025 73.4272 14.3245C73.5064 15.2445 73.7201 17.1085 73.6428 17.4415C73.5586 17.8085 73.4071 17.9085 73.2497 17.9665C72.8384 18.1165 71.8835 17.5335 70.7682 16.9995C69.2486 16.2705 67.5414 15.4915 67.5414 15.4915C67.5414 15.4915 66.415 16.0805 65.08 16.6555C63.6537 17.2695 62.2093 18.2815 61.6065 17.9255C61.2304 17.7025 61.5092 15.9645 61.6536 14.4175C61.789 12.9585 61.9064 11.6255 61.9064 11.6255C61.9064 11.6255 61.0699 10.6435 60.0959 9.59349C59.0437 8.45849 57.7609 7.23349 58.0387 6.78349C58.2483 6.44349 59.2052 6.26149 60.8121 6.06249C62.5192 5.85049 64.2244 5.70049 64.2244 5.70049C64.2244 5.70049 64.4102 5.24412 64.6987 4.58966Z" fill="#38415D" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M83.6987 4.58966C84.4298 2.93116 85.8201 0.000488281 86.5163 0.000488281C87.5274 -0.000511719 89.7421 5.68649 89.7421 5.68649C89.7421 5.68649 91.7923 5.86549 93.4493 6.04849C94.3289 6.14549 95.8997 6.29349 95.998 6.77849C96.019 6.88349 95.8927 7.31249 95.663 7.61149C94.69 8.88149 92.1654 11.6025 92.1654 11.6025C92.1654 11.6025 92.3038 12.9025 92.4272 14.3245C92.5064 15.2445 92.7201 17.1085 92.6428 17.4415C92.5586 17.8085 92.4071 17.9085 92.2497 17.9665C91.8384 18.1165 90.8835 17.5335 89.7682 16.9995C88.2486 16.2705 86.5414 15.4915 86.5414 15.4915C86.5414 15.4915 85.415 16.0805 84.08 16.6555C82.6537 17.2695 81.2093 18.2815 80.6065 17.9255C80.2304 17.7025 80.5092 15.9645 80.6536 14.4175C80.789 12.9585 80.9064 11.6255 80.9064 11.6255C80.9064 11.6255 80.0699 10.6435 79.0959 9.59349C78.0437 8.45849 76.7609 7.23349 77.0387 6.78349C77.2483 6.44349 78.2052 6.26149 79.8121 6.06249C81.5192 5.85049 83.2244 5.70049 83.2244 5.70049C83.2244 5.70049 83.4102 5.24412 83.6987 4.58966Z" fill="#38415D" />
                    </svg>
                    <svg className="md:hidden" width="54" height="10" viewBox="0 0 54 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.66204">
                            <path fill="#384564" fill-rule="evenodd" clip-rule="evenodd" d="M3.52575 2.55003C3.91053 1.62864 4.64229 0.000488281 5.00871 0.000488281C5.54085 -6.72744e-05 6.70647 3.15938 6.70647 3.15938C6.70647 3.15938 7.78552 3.25882 8.65763 3.36049C9.12061 3.41438 9.94731 3.4966 9.99905 3.76604C10.0101 3.82438 9.94362 4.06271 9.82273 4.22882C9.31065 4.93438 7.9819 6.44604 7.9819 6.44604C7.9819 6.44604 8.05476 7.16827 8.11969 7.95827C8.16139 8.46938 8.27384 9.50493 8.23319 9.68993C8.18884 9.89382 8.10913 9.94938 8.02625 9.9816C7.8098 10.0649 7.30723 9.74104 6.7202 9.44438C5.92041 9.03938 5.02191 8.6066 5.02191 8.6066C5.02191 8.6066 4.42907 8.93382 3.72642 9.25327C2.97573 9.59438 2.21554 10.1566 1.89827 9.95882C1.7003 9.83493 1.84706 8.86938 1.92308 8.00993C1.99435 7.19938 2.05611 6.45882 2.05611 6.45882C2.05611 6.45882 1.61583 5.91327 1.10323 5.32993C0.549456 4.69938 -0.125741 4.01882 0.02049 3.76882C0.130823 3.57993 0.63445 3.47882 1.48016 3.36827C2.37866 3.25049 3.27611 3.16716 3.27611 3.16716C3.27611 3.16716 3.37392 2.91362 3.52575 2.55003Z" />
                            <path fill="#384564" fill-rule="evenodd" clip-rule="evenodd" d="M14.5258 2.55003C14.9105 1.62864 15.6423 0.000488281 16.0087 0.000488281C16.5408 -6.72744e-05 17.7065 3.15938 17.7065 3.15938C17.7065 3.15938 18.7855 3.25882 19.6576 3.36049C20.1206 3.41438 20.9473 3.4966 20.999 3.76604C21.0101 3.82438 20.9436 4.06271 20.8227 4.22882C20.3107 4.93438 18.9819 6.44604 18.9819 6.44604C18.9819 6.44604 19.0548 7.16827 19.1197 7.95827C19.1614 8.46938 19.2738 9.50493 19.2332 9.68993C19.1888 9.89382 19.1091 9.94938 19.0262 9.9816C18.8098 10.0649 18.3072 9.74104 17.7202 9.44438C16.9204 9.03938 16.0219 8.6066 16.0219 8.6066C16.0219 8.6066 15.4291 8.93382 14.7264 9.25327C13.9757 9.59438 13.2155 10.1566 12.8983 9.95882C12.7003 9.83493 12.8471 8.86938 12.9231 8.00993C12.9943 7.19938 13.0561 6.45882 13.0561 6.45882C13.0561 6.45882 12.6158 5.91327 12.1032 5.32993C11.5495 4.69938 10.8743 4.01882 11.0205 3.76882C11.1308 3.57993 11.6344 3.47882 12.4802 3.36827C13.3787 3.25049 14.2761 3.16716 14.2761 3.16716C14.2761 3.16716 14.3739 2.91362 14.5258 2.55003Z" />
                            <path fill="#384564" fill-rule="evenodd" clip-rule="evenodd" d="M25.5258 2.55003C25.9105 1.62864 26.6423 0.000488281 27.0087 0.000488281C27.5408 -6.72744e-05 28.7065 3.15938 28.7065 3.15938C28.7065 3.15938 29.7855 3.25882 30.6576 3.36049C31.1206 3.41438 31.9473 3.4966 31.999 3.76604C32.0101 3.82438 31.9436 4.06271 31.8227 4.22882C31.3107 4.93438 29.9819 6.44604 29.9819 6.44604C29.9819 6.44604 30.0548 7.16827 30.1197 7.95827C30.1614 8.46938 30.2738 9.50493 30.2332 9.68993C30.1888 9.89382 30.1091 9.94938 30.0262 9.9816C29.8098 10.0649 29.3072 9.74104 28.7202 9.44438C27.9204 9.03938 27.0219 8.6066 27.0219 8.6066C27.0219 8.6066 26.4291 8.93382 25.7264 9.25327C24.9757 9.59438 24.2155 10.1566 23.8983 9.95882C23.7003 9.83493 23.8471 8.86938 23.9231 8.00993C23.9943 7.19938 24.0561 6.45882 24.0561 6.45882C24.0561 6.45882 23.6158 5.91327 23.1032 5.32993C22.5495 4.69938 21.8743 4.01882 22.0205 3.76882C22.1308 3.57993 22.6344 3.47882 23.4802 3.36827C24.3787 3.25049 25.2761 3.16716 25.2761 3.16716C25.2761 3.16716 25.3739 2.91362 25.5258 2.55003Z" />
                            <path fill="#384564" fill-rule="evenodd" clip-rule="evenodd" d="M36.5258 2.55003C36.9105 1.62864 37.6423 0.000488281 38.0087 0.000488281C38.5408 -6.72744e-05 39.7065 3.15938 39.7065 3.15938C39.7065 3.15938 40.7855 3.25882 41.6576 3.36049C42.1206 3.41438 42.9473 3.4966 42.999 3.76604C43.0101 3.82438 42.9436 4.06271 42.8227 4.22882C42.3107 4.93438 40.9819 6.44604 40.9819 6.44604C40.9819 6.44604 41.0548 7.16827 41.1197 7.95827C41.1614 8.46938 41.2738 9.50493 41.2332 9.68993C41.1888 9.89382 41.1091 9.94938 41.0262 9.9816C40.8098 10.0649 40.3072 9.74104 39.7202 9.44438C38.9204 9.03938 38.0219 8.6066 38.0219 8.6066C38.0219 8.6066 37.4291 8.93382 36.7264 9.25327C35.9757 9.59438 35.2155 10.1566 34.8983 9.95882C34.7003 9.83493 34.8471 8.86938 34.9231 8.00993C34.9943 7.19938 35.0561 6.45882 35.0561 6.45882C35.0561 6.45882 34.6158 5.91327 34.1032 5.32993C33.5495 4.69938 32.8743 4.01882 33.0205 3.76882C33.1308 3.57993 33.6344 3.47882 34.4802 3.36827C35.3787 3.25049 36.2761 3.16716 36.2761 3.16716C36.2761 3.16716 36.3739 2.91362 36.5258 2.55003Z" />
                            <path fill="#384564" fill-rule="evenodd" clip-rule="evenodd" d="M47.5258 2.55003C47.9105 1.62864 48.6423 0.000488281 49.0087 0.000488281C49.5408 -6.72744e-05 50.7065 3.15938 50.7065 3.15938C50.7065 3.15938 51.7855 3.25882 52.6576 3.36049C53.1206 3.41438 53.9473 3.4966 53.999 3.76604C54.0101 3.82438 53.9436 4.06271 53.8227 4.22882C53.3107 4.93438 51.9819 6.44604 51.9819 6.44604C51.9819 6.44604 52.0548 7.16827 52.1197 7.95827C52.1614 8.46938 52.2738 9.50493 52.2332 9.68993C52.1888 9.89382 52.1091 9.94938 52.0262 9.9816C51.8098 10.0649 51.3072 9.74104 50.7202 9.44438C49.9204 9.03938 49.0219 8.6066 49.0219 8.6066C49.0219 8.6066 48.4291 8.93382 47.7264 9.25327C46.9757 9.59438 46.2155 10.1566 45.8983 9.95882C45.7003 9.83493 45.8471 8.86938 45.9231 8.00993C45.9943 7.19938 46.0561 6.45882 46.0561 6.45882C46.0561 6.45882 45.6158 5.91327 45.1032 5.32993C44.5495 4.69938 43.8743 4.01882 44.0205 3.76882C44.1308 3.57993 44.6344 3.47882 45.4802 3.36827C46.3787 3.25049 47.2761 3.16716 47.2761 3.16716C47.2761 3.16716 47.3739 2.91362 47.5258 2.55003Z" />
                        </g>
                    </svg>
                </span>
                <span className="flex flex-col items-end justify-between sm:flex-row">
                    <img className="w-4 h-5 sm:hidden" alt='bookmark' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAxOCAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xIDQuMDAwMTZDMSAyLjUyNzQgMi4xOTM5MSAxLjMzMzUgMy42NjY2NyAxLjMzMzVIMTQuMzMzM0MxNS44MDYxIDEuMzMzNSAxNyAyLjUyNzQgMTcgNC4wMDAxNlYxOS45OTM2QzE3IDIxLjE1OTUgMTUuNjA5IDIxLjc2MzkgMTQuNzU2NyAyMC45NjgyTDkuOTA5OTQgMTYuNDQyOEM5LjM5NzYxIDE1Ljk2NDUgOC42MDIzOSAxNS45NjQ1IDguMDkwMDcgMTYuNDQyOEwzLjI0MzI3IDIwLjk2ODJDMi4zOTEwNCAyMS43NjM5IDEgMjEuMTU5NSAxIDE5Ljk5MzZWNC4wMDAxNloiIHN0cm9rZT0iIzcwNzc4QiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo=' />
                    <p className='text-gray-400 font-sans  sm:mt-2'>Posted {date}</p>
                </span>
            </div>
        </div>
    )
}