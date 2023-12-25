import { AiOutlinePlus } from 'react-icons/ai'
import { IoChevronForwardOutline } from 'react-icons/io5'
import { TbUpload } from 'react-icons/tb'

interface Line {
  prompt: string
  command: string
  output: string
}

interface TerminalProps {
  lines: Line[]
}

export const Terminal = ({ lines }: TerminalProps): JSX.Element => {
  return (
    <div className="h-fit w-full rounded-md bg-zinc-950 p-4 text-left">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-red-500"></div>
          <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
          <div className="h-4 w-4 rounded-full bg-green-500"></div>
        </div>
        <div className="flex items-center gap-2">
          <AiOutlinePlus className="h-auto w-6 text-white opacity-30" />
          <TbUpload className="h-auto w-6 text-white opacity-30" />
        </div>
      </header>
      <main className="overflow-x-auto text-sm sm:text-lg">
        {lines.map((line, index) => (
          <div key={index} className="font-bold text-white">
            <p className=" inline-block">
              <code className="inline-block opacity-60">
                <code className="inline align-middle">{line.prompt}</code>
                <IoChevronForwardOutline className="inline h-auto w-5" />
              </code>
              <code className="align-middle opacity-90">{line.command}</code>
            </p>
            <code className="block align-middle opacity-30">{line.output}</code>
          </div>
        ))}
      </main>
    </div>
  )
}
