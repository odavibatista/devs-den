import Link from 'next/link'

interface XLinkProps {
    href: string
    children: React.ReactNode
    className?: string
}

const XLink = ({ href, children }: XLinkProps): JSX.Element => {

    return(
        <XLink href={href}>
            {children}
        </XLink>
    )
}

export default XLink