import './SqButton.scss';

interface ButtonProps {
  /**
   * Variantes
   */
  variant?: 'orange' | 'outline';
  /**
   * Is this the principal call to action on the page?
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
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const SqButton = ({
  variant = 'orange',
  size = 'large',
  href,
  label,
  ...props
}: ButtonProps) => {

  return (
    <>
        {href ? (
          <a 
            href={href}
            className={['btn-soquij', `btn-soquij--${variant}`, `btn-soquij--${size}`].join(' ')}
          >
            {label}
          </a>
        ) : (
        <button
          type="button"
          className={['btn-soquij', `btn-soquij--${variant}`, `btn-soquij--${size}`].join(' ')}
          {...props}
        >
            {label}
        </button>
        )}
    </>
  );
};
