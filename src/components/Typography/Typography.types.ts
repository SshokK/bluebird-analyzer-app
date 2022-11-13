import type {ElementType, ReactNode} from "react";
import type {TYPOGRAPHY_TYPES} from "./Typography.constants";
import type {TYPOGRAPHY_ALIGNMENT} from "./Typography.constants";

export type TypographyProps = {
  /**
   * Visual type
   */
  type?: TYPOGRAPHY_TYPES;
  /**
   * Content
   */
  children: ReactNode;
  /**
   * Text alignment
   */
  alignment?: TYPOGRAPHY_ALIGNMENT;
  /**
   * Custom class name
   */
  className?: string;
  /**
   * If set, overwrites the default mapped component of the current type
   */
  component?: ElementType;
  /**
   * If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   * Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow).
   */
  shouldTruncate?: boolean;
  /**
   * If true, the element will be a paragraph element.
   */
  shouldRenderParagraph?: boolean;
  /**
   * If true, the text will have a bottom margin.
   */
  shouldAddBottomMargin?: boolean;
}