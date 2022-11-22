import { FunctionComponent } from 'react'

type ImagesProps = {
    images: string
}

export const Images: FunctionComponent<ImagesProps> = ({ images }) => {
    const photos = images + `?random=${Math.random()}`
    return (
        <img alt="avatars" src={photos} className=" w-200px h-116px rounded-lg mr-2 mt-3" />
    )
}
