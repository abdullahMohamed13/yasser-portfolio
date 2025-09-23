'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export interface TextRevealButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  revealColor?: string;
  strokeColor?: string;
  animationDuration?: number;
  glowIntensity?: number;
  borderWidth?: number;
  fontSize?: string;
  letterSpacing?: string;
  variant?: 'default' | 'neon' | 'gradient' | 'pulse';
  triggerOnClick?: boolean;
  resetOnLeave?: boolean;
}

export const TextRevealButton = React.forwardRef<
  HTMLButtonElement,
  TextRevealButtonProps
>(({
  text = "My name",
  revealColor = "var(--color-destructive)",
  animationDuration = 500,
  glowIntensity = 40,
  fontSize = '1.8em',
  letterSpacing = '3px',
  variant = 'default',
  triggerOnClick = false,
  resetOnLeave = true,
  className,
  style,
  ...props
}, ref) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => {
    if (!triggerOnClick) {
      setIsRevealed(true);
    }
  };

  const handleMouseLeave = () => {
    if (resetOnLeave && !triggerOnClick) {
      setIsRevealed(false);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (triggerOnClick) {
      setIsRevealed(!isRevealed);
    }
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 150);
    props.onClick?.(e);
  };

const getRevealStyles = () => {
  return {
    color: revealColor,
    clipPath: isRevealed ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
    borderLeft: `6px solid ${revealColor}`,
  };
};

  const getVariantStyles = () => {
    switch (variant) {
      case 'neon':
        return {
          filter: `drop-shadow(0 0 ${glowIntensity}px ${revealColor}) drop-shadow(0 0 ${glowIntensity * 2}px ${revealColor})`,
          textShadow: `0 0 ${glowIntensity}px ${revealColor}`,
        };
      case 'gradient':
        return {
          background: `linear-gradient(90deg, ${revealColor}, ${revealColor}80)`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          filter: `drop-shadow(0 0 ${glowIntensity}px ${revealColor})`,
        };
      case 'pulse':
        return {
          animation: isRevealed ? `pulse-glow ${animationDuration * 2}ms ease-in-out infinite alternate` : 'none',
          filter: `drop-shadow(0 0 ${glowIntensity}px ${revealColor})`,
        };
      default:
        return {
          filter: `drop-shadow(0 0 ${glowIntensity}px ${revealColor})`,
        };
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes pulse-glow {
            0% { filter: drop-shadow(0 0 ${glowIntensity}px ${revealColor}); }
            100% { filter: drop-shadow(0 0 ${glowIntensity * 2}px ${revealColor}) drop-shadow(0 0 ${glowIntensity * 3}px ${revealColor}80); }
          }
        `}
      </style>
      <button
        ref={ref}
        className={cn(
          "group relative bg-transparent border-none p-0 m-0 h-auto cursor-pointer transition-transform duration-150",
          isClicked && "scale-95",
          className
        )}
        style={{
          fontSize,
          letterSpacing,
          color: 'var(--color-foreground)',
          // WebkitTextStroke: `${borderWidth}px ${strokeColor}`,
          ...style,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        {...props}
      >
        <span className="relative z-10">
          {text}
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0 transition-all"
          style={{
            transitionDuration: `${animationDuration}ms`,
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            ...getRevealStyles(),
            ...(isRevealed ? getVariantStyles() : {}),
          }}
        >
          {text}
        </span>
      </button>
    </>
  );
});

TextRevealButton.displayName = "TextRevealButton";