Here's my repl.it link to this assignment: https://repl.it/@TrinityTerry/Making-a-journal-entry-component

# Making an HTML Component with a Function

Your task is to write a function named `JournalEntry` which should define three parameters.

1. The title of the journal entry
2. The content of the journal entry
3. The author of the journal entry

The `JournalEntry` function should use those three parameters and return a template string that contains the following HTML structure if the following values are sent as arguments - 

- "I made a function today" as the title.
- "It makes a component as a template string" as the content.
- "Melanie Baker" as the author

```html
<article class="entry">
    <header>
        <h2>I made a function today</h2>
    </header>
    <section>It makes a component as a template string</section>
    <footer>
        <time>Written by Melanie Baker</time>
    </footer>
</article>
```

# References

Template strings in JavaScript allow you to inject variables directly into the string that you are building. You have to use the backtick character around the string instead of single quotes or double quotes.

```js
const species = "Dog"
const name = "Zipper"

const output = `${name} the ${species} is checked in.`
```