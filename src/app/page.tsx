import form1Configs from "@/form1-configs-data";
import FormModalSystem from "./components/form-modal-system";
import DynamicForm from "./components/forms/dynamic-form";
import form2Configs from "@/form2-configs-data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <DynamicForm initialData={form1Configs}/>
      <FormModalSystem initialData={form2Configs}/>
    </main>
  )
}
