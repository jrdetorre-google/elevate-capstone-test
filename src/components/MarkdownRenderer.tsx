import React from 'react';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

/**
 * Parses markdown inline formatting (**bold**, *italic*, `code`) and line breaks
 * into semantic React HTML elements without displaying raw asterisks or backticks.
 */
export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
  if (!content) return null;

  // Split lines to handle line breaks and list items
  const lines = content.split('\n');

  const renderFormattedText = (text: string): React.ReactNode[] => {
    // Regular expression matching bold (**...** or __...__), italic (*...* or _..._), and inline code (`...`)
    // Group 1: Bold with **
    // Group 2: Bold with __
    // Group 3: Italic with *
    // Group 4: Italic with _
    // Group 5: Inline code with `
    const regex = /(\*\*([^*]+)\*\*)|(__([^_]+)__)|(\*([^*]+)\*)|(_([^_]+)_)|(`([^`]+)`)/g;

    const elements: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      // Push preceding plain text
      if (match.index > lastIndex) {
        elements.push(text.substring(lastIndex, match.index));
      }

      if (match[2]) {
        // **bold**
        elements.push(
          <strong key={`${match.index}-bold`} className="font-semibold text-slate-100">
            {match[2]}
          </strong>
        );
      } else if (match[4]) {
        // __bold__
        elements.push(
          <strong key={`${match.index}-bold2`} className="font-semibold text-slate-100">
            {match[4]}
          </strong>
        );
      } else if (match[6]) {
        // *italic*
        elements.push(
          <em key={`${match.index}-italic`} className="italic text-slate-300">
            {match[6]}
          </em>
        );
      } else if (match[8]) {
        // _italic_
        elements.push(
          <em key={`${match.index}-italic2`} className="italic text-slate-300">
            {match[8]}
          </em>
        );
      } else if (match[10]) {
        // `code`
        elements.push(
          <code
            key={`${match.index}-code`}
            className="px-1.5 py-0.5 rounded bg-slate-800 text-blue-300 font-mono text-xs sm:text-sm border border-slate-700/50"
          >
            {match[10]}
          </code>
        );
      }

      lastIndex = regex.lastIndex;
    }

    // Push trailing plain text
    if (lastIndex < text.length) {
      elements.push(text.substring(lastIndex));
    }

    return elements;
  };

  return (
    <div className={`space-y-1 ${className}`}>
      {lines.map((line, lineIdx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={lineIdx} className="h-1" />;
        }

        // Bullet list item
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          return (
            <div key={lineIdx} className="flex items-start space-x-2 pl-2">
              <span className="text-blue-400 select-none">•</span>
              <div>{renderFormattedText(trimmed.substring(2))}</div>
            </div>
          );
        }

        return <div key={lineIdx}>{renderFormattedText(line)}</div>;
      })}
    </div>
  );
};
