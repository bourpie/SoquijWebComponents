import './SqLink.scss'
import { SqIcon } from '../SqIcon'

interface LinkProps {
  /**
   * Variantes
   */
  variant?: 'default' | 'footer' | 'megamenu';
  /**
   * Texte du lien
   */
  text?: string;
  /**
   * Url
   */
  href?: string;
  /**
   * Dimensions disponibles
   */
  size?: 'normal' | 'small';
  /**
   * Themes
   */
  theme?: 'grey' | 'blue' | 'dark'
  
}
  
/**
 * Scénarios visuelles des liens. Voir le guide de style Web:
 * https://xd.adobe.com/view/87c9ca2a-bd97-4d22-a0a5-ff3cfbf80dda-d29a/screen/fb6aef8f-6f85-4383-b771-fb5bb44d2b90]
 */
export function SqLink({
  href = '',
  variant = 'default',
  size,
  text,
  theme,
  ...props
}: LinkProps) {

  /**
   * Specs de liens externes pour les normes d'accessibilités
  */
  const isExternal = /^https?:\/\/((?!(.*\.)?soquij\.qc\.ca)|localhost)/.test(`${href}`);
  const isFormation = /formations[-.]/.test(`${href}`);
  const isPdf = href.toLowerCase().endsWith(".pdf");
  const isNewTab = isExternal || isPdf || isFormation;

  const rel = isNewTab ? "noopener noreferrer" : null;
  const target = isNewTab ? "_blank" : null;
  const title = isNewTab ? "S'ouvre dans un nouvel onglet." : null;

  /**
   * Styles pour les différents scénarios
  */
  const variants = () => { return variant ? `sq-link--variant-${variant}` : null}
  const sizes = () => { return size ? `sq-link--size-${size}` : null}
  const themes = () => { return theme ? `sq-link--theme-${theme}` : null}

  const IconeLienExterne = () => {
    if (theme === 'dark') {
      return <SqIcon icon="iconLienExterneLight" />
    }  else {
      return <SqIcon icon="iconLienExterne" />
    }
  }

  return ( 
    <a
      href={href}
      className={[
        'sq-link', 
        variants(), 
        sizes(),
        themes()
      ].join(' ').trim()}
      rel={rel}
      target={target}
      title={title}
      {...props}
    >
      {text}
      {isNewTab && <IconeLienExterne />}
    </a>  
  );
}

