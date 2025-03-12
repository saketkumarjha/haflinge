
import { cn } from '@/app/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageSrc?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Card({
  title,
  description,
  imageSrc,
  className,
  children,
}: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        'bg-white rounded-lg shadow-lg overflow-hidden transition-shadow hover:shadow-xl',
        className
      )}
    >
      {imageSrc && (
        <div className="relative h-48 w-full">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {children}
      </div>
    </motion.div>
  );
}