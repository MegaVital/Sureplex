export interface DataProps {
    id: string,
    name: string,
    email: string,
    phone: string,
    title: string,
    address: string,
    benefits: string[],
    createdAt: string,
    description: string,
    employment_type: string[],
    location: { lat: number, long: number },
    pictures: string[],
    salary: string,
    updatedAt: string
}