import type { Metadata } from 'next';
export const metadata:Metadata ={
    title:'MovieLayout metadata'
}
type Props = {children: React.ReactNode}
const MovieLayout =({children}:Props) =>{

    return(
        <div>
            {children}
        </div>
    )
}
export default MovieLayout
