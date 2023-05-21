import './SqNavSecondaire.scss'

interface SqNavSecondaireProps {
    liens: Lien[];
}
  
interface Lien {
    texte: string
    cible?: string
    messageAccessibilite?: string
    iconeDto?: IconeDto
    affichages?: string
    urlTo?: string
}

interface IconeDto {
    id?: number
    name?: string
    url?: string
    alias?: string
    attributAlt?: string
    lienDto?: string
}

export function SqNavSecondaire({
    liens
}: SqNavSecondaireProps) {
    return (
        <ul className="sq-nav-secondaire">
            {
                liens && liens.map(item => (
                    <li>
                        <a href={item.urlTo}>{item.texte}
                            {item.iconeDto && 
                                <img 
                                    src={item.iconeDto?.url}
                                    alt={item.iconeDto?.attributAlt}
                                />
                            }                        
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}
