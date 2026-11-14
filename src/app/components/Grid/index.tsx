import dados  from "@/app/data/artigos.json";
import { criarSlug } from "@/app/lib/slugify";
import { Artigo } from "@/app/types/types";
import Link from "next/dist/client/link";


export const dynamic = 'force-dinamic'
type Props ={
    artigos : Artigo[]
}
const Grid = ({artigos}:Props) => {

    return (
    <section className="p-4 ">
        <h1 className="text-black text-4xl md:text-7xl font-italic p-4">Artigos Populares</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {artigos.map((artigo) => (
                <Link href={`/artigos/${criarSlug(artigo.titulo)}`} key={artigo.titulo}>
                    <div className="bg-white p-4 rounded  shadow-md ring  transition-transform duration-300 hover:scale-110">
                        <h2 className="text-xl text-black font-bold">{artigo.titulo}</h2>
                        
                    </div>
                    </Link>
        
            ))}
            </div>
    </section>)
}

export default Grid