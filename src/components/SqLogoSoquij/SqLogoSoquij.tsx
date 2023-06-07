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
    alt?: string

}

export function SqLogoSoquij({
    href, 
    src, 
    alt,
    ...props
}:SqLogoSoquijProps) {
  return (
    <a style={{display: "block"}}
        href={href}
        {...props}
    >
        <img height="71" width="170" src={src} alt={alt} />
    </a>
  )
}
