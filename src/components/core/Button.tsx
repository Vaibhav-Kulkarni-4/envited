export default function Button({
  buttonText,
  extraClasses,
  extraStyles,
  onClick,
}: {
  buttonText: string;
  extraClasses?: string;
  extraStyles?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={`inline-flex flex-row items-center justify-center rounded-xl border border-transparent ${extraClasses}`}
      style={{
        background: "linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)",
      }}
      onClick={onClick}>
      {buttonText}
    </button>
  );
}
