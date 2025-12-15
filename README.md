# PP000

A [Quarto](https://quarto.org/docs/websites/) Template for University of Michigan Ford School Course Websites

- Contents: <https://github.com/judgelord/PP000>

- Published website: <http://judgelord.github.io/PP000>

# Contents 

- `_quarto.yml` controls the structure of the website (e.g., [navigation](ttps://quarto.org/docs/reference/projects/websites.html) tabs)

- `index.qmd` is home page content

- `syllabus.qmd` is a template syllabus 

- `ford_policies.qmd` is boilerplate content to include in all syllabi (keeping it a separate file makes it easier to update when new guidance comes out)

- `assignments.qmd` is a template assignment guide 

- /slides/ is a folder for slide decks

   - `day1.qmd` is a template [Revealjs](https://quarto.org/docs/presentations/revealjs/) slide deck
   
   - `ford.scss` gives slides a Ford School logo background when added to `theme:`
   
   - `weill.scss` gives slides a Weill Hall background when added to `theme:` (see, e.g., day1 slides)
   
   - `index.qmd` automatically indexes slide decks in the `slides` folder on the slides tab of the website
   
- `michigan.scss` styles all web pages, documents, and slides based on Ford School and [University of Michigan](https://brand.umich.edu/design-resources/colors/) font and color guidance (see [HTML Theming](https://quarto.org/docs/output-formats/html-themes.html))

- /docs/ is where the HTML files for the website are rendered when you build the website---DON'T EDIT MANUALLY

- `.gitignore` is a list of files to ignore (not track or publish)


# To publish for free on GitHub pages

## 1. Make a GitHub account

## 2. On <https://github.com/judgelord/PP000>, click [Use this template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template)

Name this new repository whatever you want the course website address to be (e.g., "PP475")

![](https://docs.github.com/assets/cb-76823/mw-1440/images/help/repository/use-this-template-button.webp)

## 3. Download as a [version-controlled project](https://docs.posit.co/ide/user/ide/guide/tools/version-control.html)

In RStudio:  "New Project"--> "Version Control" in RStudio

![](https://towardsdatascience.com/wp-content/uploads/2022/01/1PPhgC3GyhuLnWjNuUYIVrQ.png)

## 4. Add your content

## 5. [Build/render website](https://quarto.org/docs/websites/#website-preview)

## 6. Commit the changes, and push them to GitHub

(If you don't already use GitHub, you will need to authenticate to push changes to GitHub via [a personal access token](https://happygitwithr.com/https-pat))

## 7. In Settings, configure your GitHub repository to publish from the `/docs` directory of your main branch

![](https://quarto.org/docs/publishing/images/gh-pages-docs-dir.png)
