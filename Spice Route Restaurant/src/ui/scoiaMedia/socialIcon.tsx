interface SocialIconProps {
  children: React.ReactNode;
}

export function SocialIcon({ children }: SocialIconProps) {
  return (
    <>
      <div className="border-button-400 flex h-[1.188rem] w-[1.188rem] items-center justify-center rounded-4xl border p-4 lg:h-7.5 lg:w-7.5">
        <a href="#">{children}</a>
      </div>
    </>
  );
}
