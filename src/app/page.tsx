import form1Configs from '@/app/data/form1-configs-data'
import FormModalSystem from './components/form-modal-system'
import DynamicForm from './components/forms/dynamic-form'
import form2Configs from '@/app/data/form2-configs-data'
import HexaHealthRouting from './components/navigations/hexahealth-routing'
import { routingData } from './data/routing-data'
import WriteReview from './components/write-review'
import reviewConfigs from './data/review-configs-data'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mt-10">
      <DynamicForm initialData={form1Configs} />
      <FormModalSystem initialData={form2Configs} />
      <WriteReview />
      <div className="bg-sky-100 border-sky-400 p-4 w-1/2 rounded-md">
        <HexaHealthRouting data={routingData} />
      </div>
    </main>
  )
}
