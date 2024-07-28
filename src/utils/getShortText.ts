export const getShortText = (text: string, limit: number) => {
  if (text.length > limit) {
    return `${text.substring(0, limit).trim()}...`
  }
  return text
}
