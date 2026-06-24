import type { RequiredDataFromCollectionSlug } from 'payload'

// Editable contact form stored in the Forms collection.
// Mirrors the fields on https://www.musicexpress.org/contact-us
export const contactFormMX: RequiredDataFromCollectionSlug<'forms'> = {
  title: 'Contact Form',
  submitButtonLabel: 'Send Message',
  emails: [
    {
      emailTo: 'musicexpress@maplenet.net',
      replyTo: '{{email}}',
      subject: 'New website message: {{subject}}',
      message: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'You received a new message from the Music Express website.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Name: {{name}}\nEmail: {{email}}\nSubject: {{subject}}\n\n{{message}}',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
  ],
  confirmationType: 'message',
  confirmationMessage: {
    root: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Thank you for contacting us! Someone will be contacting you within 12-24 hours.',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          textFormat: 0,
          version: 1,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  },
  fields: [
    {
      name: 'subject',
      blockName: 'subject',
      blockType: 'text',
      label: 'Subject',
      placeholder: 'What is this regarding?',
      required: true,
      width: 100,
    },
    {
      name: 'message',
      blockName: 'message',
      blockType: 'textarea',
      label: 'Message',
      placeholder: 'Tell us about your event or question...',
      required: true,
      width: 100,
    },
    {
      name: 'name',
      blockName: 'name',
      blockType: 'text',
      label: 'Name',
      placeholder: 'Your full name',
      required: true,
      width: 100,
    },
    {
      name: 'email',
      blockName: 'email',
      blockType: 'email',
      label: 'Email',
      placeholder: 'you@example.com',
      required: true,
      width: 100,
    },
  ],
}

export const contactPageMX = (formId: number | string): RequiredDataFromCollectionSlug<'pages'> => ({
  slug: 'contact-us',
  _status: 'published',
  title: 'Contact Us',
  hero: { type: 'none' },
  layout: [
    {
      blockType: 'pageHeader',
      title: 'Contact Us',
    },
    {
      blockType: 'headingSection',
      text: 'we look forward to hearing from you',
      level: '3',
      color: '#636363',
      fontSize: '20px',
      textAlign: 'center',
      spacingTop: 'lg',
      spacingBottom: 'none',
    },
    {
      blockType: 'headingSection',
      text: 'SHOOT US A MESSAGE, GIVE US A CALL.',
      level: '2',
      color: '#27afcf',
      fontSize: '36px',
      textAlign: 'center',
      spacingTop: 'none',
      spacingBottom: 'md',
    },
    {
      blockType: 'contactInfo',
      phone: '574-536-7147',
      email: 'musicexpress@maplenet.net',
    },
    {
      blockType: 'formBlock',
      enableIntro: false,
      form: formId,
    },
  ],
})
