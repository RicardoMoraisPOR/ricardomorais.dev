import type { UsesCategory } from './constants';

interface UsesSectionProps {
  category: UsesCategory;
  className?: string;
}

export const UsesSection = ({ category, className }: UsesSectionProps) => {
  return (
    <div
      className={`rounded-xl border border-border/50 bg-card/50 p-6 ${className ?? ''}`}
    >
      <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-1">
        {category.label}
      </p>
      <h2 className="text-xl font-semibold text-foreground mb-5">
        {category.title}
      </h2>
      <ul className="space-y-4">
        {category.items.map((item) => (
          <li key={item.name} className="group">
            <p className="text-sm font-medium text-foreground">{item.name}</p>
            {typeof item.description === 'string' ? (
              <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">
                {item.description}
              </p>
            ) : (
              item.description.map((desc) => (
                <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">
                  {desc}
                </p>
              ))
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
