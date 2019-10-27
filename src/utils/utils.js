export const calcAverageRating = ratings => {
  if (!ratings || !ratings.length) {
    return
  }

  if (ratings.length === 1) {
    return Math.round(ratings[0])
  }

  const avg = ratings.reduce((sum, value) => sum + value, 0) / ratings.length
  return Math.round(avg * 2) / 2
}
