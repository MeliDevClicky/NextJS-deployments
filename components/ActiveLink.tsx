import { useRouter } from 'next/router';
import Link from 'next/link';

interface ActiveLinkProps {
    text: string;
    href: string;
  }
  
const style = {
    color: '#0070f3',
    textDecoration: 'underline'
}

export const ActiveLink: React.FC<ActiveLinkProps> = ({ text, href }) => {
    const { asPath } = useRouter();

    return (
        <Link href={href} style={ asPath === href ? style : undefined}>
            {text}
        </Link>
    )
}
