import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import React from 'react'

const RadioGroupRegister: React.FC<{ onChange?: (value: any) => void }> = ({
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    console.log('RadioGroupRegister value:', value)
    onChange && onChange(value)
  }

  return (
    <RadioGroup className="flex pb-3" onChange={handleChange}>
      <div className="flex items-center justify-center gap-2 text-zinc-500">
        <RadioGroupItem value="aluno" />
        <Label>Aluno</Label>
      </div>
      <div className="flex items-center justify-center gap-2 text-zinc-500">
        <RadioGroupItem value="monitor" />
        <Label>Monitor</Label>
      </div>
      <div className="flex items-center justify-center gap-2 text-zinc-500">
        <RadioGroupItem value="professor" />
        <Label>Professor</Label>
      </div>
    </RadioGroup>
  )
}

export default RadioGroupRegister
