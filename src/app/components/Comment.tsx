/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import { Trash } from '@/app/icons/Trash'
import { Button, ButtonGroup, Card, Image } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
interface CommentProps {
  content?: string | null
  numberLikes: number
  username: string
  clerkId: string
  imageurl?: string | null
  commentId: string
  userId: string | null
  handleDeleteComment: (commentId: string, clerkId: string) => Promise<void>
  incrementLikes: (commentId: string) => Promise<void>
  isLiked: (commentId: string) => Promise<boolean>
}

export const Comment = ({
  username,
  content,
  numberLikes,
  imageurl,
  clerkId,
  commentId,
  userId,
  handleDeleteComment,
  incrementLikes,
  isLiked,
}: CommentProps): JSX.Element => {
  const [likes, setLikes] = useState<number>(numberLikes)
  const [isLike, setIsLike] = useState<boolean>(false)

  useEffect(() => {
    async function getIsLiked(): Promise<void> {
      const isLikedComment = await isLiked(commentId)
      setIsLike(isLikedComment)
    }
    void getIsLiked()
  }, [])

  async function handleLike(): Promise<void> {
    if (isLike) {
      setLikes((prevLikes) => prevLikes - 1)
      setIsLike(false)
      await incrementLikes(commentId)
      return
    }
    setLikes((prevLikes) => prevLikes + 1)
    setIsLike(true)
    await incrementLikes(commentId)
  }

  return (
    <Card className="flex flex-col gap-4 p-4">
      <header className="flex items-center gap-2">
        {imageurl != null ? (
          <Image
            src={imageurl}
            alt="imagen de usuario"
            width={50}
            height={50}
            className="rounded-full"
          />
        ) : (
          <Image
            src="/images/defaultAvatar.png"
            alt="imagen de usuario"
            width={50}
            height={50}
            className="rounded-full"
          />
        )}
        <h5>{username}</h5>
      </header>
      <p>{content}</p>
      <footer className="flex items-center justify-between gap-4">
        <ButtonGroup>
          <Button
            className={isLike ? 'bg-rose-600' : ''}
            onClick={handleLike}
            variant="solid"
          >
            👍 {likes}
          </Button>
        </ButtonGroup>
        <div className="flex items-center gap-2">
          {userId === clerkId && (
            <button
              className="font-bold text-zinc-500 transition-all duration-300 ease-in-out hover:text-rose-700"
              onClick={async () => {
                toast.promise(handleDeleteComment(commentId, clerkId), {
                  loading: 'Eliminando comentario...',
                  success: 'Comentario eliminado',
                  error: 'Error al eliminar el comentario',
                })
              }}
            >
              <Trash className="h-6 w-6" />
            </button>
          )}
        </div>
      </footer>
    </Card>
  )
}
