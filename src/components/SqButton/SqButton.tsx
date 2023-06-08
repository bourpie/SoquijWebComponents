import './SqButton.scss';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/joy/CircularProgress';

interface ButtonProps {
  /**
   * Variantes
   */
  variant: 'contained' | 'outlined' | 'plain';
  /**
   * Styles disponibles
   */
  color?: 'primary' | 'secondary';
  /**
   * L'url. Si externe à SOQUIJ, le lien affiche une icône externe
   */
  href?: string;
  /**
   * What background color to use
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Loading in process
   */
  loading?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Principales intéractions visuelles des boutons. Voir aussi 
 * le guide de style Web :
 * https://xd.adobe.com/view/87c9ca2a-bd97-4d22-a0a5-ff3cfbf80dda-d29a/screen/fb6aef8f-6f85-4383-b771-fb5bb44d2b90]
 */
export const SqButton = ({
  variant = 'contained',
  size = 'large',
  color,
  href,
  label,
  loading = false,
  ...props
}: ButtonProps) => {

  return (
      <Button
        className='btn-soquij'
        variant={variant}
        color={color}
        type="button"
        size={size}
        href={href}
        disabled={loading}
        disableElevation
        {...props}
      >
        {loading && ( 
            <CircularProgress
              variant="plain"
              thickness={3}
              sx={{ 
                '--CircularProgress-size': '24px',
              }}
            />
          )
        }
        <span className='btn-label'>{label}</span> 
      </Button>
  );
};
