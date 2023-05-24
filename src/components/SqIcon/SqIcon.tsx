import './SqIcon.scss'

const allowedIcons = [
    "iconLienExterne",
    "iconQuestion",
    "backTriangleBottomRight",
    "backTriangleTopLeft",
    "iconClose",
    "iconInfo",
    "iconInfoBleu",
    "iconInfoBleuSerif",
    "iconAvertissement",
    "iconErreur",
    "iconSucces",
    "iconSuccesVert",
    "iconSoquij",
    "textTitreLogin",
    "iconPasswordVisible",
    "iconPasswordHidden",
    "iconSendEmailMonitor",
    "iconCopy",
    "iconCadenas",
    "iconNoCellPhone",
    "iconErreurSysteme",
    "iconCustomerSupport",
    "iconWindowRefresh",
    "iconClock",
    "iconFacebook",
    "iconTwitter",
    "iconLinkedin",
  ] as const;

type IconProps = {
  icon?: typeof allowedIcons[number]; // Use the array of allowed values
};

/**
 * Liste des icônes et images disponible 
 */
export function SqIcon({ icon, ...props }: IconProps) {
  return (
    <span className={[
        'sq-icon', 
        icon
      ].join(' ').trim()}
      {... props}
    ></span>
  );
}


