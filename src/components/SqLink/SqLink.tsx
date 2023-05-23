import './SqLink.scss'

interface LinkProps {
  /**
   * Texte du lien
   */
  text: string;
  /**
   * Url
   */
  href?: string;
  /**
   * Variantes
   */
  variant?: 'default' | 'footer';
  /**
   * Dimensions disponibles
   */
  size?: 'normal' | 'small';
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
  ...props
}: LinkProps) {

  /**
   * Spécifications pour que liens externes respectent les normes d'accessibilités
   */
  const isExternal = /^https?:\/\/((?!(.*\.)?soquij\.qc\.ca)|localhost)/.test(`${href}`);
  const isPdf = href.toLowerCase().endsWith(".pdf");
  const isNewTab = isExternal || isPdf;
  const rel = isExternal ? "noopener noreferrer" : "";
  const target = isExternal ? "_blank" : "";
  const title = isExternal ? "S'ouvre dans un nouvel onglet." : "";

  return ( 
    <>
      <a
        href={href}
        className={[
          'sq-link', 
          `sq-link--variant-${variant}`, 
          `sq-link--size-${size}`].join(' ')}
        rel={rel}
        target={target}
        title={title}
        {...props}
      >
        {text}
      </a>
      {isNewTab && `(externe)`}
    </>
  );
}

