/* eslint-disable @typescript-eslint/no-misused-promises */
import AddComent from '@/app/components/AddComent'
import { Comment } from '@/app/components/Comment'
import { getXataClient } from '@/xata'
import { auth, currentUser } from '@clerk/nextjs'
import { Card } from '@nextui-org/react'
import { revalidatePath } from 'next/cache'
import { Toaster } from 'sonner'
import { z } from 'zod'

const schema = z.object({
  username: z.string(),
  content: z.string().min(5).max(200),
})

export default async function Comments(): Promise<JSX.Element> {
  // Clerk
  const { userId } = auth()
  const user = await currentUser()
  const imageUrl = user?.imageUrl
  const username = user?.username

  // XataDB
  const xataClient = getXataClient()
  const comments = await xataClient.db.comments.getMany()

  async function createComment(formData: FormData): Promise<void> {
    'use server'
    try {
      if (userId !== null) {
        const parsedForm = schema.parse({
          content: formData.get('content'),
          username,
        })
        const newRecord = { ...parsedForm, userId, imageUrl }
        const xataClient = getXataClient()
        await xataClient.db.comments.create(newRecord)
        revalidatePath('/comments')
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function deleteComment(
    commentId: string,
    clerkId: string,
  ): Promise<void> {
    'use server'
    try {
      if (userId === clerkId) {
        const xataClient = getXataClient()
        await xataClient.db.comments.delete(commentId)
        revalidatePath('/comments')
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function isLiked(commentId: string): Promise<boolean> {
    'use server'
    try {
      const xataClient = getXataClient()
      const record = await xataClient.db.comments.read(commentId)
      const currentUser = user?.username

      if (record !== null && currentUser !== undefined) {
        const isLiked = record.likedBy.includes(currentUser)
        return isLiked
      }
      return false
    } catch (error) {
      console.log(error)
      return false
    }
  }

  async function incrementLikes(commentId: string): Promise<void> {
    'use server'
    try {
      const xataClient = getXataClient()
      const record = await xataClient.db.comments.read(commentId)
      const currentUser = user?.username

      if (record !== null && currentUser !== undefined) {
        console.log(record.likedBy)

        const isLiked = record.likedBy.includes(currentUser)

        if (isLiked === true) {
          const updatedLikedBy = record.likedBy.filter(
            (user: string | null) => user !== currentUser,
          )

          await xataClient.db.comments.update(commentId, {
            likedBy: updatedLikedBy,
            numberLikes: { $decrement: 1 },
          })
          return
        }
        await xataClient.db.comments.update(commentId, {
          likedBy: [...record.likedBy, currentUser],
          numberLikes: { $increment: 1 },
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="grid place-items-center pt-4">
      <Toaster position="bottom-right" />
      <Card className="flex w-full max-w-5xl flex-col gap-4">
        <div className="flex w-full flex-col gap-4 p-6">
        <header>
          <div className="relative w-fit">
            <h3>Comentarios</h3>
            <div className="absolute -right-8 -top-3 rounded-3xl bg-zinc-800 px-2 text-white">
              {comments.length}
            </div>
          </div>
        </header>
        <div className="flex flex-col">
          <AddComent userId={userId} handleCreateComment={createComment} />
        </div>
        </div>
        <article className="flex max-h-[25rem] flex-col gap-8 overflow-y-auto p-6">
          {comments.map((comment) => (
            <div key={comment.id} className="flex flex-col">
              <Comment
                username={comment.username}
                content={comment.content}
                imageurl={comment.imageUrl}
                numberLikes={comment.numberLikes}
                handleDeleteComment={deleteComment}
                commentId={comment.id}
                clerkId={comment.userId}
                userId={userId}
                isLiked={isLiked}
                incrementLikes={incrementLikes}
              />
            </div>
          ))}
        </article>
      </Card>
    </section>
  )
}
