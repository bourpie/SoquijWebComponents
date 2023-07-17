interface SqLogoSoquijProps {

    /**
     * Où pointe l'URL du logo ?
     */
    href?: string,

    /**
     * Quelle est l'adresse de l'image ?
     */
    src?: string,

    /**
     * Texte alternatif de l'image
     */
    alt?: string,

    /**
     * Hauteur de l'image
     */
    height?: number,

    /**
     * Largeur de l'image
     */
    width?: number

}

export function SqLogoSoquij({
    href, 
    src, 
    alt,
    height = 71,
    width = 170,
    ...props
}:SqLogoSoquijProps) {
  return (
    <>
    {href ? (
      <a style={{display: "block"}}
        href={href}
        {...props}
      >
        <img height={height} width={width} src={src} alt={alt} />
      </a>
    ) : (
      <img height={height} width={width} src={src} alt={alt} />
    )}
    </>
  )
}
