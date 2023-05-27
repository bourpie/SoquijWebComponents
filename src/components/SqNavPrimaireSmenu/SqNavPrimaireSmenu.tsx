import './SqNavPrimaireSmenu.scss'
import { SqLink } from '../SqLink';
import { SqCard } from '../SqCard'

export function SqNavPrimaireSmenu({contenu}) {
  return (
      <div key={contenu} className="wrapper">
          <div className={`SqMegaMenu-MenuItem SqMegaMenu-ColonneImage`}>
            <SqCard
              titreColonne={contenu.megaMenuColonneImageDto.titreColonne}
              html={contenu.megaMenuColonneImageDto.html}
              image={contenu.megaMenuColonneImageDto.imageDto}
              lien={contenu.megaMenuColonneImageDto.lienDto}
              couleurTrait={contenu.megaMenuColonneImageDto.couleurTrait}
            />
          </div>  
          {contenu.megaMenuColonneTexteDtos.map((item, index) => (
              <div className='SqMegaMenu-MenuItem' key={index}>
                <h3 className={`couleurTrait--${item.couleurTrait.replace(/ /g,'')}`}>{item.titreColonne}</h3>
                <ul>
                  {item.lienDtos.map((lien, index) => (
                    <li key={index}>
                      <SqLink href={lien.urlTo} text={lien.texte} variant="megamenu" />
                    </li>
                  ))}
                </ul>
              </div>
          ))}
      </div>
  )
}
