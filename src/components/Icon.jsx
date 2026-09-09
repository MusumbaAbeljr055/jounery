import sprites from '../assets/icons.svg';

export default function Icon({ name, size = 24, className = '', ...props }) {
  return <svg className={`sprite-icon ${className}`} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...props}><use href={`${sprites}#${name}`} /></svg>;
}
