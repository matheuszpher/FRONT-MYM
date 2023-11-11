import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const RadioGroupRegister = () => {
  return (
    <RadioGroup className="flex">
      <div className="flex items-center justify-center gap-2">
        <RadioGroupItem value="aluno" />
        <Label>Aluno</Label>
      </div>
      <div className="flex items-center justify-center gap-2">
        <RadioGroupItem value="monitor" />
        <Label>Monitor</Label>
      </div>
      <div className="flex items-center justify-center gap-2">
        <RadioGroupItem value="professor" />
        <Label>Professor</Label>
      </div>
    </RadioGroup>
  )
}

export default RadioGroupRegister
