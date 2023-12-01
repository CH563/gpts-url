![GPTsURL](https://github.com/CH563/gtps-url/blob/main/public/logo.png)

[👉掘金文章](https://juejin.cn/post/7303386068606648359)

# GPTs URL

Discover the GPTs Store by OpenAI | GPTsURL - Share and search GPTs url to use ChatGPT

*Logo used from ChatGPT DALL·E Designs*

## 🚀 Project Structure

🍿 Live preview: [https://www.gptsurl.com](https://www.gptsurl.com)

![GPTsURL](https://github.com/CH563/gtps-url/blob/main/public/image-white.png)

[PageSpeed Insights](https://pagespeed.web.dev/analysis/https-gptsurl-com/hnkd6k6hly?hl=en_US&form_factor=desktop)

![PageSpeed](https://github.com/CH563/gtps-url/blob/main/page-speed.png)

You'll see the following folders and files:

```text
/
├── public/
│   └── favicon.png
|   └── robot.txt
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Any static assets, like images, can be placed in the `public/` directory.

## Dependencies

[Vercel:](https://vercel.com/) used for deploying website

[Vercel Storage Postgres:](https://vercel.com/docs/storage/vercel-postgres) used for storing data.

## Quick start

Clone project

 ```bash
 git clone https://github.com/CH563/gtps-url.git
 ```

### Prepare data

#### create table in your postgres database with sql:

- gpts_list - Used to store GPTs application information
 ```sql
 CREATE TABLE "public"."gpts_lists" (
    "id" int8 NOT NULL,
    "title" varchar,
    "url" varchar,
    "icon" varchar,
    "author" varchar,
    "description" text,
    "content" text,
    "twitter" varchar,
    "youtube" varchar,
    "category" varchar,
    "weights" int4 DEFAULT 0,
    "scores" int4 DEFAULT 0,
    "created_titme" timestamptz DEFAULT now(),
    "search_key" varchar,
    PRIMARY KEY ("id")
);
 ```

 - categories - Used to store GPTs categories
 ```sql
 -- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS categories_id_seq;

-- Table Definition
CREATE TABLE "public"."categories" (
    "id" int4 NOT NULL DEFAULT nextval('categories_id_seq'::regclass),
    "categories_name" varchar(255) NOT NULL,
    PRIMARY KEY ("id")
);
 ```

 - list_categories - Many-to-many relational table for storing GPTs application categorization
```sql
CREATE TABLE "public"."list_categories" (
    "list_id" int4 NOT NULL,
    "category_id" int4 NOT NULL,
    CONSTRAINT "list_categories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id"),
    CONSTRAINT "list_categories_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "public"."gpts_lists"("id"),
    PRIMARY KEY ("list_id","category_id")
);
```

#### Get the GPTs data of zip into your postgres database, Is include 6,876 GPTs

`Data from "site:chat.openai.com/g/ {keyword|category}"`

[Download](https://github.com/CH563/gtps-url/releases/tag/v1.0.0)


### Running Locally

1. Install dependencies
```bash
pnpm install
```

2. Create .env in project
```bash
POSTGRES_URL="postgres://default:xxx@xxx.postgres.vercel-storage.com/verceldb"
```

3. Run the application, the local project runs on http://localhost:4321/
```bash
pnpm run dev
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


## Deploy

### Deploy With Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FCH563%2Fgtps-url&env=POSTGRES_URL&envDescription=Vercel%20Storage%20Postgres%20Link%20Address)

![Deplay Vercel](https://github.com/CH563/gtps-url/blob/main/vercel.png)

### If you find anything wrong, give me an Issues

[Give me the bugs](https://github.com/CH563/gtps-url/issues)

## Thanks to

[Astro](https://astro.build/) for deployment

inspired credit to [GPTsHunter](https://www.GPTsHunter.com), [AllGPTs](https://allgpts.co/)

### Else if this project is helpful to you, buy me a coffee😄

<a href="https://www.buymeacoffee.com/liwen563" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 30px !important;width: 117px !important;" ></a>
