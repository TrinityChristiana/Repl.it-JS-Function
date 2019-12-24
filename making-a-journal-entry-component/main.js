// Define the function the returns the template string
const createJournalEntry = (title, content, author) => {
    return `
      <article class="entry">
        <header>
            <h2>${title}</h2>
        </header>
        <section>${content}</section>
        <footer>
            <time>Written by ${author}</time>
        </footer>
    </article>
    `
  }
  
  /* 
    Invoke the function. Update code below to store 
    return value in a variable.
  */
  createJournalEntry()
  
  // Use console.log to output final HTML string