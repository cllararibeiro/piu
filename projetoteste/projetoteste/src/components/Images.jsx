<<<<<<< HEAD

import imagem from "../assets/nature.jpg"


function Images (){

    return(
        <>
        {/* opção 1 - importando de public, podemos referenciar como se estivesse em src. 
        Obs.: Tag figure permite usar a opção de legenda figcaption */}
        <figure>
            <img src={imagem} alt="Imagem de natureza" />
            <figcaption>Imagem da Natureza</figcaption>
        </figure>
        </>

    )
}

=======

import imagem from "../assets/nature.jpg"


function Images (){

    return(
        <>
        {/* opção 1 - importando de public, podemos referenciar como se estivesse em src. 
        Obs.: Tag figure permite usar a opção de legenda figcaption */}
        <figure>
            <img src={imagem} alt="Imagem de natureza" />
            <figcaption>Imagem da Natureza</figcaption>
        </figure>
        </>

    )
}

>>>>>>> fb5d4ddab8b818b6a5e6939ff82d4b98aa9aa000
export default Images