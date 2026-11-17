import dados from "@/app/data/artigos.json";
import { criarSlug } from "@/app/lib/slugify";
import { Artigo } from "@/app/types/types";
import { notFound } from "next/dist/client/components/navigation";

export async function generateStaticParams() {
    const slugs = dados.artigos.map((artigo: Artigo) => criarSlug(artigo.titulo));
    return slugs.map((slug: string) => ({ slug }));
}

type Props ={
    params:Promise<{
        slug:string
    }>
}

export const instant = false;

export const generateMetadata = async ({params}: Props) =>{
    const {slug} = await params;
    const details = dados.artigos.find((a:Artigo)=> criarSlug(a.titulo) === slug);
    if(!details)
        return;

    if(details){
        return{
            title: `${details.titulo} | BlogNews`,
            description: details.texto,
            openGraph: {
                title: `${details.titulo} | Cinelista`,
                description: details.texto,
                
            }
        }
    }
    
}

export default async function ArtigoPage({params}: Props){
    const {slug} = await params;

    const artigo = dados.artigos.find((a:Artigo)=> criarSlug(a.titulo) === slug);
    if(!artigo){
        return   notFound();
    }

    return(
        <article className="grow container mx-auto p-4  bg-sky-50">
            <h1 className="py-4 text-2xl font-bold mb-4 text-black">{artigo.titulo}</h1>
            <p className="text-gray-800 first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:leading-3.5 text-justify text-gray-300 ">
                {artigo.texto}</p>
                <p className="text-sm p-3 text-gray-500">Autor(a): {artigo.autor} </p>
                
        </article>
    );


}