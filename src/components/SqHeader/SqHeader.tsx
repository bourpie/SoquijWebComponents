
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
  const [boutonsActions, setBoutonsActions] = useState([])

  const VITE_URL_API = import.meta.env.VITE_URL_API

  async function getContent() {
    const response = await fetch(VITE_URL_API);
    const json = await response.json();
    await setLogo(json.headerDto.logo.url)
    await setSiteUrl(json.headerDto.logo.lienDto.urlTo)
    await setLogoAlt(json.headerDto.logo.lienDto.name)
    await setLiensSecondaires(json.headerDto.lienSecondaireDtos)
    await setLiensPrimaires(json.headerDto.navigationDto.menuPrincipalDtos)
    await setBoutonsActions(json.headerDto.boutonActionDtos)
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
        <div className="soquij-nav--wrapper">
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
              { boutonsActions.map((bouton, i) => (
                <SqButton 
                  key={i} 
                  href={bouton.urlTo}
                  label={bouton.texte} 
                  variant={i === 0 ? 'outlined' : 'contained'}
                />
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>

)};
