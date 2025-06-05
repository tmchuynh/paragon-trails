export function formatTitleToCamelCase(title) {
  return title
    .split(" ")
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
}

export function removeAccents(str) {
  // Normalize to decomposed form, which separates base characters from diacritical marks
  return str
    .replaceAll("đ", "d")
    .replaceAll("Đ", "D") // Remove all combining diacritical marks
    .normalize("NFD")
    .replace(/[\u0300-\u036F]/g, "");
}

export function formatKebabToCamelCase(str) {
  return str
    .split("-")

    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return (
        word
          .replaceAll(/[^a-z0-9]+/g, "")
          .charAt(0)
          .toUpperCase() + word.slice(1).replaceAll(/[^a-z0-9]+/g, "")
      );
    })
    .join("");
}

export function formatCamelCaseToTitle(camelCase) {
  // Add space before capital letters and convert to lowercase
  const withSpaces = camelCase.replace(/([A-Z])/g, " $1").toLowerCase();

  // Capitalize the first letter of each word
  return withSpaces
    .split(" ")
    .map((word) => word.trim())
    .filter((word) => word.length > 0)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
