import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

import { Error } from '../Error'
import { Width } from '../Width'

const PHONE_PATTERN = /^\+?[0-9().\s-]{7,20}$/

export const PhoneNumber: React.FC<
  TextField & {
    errors: Partial<FieldErrorsImpl>
    register: UseFormRegister<FieldValues>
  }
> = ({ name, defaultValue, errors, label, register, required, width }) => {
  return (
    <Width width={width}>
      <Label htmlFor={name}>
        {label}

        {required && (
          <span className="required">
            * <span className="sr-only">(required)</span>
          </span>
        )}
      </Label>
      <Input
        defaultValue={defaultValue}
        id={name}
        type="tel"
        {...register(name, {
          required,
          pattern: {
            value: PHONE_PATTERN,
            message: 'Vui lòng nhập số điện thoại hợp lệ',
          },
        })}
      />
      {errors[name] && <Error name={name} />}
    </Width>
  )
}
