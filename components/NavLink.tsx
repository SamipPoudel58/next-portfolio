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
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

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
