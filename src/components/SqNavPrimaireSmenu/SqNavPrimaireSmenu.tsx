import './SqNavPrimaireSmenu.scss'
import { AnimatePresence, motion } from 'framer-motion'
import { SqLink } from '../SqLink';
import { SqCard } from '../SqCard'
 
const dropIn = {
  hidden: {
    y: "-120px",
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration:5,
      type: "spring",
      damping: 50,
      stiffness: 1000,
    }
  },
  exit: {
    y: "-120px",
    opacity: 0,
  }

}

export function SqNavPrimaireSmenu({contenu}) {

  return (
    <AnimatePresence>
    <motion.div
      key={contenu}
      className="sq-nav-primaire--sous-menu"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3}}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="wrapper">
        
          <div className='SqMegaMenu-MenuItem SqMegaMenu-ColonneImage'>
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
    </motion.div>
    </AnimatePresence>
  )
}
