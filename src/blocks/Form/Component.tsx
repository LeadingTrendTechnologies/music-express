'use client'
import type { FormFieldBlock, Form as FormType } from '@payloadcms/plugin-form-builder/types'

import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import RichText from '@/components/RichText'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

import { getClientSideURL } from '@/utilities/getURL'

export type FormBlockType = {
  blockName?: string
  blockType?: 'formBlock'
  enableIntro: boolean
  form: FormType
  introContent?: DefaultTypedEditorState
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Field = any

export const FormBlock: React.FC<
  {
    id?: string
  } & FormBlockType
> = (props) => {
  const {
    enableIntro,
    form: formFromProps,
    form: { id: formID, confirmationMessage, confirmationType, redirect, submitButtonLabel } = {},
    introContent,
  } = props

  const formMethods = useForm({
    defaultValues: formFromProps.fields,
  })
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = formMethods

  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState<boolean>()
  const [error, setError] = useState<{ message: string; status?: string } | undefined>()
  const router = useRouter()

  const onSubmit = useCallback(
    (data: FormFieldBlock[]) => {
      let loadingTimerID: ReturnType<typeof setTimeout>
      const submitForm = async () => {
        setError(undefined)

        const dataToSend = Object.entries(data).map(([name, value]) => ({
          field: name,
          value,
        }))

        loadingTimerID = setTimeout(() => {
          setIsLoading(true)
        }, 1000)

        try {
          const req = await fetch(`${getClientSideURL()}/api/form-submissions`, {
            body: JSON.stringify({
              form: formID,
              submissionData: dataToSend,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          })

          const res = await req.json()

          clearTimeout(loadingTimerID)

          if (req.status >= 400) {
            setIsLoading(false)
            setError({
              message: res.errors?.[0]?.message || 'Internal Server Error',
              status: res.status,
            })
            return
          }

          setIsLoading(false)
          setHasSubmitted(true)

          if (confirmationType === 'redirect' && redirect) {
            const { url } = redirect
            if (url) router.push(url)
          }
        } catch (err) {
          console.warn(err)
          setIsLoading(false)
          setError({
            message: 'Something went wrong.',
          })
        }
      }

      void submitForm()
    },
    [router, formID, redirect, confirmationType],
  )

  return (
    <div className="content-form">
      {enableIntro && introContent && !hasSubmitted && (
        <RichText className="content-form-intro" data={introContent} enableGutter={false} />
      )}

      <FormProvider {...formMethods}>
        {!isLoading && hasSubmitted && confirmationType === 'message' && (
          <div className="content-form-success">
            <RichText data={confirmationMessage} enableGutter={false} />
          </div>
        )}
        {isLoading && !hasSubmitted && <p className="content-form-intro">Loading, please wait...</p>}

        {!hasSubmitted && (
          <form id={formID} onSubmit={handleSubmit(onSubmit)}>
            <div className="content-form-fields">
              {error && (
                <p className="content-form-error">{`${error.status || '500'}: ${error.message || ''}`}</p>
              )}

              {formFromProps?.fields?.map((field: Field, index: number) => {
                const { blockType, name, label, required } = field

                if (blockType === 'message') {
                  return (
                    <div className="content-form-intro" key={index}>
                      {field.message && <RichText data={field.message} enableGutter={false} />}
                    </div>
                  )
                }

                if (blockType === 'checkbox') {
                  return (
                    <div className="content-form-field" key={index}>
                      <label className="content-form-label flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="w-auto!"
                          {...register(name, { required })}
                        />
                        {label}
                        {required && <span className="content-form-required">*</span>}
                      </label>
                    </div>
                  )
                }

                return (
                  <div className="content-form-field" key={index}>
                    {label && (
                      <label className="content-form-label" htmlFor={name}>
                        {label}
                        {required && <span className="content-form-required"> *</span>}
                      </label>
                    )}

                    {blockType === 'textarea' ? (
                      <textarea
                        id={name}
                        placeholder={field.placeholder}
                        rows={5}
                        {...register(name, { required })}
                      />
                    ) : blockType === 'select' ? (
                      <select id={name} {...register(name, { required })}>
                        <option value="">Select…</option>
                        {(field.options || []).map(
                          (opt: { label: string; value: string }, i: number) => (
                            <option key={i} value={opt.value}>
                              {opt.label}
                            </option>
                          ),
                        )}
                      </select>
                    ) : (
                      <input
                        id={name}
                        type={
                          blockType === 'email'
                            ? 'email'
                            : blockType === 'number'
                              ? 'number'
                              : 'text'
                        }
                        placeholder={field.placeholder}
                        {...register(name, { required })}
                      />
                    )}

                    {errors[name] && (
                      <span className="text-[12px] text-[#b91c1c]">This field is required.</span>
                    )}
                  </div>
                )
              })}

              <button
                className="me-btn me-btn-teal content-form-submit"
                disabled={isLoading}
                form={formID}
                type="submit"
              >
                {isLoading ? 'Sending...' : submitButtonLabel}
              </button>
            </div>
          </form>
        )}
      </FormProvider>
    </div>
  )
}
