// countedCategories is an object with categories as keys, and their count in "works" array above as values.
// eg. { all: 3, website: 2, bot: 1 }
// it is used to display filter options with counters
export function countCategories(projects) {
  return projects
    .map((project) => project.categories)
    .flat()
    .reduce(
      (counter, category) => ({
        ...counter,
        [category]: (counter[category] || 0) + 1,
      }),
      {}
    );
}
