import './SqNavPrimaire.scss'

export function SqNavPrimaire() {
  return (
    <ul className="sq-nav-primaire">
      <li>
        <a href="">Produits 
        <span
                            className="sq-icon--fleche"
                            aria-hidden="true"
                          >
                            <svg
                              preserveAspectRatio="xMidYMid meet"
                              viewBox="2 -4 32 32"
                              className="SqSvgIcon  SqBarNav-ExpandIcon _oldSyntax"
                              width="32"
                              height="32"
                            >
                              <g>
                                <path
                                  d="M118.957-110.289l-4,4-4-4"
                                  transform="translate(-96.543 119.703)"
                                ></path>
                              </g>
                            </svg>
                          </span>   
      
        </a>
      </li>
      <li><a href="">Formations <span className="sq-icon--fleche"><svg preserveAspectRatio="xMidYMid meet" viewBox="2 -4 32 32" className="SqSvgIcon  SqBarNav-ExpandIcon" width="32" height="32"><g><path d="M118.957-110.289l-4,4-4-4" transform="translate(-96.543 119.703)"></path></g></svg></span></a></li>
      <li><a href="">Trouver une décision</a></li>
    </ul>
  )
}