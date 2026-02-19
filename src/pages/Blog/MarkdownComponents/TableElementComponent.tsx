import type { ComponentPropsWithoutRef } from 'react';

type TableProps = ComponentPropsWithoutRef<'table'>;

export const TableElement = (props: TableProps) => {
  return (
    <div className="my-6 w-full overflow-x-auto rounded-lg border border-border">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  );
};

type THeadProps = ComponentPropsWithoutRef<'thead'>;

export const THeadElement = (props: THeadProps) => {
  return <thead className="bg-muted/50 text-left" {...props} />;
};

type TRProps = ComponentPropsWithoutRef<'tr'>;

export const TRElement = (props: TRProps) => {
  return <tr className="border-b border-border transition-colors" {...props} />;
};

type THProps = ComponentPropsWithoutRef<'th'>;

export const THElement = (props: THProps) => {
  return (
    <th
      className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
      {...props}
    />
  );
};

type TDProps = ComponentPropsWithoutRef<'td'>;

export const TDElement = (props: TDProps) => {
  return (
    <td
      className="px-4 py-3 align-middle text-foreground transition-colors hover:bg-muted/30"
      {...props}
    />
  );
};
