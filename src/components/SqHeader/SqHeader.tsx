import './SqHeader.scss';
import { useState, useEffect } from 'react';
import { SqButton } from '../SqButton/SqButton';
import { SqNavPrimaire } from '../SqNavPrimaire';
import { SqLogoSoquij } from '../SqLogoSoquij/SqLogoSoquij';
import { SqNavSecondaire } from '../SqNavSecondaire';

export const SqHeader = () => {

  const [logo, setLogo] = useState("")
  const [logoAlt, setLogoAlt] = useState("")
  const [siteUrl, setSiteUrl] = useState("")
  const [liensSecondaires, setLiensSecondaires] = useState([])
  const [liensPrimaires, setLiensPrimaires] = useState([])

  async function getContent() {
    const response = await fetch("https://api-aristote.soquij.qc.ca/Contenu/fr");
    const json = await response.json();
    await setLogo(json.headerDto.logo.url)
    await setSiteUrl(json.headerDto.logo.lienDto.urlTo)
    await setLogoAlt(json.headerDto.logo.lienDto.name)
    await setLiensSecondaires(json.headerDto.lienSecondaireDtos)
    await setLiensPrimaires(json.headerDto.navigationDto.menuPrincipalDtos)
  }

  useEffect(() => {
    getContent();
  }, [])

  return (
    <header className="soquij-header">
      <nav 
        aria-label="Navigation principale"
        className="soquij-nav"
        >
        <div className="soquij-nav--liens-secondaires">
          <SqNavSecondaire liens={liensSecondaires} />
        </div>
        <div className='soquij-nav--toolbar'>
          <div className='soquij-nav--logo'>
            <SqLogoSoquij
              href={siteUrl}
              src={logo}
              alt={logoAlt}
            />
          </div>
          <div className='soquij-nav--megamenu'>
            <SqNavPrimaire liens={liensPrimaires} />
          </div>
          <div className='soquij-nav--boutons'>
              <SqButton href="" variant="outlined" label="Nous joindre" />
              <SqButton href="" label="Se connecter" />
          </div>
        </div>
      </nav>
    </header>

)};
