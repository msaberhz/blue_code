import Link from 'next/link';
import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground border-t">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Logo />
        <nav className="flex gap-4">
            <Link href="/" className="text-sm hover:underline">Home</Link>
            <Link href="/contact" className="text-sm hover:underline">Contact</Link>
        </nav>
        <p className="text-sm text-footer-foreground">
          © {new Date().getFullYear()} BLUE_CODE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
