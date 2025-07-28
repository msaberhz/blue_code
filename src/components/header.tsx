import { Logo } from '@/components/logo';
import { CartSheet } from '@/components/cart-sheet';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <CartSheet />
      </div>
    </header>
  );
}
