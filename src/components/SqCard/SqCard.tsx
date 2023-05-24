import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export function SqCard({titreColonne, html, image, lien, couleurTrait}) {
  return (
    <>
        <h3 className={`titre-trait--${couleurTrait}`}>{titreColonne}</h3>
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image.url}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {html}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </>
  );
}