import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {SqTypo} from '../SqTypo';

import { CardActionArea } from '@mui/material';

export function SqNavCard({titreColonne, html, image, lien, couleurTrait}) {
    const parsedHtml = {__html:html}
  return (
    <>
        <h3 className={`titre-trait--${couleurTrait}`}>{titreColonne}</h3>
        <Card>
            <CardActionArea href={lien}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image.url}
                    alt="green iguana"
                />
                <CardContent>
                    <SqTypo variant="body2" dangerouslySetInnerHTML={parsedHtml}>
                    </SqTypo>
                </CardContent>
            </CardActionArea>
        </Card>
    </>
  );
}