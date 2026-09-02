type ButtonProps = {
  text: string;
  brown?: boolean;
  link?: string;
};

function Button({ text, brown = false, link }: ButtonProps) {
  const className = brown
    ? "bg-Orange flex h-5 items-center justify-center rounded-[0.31rem] px-6 py-3 text-[0.6rem] font-bold text-Brown-700 sm:h-10 sm:rounded-[0.625rem] sm:text-[1.25rem]"
    : "bg-Orange flex h-5 items-center justify-center rounded-[0.31rem] px-6 py-3 text-[0.6rem] font-bold text-CreamBackgournd sm:h-10 sm:rounded-[0.625rem] sm:text-[1rem]";

  if (link) {
    return (
      <a href={link} className={className}>
        {text}
      </a>
    );
  }

  return (
    <button type="button" className={className}>
      {text}
    </button>
  );
}

export default Button;
