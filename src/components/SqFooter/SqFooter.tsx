import { useState, useEffect } from 'react';
import { SqLogoSoquij } from "../SqLogoSoquij"
import { SqLink } from "../SqLink"
import {SqTypo} from '../SqTypo';
import "./SqFooter.scss"

export function SqFooter() {
  const [logo, setLogo] = useState("")
  const [logoAlt, setLogoAlt] = useState("")
  const [siteUrl, setSiteUrl] = useState("")
  const [reseauxSociaux, setReseauxSociaux] = useState([])
  const [liensImportants, setLiensImportants] = useState([])
  const [liensLegaux, setLiensLegaux] = useState([])

  const VITE_URL_API = import.meta.env.VITE_URL_API

  async function getContent() {
    const response = await fetch(VITE_URL_API);
    const json = await response.json();
    await setLogo(json.footerDto.logoLiensImportantsDto.logo.url)
    await setLogoAlt(json.footerDto.logoLiensImportantsDto.logo.attributAlt)
    await setSiteUrl(json.footerDto.logoLiensImportantsDto.logo.lienDto.urlTo)
    await setReseauxSociaux(json.footerDto.reseauxSociauxDto.iconeSocialDtos)
    await setLiensImportants(json.footerDto.logoLiensImportantsDto.groupeDeLiensImportantsDtos)
    await setLiensLegaux(json.footerDto.liensLegauxDto.liensDtos)
  }

  useEffect(() => {
    getContent();
  }, [])

  return (
    <footer className="site-footer">
      <div className="site-footer--medias-sociaux">
        <ul className="site-footer--medias-sociaux-liste">
          {reseauxSociaux && reseauxSociaux.map((item, index) => (
            <li key={index}>
              <a href={item.urlLien} title={item.attributTitle + "-" + item.messageAccessibilite} target="_blank">
                <img src={item.urlImage} alt={item.attributAlt} />
              </a>
            </li>
          ))}
          
        </ul>
      </div>
      <div className="site-footer--liens-importants">
        <div className="site-footer--liens-importants--wrapper">
          <div className="site-footer--liens-importants--logo">
            <SqLogoSoquij 
              src={logo} 
              alt={logoAlt} 
              href={siteUrl}
              height={71}
              width={170}
              />
          </div>
          {liensImportants && liensImportants.map((item, index) => (
            <div key={index} className="site-footer--liens-importants--liste-lien">
              <SqTypo
                text={item.titre}
                variant="h3"
              />
              <ul>
              {item.liensDtos && item.liensDtos.map((item, index) => (
                <li key={index}><SqLink variant="footer" text={item.texte} href={item.urlTo} /></li>
              ))}
              </ul>
            </div>
          ))}
          
        </div>
        <div className="site-footer--liens-importants--forme"></div>
      </div>
      <ul className="site-footer--liens-legaux">
        {liensLegaux && liensLegaux.map((item, index) => (
          <li><SqLink key={index} variant="footer" text={item.texte} href={item.urlTo} /></li>
        ))}
      </ul>
      <div className="site-footer--mention-legale"></div>
    </footer>
  )
}
