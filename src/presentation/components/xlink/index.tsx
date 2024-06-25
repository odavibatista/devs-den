import Link from "next/link";

interface XLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const XLink = ({ href, children }: XLinkProps): JSX.Element => {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      {children}
    </Link>
  );
};

export default XLink;
