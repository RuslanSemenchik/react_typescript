// Неизменная API ссылка, к которой позже добавляется параметр country.
export const UNIVERSITIES_API = "http://universities.hipolabs.com/search";

/**
 * Функция собирает полный URL для запроса университетов по стране.
 * countryRaw это исходная строка с названием страны (то, что ввёл пользователь).
 * Как итог возвращается строка с готовым URL, пригодным для отправки запроса.
 */
export function buildUniversitiesUrl(countryRaw: string): string {
  // trim чтобы удалять лишние пробелы в начале или конце строки.
  const country = countryRaw.trim();

  // Формирование строки URL путем добавления к базовому адресу параметра ?country=<название страны>.
  // encodeURIComponent гарантирует, что пробелы и спецсимволы превратятся в корректный формат URL.
  // Например: "United States" -> "United%20States"
  const url = `${UNIVERSITIES_API}?country=${encodeURIComponent(country)}`;

  
  // Как итог собранный URL возвращается, чтобы использовать его сразу же (например, в axios.get) и так далее.
  return url;
}
