import React from "react";

type ParagraphClickHandler = (
  event: React.MouseEvent<HTMLParagraphElement>
) => void;
type SpanClickHandler = (event: React.MouseEvent<HTMLSpanElement>) => void;

type DivClickHandler = (event: React.MouseEvent<HTMLDivElement>) => void;
type ButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;
type AnchorClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => void;
type ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;
type SubmitHandler = (event: React.FormEvent<HTMLFormElement>) => void;
export type {
  ParagraphClickHandler,
  DivClickHandler,
  ButtonClickHandler,
  AnchorClickHandler,
  ChangeHandler,
  SubmitHandler,
  SpanClickHandler,
};
