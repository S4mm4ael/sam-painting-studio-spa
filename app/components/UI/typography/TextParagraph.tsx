export function TextParagraph({text}: {text: string}) {
  return <p className="prose max-w-none prose-lg pt-2 pb-2 dark:prose-invert ">{text}</p>;
}
