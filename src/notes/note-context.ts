import React from "react"
import { noop } from "../lib/function"
import { Note } from "./note"

type NoteCtx = {
  notes: Note[],
  add(note: Note): void,
  remove(note: Note): void,
}
export const NoteContext = React.createContext<NoteCtx>({
  notes: [],
  add: noop,
  remove: noop,
})

NoteContext.displayName = 'NoteContext'
