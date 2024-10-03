import React, { useState } from "react";

interface TextTruncateProps {
  text: string;
  maxLength: number;
}

const TextTruncate: React.FC<TextTruncateProps> = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return `${text.substring(0, maxLength)}`;
  };

  return (
    <div>
      <p>
        {isExpanded ? text : truncateText(text, maxLength)}
        {text.length > maxLength && (
          <span 
            style={{ color: "grey", cursor: "pointer" }} 
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? " Show Less" : " ..."}
          </span>
        )}
      </p>
    </div>
  );
};

export default TextTruncate;