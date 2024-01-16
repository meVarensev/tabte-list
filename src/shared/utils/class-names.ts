type Mods = Record<string, boolean | string | undefined>;
/**
 * Функция для создания строки классов на основе основного класса,
 * модификаторов и дополнительных классов.
 * @param {string} cls - Основной класс.
 * @param {Mods} mods - Модификаторы в виде объекта.
 * @param {string[]} additional - Дополнительные классы.
 * @returns {string} - Строка с объединенными классами.
 */
export const classNames = (
  cls: string,
  mods: Mods,
  additional: string[]
): string =>
  [
    cls,
    ...additional.filter(Boolean),
    ...Object.keys(mods).filter((key) => mods[key])
  ].join(" ");
