# How to Add a New Project

## 1. Add images

Place your project images in:
- `public/projects/home-section/` — thumbnail shown on the home page card
- `public/projects/detailed-page/<your-project>/` — detailed page screenshots

## 2. Pick an ID

Each project needs a unique `id`. Check the existing IDs in `projects.tsx` and pick the next available number.

## 3. Paste the template at the end of the `projects` array

Add this **before the closing `]`** on the last line of the file:

```tsx
    {
        id: /* unique number */,
        name: 'Your Project Name',
        imgSrc: ['/projects/home-section/your-image.png'],
        description: 'Short description for the card (1-2 sentences).',
        links: [
            githubLink('https://github.com/your-repo'),
            linkedinLink('https://linkedin.com/posts/your-post'),
        ],
        techStack: [pqStack, powerBIStack, excelStack, daxStack],
    },
```

**That's the minimum** — the card on the home page will work.

## 4. Add detailed page content (optional)

For a full project details page, add these fields **inside** the `{ }` after the fields above:

```tsx
        detailedDescription: 'Longer explanation of the project.',
        problemsToSolve: [
            'Question the project answers?',
            'Another question?',
        ],
        skillsDemonstrated: [
            { key: '🧹 Data Cleaning & Preparation', value: 'description' },
            { key: '📊 Core Charts', value: 'Used column, bar, and line charts' },
            { key: '🎨 Dashboard Design', value: 'Designed an intuitive layout' },
        ],
        KPIs: {
            img: '/projects/detailed-page/your-project/kpi-image.png',
            items: [
                { key: 'Metric Name', value: 'Value' },
            ],
        },
        businessValue: [
            'Business benefit one.',
            'Business benefit two.',
        ],
        content: [
            {
                sections: [
                    {
                        img: '/projects/detailed-page/your-project/section-image.png',
                        header: 'Section Heading',
                        details: [
                            {
                                title: 'Chart Title',
                                text: 'Explanation of the chart.',
                                decision: 'Actionable takeaway.',
                            },
                        ],
                    },
                ],
            },
        ],
```

### Content variations

**Text as a list** (use an array of strings):
```tsx
text: [
    "First bullet point",
    "Second bullet point",
]
```

**Section without a title** (omit `title` and `decision`):
```tsx
details: [
    { text: 'Just a paragraph of explanation.' },
]
```

**Section without a decision** (just omit the `decision` field).

## Tech stack shortcuts

| Constant | What it adds |
|----------|-------------|
| `pqStack` | Power Query |
| `powerBIStack` | Power BI |
| `excelStack` | Excel |
| `daxStack` | DAX |

## Link shortcuts

- `githubLink(url, size?)` — "Github Repo" link (`size` defaults to 50, use `23` for smaller)
- `linkedinLink(url, size?)` — "Linkedin Post" link

## Stuck? Ask an AI

> "I have a file `src/store/projects.tsx` with a `projects` array of `ProjectProps` objects. I want to add a new project entry. Here is the interface:
>
> ```tsx
> interface ProjectProps {
>     id: number;
>     name: string;
>     description: string;
>     imgSrc: string[];
>     links: { name: string; href: string; icon: React.ReactNode }[];
>     techStack: { name: string; icon: React.ReactNode }[];
>     detailedDescription?: string;
>     conclusion?: string;
>     content?: { sections: { img: string; header?: string; details: { title?: string; text?: string | string[]; decision?: string }[] }[] }[];
>     problemsToSolve?: string[];
>     skillsDemonstrated?: { key: string; value: string }[];
>     KPIs?: { img: string; items: { key: string; value: string }[] };
>     businessValue?: string[];
> }
> ```
>
> Also available are tech stack constants: `pqStack`, `powerBIStack`, `excelStack`, `daxStack` and link helpers: `githubLink(url, size?)`, `linkedinLink(url, size?)`.
>
> Generate the full project object for a [describe your project] dashboard."
