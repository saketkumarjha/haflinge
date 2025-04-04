"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

// Types for our component props
interface CardItem {
  title: string;
  imageSrc: string | StaticImport;
  alt: string;
  description?: string;
}

interface SectionProps {
  title: string;
  description?: string;
  items: CardItem[];
  layout: "grid" | "list" | "alternating";
  cardSize?: "small" | "medium" | "large";
  backgroundColor?: string;
  showMoreButton?: boolean;
  columnsOnMobile?: number;
  columnsOnTablet?: number;
  columnsOnDesktop?: number;
  imageHeight?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  cardTitleClassName?: string;
  cardTextClassName?: string;
}

const ReusableSection: React.FC<SectionProps> = ({
  title,
  description,
  items,
  layout = "grid",
  cardSize = "medium",
  backgroundColor = "bg-gray-50",
  showMoreButton = false,
  columnsOnMobile = 1,
  columnsOnTablet = 2,
  columnsOnDesktop = 3,
  imageHeight = "h-48 sm:h-56 md:h-64 lg:h-72",
  titleClassName = "text-4xl md:text-5xl font-bold mb-6 text-black",
  descriptionClassName = "text-base md:text-lg text-gray-700 mx-auto max-w-4xl px-4 sm:px-6",
  cardTitleClassName = "text-center font-bold text-lg md:text-xl mt-4",
  cardTextClassName = "text-gray-700 mt-2",
}) => {
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Determine grid columns based on props
  const getGridColumns = () => {
    const mobileCol = `grid-cols-${columnsOnMobile}`;
    const tabletCol = `sm:grid-cols-${columnsOnTablet}`;
    const desktopCol = `lg:grid-cols-${columnsOnDesktop}`;
    return `${mobileCol} ${tabletCol} ${desktopCol}`;
  };

  // Card size classes
  const getCardSizeClasses = () => {
    switch (cardSize) {
      case "small":
        return "p-3";
      case "large":
        return "p-5";
      default:
        return "p-4";
    }
  };

  // Render grid layout
  const renderGridLayout = () => {
    return (
      <div className={`grid ${getGridColumns()} gap-6 md:gap-8 px-4 sm:px-0`}>
        {items.map((item, index) => (
          <GridCard
            key={index}
            item={item}
            cardSizeClasses={getCardSizeClasses()}
            imageHeight={imageHeight}
            titleClassName={cardTitleClassName}
            textClassName={cardTextClassName}
            showMoreButton={showMoreButton}
          />
        ))}
      </div>
    );
  };

  // Render list or alternating layout
  const renderListLayout = () => {
    return (
      <div className="space-y-12 px-4 sm:px-0">
        {items.map((item, index) => (
          <ListCard
            key={index}
            item={item}
            isReversed={layout === "alternating" && index % 2 !== 0}
            titleClassName={cardTitleClassName}
            textClassName={cardTextClassName}
            showMoreButton={showMoreButton}
          />
        ))}
      </div>
    );
  };

  return (
    <section className={`py-12 px-0 sm:px-4 ${backgroundColor}`}>
      <div className="container mx-auto px-0 sm:px-6 w-full sm:w-full md:w-full lg:w-[75vw]">
        {/* Header Section */}
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className={titleClassName}>{title}</h1>
          {description && <p className={descriptionClassName}>{description}</p>}
        </motion.div>

        {/* Content Section */}
        {layout === "grid" ? renderGridLayout() : renderListLayout()}
      </div>
    </section>
  );
};

// Grid Card Component
interface GridCardProps {
  item: CardItem;
  cardSizeClasses: string;
  imageHeight: string;
  titleClassName: string;
  textClassName: string;
  showMoreButton: boolean;
}

const GridCard: React.FC<GridCardProps> = ({
  item,
  cardSizeClasses,
  imageHeight,
  titleClassName,
  textClassName,
  showMoreButton,
}) => {
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col ${cardSizeClasses}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className={`overflow-hidden ${imageHeight} rounded-md shadow-md`}>
        <Image
          src={item.imageSrc}
          alt={item.alt}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <h3 className={titleClassName}>{item.title}</h3>
      {item.description && (
        <div>
          <p className={textClassName}>
            {isExpanded
              ? item.description
              : `${item.description.substring(0, 500)}${
                  item.description.length > 500 ? "..." : ""
                }`}
          </p>
          {showMoreButton && item.description.length > 100 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-pink-500 font-semibold hover:text-pink-600 mt-2"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
      )}
    </motion.div>
  );
};

// List Card Component
interface ListCardProps {
  item: CardItem;
  isReversed: boolean;
  titleClassName: string;
  textClassName: string;
  showMoreButton: boolean;
}

const ListCard: React.FC<ListCardProps> = ({
  item,
  isReversed,
  titleClassName,
  textClassName,
  showMoreButton,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isExpanded, setIsExpanded] = React.useState(false);

  // For Read More functionality
  const shortDescription = item.description
    ? item.description.substring(0, 500) + "..."
    : "";

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-8 ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, y: 70 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src={item.imageSrc}
            alt={item.alt}
            width={600}
            height={400}
            className="w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, y: 70 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
      >
        <h3 className={`text-2xl mb-4 text-black${titleClassName.replace(/text-center|mt-4/g, '')}`}>
          {item.title}
        </h3>
        {item.description && (
          <div>
            <p className={textClassName}>
              {isExpanded ? item.description : shortDescription}
            </p>
            {showMoreButton && item.description.length > 250 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-pink-500 font-semibold hover:text-pink-600 mt-4"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ReusableSection;