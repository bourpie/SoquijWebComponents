import { useState, useEffect } from 'react';
import { SqButton } from '../SqButton/SqButton';
import './SqHeader.scss';
import { Megamenu } from '../Megamenu';
import { SqLogoSoquij } from '../SqLogoSoquij/SqLogoSoquij';

export const SqHeader = () => {

  const [logo, setLogo] = useState("")
  const [logoAlt, setLogoAlt] = useState("")
  const [siteUrl, setSiteUrl] = useState("")

  async function getContent() {
    const response = await fetch("https://api-aristote.soquij.qc.ca/Contenu/fr");
    const jsonData = await response.json();
    await setLogo(jsonData.headerDto.logo.url)
    await setSiteUrl(jsonData.headerDto.logo.lienDto.urlTo)
    await setLogoAlt(jsonData.headerDto.logo.lienDto.name)
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
          <ul>
            <li>Lien</li>
            <li>Lien</li>
            <li>Lien</li>
          </ul>
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
            <Megamenu />
          </div>
          <div className='soquij-nav--boutons'>
              <SqButton variant="outline" label="Nous joindre" />
              <SqButton label="Se connecter" />
          </div>
        </div>
      </nav>
    </header>
)};
