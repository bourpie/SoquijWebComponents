import { SqHeader } from '../components/SqHeader/';
import { SqFooter } from '../components/SqFooter/';
import './page.css';

export const Page: React.FC = () => {

  return (
    <>
    <SqHeader/>
<article>
    <section className="storybook-page">
      <h1>Titre Principal</h1>

<p>Voici un exemple de paragraphe avec un <a href="https://www.openai.com/">lien vers OpenAI</a>. OpenAI est une organisation dédiée à la recherche sur l'intelligence artificielle.</p>

<h2>Sous-titre 1</h2>
<p>La France est un pays situé en Europe occidentale. Elle est connue pour sa culture, sa cuisine et ses monuments historiques comme la Tour Eiffel et le Louvre.</p>

<h2>Sous-titre 2</h2>
<p>Les langages de programmation tels que Python, JavaScript et C++ sont populaires dans le monde du développement web et de l'informatique.</p>

<h2>Sous-titre 3</h2>
<p>Si vous souhaitez en savoir plus sur les voyages, <a href="https://www.lonelyplanet.fr/">visitez Lonely Planet</a>, une source populaire d'informations pour les voyageurs.</p>

<h2>Sous-titre 4</h2>
<p>Le football est un sport très populaire en France. L'équipe nationale française a remporté la Coupe du monde à plusieurs reprises.</p>

<h2>Sous-titre 5</h2>
<p>La cuisine française est renommée pour ses plats délicats comme le foie gras, le coq au vin et les croissants.</p>

<h2>Sous-titre 6</h2>
<p>La littérature française compte de nombreux auteurs célèbres tels que Victor Hugo, Marcel Proust et Simone de Beauvoir.</p>

      </section>
    </article>

    <SqFooter />
    
    </>
      


  );
};
