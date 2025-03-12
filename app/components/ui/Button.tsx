// app/components/ui/Button.tsx
import { cn } from '@/app/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className,
  onClick,
}: ButtonProps) {
  const baseClasses = cn(
    'btn',
    {
      'btn-primary': variant === 'primary',
      'btn-secondary': variant === 'secondary',
      'btn-outline': variant === 'outline',
    },
    className
  );

  const MotionComponent = motion.div;

  if (href) {
    return (
      <Link href={href} passHref className={baseClasses}>
        <MotionComponent
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full h-full"
        >
          {children}
        </MotionComponent>
      </Link>
    );
  }

  return (
    <button className={baseClasses} onClick={onClick}>
      <MotionComponent
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full h-full"
      >
        {children}
      </MotionComponent>
    </button>
  );
}