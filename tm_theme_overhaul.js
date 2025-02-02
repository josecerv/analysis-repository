(function () {
    // Check if the sidebar style has already been added to the document
    if (document.getElementById('typingmindSidebarFixMerged')) return;
  
    // Create a new style element for the sidebar
    const sidebarStyle = document.createElement('style');
    sidebarStyle.id = 'typingmindSidebarFixMerged';
    sidebarStyle.type = 'text/css';
  
    // Define the CSS styles for various elements in the sidebar
    sidebarStyle.innerHTML = `
      [data-element-id="workspace-bar"],
      [data-element-id="side-bar-background"],
      [data-element-id="sidebar-beginning-part"],
      [data-element-id="sidebar-middle-part"] {
        background-color: #F9F9F9 !important;
      }
  
      [data-element-id="new-chat-button-in-side-bar"] {
        background-color: #E3E3E3 !important; 
        color: #000 !important;
      }
      [data-element-id="new-chat-button-in-side-bar"] * {
        color: #000 !important;
      }
  
      [data-element-id="search-chats-bar"] {
        background-color: #fff !important;
        color: #000 !important;
        border: 1px solid #ccc !important;
      }
      [data-element-id="search-chats-bar"][placeholder]::placeholder,
      [data-element-id="search-chats-bar"].placeholder\\:text-white\\/70::placeholder,
      [data-element-id="search-chats-bar"].jsx-7078ffb922cb3c38::placeholder {
        color: rgba(0, 0, 0, 0.6) !important;
        opacity: 1 !important;
        -webkit-text-fill-color: rgba(0, 0, 0, 0.6) !important;
      }
      [data-element-id="search-chats-bar"]::-webkit-input-placeholder {
        color: rgba(0, 0, 0, 0.6) !important;
        opacity: 1 !important;
        -webkit-text-fill-color: rgba(0, 0, 0, 0.6) !important;
      }
      [data-element-id="search-chats-bar"]::-moz-placeholder {
        color: rgba(0, 0, 0, 0.6) !important;
        opacity: 1 !important;
      }
      [data-element-id="search-chats-bar"]:-ms-input-placeholder {
        color: rgba(0, 0, 0, 0.6) !important;
        opacity: 1 !important;
      }
  
      [data-element-id="workspace-bar"] *:not(svg):not(path)[class*="text-white"],
      [data-element-id="workspace-bar"] *:not(svg):not(path)[class*="text-white/"],
      [data-element-id="workspace-bar"] *:not(svg):not(path)[class*="text-gray-"],
      [data-element-id="workspace-bar"] *:not(svg):not(path)[class*="dark:text-white"],
      [data-element-id="side-bar-background"] *:not(svg):not(path)[class*="text-white"],
      [data-element-id="side-bar-background"] *:not(svg):not(path)[class*="text-white/"],
      [data-element-id="side-bar-background"] *:not(svg):not(path)[class*="text-gray-"],
      [data-element-id="side-bar-background"] *:not(svg):not(path)[class*="dark:text-white"] {
        color: #000 !important;
        opacity: 1 !important;
        --tw-text-opacity: 1 !important;
      }
  
      [data-element-id="custom-chat-item"]:hover {
        background-color: #E3E3E3 !important;
      }
      [data-element-id="selected-chat-item"] {
        background-color: #E3E3E3 !important;
      }
  
      [data-element-id="custom-chat-item"] button[aria-label="Delete Chat"],
      [data-element-id="custom-chat-item"] button[aria-label="Favorite Chat"],
      [data-element-id="custom-chat-item"] button[aria-label="Chat settings"],
      [data-element-id="selected-chat-item"] button[aria-label="Delete Chat"],
      [data-element-id="selected-chat-item"] button[aria-label="Favorite Chat"],
      [data-element-id="selected-chat-item"] button[aria-label="Chat settings"] {
        display: none !important;
      }
      [data-element-id="custom-chat-item"]:hover button[aria-label="Delete Chat"],
      [data-element-id="custom-chat-item"]:hover button[aria-label="Favorite Chat"],
      [data-element-id="custom-chat-item"]:hover button[aria-label="Chat settings"],
      [data-element-id="selected-chat-item"]:hover button[aria-label="Delete Chat"],
      [data-element-id="selected-chat-item"]:hover button[aria-label="Favorite Chat"],
      [data-element-id="selected-chat-item"]:hover button[aria-label="Chat settings"],
      [data-element-id="custom-chat-item"] button[aria-expanded="true"],
      [data-element-id="selected-chat-item"] button[aria-expanded="true"] {
        display: inline-block !important;
      }
      #headlessui-portal-root {
        display: block !important;
        visibility: visible !important;
        pointer-events: auto !important;
      }
      #headlessui-portal-root [role="menu"] {
        display: block !important;
        visibility: visible !important;
        background-color: white !important;
        color: black !important;
        pointer-events: auto !important;
      }
      #headlessui-portal-root [role="menuitem"] {
        display: flex !important;
        visibility: visible !important;
        pointer-events: auto !important;
      }
  
      [data-element-id="tag-search-panel"] {
        background-color: #F9F9F9 !important; 
        border: 1px solid #ccc !important;
        color: #000 !important;
      }
      [data-element-id="tag-search-panel"] input[type="search"] {
        background-color: #fff !important;
        border: 1px solid #ccc !important;
        color: #000 !important;
      }
      [data-element-id="tag-search-panel"] input[type="checkbox"] {
        appearance: none !important;
        -webkit-appearance: none !important;
        width: 16px !important;
        height: 16px !important;
        border: 1px solid #ccc !important;
        border-radius: 3px !important;
        background-color: #fff !important;
        position: relative !important;
        cursor: pointer !important;
      }
      [data-element-id="tag-search-panel"] input[type="checkbox"]:checked {
        background-color: #2563eb !important;
        border-color: #2563eb !important;
      }
      [data-element-id="tag-search-panel"] input[type="checkbox"]:checked::after {
        content: '' !important;
        position: absolute !important;
        left: 5px !important;
        top: 2px !important;
        width: 4px !important;
        height: 8px !important;
        border: solid white !important;
        border-width: 0 2px 2px 0 !important;
        transform: rotate(45deg) !important;
      }
      [data-element-id="tag-search-panel"] label,
      [data-element-id="tag-search-panel"] p,
      [data-element-id="tag-search-panel"] span,
      [data-element-id="tag-search-panel"] button {
        color: #000 !important;
      }
      [data-element-id="tag-search-panel"] .overflow-auto::-webkit-scrollbar {
        width: 8px !important;
      }
      [data-element-id="tag-search-panel"] .overflow-auto::-webkit-scrollbar-track {
        background: #f1f1f1 !important;
        border-radius: 4px !important;
      }
      [data-element-id="tag-search-panel"] .overflow-auto::-webkit-scrollbar-thumb {
        background: #c1c1c1 !important;
        border-radius: 4px !important;
      }
      [data-element-id="tag-search-panel"] .overflow-auto::-webkit-scrollbar-thumb:hover {
        background: #a1a1a1 !important;
      }
      [data-element-id="tag-search-panel"] .overflow-auto {
        scrollbar-width: thin !important;
        scrollbar-color: #c1c1c1 #f1f1f1 !important;
      }
  
      [data-element-id="chat-folder"] textarea,
      [data-element-id="custom-chat-item"] textarea,
      [data-element-id="selected-chat-item"] textarea,
      [data-element-id="side-bar-background"] textarea {
        background-color: #fff !important;
        color: #000 !important;
        border: 1px solid #ccc !important;
      }
      [data-element-id="chat-folder"] textarea:focus,
      [data-element-id="custom-chat-item"] textarea:focus,
      [data-element-id="selected-chat-item"] textarea:focus,
      [data-element-id="side-bar-background"] textarea:focus {
        background-color: #fff !important;
        color: #000 !important;
        border-color: #2563eb !important;
        box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2) !important;
      }
    `;
  
    // Append the style element to the document head
    document.head.appendChild(sidebarStyle);
  
    // Create a MutationObserver to re-add the style if it gets removed
    const obs = new MutationObserver(() => {
      if (!document.getElementById('typingmindSidebarFixMerged')) {
        document.head.appendChild(sidebarStyle);
      }
    });
    obs.observe(document.body, { childList: true, subtree: true });
  
    // Function to fix the placeholder text in the search bar
    function fixSearchPlaceholder() {
      const searchInput = document.querySelector('[data-element-id="search-chats-bar"]');
      if (searchInput && !searchInput.placeholder) {
        searchInput.setAttribute('placeholder', 'Search chats');
      }
    }
    // Add event listener to fix the search placeholder on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', fixSearchPlaceholder);
    fixSearchPlaceholder();
  
    console.log("TypingMind Sidebar Mods loaded.");
  })();
  
  // Define selectors for various elements
  const SELECTORS = {
    CODE_BLOCKS: 'pre code',
    RESULT_BLOCKS: 'details pre',
    USER_MESSAGE_BLOCK: 'div[data-element-id="user-message"]',
    CHAT_SPACE: '[data-element-id="chat-space-middle-part"]'
  };
  
  // Create a new style element for the main chat space
  const mainStyleEl = document.createElement('style');
  mainStyleEl.textContent = `
    [data-element-id="chat-space-middle-part"] .prose.max-w-full *:not(
      pre, pre *, code, code *,
      .flex.items-start.justify-center.flex-col.gap-2 *,
      .text-xs.text-gray-500.truncate,
      .italic.truncate.hover\\:underline
    ),
    [data-element-id="chat-space-middle-part"] [data-element-id="user-message"] > div {
      font-family: ui-sans-serif, -apple-system, system-ui,
                   "Segoe UI", Helvetica, "Apple Color Emoji",
                   Arial, sans-serif, "Segoe UI Emoji",
                   "Segoe UI Symbol" !important;
      font-size: 14px !important;
      line-height: 21px !important;
      color: rgb(13, 13, 13) !important;
    }
  
    [data-element-id="chat-space-middle-part"] .prose.max-w-full,
    [data-element-id="chat-space-middle-part"] [data-element-id="user-message"] {
      font-family: ui-sans-serif, -apple-system, system-ui,
                   "Segoe UI", Helvetica, "Apple Color Emoji",
                   Arial, sans-serif, "Segoe UI Emoji",
                   "Segoe UI Symbol" !important;
      font-size: 14px !important;
      line-height: 21px !important;
      color: rgb(13, 13, 13) !important;
    }
  
    [data-element-id="chat-space-middle-part"] .text-xs.text-gray-500.truncate,
    [data-element-id="chat-space-middle-part"] .italic.truncate.hover\\:underline {
      font-size: unset !important;
      line-height: unset !important;
      font-family: unset !important;
    }
  
    [data-element-id="chat-space-middle-part"] .flex.items-start.justify-center.flex-col.gap-2 {
      font-size: unset !important;
      line-height: unset !important;
      font-family: unset !important;
      color: unset !important;
    }
  
    [data-element-id="chat-space-middle-part"] [data-element-id="response-block"]:has([data-element-id="user-message"]) [data-element-id="chat-avatar-container"] {
      display: none !important;
    }
    [data-element-id="chat-space-middle-part"] [data-element-id="user-message"] {
      margin-left: auto !important;
      margin-right: 0 !important;
      display: block !important;
      max-width: 70% !important;
      border-radius: 1.5rem !important;
    }
  
    [data-element-id="chat-space-middle-part"] pre:has(div.relative) {
      background-color: #F9F9F9 !important;
      border: 1px solid #ccc !important;
      border-radius: 0.5rem !important;
    }
  
    [data-element-id="chat-space-middle-part"] pre.mb-2.overflow-auto.text-sm.border.border-gray-200.rounded.bg-gray-100 {
      background-color: #000 !important;
      color: #fff !important;
      border: none !important;
      padding: 8px !important;
      border-radius: 4px !important;
      white-space: pre-wrap !important;
      word-wrap: break-word !important;
      overflow-x: hidden !important;
    }
  
    [data-element-id="chat-space-middle-part"] pre > div.relative {
      position: relative !important;
    }
  
    [data-element-id="chat-space-middle-part"] pre > div.relative > div.sticky {
      position: sticky !important;
      top: 0 !important;
      z-index: 10 !important;
      background-color: #F9F9F9 !important;
      border-radius: 0.5rem 0.5rem 0 0 !important;
      border-bottom: 1px solid #ccc !important;
    }
  
    [data-element-id="chat-space-middle-part"] pre > div.relative > div > pre {
      border: none !important;
      background: transparent !important;
      margin: 0 !important;
    }
  
    [data-element-id="chat-space-middle-part"] [data-element-id="response-block"]:hover {
      background-color: transparent !important;
    }
  `;
  // Append the main style element to the document head
  document.head.appendChild(mainStyleEl);
  
  // Function to escape HTML characters in a string
  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
  
  // Function to parse and style text with code blocks and inline code
  function multiStepParse(escapedText) {
    let result = escapedText;
  
    // Replace triple backtick code blocks with styled <pre> elements
    const tripleRegex = /```\s*([\s\S]*?)\s*```/g;
    result = result.replace(tripleRegex, (match, code) => {
      return `<pre style="background:#F9F9F9; border:1px solid #ccc; padding:6px; border-radius:0.5rem; white-space:pre-wrap;">${code}</pre>`;
    });
  
    // Replace single backtick inline code with bold <span> elements
    const singleBacktickRegex = /`([^`]+)`/g;
    result = result.replace(singleBacktickRegex, (m, inlineCode) => {
      return `<span style="font-weight:bold;">${inlineCode}</span>`;
    });
  
    // Replace single quote enclosed text with bold <span> elements
    const singleQuoteRegex = /&#039;([^&#]+)&#039;/g;
    result = result.replace(singleQuoteRegex, (match, contentInside) => {
      return `<span style="font-weight:bold;">${contentInside}</span>`;
    });
  
    return result;
  }
  
  // Function to style a user message element
  function styleUserMessageEl(msgEl) {
    // Mark the message element as processed
    msgEl.setAttribute('data-processed', 'true');
  
    // Apply styles to the message element
    Object.assign(msgEl.style, {
      backgroundColor: '#F4F4F4',
      color: '#000',
      padding: '8px',
      borderRadius: '1.5rem',
      marginBottom: '8px',
      display: 'block'
    });
  
    const rawText = msgEl.textContent || '';
    // If the text doesn't contain special characters, return early
    if (!rawText.match(/[<`']/)) return;
  
    // Escape HTML characters in the raw text
    let safe = escapeHtml(rawText);
  
    const testMarkers = [];
    // Extract and replace test sections with placeholders
    const testRegex = /(&lt;test&gt;)([\s\S]*?)(&lt;\/test&gt;)/g;
    let extracted = safe.replace(testRegex, (m, openTag, inner, closeTag) => {
      const placeholder = `__TEST_SECTION_${testMarkers.length}__`;
      testMarkers.push({ placeholder, openTag, inner, closeTag });
      return placeholder;
    });
  
    // Parse the extracted text for code and inline styles
    extracted = multiStepParse(extracted);
  
    // Replace placeholders with parsed test sections
    testMarkers.forEach((tm) => {
      const parsedInner = multiStepParse(tm.inner);
      const replaced = `${tm.openTag}<span style="font-weight:bold;">${parsedInner}</span>${tm.closeTag}`;
      extracted = extracted.replace(tm.placeholder, replaced);
    });
  
    // Update the message element's inner HTML with the styled content
    const container = msgEl.querySelector('div');
    if (container) {
      container.innerHTML = extracted;
    } else {
      msgEl.innerHTML = `<div>${extracted}</div>`;
    }
  }
  
  // Function to style all user message elements
  function styleUserMessages() {
    const userMessages = document.querySelectorAll(SELECTORS.USER_MESSAGE_BLOCK);
    userMessages.forEach((msgEl) => {
      // Skip messages that are being edited or already processed
      if (msgEl.closest('.editing')) return;
      if (msgEl.hasAttribute('data-processed')) return;
  
      styleUserMessageEl(msgEl);
    });
  }
  
  // Function to handle JSON code blocks
  function handleJsonCodeBlocks() {
    const codeEls = document.querySelectorAll(SELECTORS.CODE_BLOCKS);
    codeEls.forEach(codeEl => {
      // Skip code blocks that are being edited
      if (codeEl.closest('.editing')) return;
  
      // Check if the code block contains JSON with a "code" key
      if (codeEl.textContent.includes('"code"')) {
        try {
          // Parse the JSON and extract the code
          const jsonContent = JSON.parse(codeEl.textContent);
          let cleanCode = jsonContent.code;
          cleanCode = cleanCode.replace(/\\n/g, '\n');
          cleanCode = cleanCode.replace(/^"|"$/g, '');
          codeEl.textContent = cleanCode;
  
          // Apply styles to the code element
          Object.assign(codeEl.style, {
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word'
          });
  
          // Apply styles to the parent <pre> element
          const preEl = codeEl.closest('pre');
          if (preEl) {
            Object.assign(preEl.style, {
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word'
            });
          }
        } catch (err) {
          console.error('Error parsing JSON code:', err);
        }
      }
    });
  }
  
  // Function to style sandbox output blocks
  function styleSandboxOutputs() {
    const preEls = document.querySelectorAll(SELECTORS.RESULT_BLOCKS);
    preEls.forEach(preEl => {
      // Skip output blocks that are being edited
      if (preEl.closest('.editing')) return;
  
      // Check if the output block contains specific identifiers
      if (preEl.textContent.includes('SANDBOX_ID') || preEl.textContent.includes('STANDARD_OUTPUT')) {
        // Apply styles to the output block
        Object.assign(preEl.style, {
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          overflowX: 'hidden',
          background: '#000',
          color: '#fff',
          padding: '8px',
          borderRadius: '4px'
        });
        // Apply styles to the parent container if it exists
        const container = preEl.closest('.pb-6');
        if (container) {
          container.style.overflowX = 'hidden';
        }
      }
    });
  }
  
  // Function to improve the display of text elements
  function improveTextDisplay() {
    styleUserMessages();
    handleJsonCodeBlocks();
    styleSandboxOutputs();
  }
  
  // Add event listener to improve text display on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', improveTextDisplay);
  
  // Create a MutationObserver to reapply styles when the DOM changes
  const observer = new MutationObserver((mutations) => {
    let reapply = false;
    for (const mutation of mutations) {
      if (mutation.addedNodes.length) {
        reapply = true;
        break;
      }
      if (
        mutation.type === 'characterData' ||
        (mutation.type === 'childList' &&
         mutation.target.matches &&
         mutation.target.matches(SELECTORS.USER_MESSAGE_BLOCK))
      ) {
        reapply = true;
        break;
      }
    }
    if (reapply) {
      setTimeout(improveTextDisplay, 0);
    }
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true
  });
  
  console.log("typingmind-custom-with-sidebar.js: Loaded!");