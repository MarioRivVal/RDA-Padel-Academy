export default function LetterByLetter({ word, className = "" }) {
  return (
    <>
      {word.split("").map((char, i) => (
        <span key={i} className={className}>
          {char}
        </span>
      ))}
    </>
  );
}
