/**
 * Format a file size in bytes into a human-readable string.
 *
 * Returns an empty string when `bytes` is undefined (e.g. deleted files).
 */
export function formatFileSize(bytes: number | undefined): string {
  if (bytes === undefined) {
    return ''
  }

  if (bytes < 1024) {
    return `${bytes} B`
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`
  }

  if (bytes < 1024 * 1024 * 1024) {
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`
}
