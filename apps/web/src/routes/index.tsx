import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3 className='text-red-600 font-sans'>Welcome Home!</h3>
    </div>
  )
}
