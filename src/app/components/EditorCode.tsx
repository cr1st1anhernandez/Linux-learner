'use client'
import { Check } from '@/app/icons/Check'
import { Copy } from '@/app/icons/Copy'
import { markdown } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import { EditorState } from '@codemirror/state'
import { Icon } from '@iconify/react/dist/iconify.js'
import { tags as t } from '@lezer/highlight'
import { createTheme } from '@uiw/codemirror-themes'
import CodeMirror from '@uiw/react-codemirror'
import { EditorView } from 'codemirror'
import { useState } from 'react'

const myTheme = createTheme({
  theme: 'dark',
  settings: {
    background: '#18181b',
    foreground: '#8a9199',
    caret: '#e9ac3f',
    selection: '#18181b',
    selectionMatch: '#18181b',
    lineHighlight: '#18181b',
    gutterBackground: '#8a919966',
    gutterForeground: '#8a919966',
  },
  styles: [
    { tag: t.comment, color: '#787b8099' },
    { tag: t.variableName, color: '#f43f5e' },
    { tag: [t.string, t.special(t.brace)], color: '#22c55e' },
    { tag: t.number, color: '#fff' },
    { tag: t.bool, color: '#e9ac3f' },
    { tag: t.null, color: '#e9ac3f' },
    { tag: t.keyword, color: '#3b82f6' },
    { tag: t.operator, color: '#fff' },
    { tag: t.className, color: '#e9ac3f' },
    { tag: t.definition(t.typeName), color: '#e9ac3f' },
    { tag: t.typeName, color: '#fff' },
    { tag: t.angleBracket, color: '#e9ac3f' },
    { tag: t.tagName, color: '#3b82f6' },
    { tag: t.attributeName, color: '#fff' },
  ],
})

interface EditorCodeProps {
  text: string
  header: string
  icon: string
}

export const EditorCode = ({
  text,
  header,
  icon,
}: EditorCodeProps): JSX.Element => {
  const code = `\`\`\`#!/bin/bash${text}`
  const [isCopied, setIsCopied] = useState(false)

  const handleClipBoard = (): void => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 1500)
      })
      .catch((error) => {
        console.error('Error al copiar al portapapeles:', error)
        setIsCopied(false)
      })
  }

  return (
    <div className="relative rounded-md bg-[#18181b] p-4">
      <header className="absolute left-0 top-0 z-10 flex h-12 w-full justify-between rounded-t-md bg-[#18181b] px-4 font-bold text-zinc-300">
        <div className="flex items-center gap-2">
          <Icon icon={icon} />
          <span>{header}</span>
        </div>
        <button
          onClick={handleClipBoard}
          className="flex items-center gap-2 hover:text-white"
        >
          {isCopied ? (
            <>
              <Check className="text-green-500" />
              <span>¡Copiado!</span>
            </>
          ) : (
            <>
              <Copy />
              <span>Copiar código</span>
            </>
          )}
        </button>
      </header>
      <CodeMirror
        value={code}
        theme={myTheme}
        style={{
          fontFamily:
            'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
        className="select-none text-xl"
        basicSetup={{
          lineNumbers: false,
          foldGutter: false,
          dropCursor: false,
          allowMultipleSelections: false,
          indentOnInput: false,
        }}
        extensions={[
          markdown({ codeLanguages: languages }),
          EditorView.editable.of(false),
          EditorState.readOnly.of(true),
          EditorView.theme({
            '&': {
              font: 'system-ui',
              fontWeight: 'bold',
            },
          }),
        ]}
      ></CodeMirror>
    </div>
  )
}
