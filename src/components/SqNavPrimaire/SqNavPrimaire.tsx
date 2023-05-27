import './SqNavPrimaire.scss'
import { useState, useEffect, useRef } from 'react';
import { SqNavPrimaireIcon } from '../SqNavPrimaireIcon/SqNavPrimaireIcon';
import { SqNavPrimaireSmenu } from '../SqNavPrimaireSmenu/SqNavPrimaireSmenu';

export function SqNavPrimaire({
  liens
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const lastFocusedButtonRef = useRef(null);

  const handleFocus = (index) => {
    const lastTriggerButton = document.querySelector('button:focus');
    if (lastTriggerButton) {
      lastFocusedButtonRef.current = lastTriggerButton; // Store the last focused button
    }
  };

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
  
  const handleClick = (index) => {
    if (hoveredIndex === index) {
      setHoveredIndex(null);
    } else {
      setHoveredIndex(index);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      lastFocusedButtonRef.current.focus(); 
      setHoveredIndex(null); // Fermer le menu
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
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
                <button 
                  onClick={() => handleClick(i)}
                  onFocus={() => handleFocus(i)}
                >
                  <SqNavPrimaireIcon />
                </button>
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