/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import { Button, Card, Input } from '@nextui-org/react'
import { redirect } from 'next/navigation'
import { useRef, useState } from 'react'
import { toast } from 'sonner'

interface AddComentProps {
  handleCreateComment: (FormData: FormData) => Promise<void>
  userId: string | null
}

export default function AddComment({
  handleCreateComment,
  userId,
}: AddComentProps): JSX.Element {
  const ref = useRef<HTMLFormElement>(null)
  const [error, setError] = useState<string | null>(null)

  function validateForm(FormData: FormData): boolean {
    const content = FormData.get('content')
    if (content === '' || content === null) {
      setError('El contenido no puede estar vacio')
      return false
    }
    if (typeof content === 'string' && content.length < 5) {
      setError('El contenido debe tener al menos 5 caracteres')
      return false
    }
    setError(null)
    return true
  }

  return (
    <Card className="box-border flex flex-col gap-2 p-4 dark:border-2 dark:border-zinc-700">
      <form
        action={async (FormData) => {
          if (userId === null) {
            redirect('/sign-in')
          }
          if (validateForm(FormData)) {
            toast.promise(handleCreateComment(FormData), {
              loading: 'Publicando comentario...',
              success: 'Comentario publicado',
              error: 'Error al publicar el comentario',
            })
            ref.current?.reset()
          }
        }}
        ref={ref}
        className="flex flex-col items-center justify-between gap-6 sm:flex-row"
      >
        <div className="flex w-full items-center gap-2">
          <span className="font-bold text-zinc-500">T</span>
          <Input
            name="content"
            id="content"
            variant="underlined"
            className="w-full"
            label="Comentario"
          />
        </div>
        <Button
          type="submit"
          color="primary"
          className="w-full font-bold sm:w-fit"
        >
          Enviar
        </Button>
      </form>
      <p className="font-bold text-red-500">{error}</p>
    </Card>
  )
}
