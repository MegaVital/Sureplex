import { FC, useEffect, useState } from 'react';
import { JobListItem } from './components/JobList';
import axios from 'axios';
import { DataProps } from './interface';
import { Pagination } from './components/Pagination';

type JobListProps = {}

export const JobList: FC<JobListProps> = () => {

  const initialData: DataProps = {
    id: '',
    name: '',
    email: '',
    phone: '',
    title: '',
    address: '',
    benefits: [],
    createdAt: '',
    description: '',
    employment_type: [],
    location: { lat: 0, long: 0 },
    pictures: [],
    salary: '',
    updatedAt: ''
  }
  const [data, setData] = useState([initialData])

  const getData = async () => {
    const token = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'
    axios.get('https://api.json-generator.com/templates/ZM1r0eic3XEy/data', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }).then((response: any) => {
      const userData = response.data as DataProps[]
      setData(userData);
    })
  }
  useEffect(
    () => {
      getData()
    }, []
  )

  return (
    <div className='flex flex-col items-center justify-center bg-grey'>
      <div className="container rounded-xl shaded py-6 sm:mx-9px sm:py-0 sm:mt-9px">
        {data.map((el, index) => {
          return <div key={data[index].id}>
            <JobListItem
              {...el} />
          </div>
        })}
      </div>
      <Pagination />
    </div>
  )
}