# PP000

A [Quarto](https://quarto.org/docs/websites/) Template for University of Michigan Ford School Course Websites

- Contents: <https://github.com/judgelord/PP000>

- Published website: <http://judgelord.github.io/PP000>

## Contents 

- `syllabus.qmd` is a template syllabus 

- `/slides/` is a folder to put slide decks

   - `day1.qmd` is a template [Revealjs](https://quarto.org/docs/presentations/revealjs/) slide deck
   
   - `ford.scss` gives slides the Ford School logo when added to`theme:`
   
   - `weill.scss` gives slides the Ford School logo when added to`theme:`
   
   - `index.qmd` automatically indexes slide decks in the `slides` folder on the slides tab of the website
   
- `michigan.scss` styles all web pages, documents, and slides based on Ford School and [University of Michigan](https://brand.umich.edu/design-resources/colors/) font and color guidance (see [HTML Theming](https://quarto.org/docs/output-formats/html-themes.html))

- `index.qmd` is home page content

- `ford_policies.qmd` is boilerplate content to include in all syllabi

- `/docs/` is where the HTML files for the website are rendered when you build the website---DON'T EDIT MANUALLY

- `assignments.qmd` is a template assignment guide 

- `.gitignore` is a list of files for GitHub to ignore (not track or publish)

- `_quarto.yml` controls the structure of the website (e.g., [navigation](ttps://quarto.org/docs/reference/projects/websites.html) tabs)


## To publish for free on GitHub pages

1. Make a GitHub account

2. [Fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) (i.e., copy) this template repository (<https://github.com/judgelord/PP000>) to your account and name it your course number, e.g., "PP475" or whatever you want the web address to be

![](https://docs.github.com/assets/cb-34352/mw-1440/images/help/repository/fork-button.webp)

3. Download as a [version-controlled project](https://docs.posit.co/ide/user/ide/guide/tools/version-control.html), e.g., "New Project"--> "Version Control" in Rstudio

![](https://towardsdatascience.com/wp-content/uploads/2022/01/1PPhgC3GyhuLnWjNuUYIVrQ.png)

4. Configure your GitHub repository to publish from the `docs` directory of your main branch in Settings:

![](https://quarto.org/docs/publishing/images/gh-pages-docs-dir.png)
