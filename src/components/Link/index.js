import NextLink from 'next/Link';

export default function Link({children, href, ...props}){
    return(
        <NextLink legacyBehavior href={href} passHref>
            <a {...props}>{children}</a>
        </NextLink>
    )
}