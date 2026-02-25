import type { Components } from 'react-markdown';

import {
  AnchorElement,
  BlockquoteElement,
  ImageElement,
  ListElement,
  OrderedListElement,
  SectionSubTitleElement,
  SeparatorElement,
  SubTitleElement,
  TextElement,
  TitleElement,
} from './SimpleComponents';
import { CodeElement } from './SyntaxHighlightComponent';
import {
  TDElement,
  THElement,
  THeadElement,
  TRElement,
  TableElement,
} from './TableElementComponent';

export const MarkdownComponents: Components = {
  h1: TitleElement,
  h2: SubTitleElement,
  h3: SectionSubTitleElement,
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
