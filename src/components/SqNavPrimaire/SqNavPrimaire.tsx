import './SqNavPrimaire.scss'
import { useState, useEffect } from 'react';
import { SqNavPrimaireIcon } from '../SqNavPrimaireIcon/SqNavPrimaireIcon';
import { SqNavPrimaireSmenu } from '../SqNavPrimaireSmenu/SqNavPrimaireSmenu';

export function SqNavPrimaire({
  liens
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutId);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setHoveredIndex(null);
    }, 1000);
    setTimeoutId(id);
  };

  const handleAnimationEnd = () => {
    setIsClosing(true);
  }
  
  const handleClick = (e) => {
    e.preventdefault();
    setIsOpen(true);
  };

  useEffect(() => {

    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (  

      <ul className="sq-nav-primaire">
        {liens && liens.map((lien, i) => (
          
          <li 
            key={i}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
          >
            {lien.megaMenuDto ? (
              <>
                <a 
                  href='' 
                  className='megamenu-trigger'
                  aria-expanded={hoveredIndex === i ? 'true' : 'false'}
                >
                  {lien.lienDto.texte}
                </a>
                <button onClick={handleClick}><SqNavPrimaireIcon /></button>
                <div className={`sq-nav-primaire--sous-menu ${hoveredIndex === i ? 'show' : ''}`}>
                <SqNavPrimaireSmenu contenu={lien.megaMenuDto} />
              </div> 
              </>
            ) : (
              <a
              href={lien.lienDto.texte}
              target="_blank"
              rel="noopener noreferrer"
              className='megamenu-trigger'
            >
              Trouver une décision
            </a>
            )}
        </li>
        ))}
      </ul>
  )
}