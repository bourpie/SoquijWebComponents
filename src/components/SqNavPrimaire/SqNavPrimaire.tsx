import './SqNavPrimaire.scss'
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { SqNavPrimaireIcon } from '../SqNavPrimaireIcon/SqNavPrimaireIcon';

export function SqNavPrimaire() {

  return (  
    <NavigationMenu.Root>
      <NavigationMenu.List className="sq-nav-primaire">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>
            Produits <SqNavPrimaireIcon />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
              Mes produits
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>
            Formations <SqNavPrimaireIcon />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">

              Mes formations

          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            href="https://github.com/radix-ui"
          >
            Github
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <NavigationMenu.Viewport />  
    </NavigationMenu.Root>  
  )
}