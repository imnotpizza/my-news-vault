import * as React from 'react';
import { cn } from '@/lib/utils';

// FIXME: type 개선
type ICard = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>
> & {
  Header: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>
  >;
  Title: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>
  >;
  Description: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>
  >;
  Content: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>
  >;
  Footer: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>
  >;
};

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-lg border border-solid border-mnv-gray-10 bg-card text-card-foreground shadow-md',
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = 'Card';

const Header = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
  ),
);
Header.displayName = 'Card.Header';

const Title = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  ),
);
Title.displayName = 'Card.Title';

const Description = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
  ),
);
Description.displayName = 'Card.Description';

const Content = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  ),
);
Content.displayName = 'Card.Content';

const Footer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
  ),
);
Footer.displayName = 'Card.Footer';

// Compound components 설정
export default Object.assign(Card, {
  Header,
  Title,
  Description,
  Content,
  Footer,
}) as ICard;
