# copy syllabus template insert to other courses with folders in the same directory
# For example, if PP495 is saved in the same directory as PP000, this script will copy the syllabus template language file from this folder to that one

courses = c(
  "PP495",
  "PP510",
  "PP475-750",
  "PP475"
)

for (i in courses){
  file.copy(
    from = here::here("syllabus-insert.md"),
    to = here::here("..", i, "syllabus-insert.md")
    )
}

