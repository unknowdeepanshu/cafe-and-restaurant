function Button({ text, Brown }: { text: string; Brown: boolean }) {
  return (
    <>
      <button
        className={
          Brown
            ? "bg-Orange flex h-5 items-center justify-center rounded-[0.31rem] px-6 py-3 text-[0.6rem] font-bold sm:h-10 sm:rounded-[0.625rem] sm:text-[1.25rem]"
            : `bg-Orange flex h-5 items-center justify-center rounded-[0.31rem] px-6 py-3 text-[0.6rem] font-bold sm:h-10 sm:rounded-[0.625rem] sm:text-[1rem]`
        }
      >
        <a className={Brown ? `text-Brown-700` : `text-CreamBackgournd`}>
          {text}
        </a>
      </button>
    </>
  );
}

export default Button;
