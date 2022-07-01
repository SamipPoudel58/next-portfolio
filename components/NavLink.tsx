import { useRouter } from 'next/router';
import Link from 'next/link';

const NavLink = ({
  href,
  exact = false,
  children,
  ...props
}: {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
  className?: string;
}) => {
  const { asPath } = useRouter();
  const isActive = exact ? asPath === href : asPath.startsWith(href);

  if (isActive) {
    props.className += ' active';
  }

  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
};

export default NavLink;
