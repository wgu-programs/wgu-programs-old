import React, { useState } from 'react';
// Import the Icon component from wherever it's located in your React project
import { Icon } from '@astrojs/starlight/components';

const CardComponent = ({ icon, title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className="card sl-flex">
      <p className="title sl-flex" onClick={toggleContent}>
        {icon && <Icon name={icon} className="icon" size="1.333em" />}
        <span dangerouslySetInnerHTML={{ __html: title }} />
      </p>
      <div className={`body ${isExpanded ? 'expanded' : ''}`}>{children}</div>

      <style>
        {`
          .card {
            --sl-card-border: var(--sl-color-purple);
            --sl-card-bg: var(--sl-color-purple-low);
            border: 1px solid var(--sl-color-gray-5);
            background-color: var(--sl-color-black);
            padding: clamp(1rem, calc(0.125rem + 3vw), 2.5rem);
            flex-direction: column;
            gap: clamp(0.5rem, calc(0.125rem + 1vw), 1rem);
          }
          /* ... rest of your CSS ... */
        `}
      </style>
    </article>
  );
};

export default CardComponent;
