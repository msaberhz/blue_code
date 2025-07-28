import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground border-t">
      <div className="container py-8 flex items-center justify-between">
        <Logo />
        <p className="text-sm text-footer-foreground">
          © {new Date().getFullYear()} BLUE_CODE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
