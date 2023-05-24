import './SqNavPrimaire.scss'
import { useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { SqNavPrimaireIcon } from '../SqNavPrimaireIcon/SqNavPrimaireIcon';
import { SqNavPrimaireSmenu } from '../SqNavPrimaireSmenu/SqNavPrimaireSmenu';
import { AnimatePresence } from 'framer-motion'

export function SqNavPrimaire({
  liens
}) {

  const [value, setValue] = useState("");

  console.log("CONTENU", liens)

  return (  
    <NavigationMenu.Root value={value} onValueChange={setValue}>
      <NavigationMenu.List className="sq-nav-primaire">
        {liens && liens.map((lien, index) => (
          <NavigationMenu.Item key={index}>
            {lien.megaMenuDto ? (
              <>
                <NavigationMenu.Trigger className='megamenu-trigger'>
                  {lien.lienDto.texte} <SqNavPrimaireIcon />
                </NavigationMenu.Trigger>
               
                  {value !== "open" && (
                    <NavigationMenu.Content
                      className="NavigationMenuContent"
                    >
                      <SqNavPrimaireSmenu contenu={lien.megaMenuDto} />
                    </NavigationMenu.Content>

                  )}
                
              </>
            ) : (
              <NavigationMenu.Link
              href={lien.lienDto.texte}
              target="_blank"
              rel="noopener noreferrer"
              className='megamenu-trigger'
            >
              Trouver une décision
            </NavigationMenu.Link>
            )}
        </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
      <NavigationMenu.Viewport /> 
    </NavigationMenu.Root>  
  )
}