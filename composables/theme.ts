export function useTheme() {
  const { colorModePreference } = useNaiveColorMode()

  return {
    get: colorModePreference.get,
    set: colorModePreference.set,
  }
}
