import type { Components } from 'react-markdown';
import {
  TitleElement,
  SubTitleElement,
  TextElement,
  AnchorElement,
  ListElement,
  BlockquoteElement,
  SeparatorElement,
  OrderedListElement,
  ImageElement,
} from './SimpleComponents';
import { CodeElement } from './SyntaxHighlightComponent';
import {
  TableElement,
  THeadElement,
  TRElement,
  THElement,
  TDElement,
} from './TableElementComponent';

export const MarkdownComponents: Components = {
  h1: TitleElement,
  h2: SubTitleElement,
  p: TextElement,
  a: AnchorElement,
  ul: ListElement,
  code: CodeElement,
  table: TableElement,
  thead: THeadElement,
  tr: TRElement,
  th: THElement,
  td: TDElement,
  blockquote: BlockquoteElement,
  hr: SeparatorElement,
  ol: OrderedListElement,
  img: ImageElement,
};
