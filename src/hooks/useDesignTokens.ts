import { designTokens } from '../tokens';
import type { DesignTokens } from '../tokens';

/**
 * Hook to get design tokens
 * Users can override this in their app to customize tokens
 */
export function useDesignTokens(): DesignTokens {
  // In future, this could be replaced with a context provider
  // to allow runtime token customization
  return designTokens;
}
