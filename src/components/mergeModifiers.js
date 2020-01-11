export default function mergeModifiers(baseModifiers, newModifiers) {
  const modifiers = { ...baseModifiers }

  if (!newModifiers) {
    return baseModifiers
  }

  Object.keys(newModifiers).forEach(name => {
    modifiers[name] = baseModifiers[name]
      ? date => baseModifiers[name](date) || newModifiers[name](date)
      : newModifiers[name]
  })

  return modifiers
}