import DOMPurify from "dompurify";
interface Props extends React.HTMLAttributes<HTMLDListElement> {
  content: string;
}
function RichTextRender({ content, className }: Props) {
  const sanitizedContent = DOMPurify.sanitize(content);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      className={className}
    />
  );
}

export default RichTextRender;
