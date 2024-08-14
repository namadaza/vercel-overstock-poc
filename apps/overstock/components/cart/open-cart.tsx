import clsx from 'clsx';

function ShoppingBagIcon({ className }: { className: string }) {
  return <svg aria-hidden={true} className={className} fill='currentColor' height={24} role="presentation" viewBox="0 0 24 24" width={24}>
    <path d="M12 2c2.761 0 5 2.089 5 4.667V8h2.2a.79.79 0 0 1 .8.778v12.444a.79.79 0 0 1-.8.778H4.8a.789.789 0 0 1-.8-.778V8.778A.79.79 0 0 1 4.8 8H7V6.667C7 4.09 9.239 2 12 2zm6.4 7.556H5.6v10.888h12.8V9.556zm-6.4-6c-1.84 0-3.333 1.392-3.333 3.11V8h6.666V6.667c0-1.719-1.492-3.111-3.333-3.111z"></path>
  </svg>
}

export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center text-white">
      <ShoppingBagIcon
        className={clsx('h-8 w-8', className)}
      />

      {quantity ? (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-blue-600 text-[11px] font-medium text-white">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
