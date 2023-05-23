import './SqNavPrimaireSmenu.scss'
import { SqLink } from '../SqLink';

export function SqNavPrimaireSmenu() {
  return (
    <div className="sq-nav-primaire--sous-menu">
      <div className="wrapper">
        <div>
          <h3>Tous les produits</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eum.</p>
          <p>Accusantium eius, id eum nam soluta dolor ullam consequuntur numquam.</p>
          <p><a href="">Aller</a></p>
        </div>
        <div>
          <h3>Savoir judiciaire</h3>
          <ul>
              <li><SqLink text="Item 1" variant="megamenu" /></li>
              <li><SqLink text="Item 2" variant="megamenu" /></li>
              <li><SqLink text="Item 3" variant="megamenu" /></li>
              <li><SqLink text="Item 4" variant="megamenu" /></li>

          </ul>
        </div>
        <div>
          <h3>Savoir juridique</h3>
          <ul>
              <li><SqLink text="Item 1" variant="megamenu" /></li>
              <li><SqLink text="Item 2" variant="megamenu" /></li>
              <li><SqLink text="Item 3" variant="megamenu" /></li>
              <li><SqLink text="Item 4" variant="megamenu" /></li>
          </ul>
        </div>
        <div>
          <h3>Informer</h3>
          <ul>
              <li><SqLink text="Item 1" variant="megamenu" /></li>
              <li><SqLink text="Item 2" variant="megamenu" /></li>
              <li><SqLink text="Item 3" variant="megamenu" /></li>
              <li><SqLink text="Item 4" variant="megamenu" /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
