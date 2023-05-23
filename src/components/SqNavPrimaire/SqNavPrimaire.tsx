import './SqNavPrimaire.scss'
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { SqNavPrimaireIcon } from '../SqNavPrimaireIcon/SqNavPrimaireIcon';
import { SqNavPrimaireSmenu } from '../SqNavPrimaireSmenu/SqNavPrimaireSmenu';

export function SqNavPrimaire() {

  return (  
    <NavigationMenu.Root>
      <NavigationMenu.List className="sq-nav-primaire">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className='megamenu-trigger'>
            Produits <SqNavPrimaireIcon />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <SqNavPrimaireSmenu />
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className='megamenu-trigger'>
            Formations <SqNavPrimaireIcon />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <SqNavPrimaireSmenu />
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="https://github.com/radix-ui"
            className='megamenu-trigger'
          >
            Trouver une décision
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <NavigationMenu.Viewport />  
    </NavigationMenu.Root>  
  )
}